import React, { useEffect, useState } from "react";
import { Row, Col, Table } from "react-bootstrap";
const PostPage = () => {
  const [list, setlist] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPosts = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setlist(json);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (loading) return <h1>로딩중임 닥치셈</h1>;

  return (
    <Row>
      <Col className="">
        <h1>게시글</h1>
        <Table striped bordered hover>
          <thead>
            <tr className="text-center">
              <td>ID</td>
              <td>Title</td>
            </tr>
          </thead>
          <tbody>
            {list.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default PostPage;
