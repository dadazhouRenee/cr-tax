import React from 'react';
import ReactDOM from 'react-dom';
import Testone from 'rs-tax-test2';
import '../src/utils/antd.css';
import '../assets/index.less';
import { GSTYJD, PTFPJP, HGJKZZS, WPSR, ESCXS, LKYS, NCP, HCP, KYQC, HKYSXCD, CZC } from 'rs-tax-test2';

// import Testone from 'cr-tax';
// import { GSTYJD, PTFPJP, HGJKZZS, WPSR, ESCXS, LKYS, NCP } from 'cr-tax';

const reactContainer = document.getElementById('__react-content');
const bodyContainer = document.getElementsByTagName('body')
bodyContainer[0].style.padding = '10px'
reactContainer.style.cssText = `
                                // border: 1px solid #11d0bc;
                                // padding: 10px;
                                // margin-bottom: 10px;
                              `
const boxStyle = {
  // width: 1150,
  // height: 'auto',
  // margin: '0 auto',
  // border: '1px solid green',
}

const taxHeader = {
  number: '2897454',
  code: '4646456',
  date: '20190911',
}
const taxPurchase = {
  name: '南京智慧科技有限公司',
  taxNumber: '142704654502922440',
  addressPhone: '南京南路 123456',
  bank: '',
}
const taxSales = {
  totalB: '贰仟零壹拾叁元柒角陆分',
  totalS: '2013.76',
  name: '衡水华业工业有限公司',
  taxNumber: '789754654444464',
  addressPhone: '运城市运万路幸福庄0350-7878505',
  bank: '农行运城北城支行56600104454502242',
  remark: '',
}
const taxSalesB = {
  totalB: '贰仟零壹拾叁元柒角陆分',
  totalS: '2013.76',
  name: '衡水华业工业有限公司',
  taxNumber: '789754654444464',
  addressPhone: '运城市运万路幸福庄0350-44520505',
  bank: '农行运城北城支行56600104545002242',
  remark: '',
}
const taxDataList = [{
  name: '*钢件*电池运城市运万路幸福庄0350-44520505',
  billNumber: 'ER602EGK6001',
  modelUnit: '个',
  modelCount: '3',
  modelPrice: '3000',
  price: '56125489',
  taxRate: 0.17,
  billTaxValue: '435435.16',
}, {}, {}]

const taxDataListB = [{
  name: '*钢件*电池运城市运万路幸福庄0350-44520505',
  modelNumber: 'ER602EGK6001',
  modelUnit: '个',
  modelCount: '20180108',
  modelPrice: '20180108',
  price: '3,000.00',
  taxRate: 0.16,
  billTaxValue: '435435.16',
}, {
  name: '*锻件*通行费',
  modelNumber: 'ER602EGK6001',
  modelUnit: '个',
  modelCount: '20180108',
  modelPrice: '20180108',
  price: '3,000.00',
  taxRate: 0.16,
  billTaxValue: '435435.16',
}, {}]

