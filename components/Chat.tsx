import React, { useState, useRef, useEffect } from "react";
import { LuSend } from "react-icons/lu";
import ChatBubble from "./ChatBubble";
import AgentResponse from "./AgentReponseTyping"; 
import baseUrl from "@/Utils";

interface Message {
  id: string;
  response: string;
  isUser: boolean;
  timestamp: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      response: "Hi there, this is Gradi's AI agent!",
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Reference for auto-scrolling to the bottom on new messages
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessageText = input.trim();
    const formattedTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // 1. Append User Message
    const userMessage: Message = {
      id: Date.now().toString(),
      response: userMessageText,
      isUser: true,
      timestamp: formattedTime,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // 2. Call your API here
      const response = await fetch(`${baseUrl}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessageText }),
      });
      if (!response.ok) {
        console.log(response);
        return;
      }

      const data = await response.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        response: data.reply || "Sorry, I couldn't process that request.",
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Failed to send message:", error);

      // Fallback error message
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          response: "Something went wrong. Please try again.",
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-lg mx-auto  b rounded-2xl shadow-xl overflow-hidden">
      <div className="p-4 bg-slate-800/80 backdrop-blur border-b border-slate-700/50 flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
        <h2 className="text-white font-semibold text-lg">
          Gradi's AI Assistant
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
        {messages.map((msg) => (
          <ChatBubble
            key={msg.id}
            response={msg.response}
            isUser={msg.isUser}
            timestamp={msg.timestamp}
          />
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <AgentResponse />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 bg-slate-800/50 border-t border-slate-800">
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 focus-within:border-blue-500 rounded-xl px-4 py-2 transition-all">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 bg-transparent text-white placeholder-slate-400 focus:outline-none text-sm"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:hover:bg-blue-600 text-white transition-all duration-200"
            aria-label="Send Message"
          >
            <LuSend className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
