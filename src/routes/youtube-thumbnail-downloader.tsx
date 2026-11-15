import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Image as ImageIcon, Search } from "lucide-react";

function extractVideoId(value: string) {
  const input = value.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;
  try {
    const url = new URL(input);
    if (url.hostname === "youtu.be" || url.hostname.endsWith(".youtu.be")) return url.pathname.split("/").filter(Boolean)[0] ?? "";
    if (url.hostname.includes("youtube.com")) {
      const v = url.searchParams.get("v");
      if (v) return v;
      const parts = url.pathname.split("/").filter(Boolean);
      const marker = parts.findIndex((part) => ["embed", "shorts", "live"].includes(part));
      if (marker >= 0) return parts[marker + 1] ?? "";
    }
  } catch {
    return "";
  }
  return "";
}

function ThumbnailDownloaderPage() {
  const [input, setInput] = useState("");
  const [videoId, setVideoId] = useState("");
  const [error, setError] = useState("");
  const qualities = [
    { label: "Maximum resolution", file: "maxresdefault.jpg", note: "Available for supported videos" },
    { label: "High quality", file: "hqdefault.jpg", note: "Usually 480 × 360" },
    { label: "Medium quality", file: "mqdefault.jpg", note: "Usually 320 × 180" },
    { label: "Standard quality", file: "sddefault.jpg", note: "Available for supported videos" },
  ];
  function find() {
    const id = extractVideoId(input);
    if (!/^[a-zA-Z0-9_-]{11}$/.test(id)) {
      setError("Enter a valid YouTube video URL or 11-character video ID.");
      setVideoId("");
      return;
    }
    setError("");
    setVideoId(id);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fffaff] via-white to-[#fbf7fc] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto mb-9 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ead5eb] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#74146f] shadow-sm"><ImageIcon size={15} /> Free YouTube creator tool</span>
          <h1 className="text-3xl font-black tracking-tight text-[#26152a] sm:text-5xl">YouTube Thumbnail <span className="text-[#74146f]">Downloader</span></h1>
          <p className="mt-4 text-base leading-7 text-[#695b6d]">Preview and download available thumbnail images for a public YouTube video using its link or video ID.</p>
        </div>
        <section className="rounded-3xl border border-[#ead9ec] bg-white p-5 shadow-[0_24px_80px_-36px_rgba(91,20,91,0.3)] sm:p-8">
          <label htmlFor="youtube-url" className="block text-sm font-semibold text-[#392b3d]">YouTube video URL or video ID</label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <input id="youtube-url" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") find(); }} placeholder="https://www.youtube.com/watch?v=..." className="min-w-0 flex-1 rounded-xl border border-[#dfcfe2] bg-[#fdfafd] px-4 py-3 text-base outline-none focus:border-[#8b2685] focus:ring-4 focus:ring-[#8b2685]/10" />
            <button type="button" onClick={find} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#74146f] px-5 py-3 text-sm font-bold text-white hover:bg-[#5e105a]"><Search size={16} /> Get thumbnails</button>
          </div>
          {error && <p role="alert" className="mt-3 text-sm font-medium text-red-600">{error}</p>}
          {videoId && <div aria-live="polite" className="mt-7 space-y-5">
            <p className="text-sm font-semibold text-[#392b3d]">Available thumbnail variants for video <span className="font-mono text-[#74146f]">{videoId}</span></p>
            <div className="grid gap-5 sm:grid-cols-2">
              {qualities.map((quality) => {
                const url = "https://i.ytimg.com/vi/" + videoId + "/" + quality.file;
                return <article key={quality.file} className="overflow-hidden rounded-2xl border border-[#eee3ef] bg-[#fcf8fc]">
                  <img src={url} alt={quality.label + " YouTube thumbnail"} loading="lazy" className="aspect-video w-full object-cover" onError={(e) => { e.currentTarget.style.opacity = "0.25"; }} />
                  <div className="flex items-center justify-between gap-3 p-4">
                    <div><h2 className="text-sm font-bold text-[#332238]">{quality.label}</h2><p className="mt-1 text-xs text-[#8b7d8e]">{quality.note}</p></div>
                    <a href={url} target="_blank" rel="noopener noreferrer" download className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#74146f] px-3 py-2 text-xs font-bold text-white hover:bg-[#5e105a]"><Download size={14} /> Open</a>
                  </div>
                </article>;
              })}
            </div>
          </div>}
          <p className="mt-6 text-xs leading-5 text-[#8b7d8e]">Only public thumbnail image URLs are displayed. Some resolutions may not exist for every video. Respect the video owner's copyright and YouTube's terms; use thumbnails only when you have permission or a lawful basis.</p>
        </section>
        <p className="mt-7 text-center text-sm text-[#695b6d]">Explore more <Link to="/features" className="font-semibold text-[#74146f] underline">Tube Pilot creator tools</Link>.</p>
      </div>
    </main>
  );
}

export const Route = createFileRoute("/youtube-thumbnail-downloader")({
  head: () => ({
    meta: [
      { title: "YouTube Thumbnail Downloader | Tube Pilot" },
      { name: "description", content: "Preview and open available public YouTube video thumbnails by pasting a video URL or ID with Tube Pilot's free thumbnail downloader." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "YouTube Thumbnail Downloader | Tube Pilot" },
      { property: "og:description", content: "Find available thumbnail image variants for a public YouTube video." },
      { property: "og:url", content: "https://www.tubepilot.shop/youtube-thumbnail-downloader" },
    ],
    links: [{ rel: "canonical", href: "https://www.tubepilot.shop/youtube-thumbnail-downloader" }],
  }),
  component: ThumbnailDownloaderPage,
});
