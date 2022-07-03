import styles from './nakoda-bhairav-chalisa.module.css';

/* eslint-disable-next-line */
export interface NakodaBhairavChalisaProps {}

export function NakodaBhairavChalisa(props: NakodaBhairavChalisaProps) {
  return (
    <div className={styles['container']}>
      <p>
        <div className={styles['header']}>Nakoda Bhairav Chalisa</div>
      </p>
    </div>
  );
}

export default NakodaBhairavChalisa;
