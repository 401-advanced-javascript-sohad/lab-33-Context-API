import React from 'react';
import Header from '../src/components/modal/header.js';
import Todo from '../src/components/todo/todo-connected.js';
import Footer from './components/modal/footer.js';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Todo />
      {/* <Main /> */}
      <Footer />
    </React.Fragment>
  );
}


export default App;