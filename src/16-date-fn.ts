import { format, subDays } from 'date-fns' //librería para fechas

const date = new Date(1998, 1, 28); // 0 = enero, 1 = febrero .... 11 = diciembre en js
const rta = subDays(date, 30);
const str = format(rta, 'yyyy/MM/dd');

console.log(str);
