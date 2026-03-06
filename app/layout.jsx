import '@/styles/globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'Campus Radices — Planificación Funeraria Responsable | Esmeraldas',
  description: 'Campus Radices: servicios funerarios integrales, dignos y planificados en Esmeraldas, Ecuador. La paz también se planifica.',
  keywords: 'funeraria esmeraldas, servicios funerarios, cremación, inhumación, campus radices, planificación funeraria',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-radices-cream text-radices-text antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}