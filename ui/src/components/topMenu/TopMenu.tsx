import React from "react";

import { Layout, Menu } from 'antd';
import {UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
const { Header } = Layout;

interface TopMenuProps {
    selected: string;
}

export const TopMenu = (props: TopMenuProps) => {
    return <Header className="header">
        <Menu theme="dark" mode="horizontal" selectedKeys={[props.selected]}>
            <Menu.Item key="/purchases"><Link to={"/purchases"}>Закупки</Link></Menu.Item>
            <Menu.Item key="/auth" icon={<UserOutlined/>}><Link to={"/auth"}>Log In</Link></Menu.Item>
        </Menu>
    </Header>
};