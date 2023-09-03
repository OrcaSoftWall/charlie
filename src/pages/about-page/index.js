import styles from './index.module.css';
import MultiLingualContent from '../../components/MultyLingualContent';
import Footer from '../../components/footer';
import Title from '../../components/title';
import PageLayout from '../../components/page-layout';

import Content from '../../components/content'
import Link from '../../components/link'
import Circle from '../../components/circle';

const HomePage = () => {

  return (
    <>
      <PageLayout>
        {/* <Title title={<MultiLingualContent contentID='homeTitle' />} /> */}
        <Content title='aboutTitle' text='aboutText1' />
        <Circle />
        {/* <Carousel {...slider} /> */}
        <Content text='aboutText2' />
        <Link title={<MultiLingualContent contentID="contact" />} href="/contact" type='slider' />
      </PageLayout>
      <Footer />
    </>
  );
};

export default HomePage;
