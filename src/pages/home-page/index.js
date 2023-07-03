import styles from './index.module.css';
import MultiLingualContent from '../../components/MultyLingualContent';
import Footer from '../../components/footer';
// import Title from '../../components/title';
import PageLayout from '../../components/page-layout';
import Carousel from '../../components/carousel';



const HomePage = () => {

  return (
    <>
      <PageLayout>
        <Carousel />
      </PageLayout>
      <Footer />
    </>
  );
};

export default HomePage;
