import { ReactNode } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

//o BaseLayout vai receber children porque será igual pras 3 páginas
type BaseLayoutProps = {
    children: ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
)

export default BaseLayout