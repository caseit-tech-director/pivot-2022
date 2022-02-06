import Prizes from '../Competition/Prizes';
import PrizeSmall from '../Competition/PrizesSmall';
import ExtendableLayout from '../Layout/ExtendableLayout';
import style from '../../styles/modules/_prizes.module.scss';
import PrizeDescription from '../Competition/PrizeDescription';
export default function PrizeContainer() {
  return (
    <ExtendableLayout className={style['container']}>
      <div
        id="prizes"
        className="section--header--wrapper flex--justify--center"
      >
        <h2>Prizes</h2>
        <p className="overline">PIVOT | COMPETITION</p>
      </div>
      <div className={[style['scene'], style['desktop']].join(' ')}>
        <Prizes
          prizeName="First"
          color="blue--cube"
          class="cube1"
          test="desc--wrapper-1"
        >
          {' '}
          <PrizeDescription
            prizeTitle={'1st Place'}
            prizeDesc1={'- Cash: $200/competitor'}
            prizeDesc2={
              '- Product Teacher courses & additional content: Lifetime access to Solving the PM Interview course'
            }
            prizeDesc3={
              '- 1 free month of their "Behind-The-Scenes Recordings"'
            }
            prizeDesc4={'- 1 free month of their "monthly PM classes"'}
            prizeOverline={'Total value of $407 per Competitor'}
          />
        </Prizes>
        <Prizes
          prizeName="Second"
          color="pink--cube"
          class="cube2"
          test="desc--wrapper-2"
        >
          <PrizeDescription
            prizeTitle={'2nd Place'}
            prizeDesc1={'- Cash: $100/competitor'}
            prizeDesc2={
              '- Product teacher course: one month free to their "Behind-The-Scenes Recordings"'
            }
            prizeDesc3={'- 1 free month of their "monthly PM classes"'}
            prizeOverline={'Total value of $190 per Competitor'}
          />
        </Prizes>
        <Prizes
          prizeName="Third"
          color="orange--cube"
          class="cube3"
          test="desc--wrapper-3"
        >
          {' '}
          <PrizeDescription
            prizeTitle={'3rd Place'}
            prizeDesc1={'- Cash: $50/competitor'}
            prizeDesc2={
              '- Product teacher course: one month free to their "monthly PM classes"'
            }
            prizeOverline={'Total value of $80 per Competitor'}
          />
        </Prizes>
      </div>
      <div className={[style['scene'], style['mobile']].join(' ')}>
        <PrizeSmall
          prizeTitle="First"
          color="blue--cube"
          class="cube1"
          test="desc--wrapper-1"
        />
        <PrizeSmall
          prizeTitle="Second"
          color="pink--cube"
          class="cube2--small"
          test="desc--wrapper-2"
        />
        <PrizeSmall
          prizeTitle="Third"
          color="orange--cube"
          class="cube3--small"
          test="desc--wrapper-3"
        />
      </div>
    </ExtendableLayout>
  );
}
