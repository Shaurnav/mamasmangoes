import { MangoItemProps } from '../mango-item';
import styles from './styles.module.scss';
import MangoItem from '../mango-item';

export type MangoGridProps = {
  mangos: MangoItemProps[],
};

export default function MangoGrid({mangos}: MangoGridProps) {
  const MangoItems = mangos.map((mangoItem) => <MangoItem {...mangoItem}/>);

  return (
    <div className={styles.gridContainer}>
      <h1>
        Available Mangos
      </h1>
      <div className={styles.grid}>
        {MangoItems}
      </div>
    </div>
  );
}