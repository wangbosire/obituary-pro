import React from "react";
import ProCard from "@ant-design/pro-card";

const IndicatorCard: React.FC = () => {
  return (
    <ProCard ghost gutter={6}>
      <ProCard layout="center" bordered>
        地府人数
      </ProCard>
      <ProCard layout="center" bordered>
        今日入境
      </ProCard>
      <ProCard layout="center" bordered>
        今日出境
      </ProCard>
      <ProCard layout="center" bordered>
        管理员
      </ProCard>
    </ProCard>
  )
}

export default IndicatorCard