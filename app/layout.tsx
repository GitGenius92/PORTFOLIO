import type { Metadata } from 'next'
import { Inter, Poppins, Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CustomCursor } from '@/components/custom-cursor'
import { PageLoader } from '@/components/page-loader'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})
const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit'
})

export const metadata: Metadata = {
  title: 'Muhammad Faizan - Portfolio | Computer Engineering Student & React.js Developer',
  description: 'Welcome to my portfolio! I\'m Muhammad Faizan, a passionate Computer Engineering student and React.js developer based in Lahore, Pakistan. Explore my projects, skills, and experience.',
  keywords: [
    'Muhammad Faizan',
    'Portfolio',
    'Computer Engineering',
    'React.js Developer',
    'Next.js',
    'Full-Stack Developer',
    'Lahore',
    'Pakistan',
    'Web Development',
    'AI/ML',
    'Frontend Developer'
  ],
  authors: [{ name: 'Muhammad Faizan' }],
  creator: 'Muhammad Faizan',
  publisher: 'Muhammad Faizan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://muhammad-faizan-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Muhammad Faizan - Portfolio | Computer Engineering Student & React.js Developer',
    description: 'Welcome to my portfolio! I\'m Muhammad Faizan, a passionate Computer Engineering student and React.js developer based in Lahore, Pakistan.',
    url: 'https://muhammad-faizan-portfolio.vercel.app',
    siteName: 'Muhammad Faizan Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Faizan Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Faizan - Portfolio | Computer Engineering Student & React.js Developer',
    description: 'Welcome to my portfolio! I\'m Muhammad Faizan, a passionate Computer Engineering student and React.js developer based in Lahore, Pakistan.',
    images: ['/og-image.jpg'],
    creator: '@username',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${outfit.variable} font-poppins antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PageLoader />
          <CustomCursor />
          <Navbar />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
