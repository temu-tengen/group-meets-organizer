import styles from './page.module.css';

export default function Dashboard({user}: {user: String}) {
    return (
        <div className={styles.page}>
            <h1 className={styles.headerXL}>
                Welcome 
            </h1>

        </div>
    )
}