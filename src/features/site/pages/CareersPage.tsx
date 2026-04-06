"use client";

import SitePage from "@/components/layout/SitePage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, ArrowRight, CheckCircle2, Briefcase } from "lucide-react";
import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import SplitText from "@/components/animations/SplitText";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const positions = [
  { 
    title: "Senior Full-Stack Engineer", 
    location: "Remote", 
    type: "Full-time", 
    department: "Engineering",
    description: "Expertise in React, Node.js, and cloud architecture required. Join our core team to build scalable AI-driven solutions.",
    requirements: [
      "5+ years of experience with React and Node.js",
      "Deep understanding of PostgreSQL and Redis",
      "Experience with AWS or GCP",
      "Strong communication and leadership skills"
    ],
    responsibilities: [
      "Lead technical design for new features",
      "Mentor junior developers",
      "Optimize application performance",
      "Collaborate with product and design teams"
    ]
  },
  { 
    title: "AI/ML Engineer", 
    location: "San Francisco, CA", 
    type: "Full-time", 
    department: "AI Lab",
    description: "Build and deploy state-of-the-art machine learning models. Focus on LLM integration and optimization.",
    requirements: [
      "Master's or PhD in CS, Math, or related field",
      "Proficiency in Python and PyTorch/TensorFlow",
      "Experience with LLMs and prompt engineering",
      "Strong background in algorithms and statistics"
    ],
    responsibilities: [
      "Develop custom ML models for client needs",
      "Fine-tune existing LLMs for specific tasks",
      "Research new AI techniques and tools",
      "Build scalable data processing pipelines"
    ]
  },
  { 
    title: "DevOps Engineer", 
    location: "Remote", 
    type: "Full-time", 
    department: "Infrastructure",
    description: "Scale our global infrastructure and automate everything. Help us maintain 99.9% uptime for our AI platforms.",
    requirements: [
      "Experience with Kubernetes and Docker",
      "Proficiency in Terraform or Ansible",
      "Strong knowledge of CI/CD pipelines",
      "Experience with monitoring tools like Prometheus"
    ],
    responsibilities: [
      "Manage cloud infrastructure across multiple regions",
      "Automate deployment and scaling processes",
      "Ensure security and compliance standards",
      "Respond to and resolve infrastructure incidents"
    ]
  },
  { 
    title: "UX Designer", 
    location: "New York, NY", 
    type: "Full-time", 
    department: "Design",
    description: "Craft premium digital experiences for AI applications. Focus on user-centric design and intuitive interactions.",
    requirements: [
      "Portfolio demonstrating premium UI/UX design",
      "Proficiency in Figma and Adobe Creative Suite",
      "Experience with prototyping and user testing",
      "Understanding of HTML/CSS is a plus"
    ],
    responsibilities: [
      "Create high-fidelity mockups and prototypes",
      "Conduct user research and usability testing",
      "Collaborate with engineers on implementation",
      "Maintain and evolve our design system"
    ]
  },
  { 
    title: "Project Manager", 
    location: "Remote", 
    type: "Full-time", 
    department: "Operations",
    description: "Drive technical projects from inception to delivery. Bridge the gap between clients and our engineering teams.",
    requirements: [
      "3+ years of technical project management experience",
      "Strong understanding of Agile methodologies",
      "Excellent communication and organization skills",
      "Background in software development is preferred"
    ],
    responsibilities: [
      "Define project scope and timelines",
      "Manage client expectations and communication",
      "Coordinate cross-functional team efforts",
      "Track project progress and mitigate risks"
    ]
  },
];

