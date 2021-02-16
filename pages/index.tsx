import * as React from 'react';
import Layout from '../components/common/Layout';
import {NextPage} from 'next';
const IndexPage: NextPage = () => {
  return(
    <Layout title="Home | Next.js + TypeScript - Page Index">
      <h1>Hello, World!👋</h1>
    </Layout>
  );
};

export default IndexPage;
