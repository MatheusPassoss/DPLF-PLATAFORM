import { Header } from '@/components/UI/Header'
import { Footer } from '@/components/UI/Footer'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}
