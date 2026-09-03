"use client";

import { useState, useRef, useEffect } from "react";
import Logo from "./Logo";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Bonjour ! Je suis l'assistant de Gestion Immobilière de l'Estrie. Comment puis-je vous aider ?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Appelle notre propre route API (app/api/chat/route.ts), qui elle-même
      // parle à Plexflow AI côté serveur. On ne met JAMAIS la clé ici côté client.
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          // On renvoie l'historique pour donner du contexte à l'assistant.
          // À ajuster une fois le format exact confirmé par Plexflow.
          history: messages,
        }),
      });

      if (!res.ok) throw new Error("Erreur de communication avec l'assistant");

      const data = await res.json();

      // TODO: adapter `data.reply` au nom réel du champ retourné par Plexflow
      // une fois leur documentation reçue (ex: data.answer, data.message, etc.)
      const assistantMessage: Message = {
        role: "assistant",
        content: data.reply ?? "Désolé, je n'ai pas pu traiter votre demande.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Une erreur est survenue. Veuillez réessayer, ou nous joindre directement à info@immoestrie.ca.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Panneau de conversation */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[380px] h-[500px] max-h-[70vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
          {/* En-tête */}
          <div className="bg-[#1a2744] px-4 py-4 flex items-center justify-between shrink-0">
            <div>
              <p className="text-white font-semibold text-sm">
                Gestion Immobilière de l&apos;Estrie
              </p>
              <p className="text-white/60 text-xs">Assistant en ligne</p>
            </div>
            <button
              aria-label="Fermer le chat"
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#1a2744] text-white rounded-br-sm"
                      : "bg-white text-slate-800 border border-slate-200 rounded-bl-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm text-slate-400">
                  En train d&apos;écrire...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Zone de saisie */}
          <div className="border-t border-slate-200 p-3 flex items-center gap-2 shrink-0 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Écrivez votre message..."
              disabled={isLoading}
              className="flex-1 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 disabled:opacity-50"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              aria-label="Envoyer"
              className="w-9 h-9 rounded-full bg-amber-400 hover:bg-amber-500 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center shrink-0 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px] text-white">send</span>
            </button>
          </div>
        </div>
      )}

      {/* Bouton flottant — utilise le logo officiel du site */}
      <button
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-105 overflow-hidden"
      >
        {isOpen ? (
          <div className="w-full h-full rounded-full bg-[#1a2744] flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[26px]">close</span>
          </div>
        ) : (
          <Logo size={56} className="w-full h-full" />
        )}
      </button>
    </>
  );
}