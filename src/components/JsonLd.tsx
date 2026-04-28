import { homePageDescription, siteConfig, siteUrl } from "@/constants/site";

const pageTitle = "好奇心を、実装する。";

export function JsonLd() {
  const base = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
  const origin = `${base}/`;

  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${origin}#organization`,
        name: siteConfig.name,
        url: origin,
        sameAs: [siteConfig.social.github, siteConfig.social.x],
      },
      {
        "@type": "WebSite",
        "@id": `${origin}#website`,
        url: origin,
        name: `${pageTitle} ｜ 作品集`,
        description: homePageDescription,
        inLanguage: "ja",
        publisher: { "@id": `${origin}#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${origin}#webpage`,
        url: origin,
        name: pageTitle,
        description: homePageDescription,
        isPartOf: { "@id": `${origin}#website` },
        about: { "@id": `${origin}#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
