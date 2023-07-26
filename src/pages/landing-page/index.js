import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './index.module.css';
import VideoBackG from '../../components/video';
import PageLayout from '../../components/page-layout';

const LandingPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/home')
    }, 7300)
  // }, 999999)
  }, [])

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
