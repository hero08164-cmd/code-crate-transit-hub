import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock3, RotateCcw, Youtube } from "lucide-react";

function WatchTimeCalculatorPage() {
  const [videoCount, setVideoCount] = useState("10");
  const [averageViews, setAverageViews] = useState("1000");
  const [averageMinutes, setAverageMinutes] = useState("4");
  const [averageRetention, setAverageRetention] = useState("50");

  const result = useMemo(() => {
    const count = Math.max(0, Number(videoCount) || 0);
    const views = Math.max(0, Number(averageViews) || 0);
    const minutes = Math.max(0, Number(averageMinutes) || 0);
    const retention = Math.min(100, Math.max(0, Number(averageRetention) || 0));
    const totalViews = count * views;
    const watchHours = (totalViews * minutes * retention) / 100 / 60;
    return { totalViews, watchHours, progress: Math.min(100, (watchHours / 4000) * 100) };
  }, [videoCount, averageViews, averageMinutes, averageRetention]);

  const format = (value: number) => new Intl.NumberFormat("en-IN", { maximumFractionDigits: 1 }).format(value);

  function reset() {
    setVideoCount("10");
    setAverageViews("1000");
    setAverageMinutes("4");
    setAverageRetention("50");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fffaff] via-white to-[#fbf7fc] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ead5eb] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#74146f] shadow-sm">
            <Clock3 size={15} /> Free YouTube creator tool
          </span>
          <h1 className="text-3xl font-black tracking-tight text-[#26152a] sm:text-5xl">
            YouTube Watch Time <span className="text-[#74146f]">Calculator</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#695b6d]">
            Estimate your channel's watch hours from video views, average view duration and audience retention.
            Adjust the numbers to model your publishing goals.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl border border-[#ead9ec] bg-white p-5 shadow-[0_24px_80px_-36px_rgba(91,20,91,0.3)] sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#986093]">Your video estimates</p>
                <h2 className="mt-1 text-xl font-extrabold text-[#2d1b31]">Enter your numbers</h2>
              </div>
              <button type="button" onClick={reset} className="inline-flex items-center gap-2 rounded-xl border border-[#ead9ec] px-3 py-2 text-xs font-semibold text-[#74146f] hover:bg-[#fcf6fc]">
                <RotateCcw size={14} /> Reset
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-[#392b3d]">
                Number of videos
                <input type="number" min="0" max="1000000" step="1" value={videoCount} onChange={(e) => setVideoCount(e.target.value)} className="mt-2 w-full rounded-xl border border-[#dfcfe2] bg-[#fdfafd] px-4 py-3 text-base outline-none focus:border-[#8b2685] focus:ring-4 focus:ring-[#8b2685]/10" />
              </label>
              <label className="block text-sm font-semibold text-[#392b3d]">
                Average views per video
                <input type="number" min="0" max="1000000000" step="100" value={averageViews} onChange={(e) => setAverageViews(e.target.value)} className="mt-2 w-full rounded-xl border border-[#dfcfe2] bg-[#fdfafd] px-4 py-3 text-base outline-none focus:border-[#8b2685] focus:ring-4 focus:ring-[#8b2685]/10" />
              </label>
              <label className="block text-sm font-semibold text-[#392b3d]">
                Average video view duration (minutes)
                <input type="number" min="0" max="1440" step="0.5" value={averageMinutes} onChange={(e) => setAverageMinutes(e.target.value)} className="mt-2 w-full rounded-xl border border-[#dfcfe2] bg-[#fdfafd] px-4 py-3 text-base outline-none focus:border-[#8b2685] focus:ring-4 focus:ring-[#8b2685]/10" />
              </label>
              <label className="block text-sm font-semibold text-[#392b3d]">
                Average percentage viewed
                <div className="relative mt-2">
                  <input type="number" min="0" max="100" step="1" value={averageRetention} onChange={(e) => setAverageRetention(e.target.value)} className="w-full rounded-xl border border-[#dfcfe2] bg-[#fdfafd] px-4 py-3 pr-10 text-base outline-none focus:border-[#8b2685] focus:ring-4 focus:ring-[#8b2685]/10" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#8a7b8d]">%</span>
                </div>
              </label>
            </div>
            <p className="mt-5 text-xs leading-5 text-[#8b7d8e]">Use average view duration and retention as estimates. The calculator applies the retention percentage to the average video duration.</p>
          </section>

          <section className="rounded-3xl bg-[#26152a] p-6 text-white shadow-xl shadow-[#35173a]/15 sm:p-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#e8bde8]"><Youtube size={18} /> Estimated result</div>
            <p className="mt-6 text-sm text-[#e5d8e7]">Estimated total watch time</p>
            <p className="mt-1 text-4xl font-black tracking-tight sm:text-5xl">{format(result.watchHours)} <span className="text-xl font-bold text-[#e8bde8]">hours</span></p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-[#e5d8e7]">Estimated views</p>
                <p className="mt-1 text-xl font-extrabold">{format(result.totalViews)}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-[#e5d8e7]">4,000-hour goal</p>
                <p className="mt-1 text-xl font-extrabold">{format(result.progress)}%</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="mb-2 flex justify-between text-xs text-[#e5d8e7]"><span>Progress estimate</span><span>{format(result.watchHours)} / 4,000 hours</span></div>
              <div className="h-3 overflow-hidden rounded-full bg-white/15">
                <div className="h-full rounded-full bg-gradient-to-r from-[#d9a6dc] to-white transition-all" style={{ width: result.progress + "%" }} />
              </div>
            </div>
            <p className="mt-6 text-xs leading-5 text-[#d8c9dc]">This is a planning estimate, not an official YouTube eligibility result. YouTube applies its own rules to valid public watch hours; Shorts Feed watch time does not count toward the 4,000 public watch-hours threshold.</p>
          </section>
        </div>

        <section className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[#ead9ec] bg-white p-6 sm:p-8">
          <h2 className="text-xl font-extrabold text-[#2d1b31]">How is watch time estimated?</h2>
          <p className="mt-3 text-sm leading-7 text-[#695b6d]">Estimated watch hours = number of videos × average views per video × average video duration in minutes × average percentage viewed ÷ 100 ÷ 60.</p>
          <h3 className="mt-5 font-bold text-[#332238]">Is this the same as YouTube monetization watch time?</h3>
          <p className="mt-2 text-sm leading-7 text-[#695b6d]">No. This calculator estimates total viewing time from the inputs you provide. It cannot verify eligible public watch hours in YouTube Studio. Check YouTube Studio and the official YouTube Partner Program requirements for your channel's actual progress.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/ai-studio" className="inline-flex items-center gap-2 rounded-xl bg-[#74146f] px-5 py-3 text-sm font-bold text-white hover:bg-[#5e105a]">Try AI Studio <ArrowRight size={16} /></Link>
            <Link to="/features" className="inline-flex items-center gap-2 rounded-xl border border-[#ead9ec] px-5 py-3 text-sm font-bold text-[#74146f] hover:bg-[#fcf6fc]">Explore Tube Pilot features</Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export const Route = createFileRoute("/watch-time-calculator")({
  head: () => ({
    meta: [
      { title: "Free YouTube Watch Time Calculator | Tube Pilot" },
      { name: "description", content: "Estimate YouTube watch hours using video count, average views, view duration and audience retention with the free Tube Pilot Watch Time Calculator." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Free YouTube Watch Time Calculator | Tube Pilot" },
      { property: "og:description", content: "Estimate your YouTube watch hours and model progress toward a 4,000-hour goal." },
      { property: "og:url", content: "https://www.tubepilot.shop/watch-time-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://www.tubepilot.shop/watch-time-calculator" }],
  }),
  component: WatchTimeCalculatorPage,
});
