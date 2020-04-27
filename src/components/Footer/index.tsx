import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const links = [
  {
    key: 'Huobi Business',
    title: 'Huobi Business',
    href: 'https://pro.ant.design',
    blankTarget: true,
  },
  {
    key: 'github',
    title: <GithubOutlined />,
    href: 'https://github.com/ant-design/ant-design-pro',
    blankTarget: true,
  },
  {
    key: 'Ant Design',
    title: 'Ant Design',
    href: 'https://ant.design',
    blankTarget: true,
  },
];

export default () => <DefaultFooter copyright="Huobi Business" links={[]} />;
