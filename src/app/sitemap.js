export default function sitemap() {
    return [
      {
        url: 'https://pillarstack.com',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://pillarstack.com/about',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
      },
      {
        url: 'https://pillarstack.com/legal',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      },
     
    ]
  }