import Navbar from "../componets/Navbar";
import { ChatProvider } from "../componets/ChatContext";
import ChatBot from "../componets/ChatBot";
import ChatBubble from "../componets/ChatBubble";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <ChatProvider>
          <Navbar />
          {children}

          {/* ESTOS DOS SON CLAVE */}
          <ChatBubble />
          <ChatBot />
        </ChatProvider>
      </body>
    </html>
  );
}
