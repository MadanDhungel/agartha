import React from 'react';
import About from '../component/About';
import Contactus from '../component/Contactus';
import QA from '../component/QA';
import Workingmethod from '../component/Workingmethod';
import Hero from '../component/Hero'
import TopDestinations from '../component/TopDestinations';
import Trustedsection from '../component/Trustedsection';


const Home = () => {
  return (
    <div className="overflow-x-hidden">
     <Hero/>
      <About />
      <TopDestinations/>
      <Trustedsection/>
      <Workingmethod />
      <Contactus />
      <QA />
    </div>
  );
};

export default Home;
