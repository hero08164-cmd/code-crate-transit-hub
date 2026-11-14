import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Tube Pilot | Customer Support & Help" },
      { name: "description", content: "Contact Tube Pilot support for account, billing, payment, video upload, product and partnership questions. Get help at support@tubepilot.shop." },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Tube Pilot" },
      { property: "og:title", content: "Contact Tube Pilot | Customer Support & Help" },
      { property: "og:description", content: "Need help with Tube Pilot? Contact our support team for account, billing, upload and product-related questions." },
      { property: "og:url", content: "https://www.tubepilot.shop/contact" },
      { name: "twitter:url", content: "https://www.tubepilot.shop/contact" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Contact Tube Pilot" },
      { name: "twitter:description", content: "Contact Tube Pilot support for account, billing, product and partnership questions." },
    ],
    links: [{"rel":"canonical","href":"https://www.tubepilot.shop/contact"}],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <ParsedHtml html={pageHtml} />;
}
