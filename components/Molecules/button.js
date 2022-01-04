import Link from 'next/link';
import styles from '../../styles/modules/_nav.module.scss';

function DefaultButton(props) {
  return (
    <Link href="">
      <a className={[styles['link--button']]}>{props.text}</a>
    </Link>
  );
}

export default DefaultButton;
