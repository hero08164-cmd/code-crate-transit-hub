import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Copy, RefreshCw, Sparkles } from "lucide-react";

const words: Record<string, string[]> = {
  tech: ["Pixel", "Byte", "Circuit", "Future", "Digital", "Nexus", "Tech"],
  gaming: ["Level", "Quest", "Respawn", "Pixel", "Clutch", "Arcade", "Play"],
  education: ["Learn", "Study", "Bright", "Wisdom", "Academy", "Explain", "Mind"],
  vlog: ["Daily", "Stories", "Life", "Moments", "Journey", "Unfiltered", "Diaries"],
  fitness: ["Fit", "Active", "Strength", "Move", "Peak", "Vital", "Train"],
  general: ["Creative", "Central", "Hub", "Studio", "World", "Zone", "Spot"],
};
const endings = ["Studio", "Hub", "Zone", "World", "Lab", "Corner", "Diary", "TV", "Works", "Space"];

function buildNames(topic: string, keyword: string, style: string) {
  const base = (keyword.trim() || topic.trim()).replace(/[^a-zA-Z0-9 ]/g, "").trim();
  const clean = base ? base.charAt(0).toUpperCase() + base.slice(1) : "Creator";
  const pool = words[topic] ?? words.general;
  const candidates = [
    clean + " " + endings[0],
    pool[0] + clean,
    clean + " " + endings[1],
    pool[1] + " " + clean,
    clean + " " + endings[2],
    pool[2] + " " + endings[3],
    clean + " " + endings[4],
    pool[3] + clean + " TV",
    clean + " " + endings[5],
    pool[4] + " " + clean,
    clean + " " + endings[6],
    pool[5] + clean,
  ];
  const unique = [...new Set(candidates)];
  if (style === "short") return unique.sort((a, b) => a.length - b.length).slice(0, 8);
  if (style === "professional") return unique.filter((n) => /Studio|Lab|Works|Academy|Central|Hub/.test(n)).slice(0, 8);
  return unique.slice(0, 8);
}

function ChannelNameGeneratorPage() {
  const [topic, setTopic] = useState("tech");
  const [keyword, setKeyword] = useState("");
  const [style, setStyle] = useState("balanced");
  const [seed, setSeed] = useState(0);
  const names = useMemo(() => buildNames(topic, keyword, style).map((name, i) => seed % 2 && i === 0 ? name + " Official" : name), [topic, keyword, style, seed]);
  const [copied, setCopied] = useState("");

  async function copy(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      window.setTimeout(() => setCopied(""), 1500);
    } catch {
      setCopied("");
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fffaff] via-white to-[#fbf7fc] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto mb-9 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ead5eb] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#74146f] shadow-sm"><Sparkles size={15} /> Free YouTube creator tool</span>
          <h1 className="text-3xl font-black tracking-tight text-[#26152a] sm:text-5xl">YouTube Channel Name <span className="text-[#74146f]">Generator</span></h1>
          <p className="mt-4 text-base leading-7 text-[#695b6d]">Generate channel name ideas based on your niche, keyword and preferred style. Shortlist your favourites and check availability before using one.</p>
        </div>
        <section className="rounded-3xl border border-[#ead9ec] bg-white p-5 shadow-[0_24px_80px_-36px_rgba(91,20,91,0.3)] sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-[#392b3d]">Choose your channel niche
              <select value={topic} onChange={(e) => setTopic(e.target.value)} className="mt-2 w-full rounded-xl border border-[#dfcfe2] bg-[#fdfafd] px-4 py-3 text-base outline-none focus:border-[#8b2685]">
                <option value="tech">Technology & AI</option><option value="gaming">Gaming</option><option value="education">Education</option><option value="vlog">Vlogging & Lifestyle</option><option value="fitness">Fitness</option><option value="general">Other / General</option>
              </select>
            </label>
            <label className="text-sm font-semibold text-[#392b3d]">Add a keyword (optional)
              <input value={keyword} onChange={(e) => setKeyword(e.target.value)} maxLength={32} placeholder="e.g. Anik, coding, travel" className="mt-2 w-full rounded-xl border border-[#dfcfe2] bg-[#fdfafd] px-4 py-3 text-base outline-none focus:border-[#8b2685] focus:ring-4 focus:ring-[#8b2685]/10" />
            </label>
            <label className="text-sm font-semibold text-[#392b3d] sm:col-span-2">Name style
              <select value={style} onChange={(e) => setStyle(e.target.value)} className="mt-2 w-full rounded-xl border border-[#dfcfe2] bg-[#fdfafd] px-4 py-3 text-base outline-none focus:border-[#8b2685]">
                <option value="balanced">Balanced</option><option value="short">Short & memorable</option><option value="professional">Professional</option>
              </select>
            </label>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <button type="button" onClick={() => { setSeed((s) => s + 1); setCopied(""); }} className="inline-flex items-center gap-2 rounded-xl bg-[#74146f] px-5 py-3 text-sm font-bold text-white hover:bg-[#5e105a]"><RefreshCw size={16} /> Generate names</button>
            <button type="button" onClick={() => copy(names.join("\n"))} className="inline-flex items-center gap-2 rounded-xl border border-[#ead9ec] px-5 py-3 text-sm font-bold text-[#74146f] hover:bg-[#fcf6fc]"><Copy size={16} /> {copied === names.join("\n") ? "Copied all" : "Copy all"}</button>
          </div>
          <div aria-live="polite" className="mt-7 grid gap-3 sm:grid-cols-2">
            {names.map((name) => <div key={name} className="flex items-center justify-between gap-3 rounded-2xl border border-[#eee3ef] bg-[#fcf8fc] p-4"><span className="font-bold text-[#332238]">{name}</span><button type="button" onClick={() => copy(name)} aria-label={"Copy " + name} className="rounded-lg p-2 text-[#74146f] hover:bg-white">{copied === name ? "Copied" : <Copy size={16} />}</button></div>)}
          </div>
          <p className="mt-5 text-xs leading-5 text-[#8b7d8e]">These are locally generated name ideas, not AI-generated availability checks. YouTube handle and channel-name availability are not verified. Check the name on YouTube and relevant trademark databases before adopting it.</p>
        </section>
        <p className="mt-7 text-center text-sm text-[#695b6d]">Need help preparing your videos too? <Link to="/ai-studio" className="font-semibold text-[#74146f] underline">Try Tube Pilot AI Studio</Link>.</p>
      </div>
    </main>
  );
}

export const Route = createFileRoute("/channel-name-generator")({
  head: () => ({
    meta: [
      { title: "Free YouTube Channel Name Generator | Tube Pilot" },
      { name: "description", content: "Generate YouTube channel name ideas by niche, keyword and style with the free Tube Pilot Channel Name Generator." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Free YouTube Channel Name Generator | Tube Pilot" },
      { property: "og:description", content: "Create channel name ideas for your YouTube niche and style." },
      { property: "og:url", content: "https://www.tubepilot.shop/channel-name-generator" },
    ],
    links: [{ rel: "canonical", href: "https://www.tubepilot.shop/channel-name-generator" }],
  }),
  component: ChannelNameGeneratorPage,
});
