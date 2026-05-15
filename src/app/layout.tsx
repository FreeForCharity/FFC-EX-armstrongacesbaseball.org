import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from './../components/header'
import Footer from './../components/footer'
import {
  openSans,
  lato,
  raleway,
  faustina,
  cantataOne,
  faunaOne,
  montserrat,
  cinzel,
} from '@/lib/fonts'

// Get basePath for GitHub Pages deployment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://armstrongacesbaseball.org'),
  title: {
    default: 'Armstrong Aces Baseball | Goodyear, AZ 13U Youth Baseball',
    template: '%s | Armstrong Aces Baseball',
  },
  description:
    'Armstrong Aces Baseball is a 501(c)(3) youth baseball club in Goodyear, Arizona. We turn coaches into mentors and players into Aces — fierce, unstoppable, and driven.',
  keywords: [
    'Armstrong Aces',
    'youth baseball',
    'Goodyear AZ baseball',
    '13U baseball',
    'Arizona youth sports',
    'baseball nonprofit',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://armstrongacesbaseball.org/',
    siteName: 'Armstrong Aces Baseball',
    title: 'Armstrong Aces Baseball | Goodyear, AZ 13U Youth Baseball',
    description: 'Top youth baseball in Goodyear, AZ. Coaches into mentors, players into Aces.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Armstrong Aces Baseball',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armstrong Aces Baseball | Goodyear, AZ',
    description: 'Top youth baseball in Goodyear, AZ. Unleash your inner ace.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [{ url: `${basePath}/icon.svg`, type: 'image/svg+xml' }],
    apple: [{ url: `${basePath}/apple-icon.svg`, type: 'image/svg+xml' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b2545',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://givebutter.com" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </head>
      <body
        className={[
          'antialiased',
          openSans.variable,
          lato.variable,
          raleway.variable,
          faustina.variable,
          cantataOne.variable,
          faunaOne.variable,
          montserrat.variable,
          cinzel.variable,
        ].join(' ')}
        suppressHydrationWarning={true}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
