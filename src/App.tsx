import { useState } from 'react'
import './App.css'
import ListGroup from './components/ListGroup'
import Alert from "./components/Alert"
import Button from "./components/Button"

function App() {
  const [alertVisible, setAlertVisibility] = useState(false)
  const items = [
    'a',
    'b',
    'c'
  ]
  
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  
  return (
    <div>
      <Button onClick={() => setAlertVisibility(true)}>Click</Button>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>}
      <ListGroup items={items} heading={"List Name"} onSelectItem={handleSelectItem}/>
    </div>
  )
}

export default App
