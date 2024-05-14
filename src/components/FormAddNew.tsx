import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function FormAddNew() {
    return (
        <div>
            <Container>
                <br />
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address: </Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" autoComplete='off' />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" autoComplete='off' />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Username: </Form.Label>
                        <Form.Control type="text" placeholder="Enter your username" autoComplete='off' />
                    </Form.Group>
                    <Button >Create</Button>

                </Form>

            </Container>

        </div>
    )
}

export default FormAddNew
