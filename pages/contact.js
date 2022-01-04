import SmallHeader from '../components/Header/smallHeader';
import BranchHeader from '../components/Organisms/BranchHeader';
import dummyText from '../components/DummyText';

export default function Contact() {
  return (
    <body>
      <SmallHeader header={'Title'} overline={'Overline'} />
      <BranchHeader
        header={'Title'}
        overline={'Overline'}
        paragraph={dummyText}
      />
    </body>
  );
}
