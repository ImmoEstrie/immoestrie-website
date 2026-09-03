"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);

  useEffect(() => {
    // Délégation d'événements : détecte tout élément cliquable au survol
    const handleMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      const target = e.target as HTMLElement;
      const hovering = !!target.closest("a, button, .nav-link, [role='button'], .cursor-hover");
      if (isHoveringRef.current !== hovering) {
        isHoveringRef.current = hovering;
      }
    };

    window.addEventListener("mousemove", handleMove);

    let rafId: number;
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%) scale(${isHoveringRef.current ? 2 : 1})`;
        cursorRef.current.style.backgroundColor = "transparent";
        cursorRef.current.style.border = isHoveringRef.current
          ? "2px solid rgba(212,184,118,1)"
          : "1.5px solid rgba(26,39,68,0.4)";
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="cursor-follower hidden md:block"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        backgroundColor: "transparent",
        border: "1.5px solid rgba(26,39,68,0.4)",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        marginLeft: "-12px",
        marginTop: "-12px",
        transition: "background-color 0.2s ease, border-color 0.2s ease",
        willChange: "transform",
      }}
    />
  );
}