const CareersPage = () => {
  const [selectedPosition, setSelectedPosition] = useState<typeof positions[0] | null>(null);

  return (
    <SitePage className="bg-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, hsl(217 91% 60%) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-32 right-[10%] w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[140px] opacity-50" />
        <div className="absolute bottom-32 left-[5%] w-[25rem] h-[25rem] bg-accent/10 rounded-full blur-[120px] opacity-40" />
      </div>

      <section className="relative z-10 pt-32 pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <FadeIn delay={0}>
              <Badge
                variant="outline"
                className="mb-4 inline-flex border-primary/10 bg-primary/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary shadow-sm hover:bg-primary/5"
              >
                Careers
              </Badge>
            </FadeIn>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 tracking-tight leading-[1.1]">
              <SplitText text="Build the" splitBy="words" delay={0.2} />
              <br className="hidden sm:block" />
              <SplitText text="Future With Us" splitBy="words" delay={0.4} gradient />
            </h1>
            <FadeIn delay={0.6}>
              <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">Join a team of engineers, designers, and strategists shaping tomorrow's technology.</p>
            </FadeIn>
          </div>

          <div className="max-w-7xl mx-auto space-y-4">
            {positions.map((p, index) => (
              <FadeIn key={p.title} delay={0.2 + (index * 0.1)} direction="up">
                <motion.div onClick={() => setSelectedPosition(p)} whileHover={{ y: -5, scale: 1.01 }}>
                  <Card className="group relative flex cursor-pointer flex-col items-start justify-between gap-6 overflow-hidden border-slate-100 bg-white/70 p-8 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-primary/20 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 sm:flex-row sm:items-center rounded-3xl">
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  </div>
                  
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-xl bg-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Briefcase size={16} className="text-primary" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{p.department}</span>
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">{p.title}</h3>
                      <div className="flex flex-wrap items-center gap-6 mt-4 text-sm text-slate-500 font-medium">
                      <span className="flex items-center gap-2"><MapPin size={16} className="text-slate-400" /> {p.location}</span>
                      <span className="flex items-center gap-2"><Clock size={16} className="text-slate-400" /> {p.type}</span>
                      </div>
                    </div>
                    <div className="relative z-10 shrink-0">
                      <Button variant="outline" size="lg" className="rounded-full border-slate-200 text-slate-900 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 gap-3 font-bold px-8 shadow-sm">
                        View Position <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedPosition} onOpenChange={(open) => !open && setSelectedPosition(null)}>
        <DialogContent 
          className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] p-0 border-0 shadow-2xl backdrop-blur-2xl bg-white/95"
          onInteractOutside={(e) => e.preventDefault()}
        >
          {selectedPosition && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-9"
            >
              <DialogHeader className="mb-10 text-left">
                <div className="mb-4 flex items-center gap-3">
                  <Badge
                    variant="secondary"
                    className="rounded-full bg-primary/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary hover:bg-primary/15"
                  >
                    {selectedPosition.department}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="rounded-full bg-slate-100 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-500 hover:bg-slate-100"
                  >
                    {selectedPosition.type}
                  </Badge>
                </div>
                <DialogTitle className="text-3xl md:text-4xl font-bold text-slate-900 font-heading mb-3 tracking-tight">{selectedPosition.title}</DialogTitle>
                <div className="flex flex-wrap items-center gap-6 text-slate-500 font-semibold text-sm">
                  <span className="flex items-center gap-2"><MapPin size={18} className="text-slate-400" /> {selectedPosition.location}</span>
                  <span className="flex items-center gap-2"><Clock size={18} className="text-slate-400" /> {selectedPosition.type}</span>
                </div>
              </DialogHeader>

              <div className="space-y-10">
                <div className="relative p-3 rounded-2xl bg-slate-50/50 border border-slate-100">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Role Overview</h4>
                  <p className="text-slate-600 leading-relaxed font-medium text-lg">"{selectedPosition.description}"</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <FadeIn delay={0.1} direction="up">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">Requirements</h4>
                    <ul className="space-y-4">
                      {selectedPosition.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-sm text-slate-600 font-semibold">
                          <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </FadeIn>
                  <FadeIn delay={0.2} direction="up">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">Responsibilities</h4>
                    <ul className="space-y-4">
                      {selectedPosition.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-sm text-slate-600 font-semibold">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0 shadow-lg shadow-primary/40" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </FadeIn>
                </div>

                <div className="pt-10 mt-10 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 h-14 rounded-full bg-primary text-white hover:bg-primary/95 text-lg font-semibold shadow-2xl shadow-primary/30 group">
                    Apply Now <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300 " />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </SitePage>
  );
};

export default CareersPage;
