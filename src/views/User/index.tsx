import React, { useState } from 'react'
import type { ProColumns } from '@ant-design/pro-table'
import ProTable, {} from '@ant-design/pro-table'
import { Button, Space, Tag } from 'antd'
import { LoadingComponent } from '../../components'

type TableItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  state: string;
}

const columns: ProColumns<TableItem>[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    align: 'center',
    copyable: true,
    ellipsis: true,
    width: '100px'
  },
  {
    title: '姓名',
    align: 'center',
    dataIndex: 'state'
  },
  // {
  //   title: '寿命',
  //   dataIndex: 'labels',
  //   align: 'center'
  // },
  // {
  //   title: '类别',
  //   dataIndex: 'labels',
  //   align: 'center'
  // },
  // {
  //   title: '死亡方式',
  //   dataIndex: 'labels',
  //   align: 'center'
  // },
  {
    title: '创建时间',
    key: 'showTime',
    align: 'center'
  }
]

const UserPage: React.FC = () => {

  const dataSource: TableItem[] = [{
    url: 'string',
    id: 111,
    number: 111,
    title: '1111',
    state: '1'
  }]


  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 2000)

  return (
    <LoadingComponent loading={loading}>
      <ProTable<TableItem>
        columns={columns}
        rowKey="id"
        bordered
        search={{
          labelWidth: 120
        }}
        form={{
          ignoreRules: false,
        }}
        pagination={{
          pageSize: 5,
          showQuickJumper: true
        }}
        headerTitle={false}
        toolBarRender={false}
        dataSource={dataSource}
      />
    </LoadingComponent>
  )
}

export default UserPage
