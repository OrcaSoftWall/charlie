import { useContext } from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import MultiLingualContent from '../../components/MultyLingualContent';
import LanguageContext from '../../context';
import Footer from '../../components/footer';
import Title from '../../components/title';
import Accordion from '../../components/accordion';
import { accordionData } from '../../utils/servicesData';
import HorizontalAccordion from '../../components/horizontalAccordion';
import Services from '../../components/services-bundle/Chess-card';
import ServicesMobile from '../../components/services-bundle/Services-card-mobile';

const HomePage = () => {
  // const { language, selectLanguage } = useContext(LanguageContext);
  const isMobile = window.innerWidth <= 1000

  return (
    <>
      <div className={styles.div}>
        <Header />
        <Title title={<MultiLingualContent contentID='ourServices'/>} />

        {isMobile ? (
          <ServicesMobile items={accordionData} />
        ) : (
          <Services items={accordionData} />
        )}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
