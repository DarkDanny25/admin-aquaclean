import { useEffect } from "react";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import Navbar from '../frontend/components/navbar';
import Footer from '../frontend/components/footer';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const noNavbarFooterPages = ['/login', '/register', '/forgot-password', '/reset-password', '/pageDenied'];
  const isAuthPage = noNavbarFooterPages.includes(router.pathname);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then((registration) => {
            console.log('Service Worker registered: ', registration);
          })
          .catch((error) => {
            console.log('Service Worker registration failed: ', error);
          });
      });
    }
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {!isAuthPage && <Navbar />}
      <div style={{ flex: 1 }}>
        <Component {...pageProps} />
      </div>
      {!isAuthPage && <Footer />}
    </div>
  );
}