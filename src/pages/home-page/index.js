import styles from './index.module.css';
import MultiLingualContent from '../../components/MultyLingualContent';
import Footer from '../../components/footer';
// import Title from '../../components/title';
import PageLayout from '../../components/page-layout';
import Carousel from '../../components/carousel';
import slider from '../../components/carousel/slider-data'
import Content from '../../components/content'
import Link from '../../components/link'



const HomePage = () => {

  return (
    <>
      <PageLayout>
        <Carousel {...slider} />
        <Content title='homeTitle' text='homeText' />
        <Link title={<MultiLingualContent contentID="contact" />} href="/contact" type='slider' />
      </PageLayout>
      <Footer />
    </>
  );
};

export default HomePage;
