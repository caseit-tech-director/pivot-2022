import ExtraSmallLayout from '../Layout/ExtraSmallLayout';
import style from '../../styles/modules/_footer.module.scss';
import Link from 'next/link';

export default function FooterBottomBar() {
  return (
    <footer className="bg-color--primary">
      <ExtraSmallLayout>
        <div className={style['footer--bottom--bar--contents']}>
          <div className={style['footer--bottom--bar--policy']}>
            {/* <Link href=""> */}
            {/* <a className="overline"> */}
            <p className="overline muted--text"> Privacy Policy</p>
            {/* </a> */}
            {/* </Link> */}
          </div>
          <div className={style['footer--copyright']}>
            <small className="muted--text overline">&copy; PIVOT 2022</small>
          </div>
        </div>
      </ExtraSmallLayout>
    </footer>
  );
}
