/*
 * @Author: 周冰洁
 * @desc: 航空运输电子客票行程单 发票模板
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
                        <input className={`${prefixCls}-input`} value={taxConfig.billCode} disabled />
                      </span>
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className={`${prefixCls}-top-titleBoxA`}>
                    <div className={`${prefixCls}-top-titleBoxA-title`}>航空运输电子客票行程单</div>
                    <div className={`${prefixCls}-top-titleBoxA-line`}></div>
                    <div className={`${prefixCls}-top-titleBoxA-sub`}>发票联</div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className={`${prefixCls}-top-left`} style={{float: 'right',}}>
                    <div className={`${prefixCls}-top-left-box`}>
                      <span>*发票号码:</span>
                      <span className={`${prefixCls}-top-left-box-input`}>
                        <input className={`${prefixCls}-input`} value={taxConfig.billCode} disabled />
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <table className={`${prefixCls}-dataBox-table`}>
              <tbody>
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-label`}>乘车人姓名</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>梅梅</span></td>
                  <td className={`${prefixCls}-dataBox-table-label`}>身份证号</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>3203241989****5017</span></td>
                </tr>
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-label`}>票价</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>430</span></td>
                  <td className={`${prefixCls}-dataBox-table-label`}>民航发展基金</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>35.89</span></td>
                </tr>
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-label`}>燃油附加费</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>130</span></td>
                  <td className={`${prefixCls}-dataBox-table-label`}>其他税费</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>0</span></td>
                </tr>
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-label`}>总额</td>
                  <td className={`${prefixCls}-dataBox-table-content`} colSpan="3"><span>132</span></td>
                </tr>
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-label`}>销售单位代号</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span></span></td>
                  <td className={`${prefixCls}-dataBox-table-label`}>填开日期</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>2021-07-05</span></td>
                </tr>
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-label`}>保险费</td>
                  <td className={`${prefixCls}-dataBox-table-content`} colSpan="3"><span>0.00</span></td>
                </tr>
                {/* 航线list 开始 */}
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-subTitle`} colSpan="4">航程1</td>
                </tr>
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-label`}>航班号</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>9C8977</span></td>
                  <td className={`${prefixCls}-dataBox-table-label`}>座位等级</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>E</span></td>
                </tr>
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-label`}>承运人</td>
                  <td className={`${prefixCls}-dataBox-table-content`} colSpan="3"><span>春秋</span></td>
                </tr>
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-label`}>乘机日期</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>2021-07-25</span></td>
                  <td className={`${prefixCls}-dataBox-table-label`}>乘机时间</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>20:05</span></td>
                </tr>
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-label`}>出发站</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>上海浦东T1PVG</span></td>
                  <td className={`${prefixCls}-dataBox-table-label`}>到达站</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>大连周水子DLC</span></td>
                </tr>
                {/* 航线list 结束 */}
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


