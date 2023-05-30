import { useContext } from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import VideoBackG from '../../components/video';
import MultiLingualContent from '../../components/MultyLingualContent';
import LanguageContext from '../../context';
import PageLayout from '../../components/page-layout';

const LandingPage = () => {
  const { language, selectLanguage } = useContext(LanguageContext);

  return (
    <>
      <PageLayout>
        <VideoBackG />
        <div className={styles.div}>
          <Header />
          {/* <div>
          <h1>
            <MultiLingualContent contentID="welcome" />
          </h1>
          <p>
            <MultiLingualContent contentID="description" />
          </p>
        </div>

        <footer>
          <p>Contact us: example@example.com</p>
        </footer> */}
        </div>
      </PageLayout>

    </>
  );
};

export default LandingPage;
