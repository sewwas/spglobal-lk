export const siteConfig = {
  name: 'SP Global',
  description: 'Innovating Sri Lanka\'s industrial landscape through comprehensive solutions and sustainable practices.',
  url: 'https://spglobal.lk',
  ogImage: 'https://spglobal.lk/og-image.jpg',
  links: {
    facebook: 'https://facebook.com/spglobal',
    twitter: 'https://twitter.com/spglobal',
    instagram: 'https://instagram.com/spglobal',
    linkedin: 'https://linkedin.com/company/spglobal'
  }
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'SP Global',
    'Sri Lanka',
    'Construction',
    'Recruitment',
    'Shopping',
    'Spare Parts',
    'Industrial Solutions'
  ],
  authors: [
    {
      name: 'SP Global',
      url: siteConfig.url
    }
  ],
  creator: 'SP Global',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@spglobal'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
} 