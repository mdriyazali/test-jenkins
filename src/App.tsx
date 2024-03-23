import ListTodos from '../Components/TodoItem'
import Create from '../Components/Create'
import UpdateTodo from '../Components/UpdateTodo'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {

  return (
    <Router>
      <div className='mt-2 mx-3'>
        <Routes>
          <Route path="/" element={<DefaultView />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<UpdateTodo />} />
        </Routes>
      </div>
    </Router>
  );
}

function DefaultView() {
  return (
    <>
      <div>
        <ListTodos />
      </div>
    </>
  );
}




export default App;
