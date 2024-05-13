import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useEffect, useState } from "react";
function TableUser(props) {
    const [users, setUsers] = useState([]);
    const fetchAllUser = async () => {
        const res = await axios.get("http://localhost:8080/users/all");
        setUsers(res.data);
        console.log(`>>> check data: `, res.data);
    };

    useEffect(() => {
        fetchAllUser();
    }, []);
    const handleDeleteUser = async (id) => {
        console.log(`Delete user with id: ${id}`);
        // const res = await axios.delete(`http://localhost:8080/users/delete/${id}`);
        // if (res.data === 1) {
        //     fetchAllUser();
        // }
    }
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
                        {users && users.length > 0 && users.map((item, index) => {
                            return (
                                <tr key={`user-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.username}</td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(item.id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>

            </Container>

        </div>
    )
}

export default TableUser
