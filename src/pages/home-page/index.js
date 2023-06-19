import { useContext } from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import VideoBackG from '../../components/video';
import MultiLingualContent from '../../components/MultyLingualContent';
import LanguageContext from '../../context';
import Footer from '../../components/footer';
import ServicesCard from '../../components/services-card';
// import Title from '../../components/title';
import PageLayout from '../../components/page-layout';
import Carousel from '../../components/carousel';



// Title component
const Title = () => {
  return <h1>Working with Me is Your Easy Path to Perfect Results</h1>;
};

// Introduction component
const Introduction = () => {
  return (
    <div>
      <p>
        Meet Charlie - your virtual assistant! We understand the importance of Efficiency, Reliability, and delivering Flawless outcomes for all your tasks and projects. With our step-by-step process, you can experience a seamless journey towards achieving your goals. Let us guide you through the path of successful collaboration, making your life easier and your projects a resounding success.
      </p>
    </div>
  );
};

// Step component
const Step = ({ number, title, description }) => {
  return (
    <div>
      <h2>Step {number}: {title}</h2>
      <p>{description}</p>
    </div>
  );
};

// Steps component
const Steps = () => {
  const stepsData = [
    {
      number: 1,
      title: 'Discover Your Vision',
      description: 'We begin by understanding your unique needs and goals. Whether you require administrative support, project management assistance, or creative input, we take the time to delve into the heart of your vision. By comprehending your objectives, we can tailor our services to match your specific requirements, ensuring a perfect alignment of our skills and your expectations.'
    },
    {
      number: 2,
      title: 'Personalized Engagement',
      description: 'Once we grasp your vision, we personalize our approach to match your preferences and working style. We believe that effective communication is the key to a successful partnership. Through regular discussions, virtual meetings, or email exchanges, we keep the lines of communication open, ensuring that your ideas and feedback are always heard and valued. This personalized engagement guarantees that our collaboration is productive, efficient, and tailored to your needs.'
    },
    {
      number: 3,
      title: 'Expert Execution',
      description: 'With a clear understanding of your vision and a personalized plan in place, we embark on executing your tasks and projects with unwavering dedication. Leveraging our expertise, experience, and attention to detail, we strive for perfection in every aspect of our work. From managing your schedule and organizing data to delivering outstanding results on time, we go above and beyond to ensure excellence in every task we undertake.'
    },
    {
      number: 4,
      title: 'Seamless Delivery',
      description: 'As we near the completion of your project, we ensure a seamless delivery process. Our commitment to quality means that we thoroughly review and refine our work, leaving no room for errors or oversights. Our ultimate goal is to exceed your expectations, delivering a finished product that not only meets but surpasses your requirements. Your satisfaction is our utmost priority.'
    },
    {
      number: 5,
      title: 'Celebrate Success',
      description: 'Together, we celebrate the success of your projects. With the seamless journey we\'ve taken, from understanding your vision to executing flawlessly, you can revel in the satisfaction of a job well done. Our dedication to your success shines through in every aspect of our work, and we take pride in being a trusted partner on your path to achieving exceptional results.'
    }
  ];

  return (
    <div>
      {stepsData.map((step) => (
        <Step key={step.number} number={step.number} title={step.title} description={step.description} />
      ))}
    </div>
  );
};

// Conclusion component
const Conclusion = () => {
  return (
    <div>
      <p>
        At [Your Virtual Assistant Service], we believe that working with us is an easy and rewarding experience. With our step-by-step process, we promise to deliver outstanding results that align perfectly with your vision. Let us take care of the details while you focus on what matters most to you. Get ready to embark on a journey of efficiency, collaboration, and flawless outcomes. Together, we will make your projects shine and your dreams a reality. Start working with us today and experience the ease and perfection you deserve.
      </p>
    </div>
  );
};



const HomePage = () => {

  return (
    <>
      <PageLayout>
        <Carousel />
        {/* <div className={styles.container}>
          <div className={styles.road}>
            <Title />
            <Introduction />
            <Steps />
            <Conclusion />
          </div>
        </div> */}
      </PageLayout>
    </>
  );
};

export default HomePage;
