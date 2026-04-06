"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string) => {
    let error = "";
    if (name === "fullName" && !value.trim()) {
      error = "Full name is required";
    } else if (name === "email") {
      if (!value.trim()) {
        error = "Email address is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Please enter a valid email address";
      }
    } else if (name === "message" && !value.trim()) {
      error = "Please tell us about your project";
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({
        fullName: true,
        email: true,
        company: true,
        message: true
      });
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-8">
          <Send size={40} className="text-green-500" />
        </div>
        <h3 className="font-heading text-3xl font-bold text-slate-900 mb-4">Message Sent!</h3>
        <p className="text-slate-500 text-lg max-w-sm mx-auto">
          Thank you for reaching out. A specialist will review your request and get back to you shortly.
        </p>
        <Button 
          onClick={() => setSubmitted(false)}
          variant="ghost" 
          className="mt-8 text-primary font-bold hover:bg-primary/5"
        >
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="contact-fullName" className="ml-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Full Name
          </Label>
          <Input
            id="contact-fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. John Doe"
            className={cn(
              "h-auto w-full rounded-2xl border-slate-100 bg-slate-50/50 px-6 py-4 text-sm font-medium text-slate-900 transition-all focus-visible:border-primary focus-visible:bg-white focus-visible:ring-primary/20",
              errors.fullName && "border-red-500 focus-visible:ring-red-200",
            )}
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.fullName}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email" className="ml-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Email Address
          </Label>
          <Input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="john@company.com"
            className={cn(
              "h-auto w-full rounded-2xl border-slate-100 bg-slate-50/50 px-6 py-4 text-sm font-medium text-slate-900 transition-all focus-visible:border-primary focus-visible:bg-white focus-visible:ring-primary/20",
              errors.email && "border-red-500 focus-visible:ring-red-200",
            )}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.email}</p>}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="contact-company" className="ml-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          Company / Project Name
        </Label>
        <Input
          id="contact-company"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your venture name"
          className="h-auto w-full rounded-2xl border-slate-100 bg-slate-50/50 px-6 py-4 text-sm font-medium text-slate-900 transition-all focus-visible:border-primary focus-visible:bg-white focus-visible:ring-primary/20"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message" className="ml-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          How can we help?
        </Label>
        <Textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Describe your project, goals, and timeline..."
          rows={5}
          className={cn(
            "min-h-0 resize-none rounded-2xl border-slate-100 bg-slate-50/50 px-6 py-4 text-sm font-medium text-slate-900 transition-all focus-visible:border-primary focus-visible:bg-white focus-visible:ring-primary/20",
            errors.message && "border-red-500 focus-visible:ring-red-200",
          )}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.message}</p>}
      </div>

      <Button type="submit" className="w-full h-16 rounded-full bg-primary text-white hover:bg-primary/90 text-lg font-bold gap-3 shadow-xl shadow-primary/20 transition-all duration-300 group">
        Start the Conversation <ArrowRight className="group-hover:translate-x-1 transition-transform" />
      </Button>
      
      <p className="text-center text-xs text-slate-400 font-medium">
        By submitting this form, you agree to our privacy policy.
      </p>
    </form>
  );
};

export default ContactForm;
