import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio de Gabriel Boscaratto  - Desenvolvedor Web Full Stack Jr.',
  description: 'Este é o portfólio de Gabriel Boscaratto. Sou um Desenvolvedor Web Full Stack Jr. e entusiasta da tecnologia. Atualmente estou cursando Ciência da Computação e me formarei em dezembro de 2024. Possuo conhecimento em Java, PHP, MySQL, Linux, AJAX, Git, Docker, HTML, CSS, JavaScript e CakePHP. Estou disponível para qualquer tipo de oportunidade de trabalho que se adeque às minhas habilidades e interesses.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  )
};
