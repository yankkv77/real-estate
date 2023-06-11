import React from "react";
import { Card } from "react-bootstrap";

function Property({ property }) {
    return (
        <a className="card-link" href={`/property/${property._id}`}>
            <Card>
                <Card.Img
                    className="card-img"
                    variant="top"
                    src={property.image}
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
        </a>
    );
}

export default Property;
