import Link from 'next/link'
import Nav from '../components/Nav'
import styles from '../styles/layout/Header.module.scss'

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>Jonnie Oak</a>
                </Link>
            </div>
            <Nav />
        </div>
    )
}
