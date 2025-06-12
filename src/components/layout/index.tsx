import { Header } from '../Header/header';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/index';
import styles from './layout.module.css';

export function Layout(){
    return(
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.content}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}