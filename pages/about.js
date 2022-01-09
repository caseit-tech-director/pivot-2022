import SmallHeader from 'components/header/smallHeader'
import BranchHeader from '../components/Organisms/BranchHeader';
import RegistrationModule from '../components/Organisms/RegistrationModule';
import History from '../components/Organisms/About/History'

export default function Home() {
  return (
    <body>
      <SmallHeader header={"about"} overline={"Overline"}/>
      <BranchHeader header={"Anniversary Year"} overline={"Celebrating 5 Years of PIVOT"} paragraph={"This year PIVOT celebrates its 5th year anniversary - and what an exciting 5 years it has been! Read below to find out more about PIVOT’s unique history."}/>
      <History/>
      <RegistrationModule header={"GET INVOLVED"} overline={"overline"}/>
    </body>
  )
}
