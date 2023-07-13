import { MangoItemProps } from '../mango-item';
import styles from './styles.module.scss';
import MangoItem from '../mango-item';

export type MangoGridProps = {
  mangos: MangoItemProps[],
};

export default function MangoGrid({mangos}: MangoGridProps) {
  const MangoItems = mangos.map((mangoItem) => <MangoItem key={mangoItem.name} {...mangoItem}/>);

  return (
    <div className={styles.gridContainer}>
      <h1>
        Available Mangos
      </h1>
      <div className={styles.gridInfo}>
        <div className={styles.grid}>
          {MangoItems}
        </div>
        <div className={styles.info}>
          <h2>
            We are currently working on expanding our varieties of mangos,
            while also increasing the capabilities of this website. As of 
            right now, orders must be picked up at a pickup site specified 
            over email. 

            For the current season, if you are interested in buying any of 
            the Valencia Pride Mangos, or if you have any further inquiries
            please send an email to the following address:
          </h2>
          <a href="mailto:sunrisefruitsandfarms@gmail.com">sunrisefruitsandfarms@gmail.com</a>
        </div>
      </div>
    </div>
  );
}