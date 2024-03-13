/**
 * @file metadata.js
 * @description This file contains the metadata for the website. 
 * It is used to populate the head of the HTML document.
 */
export const HomeMetadata = {
  title: 'Pillarstack — Resources for web developers and designers',
  description: 'Assorted resources for frontend developers and web designers. Explore curated and handpicked goodies that enhance your workflow and cultivate your growth.',
  metadataBase: new URL('https://pillarstack.com'),
  alternates: {
    canonical: '/',
    language: {
      "en": "/en-US",
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

/**
 * @file aboutMetadata.js
 * @description This file contains the metadata for the about page.
 */
export const aboutMetadata = {
  title: 'Pillarstack — About',
  description: "Learn more about Pillarstack and the rationale behind its creation.",
  metadataBase: new URL('https://pillarstack.com'),
  alternates: {
    canonical: '/about',
    language: {
      "en": "/en-US",
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};
/**
 * @file legalMetadata.js
 * @description This file contains the metadata for the legal page.
 */
export const legalMetadata = {
  metadataBase: new URL("https://pillarstack.com"),
  alternates: {
    canonical: "/legal",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "Pillarstack — Legal Information",
  description: "Trademarks and user privacy details on Pillarstack.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
}