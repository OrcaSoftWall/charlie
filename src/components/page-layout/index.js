import Header from '../header';
import styles from './index.module.css';
// import Aside from '../aside';
import Footer from '../footer';

const PageLayout = (props) => {
  return (
    <>
      <Header />
        {/* <Aside /> */}
          {props.children}
      {/* <Footer /> */}
    </>
  );
}

export default PageLayout;
