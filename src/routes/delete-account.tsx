import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/delete-account";

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: [
      { title: "Account &amp; Data Deletion — Tube Pilot" },
      { name: "description", content: "Learn how to delete your Tube Pilot account and request deletion of associated personal data through the app or email." },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Tube Pilot" },
      { property: "og:title", content: "Account &amp; Data Deletion — Tube Pilot" },
      { property: "og:description", content: "Learn how to delete your Tube Pilot account and request deletion of associated personal data." },
      { property: "og:url", content: "https://www.tubepilot.shop/delete-account" },
      { name: "twitter:url", content: "https://www.tubepilot.shop/delete-account" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Account &amp; Data Deletion — Tube Pilot" },
      { name: "twitter:description", content: "Instructions for deleting your Tube Pilot account and associated data." },
    ],
    links: [{"rel":"canonical","href":"https://www.tubepilot.shop/delete-account"}],
  }),
  component: DeleteAccountPage,
});

function DeleteAccountPage() {
  return <ParsedHtml html={pageHtml} />;
}
