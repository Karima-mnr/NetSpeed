import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../../public/logo.png";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        fixed top-0 left-0 w-full z-50 
        bg-[#0a1128]/80 backdrop-blur-xl 
        border-b border-white/10
        shadow-[0_8px_25px_rgba(0,0,0,0.2)]
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO ONLY – no rectangle, no extra text */}
        <motion.img
          src={logo}
          className="w-40 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/')}
        />

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-10 text-white font-medium">
        {[
            { name: "Features", id: "home" },
            { name: "How it Works", id: "how-it-works" },
            { name: "Demo", id: "demo" }
        ].map((item, i) => (
            <motion.a
            key={i}
            href={`#${item.id}`}
            whileHover={{ y: -2 }}
            className="relative group"
            >
            {item.name}
            <span
                className="
                absolute left-0 bottom-[-4px] w-0 h-[2px]
                bg-[#A5CEE7] rounded-full
                transition-all group-hover:w-full
                "
            ></span>
            </motion.a>
        ))}
        </div>

        {/* CTA BUTTON — Gradient + Pro Animation */}
        <motion.button
        onClick={() => navigate('/diagnostic')}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="
            px-7 py-2.5 
            rounded-full font-semibold 
            text-white
            bg-gradient-to-r from-[#296D98] via-[#669BBC] to-[#b5d1e1c5]
            shadow-[0_0_25px_rgba(165,206,231,0.35)]
            hover:shadow-[0_0_35px_rgba(165,206,231,0.55)]
            transition-all duration-300
            relative overflow-hidden
            group
        "
        >
        <span className="relative z-10">Start Diagnostic</span>

        {/* animated shine effect */}
        <span
            className="
            absolute inset-0 
            bg-gradient-to-r from-transparent via-white/30 to-transparent 
            translate-x-[-200%]
            group-hover:translate-x-[200%]
            transition-transform duration-700 ease-out
            "
        ></span>
        </motion.button>

      </div>
    </motion.nav>
  );
}