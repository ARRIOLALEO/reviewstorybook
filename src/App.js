import {useState} from 'react'
import {useSpring,animated} from 'react-spring'
import Modal from './components/modal/Modal';
import {GlobalStyle} from './utilities'
import './App.css';

function App() {
    const [showModal,setShowModal] = useState(false);

    const animation = useSpring({
      opacity:showModal ? 1 : 0,
    })
  return (
    <div className="App">
      <button onClick={()=>{setShowModal(!showModal)}}>Modal {showModal ? "Display" : "Hide"}</button>
      <animated.div style={animation}>
        <Modal/>
      </animated.div>
      <GlobalStyle/>
    </div>
  );
}

export default App;
