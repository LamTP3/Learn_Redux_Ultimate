import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../action/actions";
import { User } from "../action/types";
import { Dispatch } from "redux";
function TableUser() {
  const dispatch: Dispatch<any> = useDispatch();
  const users: User[] = useSelector((state: any) => state.user.listUser);
  const loading: boolean = useSelector((state: any) => state.user.isLoading);
  const error: boolean = useSelector((state: any) => state.user.isError);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

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
            {error === true ? (
              <>
                <div>Something wrong, please try again....</div>
              </>
            ) : (
              <>
                {loading === true ? (
                  <>
                    <div>Loading data...</div>
                  </>
                ) : (
                  <>
                    {users &&
                      users.length > 0 &&
                      users.map((item, index) => {
                        return (
                          <tr key={`user-${index}`}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                            <td>
                              <button className="btn btn-danger">Delete</button>
                            </td>
                          </tr>
                        );
                      })}
                  </>
                )}
              </>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default TableUser;
