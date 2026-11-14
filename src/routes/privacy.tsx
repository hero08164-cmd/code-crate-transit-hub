import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/privacy";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Tube Pilot — Data Collection & Protection" },
      { name: "description", content: "Read the Tube Pilot Privacy Policy to understand how we collect, use, store and protect account information, video content and YouTube API data." },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Tube Pilot" },
      { property: "og:title", content: "Privacy Policy | Tube Pilot — Data Collection & Protection" },
      { property: "og:description", content: "Learn how Tube Pilot handles account information, video content, YouTube API data and privacy choices." },
      { property: "og:url", content: "https://www.tubepilot.shop/privacy" },
      { name: "twitter:url", content: "https://www.tubepilot.shop/privacy" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Tube Pilot Privacy Policy" },
      { name: "twitter:description", content: "Understand how Tube Pilot collects, uses and protects your data." },
    ],
    links: [{"rel":"canonical","href":"https://www.tubepilot.shop/privacy"}],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <ParsedHtml html={pageHtml} />;
}
