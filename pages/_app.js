import AppLayout from '../components/AppLayout';
import '../styles/antd.less';
import '../styles/globals.css';
// react gtid layout
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}
