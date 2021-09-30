# cr-tax

react component tax and bill styles

## Example View
<img src="http://39.107.35.212/images/cr-tax/example2.png" alt="example" />

## All TaxTemplate

- 增值税专用发票
- 增值税专用电子发票
- 增值税普通发票
- 增值税电子普通发票
- 机动车销售统一发票
- 增值税普通发票（卷票）
- 国税通用机打发票
- 增值税电子普通发票（通行费）
- 海关进口增值税专用缴费书
- 无票收入
- 二手车销售统一发票
- 增值税电子普通发票（旅客运输）
- 增值税电子普通发票农产品

## Usage

```bash
cnpm install --save cr-tax
# or
npm install --save cr-tax
```

```js
import React, { PureComponent } from 'react';
import Tax from 'cr-tax';
import 'cr-tax/assets/index.css';

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
  totalS: '¥2,013.76',
  name: '衡水华业工业有限公司',
  taxNumber: '789754654444464',
  addressPhone: '运城市运万路幸福庄0350-7878505',
  bank: '农行运城北城支行56600104454502242',
  remark: '',
}
const taxDataList = [{
  name: '*钢件*电池阴极金具',
  type: 'ER602EGK6001',
  unit: '个',
  number: '3,000.00',
  price: '3,000.00',
  sum: '3,000.00',
  rate: 0.16,
  tax: '435435.16',
}]

class AppB extends PureComponent {
  render () {
    return (
      <Tax
        mode={'ZZSZYFP'}
        taxHeader={taxHeader}
        taxPurchase={taxPurchase}
        ticketType={1}
        taxDataList={taxDataList}
        taxSales={taxSales}
      />
    )
  }
}
```

## API

### 增值税专用发票

name | type | description
-----| -----| ------------
mode | string | ZZSZYFP
taxHeader | object | 发票头部信息 { code: 发票代码; number: 发票号码; date: 开票日期; identiDate: 认证日期;  }
taxPurchase | object | 购货单位信息 { name: *名称; taxNumber: 纳税人识别号; addressPhone: 地址、电话; bank: 开户行及账户 }
taxDataList | array[object] | 货物数据列表 [{ name: *货物或应税劳务名称; type: 规格型号; unit: 单位; number: 数量; price: 单价; sum: *金额; rate: *税率; tax: 税额 }]
taxSales | object | 销货单位及价税合计信息 { totalB: 价税合计(大写); totalS: (小写); name: *名称; taxNumber: 纳税人识别号; addressPhone: 地址、电话; bank: 开户行及账户; remark: 备注 }
ticketType | number | 开票类型 1: 代开发票; 2: 自开发票
direction | string(oneof ['in', 'out']) | in: 进项发票; out: 销项发票

### 增值税电子普通发票

name | type | description
-----| -----| ------------
mode | string | ZZSDZPTFP
taxHeader | object | 发票头部信息 { code: 发票代码; number: 发票号码; date: 开票日期; identiDate: 认证日期; }
taxPurchase | object | 购货单位信息 { name: *名称; taxNumber: 纳税人识别号; addressPhone: 地址、电话; bank: 开户行及账户 }
taxDataList | array[object] | 货物数据列表 [{ name: *项目名称; carNumber: 车牌号; type: 类型; dateStart: 通行日期起; dateEnd: 通行日期止; sum: *金额; rate: *税率; tax: 税额 }]
taxSales | object | 销货单位及价税合计信息 { totalB: 价税合计(大写); totalS: (小写); name: *名称; taxNumber: 纳税人识别号; addressPhone: 地址、电话; bank: 开户行及账户; remark: 备注 }
ticketType | number | 开票类型 1: 代开发票; 2: 自开发票
direction | string(oneof ['in', 'out']) | in: 进项发票; out: 销项发票

### 机动车销售统一发票

name | type | description
-----| -----| ------------
mode | string | JDCXSTYFP
prefixCls | string | cr-tax-c
taxHeader | object | 发票头部信息 { code: 发票代码; number: 发票号码; date: 开票日期 }
mainData | object | 发票主体信息 { machineCode: 机打代码; machineNumber: 机打号码; encipher: 机器编码; purchase:  *购买方名称及身份证号码/组织机构代码; purchaseTaxNumber: 纳税人识别号(购买方); carType: 车辆类型; factory: 厂牌型号; origin: *产地; certificate: 合格证号; importNumber: 进口证明书号; inspectionNumber: 商检单号; engineNumber: 发动机号码; carNumber: 车牌识别号/车架号码; totalB: 价税合计（大写）; totalS: *小写; sales: *销货单位名称; phone: 电话; salesTaxNumber: 纳税人识别号(销货方); account: 账号; address: 地址; bank: 开户银行; rate: *增值税税率或征收率; tax: *增值税税额; chargeTaxCode: 主管税务机关及代码; notTaxCount: *不含税价; taxCertificate: 完税凭证号码; weight: 吨位; maxNumber: 限乘人数 }

## Development

```
cnpm install
npm start
```

## Example

http://localhost:8028/examples/testOne.html

## Test
  ```js
  npm test
  
  npm run coverage
  ```


## License

cr-tax is released under the MIT license.
