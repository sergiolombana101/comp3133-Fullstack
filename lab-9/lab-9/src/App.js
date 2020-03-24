import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentList from './models/StudentList';
import AddStudent from './components/AddStudent';


function App() {
  return<>
          <AddStudent />
          <StudentList/>
        </>
}
export default App;
