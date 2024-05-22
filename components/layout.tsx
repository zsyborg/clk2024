import Footer from "@/components/footer"
import Header from "@/components/header"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container d-flex justify-center flex content-center">{children}</main>
      <Footer />
    </>
  )
}
