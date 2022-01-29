import Prizes from '../Competition/Prizes';
import PrizeSmall from '../Competition/PrizesSmall';
import MaxLayout from '../Layout/MaxLayout';
import style from '../../styles/modules/_prizes.module.scss';
import PrizeDescription from '../Competition/PrizeDescription';

export default function PrizeContainer() {
  return (
    <MaxLayout className={style['container']}>
      <div className="section--header--wrapper flex--justify--center">
        <h2>Title</h2>
        <p className="overline">overline</p>
      </div>
      <div className={[style['scene'], style['desktop']].join(' ')}>
        <Prizes class="cube1" test="desc--wrapper-1" />
        <Prizes class="cube2" test="desc--wrapper-2" />
        <Prizes class="cube3" test="desc--wrapper-3" />
      </div>
      <div className={[style['scene'], style['mobile']].join(' ')}>
        <PrizeSmall class="cube1" test="desc--wrapper-1" />
        <PrizeSmall class="cube2--small" test="desc--wrapper-2" />
        <PrizeSmall class="cube3--small" test="desc--wrapper-3" />
      </div>
    </MaxLayout>
  );
}
