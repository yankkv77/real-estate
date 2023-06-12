import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HomeScreen from "./screens/HomeScreen";

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Route path="/" component={HomeScreen} exact />
                <Container>

                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
