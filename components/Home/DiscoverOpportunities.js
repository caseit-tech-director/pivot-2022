import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '../Organisms/SectionHeader';
import LargeLayout from '../Layout/LargeLayout';
import TestImage from '../../public/images/rect-4x3.jpg';

export default function DiscoverOpportunities(props) {
  return (
    <div className="bg-color--primary">
      <LargeLayout className="text-color--white">
        <SectionHeader
          header={'Discover Opportunities'}
          overline={'UNCOVER MORE'}
        />
        <div className="opportunity-wrapper grid--spread">
          <div className="opportunity--content">
            <a href="">
              <Image
                src={TestImage}
                width={408}
                height={306}
                alt={'Opportunity Image'}
              />
            </a>
            <caption className="margin--top--xs subtitle-1 flex">
              {props.caption1}
            </caption>
          </div>
          <div className="opportunity--content">
            <a href="">
              <Image
                src={TestImage}
                width={408}
                height={306}
                alt={'Opportunity Image'}
              />
            </a>
            <caption className="margin--top--xs subtitle-1 flex">
              {props.caption2}
            </caption>
          </div>
          <div className="opportunity--content">
            <a href="">
              <Image
                src={TestImage}
                width={408}
                height={306}
                alt={'Opportunity Image'}
              />
            </a>
            <caption className="margin--top--xs subtitle-1 flex">
              {props.caption3}
            </caption>
          </div>
        </div>
      </LargeLayout>
    </div>
  );
}
