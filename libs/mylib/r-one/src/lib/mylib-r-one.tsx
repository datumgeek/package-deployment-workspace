import { MylibRTwo } from '@mylib/r-two';
import styles from './mylib-r-one.module.css';

/* eslint-disable-next-line */
export interface MylibROneProps {}

export function MylibROne(props: MylibROneProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MylibROne!</h1>
      <MylibRTwo></MylibRTwo>
    </div>
  );
}

export default MylibROne;
