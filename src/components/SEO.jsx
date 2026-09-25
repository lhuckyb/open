import { useEffect } from 'react';

export default function SEO({ title, description }) {
  useEffect(() => {
    document.title = `${title} | Defimart`;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.href = `https://defimartonline.com${window.location.pathname}`;
    }
  }, [title, description]);

  return null;
}
