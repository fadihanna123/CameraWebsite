import Main from 'components/Main';
import Footer from 'inc/Footer';
import Header from 'inc/Header';

const Layout: React.FC = () => (
  <section className="container">
    <Header />
    <Main />
    <Footer />
  </section>
);

export default Layout;
