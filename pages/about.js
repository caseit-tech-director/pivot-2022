import SmallHeader from '../components/Header/smallHeader'
import BranchHeader from '../components/BranchHeader';
import dummyText from '../components/DummyText'
import RegistrationModule from '../components/RegistrationModule';

export default function Home() {
  return (
    <div>
      <SmallHeader header={"Title"} overline={"Overline"}/>
      <BranchHeader header={"Title"} overline={"Overline"} paragraph={dummyText}/>
      <RegistrationModule header={"Title"} overline={"overline"}/>
    </div>
  )
}
