import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";

function App() {
  const [results, setResults] = useState(null);
  const [initialInvestment,setinitialInvestment] = useState(null)
  const calculateHandler = (userInput) => {
    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,

      });
    }

    setResults(yearlyData);
    setinitialInvestment(userInput['current-savings'])
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <Form onSubmit={calculateHandler} />
      <Table tableData={results} initialInvestment={initialInvestment} />
    </div>
  );
}

export default App;
