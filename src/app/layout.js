import './globals.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Personal-Portfolio',
  description: 'Build by Praveen singh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Add your favicon here */}
        <link rel="icon" href="public\images\about-image.png" />
        {/* You can add more favicon sizes/formats if needed */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
