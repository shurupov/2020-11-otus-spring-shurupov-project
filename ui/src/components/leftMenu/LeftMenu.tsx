import {Menu} from "antd";
import {FormOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";

export const LeftMenu = () => (
    <Menu
        mode="inline"
        defaultSelectedKeys={['2']}
        defaultOpenKeys={[]}
        style={{ height: '100%', borderRight: 0 }}
    >
        <Menu.Item key="1" icon={<UserOutlined />}>Профиль</Menu.Item>
        <Menu.Item key="2" icon={<FormOutlined />}><a href={"/orders"}>Заказы</a></Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />} isSelected><a href={"/my-purchases"}>Мои закупки</a></Menu.Item>
    </Menu>
);