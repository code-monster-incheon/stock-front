import {
  Spin,
  Card,
  Statistic,
  Row,
  Col,
  Menu,
  Dropdown,
  Button,
  List,
} from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH_DATA_REQUEST } from '../modules/data';
function Bars({ data }) {
  const loadingImage = {
    textAlign: 'center',
    borderRadius: '4px',
    marginBottom: '20px',
    padding: '30px 50px',
    margin: '20px 0',
  };
  const dispatch = useDispatch();
  const { isLoading, resultDatas } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch({ type: SEARCH_DATA_REQUEST });
  }, [isLoading]);

  return (
    <>
      {!isLoading ? (
        <div style={loadingImage}>
          <Spin />
        </div>
      ) : null}
      {isLoading && (
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 2,
            xl: 3,
            xxl: 3,
          }}
          style={{ 
            marginTop: '50px',
         }}
          dataSource={resultDatas}
          renderItem={(item) => (
            <List.Item>
              <Card
                title={item.name}
                extra={item.dailyPriceChangeRatio}
                style={{
                  borderRadius: '10px',
                }}
              >

              <List
                style={{ height: '500px', overflow: 'scroll' }}
                size="small"
                bordered
                dataSource={item.stocks}
                renderItem={(innerItem) => (
                  <List.Item>
                    <Statistic
                      title={innerItem.name}
                      value={innerItem.dailyPriceChangeRatio}
                      precision={2}
                      valueStyle={
                        innerItem.dailyPriceChangeRatio.charAt(0) == '-'
                          ? { color: '#0F52B9' }
                          : { color: '#FF2300' }
                      }
              
                    />
                  </List.Item>
                  )}
                />
              </Card>
            </List.Item>
          )}
        />
      )}
    </>
  );
}

export default Bars;
