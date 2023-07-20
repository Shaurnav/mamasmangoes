"use client";

import styles from './page.module.scss'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HeroBanner from '@/components/hero-banner'
import MangoGrid from '@/components/mango-grid'

export default function Home() {

  const sampleMangos =   { 
    mangos:
    [{
      name: 'Valencia Pride Mango',
      imageUrl: '/valencia-pride.jpg',
      price: 3,
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
        <div className={styles.description}>
          <p>If you&apos;re like me and you absolutely adore eating and/or growing mangos, 
            consider trying some of mine! I&apos;m at a point where I just have too many at
            home, but I don&apos;t want any of them to go to waste. I know that sometimes 
            the store-bought varieties miss a certain <i>flavor</i>, so try a few from
            here and let me know what you think!</p>
        </div>
        <MangoGrid key={"sampleMangos"} {...sampleMangos}/>
      </main>
      <Footer/>
    </div>
  )
}
