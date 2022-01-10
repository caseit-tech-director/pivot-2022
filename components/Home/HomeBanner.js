import styles from '../../styles/modules/_header.module.scss';
import MaxLayout from '../Layout/MaxLayout';
import Particle from '../particle';

export default function HomeBanner(props) {
  return (
    <div className="bg-color--primary test">
      <div id="container">
        <Particle />
      </div>
      <MaxLayout className="center--banner">
        <div className="outer-container">
          <div
            id="home--banner--text--wrapper"
            className={styles['home--banner--text--wrapper']}
          >
            <div className={styles['header--text']}>
              <h1 className={styles['logo--heading']}>{props.header}</h1>
              <div className="overline">{props.overline}</div>
            </div>
            <p>{props.paragraph}</p>
          </div>
        </div>
      </MaxLayout>
    </div>
  );
}
