import React from 'react'
import { ProFormText, LoginForm } from '@ant-design/pro-form'
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons'

const LoginPage: React.FC = () => {

  // 登录逻辑
  const handleSubmit = async (formData: API.LoginParams) => {
  }

  return (
    <LoginForm
      title="000"
      subTitle="。。。。。"
      onFinish={handleSubmit}
    >
      <ProFormText
        name="username"
        fieldProps={{
          size: 'large',
          prefix: <UserOutlined className={'prefixIcon'}/>,
        }}
        placeholder={'用户名: admin or user'}
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
      />
      <ProFormText.Password
        name="password"
        fieldProps={{
          size: 'large',
          prefix: <LockOutlined className={'prefixIcon'}/>,
        }}
        placeholder={'密码: ant.design'}
        rules={[
          {
            required: true,
            message: '请输入密码！',
          },
        ]}
      />
    </LoginForm>
  )
}
export default LoginPage
