import { useEffect } from 'react';
import { Card, Statistic, Row, Col, Menu, Dropdown, Button } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

function Tabs({ dataList, title }) {
  return (
    <Card
      title={title}
      bordered={false}
      style={{ width: 300, border: '1px solid black' }}
    >
      {dataList.map((s, idx) => (
        <>
          <div className="site-statistic-demo-card">
            <Card>
              <Statistic
                title={s.name}
                value={s.changeRatio}
                precision={3}
                valueStyle={
                  s.changeRatio.charAt(0) == '+'
                    ? { color: 'blue' }
                    : { color: '#cf1322' }
                }
                prefix={
                  s.changeRatio.charAt(0) == '+' ? (
                    <ArrowUpOutlined />
                  ) : (
                    <ArrowDownOutlined />
                  )
                }
                suffix="%"
              />
            </Card>
          </div>
        </>
      ))}
    </Card>
  );
}

export default Tabs;
