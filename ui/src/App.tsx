import 'antd/dist/antd.css';
import React from "react";
import { Layout } from 'antd';
import {TopMenu} from "./components/topMenu/TopMenu";
import {LeftMenu} from "./components/leftMenu/LeftMenu";
import {Breadcrumbs} from "./components/breadcrumbs/BreadCrumbs";
import {Provider} from "react-redux";
import {store, history} from "./store/store";
import {ConnectedRouter} from "connected-react-router";
import {CustomContent} from "./components/customContent/CustomContent";

const { Content, Sider } = Layout;

export const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
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
                            <CustomContent />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </ConnectedRouter>
    </Provider>
);