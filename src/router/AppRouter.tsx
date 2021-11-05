import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

const AppRouter: React.FC = () => {
  return useRoutes(routes)
}

export default AppRouter