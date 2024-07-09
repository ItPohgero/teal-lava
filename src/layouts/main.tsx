import React, { PropsWithChildren } from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { If, Then } from 'react-if';
import { Icon } from '@iconify-icon/react';

const { Header, Content, Sider } = Layout;

interface MenuItem {
    id: string;
    key?: string;
    title: string;
    icon?: string;
    children?: MenuItem[] | null;
    type?: string;
}

export type TealMainLayoutType = {
    CompanyList?: { label: string, value: string }[]
    MenuModule?: MenuProps['items']
    MenuSideBar?: MenuItem[]
}

const MapMenuItems = (items: MenuItem[]): MenuProps['items'] => {
    return items.map((item) => ({
        key: item.key ?? item.id,
        label: item.title,
        icon: item.icon ? <Icon icon={item.icon} /> : undefined,
        children: item.children ? MapMenuItems(item.children) : undefined,
    })) as MenuProps['items'];
};

const TealMainLayout: React.FC<PropsWithChildren<TealMainLayoutType>> = (props) => {
    const MenuSideBar: MenuProps['items'] = props.MenuSideBar ? MapMenuItems(props.MenuSideBar) : [];
    return (
        <Layout style={{height: '100vh'}}>
            <Header style={{ display: 'flex', alignItems: 'center', background: 'white' }}>
                <If condition={!!props?.CompanyList}>
                    <Then>
                        <div>
                            company
                        </div>
                    </Then>
                </If>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={props?.MenuModule}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Layout>
                <Sider width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={MenuSideBar}
                    />
                </Sider>
                <Layout style={{ padding: '24px' }}>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: '#fff',
                            borderRadius: 8,
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default TealMainLayout;