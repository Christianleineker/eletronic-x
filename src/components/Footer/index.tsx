import styles from './footer.module.css'

export function Footer(){
    return (
        <footer className={styles.footer}>
            <h3 className={styles.name}>Eletronic X</h3>
            <p className={styles.p}>Todos os direitos reservados</p>
        </footer>
    )
}