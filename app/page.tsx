import Link from 'next/link'

import style from '@/components/active-link/ActiveLink.module.css'

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Hola Mundo</span>
      <Link href={'/about'} className={ `${style.link} ${style['active-link']}` }>About Page</Link>
    </main>
  );
}
