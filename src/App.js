import { Fragment } from 'react';
import './App.css';
// import TodoApp from './components/TodoApp';
import TodoList from './components/TodoList';

function App() {
  return (
    <Fragment>
      <TodoList />
      {/* <TodoApp /> */}
    </Fragment>
  );
}

export default App;
