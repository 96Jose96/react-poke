import React from "react";
import styles from './Error.module.css'

function Error({ mensaje }) {
    return <p className={styles.error} >{ mensaje }</p>
}

export default Error