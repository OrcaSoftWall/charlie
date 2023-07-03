import { useContext } from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import MultiLingualContent from '../../components/MultyLingualContent';
import Footer from '../../components/footer';
import Title from '../../components/title';

const HomePage = () => {
  // const { language, selectLanguage } = useContext(LanguageContext);
  const isMobile = window.innerWidth <= 1000

  return (
    <>
      <div className={styles.div}>
        <Header />
        <Title title={<MultiLingualContent contentID='about'/>} />

        {/* <HorizontalAccordion items={accordionData} /> */}

        {/* <div>
          <h1>
            <MultiLingualContent contentID="welcome" />
          </h1>
          <p>
            <MultiLingualContent contentID="description" />
          </p>
        </div> */}

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
