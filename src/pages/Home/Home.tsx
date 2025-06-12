import { useEffect, useState } from 'react';
import "./Home.css";
import { useNavigate } from 'react-router-dom';

export function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();
  

  type Produto = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

  function handleAddToCart(produto: Produto) {
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho') || '[]');
    
    const produtoJaExiste = carrinhoAtual.find((item: Produto) => item.id === produto.id);

    if (!produtoJaExiste) {
      const novoCarrinho = [...carrinhoAtual, produto];
      localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
      alert('Produto adicionado ao carrinho!');
    } else {
      alert('Este produto já está no carrinho.');
    }

    navigate('/meu-carrinho');
  }

  useEffect(() => {
    Promise.all([
      fetch('https://dummyjson.com/products/category/laptops').then((res) => res.json()),
      fetch('https://dummyjson.com/products/category/smartphones').then((res) => res.json()),
    ])
      .then(([laptopsData, smartphonesData]) => {
        const todosProdutos = [...laptopsData.products, ...smartphonesData.products];
        setProdutos(todosProdutos);
        setCarregando(false);
      })
      .catch((err) => {
        console.error('Erro ao carregar produtos:', err);
        setCarregando(false);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Laptops e Smartphones</h1>

      {carregando ? (
        <p className="loading">Carregando produtos...</p>
      ) : (
        <div className="grid">
          {produtos.map((produto) => (
            <div key={`${produto.id}-${produto.title}`} className="productCard">
              <img src={produto.thumbnail} alt={produto.title} className="productImage" />
              <p className="productTitle" title={produto.title}>{produto.title}</p>
              <p className="productPrice">U$$ {produto.price}</p>
              <button className="buttonAdd" onClick={() => handleAddToCart(produto)}>
                    Adicionar ao carrinho
                </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
