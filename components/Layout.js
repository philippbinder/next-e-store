import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
// Alles was auf anderen Seiten innerhalb von <Layout> </Layout> gepassed wird, wird props.children
