import React from 'react'
import TopHeader from '../../components/top header/TopHeader';
import Navbar from '../../components/navbar/Navbar';
import HeroSection from '../../components/Hero Section/HeroSection';
import Cart from '../../components/Cart/Cart';
import AdBanner from '../../components/AdBanner/AdBanner';
import CustomerServices from '../../components/Customer Services/CustomerServices';
import Footer from '../../components/Footer/Footer';
import AllProducts from '../../components/All Products/AllProducts';

const Home = () => {
  return (
    <div className="bg-gray-100">
        <TopHeader />
        <Navbar />
        <HeroSection />
        <AllProducts />
        <Cart />
        <AdBanner />
        <CustomerServices />
        <Footer />
      </div>
  )
}

export default Home