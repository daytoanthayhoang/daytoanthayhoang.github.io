import {tokenize,parseMove} from './cube-engine.js';
export function parseExternalAlgorithm(input,n){
  const moves=tokenize(input);
  if(!moves.length||moves.length>500)throw Error('Nhập từ 1 đến 500 nước.');
  if(moves.some(t=>/^(?:\d+)?[urfdlb]/.test(t)))throw Error('Ký hiệu r/u viết thường không thống nhất giữa các nguồn. Hãy đổi lát trong thành 2R/2U và hai lớp thành Rw/Uw trước khi nhập.');
  moves.forEach(t=>parseMove(t,n));
  return moves;
}
