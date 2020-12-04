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
          <br></br>
          <p>로딩 중입니다.....</p>
        </div>
      ) : null}
      {isLoading && (
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          style={{ marginTop: '50px' }}
          dataSource={resultDatas.stockParamList}
          renderItem={(item) => (
            <List.Item>
              <Card
                title={item.title}
                style={{
                  borderRadius: '10px',
                }}
              >
                <List
                  style={{ height: '500px', overflow: 'scroll' }}
                  size="small"
                  bordered
                  dataSource={item.stockList}
                  renderItem={(innerItem) => (
                    <List.Item>
                      <Statistic
                        title={innerItem.name}
                        value={innerItem.changeRatio}
                        precision={2}
                        valueStyle={
                          innerItem.changeRatio.charAt(0) == '-'
                            ? { color: '#3f8600' }
                            : { color: '#cf1322' }
                        }
                        prefix={
                          innerItem.changeRatio.charAt(0) == '-' ? (
                            <ArrowDownOutlined />
                          ) : (
                            <ArrowUpOutlined />
                          )
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
