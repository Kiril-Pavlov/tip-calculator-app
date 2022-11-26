import { useState } from 'react';
import './App.css';
import logo from "./assets/logo.svg"

function App() {
  const [billAmount,setBillAmount]=useState(0)
  const [tipPercent, setTipPercent]=useState(0)
  const [numberPeople,setNumberPeople]=useState(0)

  const handleBillAmount = (e) => {
    setBillAmount(e.target.value)
  }

  const handleNumberPeople = (e) => {
    setNumberPeople(e.target.value)
  }

  const handleResetCalculation = ()=>{
    setBillAmount(0)
    setTipPercent(0)
    setNumberPeople(0)
  }

  return (
    <div className="main-container">
      <div className='logo-container'><img src={logo} alt="Logo" /></div>
      <div className='calculator-container'>
        <div className='inputs-container'>
          <div className='total-bill-input'>
            <label htmlFor="">Bill</label>
            <input type="text" placeholder='$' value={billAmount} onChange={handleBillAmount}/>
          </div>
          <div className='tip-percent-select'>
            <label htmlFor="">Select Tip %</label>
            <div className='percent-options-container'>
              <button onClick={()=>setTipPercent(5)}>5%</button>
              <button onClick={()=>setTipPercent(10)}>10%</button>
              <button onClick={()=>setTipPercent(15)}>15%</button>
              <button onClick={()=>setTipPercent(25)}>25%</button>
              <button onClick={()=>setTipPercent(50)}>50%</button>
              <input type="text" placeholder='Custom' />
            </div>
          </div>
          <div className='number-of-people'>
            <label htmlFor="">Number of people</label>
            <input type="text" placeholder='people' value={numberPeople} onChange={handleNumberPeople}/>
          </div>
        </div>
        <div className='results-container'>
          <div className='results-container-up'>
            {/* tip */}
            <div className="tip-amount-container">
              <div className='tip-amount-left'>
                <div className='tip-amount-text'>
                  Tip amount
                </div>
                <div className='tip-amount-person'>
                  /person
                </div>
              </div>
              <div className='tip-amount-right'>
                {"$"+((billAmount/numberPeople)*(tipPercent/100)).toFixed(2)}
              </div>
            </div>
            {/* total */}
            <div className="tip-amount-container">
              <div className='tip-amount-left'>
                <div className='tip-amount-text'>
                  Total
                </div>
                <div className='tip-amount-person'>
                  /person
                </div>
              </div>
              <div className='tip-amount-right'>
                {"$"+((billAmount/numberPeople)*(tipPercent/100+1)).toFixed(2)}
              </div>
            </div>
          </div>
          <button className='reset-button' onClick={handleResetCalculation}>RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
