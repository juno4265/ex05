import React, { useEffect, useState } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
const PostPage = () => {
  const [list, setlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [last, setlast] = useState(1);

  const getPosts = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        let start = (page - 1) * 5 + 1;
        let end = page * 5;
        setlist(json.filter((post) => post.id >= start && post.id <= end));
        setlast(Math.ceil(json.length / 5));
        setLoading(false);
      });
  };

  useEffect(() => {
    getPosts();
  }, [page]);

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
        <div className="text-center my-3">
          <Button
            disabled={page === 1 && true}
            onClick={() => setPage(page - 1)}
          >
            이전
          </Button>
          <span className="px-4">
            {page}/{last}
          </span>
          <Button
            disabled={page === last && true}
            onClick={() => setPage(page + 1)}
          >
            다음
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default PostPage;
