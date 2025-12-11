import { useState } from "react"
import { X, Send, Bot, User } from "lucide-react"

export default function ChatAgent({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "agent",
      text: "Hello! I'm your AI Network Assistant. How can I help you optimize your network today?",
      timestamp: "10:30 AM"
    }
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: "user",
        text: inputValue,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages([...messages, newMessage])
      setInputValue("")

      // Simulate agent response
      setTimeout(() => {
        const agentResponse = {
          id: messages.length + 2,
          type: "agent",
          text: "I'm analyzing your request. This is a UI demo - full functionality will be available soon.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
        setMessages(prev => [...prev, agentResponse])
      }, 1000)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-24 right-8 w-96 h-[600px] bg-gradient-to-br from-[#1e3a5f]/95 to-[#2c5282]/95 backdrop-blur-xl border border-[#4a90c5]/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 animate-in slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e90ff] to-[#00bfff] p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">AI Network Assistant</h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-xs">Online</span>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-all"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.type === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            {/* Avatar */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.type === "agent"
                  ? "bg-gradient-to-br from-[#1e90ff] to-[#00bfff]"
                  : "bg-gradient-to-br from-[#6cb4e8] to-[#4a90c5]"
              }`}
            >
              {message.type === "agent" ? (
                <Bot className="w-5 h-5 text-white" />
              ) : (
                <User className="w-5 h-5 text-white" />
              )}
            </div>

            {/* Message Bubble */}
            <div
              className={`flex flex-col max-w-[70%] ${
                message.type === "user" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`rounded-2xl p-3 ${
                  message.type === "agent"
                    ? "bg-[#1e3a5f]/60 border border-[#4a90c5]/30"
                    : "bg-gradient-to-r from-[#1e90ff] to-[#00bfff]"
                }`}
              >
                <p className="text-white text-sm leading-relaxed">{message.text}</p>
              </div>
              <span className="text-[#6cb4e8] text-xs mt-1 px-2">{message.timestamp}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-2 border-t border-[#4a90c5]/30">
        <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
          <button className="px-3 py-1.5 bg-[#1e3a5f]/60 border border-[#4a90c5]/30 rounded-full text-[#6cb4e8] text-xs whitespace-nowrap hover:bg-[#1e3a5f] transition-all">
            Network Status
          </button>
          <button className="px-3 py-1.5 bg-[#1e3a5f]/60 border border-[#4a90c5]/30 rounded-full text-[#6cb4e8] text-xs whitespace-nowrap hover:bg-[#1e3a5f] transition-all">
            Optimize Speed
          </button>
          <button className="px-3 py-1.5 bg-[#1e3a5f]/60 border border-[#4a90c5]/30 rounded-full text-[#6cb4e8] text-xs whitespace-nowrap hover:bg-[#1e3a5f] transition-all">
            Device Issues
          </button>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-[#4a90c5]/30">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 bg-[#1e3a5f]/60 border border-[#4a90c5]/30 rounded-xl px-4 py-3 text-white placeholder-[#6cb4e8]/50 focus:outline-none focus:border-[#1e90ff] transition-all"
          />
          <button
            onClick={handleSendMessage}
            className="w-12 h-12 bg-gradient-to-r from-[#1e90ff] to-[#00bfff] rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-[#1e90ff]/30 transition-all disabled:opacity-50"
            disabled={!inputValue.trim()}
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Custom scrollbar styling */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(108, 180, 232, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(108, 180, 232, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(108, 180, 232, 0.5);
        }
        @keyframes slide-in-from-bottom-4 {
          from {
            transform: translateY(1rem);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-in {
          animation: slide-in-from-bottom-4 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}