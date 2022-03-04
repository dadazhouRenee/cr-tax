import Numeral from 'numeral';

if (Numeral.locales['chs'] === undefined) {
  Numeral.register('locale', 'chs', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: '千',
        million: '百万',
        billion: '十亿',
        trillion: '兆'
    },
    ordinal: function (number) {
        return '.';
    },
    currency: {
        symbol: '¥'
    }
  });
}

Numeral.locale('chs');
Numeral.defaultFormat('$0,0.00');

export default Numeral;
