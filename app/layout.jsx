import '@/styles/globals.css';
import { Great_Vibes } from 'next/font/google';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
});

export const metadata = {
  title: 'Campus Radices — Planificación Memorial | Esmeraldas',
  description: 'Campus Radices: espacio memorial para la planificación familiar en Esmeraldas, Ecuador. Preserva la memoria con dignidad.',
  keywords: 'funeraria esmeraldas, servicios funerarios, cremación, inhumación, campus radices, planificación funeraria',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={greatVibes.variable}>
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
