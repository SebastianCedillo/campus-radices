import '@/styles/globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'Campus Radices — Planificación Memorial | Esmeraldas',
  description: 'Campus Radices: espacio memorial para la planificación familiar en Esmeraldas, Ecuador. Preserva la memoria con dignidad.',
  keywords: 'funeraria esmeraldas, servicios funerarios, cremación, inhumación, campus radices, planificación funeraria',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-radices-cream text-radices-text antialiased overflow-x-hidden">
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
          <Header />
          <main className="flex-1 pt-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
