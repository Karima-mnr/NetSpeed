"use client"

import { useState, useEffect, useRef } from "react"
import { Shield, Zap, Globe, Database, Cpu, Radio, Activity, Server, Network, MessageCircle } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// ChatAgent Component
function ChatAgent({ isOpen, onClose }) {
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
            <Shield className="w-6 h-6 text-white" />
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
          <span className="text-white text-xl">×</span>
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
                <Shield className="w-5 h-5 text-white" />
              ) : (
                <Radio className="w-5 h-5 text-white" />
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
            <Zap className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function NetworkDiagnostic() {
  const [testProgress, setTestProgress] = useState(0)
  const [isTesting, setIsTesting] = useState(false)
  const [currentSpeed, setCurrentSpeed] = useState(0)
  const [timeView, setTimeView] = useState("week") 
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isChatOpen, setIsChatOpen] = useState(false)
  
  const canvasRef = useRef(null)

  // Connected devices data
  const devices = [   
     { id: 5, name: "Sony TV", ip: "192.168.1.104", type: "tv", traffic: 85, signal: -68, status: "critical" },
    { id: 1, name: "iPhone 16 Pro", ip: "192.168.1.100", type: "mobile", traffic: 45, signal: -45, status: "warning" },
    { id: 2, name: "Samsung F23", ip: "192.168.1.101", type: "mobile", traffic: 22, signal: -65, status: "normal" },
    { id: 3, name: "HP PC i5", ip: "192.168.1.102", type: "pc", traffic: 15, signal: -58, status: "normal" },
    { id: 4, name: "LG TV", ip: "192.168.1.103", type: "tv", traffic: 64, signal: -52, status: "critical" },
    { id: 6, name: "MacBook Pro", ip: "192.168.1.105", type: "pc", traffic: 32, signal: -42, status: "normal" },
  ]

  // Speed history data - week view
  const weekSpeedHistory = [
    { time: "Mon", download: 7.2, upload: 2.1 },
    { time: "Tue", download: 7.5, upload: 2.3 },
    { time: "Wed", download: 7.8, upload: 2.4 },
    { time: "Thu", download: 7.4, upload: 2.2 },
    { time: "Fri", download: 7.9, upload: 2.5 },
    { time: "Sat", download: 7.6, upload: 2.3 },
    { time: "Sun", download: 7.82, upload: 2.4 },
  ]

  // Speed history data - month view
  const monthSpeedHistory = [
    { time: "Week 1", download: 7.1, upload: 2.0 },
    { time: "Week 2", download: 7.4, upload: 2.2 },
    { time: "Week 3", download: 7.6, upload: 2.3 },
    { time: "Week 4", download: 7.82, upload: 2.4 },
  ]

  const speedHistory = timeView === "week" ? weekSpeedHistory : monthSpeedHistory

  // Diagnostic metrics
  const diagnostics = [
    { label: "Wi-Fi Signal", value: "-45 dBm", status: "optimal", icon: Radio },
    { label: "Router Health", value: "98%", status: "optimal", icon: Server },
    { label: "DNS Status", value: "Responding", status: "optimal", icon: Globe },
    { label: "Latency", value: "12 ms", status: "optimal", icon: Zap },
    { label: "Packet Loss", value: "0%", status: "optimal", icon: Activity },
    { label: "MTU Size", value: "1500 B", status: "optimal", icon: Database },
  ]

  // Background animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(26, 35, 50, 0.02)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(108, 180, 232, 0.1)"
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  // Speed test simulation
  const startSpeedTest = () => {
    setIsTesting(true)
    setTestProgress(0)
    setCurrentSpeed(0)
    const interval = setInterval(() => {
      setTestProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsTesting(false)
          setCurrentSpeed(67.82)
          return 100
        }
        const newProgress = prev + Math.random() * 15
        setCurrentSpeed((newProgress / 100) * 67.82)
        return newProgress
      })
    }, 180)
  }

  const getDeviceIcon = (type) => {
    switch (type) {
      case "pc":
        return <Cpu className="w-4 h-4" />
      case "mobile":
        return <Radio className="w-4 h-4" />
      case "tv":
        return <Activity className="w-4 h-4" />
      default:
        return <Network className="w-4 h-4" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "critical":
        return "text-red-500 bg-red-500/10 border-red-500/30"
      case "warning":
        return "text-yellow-500 bg-yellow-500/10 border-yellow-500/30"
      default:
        return "text-green-500 bg-green-500/10 border-green-500/30"
    }
  }

  const BackgroundElements = () => (
    <>
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003049] via-[#0a1128] to-[#001524]"></div>
        <div
          className="absolute w-96 h-96 bg-[#296D98] rounded-full blur-3xl opacity-20"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        ></div>
      </div>

      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="fixed inset-0 pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#A5CEE7] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 7}s`,
              animationDuration: `${20 + Math.random() * 7}s`,
            }}
          ></div>
        ))}
      </div>
    </>
  )

  return (
    <div className="w-full h-screen bg-[#1a2332] relative overflow-hidden">
      {/* Background animation */}
      <BackgroundElements />

      {/* Content */}
      <div className="relative z-10 flex flex-col p-8 h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Network Diagnostics</h1>
            <p className="text-[#6cb4e8] flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              AI-Powered System Analysis
            </p>
          </div>
          <div className="text-right">
            <div className="text-[#6cb4e8] text-sm mb-1">Gateway IP</div>
            <div className="text-white font-mono text-lg">192.168.1.1</div>
          </div>
        </div>

        {/* Main three-column layout */}
        <div className="grid grid-cols-12 gap-6 flex-1 overflow-hidden">
          {/* LEFT - Speed Test Card */}
          <div className="col-span-4 flex flex-col gap-6 overflow-hidden">
            {/* Speed Test with History */}
            <div className="bg-gradient-to-br from-[#1e3a5f]/40 to-[#2c5282]/30 backdrop-blur-xl border border-[#4a90c5]/30 rounded-2xl p-6 shadow-2xl flex-1 flex flex-col overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-[#6cb4e8]" />
                <h2 className="text-white font-bold text-lg">Speed Test</h2>
              </div>

              {/* Scrollable content area */}
              <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                {/* Speed gauge - larger and centered */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-64 h-64">
                    <svg className="w-full h-full" viewBox="0 0 240 220">
                      <defs>
                        <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1e90ff" />
                          <stop offset="100%" stopColor="#00bfff" />
                        </linearGradient>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* Background arc */}
                      <path
                        d="M 50 190 A 80 80 0 1 1 190 190"
                        fill="none"
                        stroke="#1e3a5f"
                        strokeWidth="20"
                        strokeLinecap="round"
                      />
                      
                      {/* Progress arc */}
                      <path
                        d="M 50 190 A 80 80 0 1 1 190 190"
                        fill="none"
                        stroke="url(#gaugeGradient)"
                        strokeWidth="20"
                        strokeLinecap="round"
                        strokeDasharray={`${testProgress * 4.4}px 440px`}
                        filter="url(#glow)"
                        className="transition-all duration-300"
                      />
                      
                      {/* Speed value */}
                      <text x="120" y="130" textAnchor="middle" className="text-3xl font-bold fill-white">
                        {currentSpeed.toFixed(0.00)}
                      </text>
                      <text x="120" y="155" textAnchor="middle" className="text-base fill-[#6cb4e8]">
                        Mbps
                      </text>
                      
                      {/* Labels - positioned OUTSIDE the arc */}
                      <text x="30" y="205" textAnchor="middle" className="text-xs fill-[#6cb4e8] font-medium">0</text>
                      <text x="25" y="160" textAnchor="end" className="text-xs fill-[#6cb4e8] font-medium">5</text>
                      <text x="30" y="115" textAnchor="end" className="text-xs fill-[#6cb4e8] font-medium">10</text>
                      <text x="55" y="75" textAnchor="middle" className="text-xs fill-[#6cb4e8] font-medium">50</text>
                      <text x="120" y="45" textAnchor="middle" className="text-xs fill-[#6cb4e8] font-medium">100</text>
                      <text x="185" y="75" textAnchor="middle" className="text-xs fill-[#6cb4e8] font-medium">250</text>
                      <text x="210" y="115" textAnchor="start" className="text-xs fill-[#6cb4e8] font-medium">500</text>
                      <text x="215" y="160" textAnchor="start" className="text-xs fill-[#6cb4e8] font-medium">750</text>
                      <text x="210" y="205" textAnchor="middle" className="text-xs fill-[#6cb4e8] font-medium">1000</text>
                    </svg>
                  </div>
                </div>

                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-[#1e3a5f]/60 rounded-lg p-3 text-center border border-[#4a90c5]/20">
                    <div className="text-[#6cb4e8] text-xs mb-1 uppercase tracking-wider">Ping</div>
                    <div className="text-white font-bold text-lg">78 ms</div>
                  </div>
                  <div className="bg-[#1e3a5f]/60 rounded-lg p-3 text-center border border-[#4a90c5]/20">
                    <div className="text-[#6cb4e8] text-xs mb-1 uppercase tracking-wider">Download</div>
                    <div className="text-white font-bold text-lg">{currentSpeed.toFixed(2)}</div>
                  </div>
                  <div className="bg-[#1e3a5f]/60 rounded-lg p-3 text-center border border-[#4a90c5]/20">
                    <div className="text-[#6cb4e8] text-xs mb-1 uppercase tracking-wider">Upload</div>
                    <div className="text-white font-bold text-lg">{(currentSpeed * 0.3).toFixed(2)}</div>
                  </div>
                </div>

                {/* Test button */}
                <button
                  onClick={startSpeedTest}
                  disabled={isTesting}
                  className="w-full bg-gradient-to-r from-[#1e90ff] to-[#00bfff] text-white font-bold py-4 rounded-xl hover:shadow-xl hover:shadow-[#1e90ff]/30 transition-all duration-300 disabled:opacity-60 mb-6"
                >
                  {isTesting ? "Testing..." : "Start Test"}
                </button>

                {/* View toggle */}
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => setTimeView("week")}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                      timeView === "week"
                        ? "bg-[#1e90ff] text-white"
                        : "bg-[#1e3a5f]/60 text-[#6cb4e8] hover:bg-[#1e3a5f]"
                    }`}
                  >
                    Week
                  </button>
                  <button
                    onClick={() => setTimeView("month")}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                      timeView === "month"
                        ? "bg-[#1e90ff] text-white"
                        : "bg-[#1e3a5f]/60 text-[#6cb4e8] hover:bg-[#1e3a5f]"
                    }`}
                  >
                    Month
                  </button>
                </div>

                {/* Speed history graph */}
                <div className="flex-1">
                  <div className="text-[#6cb4e8] text-sm font-bold mb-4">Speed History</div>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={speedHistory} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" opacity="0.3" />
                      <XAxis dataKey="time" stroke="#6cb4e8" style={{ fontSize: "11px" }} />
                      <YAxis stroke="#6cb4e8" style={{ fontSize: "11px" }} domain={[0, 10]} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1e3a5f",
                          border: "1px solid #4a90c5",
                          borderRadius: "8px",
                          boxShadow: "0 0 20px rgba(30, 144, 255, 0.2)",
                        }}
                        labelStyle={{ color: "#6cb4e8" }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="download" 
                        stroke="#00bfff" 
                        strokeWidth={3} 
                        dot={{ fill: "#00bfff", r: 4 }}
                        name="Download (Mbps)"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="upload" 
                        stroke="#1e90ff" 
                        strokeWidth={2} 
                        dot={{ fill: "#1e90ff", r: 3 }}
                        name="Upload (Mbps)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER - Network Topology */}
          <div className="col-span-4 flex flex-col overflow-hidden">
            <div className="bg-gradient-to-br from-[#1e3a5f]/40 to-[#2c5282]/30 backdrop-blur-xl border border-[#4a90c5]/30 rounded-2xl p-6 shadow-2xl flex-1 flex flex-col overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-[#6cb4e8]" />
                <h2 className="text-white font-bold text-lg">Network Topology</h2>
              </div>

              {/* Scrollable content area */}
              <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                <div className="flex-1 flex items-center justify-center mb-6">
                  <svg className="w-full h-80" viewBox="0 0 200 260" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <linearGradient id="criticalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#dc2626" />
                      </linearGradient>
                      <linearGradient id="normalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6cb4e8" />
                        <stop offset="100%" stopColor="#4a90c5" />
                      </linearGradient>
                    </defs>

                    {/* Central Router - Larger and more prominent with pulse animation */}
                    <circle cx="100" cy="130" r="8" fill="#6cb4e8" filter="url(#glow)">
                      <animate attributeName="r" values="8;9;8" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="100" cy="130" r="15" fill="none" stroke="#4a90c5" strokeWidth="0.8" opacity="0.4">
                      <animate attributeName="r" values="15;17;15" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.4;0.6;0.4" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="100" cy="130" r="22" fill="none" stroke="#4a90c5" strokeWidth="0.5" opacity="0.2">
                      <animate attributeName="r" values="22;25;22" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.2;0.3;0.2" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <text x="100" y="147" textAnchor="middle" className="text-xs fill-[#6cb4e8] font-bold">
                      Router
                    </text>
                    <text x="100" y="159" textAnchor="middle" className="text-xs fill-[#6cb4e8]">
                      192.168.1.1
                    </text>

                    {/* Device 1: iPhone 16 Pro (top-left) - CRITICAL RED with pulse */}
                    <path d="M 100 130 L 40 40" stroke="#ef4444" strokeWidth="2" opacity="0.9" filter="url(#glow)">
                      <animate attributeName="opacity" values="0.9;0.6;0.9" dur="1.5s" repeatCount="indefinite" />
                    </path>
                    <circle cx="40" cy="40" r="5" fill="#ef4444" filter="url(#glow)">
                      <animate attributeName="r" values="5;6;5" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <text x="40" y="25" textAnchor="middle" className="text-xs fill-[#ef4444] font-bold">
                      Sony TV
                    </text>
                    <text x="40" y="37" textAnchor="middle" className="text-xs fill-[#ef4444]">
                      192.168.1.100
                    </text>

                    {/* Device 2: Samsung F23 (top-right) - Normal with subtle pulse */}
                    <path d="M 100 130 L 160 40" stroke="#6cb4e8" strokeWidth="1.5" opacity="0.7" strokeDasharray="2,2">
                      <animate attributeName="stroke-dashoffset" values="0;4;0" dur="3s" repeatCount="indefinite" />
                    </path>
                    <circle cx="160" cy="40" r="4" fill="#6cb4e8" filter="url(#glow)">
                      <animate attributeName="r" values="4;4.5;4" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <text x="160" y="25" textAnchor="middle" className="text-xs fill-[#6cb4e8] font-bold">
                      Iphone 16 Pro
                    </text>
                    <text x="160" y="37" textAnchor="middle" className="text-xs fill-[#6cb4e8]">
                      192.168.1.101
                    </text>

                    {/* Device 3: LG OLED (left) - Warning */}
                    <path d="M 100 130 L 20 130" stroke="#4a90c5" strokeWidth="1.8" opacity="0.8" />
                    <circle cx="20" cy="130" r="4.5" fill="#4a90c5" filter="url(#glow)">
                      <animate attributeName="r" values="4.5;5;4.5" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <text x="20" y="117" textAnchor="middle" className="text-xs fill-[#4a90c5] font-bold">
                      Samsung F23
                    </text>
                    <text x="20" y="145" textAnchor="middle" className="text-xs fill-[#4a90c5]">
                      192.168.1.103
                    </text>

                    {/* Device 4: Sony Bravia (right) - Normal */}
                    <path
                      d="M 100 130 L 180 130"
                      stroke="#6cb4e8"
                      strokeWidth="1.5"
                      opacity="0.7"
                      strokeDasharray="2,2"
                    >
                      <animate attributeName="stroke-dashoffset" values="0;4;0" dur="3s" repeatCount="indefinite" />
                    </path>
                    <circle cx="180" cy="130" r="4" fill="#6cb4e8" filter="url(#glow)">
                      <animate attributeName="r" values="4;4.5;4" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <text x="180" y="117" textAnchor="middle" className="text-xs fill-[#6cb4e8] font-bold">
                      HP PC i5
                    </text>
                    <text x="180" y="145" textAnchor="middle" className="text-xs fill-[#6cb4e8]">
                      192.168.1.104
                    </text>

                    {/* Device 5: OnePlus 12 (bottom-left) - Normal */}
                    <path d="M 100 130 L 50 220" stroke="#6cb4e8" strokeWidth="1.5" opacity="0.7" strokeDasharray="2,2">
                      <animate attributeName="stroke-dashoffset" values="0;4;0" dur="3s" repeatCount="indefinite" />
                    </path>
                    <circle cx="50" cy="220" r="4" fill="#6cb4e8" filter="url(#glow)">
                      <animate attributeName="r" values="4;4.5;4" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <text x="50" y="237" textAnchor="middle" className="text-xs fill-[#6cb4e8] font-bold">
                      MacBook Pro
                    </text>
                    <text x="50" y="249" textAnchor="middle" className="text-xs fill-[#6cb4e8]">
                      192.168.1.102
                    </text>

                    {/* Device 6: MacBook Pro (bottom-right) - CRITICAL RED with pulse */}
                    <path d="M 100 130 L 150 220" stroke="#ef4444" strokeWidth="2" opacity="0.9" filter="url(#glow)">
                      <animate attributeName="opacity" values="0.9;0.6;0.9" dur="1.5s" repeatCount="indefinite" />
                    </path>
                    <circle cx="150" cy="220" r="5" fill="#ef4444" filter="url(#glow)">
                      <animate attributeName="r" values="5;6;5" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <text x="150" y="237" textAnchor="middle" className="text-xs fill-[#ef4444] font-bold">
                      LG TV
                    </text>
                    <text x="150" y="249" textAnchor="middle" className="text-xs fill-[#ef4444]">
                      192.168.1.105
                    </text>
                  </svg>
                </div>

                {/* Connected devices list */}
                <div className="border-t border-[#4a90c5]/30 pt-4">
                  <div className="text-[#6cb4e8] text-xs font-bold mb-3 uppercase tracking-wider">
                    Connected Devices ({devices.length})
                  </div>
                  <div className="space-y-2">
                    {devices.map((device) => (
                      <div
                        key={device.id}
                        className={`flex items-center justify-between p-3 rounded-lg border transition-all ${getStatusColor(
                          device.status,
                        )}`}
                      >
                        <div className="flex items-center gap-3">
                          {getDeviceIcon(device.type)}
                          <div>
                            <div className="text-white text-sm font-bold">{device.name}</div>
                            <div className="text-[#6cb4e8] text-xs font-mono">{device.ip}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-sm">{device.traffic}%</div>
                          <div className="text-xs opacity-75">{device.signal} dBm</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Diagnostics */}
          <div className="col-span-4 flex flex-col gap-6 overflow-hidden">
            {/* Diagnostic metrics grid */}
            <div className="grid grid-cols-2 gap-3">
              {diagnostics.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-[#1e3a5f]/40 to-[#2c5282]/30 backdrop-blur-xl border border-[#4a90c5]/30 rounded-xl p-3 shadow-lg hover:shadow-xl hover:border-[#6cb4e8]/60 transition-all"
                  >
                    <Icon className="w-4 h-4 text-[#6cb4e8] mb-2" />
                    <div className="text-[#6cb4e8] text-xs mb-1">{item.label}</div>
                    <div className="text-white font-bold text-sm">{item.value}</div>
                  </div>
                )
              })}
            </div>

            {/* AI Insights */}
            <div className="bg-gradient-to-br from-[#1e3a5f]/40 to-[#2c5282]/30 backdrop-blur-xl border border-[#4a90c5]/30 rounded-2xl p-6 shadow-2xl flex-1 flex flex-col overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-[#6cb4e8]" />
                <h2 className="text-white font-bold text-lg">AI Analysis</h2>
              </div>

              {/* Scrollable content area */}
              <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                <div className="space-y-4 text-sm">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                    <div className="text-green-400 font-bold mb-1">System Status: Optimal</div>
                    <div className="text-[#6cb4e8] text-xs">All network parameters within normal range</div>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                    <div className="text-red-400 font-bold mb-1">Alert: High Bandwidth Devices</div>
                    <div className="text-[#6cb4e8] text-xs">
                      iPhone 16 Pro (78%) and MacBook Pro (85%) consuming critical bandwidth
                    </div>
                  </div>

                  <div className="bg-[#1e3a5f]/60 border border-[#4a90c5]/30 rounded-lg p-3">
                    <div className="text-[#6cb4e8] font-bold mb-1">Recommendation</div>
                    <div className="text-[#6cb4e8] text-xs">
                      Consider QoS prioritization for video streaming on TV devices
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-[#1e90ff] to-[#00bfff] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#1e90ff]/50 transition-all hover:scale-110 z-40"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1a2332] animate-pulse" />
      </button>

      {/* Chat Agent Component */}
      <ChatAgent isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

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