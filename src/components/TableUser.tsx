import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, deleteUserRedux } from "../action/actions";
import { User } from "../action/types";

function TableUser() {
  const dispatch: any = useDispatch();
  const users: User[] = useSelector((state: any) => state.user.listUser);
  const loading: boolean = useSelector((state: any) => state.user.isLoading);
  const error: boolean = useSelector((state: any) => state.user.isError);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleDeleteUser = (id: number) => {
    dispatch(deleteUserRedux(id));
  };

  return (
    <div>
      <Container>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {error && (
              <tr>
                <td colSpan={4}>
                  <div>Something wrong, please try again....</div>
                </td>
              </tr>
            )}
            {loading && (
              <tr>
                <td colSpan={4}>
                  <div>Loading data...</div>
                </td>
              </tr>
            )}
            {!loading &&
              !error &&
              users.length > 0 &&
              users.map((item, index) => (
                <tr key={`user-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteUser(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            {!loading && !error && users.length === 0 && (
              <tr>
                <td colSpan={4}>
                  <div>No users found</div>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default TableUser;
