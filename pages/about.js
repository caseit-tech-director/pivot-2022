import SmallHeader from '../components/Header/smallHeader'
import BranchHeader from '../components/Organisms/BranchHeader';
import dummyText from '../components/DummyText'
import RegistrationModule from '../components/Organisms/RegistrationModule';
import SideMenu from '../components/Molecules/SideMenu';
import History from '../components/Organisms/About/History'

export default function Home() {
  return (
    <body>
      <SmallHeader header={"Title"} overline={"Overline"}/>
      <BranchHeader header={"Title"} overline={"Overline"} paragraph={dummyText}/>
      <History/>
      <RegistrationModule header={"Title"} overline={"overline"}/>
    </body>
  )
}
