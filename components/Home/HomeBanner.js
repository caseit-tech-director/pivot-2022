import styles from '../../styles/modules/_header.module.scss';
import MaxLayout from '../Layout/MaxLayout';
export default function HomeBanner(props) {
  return (
    <div className="bg-color--primary">
      <MaxLayout className="center--banner">
        <div className={styles['home--banner--text--wrapper']}>
          <div className={styles['header--text']}>
            <h1 className={styles['logo--heading']}>{props.header}</h1>
            <div className="overline">{props.overline}</div>
          </div>
          <p>{props.paragraph}</p>
        </div>
      </MaxLayout>
    </div>
  );
}
