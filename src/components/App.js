import './App.css';
import SignInSide from "./login-form/login";
import Dashboard from './dashboard/Dashboard'

function App() {
  return (
    <div>
      {/* <div className="App-header">Header</div> */}
      <div className="App">
        <SignInSide />
        <Dashboard />
      </div>
      <div>Hello</div>
    </div>
  );
}

export default App;
