import { useContext } from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import MultiLingualContent from '../../components/MultyLingualContent';
import LanguageContext from '../../context';
import Footer from '../../components/footer';
import ServicesCard from '../../components/services-card';
import Title from '../../components/title';
import Accordion from '../../components/accordion';
import {accordionData} from '../../components/accordion/accordionData';

const HomePage = () => {
  // const { language, selectLanguage } = useContext(LanguageContext);

  return (
    <>
      <div className={styles.div}>
        <Header />
        <Title title="Title" />
        <ServicesCard />
        <div className={styles.accordion}>
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
        <div>
          <h1>
            <MultiLingualContent contentID="welcome" />
          </h1>
          <p>
            <MultiLingualContent contentID="description" />
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
