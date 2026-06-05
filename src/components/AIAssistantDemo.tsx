"use client";

import { useState, useRef } from "react";
import { Bot, Sparkles, TerminalSquare, Send, Loader2 } from "lucide-react";
import FadeIn from "./FadeIn";

const SAMPLE_QUESTIONS = [
  "What are the five pillars of Zero Trust?",
  "How does microsegmentation improve PCI-DSS compliance?",
  "What is the difference between allowlisting and denylisting in segmentation?",
];

export default function AIAssistantDemo() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [asked, setAsked] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (q?: string) => {
    const query = (q ?? question).trim();
    if (!query || loading) return;

    setLoading(true);
    setError("");
    setAnswer("");
    setAsked(true);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: query }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Something went wrong.");
        return;
      }

      const reader = res.body?.getReader();
      if (!reader) { setError("Stream unavailable."); return; }

      const decoder = new TextDecoder();
      let done = false;
      while (!done) {
        const { value, done: streamDone } = await reader.read();
        done = streamDone;
        if (value) setAnswer((prev) => prev + decoder.decode(value, { stream: !done }));
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSample = (q: string) => {
    setQuestion(q);
    handleSubmit(q);
  };

  return (
    <section id="ai-demo" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-blue/20 bg-neon-blue/5 text-xs font-mono text-neon-blue tracking-widest uppercase mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                Live AI Security Advisor
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5">
                Ask a <span className="text-neon-blue">Security Question</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                A live demo powered by Claude. Ask about Zero Trust architecture,
                microsegmentation, PCI-DSS controls, or any cybersecurity topic.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Zero Trust", "PCI-DSS", "Microsegmentation", "CISSP"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded border border-neon-blue/20 bg-neon-blue/5 text-xs font-mono text-neon-blue/80">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-600 font-mono mb-3">Try a sample question:</p>
              <div className="space-y-2">
                {SAMPLE_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSample(q)}
                    disabled={loading}
                    className="w-full text-left text-xs font-mono text-gray-400 hover:text-neon-blue px-3 py-2 rounded border border-card-border hover:border-neon-blue/30 bg-card-bg/40 transition-all duration-200 disabled:opacity-50"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-[#07111f] border border-card-border overflow-hidden shadow-[0_0_50px_rgba(0,212,255,0.08)]">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-card-border bg-background/60">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
                <span className="ml-3 text-xs font-mono text-gray-500">fhs-security-advisor</span>
              </div>

              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex gap-2">
                  <textarea
                    ref={textareaRef}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit();
                      }
                    }}
                    placeholder="Ask about Zero Trust, PCI-DSS, microsegmentation..."
                    rows={2}
                    className="flex-1 bg-background/60 border border-card-border rounded px-3 py-2 text-sm font-mono text-gray-300 placeholder-gray-600 focus:outline-none focus:border-neon-blue/40 resize-none"
                    aria-label="Security question"
                  />
                  <button
                    onClick={() => handleSubmit()}
                    disabled={!question.trim() || loading}
                    className="self-end px-3 py-2 rounded border border-neon-blue/40 text-neon-blue hover:bg-neon-blue/10 disabled:opacity-40 transition-all"
                    aria-label="Send question"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {asked && (
                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex gap-3">
                      <TerminalSquare className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-neon-green mb-1">Query</p>
                        <p className="text-gray-300">{question}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Bot className="w-5 h-5 text-neon-blue flex-shrink-0 mt-0.5" />
                      <div className="min-w-0 flex-1">
                        <p className="text-neon-blue mb-2">Advisor</p>
                        {loading && !answer && (
                          <div className="flex items-center gap-2 text-gray-500">
                            <Loader2 className="w-3 h-3 animate-spin" />
                            <span className="text-xs">Thinking...</span>
                          </div>
                        )}
                        {error && (
                          <p className="text-red-400 text-xs">{error}</p>
                        )}
                        {answer && (
                          <div className="rounded border border-card-border bg-background/40 p-4 text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                            {answer}
                            {loading && <span className="inline-block w-1 h-4 bg-neon-blue/80 ml-0.5 animate-pulse" />}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {!asked && (
                  <p className="text-xs text-gray-600 font-mono text-center py-4">
                    Press Enter or click Send to ask a question
                  </p>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
