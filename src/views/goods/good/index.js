import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';


const columns = [
    {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    },
    {
      title: '商品图片',
      dataIndex: 'img',
      key: 'img',
    },
    {
      title: '商品数量',
      dataIndex: 'count',
      key: 'count',
    },
    {
      title: '商品类型',
      key: 'goodType',
      dataIndex: 'goodType',
      
    },
    {
        title: '商品颜色',
        dataIndex: 'colors',
        key: 'colors',
        render: colors => (
            <span>
              {colors.map(tag => {  
                return (
                  <Tag  key={tag}>
                    {tag}
                  </Tag>
                );
              })}
            </span>
        ),
    },
    {
        title: '商品尺码',
        dataIndex: 'sizes',
        key: 'sizes',
        render: sizes => (
            <span>
                {sizes.map(tag => {  
                    return (
                    <Tag  key={tag}>
                        {tag}
                    </Tag>
                    );
                })}
            </span>
        ),
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;">操作</a>
          <Divider type="vertical" />
          <a href="javascript:;">删除</a>
        </span>
      ),
    },
];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      img: "32",
      cpunt: 'New York No. 1 Lake Park',
      colors: ['nice', 'developer'],
      sizes:[]
    }
];
class Good extends Component {
    render() {
        return (
            <Table columns={columns} dataSource={data} />
        );
    }
}

export default Good;
