import Footer from "./partials/Footer.comp";
import Header from "./partials/Header.comp";

const DefaultLayout: React.FC = (props) => {
  return (
    <div className="default-layout">
      <header className="header">
        <Header />
      </header>
      <main style={{ marginTop: 15 }} className="main">
        {props.children}
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
