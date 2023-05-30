import { useContext } from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import VideoBackG from '../../components/video';
import MultiLingualContent from '../../components/MultyLingualContent';
import LanguageContext from '../../context';
import Footer from '../../components/footer';
import ServicesCard from '../../components/services-card';

const HomePage = () => {
  // const { language, selectLanguage } = useContext(LanguageContext);

  return (
    <>
      <div className={styles.div}>
        <Header />
        <ServicesCard />
        <div>
          <h1>
            <MultiLingualContent contentID="welcome" />
          </h1>
          <p>
            <MultiLingualContent contentID="description" />
          </p>
        </div>

        <footer>
          <p>Contact us: example@example.com</p>
        </footer>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
