// 存
export function saveToLocal(id, key, value) {
  let seller = window.localStorage.__seller__;
  // 从来没有这个商家,创建一个
  if (!seller) {
    seller = {};
    seller[id] = {};
    // 否则直接拿来用
  } else {
    seller = JSON.parse(seller);
    // 是否有当前商家
  if (!seller[id]) {
      seller[id] = {};
    }
  }
  seller[id][key] = value;
  window.localStorage.__seller__ = JSON.stringify(seller);
};
// 读取
export function loadFromLocal(id, key, def) {
  let seller = window.localStorage.__seller__;
  if (!seller) {
    return def;
  }
  seller = JSON.parse(seller)[id];
  // id为空
  if (!seller) {
    return def;
  }
  let ret = seller[key];
  return ret || def;
};
