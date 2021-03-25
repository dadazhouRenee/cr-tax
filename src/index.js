import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import ZZSZY from './zzszyfp';
import ZZSDZFP from './zzszydzfp'
import ZZSDZ from './zzsdzptfp';
import JDCXS from './jdcxstyfp';
import ZZSPT from './zzsptfp';
import GSTYJD from './GSTYJD';
import PTFPJP from './PTFPJP';
import ZZSDZTXF from './zzsdzptfptxf';
import HGJKZZS from './HGJKZZS';
import WPSR from './WPSR';
import ESCXS from './ESCXS';
import LKYS from './LKYS';
import NCP from './NCP';

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

  render () {
    const { prefixCls, taxDataList, mode, taxConfig } = this.props

    if (mode === 'ZZSZYFP') {
      return (
        <ZZSZY
          prefixCls={prefixCls}
          taxConfig={taxConfig}
          taxDataList={taxDataList}
        />
      )
    } else if (mode === 'ZZSZYDZFP') {
      return (
        <ZZSDZFP
          prefixCls={prefixCls}
          taxConfig={taxConfig}
          taxDataList={taxDataList}
        />        
      )
    } else if (mode === 'ZZSDZPTFP') {
      return (
        <ZZSDZ
          prefixCls={prefixCls}
          taxConfig={taxConfig}
          taxDataList={taxDataList}
        />        
      )
    } else if (mode === 'JDCXSTYFP') {
      return (
        <JDCXS
          prefixCls={prefixCls}
          taxConfig={taxConfig}
        />         
      )
    } else if (mode === 'ZZSPTFP') {
      return (
        <ZZSPT
          prefixCls={prefixCls}
          taxConfig={taxConfig}
          taxDataList={taxDataList}
        />         
      )
    } else if (mode === 'ZZSDZTXF') {
      return (
        <ZZSDZTXF
          prefixCls={prefixCls}
          taxConfig={taxConfig}
          taxDataList={taxDataList}
        />         
      )
    } else {
        <ZZSZY
          prefixCls={prefixCls}
          taxConfig={taxConfig}
          taxDataList={taxDataList}
        />      
    }
  }
}

Comp.propTypes = {
  prefixCls: PropTypes.string,
  taxConfig: PropTypes.object,
  taxDataList: PropTypes.arrayOf(PropTypes.object),
  mode: PropTypes.oneOf(['ZZSZYFP', 'ZZSDZPTFP', 'JDCXSTYFP', 'ZZSPTFP', 'ZZSDZTXF']),
}
Comp.defaultProps = {
  prefixCls: 'cr-tax',
  taxDataList: [{}],
  taxConfig: {},
  mode: 'ZZSZYFP',
}

export {
  GSTYJD,
  PTFPJP,
  HGJKZZS,
  WPSR,
  ESCXS,
  LKYS,
  NCP,
}
export default Comp
