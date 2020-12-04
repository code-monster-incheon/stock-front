import { Spin, Card, Statistic, Row, Col, Menu, Dropdown, Button } from 'antd';
import Tabs from './Tabs';
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

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          제4이동통신
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          코로나19(음압병실/음압구급차)
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          갤럭시 부품주
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      {' '}
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button>예시로 넣어봤어용 </Button>
      </Dropdown>
      <Row gutter={24}>
        {!isLoading ? (
          <div style={loadingImage}>
            <Spin />
            <br></br>
            <p>로딩 중입니다.....</p>
          </div>
        ) : (
          <>
            <Col span={8}>
              <Tabs
                dataList={resultDatas['제4이동통신']}
                title={'제4이동통신'}
                val={3}
              />
            </Col>

            <Col span={8}>
              <Tabs
                dataList={resultDatas['코로나19(음압병실/음압구급차)']}
                title={'코로나19(음압병실/음압구급차)'}
                val={3}
              />
            </Col>

            <Col span={8}>
              <Tabs dataList={resultDatas['편의점']} title={'편의점'} val={3} />
            </Col>
          </>
        )}
      </Row>
    </>
  );
}

export default Bars;
