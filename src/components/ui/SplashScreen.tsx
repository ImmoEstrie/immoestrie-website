"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
  duration?: number;
}

export default function SplashScreen({ onComplete, duration = 2500 }: SplashScreenProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onComplete]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
      }}
    >
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
        }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-white"
      >
        {/* Halo bleu très discret derrière le logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute w-[420px] h-[420px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(37,99,235,0) 70%)",
          }}
        />

        {/* Logo SVG — légèrement décalé vers la droite sur mobile uniquement */}
        <motion.div
          className="relative z-10 w-24 h-24 md:w-28 md:h-28 translate-x-4 md:translate-x-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.svg
            viewBox="0 0 165 165"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Tracé du contour (dessin progressif) */}
            <motion.path
              d="M59.06 0C26.493 0 0 26.492 0 59.065c0 2.827.203 5.612.594 8.342a54.69 54.69 0 00.74 4.168 55.42 55.42 0 00.998 3.917 57.882 57.882 0 004.154 10.464c.021.035.034.069.049.098a53.956 53.956 0 001.71 3.071c.015.028.028.063.049.091a61.523 61.523 0 001.864 2.925 58.886 58.886 0 006.653 8.141l7.456-7.338 2.485-2.449 2.485-2.443L59.06 58.695 88.882 88.05l2.485 2.449 2.485 2.443a45.291 45.291 0 01-2.521 2.416 48.71 48.71 0 01-2.701 2.234 48.303 48.303 0 01-29.571 10.059 48.298 48.298 0 01-29.571-10.059l-7.512 7.399c10.137 8.21 23.051 13.131 37.083 13.131s26.946-4.921 37.09-13.131a54.87 54.87 0 002.652-2.283 59.148 59.148 0 009.111-10.485l-7.609-7.49-2.555-2.514-2.563-2.52L59.06 44.146 22.934 79.701l-2.563 2.52-2.548 2.514c-.021-.028-.042-.056-.056-.091a44.86 44.86 0 01-1.746-3.036c-.014-.028-.027-.063-.049-.092a44.81 44.81 0 01-1.535-3.238c-.021-.035-.035-.07-.049-.098A47.879 47.879 0 0111.1 66.864a48.084 48.084 0 01-.628-7.797c0-.468.006-.936.021-1.396.733-25.941 21.899-46.862 47.945-47.191.202-.007.411-.007.621-.007.209 0 .419 0 .628.007 26.039.329 47.213 21.25 47.945 47.191a49.831 49.831 0 01-.097 4.802 47.736 47.736 0 01-.51 4.398l-3.106-3.058-3.281-3.226L59.06 19.658l-17.05 16.78-6.422 6.32 4.772-6.981v-5.089h.92v-2.555H28.953v2.555h.92v17.694L17.48 60.58a41.107 41.107 0 002.325 12.272l34.36-33.822 4.894-4.824 4.9 4.824 34.36 33.822 2.729 2.681 2.688 2.646 7.901 7.776a58.203 58.203 0 004.153-10.458c.377-1.291.713-2.597.992-3.923.3-1.368.551-2.757.747-4.161.391-2.729.593-5.515.593-8.349C118.125 26.492 91.626 0 59.06 0z"
              fill="none"
              stroke="#2563eb"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
            />
            {/* Remplissage plein en bleu */}
            <motion.path
              d="M59.06 0C26.493 0 0 26.492 0 59.065c0 2.827.203 5.612.594 8.342a54.69 54.69 0 00.74 4.168 55.42 55.42 0 00.998 3.917 57.882 57.882 0 004.154 10.464c.021.035.034.069.049.098a53.956 53.956 0 001.71 3.071c.015.028.028.063.049.091a61.523 61.523 0 001.864 2.925 58.886 58.886 0 006.653 8.141l7.456-7.338 2.485-2.449 2.485-2.443L59.06 58.695 88.882 88.05l2.485 2.449 2.485 2.443a45.291 45.291 0 01-2.521 2.416 48.71 48.71 0 01-2.701 2.234 48.303 48.303 0 01-29.571 10.059 48.298 48.298 0 01-29.571-10.059l-7.512 7.399c10.137 8.21 23.051 13.131 37.083 13.131s26.946-4.921 37.09-13.131a54.87 54.87 0 002.652-2.283 59.148 59.148 0 009.111-10.485l-7.609-7.49-2.555-2.514-2.563-2.52L59.06 44.146 22.934 79.701l-2.563 2.52-2.548 2.514c-.021-.028-.042-.056-.056-.091a44.86 44.86 0 01-1.746-3.036c-.014-.028-.027-.063-.049-.092a44.81 44.81 0 01-1.535-3.238c-.021-.035-.035-.07-.049-.098A47.879 47.879 0 0111.1 66.864a48.084 48.084 0 01-.628-7.797c0-.468.006-.936.021-1.396.733-25.941 21.899-46.862 47.945-47.191.202-.007.411-.007.621-.007.209 0 .419 0 .628.007 26.039.329 47.213 21.25 47.945 47.191a49.831 49.831 0 01-.097 4.802 47.736 47.736 0 01-.51 4.398l-3.106-3.058-3.281-3.226L59.06 19.658l-17.05 16.78-6.422 6.32 4.772-6.981v-5.089h.92v-2.555H28.953v2.555h.92v17.694L17.48 60.58a41.107 41.107 0 002.325 12.272l34.36-33.822 4.894-4.824 4.9 4.824 34.36 33.822 2.729 2.681 2.688 2.646 7.901 7.776a58.203 58.203 0 004.153-10.458c.377-1.291.713-2.597.992-3.923.3-1.368.551-2.757.747-4.161.391-2.729.593-5.515.593-8.349C118.125 26.492 91.626 0 59.06 0z"
              fill="#2563eb"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            />
            {/* Porte / fenêtre au centre */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.7 }}
            >
              <path
                d="M50.164 88.413h7.858v7.52h-7.858zM60.103 78.813h7.857v7.52h-7.857zM60.103 88.413h7.857v7.52h-7.857zM50.164 78.813h7.858v7.52h-7.858z"
                fill="#1e293b"
              />
            </motion.g>
          </motion.svg>
        </motion.div>

        {/* Bloc texte + slogan + barre : décalé vers la gauche sur desktop uniquement, centré sur mobile */}
        <div className="relative md:-translate-x-5 flex flex-col items-center -mt-4">
          {/* Nom du site */}
          <motion.div
            className="relative z-10 mt-1 text-center px-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.6, ease: "easeOut" }}
          >
            <p
              className="font-display text-blue-600 text-lg md:text-xl tracking-wide"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Gestion Immobilière
            </p>
            <p
              className="font-display text-slate-900 text-lg md:text-xl tracking-wide -mt-1"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              de l&apos;Estrie
            </p>
          </motion.div>

          {/* Slogan */}
          <motion.p
            className="relative z-10 mt-2 text-slate-500 text-xs md:text-sm tracking-wide text-center"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.9, ease: "easeOut" }}
          >
            Votre partenaire de confiance en Estrie
          </motion.p>

          {/* Ligne de progression */}
          <motion.div
            className="relative z-10 mt-5 h-[2px] w-40 overflow-hidden rounded-full bg-slate-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.4 }}
          >
            <motion.div
              className="h-full bg-blue-600"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: Math.max((duration - 1850) / 1000, 0.3),
                delay: 2.15,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}