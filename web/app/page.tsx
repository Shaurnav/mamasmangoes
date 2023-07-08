import Image from 'next/image'
import styles from './page.module.scss'
import Link from 'next/link'
import Header from '@/components/header'

export default function Home() {
  return (
    <div>
      <Header/>
      <main className={styles.main}>
        main stuff
      </main>
      <footer>footer</footer>
    </div>
  )
}