const taxList = [{
  name: '餐饮费0',
  modelPrice: '300.00',
  modelCount: '847',
  sum: '1300',
  billPrice: 300,
  billTaxValue: null,
}, {}]
const taxConfig = {
  billCode: '001',
  billNumber: '002',
  machineNumber: '003',
  machineId: '004',
  sellName: '山西溪唐小烹餐饮管理有限公司',
  sellTaxpayerNumber: '005',
  billDate: '006',
  receivingTeller: '007',
  buyName: '山西玉龙机电设备有限公司',
  buyTaxpayerNumber: '009',
  lowerSum: '-1600',
  upperSum: '101',
  billTaxPrice: 300,
  billTaxValue: null,
}
const taxConfigGS = {
  billCode: '001',
  billNumber: '002',
  industryType: '003',
  billDate: '004',
  machineCode: '005',
  machineId: '006',
  machineNumber: '007',
  taxControlCode: '008',
  payCompany: '009',
  upperSum: '010',
  billTaxPrice: '-7895',
  receivingCompany: '012',
  receivingCompanyTaxNumber: '013',
  remark: '014',
}
const taxListGS = [{
  name: '名称',
  modelNumber: '规格',
  modelUnit: '吨',
  modelCount: '100',
  modelPrice: '96.00',
  sum: '9,600.00'
}, {}]
const taxConfigJDC = {
  billCode: '001',
  billNumber: '002',
  billDate: '003',
  machineCode: '004',
  machineNumber: '005',
  machineId: '006',
  machineNo: '机打号码',
  taxControlCode: 'wNr749ZfMwFjYxzAcpRRJNiYYaOR8liHt+cD5OkIDXuUC2f2DoxvMNTbXH0Vg7UCB/n418AVkt1bAmuAhAK43jBl92OL1biemixeo4sc5lbsFDWYFmatdPiSrRAoX6AmKMSmPh9q+V/Xa5w4wVzm9EeixtW6IJfMEhqJlwnH6rlzgfuJIk88e9CIhCT5gxZPG0z+tnVd80fAtZRhuF/eDqtrPwUzHWK2VDsx7U1ASbO4I2hu6e4iKJ0Vqyb5nD4',
  buyNameNumber: '008',
  buyTaxpayerNumber: '009',
  carType: '010',
  factoryPlateModel: '豪沃牌ZZ4257V324HE1B',
  producingArea: '012',
  qualifyCardNumber: '013',
  importCardNumber: '014',
  commodityInspectionNumber: '015',
  engineNumber: '016',
  vehicleIdentificationNumber: '017',
  billTaxPriceUpper: '018',
  billTaxPrice: '-1956',
  sellCompanyName: '020',
  sellCompanyAddrPhone: '021',
  sellTaxpayerNumber: '022',
  sellCompanyCode: '招商银行股份有限公司南京江宁支行 125909132810101',
  sellCompanyAddr: '024',
  sellCompanyBankNumber: '招商银行股份有限公司南京江宁支行 125909132810101',
  taxRate: '026',
  billTaxValue: '-2700',
  taxAuthoritiesCode: '国家税务总局南京市江宁区税务局 132011500',
  billNoTaxValue: '-2946',
  taxPaymentCardNumber: '030',
  tonnage: '031',
  limitedPeopleNumber: '032',
  otherMessage: {
    billNoTaxValue: '-2946',
    billTaxValue: '-2700',
    taxRateOrCharge: '0.06',
  },
  sellTelephone: '0536-111111'
}
const taxConfigDZ = {
  billNumber: '001',
  billDate: '002',
  billCode: '003',
  buyCompanyName: '004',
  buyTaxpayerNumber: '005',
  buy_addr_and_tel: '006',
  buy_bank_addr_and_account: '007',
  billTaxPriceUpper: '008',
  billTaxPrice: '-7894',
  sellCompanyName: '010',
  sellTaxpayerNumber: '011',
  sell_addr_and_tel: '012',
  sell_bank_addr_and_account: '013',
  remark: '01479797979879797979879879879879878979879878979797房间看得见经典款减肥福建跨境电商电视剧风口浪尖的大姐夫空间',
  make_type: 0,
  direction: 0,
  status_of_certification: 1,
  date_of_certification_date: '2020-01-09',
}
const taxListHG = [{}, {}]
const taxConfigHG = {}
const taxListWP = [{}, {}]
const taxConfigWP = {}

function render(container) {
  ReactDOM.render(
    <div>
      <div style={boxStyle}>
        <Testone
          taxConfig={taxConfigDZ}
          taxDataList={taxDataList}
          mode={'ZZSZYFP'}

          // mode={'ZZSPTFP'}
          
          // 电子普通发票
          // taxDataList={taxDataListB}
          // taxConfig={taxConfigDZ}
          // mode={'ZZSDZPTFP'}

          // mode={'ZZSDZTXF'}
          
          // mode={'JDCXSTYFP'}
          // prefixCls={'cr-tax-c'}
          // taxConfig={taxConfigJDC}
        />
        {/* <PTFPJP taxList={taxList} taxConfig={taxConfig} /> */}
        {/* <GSTYJD taxList={taxListGS} taxConfig={taxConfigGS} /> */}
        {/* <HGJKZZS taxList={taxListHG} taxConfig={taxConfigHG} /> */}
        {/* <WPSR taxList={taxListWP} taxConfig={taxConfigWP} /> */}
        {/* <ESCXS taxConfig={taxConfigJDC} /> */}
        <LKYS taxDataList={taxDataListB} taxConfig={taxConfigDZ} />
        {/* <NCP taxDataList={taxDataListB} taxConfig={taxConfigDZ} /> */}
        <HCP taxDataList={taxDataListB} taxConfig={taxConfigDZ} />
        <CZC taxDataList={taxDataListB} taxConfig={taxConfigDZ} />
        <KYQC taxDataList={taxDataListB} taxConfig={taxConfigDZ} />
        <HKYSXCD taxDataList={taxDataListB} taxConfig={taxConfigDZ} />
      </div>
    </div>, container
  )
}

render(reactContainer)
