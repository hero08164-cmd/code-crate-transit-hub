import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Tube Pilot Blog | YouTube Creator Guides & Tips" },
      { name: "description", content: "Explore Tube Pilot guides for YouTube creators, with practical tips for video planning, SEO, titles and publishing workflows." },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Tube Pilot" },
      { property: "og:title", content: "Tube Pilot Blog | YouTube Creator Guides & Tips" },
      { property: "og:description", content: "Practical guidance for YouTube creators covering content planning, video optimization and publishing workflows." },
      { property: "og:url", content: "https://www.tubepilot.shop/blog" },
      { name: "twitter:url", content: "https://www.tubepilot.shop/blog" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Tube Pilot Blog | YouTube Creator Guides & Tips" },
      { name: "twitter:description", content: "Guides and insights for YouTube creators. Create, optimize, schedule and grow." },
    ],
    links: [{"rel":"canonical","href":"https://www.tubepilot.shop/blog"}],
  }),
  component: BlogPage,
});

function BlogPage() {
  return <ParsedHtml html={pageHtml} />;
}
