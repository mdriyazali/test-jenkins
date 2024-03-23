import axios from "axios";
import { useState } from 'react'
import { useNavigate } from "react-router";

const Create = () => {
    const [name, setName] = useState("");
    const [isCompleted, setisCompleted] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validation
        if (!name) {
            alert("Please fill the required fields.");
            return;
        }

        axios.post("http://localhost:5000/todos", {
            name: name,
            isCompleted: isCompleted
        })
            .then(() => {
                alert("Todo Added");
                navigate('/');
            })
            .catch(error => {
                console.error("Error adding todo", error);
                alert("Error adding todo. Please try again.");
            });
    };

    return (
        <>
            <style>
                {`
                    /* Create Container */
                    .create-container {
                        background-color: #1a1a1a;
                        border-radius: 20px;
                        margin: 3rem auto;
                        padding: 3rem;
                        max-width: 500px;
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
                        color: #fff;
                    }

                    /* Form */
                    .form-label {
                        font-weight: bold;
                    }

                    .form-control {
                        width: 100%;
                        padding: 1rem;
                        margin-bottom: 2rem;
                        border: none;
                        border-radius: 10px;
                        background-color: rgba(255, 255, 255, 0.1);
                        color: #fff;
                        font-size: 1.1rem;
                        outline: none;
                    }

                    .form-control:focus {
                        background-color: rgba(255, 255, 255, 0.2);
                    }

                    /* Checkbox */
                    .form-check-input {
                        margin-right: 0.5rem;
                    }

                    /* Submit Button */
                    .btn-primary {
                        background-color: #ffcc00;
                        border: none;
                        border-radius: 10px;
                        padding: 1rem;
                        width: 100%;
                        font-size: 1.2rem;
                        font-weight: bold;
                        cursor: pointer;
                        transition: background-color 0.3s ease-in-out;
                    }

                    .btn-primary:hover {
                        background-color: #ff9900;
                    }

                    .btn-primary:focus {
                        outline: none;
                        box-shadow: 0 0 0 3px rgba(255, 204, 0, 0.4);
                    }

                    .btn-primary:active {
                        background-color: #e68a00;
                    }
                `}
            </style>
            <div className="create-container">
                <div className="d-flex justify-content-center">
                    <h2>Add Todo</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" onChange={(e) => setisCompleted(e.target.checked)} />
                        <label className="form-check-label">Is Complete</label>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Create;
