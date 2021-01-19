import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    
    const { prefixCls, taxList=[], taxConfig={} } = this.props

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
                        发票代码：
                      </span>
                      <span className={`${prefixCls}-header-cell-span`}>
                        <input value={'000'} disabled className={`${prefixCls}-header-cell-input`} />
                      </span>
                    </div>                      
                  </div>
                </Col>
                <Col span={8}>
                  <div className={`${prefixCls}-header-middle`}>
                    <div className={`${prefixCls}-header-middle-title`}>
                      无票收入
                    </div>
                    <div className={`${prefixCls}-header-middle-line`}></div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className={`${prefixCls}-header-right`}>
                    <div className={`${prefixCls}-header-cell`}>
                      <span className={`${prefixCls}-header-cell-title`}>
                        编号：
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
                    <td className={`${prefixCls}-tableA-FKDW`}>付款单位</td>
                    <td className={`${prefixCls}-tableA-FKDWIN`}>
                      <input value='123' disabled className={`${prefixCls}-tableBox-input`} />
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className={`${prefixCls}-table ${prefixCls}-tableC`}>
                <thead>
                  <tr>
                    <th className={`${prefixCls}-tableC-XM ${prefixCls}-tableC-trFirst`}>项目/品名</th>
                    <th className={`${prefixCls}-tableC-GG`}>规格</th>
                    <th className={`${prefixCls}-tableC-DW`}>单位</th>
                    <th className={`${prefixCls}-tableC-SL1`}>数量</th>
                    <th className={`${prefixCls}-tableC-JE`}>金额</th>
                    <th className={`${prefixCls}-tableC-SL2`}>税率</th>
                    <th className={`${prefixCls}-tableC-trLast`}>税额</th>
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
                      <div className={`${prefixCls}-tableB-XXJE-text`}>小写金额</div>
                    </td>
                    <td>
                      <input value='123' disabled className={`${prefixCls}-tableBox-input`} />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-tableB-DXJE`}>
                      <div className={`${prefixCls}-tableB-DXJE-text`}>收款单位</div>
                    </td>
                    <td>
                      <input value='123' disabled className={`${prefixCls}-tableBox-input`} />
                    </td>
                    <td className={`${prefixCls}-tableB-XXJE`}>
                      <div className={`${prefixCls}-tableB-XXJE-text`}>收款单位税号</div>
                    </td>
                    <td>
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
        </div>
      </div>
    )
  }
}

App.propTypes = {
  prefixCls: PropTypes.string,
}

App.defaultProps = {
  prefixCls: 'tax-wpsr'
}

export default App

