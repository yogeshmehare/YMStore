import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../styles/globals.css'
import ProductsCategory from '../components/ProductsCategory'
import Cart from '../components/Cart'
import CartShowOrHideContextProvider from '../contexts/CartShowOrHideContext'
import 'react-toastify/dist/ReactToastify.css';
import LoginContextProvider from '../contexts/LoginContext'

function MyApp({ Component, pageProps }) {

  // const notify = (txtMsg) => toast(txtMsg);

  return <div className=''>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest"></link>


    <LoginContextProvider>
      <CartShowOrHideContextProvider>
        <NavBar />
        <Cart />
        <ProductsCategory />
        <Component {...pageProps} />
      </CartShowOrHideContextProvider>
    </LoginContextProvider>

    <Footer />


  </div>

}

export default MyApp
