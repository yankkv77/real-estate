import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HomeScreen from "./screens/HomeScreen";

function App() {
    return (
        <div>
            <Header />
            <main>
                <HeroSection />
                <Container>
                    <HomeScreen />
                </Container>
            </main>
            <Footer />
        </div>
    );
}

export default App;
