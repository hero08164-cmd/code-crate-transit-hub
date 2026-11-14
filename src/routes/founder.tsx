import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/founder";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Founder Anik Kumar | Tube Pilot" },
      { name: "description", content: "Learn about Anik Kumar, founder of Tube Pilot, and the creator-first purpose behind the platform." },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Founder Anik Kumar | Tube Pilot" },
      { property: "og:description", content: "Meet Anik Kumar, founder of Tube Pilot, an AI-powered YouTube Creator OS." },
      { property: "og:url", content: "https://www.tubepilot.shop/founder" },
      { name: "twitter:url", content: "https://www.tubepilot.shop/founder" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Founder Anik Kumar | Tube Pilot" },
    ],
    links: [{"rel":"canonical","href":"https://www.tubepilot.shop/founder"}],
  }),
  component: FounderPage,
});

function FounderPage() {
  return <ParsedHtml html={pageHtml} />;
}
