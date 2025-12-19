import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
  structuredData?: object;
}

export function SEOHead({
  title = "AFZHARS AgriGrains | Premium Nigerian Grains Supplier | Kano & Borno",
  description = "Leading Nigerian agricultural company supplying premium grains: maize, rice, sorghum, beans & more. Trusted quality from Kano & Borno. Contact us for quotes today!",
  image = "/opengraph.jpg",
  url = typeof window !== "undefined" ? window.location.href : "",
  type = "website",
  keywords = "Nigerian grains, grain supplier, maize supplier Nigeria, rice supplier Kano, sorghum exporter, grain storage Nigeria, agricultural products, AFZHARS",
  structuredData,
}: SEOHeadProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("theme-color", "#1A4D2E");

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:site_name", "AFZHARS AgriGrains Ltd.", true);
    updateMetaTag("og:locale", "en_US", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Structured Data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, image, url, type, keywords, structuredData]);

  return null;
}

