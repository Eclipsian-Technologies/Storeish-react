import React from 'react';
import Header from '../components/Header.jsx';
import HeroSection from '../components/HeroSection';
import InfoCards from '../components/InfoCards';
import CategorySlider from '../components/CategorySlider';
import BestSellers from '../components/BestSellers';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <InfoCards />
        <CategorySlider />
        <BestSellers />
        <ProductList />
      </main>
      <Footer />
    </>
  );
}

export default Home;