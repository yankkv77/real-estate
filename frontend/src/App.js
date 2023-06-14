import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import PropertyScreen from "./screens/PropertyScreen";

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Route path="/" component={HomeScreen} exact />
                <Container>
                    <Route path="/property/:id" component={PropertyScreen} />
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
