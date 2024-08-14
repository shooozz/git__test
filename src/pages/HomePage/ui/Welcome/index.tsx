import styles from "./Welcome.module.scss";

export const Welcome = () => {
    return (
        <div className={styles.content}>
            <h1>Добро пожаловать</h1>
        </div>
    );
};
