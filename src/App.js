import './App.css';
import ChartDashboard from './Chart/ChartDashboard';
import Dashboard from './Pages/Dashboard';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div >
    <Navbar/>
    {/* <Dashboard/> */}
    <ChartDashboard/>
    </div>
  );
}

export default App;
