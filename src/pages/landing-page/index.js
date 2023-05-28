// import { useState } from 'react';
// import styles from "./index.module.css";
// import Header from '../../components/header';
// import translations from '../../utils/translations';
// import VideoBackG from '../../components/video';
// import MultiLingualContent from '../../components/MultyLingualContent';
// import LanguageButton from '../../components/LanguagleButton';

// const LandingPage = () => {
//   const [language, setLanguage] = useState('en');
//   const [activeTab, setActiveTab] = useState('home');

//   return (
//     <>
//       <VideoBackG />
//       <div className={styles.div}>
//         <Header />

//         <div>
//           <LanguageButton />
//           <h1>
//             <MultiLingualContent contentID='welcome' />
//           </h1>
//           <p>
//             <MultiLingualContent contentID='description' />
//           </p>
//         </div>

//         <footer>
//           <p>Contact us: example@example.com</p>
//         </footer>
//       </div>
//     </>
//   );
// };

// export default LandingPage;


import { useContext } from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import VideoBackG from '../../components/video';
import MultiLingualContent from '../../components/MultyLingualContent';
import LanguageContext from '../../context';

const LandingPage = () => {
  const { language, selectLanguage } = useContext(LanguageContext);

  return (
    <>
      <VideoBackG />
      <div className={styles.div}>
        <Header />
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
      </div>
    </>
  );
};

export default LandingPage;
