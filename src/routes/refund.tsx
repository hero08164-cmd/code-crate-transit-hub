import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/refund";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Tube Pilot" },
      { name: "description", content: "Review Tube Pilot's refund policy for Diamond purchases, video uploads, failed transactions and refund requests." },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Tube Pilot" },
      { property: "og:title", content: "Refund Policy — Tube Pilot" },
      { property: "og:description", content: "Understand Tube Pilot's refund rules for diamond purchases and video uploads." },
      { property: "og:url", content: "https://www.tubepilot.shop/refund" },
      { name: "twitter:url", content: "https://www.tubepilot.shop/refund" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Refund Policy — Tube Pilot" },
      { name: "twitter:description", content: "Tube Pilot's refund policy for diamond purchases and uploads." },
    ],
    links: [{"rel":"canonical","href":"https://www.tubepilot.shop/refund"}],
  }),
  component: RefundPage,
});

function RefundPage() {
  return <ParsedHtml html={pageHtml} />;
}
