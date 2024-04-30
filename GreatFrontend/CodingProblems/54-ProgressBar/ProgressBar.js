// Implement a progress bar component which shows the completion progress by filling the bar proportionately to the progress (a number between 0-100, inclusive).

// ARIA: progressbar role -> https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role

// The progressbar role defines an element that displays the progress status for tasks that take a long time.

// If aria-valuemin is missing or not a number, it defaults to 0 (zero).
// If aria-valuemax is missing or not a number, it defaults to 100.
// The aria-valuemin and aria-valuemax properties only need to be set for the progressbar role when the progress bar's minimum is not 0 or the maximum value is not 100.
// The read-only aria-valuenow should be provided and updated unless the value is indeterminate, in which case don't include the attribute. If set, make sure the aria-valuenow value is between the minimum and maximum values.

// Note: It is recommended to use a native <progress> or <input type="range"> elements rather than the progressbar role.

const MIN = 0;
const MAX = 100;

export default function ProgressBar({ value }) {
  // Handle invalid values and convert them to be within [0, 100].
  const clampedValue = Math.min(Math.max(value, MIN), MAX);

  return (
    <div className="progress">
      <div
        className="progress-bar"
        style={{ width: `${clampedValue}%` }}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={MIN}
        aria-valuemax={MAX}
      >
        {clampedValue}%
      </div>
    </div>
  );
}
