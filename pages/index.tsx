import * as React from 'react';
import Layout from '../components/common/Layout';
import {NextPage} from 'next';
import HeroBanner from '../components/HeroBanner'



const IndexPage: NextPage = () => {
  return(
    <Layout title="Felix Le's Website">
      <div>
        <h1>this is navbar</h1>
      </div>
      <div>
        <div className="slider-wrapper">
          <HeroBanner/>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
