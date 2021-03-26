import Link from 'next/link'

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/"><a>About</a></Link>
                </li>
                <li>
                    <Link href="/projects"><a>Projects</a></Link>
                </li>
                <li>
                    <Link href="/contact"><a>Contact</a></Link>
                </li>
                <li>
                    {/* temporary external link to dev blog - will use dev blog API to create a full blog page in future */}
                    <a href="https://dev.to/oakj">Blog</a>
                </li>
            </ul>
        </nav>
    )
}
