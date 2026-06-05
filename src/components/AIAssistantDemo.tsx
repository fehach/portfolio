import { Bot, Sparkles, TerminalSquare } from "lucide-react";
import FadeIn from "./FadeIn";

const maturityCriteria = [
  ["Enforcement enabled", "20"],
  ["Analysis enabled", "15"],
  ["Policies defined (≥10)", "15"],
  ["Catch-all = DENY", "15"],
  ["Analyzed version exists", "10"],
  ["Protocol specificity (<30% ANY)", "10"],
  ["Has DENY rules", "5"],
  ["Primary workspace", "5"],
  ["Enforced version exists", "5"],
];

export default function AIAssistantDemo() {
  return (
    <section id="ai-demo" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-blue/20 bg-neon-blue/5 text-xs font-mono text-neon-blue tracking-widest uppercase mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                AI Security Demo Concept
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5">
                Turning Security Questions into <span className="text-neon-blue">Actionable Context</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                A visual example of the type of AI-assisted workflow I build: natural language questions, controlled API execution, risk-focused summaries, and outputs that both analysts and executives can use.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Natural Language', 'Safe API Calls', 'Risk Summary', 'CSV Export'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded border border-neon-blue/20 bg-neon-blue/5 text-xs font-mono text-neon-blue/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-[#07111f] border border-card-border overflow-hidden shadow-[0_0_50px_rgba(0,212,255,0.08)]">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-card-border bg-background/60">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
                <span className="ml-3 text-xs font-mono text-gray-500">csw-ai-agent.demo</span>
              </div>

              <div className="p-5 sm:p-6 font-mono text-sm space-y-5">
                <div className="flex gap-3">
                  <TerminalSquare className="w-5 h-5 text-neon-green flex-shrink-0" />
                  <div>
                    <p className="text-neon-green mb-1">Ask</p>
                    <p className="text-gray-300">show me the enforcement maturity assessment of workspace Data Center:WIndows</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Bot className="w-5 h-5 text-neon-blue flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-neon-blue mb-2">Assistant</p>
                    <div className="rounded border border-card-border bg-background/40 p-4 text-gray-400 overflow-x-auto">
                      <p className="text-gray-300 mb-3">Built-in workspace maturity scoring (100 pts):</p>
                      <div className="min-w-[420px] space-y-1">
                        <div className="grid grid-cols-[1fr_80px] gap-4 text-gray-300">
                          <span>Criterion</span>
                          <span>Weight</span>
                        </div>
                        {maturityCriteria.map(([criterion, weight]) => (
                          <div key={criterion} className="grid grid-cols-[1fr_80px] gap-4">
                            <span>{criterion}</span>
                            <span>{weight}</span>
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-gray-300">
                        Ask maturity score for workspace X and you get a full criteria breakdown + level (🏆 Mature / 🟢 Advanced / 🟡 Developing / 🟠 Basic / 🔴 Minimal).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
