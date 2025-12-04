import Header from "./components/Header";
import Footer from "./components/Footer";


async function app() {
    return `
            ${await Header()}
            <main id="js-body"></main>
            ${Footer()}
`;
}

export default app;
