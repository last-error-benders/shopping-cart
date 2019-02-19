export function totalPrice(items) {
  return items.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
  }, 0);
}
