import React from 'react'
import type { ProColumns } from '@ant-design/pro-table'
import ProTable, {} from '@ant-design/pro-table'
import { Button, Space, Tag } from 'antd'

type TableItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
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
  {
    title: '寿命',
    dataIndex: 'labels',
    align: 'center'
  },
  {
    title: '类别',
    dataIndex: 'labels',
    align: 'center'
  },
  {
    title: '死亡方式',
    dataIndex: 'labels',
    align: 'center'
  },
  {
    title: '创建时间',
    key: 'showTime',
    align: 'center'
  }
]

const UserPage: React.FC = () => {
  return (
    <ProTable<TableItem>
      columns={columns}
      rowKey="id"
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
    />
  )
}

export default UserPage