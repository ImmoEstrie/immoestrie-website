"use client";

import { useState } from "react";
import SplashScreen from "@/components/ui/SplashScreen";

export default function SplashWrapper({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);

  return (
    <>
      {children}
      {!done && <SplashScreen onComplete={() => setDone(true)} duration={800} />}
    </>
  );
}
