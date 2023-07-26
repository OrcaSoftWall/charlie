import { useContext } from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import MultiLingualContent from '../../components/MultyLingualContent';
import LanguageContext from '../../context';
import Footer from '../../components/footer';
import Title from '../../components/title';
import bunny404 from '../../images/Virtual_Assistant_404.jpg'


const HomePage = () => {
  // const { language, selectLanguage } = useContext(LanguageContext);
  const isMobile = window.innerWidth <= 1000

  return (
    <>
      <div className={styles.div}>
        <Header />
        <Title title={<MultiLingualContent contentID='notFound'/>} />
        <div className={styles.container}>
        <img className={styles.img404} src={bunny404} alt="Virtual Assistant Not Found 404" />
        </div>
        {/* <img src="https://scontent.cdninstagram.com/v/t51.2885-15/120888078_916624432200187_6173337947522019984_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=_aDjTzT8h6wAX825C48&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjQxNDEwMDUwMzkyNDUyNjIxNg%3D%3D.2-ccb7-5&oh=00_AfBigj6OEiTYSowgMnXJ6GPCF-ykcVfjqNfPq6fdUv9ZgQ&oe=64C51408&_nc_sid=10d13b" alt="Virtual Assistant Not Found 404" /> */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
