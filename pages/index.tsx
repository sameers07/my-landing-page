import type { NextPage } from 'next';
import Head from 'next/head';
import GlobalStyle from '../styles/GlobalStyle';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Screenshots from '../components/Screenshots';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing page for our mobile application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Hero />
      <Features />
      <Screenshots />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  );
};

export default Home;

