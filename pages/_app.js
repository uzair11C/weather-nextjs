import '../styles/mobile.css'
import '../styles/tablet.css'
import '../styles/desktop.css'
import '../styles/Loader.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../Components/Layout'
import {useEffect} from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps })
{

  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.min.js')
  },[])

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
