import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import Todos from "./Todos";

const RouterPage = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" className="py-2">
        <Container fluid>
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">Home</Link>
              <Link to="/posts">게시글 작성</Link>
              <Link to="/todos">할일 목록</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/posts" component={PostPage} />
        <Route path="/todos" component={Todos} />
      </Switch>
    </>
  );
};

export default RouterPage;
