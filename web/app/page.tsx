import Image from 'next/image'
import styles from './page.module.scss'
import Link from 'next/link'
import Header from '@/components/header'
import HeroBanner from '@/components/hero-banner'

export default function Home() {
  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <HeroBanner/>
        main stuff
      </main>
      <footer>footer</footer>
    </div>
  )
}
