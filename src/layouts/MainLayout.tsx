import App from "../pages/App";
import Header from "./header/Header";

export default function MainLayout() {
    return (
        <>
            <Header />
            <main>
                <App />
            </main>
        </>
    )
}
