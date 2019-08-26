import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Simple from "../components/Simple";
import Banner from "../components/Banner";
import About from '../components/About';
import Services from '../components/Services';

export default () => (
  <Layout>
    <Simple>
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, id?"
      >
        <Link to="/tours" className="btn-white"> 
          explore tours
        </Link>
      </Banner>
    </Simple>
    <About />
    <Services />
  </Layout>
)
