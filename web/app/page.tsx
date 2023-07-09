import Image from 'next/image'
import styles from './page.module.scss'
import Link from 'next/link'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HeroBanner from '@/components/hero-banner'
import MangoItem from '@/components/mango-item'
import { MangoItemProps } from '@/components/mango-item'
import MangoGrid from '@/components/mango-grid'

export default function Home() {

  const sampleMangos =   { 
    mangos:
    [{
      name: 'Valencia Pride Mango',
      imageUrl: '/valencia-pride.jpg',
      price: 2,
      description: 'A popular south Floridian mango variety',
    }]
  };
  

  return (
    <div>

      <header className={styles.header}>
        <Header/>
      </header>      
      <main className={styles.main}>
        <HeroBanner/>
        <MangoGrid {...sampleMangos}/>
      </main>
      <Footer/>
    </div>
  )
}
