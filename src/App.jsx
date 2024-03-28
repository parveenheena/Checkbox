import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [state, setState] = useState(false)
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)

  function handleCheck(e) {
    const isChecked = e.target.checked;
    setState(isChecked)
    setCheck1(isChecked)
    setCheck2(isChecked)
    setCheck3(isChecked)
  }
  return (
    <div className='master'>
      <div>
        <label htmlFor="">
          Master Checkbox
          <input type="checkbox" checked={state ? true : (check1 && check2 && check3) ? true : false} onChange={handleCheck} />
        </label>
      </div>
      <div className='child'>
        <label htmlFor="">
          checkbox 1
          <input type="checkbox" checked={state ? true : check1 ? true : false} onChange={(e) => setCheck1(e.target.checked)} />
        </label>
        <label htmlFor="">
          checkbox 2
          <input type="checkbox" checked={state ? true : check2 ? true : false} onChange={(e) => setCheck2(e.target.checked)} />
        </label>
        <label htmlFor="">
          checkbox 3
          <input type="checkbox" checked={state ? true : check3 ? true : false} onChange={(e) => setCheck3(e.target.checked)} />
        </label>
      </div>      
    </div>
  )
}

export default App
