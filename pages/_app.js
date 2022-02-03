import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import '../styles/global.scss'
import Layout from '../components/layout'
// import ScrollToTop from "../components/ScrollToTop";


export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* <ScrollToTop/> */}
      <Component {...pageProps} />
    </Layout>
  )
}