import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import PropertyScreen from "./screens/PropertyScreen";
import AgentsScreen from "./screens/AgentsScreen";
import AgentScreen from "./screens/AgentScreen";
import SavedScreen from "./screens/SavedScreen";


function App() {
    return (
        <Router>
            <Header />
            <main>
                <Route path="/" component={HomeScreen} exact />
                <Container>
                    <Route path="/properties/:id" component={PropertyScreen} />
                    <Route path="/agents" component={AgentsScreen} />
                    <Route path="/agent/:id" component={AgentScreen} />
                    <Route path='/saved/:id?' component={SavedScreen} />
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
