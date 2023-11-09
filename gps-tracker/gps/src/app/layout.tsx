
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'OrmanKZ Система Отслеживания GPS трекингов',
  description: 'Система Отслеживания GPS трекингов',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kz">
      
      <body className={inter.className}> <ChakraProvider>  {children}</ChakraProvider></body>
    </html>
  )
}
