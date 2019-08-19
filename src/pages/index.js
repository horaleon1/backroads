import React from "react";
import { Link } from "gatsby";
import Layout from '../components/Layout';

export default () => (
 
  <Layout>
     <Link to="/blog/">blog page </Link>


    <div className="container">
      <div className="row">
        <div className="col-4">Hello</div>
        <div className="col-4">Hello2</div>
        <div className="col-4">Hello4</div>
      </div>
    </div>
  </Layout>
 
)
