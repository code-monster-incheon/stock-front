import { Row, Col } from 'antd';
import {useEffect, useState} from 'react'
import Tabs from './Tabs';
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_DATA_REQUEST } from "../modules/data";

function Bars({data})
{
    const dispatch = useDispatch();
    const { isLoading,  resultDatas } = useSelector((state) => state.data);
    useEffect(() => {
        dispatch({ type: SEARCH_DATA_REQUEST });
        
    }, [isLoading])
    
    return (
        <Row gutter={24}>
            <Col span={8}>
                {!isLoading ? null : <Tabs data={resultDatas[0]} val={3}/>}
            </Col>

            <Col span={8}>
                {!isLoading ? null : <Tabs data={resultDatas[1]} val={3}/>}
            </Col>

            <Col span={8}>
                {!isLoading ? null : <Tabs data={resultDatas[2]} val={3}/>}    
            </Col>
        </Row>
    )
}

export default Bars;