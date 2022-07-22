import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '../Organisms/SectionHeader';
import LargeLayout from '../Layout/LargeLayout';
import DiscoverImage1 from '../../public/images/discover-opportunities/discover1.jpg';
import DiscoverImage2 from '../../public/images/discover-opportunities/discover2.jpg';
import style from '../../styles/modules/_discover.module.scss';

export default function DiscoverOpportunities(props) {
  return (
    <div className="bg-color--primary">
      <LargeLayout className="text-color--white">
        <SectionHeader
          header={'Discover Opportunities'}
          overline={'UNCOVER MORE'}
        />
        <div className={style['opportunity--wrapper']}>
          <div className={style['opportunity--content']}>
            <Link href="/competition#prizes">
              <a>
                <div className={style['image--content']}>
                  <Image
                    objectFit="cover"
                    src={DiscoverImage1}
                    width={408}
                    height={306}
                    alt={'Opportunity Image'}
                  />
                </div>
              </a>
            </Link>
            <caption className="margin--top--xs subtitle-1 flex">
              {props.caption1}
            </caption>
          </div>
          <div className={style['opportunity--content']}>
            <Link href="/competition#sponsors">
              <a>
                <div className={style['image--content']}>
                  <Image
                    objectFit="cover"
                    src={DiscoverImage2}
                    width={408}
                    height={306}
                    alt={'Opportunity Image'}
                  />
                </div>
              </a>
            </Link>
            <caption className="margin--top--xs subtitle-1 flex">
              {props.caption2}
            </caption>
          </div>
        </div>
      </LargeLayout>
    </div>
  );
}
