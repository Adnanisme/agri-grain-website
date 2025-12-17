export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AFZHARS AgriGrains Ltd.",
  "alternateName": "AFZHARS",
  "url": typeof window !== "undefined" ? window.location.origin : "https://afzharsagrigrains.com",
  "logo": typeof window !== "undefined" ? `${window.location.origin}/favicon.png` : "https://afzharsagrigrains.com/favicon.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+234-702-551-3414",
    "contactType": "Customer Service",
    "email": "info@afzharsagrigrains.com",
    "areaServed": "NG",
    "availableLanguage": ["en"]
  },
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Fagge, Jaba Unity Estate. Alh. Idris Fadille street",
      "addressLocality": "Kano",
      "addressRegion": "Kano State",
      "addressCountry": "NG"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Biu, Almohap Service Station. Gombe Road",
      "addressLocality": "Biu",
      "addressRegion": "Borno State",
      "addressCountry": "NG"
    }
  ],
  "sameAs": [
    // Add social media URLs here when available
  ]
};

export const localBusinessKano = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AFZHARS AgriGrains Ltd. - Kano Office",
  "image": typeof window !== "undefined" ? `${window.location.origin}/favicon.png` : "https://afzharsagrigrains.com/favicon.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Fagge, Jaba Unity Estate. Alh. Idris Fadille street",
    "addressLocality": "Kano",
    "addressRegion": "Kano State",
    "postalCode": "",
    "addressCountry": "NG"
  },
  "telephone": "+234-702-551-3414",
  "email": "info@afzharsagrigrains.com",
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  }
};

export const localBusinessBorno = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AFZHARS AgriGrains Ltd. - Borno Office",
  "image": typeof window !== "undefined" ? `${window.location.origin}/favicon.png` : "https://afzharsagrigrains.com/favicon.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Biu, Almohap Service Station. Gombe Road",
    "addressLocality": "Biu",
    "addressRegion": "Borno State",
    "postalCode": "",
    "addressCountry": "NG"
  },
  "telephone": "+234-702-551-3414",
  "email": "info@afzharsagrigrains.com",
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  }
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const gargajiyaOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AFZHARS Gargajiya Concept",
  "alternateName": "Gargajiya Concept",
  "url": typeof window !== "undefined" ? `${window.location.origin}/gargajiya-concept` : "https://afzharsagrigrains.com/gargajiya-concept",
  "logo": typeof window !== "undefined" ? `${window.location.origin}/favicon.png` : "https://afzharsagrigrains.com/favicon.png",
  "description": "A subsidiary of AFZHARS AgriGrains Ltd. specializing in naturally produced, locally sourced traditional Nigerian foods that preserve culinary heritage.",
  "founder": {
    "@type": "Person",
    "name": "Hadiza Aliyu Muhammad"
  },
  "parentOrganization": {
    "@type": "Organization",
    "name": "AFZHARS AgriGrains Ltd."
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+234-702-551-3414",
    "contactType": "Customer Service",
    "email": "info@afzharsagrigrains.com",
    "areaServed": "NG",
    "availableLanguage": ["en", "ha"]
  },
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Fagge, Jaba Unity Estate. Alh. Idris Fadille street",
      "addressLocality": "Kano",
      "addressRegion": "Kano State",
      "addressCountry": "NG"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Biu, Almohap Service Station. Gombe Road",
      "addressLocality": "Biu",
      "addressRegion": "Borno State",
      "addressCountry": "NG"
    }
  ],
  "sameAs": [
    "https://instagram.com/gargajiyaconcept",
    "https://tiktok.com/@gargajiyaconcept"
  ]
};

