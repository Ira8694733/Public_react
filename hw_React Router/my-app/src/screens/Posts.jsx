import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Post = () => {
    const params = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (params?.id) {
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`)
                .then((response) => response.json())
                .then((data) => setPost(data));
        }
    }, []);

    return (
        <Container>
            <h1 className="text-center">USERS POSTS</h1>
            <Row>
                {post?.map((post) => {
                    return (
                        <Col className="mx-auto my-2 my-sm-3 my-lg-4 p-3">
                            <Card style={{ width: "18rem" }} key={post.id}>
                                <Card.Body>
                                    <Card.Title>
                                        {post?.title}
                                    </Card.Title>
                                    <Card.Text> User: {post.userId} post</Card.Text>
                                    <Card.Text>{post?.body}</Card.Text>
                                    <Card.Text>post ID:{post.id}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default Post;