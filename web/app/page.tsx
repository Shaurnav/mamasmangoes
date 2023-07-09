import Image from 'next/image'
import styles from './page.module.scss'
import Link from 'next/link'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HeroBanner from '@/components/hero-banner'
import MangoItem from '@/components/mango-item'
import { MangoItemProps } from '@/components/mango-item'

export default function Home() {

  const sampleMango =     {
    name: 'Valencia Pride Mango',
    // slug: 'free-shirt',
    imageUrl: '/valencia-pride.jpg',
    price: 70,
    // rating: 4.5,
    // numReviews: 8,
    // countInStock: 20,
    description: 'A popular south Floridian mango variety',
    // isFeatured: true,
    // banner: '/images/banner1.jpg',
  };
  
  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <HeroBanner/>
        <MangoItem {...sampleMango}/>
      </main>
      <Footer/>
    </div>
  )
}