export const mainServicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Agricultural Services",
  "name": "AFZHARS Agricultural Solutions",
  "description": "Comprehensive agricultural services including grain production, import/export, storage, supply chain management, farm inputs distribution, and quality procurement. Professional end-to-end agricultural value chain management.",
  "provider": {
    "@type": "Organization",
    "name": "AFZHARS AgriGrains Ltd.",
    "url": typeof window !== "undefined" ? window.location.origin : "https://afzharsagrigrains.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Nigeria"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Agricultural Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Grain Production",
          "description": "High-yield, disease-resistant crops grown with sustainable practices. We partner with farmers, supply quality seeds, and share best practices."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Import & Export Services",
          "description": "Bridging markets with premium Nigerian grains that meet global standards. Complete documentation, customs, and logistics management."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Grain Storage Solutions",
          "description": "Modern silos and warehouses with climate control that keep grains fresh and pest-free, protecting quality and reducing losses."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Supply Chain Management",
          "description": "Reliable logistics from farm gate to destination. Coordinated transport, warehousing, and distribution across Nigeria and beyond."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Farm Supply & Inputs Distribution",
          "description": "Comprehensive supply of agricultural inputs including seeds, fertilizers, pesticides, and farming equipment to farmers."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Quality & Procurement",
          "description": "Trusted sourcing, inspections, and certifications to keep your supply chain compliant and on spec."
        }
      }
    ]
  }
};

export const livestockAquacultureServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Livestock & Aquaculture Services",
  "name": "AFZHARS Livestock & Aquaculture Services",
  "description": "Specialized livestock and aquaculture services including brooding, poultry management, fish farming, livestock rearing, feed production, and animal fattening programs. Professional care for healthy stock and reliable yields.",
  "provider": {
    "@type": "Organization",
    "name": "AFZHARS AgriGrains Ltd.",
    "url": typeof window !== "undefined" ? window.location.origin : "https://afzharsagrigrains.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Nigeria"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Livestock & Aquaculture Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brooding Services",
          "description": "Controlled brooding programs that stabilize temperatures, boost early survival, and set chicks up for healthy growth."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Livestock Rearing",
          "description": "Structured husbandry for cattle and goats with vaccination plans, weight tracking, and welfare-led routines."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fish Farming",
          "description": "Managed ponds and tank systems with quality fingerlings, feeding schedules, and water-quality checks for strong yields."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Feed Production",
          "description": "Formulated rations for poultry, fish, and ruminants, consistent, lab-checked batches for predictable performance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Poultry Management",
          "description": "End-to-end poultry management, housing, nutrition, and health oversight, to hit target weights on time."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Animal Fattening",
          "description": "Structured programs for healthy weight gain and premium meat quality. Nutrition plans and veterinary oversight keep herds on target."
        }
      }
    ]
  }
};

export const createProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  category?: string;
  brand?: string;
  sku?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image,
  "brand": {
    "@type": "Brand",
    "name": product.brand || "AFZHARS AgriGrains Ltd."
  },
  "category": product.category || "Agricultural Products",
  "sku": product.sku || product.name.replace(/\s+/g, '-').toLowerCase(),
  "offers": {
    "@type": "Offer",
    "url": typeof window !== "undefined" ? window.location.href : "https://afzharsagrigrains.com",
    "priceCurrency": "NGN",
    "price": "0",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "Contact for Quote"
    },
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "AFZHARS AgriGrains Ltd."
    }
  }
});

export const createProductListSchema = (products: Array<{
  name: string;
  description: string;
  image: string;
  category?: string;
  brand?: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": products.map((product, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": createProductSchema(product)
  }))
});

export const createPersonSchema = (person: {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": person.name,
  "jobTitle": person.jobTitle,
  "description": person.description || "",
  "image": person.image || "",
  "worksFor": {
    "@type": "Organization",
    "name": "AFZHARS AgriGrains Ltd."
  }
});

export const createReviewSchema = (review: {
  author: string;
  reviewBody: string;
  rating?: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": review.author
  },
  "reviewBody": review.reviewBody,
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": review.rating || 5,
    "bestRating": 5,
    "worstRating": 1
  }
});

export const createAggregateRatingSchema = (ratingValue: number, reviewCount: number) => ({
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "ratingValue": ratingValue.toString(),
  "bestRating": "5",
  "worstRating": "1",
  "ratingCount": reviewCount.toString()
});

