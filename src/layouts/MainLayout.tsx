import App from "../pages/App";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function MainLayout() {
    return (
        <>
            <Header />
            <main>
                <App />
            </main>
            <Footer />
        </>
    )
}
