/**
 * Route API — Assistant IA (architecture préparatoire)
 *
 * Cette route est un squelette prêt à recevoir l'intégration d'un service IA
 * externe. La clé API est lue exclusivement côté serveur (jamais exposée au client).
 *
 * Variables d'environnement requises (voir .env.example) :
 *   AI_API_KEY  — Clé d'API du service IA (ex. OpenAI, Anthropic, etc.)
 *
 * Statut actuel : 501 Not Implemented — en attente de l'API du client.
 */

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Lecture sécurisée côté serveur uniquement — jamais exposée au frontend
  const apiKey = process.env.AI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error: "Configuration manquante",
        message: "La variable d'environnement AI_API_KEY n'est pas définie.",
      },
      { status: 503 }
    );
  }

  // Lecture du corps de la requête
  let body: { message?: string } = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Corps de requête invalide" },
      { status: 400 }
    );
  }

  if (!body.message || typeof body.message !== "string") {
    return NextResponse.json(
      { error: "Le champ 'message' est requis." },
      { status: 400 }
    );
  }

  // TODO: Implémenter l'appel au service IA du client ici.
  // Exemple :
  //   const response = await fetch("https://api.example.com/chat", {
  //     method: "POST",
  //     headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
  //     body: JSON.stringify({ message: body.message }),
  //   });
  //   const data = await response.json();
  //   return NextResponse.json({ reply: data.reply });

  return NextResponse.json(
    {
      error: "Non implémenté",
      message:
        "L'intégration de l'assistant IA n'est pas encore activée. " +
        "Fournissez l'URL et la documentation de l'API du client pour compléter cette route.",
    },
    { status: 501 }
  );
}
