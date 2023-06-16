import './Form.css'
import React, { useState } from 'react'

const Form = props =>{
    const [currSavings,setCurrSavings] = useState('');
    const [yearlySavings,setYearlySavings] = useState('');
    const [expReturn,setExpReturn] = useState('');
    const [duration,setDuration] = useState('');
    const currSavingsHandler = event => {
        setCurrSavings(event.target.value);
    }
    const yearlySavingsHandler = event => {
        setYearlySavings(event.target.value)
    }
    const expReturnHandler = event => {
        setExpReturn(event.target.value)
    }
    const durationHandler = event => {
        setDuration(event.target.value);
    }
    const formSubmitHandler = event => {
        event.preventDefault();
        const formData = {
            'current-savings': currSavings,
            'yearly-contribution': yearlySavings,
            'expected-return': expReturn,
            'duration': duration
        }
        props.onSubmit(formData);
    }
    const resetHandler = event => {
        event.preventDefault();
        setCurrSavings('');
        setYearlySavings('');
        setExpReturn('');
        setDuration('');
    }

    return (
        <div>
        <form className="form" onSubmit = {formSubmitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" value={currSavings} onChange={currSavingsHandler}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" value={yearlySavings} onChange={yearlySavingsHandler}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" value={expReturn} onChange={expReturnHandler}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" value={duration} onChange={durationHandler}/>
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form></div>
    )
}


export default Form;