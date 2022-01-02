import styles from '../../styles/modules/_header.module.scss';

function LargeHeader(props) {
  return (
    <header className="max--layout gb-3">
      <div className="grid--container max--height">
        <div className={styles['header--lrg--text--wrapper']}>
            <div className={styles['header--content']}>
            <div className="overline">{props.overline}</div>
            <h1>{props.header}</h1>
            </div>
        </div>
      </div>
    </header>
  );
}

export default LargeHeader;
