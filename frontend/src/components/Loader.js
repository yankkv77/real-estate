import React from "react";
import { Spinner } from "react-bootstrap";

function Loader() {
    return (
        <Spinner
            animation="border"
            variant="secondary"
        >
            <span className="sr-only">Loading...</span>
        </Spinner>
    );
}

export default Loader;
