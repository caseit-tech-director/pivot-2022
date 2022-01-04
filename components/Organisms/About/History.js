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
        image={testImage}
        width={400}
        height={300}
        alt={'alt'}
      />
      <Article title={"Title"} paragraph={dummyText}/>
      <SideMenu link1={"test"} link2={"test"} link3={"test"}/>
    </MediumLayout>
  );
}
