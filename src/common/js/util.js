/**
 * 解析url参数，提取页面ID
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
export function urlParse() {
  // window.location.search直接获得?id=12345&a=b
  let url = window.location.search;
  let obj = {};
  // [?&]匹配第一个？或者&， [^?&]匹配非问号后面的ID，+ 表示一个或多个， =匹配等号，
  // [^?&]+匹配非问号和字符
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  // 取到['?id=12345', '&a=b']
  if (arr) {
    arr.forEach((item) => {
      // substring(1)删除第一个问号，然后在等号初分割
      let tempArr = item.substring(1).split('=');
      // 分别取等号前后两个值
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }
  return obj;
};
