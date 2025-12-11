"use client"

import { useEffect, useState } from "react"
import { Wifi, Zap, Shield, Activity, ChevronRight, Sparkles, Play } from "lucide-react"
import Navbar from "./components/navbar"
import SigmaLogo from '../public/sigmaLogo.png'
import { useNavigate } from "react-router-dom";


export default function LandingPage() {
  const [showFullLogo, setShowFullLogo] = useState(false)
  const [showHero, setShowHero] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [videoOpen, setVideoOpen] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
    const navigate = useNavigate();
  

  useEffect(() => {
    setTimeout(() => setShowFullLogo(true), 1200)
    setTimeout(() => setShowHero(true), 2600)
    // const handleMouseMove = (e) => {
    //   setMousePosition({ x: e.clientX, y: e.clientY })
    // }
    // window.addEventListener("mousemove", handleMouseMove)
    // return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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
            // backgroundImage: `linear-gradient(#669BBC 1px, transparent 1px), linear-gradient(90deg, #669BBC 1px, transparent 1px)`,
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
    <div className="min-h-screen bg-[#0a1128] text-white overflow-x-hidden relative">
      <BackgroundElements />

      {/* INTRO ANIMATION */}
      {!showHero && (
        <div className="w-full h-screen flex flex-col items-center justify-center relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-[#A5CEE7] blur-3xl opacity-50 animate-pulse"></div>
            <div
              className="relative w-40 h-40 flex items-center justify-center"
              style={{ animation: "scaleIn 1s ease-out forwards" }}
            >
              <img
                src={SigmaLogo}
                alt="Sigma Logo"
                className="w-40 h-40 object-contain drop-shadow-2xl rounded-lg"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 border-2 border-[#669BBC] rounded-full animate-ping opacity-20"></div>
            </div>
          </div>

          {showFullLogo && (
            <div className="mt-8 text-center" style={{ animation: "fadeInUp 0.8s ease-out forwards" }}>
              <h1 className="text-5xl font-bold tracking-wider">
                <span className="text-white">Net</span>
                <span className="text-[#A5CEE7]">Speed</span>
              </h1>
              <p className="text-[#669BBC] mt-2 text-sm tracking-widest">INTELLIGENT NETWORK DIAGNOSTIC</p>
            </div>
          )}
        </div>
      )}

      {showHero && <Navbar />}

      {/* HERO SECTION */}
      {showHero && (
        <section
          id="home"
          className="relative z-10 min-h-screen flex items-center pt-24 px-4 sm:px-8"
          style={{ animation: "fadeIn 1s ease-out forwards" }}
        >
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-8" style={{ animation: "slideInLeft 1s ease-out forwards" }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#296D98]/20 border border-[#669BBC]/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#A5CEE7]" />
                <span className="text-sm text-[#A5CEE7] font-medium">AI-Powered Network Analysis</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  Stop Guessing.
                  <span className="block mt-2 bg-gradient-to-r from-[#A5CEE7] via-[#669BBC] to-[#296D98] bg-clip-text text-transparent">
                    Find The Real Problem.
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-[#669BBC] leading-relaxed max-w-xl">
                  One click. Complete diagnosis. AI-powered solutions. Get to the root cause of your internet issues in
                  under 60 seconds.
                </p>
              </div>

              <div className="flex gap-4 sm:gap-8 pt-4 flex-wrap sm:flex-nowrap">
                {[
                  { number: "50K+", label: "Diagnostics Run" },
                  { number: "95%", label: "Accuracy Rate" },
                  { number: "60s", label: "Average Scan" },
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-bold text-[#A5CEE7]">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-[#669BBC]">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
                <button         onClick={() => navigate('/diagnostic')}
 className="group px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#A5CEE7] to-[#669BBC] text-[#003049] font-bold shadow-lg shadow-[#A5CEE7]/30 hover:shadow-xl hover:shadow-[#A5CEE7]/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center">
                  Start Free Diagnostic
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-[#669BBC] text-[#A5CEE7] font-semibold hover:bg-[#669BBC]/10 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                  Watch Demo
                </button>
              </div>

              <div className="flex flex-wrap gap-4 sm:gap-6 pt-6 text-xs sm:text-sm text-[#669BBC]">
                {[
                  { icon: Shield, text: "100% Private & Offline" },
                  { icon: Zap, text: "Works with All Routers" },
                  { icon: Activity, text: "Real-time Analysis" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-[#A5CEE7]" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT - ANIMATED DASHBOARD MOCKUP */}
            <div className="relative" style={{ animation: "slideInRight 1s ease-out forwards" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#A5CEE7]/20 to-[#296D98]/20 blur-3xl rounded-full"></div>

              <div className="relative bg-gradient-to-br from-[#1a2744] to-[#0a1128] rounded-2xl border border-[#296D98]/30 shadow-2xl backdrop-blur-xl overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-[#296D98] via-[#669BBC] to-[#A5CEE7]"></div>

                <div className="p-6 sm:p-8">
                  <div className="absolute inset-0 opacity-5">
                    <div
                      style={{
                        backgroundImage: `linear-gradient(#669BBC 1px, transparent 1px), linear-gradient(90deg, #669BBC 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                      }}
                      className="w-full h-full"
                    ></div>
                  </div>

                  <div className="relative space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg sm:text-xl font-bold text-white">Network Diagnostic</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#A5CEE7] rounded-full animate-pulse"></div>
                        <span className="text-xs sm:text-sm text-[#669BBC]">Scanning...</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="h-2 bg-[#003049] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#296D98] via-[#669BBC] to-[#A5CEE7] rounded-full"
                          style={{ width: "67%", animation: "progressBar 3s ease-in-out infinite" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-[#669BBC]">
                        <span>Analyzing network...</span>
                        <span>67%</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[
                        { icon: Wifi, label: "WiFi Analysis", status: "Complete", color: "#A5CEE7" },
                        { icon: Activity, label: "Router Scanner", status: "Scanning...", color: "#669BBC" },
                        { icon: Zap, label: "ISP Line Check", status: "Pending", color: "#296D98" },
                      ].map((module, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 sm:p-4 rounded-lg bg-[#003049]/50 border border-[#296D98]/20 hover:border-[#669BBC]/40 transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-[#296D98]/20">
                              <module.icon className="w-5 h-5" style={{ color: module.color }} />
                            </div>
                            <span className="text-white font-medium text-sm sm:text-base">{module.label}</span>
                          </div>
                          <span className="text-xs sm:text-sm" style={{ color: module.color }}>
                            {module.status}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <div className="flex items-end justify-around h-24 gap-2">
                        {[40, 70, 55, 85, 60, 75, 50].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-[#296D98] to-[#A5CEE7] rounded-t-lg"
                            style={{
                              height: `${height}%`,
                              animation: `barPulse 2s ease-in-out ${i * 0.1}s infinite`,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#A5CEE7]/20 rounded-full blur-2xl animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#669BBC]/20 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </section>
      )}

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="relative z-10 py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-wide">How It Works</h2>
          <p className="text-[#669BBC] max-w-3xl mx-auto text-lg leading-relaxed">
            Our AI-powered system scans your network in 3 simple steps and gives you real-time diagnostics and
            solutions.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: Wifi,
              title: "Step 1: Device & Wi-Fi Scan",
              description:
                "Detect all devices connected to your network, measure signal strength, and analyze Wi-Fi channels for congestion and interference.",
              color: "#A5CEE7",
            },
            {
              icon: Zap,
              title: "Step 2: Router & ISP Analysis",
              description:
                "Scan router logs, WAN, PPPoE, DNS, and line quality to determine if the problem comes from your router, line, or ISP.",
              color: "#669BBC",
            },
            {
              icon: Shield,
              title: "Step 3: AI Diagnostics & Recommendations",
              description:
                "Our AI engine combines all signals and gives you a clear solution, like best Wi-Fi channel, MTU fix, firmware update, or ISP troubleshooting.",
              color: "#296D98",
            },
          ].map((step, i) => (
            <div
              key={i}
              onClick={() => setActiveStep(i)}
              className="group relative cursor-pointer transition-all duration-500 hover:scale-105"
              style={{ perspective: "1000px" }}
            >
              <div
                className={`relative bg-gradient-to-br from-[#1a2744] to-[#0a1128] rounded-3xl border shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-500 ${
                  activeStep === i ? "border-[#A5CEE7] shadow-[#A5CEE7]/50" : "border-[#296D98]/30"
                }`}
              >
                <div
                  className={`h-1 bg-gradient-to-r transition-all duration-500 ${
                    activeStep === i
                      ? "from-[#A5CEE7] via-[#669BBC] to-[#296D98]"
                      : "from-[#296D98] via-[#669BBC] to-[#A5CEE7]"
                  }`}
                ></div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="absolute inset-0 opacity-5">
                    <div
                      style={{
                        backgroundImage: `linear-gradient(#669BBC 1px, transparent 1px), linear-gradient(90deg, #669BBC 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                      }}
                      className="w-full h-full"
                    ></div>
                  </div>

                  <div className="relative space-y-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-tr from-[#296D98]/50 to-[#A5CEE7]/50 shadow-lg shadow-[#A5CEE7]/30 transition-transform duration-500 group-hover:scale-110">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white">{step.title}</h3>

                    <p className="text-[#669BBC] text-sm leading-relaxed">{step.description}</p>

                    <div className="flex gap-1 pt-4">
                      {[0, 1, 2].map((dot) => (
                        <div
                          key={dot}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            dot === i ? "w-8 bg-[#A5CEE7]" : "w-2 bg-[#296D98]/50"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-tr from-[#A5CEE7]/20 to-[#296D98]/20 rounded-full blur-3xl animate-pulse opacity-50 group-hover:scale-110 transition-all duration-500"></div>
              <div
                className="absolute -bottom-4 -right-4 w-28 h-28 bg-gradient-to-tr from-[#669BBC]/20 to-[#A5CEE7]/20 rounded-full blur-3xl animate-pulse opacity-50 group-hover:scale-110 transition-all duration-500"
                style={{ animationDelay: "0.3s" }}
              ></div>
            </div>
          ))}
        </div>
      </section>

      {/* DEMO SECTION */}
      <section id="demo" className="relative z-10 py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#1a2744] to-[#0a1128] rounded-3xl border border-[#296D98]/30 shadow-2xl overflow-hidden backdrop-blur-xl">
            <div className="h-1 bg-gradient-to-r from-[#296D98] via-[#669BBC] to-[#A5CEE7]"></div>

            <div className="p-6 sm:p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                      Real-Time Network Analysis
                    </h2>
                    <p className="text-[#669BBC] text-base sm:text-lg leading-relaxed">
                      Our advanced AI engine scans your entire network infrastructure in real-time, identifying
                      bottlenecks, interference, and configuration issues instantly.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Comprehensive Device Detection",
                      "Wi-Fi Signal Quality Analysis",
                      "Router Health Monitoring",
                      "ISP Connection Analysis",
                      "Real-time Performance Metrics",
                    ].map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-[#003049]/30 border border-[#296D98]/20 hover:border-[#669BBC]/40 transition-all duration-300 group/item"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#A5CEE7] group-hover/item:scale-150 transition-transform"></div>
                        <span className="text-[#A5CEE7] font-medium text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setVideoOpen(true)}
                    className="group mt-8 inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#A5CEE7] to-[#669BBC] text-[#003049] font-bold shadow-lg shadow-[#A5CEE7]/30 hover:shadow-xl hover:shadow-[#A5CEE7]/50 transition-all duration-300 hover:scale-105"
                  >
                    <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                    Watch Full Demo
                  </button>
                </div>

                <div className="relative group/video">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A5CEE7]/20 to-[#296D98]/20 blur-3xl rounded-2xl group-hover/video:scale-110 transition-transform duration-500"></div>

                  <div className="relative bg-gradient-to-b from-[#003049]/50 to-[#001524]/50 rounded-2xl border border-[#296D98]/30 overflow-hidden backdrop-blur-sm aspect-video flex items-center justify-center group-hover/video:border-[#669BBC]/50 transition-all duration-500">
                    <div className="absolute inset-0 opacity-5">
                      <div
                        style={{
                          backgroundImage: `linear-gradient(#669BBC 1px, transparent 1px), linear-gradient(90deg, #669BBC 1px, transparent 1px)`,
                          backgroundSize: "20px 20px",
                        }}
                        className="w-full h-full"
                      ></div>
                    </div>

                    <button
                      onClick={() => setVideoOpen(true)}
                      className="group/play relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-[#A5CEE7] to-[#669BBC] flex items-center justify-center shadow-2xl shadow-[#A5CEE7]/30 hover:shadow-[#A5CEE7]/50 transition-all hover:scale-110"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 text-[#003049] fill-current group-hover/play:scale-125 transition-transform" />

                      <div className="absolute inset-0 rounded-full border-2 border-[#A5CEE7]/30 group-hover/play:scale-150 transition-transform duration-500"></div>
                      <div className="absolute inset-0 rounded-full border-2 border-[#A5CEE7]/20 scale-125 group-hover/play:scale-175 transition-transform duration-700"></div>
                    </button>

                    <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-[#A5CEE7]/50 rounded-tr-2xl group-hover/video:scale-110 transition-transform"></div>
                    <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-[#A5CEE7]/50 rounded-bl-2xl group-hover/video:scale-110 transition-transform"></div>
                  </div>

                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#A5CEE7]/10 rounded-full blur-3xl animate-pulse"></div>
                  <div
                    className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#669BBC]/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA SECTION */}
      <section className="relative z-10 py-24 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Fix Your Network?
            </h2>
            <p className="text-lg sm:text-xl text-[#669BBC] leading-relaxed">
              Stop wasting time with slow internet. Get instant diagnostics and AI-powered solutions today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8">
              <button className="group px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#A5CEE7] to-[#669BBC] text-[#003049] font-bold shadow-lg shadow-[#A5CEE7]/30 hover:shadow-xl hover:shadow-[#A5CEE7]/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center">
                Start Free Diagnostic
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setVideoOpen(false)}></div>

          <div className="relative z-10 w-full max-w-4xl">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-12 right-0 text-[#A5CEE7] hover:text-white transition-colors text-xl font-bold"
            >
              ✕
            </button>

            <div className="relative bg-gradient-to-br from-[#1a2744] to-[#0a1128] rounded-2xl border border-[#296D98]/30 overflow-hidden shadow-2xl">
              <div className="h-1 bg-gradient-to-r from-[#296D98] via-[#669BBC] to-[#A5CEE7]"></div>

              <div className="aspect-video bg-gradient-to-b from-[#003049]/50 to-[#001524]/50 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-5">
                  <div
                    style={{
                      backgroundImage: `linear-gradient(#669BBC 1px, transparent 1px), linear-gradient(90deg, #669BBC 1px, transparent 1px)`,
                      backgroundSize: "20px 20px",
                    }}
                    className="w-full h-full"
                  ></div>
                </div>

                <p className="text-[#A5CEE7] text-center relative z-10 text-sm sm:text-base">
                  still there is no Video for now :(
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes scaleIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes progressBar {
          0%,
          100% {
            width: 67%;
          }
          50% {
            width: 85%;
          }
        }

        @keyframes barPulse {
          0%,
          100% {
            opacity: 0.7;
            transform: scaleY(1);
          }
          50% {
            opacity: 1;
            transform: scaleY(1.1);
          }
        }
      `}</style>
    </div>
  )
}
