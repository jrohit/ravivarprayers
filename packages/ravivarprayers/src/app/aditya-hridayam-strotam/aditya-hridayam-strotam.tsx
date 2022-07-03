import styles from './aditya-hridayam-strotam.module.css';

/* eslint-disable-next-line */
export interface AdityaHridayamStrotamProps {}

export function AdityaHridayamStrotam(props: AdityaHridayamStrotamProps) {
  return (
    <div className={styles['container']}>
      <p>
        <div className={styles['header']}>Aditya Hridayam Strotam </div>
      </p>
    </div>
  );
}

export default AdityaHridayamStrotam;
