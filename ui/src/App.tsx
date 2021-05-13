import 'antd/dist/antd.css';
import React from "react";
import { Layout } from 'antd';
import {TopMenu} from "./components/topMenu/TopMenu";
import {LeftMenu} from "./components/leftMenu/LeftMenu";
import {Breadcrumbs} from "./components/breadcrumbs/BreadCrumbs";

const { Content, Sider } = Layout;

export const App = () => (
    <Layout>
        <TopMenu />
        <Layout>
            <Sider width={200} className="site-layout-background">
                <LeftMenu />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumbs />
                <Content
                    className="site-layout-background"
                    style={{
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    </Layout>
);