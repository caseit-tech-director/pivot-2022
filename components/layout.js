import Navbar from '../components/Navbar/navbar'
import TopBar from '../components/Navbar/topbar'

export default function Layout({ children }) {
    return (
      <>
        <TopBar/>
        <Navbar/>
        <main>{children}</main>
      </>
    )
  }