import Link from 'next/link';
import styles from '../../styles/modules/_nav.module.scss';

function DefaultButton(props) {
  return (
    <Link href={"https://www.surveymonkey.ca/r/pivot2022?utm_source=Survey+Monkey&utm_campaign=Application"}>
      <a className={[styles['link--button']]}>{props.text}</a>
    </Link>
  );
}

export default DefaultButton;
