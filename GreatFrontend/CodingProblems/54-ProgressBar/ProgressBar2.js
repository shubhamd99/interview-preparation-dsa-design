const MIN = 0;
const MAX = 100;

// It is recommended to use a native <progress> or <input type="range"> elements rather than the progressbar role.

// <progress id="progress-bar" aria-label="Content loading…"></progress>

export default function ProgressBar({ value }) {
  // Handle invalid values and convert them to be within [0, 100].
  const clampedValue = Math.min(Math.max(value, MIN), MAX);

  return (
    <progress max={MAX} value={clampedValue}>
      {clampedValue}%
    </progress>
  );
}
