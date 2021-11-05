import React from 'react'
import AppRouter from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'

function App() {
  return (
    <ConfigProvider componentSize="small">
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
