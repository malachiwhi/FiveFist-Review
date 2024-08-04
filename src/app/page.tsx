import Image from 'next/image';
import Link from 'next/link';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Search from './components/Search';
import Review from './components/Review';
import Blog from './components/Blog'; 
import Action from './components/Action'; 
import Footer from './components/Footer'; 


export default function HomePage() {
  return (
    <>
    <NavBar/>
      {/* Hero Section */}
    <Hero/>
      {/* Search Section */}
    <Search/>
      {/* Recent Review Section */}
    <Review/>
      {/* Recent Blog Section */}
    <Blog/>  
      {/* Call to Action Section */}
    <Action/>
      {/* Call to Footer Section */}
    <Footer/>
    </>
  );
}
