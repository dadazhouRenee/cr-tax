/*
 * @Author: 周冰洁
 * @desc: 航空运输电子客票行程单 发票模板
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
        <Scrollbars style={{height: 657}}>
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
                  <td className={`${prefixCls}-dataBox-table-label`}>乘车人姓名</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>{taxConfig.otherMessage?.ccrxm}</span></td>
                  <td className={`${prefixCls}-dataBox-table-label`}>身份证号</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>{taxConfig.otherMessage?.sfzh}</span></td>
                </tr>
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-label`}>票价</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>{taxConfig.otherMessage?.pj}</span></td>
                  <td className={`${prefixCls}-dataBox-table-label`}>民航发展基金</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>{taxConfig.otherMessage?.mhfzjj}</span></td>
                </tr>
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-label`}>燃油附加费</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>{taxConfig.otherMessage?.ryfjf}</span></td>
                  <td className={`${prefixCls}-dataBox-table-label`}>其他税费</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>{taxConfig.otherMessage?.qtsf}</span></td>
                </tr>
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-label`}>总额</td>
                  <td className={`${prefixCls}-dataBox-table-content`} colSpan="3"><span>{taxConfig.otherMessage?.ze}</span></td>
                </tr>
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-label`}>销售单位代号</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>{taxConfig.otherMessage?.xsdwdh}</span></td>
                  <td className={`${prefixCls}-dataBox-table-label`}>填开日期</td>
                  <td className={`${prefixCls}-dataBox-table-content`}><span>{taxConfig.otherMessage?.tkrq}</span></td>
                </tr>
                <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                  <td className={`${prefixCls}-dataBox-table-label`}>保险费</td>
                  <td className={`${prefixCls}-dataBox-table-content`} colSpan="3"><span>{taxConfig.otherMessage?.bxf}</span></td>
                </tr>
                {/* 航线list 开始 */}
                {
                  taxConfig.otherMessage?.hc && taxConfig.otherMessage.hc.length ?
                  taxConfig.otherMessage.hc.map((hcItem, hcIndex) => <Fragment key={hcItem.hbh || hcIndex}>
                    <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                      <td className={`${prefixCls}-dataBox-table-subTitle`} colSpan="4">航程{hcIndex + 1}</td>
                    </tr>
                    <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                      <td className={`${prefixCls}-dataBox-table-label`}>航班号</td>
                      <td className={`${prefixCls}-dataBox-table-content`}><span>{hcItem.hbh}</span></td>
                      <td className={`${prefixCls}-dataBox-table-label`}>座位等级</td>
                      <td className={`${prefixCls}-dataBox-table-content`}><span>{hcItem.zwdj}</span></td>
                    </tr>
                    <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                      <td className={`${prefixCls}-dataBox-table-label`}>承运人</td>
                      <td className={`${prefixCls}-dataBox-table-content`} colSpan="3"><span>{hcItem.cyr}</span></td>
                    </tr>
                    <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                      <td className={`${prefixCls}-dataBox-table-label`}>乘机日期</td>
                      <td className={`${prefixCls}-dataBox-table-content`}><span>{hcItem.cjrq}</span></td>
                      <td className={`${prefixCls}-dataBox-table-label`}>乘机时间</td>
                      <td className={`${prefixCls}-dataBox-table-content`}><span>{hcItem.cjsj}</span></td>
                    </tr>
                    <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                      <td className={`${prefixCls}-dataBox-table-label`}>出发站</td>
                      <td className={`${prefixCls}-dataBox-table-content`}><span>{hcItem.cfz}</span></td>
                      <td className={`${prefixCls}-dataBox-table-label`}>到达站</td>
                      <td className={`${prefixCls}-dataBox-table-content`}><span>{hcItem.ddz}</span></td>
                    </tr>
                  </Fragment>)
                  : null
                }
                {/* 航线list 结束 */}
              </tbody>
            </table>
          </div>
        </Scrollbars>
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


