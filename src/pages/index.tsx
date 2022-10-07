import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import About from '../components/Sections/About';
import Resume from '../components/Sections/Resume';
import {homePageMeta} from '../data/data';
import Principles from "../components/Sections/Principles";

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <About />
      <Principles />
      <Resume />
      <Contact />
      <Footer />
    </Page>
  );
});

export default Home;
