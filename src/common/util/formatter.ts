import moment from 'moment';
import 'moment/locale/ko';

export function moneyFormatter(money: number, digits: number = 0): string {
  return (money).toFixed(digits).replace(/(\d)(?=(\d{3})+$)/g, "$1,");
}

export function datetimeFormatter(d: Date, format: string = 'YYYY/MM/DD dddd hh:mm:ss'): string {
  moment.locale('ko');
  return moment(d).format(format);
}
