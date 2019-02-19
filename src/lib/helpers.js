export function totalPrice(items) {
  return items.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
  }, 0);
};

export function autoIncrementer() {
  let n = 999;
  return function() {
    return n += 1;
  };
};