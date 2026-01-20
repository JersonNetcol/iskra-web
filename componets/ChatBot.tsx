"use client";

import { useChat } from "./ChatContext";
import { useState, useRef, useEffect } from "react";
import { chatTraining } from "./chatTraining";

/* =========================
   FUNCIÓN DE RESPUESTA
========================= */
const getBotResponse = (message: string) => {
  const text = message.toLowerCase();

  for (const item of chatTraining) {
    if (item.keywords.some((k) => text.includes(k))) {
      return item.answer;
    }
  }

  return "🤔 No entendí del todo, pero puedo ayudarte a cotizar servicios de publicidad, branding, redes sociales o páginas web.";
};

export default function ChatBot() {
  const { open, setOpen } = useChat();
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([
    {
      sender: "bot",
      text: "👋 Hola, soy Iskra. Estoy aquí para ayudarte a cotizar o resolver dudas sobre publicidad. ¿Qué te gustaría hacer?",
    },
  ]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  /* =========================
     AUTO SCROLL
  ========================= */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* =========================
     ENVIAR MENSAJE
  ========================= */
  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);

    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: getBotResponse(userMessage),
        },
      ]);
    }, 500);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 w-80 h-[500px] flex flex-col bg-gradient-to-b from-black/90 to-black/70 rounded-2xl shadow-2xl overflow-hidden border border-white/20">
      {/* HEADER */}
      <div className="bg-black/90 px-4 py-3 flex justify-between items-center border-b border-white/20">
        <span className="text-white font-semibold text-lg">Iskra Chat</span>
        <button
          onClick={() => setOpen(false)}
          className="text-white hover:text-red-400 transition text-xl"
        >
          ✕
        </button>
      </div>

      {/* MENSAJES */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-xl px-4 py-2 max-w-[75%] text-sm break-words ${
                msg.sender === "user"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                  : "bg-white/90 text-black shadow"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* INPUT */}
      <div className="p-3 border-t border-white/20 flex gap-2 bg-black/90">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Escribe tu mensaje..."
          className="flex-1 rounded-full px-4 py-2 bg-black/80 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button
          onClick={handleSend}
          className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-600 text-white transition"
        >
          ➤
        </button>
      </div>
    </div>
  );
}
