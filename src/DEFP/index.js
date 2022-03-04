/*
 * @Author: 周冰洁
 * @desc: 定额发票 发票模板
 */
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { CalendarOutlined } from '@ant-design/icons';
import { Row, Col, Select, Radio } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import Numeral from '../utils/Numeral';
import Footer from '../components/Footer';

const { Option } = Select;

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('component up date', prevState)
  }

  render () {
    const { prefixCls, taxDataList=[], taxConfig={} } = this.props
    return (
      <div className={`${prefixCls} ${prefixCls}-con-B`}>
        <div className={`${prefixCls}-main  ${prefixCls}-hcp`}>
          <div className={`${prefixCls}-top`}>
            <Row>
              <Col span={8}>
                <div className={`${prefixCls}-top-left`}>
                  <div className={`${prefixCls}-top-left-box`}>
                    <span>*发票代码:</span>
                    <span className={`${prefixCls}-top-left-box-input`}>
                      <input className={`${prefixCls}-input`} value={taxConfig.billCode || ''} disabled />
                    </span>
                  </div>
                </div>
              </Col>
              <Col span={8}>
                <div className={`${prefixCls}-top-titleBoxA`}>
                  <div className={`${prefixCls}-top-titleBoxA-title`}>定额发票</div>
                  <div className={`${prefixCls}-top-titleBoxA-line`}></div>
                  <div className={`${prefixCls}-top-titleBoxA-sub`}>发票联</div>
                </div>
              </Col>
              <Col span={8}>
                <div className={`${prefixCls}-top-left`} style={{float: 'right',}}>
                  <div className={`${prefixCls}-top-left-box`}>
                    <span>*发票号码:</span>
                    <span className={`${prefixCls}-top-left-box-input`}>
                      <input className={`${prefixCls}-input`} value={taxConfig.billNumber || ''} disabled />
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <table className={`${prefixCls}-dataBox-table`}>
            <tbody>
              <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                <td className={`${prefixCls}-dataBox-table-label`}>发票所在地</td>
                <td className={`${prefixCls}-dataBox-table-content`}><span>{taxConfig.otherMessage?.fpszd}</span></td>
              </tr>
              <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                <td className={`${prefixCls}-dataBox-table-label`}>总金额</td>
                <td className={`${prefixCls}-dataBox-table-content`}><span>{taxConfig.otherMessage?.zje}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  prefixCls: PropTypes.string,
}

App.defaultProps = {
  prefixCls: 'cr-tax'
}

export default App


