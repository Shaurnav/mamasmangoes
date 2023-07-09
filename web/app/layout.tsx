import './globals.scss'
import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import { StoreProvider } from '@/utils/Store'

const comfortaa = Comfortaa({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: "Mama's Mangoes",
//   description: "Buy fresh affordable mangoes from Parkland!",
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>{children}</body>
    </html>
  )
}
