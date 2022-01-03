import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '../SectionHeader';
import LargeLayout from '../Layout/LargeLayout';
import TestImage from '../../public/images/rect-4x3.jpg';

export default function DiscoverOpportunities() {
  return (
    <LargeLayout>
      <SectionHeader
        header={'Discover Opportunities'}
        overline={'UNCOVER MORE'}
      />
      <div className="opportunity-wrapper grid--spread">
        <div className="opportunity--content">
          <Image
            src={TestImage}
            width={408}
            height={306}
            alt={'Opportunity Image'}
          />
          <caption className="margin--top--xs subtitle-1">Caption</caption>
        </div>
        <div className="opportunity--content">
          <Image
            src={TestImage}
            width={408}
            height={306}
            alt={'Opportunity Image'}
          />
          <caption className="margin--top--xs subtitle-1">Caption</caption>
        </div>
        <div className="opportunity--content">
          <Image
            src={TestImage}
            width={408}
            height={306}
            alt={'Opportunity Image'}
          />
          <caption className="margin--top--xs subtitle-1">Caption</caption>
        </div>
      </div>
    </LargeLayout>
  );
}
