/*
 *计算指定年份中每个日期在一年中的工作日天数
 */
var dayArr = [0];
var year = 2018;
function showDaysByYear(year,month=1) {
  for (let i = month; i <= 12; i++) {
    //天数传0，可以通过getDate直接获取当月的天数。
    var _date = new Date(year, i, 0);
    let days = _date.getDate();
    for (let d = 1; d <= days; d++) {
      _date.setDate(d);
      let weekDay = _date.getDay();
      if (weekDay >= 1 && weekDay <= 5) {
        dayArr[d] ? dayArr[d]++ : dayArr[d] = 1;
      }
    }
  }
}
showDaysByYear(year);
for (let i = 1, len = dayArr.length; i < len; i++) {
  console.log(`${year}年${i}号工作日天数：${dayArr[i]}`);
}