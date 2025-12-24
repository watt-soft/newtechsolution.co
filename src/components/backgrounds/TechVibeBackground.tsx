import { motion } from "framer-motion";

const TechVibeBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">

            {/* --- 1. SOFT SOLAR ENERGY WAVES (horizontal only, no beams) --- */}
            <motion.div
                className="
                    absolute top-1/3 left-0 right-0 h-40
                    bg-gradient-to-r from-transparent via-[#AFFF7A]/15 to-transparent blur-2xl
                "
                animate={{ opacity: [0.1, 0.25, 0.1], x: [-15, 15, -10] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="
                    absolute top-1/2 left-0 right-0 h-40
                    bg-gradient-to-r from-transparent via-[#FFB020]/20 to-transparent blur-3xl
                "
                animate={{ opacity: [0.08, 0.2, 0.08], x: [20, -20, 15] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* --- 2. TECH GRID (Premium style but subtle) --- */}
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: `
                    linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
                `,
                    backgroundSize: "45px 45px",
                }}
            />

            {/* Soft shimmer across grid */}
            {/* <motion.div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)",
                }}
                animate={{ x: ["0%", "100%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            /> */}

            {/* --- 3. SOLAR DIAMOND CRYSTAL ENERGY CORE (Premium Feature) --- */}


            {/* --- 4. FLOATING MICRO NODES (Energy particles) --- */}
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#AFFF7A] to-[#FFB020]"
                    style={{
                        top: `${Math.random() * 90}%`,
                        left: `${Math.random() * 90}%`,
                    }}
                    initial={{ opacity: 0.3, scale: 0.6 }}
                    animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.6, 1.3, 0.6],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            {/* --- 5. SUBTLE ENERGY CIRCUIT LINES (No beams, soft luxury) --- */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute left-0 right-0 h-[1px]"
                    style={{
                        top: `${25 + i * 22}%`,
                        background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                    }}
                    animate={{ opacity: [0.1, 0.4, 0.1], x: [-20, 20, -20] }}
                    transition={{
                        duration: 7 + i * 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* OTHER ANIMATIONS */}
            {/* Tech-grids & subtle particles overlay */}
            <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        'repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.01) 0 1px, transparent 1px 60px)'
                }}
            />

            {/* Pulsing energy orb (animated) */}
            {/* <motion.svg
                className="absolute -right-32 top-1/4 w-96 h-96 pointer-events-none"
                viewBox="0 0 400 400"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: [0.95, 1.08, 0.95], opacity: [0.08, 0.18, 0.08] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
                <defs>
                    <radialGradient id="energyGrad" cx="50%" cy="40%">
                        <stop offset="0%" stopColor="#FFB020" stopOpacity="0.9" />
                        <stop offset="40%" stopColor="#067C64" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#044839" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="techLine" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#AFFF7A" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#FFB020" stopOpacity="0.9" />
                    </linearGradient>
                </defs>

                <circle cx="200" cy="160" r="120" fill="url(#energyGrad)" /> */}
            {/* Thin tech arcs */}
            {/* <motion.path
                    d="M60,220 C130,160 270,160 340,220"
                    stroke="url(#techLine)"
                    strokeWidth="1.8"
                    fill="transparent"
                    strokeOpacity="0.55"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0.85] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.circle
                    cx="120"
                    cy="180"
                    r="4"
                    fill="#FFB020"
                    animate={{ scale: [1, 1.6, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3.2, repeat: Infinity }}
                />
                <motion.circle
                    cx="260"
                    cy="150"
                    r="5"
                    fill="#AFFF7A"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3.6, repeat: Infinity, delay: 0.4 }}
                />
            </motion.svg> */}

            <motion.svg
                className="
        absolute -right-24 top-1/4 
        w-[520px] h-[520px] 
        pointer-events-none
    "
                viewBox="0 0 500 500"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: [0.95, 1.1, 0.95], opacity: [0.12, 0.28, 0.12] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            >
                <defs>
                    {/* Stronger energy glow */}
                    <radialGradient id="energyGradStrong" cx="50%" cy="40%">
                        <stop offset="0%" stopColor="#FFB020" stopOpacity="0.95" />
                        <stop offset="35%" stopColor="#067C64" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#044839" stopOpacity="0" />
                    </radialGradient>

                    {/* Enhanced tech line gradient */}
                    <linearGradient id="techLineStrong" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#AFFF7A" stopOpacity="1" />
                        <stop offset="100%" stopColor="#FFB020" stopOpacity="1" />
                    </linearGradient>

                    {/* Soft glow for arcs */}
                    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Stronger center glow */}
                <circle cx="250" cy="200" r="150" fill="url(#energyGradStrong)" />

                {/* --- Primary tech arc (bolder) --- */}
                <motion.path
                    d="M80,300 C170,200 330,200 420,300"
                    stroke="url(#techLineStrong)"
                    strokeWidth="2.6"
                    filter="url(#softGlow)"
                    fill="transparent"
                    strokeOpacity="0.75"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0.92] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* --- Secondary slightly offset arc (layered look) --- */}
                <motion.path
                    d="M100,330 C185,230 315,230 400,330"
                    stroke="url(#techLineStrong)"
                    strokeWidth="1.8"
                    filter="url(#softGlow)"
                    fill="transparent"
                    strokeOpacity="0.55"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0.9] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                />

                {/* Micro light nodes (more visible) */}
                <motion.circle
                    cx="160"
                    cy="260"
                    r="5.5"
                    fill="#FFB020"
                    filter="url(#softGlow)"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3.4, repeat: Infinity }}
                />
                <motion.circle
                    cx="340"
                    cy="230"
                    r="6"
                    fill="#AFFF7A"
                    filter="url(#softGlow)"
                    animate={{ scale: [1, 1.7, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3.8, repeat: Infinity, delay: 0.4 }}
                />
            </motion.svg>


            {/* small floating tech nodes (right-bottom) */}
            <div className="absolute right-8 bottom-12 flex flex-col gap-2 pointer-events-none">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ y: 6, opacity: 0.5 }}
                        animate={{ y: [-6, 6, -6], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 3 + i * 0.8, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-1.5"
                    >
                        <div
                            className={`h-${6 + i * 2} w-1.5 rounded-md`}
                            style={{
                                background:
                                    i % 2 === 0
                                        ? 'linear-gradient(180deg,#FFB020,#067C64)'
                                        : 'linear-gradient(180deg,#AFFF7A,#06A06A)'
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#FFB020] to-[#067C64] rounded-full opacity-10 blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            ></motion.div>
        </div>
    );
};

export default TechVibeBackground;
