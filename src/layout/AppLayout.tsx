import React from 'react'
import { useBoolean } from 'ahooks'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import ProLayout, { PageContainer, MenuDataItem } from '@ant-design/pro-layout'
import { Route } from '@ant-design/pro-layout/lib/typings'
import { Outlet, Link, useLocation } from 'react-router-dom'
import appConfig from '../config/app.config'

const AppLayout: React.FC = () => {
  const location = useLocation()
  const [collapsed, { toggle: toggleCollapsed }] = useBoolean(true)

  const appRoutes: Route = {
    path: '/',
    routes: [
      {
        path: '/home',
        name: '首页',
        icon: <MenuUnfoldOutlined/>
      },
      {
        path: '/obituaryBook',
        name: '生死簿',
        icon: <MenuUnfoldOutlined/>,
        children: [
          {
            path: '/user',
            name: '用户管理',
            icon: <MenuUnfoldOutlined/>
          },
          {
            path: '/data-sync',
            name: '数据同步',
            icon: <MenuUnfoldOutlined/>
          }
        ]
      },
      {
        path: '/gou-hun',
        name: '勾魂管理',
        icon: <MenuUnfoldOutlined/>
      },
      {
        path: '/shen-pan-history',
        name: '阎王殿审判记录',
        icon: <MenuUnfoldOutlined/>
      },
      {
        path: '/di-yu-18-tier',
        name: '十八层地狱',
        icon: <MenuUnfoldOutlined/>,
        children: [
          {
            path: '/equipment',
            name: '设备管理',
            icon: <MenuUnfoldOutlined/>,
          },
          {
            path: '/workflow',
            name: '作业流程',
            icon: <MenuUnfoldOutlined/>,
          }
        ]
      },
      {
        path: '/6-dao-again',
        name: '六道轮回',
        icon: <MenuUnfoldOutlined/>
      },
      {
        path: '/ming-bi',
        name: '冥币管理',
        icon: <MenuUnfoldOutlined/>
      },
      {
        path: '/logger',
        name: '日志管理',
        icon: <MenuUnfoldOutlined/>
      },
      {
        path: '/system',
        name: '系统管理',
        icon: <MenuUnfoldOutlined/>,
        children: [
          {
            path: '/administrator',
            name: '管理员',
            icon: <MenuUnfoldOutlined/>
          },
          {
            path: '/role-permission',
            name: '角色权限',
            icon: <MenuUnfoldOutlined/>
          }
        ]
      }
    ]
  }

  const headerContentRender = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div
          onClick={() => toggleCollapsed()}
          style={{ cursor: 'pointer', fontSize: '16px' }}
        >
          {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
        </div>

        <div>2222</div>
      </div>
    )
  }

  const menuItemRender = (item: MenuDataItem, dom: React.ReactNode) => (
    <Link
      to={item.path || ''}>
      {dom}
    </Link>
  )

  return (
    <ProLayout
      location={location}
      collapsed={collapsed}
      fixSiderbar={true}
      collapsedButtonRender={false}
      fixedHeader={true}
      navTheme="dark"
      onCollapse={toggleCollapsed}
      headerContentRender={headerContentRender}
      route={appRoutes}
      menuItemRender={menuItemRender}
      title={'地府管理系统'}
      logo={
        <img src={appConfig.logo} alt=""/>
      }
    >
      <PageContainer title={false} pageHeaderRender={false}>
        <Outlet/>
      </PageContainer>
    </ProLayout>
  )
}

export default AppLayout