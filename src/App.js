import logo from './logo.svg';
import './App.css';
import SKEditor from './Editor/SKeditor';
import Mindmap from './Mindmap/Mindmap';
function App() {
  return (
    <div className="App" >
      <Mindmap data={[]} getUpdatedData={(param)=>console.log(param)}/>
    
    </div>
  );
}

export default App;
