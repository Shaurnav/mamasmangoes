import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <h3>Mama's Mangos</h3>
          <Image 
            src="/mango.png" 
            alt="mango"
            height={50}
            width={50}
            className={styles.mangoLogo}
          />
        </Link>
        {/* <div className={styles.shoppingCart}>
          <Link href="/checkout">
            <Image 
              alt="cart" 
              src="/shopping-cart.svg"
              width={40}
              height={40}
            />           
          </Link>
        </div> */}
      </nav>
    </header>
);
}