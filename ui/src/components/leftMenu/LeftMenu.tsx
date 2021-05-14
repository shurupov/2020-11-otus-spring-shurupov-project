import {Menu} from "antd";
import {FormOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";
import {Link} from "react-router-dom";

export const LeftMenu = () => (
    <Menu
        mode="inline"
        defaultSelectedKeys={['profile']}
        defaultOpenKeys={[]}
        style={{ height: '100%', borderRight: 0 }}
    >
        <Menu.Item key="profile" icon={<UserOutlined />}><Link to={"/profile"}>Профиль</Link></Menu.Item>
        <Menu.Item key="orders" icon={<FormOutlined />}><Link to={"/orders"}>Заказы</Link></Menu.Item>
        <Menu.Item key="my-purchases" icon={<UserOutlined />}><Link to={"/my-purchases"}>Мои закупки</Link></Menu.Item>
    </Menu>
);