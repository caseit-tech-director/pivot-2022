import Navbar from '../components/Navbar/navbar';
import MobileNav from '../components/Navbar/mobileNavbar';
import Footer from './Footer/footer';
import FooterBottomBar from './Footer/FooterBottomBar';

export default function Layout({ children }) {
  return (
    <>
      <div className="nav--wrapper">
        <MobileNav/>
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
      <FooterBottomBar />
    </>
  );
}
