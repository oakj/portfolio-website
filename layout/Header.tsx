import Link from 'next/link'
import Nav from '../components/Nav'

export default function Header() {
    return (
        <>
            <Link href="/">
                <a>Jonnie Oak</a>
            </Link>
            <Nav />
        </>
    )
}
