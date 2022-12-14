import { useState } from 'react';
import './App.css';
import logo from "./assets/logo.svg"

function App() {
  const [billAmount,setBillAmount]=useState("")
  const [tipPercent, setTipPercent]=useState("")
  const [numberPeople,setNumberPeople]=useState("")

  const handleBillAmount = (e) => {
    setBillAmount(Number(e.target.value))
  }

  const handleNumberPeople = (e) => {
    setNumberPeople(Number(e.target.value))
  }

  const handleResetCalculation = ()=>{
    setBillAmount(0)
    setTipPercent(0)
    setNumberPeople(0)
  }

  console.log(typeof(billAmount))
  console.log(typeof(numberPeople))

  return (
    <div className="main-container">
      <div className='logo-container'><img src={logo} alt="Logo" /></div>
      <div className='calculator-container'>
        <div className='inputs-container'>
          <div className='total-bill-input'>
            <div className='input-label-error-container'>
              <label htmlFor="">Bill</label><span>{billAmount<=0 ? "Cant be zero" : ""}</span>
            </div>
            <input type="number" placeholder='$' value={billAmount} onChange={handleBillAmount}/>
          </div>
          <div className='tip-percent-select'>
            <label htmlFor="">Select Tip %</label>
            <div className='percent-options-container'>
              <button onClick={()=>setTipPercent(5)} className={tipPercent===5 ? " select-percent-button activeBtn":"select-percent-button"}>5%</button>
              <button onClick={()=>setTipPercent(10)} className={tipPercent===10 ? " select-percent-button activeBtn":"select-percent-button"}>10%</button>
              <button onClick={()=>setTipPercent(15)} className={tipPercent===15 ? " select-percent-button activeBtn":"select-percent-button"}>15%</button>
              <button onClick={()=>setTipPercent(25)} className={tipPercent===25 ? " select-percent-button activeBtn":"select-percent-button"}>25%</button>
              <button onClick={()=>setTipPercent(50)}  className={tipPercent===50 ? " select-percent-button activeBtn":"select-percent-button"}>50%</button>
              <input type="number" placeholder='Custom' onChange={(e)=>{setTipPercent(e.target.value)}} onFocus={(e)=>{setTipPercent(0)}}/>
            </div>
          </div>
          <div className='number-of-people'>
          <div className='input-label-error-container'>
              <label htmlFor="">Number of people</label><span>{billAmount<=0 ? "Cant be zero" : ""}</span>
            </div>
            <input type="number" placeholder='people' value={numberPeople} onChange={handleNumberPeople}/>
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
                {(billAmount<=0 || numberPeople<=0) ? "$"+0 : "$"+((billAmount/numberPeople)*(tipPercent/100)).toFixed(2)}
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
                {(billAmount<=0 || numberPeople<=0) ? "$"+0 : "$"+((billAmount/numberPeople)*(tipPercent/100+1)).toFixed(2)}
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
