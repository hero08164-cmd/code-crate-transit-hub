import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/about";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tube Pilot | Founded by Anik Kumar | AI-Powered YouTube Creator OS" },
      { name: "description", content: "Meet Tube Pilot, the AI YouTube Creator OS built by Bharat Cloud Technologies to help creators plan, optimize and schedule videos." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Tube Pilot" },
      { property: "og:title", content: "About Tube Pilot | Founded by Anik Kumar | AI-Powered YouTube Creator OS" },
      { property: "og:description", content: "Tube Pilot is an AI-powered YouTube Creator OS founded by Anik Kumar. Learn about the founder and the mission behind Tube Pilot & Bharat Cloud Technologies." },
      { property: "og:url", content: "https://www.tubepilot.shop/about" },
      { name: "twitter:url", content: "https://www.tubepilot.shop/about" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Tube Pilot | Founder Anik Kumar" },
      { name: "twitter:description", content: "Meet Anik Kumar, Founder of Tube Pilot & Bharat Cloud Technologies. Building the AI-powered OS for YouTube creators." },
    ],
    links: [{"rel":"canonical","href":"https://www.tubepilot.shop/about"}],
  }),
  component: AboutPage,
});

function AboutPage() {
  return <ParsedHtml html={pageHtml} />;
}
