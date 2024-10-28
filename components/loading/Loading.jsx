import React from "react";
import styles from "./Loading.module.css"

function Loading() {
    return <p className={styles.loading} >Cargando<span className={styles.dots}>...</span></p>
}

export default Loading