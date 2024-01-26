import { Navbar } from '@/components';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export default function GeneralLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola Mundo</span>
        {children}
      </main>
    </>
  );
}