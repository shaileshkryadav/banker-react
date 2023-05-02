import React from 'react'
import styles from './style';

import Billing from "./components/Billing";
import Business from "./components/Business";
import Button from "./components/Button";
import CardDeal from "./components/CardDeal";
import Client from "./components/Client";
import CTA from "./components/CTA";
import Feedback from "./components/Feedback";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Hero
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Billing />
          <Business />
          <Button />
          <CardDeal />
          <Client />
          <CTA />
          <Feedback />
          <GetStarted />
          <Hero />
          <Stats />
          <Testimonials />
        </div>
      </div>
    </div>
  )
}

export default App;
