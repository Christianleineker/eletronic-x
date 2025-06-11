import styles from './header.module.css'
import logoimg from '../../assets/logo-eletronicx.png'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'

export function Header(){
    return(
        <header className={styles.container}>
             <Link to="/">
             <img src={logoimg} alt="logo-ecommerce" className={styles.img}/>
             </Link>
    
             <Link to={"/meu-carrinho"}>
             <FiShoppingCart size={24} color='#FFFFFF' className={styles.cart}/>
             </Link>

        </header>
    )
}