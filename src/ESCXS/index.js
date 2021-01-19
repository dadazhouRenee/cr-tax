import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CalendarOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import Footer from '../components/Footer';
import Numeral from '../utils/Numeral';

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { prefixCls, taxConfig={} } = this.props
    const footerConfig = {
      direction: 'in',
      ticketType: null,
      billDate: '2019年11月14日',
    }

    return (
      <div className={`${prefixCls}`}>
        <div className={`${prefixCls}-container`}>
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
                  <div className={`${prefixCls}-top-titleBox-title`}>二手车销售统一发票</div>
                  <div className={`${prefixCls}-top-titleBox-line`}></div>
                  <div className={`${prefixCls}-top-titleBox-sub`}>发票联</div>
                </div>
              </Col>
              <Col span={8}>
                <div className={`${prefixCls}-top-right`}>
                  <div className={`${prefixCls}-top-right-box`}>
                    <span>发票号码:</span>
                    <span className={`${prefixCls}-top-right-box-input`}>
                      <input className={`${prefixCls}-input`} value={taxConfig.billNumber || ''} disabled />
                    </span>
                  </div>
                  <div className={`${prefixCls}-top-right-box`}>
                    <span>发票代码:</span>
                    <span className={`${prefixCls}-top-right-box-input`}>
                      <input className={`${prefixCls}-input`} value={taxConfig.billCode || ''} disabled />
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
                        <input className={`${prefixCls}-dataBox-dataA-input ${prefixCls}-dataBox-dataA-input-disable`} value={(taxConfig.otherMessage && taxConfig.otherMessage.machineCode) || taxConfig.billNumber || ''} disabled />
                      </div>  
                      <div className={`${prefixCls}-dataBox-dataA-text`}>
                        <input className={`${prefixCls}-dataBox-dataA-input ${prefixCls}-dataBox-dataA-input-disable`} value={(taxConfig.otherMessage && taxConfig.otherMessage.machineNo) || taxConfig.billNumber || ''} disabled />
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
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      买方单位/个人
                    </td>
                    <td colSpan='3'>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={taxConfig.buyName || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleB`}>
                      单位代码/身份证号
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={taxConfig.buyTaxpayerNumber || ''} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      买方单位/个人住址
                    </td>
                    <td colSpan='3'>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={taxConfig.buyAddress || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      电话
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={taxConfig.buyTelephone || ''} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      卖方单位/个人
                    </td>
                    <td colSpan='3'>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={taxConfig.sellName || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      单位代码/身份证号
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={taxConfig.sellTaxpayerNumber || ''} disabled />
                      {/* <div className={`${prefixCls}-text`}>
                        {taxConfig.sellTaxpayerNumber || ''}
                      </div> */}
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      卖方单位/个人住址
                    </td>
                    <td colSpan='3'>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={taxConfig.sellAddress || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      电话
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={taxConfig.sellTelephone || ''} disabled />
                      {/* <div className={`${prefixCls}-text`}>
                        { taxConfig.sellTelephone || ''}
                      </div> */}
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      车牌照号
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-two`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.carNumber) || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-three ${prefixCls}-dataBox-dataB-titleC`}>
                      登记证号
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-four`}>
                      <div className={`${prefixCls}-text`}>
                        {(taxConfig.otherMessage && taxConfig.otherMessage.registrationNumber) || ''}
                      </div>
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      车辆类型
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.catType) || ''} disabled />
                    </td>
                  </tr> 
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      车架号/车辆识别代码
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-two`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.vin) || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-three ${prefixCls}-dataBox-dataB-titleC`}>
                      厂牌型号
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-four`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.brandAndModelNo) || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      转入地车辆管理所名称
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.shiftToVehicleName) || ''} disabled />
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
                      <input className={`${prefixCls}-dataBox-dataA-input`} 
                        value={`¥${taxConfig.billTaxPrice && Numeral(taxConfig.billTaxPrice).format('0,0.00')}`} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      经营、拍卖单位
                    </td>
                    <td colSpan='5' className={`${prefixCls}-dataBox-dataB-td-two`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} 
                        value={(taxConfig.otherMessage && taxConfig.otherMessage.manageName) || ''} disabled />
                    </td>
                  </tr> 
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      经营、拍卖单位地址
                    </td>
                    <td colSpan='3'>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.manageAddress) || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      纳税人识别号
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.manageTaxpayerNumber) || ''} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      开户银行、账号
                    </td>
                    <td colSpan='3'>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.manageBankAddrAndAccount) || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      电话
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.manageTelephone) || ''} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan='2' className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      二手车市场
                    </td>
                    <td colSpan='3' rowSpan='2'>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.usedCarName) || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      纳税人识别号
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.usedCarTaxpayerNumber) || ''} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      地址
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.usedCarAddress) || ''} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      开户银行、账号
                    </td>
                    <td colSpan='3'>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.usedCarBankAddrAndAccount) || ''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      电话
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={(taxConfig.otherMessage && taxConfig.otherMessage.usedCarTelephone) || ''} disabled />
                    </td>
                  </tr>                                
                </tbody>
              </table>
            </div>
          </div>
          <Footer footerConfig={taxConfig} />    
        </div>
      </div>
    );
  }
}

App.propTypes = {
  prefixCls: PropTypes.string,
}

App.defaultProps = {
  prefixCls: 'tax-escxs'
}

export default App
