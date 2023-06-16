import "./Table.css";
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

const Table = (props) => {
  let initInvestment = parseInt(props.initialInvestment)
  return (
    <div>
      {props.tableData ? (
        <table className="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {props.tableData.map((yearData) => (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.savingsEndOfYear)}</td>
                <td>{formatter.format(yearData.yearlyInterest)}</td>
                <td>
                  {formatter.format(yearData.savingsEndOfYear -
                    initInvestment -
                    yearData.yearlyContribution * yearData.year)}
                </td>
                <td>
                  {formatter.format(initInvestment +
                    yearData.yearlyContribution * yearData.year)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={"fallback"}>no data to Show</p>
      )}
    </div>
  );
};

export default Table;
