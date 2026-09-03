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

const WEB3FORMS_ACCESS_KEY = "b6403f02-5abf-45e8-acfc-695b354613ae";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Le nom est requis.";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide.";
    }
    if (!formData.message.trim()) newErrors.message = "Le message est requis.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `Nouveau message de ${formData.name} — Site Gestion Immobilière de l'Estrie`,
          from_name: "Site Gestion Immobilière de l'Estrie",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto space-y-5">
      {/* Nom */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#1a2744] mb-1.5">
          Nom complet
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Votre nom"
          disabled={isSubmitting}
          className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-colors disabled:opacity-50 ${
            errors.name
              ? "border-red-400 focus:ring-red-300"
              : "border-slate-200 focus:ring-amber-400 focus:border-amber-400"
          }`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#1a2744] mb-1.5">
          Courriel
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="vous@exemple.com"
          disabled={isSubmitting}
          className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-colors disabled:opacity-50 ${
            errors.email
              ? "border-red-400 focus:ring-red-300"
              : "border-slate-200 focus:ring-amber-400 focus:border-amber-400"
          }`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Téléphone (optionnel) */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#1a2744] mb-1.5">
          Téléphone <span className="text-slate-400 font-normal">(optionnel)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(819) 000-0000"
          disabled={isSubmitting}
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors disabled:opacity-50"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1a2744] mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Comment pouvons-nous vous aider ?"
          disabled={isSubmitting}
          className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-colors resize-none disabled:opacity-50 ${
            errors.message
              ? "border-red-400 focus:ring-red-300"
              : "border-slate-200 focus:ring-amber-400 focus:border-amber-400"
          }`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      {/* Bouton d'envoi */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#1a2744] hover:bg-[#243354] text-white font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Envoi en cours...
          </>
        ) : (
          "Envoyer le message"
        )}
      </button>

      {/* Messages de statut */}
      <AnimatePresence mode="wait">
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 text-sm text-center"
          >
            Votre message a bien été envoyé. Nous vous répondrons rapidement.
          </motion.div>
        )}
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm text-center"
          >
            Une erreur est survenue. Réessayez ou écrivez-nous directement à{" "}
            <a href="mailto:info@immoestrie.ca" className="underline font-medium">
              info@immoestrie.ca
            </a>
            .
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}