import "./styles.css";

// Build a simple temperature converter widget that contains two text inputs temperatures in Celsius,
// and Fahrenheit respectively, allowing for conversion between the temperature scales.

// Requirements
// Initially, both fields are empty. When a number value is entered into a text input, the other input will be calculated and reflected.
// Round to 4 decimal places where necessary.
// If a non-numerical string is entered into one input, the other input will be blank.

// The last two requirements might not be given to you during interviews, you're expected to clarify.

// P.S. To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.

// Test Cases
// Basic cases:
// Enter 0 C and see 32 F (without decimals)
// Enter 32 F and see 0 C.
// Invalid inputs
// Enter alphabets in either field, the other should be empty.
// Decimal cases:
// Enter 1 C and see 33.8 F (1 d.p.)
// Enter 1 F and see -17.2222 C (4 d.p.)

function format(number) {
  // Show 4 d.p. if number has more than 4 decimal places.
  return /\.\d{5}/.test(number) ? Number(number).toFixed(4) : number;
}

function convert(value, setDestination, calculateValue) {
  const numericValue = Number(value);
  const isValid = !Number.isNaN(numericValue) && Boolean(value);
  setDestination(isValid ? format(calculateValue(numericValue)) : "");
}

export default function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  return (
    <div>
      <div className="temperature-converter">
        {/* Use a label for better a11y. */}
        <label className="temperature-converter-column">
          <input
            className="temperature-converter-column-top-row"
            type="number"
            value={celsius}
            onChange={(event) => {
              const newValue = event.target.value;
              setCelsius(newValue);
              convert(newValue, setFahrenheit, (value) => (value * 9) / 5 + 32);
            }}
          />
          <div className="temperature-converter-column-bottom-row">Celsius</div>
        </label>
        <div className="temperature-converter-column">
          <div className="temperature-converter-column-top-row">=</div>
        </div>
        {/* Use a label for better a11y. */}
        <label className="temperature-converter-column">
          <input
            className="temperature-converter-column-top-row"
            type="number"
            value={fahrenheit}
            onChange={(event) => {
              const newValue = event.target.value;
              setFahrenheit(newValue);
              convert(newValue, setCelsius, (value) => ((value - 32) * 5) / 9);
            }}
          />
          <div className="temperature-converter-column-bottom-row">
            Fahrenheit
          </div>
        </label>
      </div>
    </div>
  );
}
