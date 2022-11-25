import './App.css';
import logo from "./assets/logo.svg"

function App() {
  return (
    <div className="main-container">
      <div className='logo-container'><img src={logo} alt="Logo" /></div>
      <div className='calculator-container'>
        <div className='inputs-container'>
          <div className='total-bill-input'>
            <label htmlFor="">Bill</label>
            <input type="text" placeholder='$' />
          </div>
          <div className='tip-percent-select'>
            <label htmlFor="">Select Tip %</label>
            <div className='percent-options-container'>
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
              <button>25%</button>
              <button>50%</button>
              <input type="text" placeholder='Custom' />
            </div>
          </div>
          <div className='number-of-people'>
            <label htmlFor="">Number of people</label>
            <input type="text" placeholder='people' />
          </div>
        </div>
        <div className='results-container'>
          <div className='results-container-up'>
            {/* tip */}
            <div className="tip-amount-container">
              <div className='tip-amount-left'>
                <div className='tip-amount-text'>
                  Tip Amount
                </div>
                <div className='tip-amount-person'>
                  /person
                </div>
              </div>
              <div className='tip-amount-right'>
                $4,32
              </div>
            </div>
            {/* total */}
            <div className="tip-amount-container">
              <div className='tip-amount-left'>
                <div className='tip-amount-text'>
                  Tip Amount
                </div>
                <div className='tip-amount-person'>
                  /person
                </div>
              </div>
              <div className='tip-amount-right'>
                $4,32
              </div>
            </div>
          </div>
          <button className='reset-button'>RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
