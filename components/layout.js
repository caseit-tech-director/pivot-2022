import Navbar from '../components/Navbar/navbar';
import MobileNav from '../components/Navbar/mobileNavbar';
import Footer from './Footer/footer';
import FooterBottomBar from './Footer/FooterBottomBar';
import Head from 'next/head';
import Favicon from '../static/favicon.ico';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={Favicon} />
      </Head>
      <div className="nav--wrapper">
        <MobileNav />
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
      <FooterBottomBar />
    </>
  );
}
