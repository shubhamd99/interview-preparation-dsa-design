import "./styles.css";
import { useState } from "react";

// Build a simple mortgage calculator widget that takes in a loan amount, interest rate, loan term,
// and calculates the monthly mortgage payment, total payment amount, and total interest paid.

// The step attribute specifies the interval between legal numbers in an <input> element.
// Example: if step="3", legal numbers could be -3, 0, 3, 6, etc.
//  <input type="number" id="points" name="points" step="3">

// Using JavaScript, it is possible to dynamically change parts of a page without requiring the entire page to reload
// — for instance, to update a list of search results on the fly, or to display a discreet alert or
// notification which does not require user interaction.
// While these changes are usually visually apparent to users who can see the page,
// they may not be obvious to users of assistive technologies.
// ARIA live regions fill this gap and provide a way to programmatically expose dynamic content changes in a way that can be announced by assistive technologies.

// The Math.pow() static method returns the value of a base raised to a power. That is
// 𝙼𝚊𝚝𝚑.𝚙𝚘w(x, y) = x^y
// console.log(Math.pow(7, 3));
// Expected output: 343

// The Intl object in JavaScript is a built-in tool that can be used to format dates,
// numbers, and currencies according to user preferences.
// This can save application size and load time.

// The Intl.NumberFormat object enables language-sensitive number formatting
// const number = 123456.789;
// console.log(
//     new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
//       number,
//     ),
//   );
// Expected output: "123.456,79 €"

// The Japanese yen doesn't use a minor unit
// console.log(
//     new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(
//       number,
//     ),
//   );
// Expected output: "￥123,457"

export default function App() {
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [totalPayment, setTotalPayment] = useState("");
  const [totalInterest, setTotalInterest] = useState("");

  function onSubmit(event) {
    event.preventDefault(); // Prevent page reload on form submission.

    const data = new FormData(event.target);

    // Get and convert input values.
    const loanAmount = parseFloat(data.get("loan-amount"));
    const monthlyInterestRate =
      parseFloat(data.get("interest-rate")) / 100 / 12;
    const loanTermInMonths = parseFloat(data.get("loan-term")) * 12;

    // Calculate monthly mortgage payment.
    const monthlyPaymentAmount =
      (loanAmount * monthlyInterestRate) /
      (1 - 1 / Math.pow(1 + monthlyInterestRate, loanTermInMonths));
    const totalPayment = monthlyPaymentAmount * loanTermInMonths;

    const currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    // Display monthly payment amount.
    setMonthlyPayment(currencyFormatter.format(monthlyPaymentAmount));

    // Display total payment amount.
    setTotalPayment(currencyFormatter.format(totalPayment));

    // Display total interest amount.
    setTotalInterest(currencyFormatter.format(totalPayment - loanAmount));
  }

  return (
    <div className="mortgage-calculator">
      <form className="mortgage-calculator-form" onSubmit={onSubmit}>
        <div>
          <label>
            Loan Amount:{" "}
            <input
              type="number"
              name="loan-amount"
              defaultValue="100000"
              min="1"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Loan Term (years):{" "}
            <input
              type="number"
              name="loan-term"
              defaultValue="30"
              min="1"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Interest Rate (%):{" "}
            <input
              type="number"
              name="interest-rate"
              defaultValue="3"
              step="0.01"
              min="0.01"
              required
            />
          </label>
        </div>
        <div>
          <button type="submit">Calculate</button>
        </div>
      </form>
      <hr />
      <div aria-live="polite" className="mortgage-calculator-results">
        <div>
          Monthly Payment Amount: <strong>{monthlyPayment}</strong>
        </div>
        <div>
          Total Payment Amount: <strong>{totalPayment}</strong>
        </div>
        <div>
          Total Interest Paid: <strong>{totalInterest}</strong>
        </div>
      </div>
    </div>
  );
}
