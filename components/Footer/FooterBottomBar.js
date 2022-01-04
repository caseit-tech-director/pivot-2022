import ExtraSmallLayout from '../Layout/ExtraSmallLayout';
import style from '../../styles/modules/_footer.module.scss';
import Link from 'next/link';

export default function FooterBottomBar() {
  return (
    <footer className="gb-2">
      <ExtraSmallLayout>
        <div className={style['footer--bottom--bar--contents']}>
          <div className={style['footer--bottom--bar--policy']}>
            <Link href="">
              <a className="overline">Privacy Policy</a>
            </Link>
          </div>
          <div className={style['footer--copyright']}>
            <small className="overline">&copy; PIVOT 2022</small>
          </div>
        </div>
      </ExtraSmallLayout>
    </footer>
  );
}
