import { useContext } from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import MultiLingualContent from '../../components/MultyLingualContent';
import LanguageContext from '../../context';
import Footer from '../../components/footer';
import Title from '../../components/title';
import Accordion from '../../components/accordion';
import { contactData } from '../../utils/contactData';
import HorizontalAccordion from '../../components/horizontalAccordion';
import Services from '../../components/services-bundle/Chess-card';
import ServicesMobile from '../../components/services-bundle/Services-card-mobile';
import ServicesPicture from '../../components/services-bundle/Services-picture';
import ServicesContent from '../../components/services-bundle/Services-content';


const HomePage = () => {
  // const { language, selectLanguage } = useContext(LanguageContext);
  const isMobile = window.innerWidth <= 1000

  return (
    <>
      <div className={styles.div}>
        <Header />
        <Title title="Contact" />

        {isMobile ? (
          <ServicesMobile items={contactData} />
        ) : (
          // <Services items={contactData} />
          <div className={styles.board}>
            <ServicesPicture backgroundImage={contactData[0].backgroundImage} />
            <ServicesContent title={contactData[0].title} subtitle={contactData[0].subtitle} text={contactData[0].text} foot={contactData[0].foot} />
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
