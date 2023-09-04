import { useContext } from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import MultiLingualContent from '../../components/MultyLingualContent';
import LanguageContext from '../../context';
import Footer from '../../components/footer';
import Title from '../../components/title';
import Accordion from '../../components/accordion';
import { accordionData } from '../../utils/servicesData';
import Services from '../../components/services-bundle/Chess-card';
import ServicesMobile from '../../components/services-bundle/Services-card-mobile';
import ContentPriceList from '../../components/contentPriceList';
import { pricesData } from '../../utils/pricesData';
import Content from '../../components/content'
import Link from '../../components/link'

const PricingPage = () => {
  // const { language, selectLanguage } = useContext(LanguageContext);
  const isMobile = window.innerWidth <= 1000

  return (
    <>
      <div className={styles.div}>
        <Header />
        <Title title={<MultiLingualContent contentID="pricing" />} />
        <Content text='priceText1' />
        <div className={styles.pricelistContainer}>
          <ContentPriceList items={pricesData} />
        </div>
        <Content text='priceText2' />
        <Link title={<MultiLingualContent contentID="contact" />} href="/contact" type='slider' />
        <Footer />
      </div>
    </>
  );
};

export default PricingPage;
