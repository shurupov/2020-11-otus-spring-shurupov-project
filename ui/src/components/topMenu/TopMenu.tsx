
import React from "react";

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Sider } = Layout;

export const TopMenu = () => (
    <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">Закупки</Menu.Item>
        </Menu>
    </Header>
);