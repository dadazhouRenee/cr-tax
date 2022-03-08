import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OuiDom from './utils/ouiDomUtils';
import { CalendarOutlined } from '@ant-design/icons';
import { Row, Col, Select, Radio } from 'antd';
import Numeral from './utils/Numeral';

const { Option } = Select;

class Comp extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      ticketType: null,
    }
  }

  radioChange = e => {
    this.setState({
      ticketType: e.target.value,
    })
  }

  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('component up date', prevState)
  }

  render () {
    const { prefixCls, taxConfig={} } = this.props
    return (
      <div className={`${prefixCls} ${prefixCls}-con-C`}>
        <div className={`${prefixCls}-main`}>
          <div className={`${prefixCls}-top`}>
            <Row>
              <Col span={8}>
                <div className={`${prefixCls}-top-left`}>
                  <div className={`${prefixCls}-top-left-box`}>
                    <span>开票日期:</span>
                    <span className={`${prefixCls}-top-left-box-input`}>
                      <input className={`${prefixCls}-input`} value={taxConfig.billDate || ''} disabled />
                      <CalendarOutlined className={`${prefixCls}-top-right-box-calender`} />
                    </span>
                  </div>
                </div>
              </Col>
              <Col span={8}>
                <div className={`${prefixCls}-top-titleBox`}>
                  <div className={`${prefixCls}-top-titleBox-title`}>机动车销售统一发票</div>
                  <div className={`${prefixCls}-top-titleBox-line`}></div>
                  <div className={`${prefixCls}-top-titleBox-sub`}>发票联</div>
                </div>
              </Col>
              <Col span={8}>
                <div className={`${prefixCls}-top-right`}>
                  <div className={`${prefixCls}-top-right-box`}>
                    <span>发票代码:</span>
                    <span className={`${prefixCls}-top-right-box-input`}>
                      <input className={`${prefixCls}-input`} value={taxConfig.billCode || ''} disabled />
                    </span>
                  </div>
                  <div className={`${prefixCls}-top-right-box`}>
                    <span>发票号码:</span>
                    <span className={`${prefixCls}-top-right-box-input`}>
                      <input className={`${prefixCls}-input`} value={taxConfig.billNumber || ''} disabled />
                    </span>
                  </div>               
                </div>
              </Col>
            </Row>
          </div>
          <div className={`${prefixCls}-dataBox`}>
            <div className={`${prefixCls}-dataBox-dataA`}>
              <table className={`${prefixCls}-dataBox-table`}>
                <tbody>
                  <tr>
                    <td className={`${prefixCls}-dataBox-table-titleB`}>
                      <div className={`${prefixCls}-dataBox-dataA-title`}>机打代码</div>
                      <div className={`${prefixCls}-dataBox-dataA-title`}>机打号码</div>
                      <div className={`${prefixCls}-dataBox-dataA-title ${prefixCls}-dataBox-dataA-title-last`}>机器编号</div>
                    </td>
                    <td>
                      <div className={`${prefixCls}-dataBox-dataA-text`}>
                        <input className={`${prefixCls}-dataBox-dataA-input ${prefixCls}-dataBox-dataA-input-disable`} value={( taxConfig.otherMessage && taxConfig.otherMessage.machineCode) || ''} disabled />
                      </div>  
                      <div className={`${prefixCls}-dataBox-dataA-text`}>
                        <input className={`${prefixCls}-dataBox-dataA-input ${prefixCls}-dataBox-dataA-input-disable`} value={taxConfig.billNumber || ''} disabled />
                      </div>  
                      <div className={`${prefixCls}-dataBox-dataA-text ${prefixCls}-dataBox-dataA-text-last`}>
                        <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.machineNumber) || ''} disabled />
                      </div>                                                                                                    
                    </td>
                    <td className={`${prefixCls}-dataBox-table-title`}>税控码</td>
                    <td className={`${prefixCls}-dataBox-table-blank`}>
                      <div className={`${prefixCls}-text`}>
                        {(taxConfig.otherMessage && taxConfig.otherMessage.fiscalCode) || ''}
                      </div>
                    </td>
                  </tr>   
                </tbody>           
              </table>
            </div>
            <div className={`${prefixCls}-dataBox-dataB ${prefixCls}-dataBox-interval`}>
              <table className={`${prefixCls}-dataBox-table`}>
                <tbody>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleA`}>
                      购买方名称及身份证号码/组织机构代码
                    </td>
                    <td colSpan='3'>
                      {/* <input className={`${prefixCls}-dataBox-dataA-input`} value={taxConfig.buyName || ''} disabled /> */}
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.gfmcAndSfzhm) || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleB`}>
                      纳税人识别号
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={taxConfig.buyTaxpayerNumber || ''} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      车辆类型
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-two`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.catType) || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-three ${prefixCls}-dataBox-dataB-titleC`}>
                      厂牌型号
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-four`}>
                      {/* <div className={`${prefixCls}-text`}>
                        {(taxConfig.otherMessage && taxConfig.otherMessage.brandAndModelNo) || ''}
                      </div> */}
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.brandAndModelNo) || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      产地
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.countryOfManufacturing) || ''} disabled />
                    </td>
                  </tr> 
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      合格证号
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-two`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.certificateOfQualityApproval) || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-three ${prefixCls}-dataBox-dataB-titleC`}>
                      进口证明书号
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-four`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.importCertificateNo) || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      商检单号
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.commodityInspectionCertificateNo) || ''} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      发动机号码
                    </td>
                    <td colSpan='3'>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.engineNo) || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      车牌识别号/车架号码
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.vin) || ''} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      价税合计（大写）
                    </td>
                    <td colSpan='3'>
                      <input className={`${prefixCls}-dataBox-dataA-input ${prefixCls}-dataBox-dataA-input-disable`} value={taxConfig.billTaxPriceUpper || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      小写
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input ${prefixCls}-dataBox-dataA-input-disable`} 
                        // value={taxConfig.billTaxPriceLower && Numeral(taxConfig.billTaxPriceLower).format()} disabled />
                        value={`¥${taxConfig.billTaxPrice && Numeral(taxConfig.billTaxPrice).format('0,0.00')}`} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      销货单位名称
                    </td>
                    <td colSpan='3'>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={taxConfig.sellName || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      电话
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={taxConfig.sellTelephone || ''} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      纳税人识别号
                    </td>
                    <td colSpan='3'>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={taxConfig.sellTaxpayerNumber || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      账号
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      {/* <div className={`${prefixCls}-text`}>
                        {taxConfig.sellBank || ''}
                      </div> */}
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={taxConfig.sellBank || ''} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      地址
                    </td>
                    <td colSpan='3'>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={taxConfig.sellAddress || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      开户银行
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={taxConfig.sellBankAddress || ''} disabled />
                      {/* <div className={`${prefixCls}-text`}>
                        {taxConfig.sellBankAddress || ''}
                      </div> */}
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      增值税税率或征收率
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-two`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && `${taxConfig.otherMessage.taxRateOrCharge * 100}%`) || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-three ${prefixCls}-dataBox-dataB-titleC`}>
                      增值税税额
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-four`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} 
                      // value={taxConfig.billTaxValue && Numeral(taxConfig.billTaxValue).format()} disabled />
                      value={`¥${taxConfig.otherMessage && Numeral(taxConfig.otherMessage.billTaxValue).format('0,0.00')}`} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      主管税务机关及代码
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      {/* <div className={`${prefixCls}-text`}>
                        {(taxConfig.otherMessage && taxConfig.otherMessage.taxAuthoritiesInChargeCode) || ''}
                      </div> */}
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.taxAuthoritiesInChargeCode) || ''} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      不含税价
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-two`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} 
                        // value={taxConfig.billNoTaxValue && Numeral(taxConfig.billNoTaxValue).format()} disabled />
                        value={`¥${taxConfig.otherMessage && Numeral(taxConfig.otherMessage.billNoTaxValue).format('0,0.00')}`} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-three ${prefixCls}-dataBox-dataB-titleC`}>
                      完税凭证号码
                    </td>
                    <td colSpan='2'>
                      <div className={`${prefixCls}-dataBox-dataB-cell ${prefixCls}-dataBox-dataB-cellA`}>
                        <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.certificateOfTaxPaymentNo) || ''} disabled />
                      </div>
                      <div className={`${prefixCls}-dataBox-dataB-cell ${prefixCls}-dataBox-dataB-cellB`}>吨位</div>
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <div className={`${prefixCls}-dataBox-dataB-cell ${prefixCls}-dataBox-dataB-cellC ${prefixCls}-dataBox-dataB-cellC-border`}>
                        <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.tonnage) || ''} disabled />
                      </div>
                      <div className={`${prefixCls}-dataBox-dataB-cell ${prefixCls}-dataBox-dataB-cellC ${prefixCls}-dataBox-dataB-cellC-border`}>限乘人数</div>
                      <div className={`${prefixCls}-dataBox-dataB-cell ${prefixCls}-dataBox-dataB-cellC`}>
                        <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.maximumCapacity) || ''} disabled />
                      </div>
                    </td>
                  </tr>                                   
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comp
