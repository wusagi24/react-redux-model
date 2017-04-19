/**
 * シンプルなコンパレータ関数
 * @param {any} a
 * @param {any} b
 * @return {number} コンパレータ出力
 */
export function baseComparator(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

/**
 * @param {any} param
 * @return {string}
 */
function safeToString(param) {
  if (param instanceof Object) return JSON.stringify(param);
  if (param.toString) return param.toString();
  return '';
}

/**
 * @param {any} param
 * @return {number}
 */
function safeToNumber(param) {
  if (typeof param === 'number') return param;
  const intParam = parseInt(param, 10);
  if (isNaN(intParam)) return -Infinity;
  return intParam;
}

/**
 * 引数を文字列として比較するコンパレータ
 * @param {any} a
 * @param {any} b
 * @return {number} コンパレータ出力
 */
export function strComparator(a, b) {
  return baseComparator(safeToString(a), safeToString(b));
}

/**
 * 引数を数値として比較するコンパレータ
 * @param {any} a
 * @param {any} b
 * @return {number} コンパレータ出力
 */
export function intComparator(a, b) {
  return baseComparator(safeToNumber(a), safeToNumber(b));
}
