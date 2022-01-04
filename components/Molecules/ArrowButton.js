import styles from '../../styles/modules/_button.module.scss';

function ArrowButton(props) {
  return (
    <button className={styles['arrow--button']}>
      <i className="arrow right"></i>
    </button>
  );
}

export default ArrowButton;
