import { Link } from 'react-router-dom';
import styles from './notfound.module.css';

export function Notfound(){
    return(
    <div className={styles.container}>
        <h1 className={styles.error}>error 404</h1>
        <h2 className={styles.notfound}>está página não existe</h2>
        <Link to="/" className={styles.gotohome}>
        voltar para a pagina inicial
        </Link>
    </div>
    )
}