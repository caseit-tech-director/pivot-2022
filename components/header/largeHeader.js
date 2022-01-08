import styles from '../../styles/modules/_header.module.scss';

function LargeHeader(props) {
  return (
    <header className="max--layout gb-3">
      <div className="center--banner max--layout grid--container">
        <div className={styles['header--lrg--text--wrapper']}>
          <div className={styles['header--content']}>
            <div className="overline">{props.overline}</div>
            <h1 className={styles['logo--heading']}>{props.header}</h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export default LargeHeader;
