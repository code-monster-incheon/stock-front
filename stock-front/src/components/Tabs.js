import {useEffect} from 'react'
import {Card} from 'antd';

function Tabs({data})
{
    useEffect(()=>{
        console.log(data)
    }, [data])
    return (
            <Card title= {data.category} bordered={false} style={{ width: 300, border:"1px solid black" }}>
               {data.datas.map(s=><><Card title= {s.fluctuation}>{s.market_cap}</Card><br></br></>)}
            </Card>
    )
}

export default Tabs;