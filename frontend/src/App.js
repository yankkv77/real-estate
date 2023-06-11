import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

function App() {
    return (
        <div>
            <Header />
            <main>
                <HeroSection/>
                <Container>
                    <h1>Real Estate</h1>
                    
                </Container>
            </main>
            <Footer />
        </div>
    );
}

export default App;
