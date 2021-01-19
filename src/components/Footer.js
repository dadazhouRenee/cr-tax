import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CalendarOutlined } from '@ant-design/icons';
import { Radio } from 'antd';

class Footer extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { prefixCls, footerConfig } = this.props

    return (
      <div className={`${prefixCls}-footer`}>
        {
          footerConfig.direction === 0
            ? (
              <div>
                <span>认证状态:</span>
                <span style={{ marginLeft: 8 }}>
                  <Radio.Group value={Number(footerConfig.statusOfCertification) || 0} onChange={this.radioChange}>
                    <Radio value={0} disabled>已认证</Radio>
                    <Radio value={1} style={{ marginLeft: 0 }} disabled>未认证</Radio>
                  </Radio.Group>
                </span>
                <span className={`${prefixCls}-footer-ticketDate`}>
                  <span>认证日期:</span>
                  <span className={`${prefixCls}-top-right-box-input`}>
                    <input className={`${prefixCls}-input ${prefixCls}-footer-input`} value={footerConfig.dateOfCertificationDate || ''} disabled />
                    <CalendarOutlined className={`${prefixCls}-top-right-box-calender`} />
                  </span>                  
                </span>
              </div>
            )
            : (
              <div>
                <span>开票类型:</span>
                <span style={{ marginLeft: 8 }}>
                  <Radio.Group value={Number(footerConfig.makeType) || 0} onChange={this.radioChange}>
                    <Radio value={1} disabled>代开发票</Radio>
                    <Radio value={0} style={{ marginLeft: 0 }} disabled>自开发票</Radio>
                  </Radio.Group>
                </span>                
              </div>
            )
        }
        {
          footerConfig.right &&
          (
            <div className={`${prefixCls}-footer-inline ${prefixCls}-footer-right`}>
              <span>业务类型:</span>
              <span style={{ marginLeft: 8 }}>
                <Radio.Group value={footerConfig.ticketType}>
                  <Radio value={1} disabled>非生加工</Radio>
                  <Radio value={2} disabled>原材料</Radio>
                  <Radio value={3} disabled>委托加工物资</Radio>
                </Radio.Group>
              </span>  
            </div>
          )
        }
      </div>
    );
  }
}

Footer.propTypes = {
  prefixCls: PropTypes.string,
}

Footer.defaultProps = {
  prefixCls: 'cr-tax',
}

export default Footer
