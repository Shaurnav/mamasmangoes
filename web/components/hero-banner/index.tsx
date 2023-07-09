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
        <div className={styles.description}>
          <div className={comfortaa.className}>
            <p>If you're like me and you absolutely adore eating and/or growing mangos, 
              consider trying some of mine! I'm at a point where I just have too many at
              home, but I don't want any of them to go to waste. I know that sometimes 
              the store-bought varieties miss a certain <i>flavor</i>, so try a few from
              here and let me know what you think!</p>
          </div>
        </div>
    </div>

    
  );
}