"use client";

import styles from './page.module.scss'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HeroBanner from '@/components/hero-banner'
import MangoGrid from '@/components/mango-grid'
import { StoreProvider } from '@/utils/Store'

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
