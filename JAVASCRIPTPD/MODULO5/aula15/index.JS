//trabalhando com datas
const daraatual = new Date();   //new date() é um construtor de data, ele cria um objeto do tipo data
console.log(daraatual);
console.log(daraatual.getDate()); //getDate() retorna o dia do mês
console.log(daraatual.getMonth() + 1); //getMonth() retorna o mês, mas começa do 0, ou seja, janeiro é 0, fevereiro é 1, e assim por diante
console.log(daraatual.getFullYear()); //getFullYear() retorna o ano com 4 dígitos
console.log(daraatual.getHours()); //getHours() retorna a hora
console.log(daraatual.getMinutes()); //getMinutes() retorna os minutos
console.log(daraatual.getSeconds()); //getSeconds() retorna os segundos
console.log(daraatual.getMilliseconds()); //getMilliseconds() retorna os milissegundos
console.log(daraatual.getDay()); //getDay() retorna o dia da semana, onde 0 é domingo, 1 é segunda-feira, e assim por diante
