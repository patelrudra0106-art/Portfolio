import { useEffect } from 'react';

interface DocumentMeta {
  title: string;
  description: string;
  canonical: string;
}

// Sets the title, description and canonical URL for one page, and restores the homepage values on exit.
export const useDocumentMeta = ({ title, description, canonical }: DocumentMeta) => {
  useEffect(() => {
    const descEl = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    const canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    const previous = {
      title: document.title,
      description: descEl?.content ?? '',
      ogTitle: ogTitle?.content ?? '',
      ogDesc: ogDesc?.content ?? '',
      ogUrl: ogUrl?.content ?? '',
      canonical: canonicalEl?.href ?? '',
    };

    document.title = title;
    if (descEl) descEl.content = description;
    if (ogTitle) ogTitle.content = title;
    if (ogDesc) ogDesc.content = description;
    if (ogUrl) ogUrl.content = canonical;
    if (canonicalEl) canonicalEl.href = canonical;

    return () => {
      document.title = previous.title;
      if (descEl) descEl.content = previous.description;
      if (ogTitle) ogTitle.content = previous.ogTitle;
      if (ogDesc) ogDesc.content = previous.ogDesc;
      if (ogUrl) ogUrl.content = previous.ogUrl;
      if (canonicalEl) canonicalEl.href = previous.canonical;
    };
  }, [title, description, canonical]);
};
