import styles from '../../styles/modules/_header.module.scss';

function SmallHeader(props) {
  return (
    <header className={[
        styles['grid--container'], 
        styles['header--sm']
        ].join(' ')}
        >
      <div className={styles['header--text--wrapper']}>
          <div className={styles['header--content']}>
            <div className="overline">{props.overline}</div>
            <h1>{props.header}</h1>
          </div>
      </div>
    </header>
  );
}

export default SmallHeader;
