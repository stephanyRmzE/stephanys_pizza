import Layout from '@/components/Layout';
import '@/styles/globals.css'
import store from '../redux/store'
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
