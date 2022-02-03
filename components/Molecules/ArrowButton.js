import styles from '../../styles/modules/_button.module.scss';
import Link from 'next/link';

function ArrowButton(props) {
  return (
    <Link href={''}>
      <a className={[styles['link--button']].join(' ')}>{props.text}</a>
    </Link>
  );
}

export default ArrowButton;
