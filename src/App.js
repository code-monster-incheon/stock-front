import Bars from './components/Bars';
import 'antd/dist/antd.css';
import './css/main.css';
import { PageHeader } from 'antd';
function App() {
  return (
    <div style={{ margin: 'auto', width: '1400px' }}>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="주 한 보"
        subTitle="주식을 한눈에 보자"
        backIcon={false}
      />

      <Bars />
    </div>
  );
}

export default App;
