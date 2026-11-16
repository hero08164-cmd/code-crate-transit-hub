import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/faq";

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: "https://www.tubepilot.shop/faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Tube Pilot?",
      acceptedAnswer: { "@type": "Answer", text: "Tube Pilot is an AI-powered YouTube Creator OS that brings content creation, optimization, publishing, scheduling and analytics into one workflow." },
    },
    {
      "@type": "Question",
      name: "Who is the founder of Tube Pilot?",
      acceptedAnswer: { "@type": "Answer", text: "Anik Kumar is the founder of Tube Pilot. His vision is to make essential YouTube creator workflows easier to manage through useful AI-assisted tools." },
    },
    {
      "@type": "Question",
      name: "Who can use Tube Pilot?",
      acceptedAnswer: { "@type": "Answer", text: "Tube Pilot is designed for YouTube creators who want to manage their content planning, optimization, publishing and performance workflow." },
    },
    {
      "@type": "Question",
      name: "Does Tube Pilot generate YouTube video titles?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Tube Pilot includes an AI Title Generator that helps creators generate title ideas for their YouTube videos." },
    },
    {
      "@type": "Question",
      name: "Can Tube Pilot generate video descriptions?",
      acceptedAnswer: { "@type": "Answer", text: "Tube Pilot includes AI Description Generation to help creators prepare descriptions for their YouTube content." },
    },
    {
      "@type": "Question",
      name: "Does Tube Pilot help with YouTube SEO?",
      acceptedAnswer: { "@type": "Answer", text: "Tube Pilot provides SEO optimization tools, including support for video metadata and tags, to help creators work on YouTube content discoverability." },
    },
    {
      "@type": "Question",
      name: "Can creators schedule videos with Tube Pilot?",
      acceptedAnswer: { "@type": "Answer", text: "Tube Pilot includes video upload and smart scheduling features to help creators manage their YouTube publishing workflow." },
    },
    {
      "@type": "Question",
      name: "Does Tube Pilot provide channel analytics?",
      acceptedAnswer: { "@type": "Answer", text: "Tube Pilot includes video analytics and channel insights to help creators understand their content performance." },
    },
    {
      "@type": "Question",
      name: "What is Tube Pilot MCP?",
      acceptedAnswer: { "@type": "Answer", text: "MCP stands for Model Context Protocol. Tube Pilot has an MCP-related integration initiative. Its available capabilities depend on the tools that have actually been implemented and tested." },
    },
    {
      "@type": "Question",
      name: "How can I contact Tube Pilot?",
      acceptedAnswer: { "@type": "Answer", text: "For questions or product support, contact support@tubepilot.shop." },
    },
  ],
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Tube Pilot FAQ – AI YouTube Creator Tools" },
      { name: "description", content: "Get answers about Tube Pilot, the AI YouTube Creator OS, including video ideas, SEO, scheduling, analytics and account support." },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Tube Pilot FAQ – AI YouTube Creator Tools" },
      { property: "og:description", content: "Answers about Tube Pilot's AI tools, YouTube publishing workflow, scheduling, analytics and support." },
      { property: "og:url", content: "https://www.tubepilot.shop/faq" },
      { name: "twitter:url", content: "https://www.tubepilot.shop/faq" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Tube Pilot FAQ – AI YouTube Creator Tools" },
      { name: "twitter:description", content: "Answers about Tube Pilot's AI tools, YouTube publishing workflow, scheduling, analytics and support." },
    ],
    links: [{ rel: "canonical", href: "https://www.tubepilot.shop/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqStructuredData),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return <ParsedHtml html={pageHtml} />;
}
