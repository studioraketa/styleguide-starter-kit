import Helmet from 'react-helmet';

import Header from './Header';
import Footer from './Footer';

export default ({ children }) => (
  <div>
    <Helmet>
      <title>Styleguide</title>
    </Helmet>

    <Header />
    {children}
    <Footer />
  </div>
);
