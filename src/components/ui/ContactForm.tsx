"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type SubmitStatus = "idle" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validate = (): string | null => {
    if (!formData.name.trim()) return "Le nom est requis.";
    if (!formData.email.trim()) return "L'email est requis.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Email invalide.";
    if (!formData.message.trim()) return "Le message est requis.";
    if (formData.message.trim().length < 10) return "Le message doit contenir au moins 10 caractères.";
    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitStatus !== "idle") setSubmitStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setErrorMsg(validationError);
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: "Nouveau message depuis le site - Gestion Immobilière de l'Estrie",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(data.message || "Erreur lors de l'envoi.");
      }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue. Réessayez.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-card border border-surface-variant">
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div>
          <label htmlFor="name" className="block font-label-md text-label-sm text-primary mb-2">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jean Tremblay"
            type="text"
            required
            className="w-full bg-surface-bright border border-outline-variant focus:border-accent-gold-dark focus:ring-2 focus:ring-accent-gold-dark/20 rounded-lg px-4 py-3 font-body-md text-on-surface outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block font-label-md text-label-sm text-primary mb-2">
              Courriel <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jean@exemple.com"
              type="email"
              required
              className="w-full bg-surface-bright border border-outline-variant focus:border-accent-gold-dark focus:ring-2 focus:ring-accent-gold-dark/20 rounded-lg px-4 py-3 font-body-md text-on-surface outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block font-label-md text-label-sm text-primary mb-2">
              Téléphone <span className="text-on-surface-variant font-normal">(optionnel)</span>
            </label>
            <input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(819) 555-0123"
              type="tel"
              className="w-full bg-surface-bright border border-outline-variant focus:border-accent-gold-dark focus:ring-2 focus:ring-accent-gold-dark/20 rounded-lg px-4 py-3 font-body-md text-on-surface outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block font-label-md text-label-sm text-primary mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Décrivez vos besoins..."
            rows={4}
            required
            className="w-full bg-surface-bright border border-outline-variant focus:border-accent-gold-dark focus:ring-2 focus:ring-accent-gold-dark/20 rounded-lg px-4 py-3 font-body-md text-on-surface resize-none outline-none transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#1a2744] hover:bg-[#243156] disabled:opacity-60 disabled:cursor-not-allowed text-white font-label-md text-label-md py-4 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4 border border-[#1a2744]"
        >
          {isSubmitting ? (
            <>
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
              Envoi en cours...
            </>
          ) : (
            "Envoyer la demande"
          )}
        </button>
      </form>

      <AnimatePresence mode="wait">
        {submitStatus === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-6 bg-green-50 border border-green-200 text-green-800 rounded-lg px-4 py-3 font-body-md text-body-sm flex items-start gap-3"
            role="status"
          >
            <span className="material-symbols-outlined text-green-600 text-[20px] mt-0.5">check_circle</span>
            <span>Merci ! Votre message a bien été envoyé. Nous vous répondrons sous 24h.</span>
          </motion.div>
        )}
        {submitStatus === "error" && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-6 bg-red-50 border border-red-200 text-red-800 rounded-lg px-4 py-3 font-body-md text-body-sm flex items-start gap-3"
            role="alert"
          >
            <span className="material-symbols-outlined text-red-600 text-[20px] mt-0.5">error</span>
            <span>{errorMsg || "Échec de l'envoi. Vérifiez vos informations et réessayez."}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
