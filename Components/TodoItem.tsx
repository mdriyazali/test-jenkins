import { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {
    MDBBadge,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBTooltip,

} from "mdb-react-ui-kit";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';




import axios from 'axios';

interface TodoInterface {
    id: number;
    name: string;
    isCompleted: boolean;
}

const ListTodos = () => {
    const [todos, setTodos] = useState<TodoInterface[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/todos');
                console.log('Received data:', data);
                setTodos(data.todos);
            } catch (error) {
                console.error('Error fetching todos:', error);
                // Add user-friendly error handling here if needed
            }
        };

        fetchTodos();
    }, []);
    const navigate = useNavigate();
    const deleteTodo = async (id: any) => {
        try {
            await axios.delete(`http://localhost:5000/todos/${id}`);
            setTodos((prevTodos: any) => prevTodos.filter((todo: any) => todo.id !== id)) 
            alert("Todo Deleted Successfully");
            navigate('/');
            }
         catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return (
        <>
            <section className="bg-gradient-primary vh-100 d-flex align-items-center justify-content-center">
                <MDBContainer>
                    <MDBRow className="justify-content-center">
                        <MDBCol md="12" xl="10">
                            <MDBCard className="bg-dark text-white border-0">
                                <MDBCardHeader className="bg-transparent border-0 text-center">
                                    <h1 className="mb-0">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className='me-2' />
                                            <span className="fw-bold">Todo List</span>
                                            <Link to="/create" className="ms-auto text-white text-decoration-none">
                                                <FontAwesomeIcon icon={faPlus} className='me-1' />
                                                Add Todo
                                            </Link>
                                        </div>
                                    </h1>
                                </MDBCardHeader>
                                <MDBCardBody className="text-center">
                                    <MDBTable responsive className="text-white">
                                        <MDBTableHead>
                                            <tr>
                                                <th scope="col">Todo</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            {todos.map((todo) => (
                                                <tr key={todo.id}>
                                                    <td>{todo.name}</td>
                                                    <td>
                                                        <MDBBadge color={todo.isCompleted ? "success" : "danger"}>
                                                            {todo.isCompleted ? 'Done' : 'Not Done'}
                                                        </MDBBadge>
                                                    </td>
                                                    <td>
                                                        <MDBTooltip tag="span" placement="top" tooltipContent="Edit">
                                                            <Link to={`/edit/${todo.id}`} className="text-decoration-none me-3">
                                                                <FontAwesomeIcon icon={faPen} className="text-success" />
                                                            </Link>
                                                        </MDBTooltip>
                                                        <MDBTooltip tag="span" placement="top" tooltipContent="Remove">
                                                            <FontAwesomeIcon icon={faTrashAlt} className="text-danger" onClick={() => deleteTodo(todo.id)} />
                                                        </MDBTooltip>
                                                    </td>
                                                </tr>
                                            ))}
                                        </MDBTableBody>
                                    </MDBTable>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </>
    );
};

export default ListTodos;
