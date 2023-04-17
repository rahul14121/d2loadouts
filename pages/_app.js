import '../src/App.css'
import '../src/index.css'


export default function CustomApp({ Component, pageProps }) {
  /** 
   useEffect(() => {
     initGA();
     logPageView();
     Router.events.on('routeChangeComplete', logPageView);
   }, []);
   */

  return <Component {...pageProps} />;
}
