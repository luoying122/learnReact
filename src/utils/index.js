export function formatTime(time) {
  let year = new Date(time).getFullYear();
  let month = addZero(new Date(time).getMonth() + 1);
  let day = addZero(new Date(time).getDate());
  let hour=  new Date(time).getHours()
  let minute = addZero(new Date(time).getMinutes())
  let sec = addZero(new Date(time).getSeconds())
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + sec
}

export function addZero(n) {
  return n < 10 ? "0" + n : n;
}

// 浏览器回滚卷尺高度
export function getScrollTop() {
  return document.documentElement.scrollTop||document.body.scrollTop;
}
