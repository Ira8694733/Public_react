import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (users.length === 0) {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => setUsers(data))
        }
    }, []);

    return (
        <Container>
            <h1 className="text-center">USERS LIST</h1>
            <Row>
                {users?.map((user) => {
                    return (
                        <Col className="mx-auto my-2 my-sm-3 my-lg-4 p-3" key={`user${user.id}`}>
                            <Card style={{ width: "20rem" }} key={user.id}>
                                <Card.Body>
                                    <Card.Title>{user?.name}</Card.Title>
                                    <Card.Text>
                                        Username: {user?.username}
                                    </Card.Text>
                                    <Card.Text>
                                        User ID: {user?.id}
                                    </Card.Text>
                                    <Card.Text>
                                        City: {user?.address.city}
                                    </Card.Text>
                                    <Card.Text>
                                        User email: {user?.email}
                                    </Card.Text>
                                    <Link to={`/${user.id}`} >
                                        <Button className="btn-success disabled">view the post's</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default Users;