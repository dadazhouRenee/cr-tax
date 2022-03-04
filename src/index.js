import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import ZZSZY from './zzszyfp';
import ZZSDZPTLKYS from './zzsdzptfplkys';
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
import HCP from './HCP';
import CZC from './CZC';
import KYQC from './KYQC';
import HKYSXCD from './HKYSXCD';
import GLF from './GLF';
import DEFP from './DEFP';

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
    } else if (mode === 'ZZSDZPTLKYS') {
      return (
        <ZZSDZPTLKYS
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
    } else if (mode === 'HCP') {
      return (
        <HCP
          prefixCls={prefixCls}
          taxConfig={taxConfig}
          taxDataList={taxDataList}
        />         
      )
    } else if (mode === 'KYQC') {
      return (
        <KYQC
          prefixCls={prefixCls}
          taxConfig={taxConfig}
          taxDataList={taxDataList}
        />         
      )
    } else if (mode === 'HKYSXCD') {
      return (
        <HKYSXCD
          prefixCls={prefixCls}
          taxConfig={taxConfig}
          taxDataList={taxDataList}
        />         
      )
    } else if (mode === 'CZC') {
      return (
        <CZC
          prefixCls={prefixCls}
          taxConfig={taxConfig}
          taxDataList={taxDataList}
        />         
      )
    } else if (mode === 'GLF') {
      return (
        <GLF
          prefixCls={prefixCls}
          taxConfig={taxConfig}
          taxDataList={taxDataList}
        />         
      )
    }  else if (mode === 'DEFP') {
      return (
        <DEFP
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
  mode: PropTypes.oneOf(['ZZSZYFP', 'ZZSDZPTFP', 'JDCXSTYFP', 'ZZSPTFP', 'ZZSDZTXF', 'HCP', 'KYQC', 'HKYSXCD', 'CZC', 'GLF', 'DEFP']),
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
  HCP,
  CZC,
  KYQC,
  HKYSXCD,
  GLF,
  DEFP,
}
export default Comp
