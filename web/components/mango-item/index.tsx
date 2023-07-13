import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export type MangoItemProps = {
  name: string,
  imageUrl: string,
  price: number,
  description: string, 
}

export default function MangoItem({name, imageUrl, price, description }: MangoItemProps) {
  return (
    <div className={styles.card}>
      <div className={styles.mainInformation}>
        <Image 
          className={styles.image}
          src={imageUrl}
          alt="Valencia Pride Mango"
          width={248}
          height={250}
        />
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>${price}/lb</p>
        </div>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      </div>
      <button className={styles.button}>
        (954) 482-1465
      </button>
    </div>
  );
}