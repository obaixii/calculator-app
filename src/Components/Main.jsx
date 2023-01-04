import React, { useState } from 'react'

function Main() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = value => {
    // Multi Operators Restrictions 
    if (
     ( ops.includes(value) && calc === "") ||
     ( ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    // Sets Calculations Values
    setCalc(calc + value)

    // Updates Results
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }
  // Creating Digits through Function
  const Createdigits = () => {
    const digits = []
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i)} key={i}>
          {i}
        </button>
      )
    }
    return digits;
  }
  // Calculating Evaluated Values through Function
  const calculate = () => {
    setCalc(eval(calc).toString());
  };
  // Deleting Last Value through Function
  const deleteLast = () => {
    if(calc === "0" ){
      return setResult(calc);
    }
    const value = calc.slice(0,-1)
    setCalc(value)
  };
  return (
    <div className='Calculator'>
      <div className="calculator-body">
        <div className="calculator-display">
          {/* <input style={{width:"100%" ,backgroundColor:"black" , color:"white" ,textAlign:"right"}} type="text" name="" id="" value={calc || "0"} onClick={(e)=>updateCalc(e.target.vale)}/> */}
          {calc || "0"}
          {result ? <span>({result})</span> : ""}

        </div>
        <div className="calculator-operators">
          <button onClick={() => updateCalc("/")}>&divide;</button>
          <button onClick={() => updateCalc("*")}>&times;</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={deleteLast}>Del</button>
        </div>
        <div className="calculator-digits">
          {Createdigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
      {/* <div className="calc-body">
        <div className="calc-main">
          <div className="row">
            <div className="col-12">
              <div className="display">
              </div>
            </div>
            <div className="col-12">
              <div className="M-operators">
              </div>
            </div>
            <div className="col-12">
              <div className="M-digits">
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Main
