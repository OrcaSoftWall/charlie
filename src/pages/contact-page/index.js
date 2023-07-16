import { useContext } from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import MultiLingualContent from '../../components/MultyLingualContent';
import Footer from '../../components/footer';
import Title from '../../components/title';
import { contactData } from '../../utils/contactData';
import ServicesPicture from '../../components/services-bundle/Services-picture';
import { ContactUs } from '../../components/EmailJSContact';


const HomePage = () => {
  // const { language, selectLanguage } = useContext(LanguageContext);
  const isMobile = window.innerWidth <= 1000

  return (
    <>
      <div className={styles.div}>
        <Header />
        <Title title={<MultiLingualContent contentID='contact'/>} />

        {/* {isMobile ? (
          <ServicesMobile items={contactData} />
        ) : (
          <div className={styles.board}>
            <ServicesPicture backgroundImage={contactData[0].backgroundImage} />
            <ContactUs />
          </div>
        )} */}
        <div className={styles.board}>
          <ServicesPicture backgroundImage={contactData[0].backgroundImage} />
          {/* <ServicesContent title={contactData[0].title} subtitle={contactData[0].subtitle} text={contactData[0].text} foot={contactData[0].foot} /> */}
          <ContactUs />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
