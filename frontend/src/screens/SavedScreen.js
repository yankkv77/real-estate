import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    Row,
    Col,
    ListGroup,
    Image,
    Form,
    Button,
    Card,
} from "react-bootstrap";
import { Message } from "../components/Message";
import { addToSaved } from "../actions/savedActions";

function SavedScreen({ match, location, history }) {
    const propertyId = match.params.id;

    const dispatch = useDispatch()
    useEffect(() => {
        if (propertyId) {
            dispatch(addToSaved(propertyId));
        }
    }, [dispatch, propertyId]);
    
    

    return <div>Saved</div>;
}
export default SavedScreen;
