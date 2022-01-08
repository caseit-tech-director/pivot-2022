import Navbar from '../components/Navbar/navbar';
import TopBar from '../components/Navbar/topbar';
import Footer from './Footer/footer';
import FooterBottomBar from './Footer/FooterBottomBar';

export default function Layout({ children }) {
  return (
    <>
      <div className="nav--wrapper">
        {/* <TopBar /> */}
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
      <FooterBottomBar />
    </>
  );
}
