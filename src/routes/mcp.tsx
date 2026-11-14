import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/mcp";

export const Route = createFileRoute("/mcp")({
  head: () => ({
    meta: [
      { title: "Tube Pilot MCP | Model Context Protocol for YouTube Creator Workflows" },
      { name: "description", content: "Discover Tube Pilot MCP, a Model Context Protocol layer for compatible AI assistants and supported YouTube creator workflows." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Tube Pilot" },
      { property: "og:title", content: "Tube Pilot MCP | Model Context Protocol for YouTube Creator Workflows" },
      { property: "og:description", content: "Learn how Tube Pilot MCP is designed to connect compatible AI assistants and agents with supported YouTube creator workflows." },
      { property: "og:url", content: "https://www.tubepilot.shop/mcp" },
      { name: "twitter:url", content: "https://www.tubepilot.shop/mcp" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Tube Pilot MCP" },
      { name: "twitter:description", content: "Explore the Model Context Protocol integration direction of Tube Pilot." },
    ],
    links: [{"rel":"canonical","href":"https://www.tubepilot.shop/mcp"}],
  }),
  component: McpPage,
});

function McpPage() {
  return <ParsedHtml html={pageHtml} />;
}
