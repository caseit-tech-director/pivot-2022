import styles from '../../styles/modules/_header.module.scss';
import ExtraSmallLayout from '../Layout/ExtraSmallLayout';
import Particle from '../particle';

function SmallHeader(props) {
  return (
    <div className={[['bg-color--primary'], styles['particle--contain']].join(' ')}>
      <Particle />
      <div className={styles['sm--header--bg--extend']}>
        <ExtraSmallLayout className="text-color--white">
          <header className={styles['header--sm']}>
            <div className={styles['header--text--wrapper']}>
              <div className={styles['header--content']}>
                <div className="overline">{props.overline}</div>
                <h1 className={styles['logo--heading']}>{props.header}</h1>
              </div>
            </div>
          </header>
        </ExtraSmallLayout>
      </div>
    </div>
  );
}

export default SmallHeader;
