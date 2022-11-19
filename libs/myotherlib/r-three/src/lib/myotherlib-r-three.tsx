import styles from './myotherlib-r-three.module.css';

/* eslint-disable-next-line */
export interface MyotherlibRThreeProps {}

export function MyotherlibRThree(props: MyotherlibRThreeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyotherlibRThree!</h1>
    </div>
  );
}

export default MyotherlibRThree;
