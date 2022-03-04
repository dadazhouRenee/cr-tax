/*
 * @Author: 周冰洁
 * @desc: 火车票 发票模板
 */
import React, { PureComponent } from 'react';
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
    const dataTr = taxDataList.map((item, index) => {
      return (
        <tr className={`${prefixCls}-dataBox-data-dataTr`} key={index}>
          <td className={`${prefixCls}-dataBox-data-dataTr-start`}>
            <span className={`${prefixCls}-dataBox-data-dataTr-text`}>{item.name}</span>
          </td>
          <td>{item.modelNumber}</td>
          <td>{item.modelUnit}</td>
          <td>{item.modelCount}</td>
          <td>{item.modelPrice}</td>
          <td>{item.price && Numeral(item.price).format('0,0.00')}</td>
          <td>
            {
              item.taxRate
              ? (<div>{item.taxRate}</div>)
              : (<div>&nbsp;</div>)
            }
          </td>
          <td className={`${prefixCls}-dataBox-data-dataTr-end`}>{item.billTaxValue && Numeral(item.billTaxValue).format('0,0.00')}</td>
        </tr>       
      )
    })
    return (
      <div className={`${prefixCls} ${prefixCls}-con-B`}>
          <div className={`${prefixCls}-main  ${prefixCls}-hcp`}>
            <div className={`${prefixCls}-top`}>
              <Row>
                <Col span={8}>
                  <div className={`${prefixCls}-top-left`}>
                    <div className={`${prefixCls}-top-left-box`}>
                      <span>*火车票号:</span>
                      <span className={`${prefixCls}-top-left-box-input`}>
                        <input className={`${prefixCls}-input`} value={taxConfig.billNumber || ''} disabled />
                      </span>
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className={`${prefixCls}-top-titleBoxA`}>
                    <div className={`${prefixCls}-top-titleBoxA-title`}>火车票</div>
                    <div className={`${prefixCls}-top-titleBoxA-line`}></div>
                    <div className={`${prefixCls}-top-titleBoxA-sub`}>发票联</div>
                  </div>
                </Col>
                <Col span={8}>
                </Col>
              </Row>
            </div>
            <table className={`${prefixCls}-dataBox-table`}>
              <tbody>
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-label`}>乘车人姓名</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>{taxConfig.otherMessage?.ccrxm}</span></td>
                  <td className={`${prefixCls}-dataBox-table-label`}>身份证号</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>{taxConfig.otherMessage?.sfzh}</span></td>
                </tr>
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-label`}>座位类型</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>{taxConfig.otherMessage?.zwlx}</span></td>
                  <td className={`${prefixCls}-dataBox-table-label`}>车次</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>{taxConfig.otherMessage?.cc}</span></td>
                </tr>
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-label`}>乘车日期</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>{taxConfig.otherMessage?.ccrq}</span></td>
                  <td className={`${prefixCls}-dataBox-table-label`}>乘车时间</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>{taxConfig.otherMessage?.ccsj}</span></td>
                </tr>
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-label`}>出发地</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>{taxConfig.otherMessage?.cfd}</span></td>
                  <td className={`${prefixCls}-dataBox-table-label`}>到达地</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>{taxConfig.otherMessage?.mdd}</span></td>
                </tr>
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-label`}>总金额</td>
                  <td className={`${prefixCls}-dataBox-table-content`} colSpan="3"><span>{taxConfig.otherMessage?.je}</span></td>
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


