import './App.css'
import ClockHeading from './components/ClockHeading'
import ClockInfo from './components/ClockInfo'
import CurrentTiming from './components/CurrentTiming'

function App() {
  return <div className='clock-container'>
    <ClockHeading />
    <ClockInfo/ >
    <CurrentTiming />
  </div>
}

export default App;
