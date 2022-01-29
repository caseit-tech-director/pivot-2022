import Prizes from '../Competition/Prizes';
import MaxLayout from '../Layout/MaxLayout';
import style from '../../styles/modules/_prizes.module.scss';
export default function PrizeContainer() {
  return (
    <MaxLayout className={style['container']}>
      <div className={style['']}>
        <div className={style['scene']}>
          <Prizes />
          <Prizes class="cube2" />
          <Prizes class="cube3" />
        </div>
      </div>
    </MaxLayout>
  );
}
