import React from "react";
import ProCard from "@ant-design/pro-card";

const FunctionalNavigation: React.FC = () => {
  return (
    <>
      <ProCard title="常用功能导航" gutter={6}>
        <ProCard layout="center">
          生死簿
        </ProCard>
        <ProCard layout="center">
          查询寿命
        </ProCard>
        <ProCard layout="center">
          入境管理
        </ProCard>
        <ProCard layout="center">
          重新投胎
        </ProCard>
        <ProCard layout="center">
          货币管理
        </ProCard>
        <ProCard layout="center">
          操作日志
        </ProCard>
      </ProCard>
      <ProCard>
        <ProCard layout="center">
          十八地狱
        </ProCard>
        <ProCard layout="center">
          发勾魂单
        </ProCard>
        <ProCard layout="center">
          资产管理
        </ProCard>
        <ProCard layout="center">
          员工管理
        </ProCard>
        <ProCard layout="center">
          营销管理
        </ProCard>
        <ProCard layout="center">
          百鬼夜行
        </ProCard>
      </ProCard></>
  )
}

export default FunctionalNavigation