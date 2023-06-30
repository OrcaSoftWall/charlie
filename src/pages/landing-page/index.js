import { useContext } from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import VideoBackG from '../../components/video';
import MultiLingualContent from '../../components/MultyLingualContent';
import LanguageContext from '../../context';
import PageLayout from '../../components/page-layout';

const LandingPage = () => {
  const { language, selectLanguage } = useContext(LanguageContext);

  return (
    <>
      <PageLayout>
        <div className={styles.div}></div>
      </PageLayout>
      <VideoBackG />
    </>
  );
};

export default LandingPage;
