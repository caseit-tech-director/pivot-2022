import styles from '../../styles/modules/_header.module.scss';
import ExtraSmallLayout from '../Layout/ExtraSmallLayout';

function SmallHeader(props) {
  return (
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
  );
}

export default SmallHeader;
