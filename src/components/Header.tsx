import { ListChecks } from 'phosphor-react'

import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <ListChecks className={styles.icon} />
            <span className={styles.logo1}>t</span>
            <span className={styles.logo2}>O</span>
            <span className={styles.logo3}>D</span>
            <span className={styles.logo4}>o</span>
        </div>
    )
}
