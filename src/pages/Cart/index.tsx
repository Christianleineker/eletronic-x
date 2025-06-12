import { useEffect, useState } from 'react';
import './Cart.css';

type Produto = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export function Cart() {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);

  useEffect(() => {
    const dados = localStorage.getItem('carrinho');
    if (dados) {
      setCarrinho(JSON.parse(dados));
    }
  }, []);

  function removerProduto(id: number) {
    const novoCarrinho = carrinho.filter((item) => item.id !== id);
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  }

  const total = carrinho.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Meu Carrinho</h1>

      {carrinho.length === 0 ? (
        <p className="cart-empty">Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="cart-list">
            {carrinho.map((produto) => (
              <li key={produto.id} className="cart-item">
                <img src={produto.thumbnail} alt={produto.title} className="cart-img" />
                <div className="cart-info">
                  <p className="cart-name">{produto.title}</p>
                  <p className="cart-price">U$$ {produto.price}</p>
                  <button onClick={() => removerProduto(produto.id)} className="cart-remove">
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <strong>Total:</strong> U$ {total.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
}
