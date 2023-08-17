
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <> 
<Navbar title ="TextUtils2" aboutText="about textUtils"/>


<div className="container my-3">
<TextForm heading = "Enter The text to Analyzer below"/>
</div>
{/* <Navbar/> */}
</>
  );
}

export default App;
