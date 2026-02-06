"use client";

import { useChat } from "./ChatContext";
import { useState, useRef, useEffect } from "react";

type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

export default function ChatBot() {
  const { open, setOpen } = useChat();

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "system",
      content: `
Eres Iskra, el asistente virtual de Iskra Agency.
Ayudas a cotizar servicios de publicidad, branding, redes sociales y desarrollo web.
Hablas de forma clara, moderna y profesional.
Cuando detectes interés comercial, invita a agendar una llamada.
`,
    },
    {
      role: "assistant",
      content:
        "👋 Hola, soy Iskra. Estoy aquí para ayudarte a cotizar o resolver dudas sobre publicidad. ¿Qué te gustaría hacer?",
    },
  ]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  /* AUTOSCROLL */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ENVIAR MENSAJE */
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();

      setMessages((prev) => [...prev, data.message]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Ocurrió un error. Intenta nuevamente.",
        },
      ]);
    }
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
        {messages
          .filter((m) => m.role !== "system")
          .map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-xl px-4 py-2 max-w-[75%] text-sm break-words ${
                  msg.role === "user"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                    : "bg-white/90 text-black shadow"
                }`}
              >
                {msg.content}
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
          className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-600 text-white transition"
        >
          ➤
        </button>
      </div>
    </div>
  );
}
