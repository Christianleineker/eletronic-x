

export function QuantityItems(): number {
  const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
  return carrinho.length;
}