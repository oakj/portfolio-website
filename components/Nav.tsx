import Link from 'next/link'
import styles from '../styles/components/Nav.module.scss'

export default function Nav() {
    return (
        <nav className={styles.container}>
            <ul className={styles.nav_links}>
                <li className={styles.nav_item}>
                    <Link href="#about"><a>About</a></Link>
                </li>
                <li className={styles.nav_item}>
                    <Link href="#projects"><a>Projects</a></Link>
                </li>
                <li className={styles.nav_item}>
                    <Link href="#contact"><a>Contact</a></Link>
                </li>
                <li className={styles.nav_item}>
                    {/* temporary external link to dev blog - will use dev blog API to create a full blog page in future */}
                    <a href="https://dev.to/oakj">Blog</a>
                </li>
            </ul>
        </nav>
    )
}
