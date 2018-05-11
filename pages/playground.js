import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import AdminBuilder from '../lib/AdminBuilder';
import library from '../patterns';

export default () => (
  <div>
    <Header />

    <AdminBuilder library={library} />

    <Footer />
  </div>
);