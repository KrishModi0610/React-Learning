import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.module.css'
import BtnContainer from './components/BtnContainer';
import InputContainer from './components/InputContainer';

function App() {
  let calcItems = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*","7", "8", "/", "=", "9", ".", "0"];
  return (
    <div className={styles.calculator}>
      <InputContainer></InputContainer>
      <BtnContainer calcItems={calcItems}></BtnContainer>
    </div>
  );
}

export default App
