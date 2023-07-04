import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Property({ property }) {
    return (
        <Link to={`/properties/${property._id}`} className="card-link">
            <Card>
                <Card.Img
                    className="card-img"
                    variant="top"
                    src={property.images[0]}
                />
                <Card.Body>
                    <Card.Title as="div" className="card-title">
                        ${property.price}
                    </Card.Title>
                    <Card.Subtitle as="div" className="card-sub">
                        <strong>{property.bedrooms}</strong> bed{" "}
                        <strong>{property.bathrooms}</strong> bath{" "}
                        <strong>{property.sqm}</strong> sqm
                    </Card.Subtitle>
                    <Card.Text as="div" className="card-text">
                        {property.address}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default Property;
