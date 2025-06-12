import { useEffect, useState } from 'react';
import styles from './header.module.css';
import logoimg from '../../assets/logo-eletronicx.png';
import { QuantityItems } from '../../pages/Home/cartUtils';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

export function Header() {
  const [quantidade, setQuantidade] = useState(0);

  useEffect(() => {
    function atualizarQuantidade() {
      setQuantidade(QuantityItems());
    }

    atualizarQuantidade();

    window.addEventListener('cartUpdated', atualizarQuantidade);

    return () => {
      window.removeEventListener('cartUpdated', atualizarQuantidade);
    };
  }, []);

  return (
    <header className={styles.container}>
      <Link to="/">
        <img src={logoimg} alt="logo-ecommerce" className={styles.img} />
      </Link>

      <Link to="/meu-carrinho" className={styles.cartLink} style={{ position: 'relative' }}>
        <FiShoppingCart size={24} color="#FFFFFF" className={styles.cart} />
        {quantidade > 0 && (
          <span className={styles.cartBadge}>{quantidade}</span>
        )}
      </Link>
    </header>
  );
}