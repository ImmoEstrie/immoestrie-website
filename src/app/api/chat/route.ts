import { NextRequest, NextResponse } from "next/server";

// ═══════════════════════════════════════════════════════════════════
// ROUTE API — PROXY VERS PLEXFLOW AI
// ═══════════════════════════════════════════════════════════════════
//
// Cette route s'exécute côté SERVEUR uniquement. C'est ici, et nulle part
// ailleurs, que la clé API doit être utilisée — jamais dans le code
// front-end (ChatWidget.tsx), même si la clé commence par "ik_pub_"
// (préfixe "public"). Passer par le serveur reste la pratique la plus
// sûre et permet de changer d'endpoint sans toucher au front-end.
//
// ⚠️ CE QUI MANQUE ENCORE (à obtenir de Plexflow avant mise en prod) :
//   1. L'URL exacte de leur endpoint (ex: https://api.plexflow.ca/chat)
//   2. Le format exact du corps de requête attendu
//   3. Le nom du champ de réponse contenant le texte de l'assistant
//   4. La méthode d'authentification exacte (header Authorization ?
//      header custom ? clé dans le corps ?)
//   5. Confirmation qu'aucun whitelisting de domaine n'est requis
//
// Une fois ces informations reçues, il suffit d'ajuster les 3 zones
// marquées "TODO" ci-dessous — le reste du composant (ChatWidget.tsx)
// n'a pas besoin de changer.
// ═══════════════════════════════════════════════════════════════════

const PLEXFLOW_API_KEY = process.env.PLEXFLOW_API_KEY;

// TODO: remplacer par l'URL réelle fournie par Plexflow
const PLEXFLOW_ENDPOINT = process.env.PLEXFLOW_API_URL ?? "https://api.plexflow.ca/chat";

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message manquant." }, { status: 400 });
    }

    if (!PLEXFLOW_API_KEY) {
      console.error("PLEXFLOW_API_KEY manquante dans les variables d'environnement.");
      return NextResponse.json(
        { error: "Configuration serveur incomplète." },
        { status: 500 }
      );
    }

    // TODO: ajuster le format du corps de requête selon la doc réelle de Plexflow
    const plexflowResponse = await fetch(PLEXFLOW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // TODO: confirmer le header d'authentification exact attendu par Plexflow
        Authorization: `Bearer ${PLEXFLOW_API_KEY}`,
      },
      body: JSON.stringify({
        message,
        history,
      }),
    });

    if (!plexflowResponse.ok) {
      const errorText = await plexflowResponse.text();
      console.error("Erreur Plexflow AI:", plexflowResponse.status, errorText);
      return NextResponse.json(
        { error: "L'assistant est momentanément indisponible." },
        { status: 502 }
      );
    }

    const data = await plexflowResponse.json();

    // TODO: adapter le nom du champ selon la réponse réelle de Plexflow
    // (ex: data.answer, data.text, data.message, data.output...)
    return NextResponse.json({ reply: data.reply ?? data.answer ?? data.message });
  } catch (error) {
    console.error("Erreur route /api/chat:", error);
    return NextResponse.json(
      { error: "Une erreur interne est survenue." },
      { status: 500 }
    );
  }
}