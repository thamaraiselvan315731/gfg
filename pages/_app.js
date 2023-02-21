import '../styles/globals.css';
import Home from "../pages/index"

export default function App({ Component, pageProps }) {
  return (<>
    <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
    <Home></Home><Component {...pageProps} /></>)
}
