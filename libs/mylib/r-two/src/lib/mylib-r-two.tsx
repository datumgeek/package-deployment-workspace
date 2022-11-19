import { MyotherlibRThree } from '@myotherlib/r-three';
import styles from './mylib-r-two.module.css';

/* eslint-disable-next-line */
export interface MylibRTwoProps {}

export function MylibRTwo(props: MylibRTwoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MylibRTwo!</h1>
      <MyotherlibRThree></MyotherlibRThree>
    </div>
  );
}

export default MylibRTwo;
