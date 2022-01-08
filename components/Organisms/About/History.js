import MediumLayout from '../../Layout/MediumLayout';
import CaptionedGraphic from '../../Molecules/CaptionedGraphic';
import testImage from '../../../public/images/rect-4x3.jpg';
import SideMenu from '../../Molecules/SideMenu';
import Article from '../../Molecules/About/AboutArticle';
import dummyText from '../../DummyText';

export default function History() {
  return (
    <MediumLayout>
      <CaptionedGraphic
        subtitle1={"Year"}
        info1={"2022"}
        subtitle2={"Theme"}
        info2={"Accenture"}
        subtitle3={"Location"}
        info3={"Vancouver"}
        image={testImage}
        width={400}
        height={300}
        alt={'alt'}
      />
      <Article title={"PIVOT 2022"} paragraph={"This year marks PIVOT’s 5th year anniversary! With the hopes of providing local competitors with a world-class competition experience, PIVOT is adopting a 5 hour case structure to inspire the business and technology leaders of tomorrow. In addition, we are brining back our networking event, fireside chat, and sponsor-led workshops. We are committed to providing all PIVOT competitors and stakeholders with a challenging, but rewarding competition weekend."}>
      </Article>
      <SideMenu subtitle={"All Years"} link1={"2022"} link2={"2021"} link3={"2020"} link4={"2019"}/>
    </MediumLayout>
  );
}
