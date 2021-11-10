import React from "react";
import { Space } from "antd";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import "../assets/style/layout/app-layout-header.less";
import { useNavigate } from "react-router-dom";

const AppLayoutHeader: React.FC = () => {

  const navigate = useNavigate();

  const toSetting = () => {
    navigate('/setting')
  }

  return (
    <div className="app-layout-header-right-content">
      <Space size={15}>
        <SettingOutlined onClick={toSetting} spin={true} className="app-layout-header-icons"/>
        <LogoutOutlined className="app-layout-header-icons"/>
      </Space>
    </div>
  )
}

export default AppLayoutHeader
