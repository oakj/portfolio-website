import Head from 'next/head'
import Header from './Header'
// import Body from './Body'
// import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div>
            <Head>

            </Head>
            <main>
                <Header />
                {children}
            </main>
            {/*
                <footer>
                    <Footer />
                </footer>
            */}
        </div>
    )
}
