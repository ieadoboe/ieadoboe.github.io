import Script from "next/script";
import { siteConfig } from "@/config/site";

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    url: siteConfig.url,
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ],
    jobTitle: "Computational scientist",
    worksFor: {
      "@type": "Organization",
      name: "Isaac Adoboe",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.author,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
