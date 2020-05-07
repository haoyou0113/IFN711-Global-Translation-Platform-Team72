// @flow

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Typography } from 'antd';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import TopContent from './components/TopContent';
import { get, post } from '../../utils/request';
import Login from '../../pages/login';
import './index.css';
const { Title } = Typography;

const { Header, Footer, Sider, Content } = Layout;

export const Home = () => {
  const [authority, setAuthority] = useState(true);

  const login = (value) => {
    post('http://localhost:8080/api/user/login', value).then((res) => {
      if (res.errno === 0) {
        setAuthority(true);
      } else {
        alert('login failed');
      }
    });
  };

  if (authority === true) {
    return (
      <Layout>
        <Header>
          <img
            className='logoTop'
            src='https://site2.staging.libraryforall.org.au/wp-content/uploads/2018/12/Library-for-All-Badge-Logo-Black-300x300.png'
          />
          <Menu />
        </Header>
        <Content className='homeContent'>
          <div className='topContent'>
            <TopContent />
          </div>
          <Title level={2} style={{ textAlign: 'center' }}>
            Books You Might Want
          </Title>
          <Gallery />
        </Content>
        <Footer>
          <Link to='/dashboard/books'>
            <Button>Link to Dashboard</Button>
          </Link>
          CopyRight made by QUT Team 72 @2020
        </Footer>
      </Layout>
    );
  } else {
    return (
      <Layout className='loginCom'>
        <Login login={login} />
      </Layout>
    );
  }
};

export default Home;