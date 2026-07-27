import { Outlet } from 'react-router-dom'
import { UIProvider } from '../context/UIContext.jsx'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import WhatsAppButton from '../components/layout/WhatsAppButton.jsx'
import ScrollToTop from '../components/layout/ScrollToTop.jsx'

export default function RootLayout() {
  return (
    <UIProvider>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 pt-20">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </UIProvider>
  )
}
