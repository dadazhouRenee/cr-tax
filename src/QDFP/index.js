import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Row, Col, Select } from 'antd';
import Numeral from '../utils/Numeral';
import { Scrollbars } from 'react-custom-scrollbars';

const { Option } = Select;

const invoceiTitleMenu = {
  QDZZS: '电子发票（增值税专用发票）',
  QDPP: '电子发票（普通发票）'
}

class Comp extends PureComponent {

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

  getTaxRate = (val) => {
    if (val === 0) {
      return '0'
    }
    return val
  }

  render () {
    const { prefixCls, taxDataList=[], taxConfig={}, mode = '' } = this.props
    const dataTr = taxDataList.map((item, index) => {
      return (
        <tr className={`${prefixCls}-dataBox-data-dataTr`} key={index}>
          <td className={`${prefixCls}-dataBox-data-dataTr-start`}>
            <span className={`${prefixCls}-dataBox-data-dataTr-text`}>{item.name}</span>
          </td>
          <td>{item.modelNumber}</td>
          <td>{item.modelUnit}</td>
          <td>{item.modelCount}</td>
          <td>{item.modelPrice && Numeral(item.modelPrice).format('0,0.00')}</td>
          <td>{item.billPrice && Numeral(item.billPrice).format('0,0.00')}</td>
          <td>
          {
              this.getTaxRate(item.taxRate)
              ? (<div>{item.taxRate * 100}%</div>)
              : (<div>&nbsp;</div>)
            }
          </td>
          <td className={`${prefixCls}-dataBox-data-dataTr-end`}>{item.billTaxValue && Numeral(item.billTaxValue).format('0,0.00')}</td>
        </tr>       
      )
    })
    return (
      <div className={`${prefixCls} ${prefixCls}-con ${prefixCls}-qd-con`}>
        <Scrollbars style={{height: 675}}>
          <div className={`${prefixCls}-main`}>
            <div className={`${prefixCls}-top`}>
              <Row>
                <Col span={8}>
                </Col>
                <Col span={8}>
                  <div className={`${prefixCls}-top-titleBox`}>
                    <div className={`${prefixCls}-top-titleBox-title`}>{invoceiTitleMenu[mode] || ''}</div>
                    <div className={`${prefixCls}-top-titleBox-line`}></div>
                    <div className={`${prefixCls}-top-titleBox-sub`}>发票联</div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className={`${prefixCls}-top-right`}>
                    <div className={`${prefixCls}-top-right-box`}>
                      <span>发票号码:</span>
                      <span className={`${prefixCls}-top-right-box-input`}>
                        <input style={{minWidth: '170px'}} className={`${prefixCls}-input`} value={taxConfig.billNumber || ''} disabled />
                      </span>
                    </div>
                    <div className={`${prefixCls}-top-right-box`}>
                      <span>开票日期:</span>
                      <span className={`${prefixCls}-top-right-box-input`}>
                        <input style={{minWidth: '170px'}} className={`${prefixCls}-input`} value={taxConfig.billDate || ''} disabled />
                      </span>
                    </div>               
                  </div>
                </Col>
              </Row>
            </div>
            <div className={`${prefixCls}-dataBox`}>
              <div className={`${prefixCls}-dataBox-purchaser`}>
                <table className={`${prefixCls}-dataBox-table`}>
                  <tbody>
                    <tr>
                      <td rowSpan="2" width="36px" className={`${prefixCls}-dataBox-table-cellBox-label`}>购买方信息</td>
                      <td width="154px">
                        <div className={`${prefixCls}-dataBox-table-cellBox`}>
                          <span className={`${prefixCls}-dataBox-table-cellBox-label ${prefixCls}-has-colon`}>名称</span>
                        </div>
                      </td>
                      <td width="350px">
                        <div className={`${prefixCls}-dataBox-table-cellBox`}>
                          <span className={`${prefixCls}-dataBox-table-cellBox-conetnt`}>{taxConfig.buyName || ''}</span>
                        </div>
                      </td>
                      <td rowSpan="2" width="36px" className={`${prefixCls}-dataBox-table-cellBox-label`}>销售方信息</td>
                      <td width="154px">
                        <div className={`${prefixCls}-dataBox-table-cellBox`}>
                          <span className={`${prefixCls}-dataBox-table-cellBox-label ${prefixCls}-has-colon`}>名称</span>
                        </div>
                      </td>
                      <td width="350px">
                        <div className={`${prefixCls}-dataBox-table-cellBox`}>
                          <span className={`${prefixCls}-dataBox-table-cellBox-conetnt`}>{taxConfig.sellName || ''}</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td width="154px">
                        <div className={`${prefixCls}-dataBox-table-cellBox`}>
                          <span className={`${prefixCls}-dataBox-table-cellBox-label ${prefixCls}-has-colon`}>统一社会信用代码/
                          纳税人识别号</span>
                        </div>
                      </td>
                      <td width="350px">
                        <div className={`${prefixCls}-dataBox-table-cellBox`}>
                          <span className={`${prefixCls}-dataBox-table-cellBox-conetnt`}>{taxConfig.buyTaxpayerNumber || ''}</span>
                        </div>
                      </td>
                      <td width="154px">
                        <div className={`${prefixCls}-dataBox-table-cellBox`}>
                          <span className={`${prefixCls}-dataBox-table-cellBox-label ${prefixCls}-has-colon`}>统一社会信用代码/
                          纳税人识别号</span>
                        </div>
                      </td>
                      <td width="350px">
                        <div className={`${prefixCls}-dataBox-table-cellBox`}>
                          <span className={`${prefixCls}-dataBox-table-cellBox-conetnt`}>{taxConfig.sellTaxpayerNumber || ''}</span>
                        </div>
                      </td>
                    </tr>  
                  </tbody>           
                </table>
              </div>
              <div className={`${prefixCls}-dataBox-data ${prefixCls}-dataBox-interval`}>
                <table className={`${prefixCls}-dataBox-table ${prefixCls}-dataBox-data-innerTable`}>
                  <thead>
                    <tr className={`${prefixCls}-dataBox-data-tr`}>
                      <th className={`${prefixCls}-dataBox-data-HW ${prefixCls}-dataBox-data-tr-start`} width="248px">项目名称</th>
                      <th className={`${prefixCls}-dataBox-data-GG`} width="142px">规格型号</th>
                      <th className={`${prefixCls}-dataBox-data-DW`} width="72px">单位</th>
                      <th className={`${prefixCls}-dataBox-data-SL`} width="100px">数量</th>
                      <th className={`${prefixCls}-dataBox-data-DJ`} width="110px">单价</th>
                      <th className={`${prefixCls}-dataBox-data-JE`} width="120px">金额</th>
                      <th className={`${prefixCls}-dataBox-data-SHL`} width="100px">税率/征收率</th>
                      <th className={`${prefixCls}-dataBox-data-SHL ${prefixCls}-dataBox-data-tr-end`} width="140px">税额</th>
                    </tr>
                  </thead>
                  <tbody>
                    { dataTr }
                    <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                      <td className={`${prefixCls}-dataBox-center ${prefixCls}-dataBox-data-dataTr-start`}>
                        <span className={`${prefixCls}-dataBox-table-cellBox-label`}>合计</span>
                      </td>
                      <td colSpan={4} align="right" className={`${prefixCls}-no-border-right`}>
                        {taxConfig.hjje || ''}
                      </td>
                      <td colSpan={3} className={`${prefixCls}-dataBox-data-dataTr-end ${prefixCls}-no-border-left`} align="right">
                        {taxConfig.hjse || ''}
                      </td>
                    </tr>
                    <tr className={`${prefixCls}-dataBox-data-dataTr`}>
                      <td className={`${prefixCls}-dataBox-center ${prefixCls}-dataBox-data-dataTr-start`}>
                        <span className={`${prefixCls}-dataBox-table-cellBox-label`}>价税合计（大写）</span>
                      </td>
                      <td colSpan={5} align="right" className={`${prefixCls}-no-border-right`}>
                        {taxConfig.billTaxPriceUpper || ''}
                      </td>
                      <td colSpan={3} className={`${prefixCls}-dataBox-data-dataTr-end ${prefixCls}-no-border-left`} align="left">
                        <span className={`${prefixCls}-dataBox-table-cellBox-label`}>（小写）¥ </span>
                        {taxConfig.billTaxPrice && Numeral(taxConfig.billTaxPrice).format('0,0.00')}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={`${prefixCls}-dataBox-seller`}>
                <table className={`${prefixCls}-dataBox-table ${prefixCls}-dataBox-interval`}>
                  <tbody>
                    <tr>
                      <td width="36px" className={`${prefixCls}-dataBox-table-cellBox-label`} style={{height: '120px', display: 'table-cell', verticalAlign: 'middle'}}>备注</td>
                      <td className={`${prefixCls}-dataBox-table-BZ`} align="top">
                        <span style={{color: '#3E7AFA'}}>{taxConfig.remark || ''}</span>
                      </td>
                    </tr> 
                  </tbody>             
                </table>             
              </div>
            </div>
          </div>
        </Scrollbars>
      </div>
    );
  }
}


Comp.propTypes = {
  prefixCls: PropTypes.string,
}

Comp.defaultProps = {
  prefixCls: 'cr-tax'
}

export default Comp
