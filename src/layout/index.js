import React, { Component, Fragment } from 'react';
import { Layout, Menu } from 'antd';
import SlideEach from "@utils/slideEach"
import { layoutRouteComponent } from "@route"
import { withRouter } from 'react-router-dom';
import {Logo} from "./styled"
const { Header, Content, Footer, Sider } = Layout;
const slideTabBurs = SlideEach(layoutRouteComponent)
class LayoutCom extends Component {
    render() {
        return (
            <Fragment>
                <Layout>
                    <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                        }}
                    >
                        <Logo>
                            <img src="http://www.5lux.com/vendor/images/v30/logo.jpg" alt="logo"/>
                        </Logo>
                        <Menu theme="dark" mode="inline"
                            onClick={this.handleTo.bind(this)}
                            defaultSelectedKeys={['4']}>
                            {
                                slideTabBurs
                            }
                        </Menu>
                    </Sider>
                    <Layout style={{ marginLeft: 200 }}>
                        <Header style={{ background: '#fff', padding: 0 }} />
                        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                                {this.props.children}
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </Fragment>
        );
    }
    handleTo({ key }) {
        this.props.history.push(key)
    }
}

export default withRouter(LayoutCom);
