import { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
function Tabs({ title, dataList }) {
  const { isLoading } = useSelector((state) => state.data);
  return (
    <Card
      title={title}
      bordered={false}
      style={{ width: 300, border: '1px solid black' }}
    >
      {isLoading && dataList.map((s) => <p>{s.name}</p>)}
    </Card>
  );
}

export default Tabs;
