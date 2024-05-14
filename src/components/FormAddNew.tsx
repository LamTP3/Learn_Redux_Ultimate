import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewUserRedux } from "../action/actions";
import { User } from "../action/types";
function FormAddNew() {
  const [user, setUser] = useState<User>({
    id: 0,
    email: "",
    password: "",
    username: "",
  });
  const isCreating = useSelector((state: any) => state.user.isCreating);
  const dispatch: any = useDispatch();
  const handleCreateUser = () => {
    dispatch(createNewUserRedux(user));
    setUser({
      id: 0,
      email: "",
      password: "",
      username: "",
    });
    console.log(user);
  };

  return (
    <div>
      <Container>
        <br />
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address: </Form.Label>
            <Form.Control
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter your email"
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter your password"
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Username: </Form.Label>
            <Form.Control
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Enter your username"
              autoComplete="off"
            />
          </Form.Group>
          <Button onClick={handleCreateUser} disabled={isCreating}>
            Create
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default FormAddNew;
