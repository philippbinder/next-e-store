import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  return (
    <div>
      <Header />
      Extra Content.
      {props.children}
      <Footer />
    </div>
  );
}
