import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CustomCard = ({ title, content, imgSrc, price, cartdetailsid, onDelete, page }) => {
    return (
        <Card style={{ marginBottom: '20px' }}>
            <Card.Img variant="top" src={imgSrc} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{content}</Card.Text>
                <Card.Text>Price: ${price.toFixed(2)}</Card.Text>
                {page === "Cart Page" && (
                    <Button variant="danger" onClick={() => onDelete(cartdetailsid)}>
                        Remove
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
};

export default CustomCard;