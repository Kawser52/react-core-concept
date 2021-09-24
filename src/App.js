import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
     <Friend name= "Md. Nazmul Islam Tusar" position = "Engineer"></Friend>
     <Friend name= "Md. Abullah Al Muid" position="UI Designer"></Friend>
     <Paidcourse name= "Nafiur Rahman Nafi"></Paidcourse>
     <Paidcourse name= "Md. Shakib"></Paidcourse>
     <Paidcourse name= "Urmi Akter Mahi"></Paidcourse>
    </div>
  );
}

function Friend(props){
  const friendStyle = {
    backgroundColor : 'blue',
    padding:'20px',
    margin: '20px auto',
    borderRadius: '10px',
    color:'white',
    width:'50%',

  }
  return (
    <div style = {friendStyle}>
    <h1>Name: {props.name}</h1>
    <h4>Pisition: {props.position}</h4>
    </div>
  );
}

function Paidcourse(props){
   const studentStyle = {
    backgroundColor : 'skyblue',
    padding:'20px',
    margin: '20px auto',
    borderRadius: '10px',
    color:'white',
    width:'50%',

  }
  return(
    <div style = {studentStyle}>
      <h2>Student Name: {props.name}</h2>
    </div>
  );
}
export default App;
