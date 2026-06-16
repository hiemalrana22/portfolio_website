import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hiemalrana.dev"),
  title: {
    default: "Hiemal Rana — Data Scientist & Generative AI Engineer",
    template: "%s | Hiemal Rana",
  },
  description:
    "Data Scientist and Generative AI Engineer specializing in LLM systems, RAG pipelines, NLP, and production ML. Building data-driven AI products at the intersection of Gen AI and applied data science.",
  keywords: [
    "Data Scientist",
    "Generative AI Engineer",
    "LLM Engineer",
    "Machine Learning Engineer",
    "NLP Engineer",
    "Applied AI Researcher",
    "RAG",
    "Python",
    "FastAPI",
    "Hiemal Rana",
    "VIT",
    "Data Science Intern",
  ],
  authors: [{ name: "Hiemal Rana", url: "https://github.com/hiemalrana22" }],
  creator: "Hiemal Rana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hiemalrana.dev",
    siteName: "Hiemal Rana",
    title: "Hiemal Rana — Data Scientist & Generative AI Engineer",
    description:
      "Data Scientist and Generative AI Engineer specializing in LLM systems, RAG pipelines, NLP, and production ML.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hiemal Rana — AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiemal Rana — AI Engineer & Applied AI Researcher",
    description:
      "AI Engineer and Applied AI Researcher specializing in Generative AI, NLP, and production AI systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://hiemalrana.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hiemal Rana",
              jobTitle: "Data Scientist & Generative AI Engineer",
              url: "https://hiemalrana.dev",
              sameAs: [
                "https://github.com/hiemalrana22",
                "https://linkedin.com/in/hiemalrana",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Vellore Institute of Technology",
              },
              knowsAbout: [
                "Data Science",
                "Generative AI",
                "Large Language Models",
                "Natural Language Processing",
                "Machine Learning",
                "RAG Systems",
                "LLM Engineering",
              ],
            }),
          }}
        />
      </head>
      <body className="noise bg-[#07070a] font-body antialiased">
        {children}
      </body>
    </html>
  );
}
