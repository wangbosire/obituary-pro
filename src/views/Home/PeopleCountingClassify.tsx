import React from "react";
import { StatisticCard } from "@ant-design/pro-card";
import { Chart, Tooltip, Coord, StackBar, Legend } from "viser-react";

const data = [{
  location: '三亚',
  value: 44.9
}, {
  location: '千岛湖',
  value: 19.7
}, {
  location: '柬埔寨',
  value: 17.3
}, {
  location: '呼伦贝尔',
  value: 14.4
}, {
  location: '苏梅岛',
  value: 2.5
}, {
  location: '塞班岛',
  value: 2.5
}];

const PeopleCountingClassify: React.FC = () => {

  const ChartView = (
    <Chart forceFit data={data} height={350} padding='auto'>
      <Tooltip />
      <Legend position="bottom-center"/>
      <Coord type='theta' radius={0.75}/>
      <StackBar
        position='value'
        color={['location', ['#1890ff', '#37c661', '#fbce1e', '#2b3b79', '#8a4be2', '#1dc5c5']]}
        style={{
          stroke: 'white',
          lineWidth: 1
        }}
        label={['value', function(val: number) {
          if (val < 3) {
            return null;
          } else {
            return {
              offset: -30,
              textStyle: {
                fill: 'white',
                fontSize: 14,
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, .45)'
              },
              formatter: function formatter(text: string) {
                return text + '%';
              }
            };
          }
        }]}
      />
    </Chart>
  )

  return (
    <StatisticCard
      title="111"
      chart={ChartView}
    />
  )
}

export default PeopleCountingClassify
