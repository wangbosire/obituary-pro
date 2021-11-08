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
    routes: []
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
      title={''}
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
