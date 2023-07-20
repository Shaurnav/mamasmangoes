import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { Comfortaa } from 'next/font/google'

const comfortaa = Comfortaa({ subsets: ['latin'] })
 

export default function HeroBanner() {
  return (
    <div className={styles.heroBanner}>
      <div className={comfortaa.className}>
        <h1>Buy fresh and local mangos today!</h1>
      </div>  
    </div>
  );
}