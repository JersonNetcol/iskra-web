"use client";
import { useChat } from "./ChatContext";

export default function ChatBubble() {
  const { setOpen } = useChat();

  return (
    <button
      onClick={() => setOpen(true)}
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-cyan-500 text-white text-2xl
        shadow-xl hover:scale-105 transition
      "
    >
      💬
    </button>
  );
}
