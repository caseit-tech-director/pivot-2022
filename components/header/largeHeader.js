import styles from '../../styles/modules/_header.module.scss';
import Particle from '../particle';

function LargeHeader(props) {
  return (
    // <div className={styles['particle--contain']}>
    <div className={styles[props.style]}>
      <Particle />
      <header className="max--layout text-color--white bg-color--primary">
        <div className="center--banner max--layout grid--container">
          <div className={styles['header--lrg--text--wrapper']}>
            <div className={styles['header--content']}>
              <div className="overline">{props.overline}</div>
              <h1 className={styles['logo--heading']}>{props.header}</h1>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default LargeHeader;
