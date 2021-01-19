import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import Footer from '../components/Footer';


class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { prefixCls, taxList=[], taxConfig={} } = this.props
    const footerConfig = {
      direction: 'in',
      ticketType: null,
      billDate: '2019年11月14日',
    }
    const dataTr = taxList.map((item, index) => {
      return (
        <tr key={index}>
          <td className={`${prefixCls}-tableC-trFirst`}>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td className={`${prefixCls}-tableC-trLast`}>0</td>
        </tr>
      )
    })

    return (
      <div className={`${prefixCls}`}>
        <div className={`${prefixCls}-container`}>
          <div className={`${prefixCls}-main`}>
            <div className={`${prefixCls}-header`}>
              <Row>
                <Col span={8}>
                  <div className={`${prefixCls}-header-left`}>
                    <div className={`${prefixCls}-header-cell`}>
                      <span className={`${prefixCls}-header-cell-title`}>
                        收入系统：
                      </span>
                      <span className={`${prefixCls}-header-cell-span`}>
                        <input value={''} disabled className={`${prefixCls}-header-cell-input`} />
                      </span>
                    </div>                 
                  </div>
                </Col>
                <Col span={8}>
                  <div className={`${prefixCls}-header-middle`}>
                    <div className={`${prefixCls}-header-middle-title`}>
                      海关进口增值税专用缴款书
                    </div>
                    <div className={`${prefixCls}-header-middle-line`}></div>
                    <div className={`${prefixCls}-header-middle-box`}>
                      <div className={`${prefixCls}-header-cell`}>
                        <span className={`${prefixCls}-header-cell-title`}>
                          填发日期：
                        </span>
                        <span className={`${prefixCls}-header-cell-span`}>
                          <input value={''} disabled className={`${prefixCls}-header-cell-input`} />
                        </span>
                      </div>                    
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className={`${prefixCls}-header-right`}>
                    <div className={`${prefixCls}-header-cell`}>
                      <span className={`${prefixCls}-header-cell-title`}>
                        号码：
                      </span>
                      <span className={`${prefixCls}-header-cell-span`}>
                        <input value={''} disabled className={`${prefixCls}-header-cell-input`} />
                      </span>
                    </div>                     
                  </div>
                </Col>
              </Row>
            </div>
            <div className={`${prefixCls}-tableBox`}>
              <table className={`${prefixCls}-table ${prefixCls}-tableA`}>
                <tbody>
                  <tr>
                    <td rowSpan='3' className={`${prefixCls}-tableA-SKDW`}>
                      <div className={`${prefixCls}-tableA-SKDW-text`}>收款单位</div>
                    </td>
                    <td className={`${prefixCls}-tableA-SRJG`}>
                      <div className={`${prefixCls}-tableA-SRJG-text`}>收入机关</div>
                    </td>
                    <td colSpan='3' className={`${prefixCls}-tableA-SRJGIN`}>
                      <input value='123' disabled className={`${prefixCls}-tableBox-input`} />
                    </td>
                    <td rowSpan='3' className={`${prefixCls}-tableA-SKDW`}>
                      <div className={`${prefixCls}-tableA-SKDW-text`}>收款单位(人)</div>
                    </td>
                    <td className={`${prefixCls}-tableA-SRJG`}>
                      <div className={`${prefixCls}-tableA-SRJG-text`}>机器编码</div>
                    </td>
                    <td className={`${prefixCls}-tableA-JQBMIN`}>
                    <input value='123' disabled className={`${prefixCls}-tableBox-input`} />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-tableA-SRJG`}>
                      <div className={`${prefixCls}-tableA-SRJG-text`}>科目</div>
                    </td>
                    <td className={`${prefixCls}-tableA-KMIN`}>
                      <input value='123' disabled className={`${prefixCls}-tableBox-input`} />
                    </td>
                    <td className={`${prefixCls}-tableA-YSJC`}>预算级次</td>
                    <td><input value='123' disabled className={`${prefixCls}-tableBox-input`} /></td>
                    <td className={`${prefixCls}-tableA-SRJG`}>
                      <div className={`${prefixCls}-tableA-SRJG-text`}>税控码</div>
                    </td>
                    <td>
                      <input value='123' disabled className={`${prefixCls}-tableBox-input`} />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-tableA-SRJG`}>
                      <div className={`${prefixCls}-tableA-SRJG-text`}>收款国库</div>
                    </td>
                    <td colSpan='3'>
                      <input value='123' disabled className={`${prefixCls}-tableBox-input`} />
                    </td>
                    <td className={`${prefixCls}-tableA-SRJG`}>
                      <div className={`${prefixCls}-tableA-SRJG-text`}>开户银行</div>
                    </td>
                    <td>
                      <input value='123' disabled className={`${prefixCls}-tableBox-input`} />
                    </td>
                  </tr>                  
                </tbody>
              </table>
              <table className={`${prefixCls}-table ${prefixCls}-tableC`}>
                <thead>
                  <tr>
                    <th className={`${prefixCls}-tableC-SH ${prefixCls}-tableC-trFirst`}>税号</th>
                    <th className={`${prefixCls}-tableC-HWMC`}>货物名称</th>
                    <th className={`${prefixCls}-tableC-SL1`}>数量</th>
                    <th className={`${prefixCls}-tableC-DW`}>单位</th>
                    <th className={`${prefixCls}-tableC-WSJG`}>完税价格</th>
                    <th className={`${prefixCls}-tableC-SL2`}>税率(%)</th>
                    <th className={`${prefixCls}-tableC-SLJE ${prefixCls}-tableC-trLast`}>税款金额</th>
                  </tr>                  
                </thead>
                <tbody>
                  {dataTr}
                </tbody>
              </table>
              <table className={`${prefixCls}-table ${prefixCls}-tableB`}>
                <tbody>
                  <tr>
                    <td className={`${prefixCls}-tableB-DXJE`}>
                      <div className={`${prefixCls}-tableB-DXJE-text`}>大写金额</div>
                    </td>
                    <td className={`${prefixCls}-tableB-DXJEIN`}>
                      <input value='123' disabled className={`${prefixCls}-tableBox-input`} />
                    </td>
                    <td className={`${prefixCls}-tableB-XXJE`}>
                      小写金额
                    </td>
                    <td className={`${prefixCls}-tableB-XXJEIN`}>
                      <input value='123' disabled className={`${prefixCls}-tableBox-input`} />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-tableB-DXJE`}>
                      <div className={`${prefixCls}-tableB-DXJE-text`}>备注</div>
                    </td>
                    <td colSpan='3'>
                      <input value='123' disabled className={`${prefixCls}-tableBox-input`} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <Footer footerConfig={footerConfig} />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  prefixCls: PropTypes.string,
}

App.defaultProps = {
  prefixCls: 'tax-hgjkzzs'
}

export default App
