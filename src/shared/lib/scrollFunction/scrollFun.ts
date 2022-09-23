/* eslint-disable no-restricted-globals */

export function scrollFun(id: string): boolean{
  const scroll = scrollY;
  const elem = document.getElementById(id);
  if (elem) {
    return Boolean(scroll > 10)
  }
  return false;
}
