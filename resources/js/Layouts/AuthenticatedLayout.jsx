import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, router } from '@inertiajs/react';
import { FaPowerOff } from 'react-icons/fa';

const { Header, Content, Sider } = Layout;
const items = [
    {
        key: '/admin/dashboard',
        label: 'Dashboard',
    },
    {
        key: '/admin/brands',
        label: 'Brands',
    },
    {
        key: '/admin/categories',
        label: 'Categories',
    },
    {
        key: '/admin/products',
        label: 'Products',
    },
]

const navigate = (e) => {
    router.visit(e.key)
}


const Authenticated = ({ user, children }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="text-orange-500 font-bold text-2xl text-center p-4" >SuLoveSewa</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['/admin/dashboard']} items={items} onClick={navigate} />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <div className='flex justify-end mr-2 gap-2'>
                        <Link href={route('profile.edit')}>
                            <Button className='uppercase font-bold text-green-500'>{user.name}</Button>
                        </Link>
                        <Link as='button' href={route('logout')} className='text-red-600' method='post'>
                            <FaPowerOff size={20} />
                        </Link>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: "89vh",
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};
export default Authenticated;