import styles from "./errorMessage.module.css";

export default function ErrorMessage ({message}: {message: string}) {
    return (
        <div className={styles.errorBody}>
            <p className={styles.errorText}>Error</p>
            <p className={styles.redText}>{message}</p>
        </div>
    )
}