import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import "../styles/loading.css"
import 'aos/dist/aos.css';


const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
