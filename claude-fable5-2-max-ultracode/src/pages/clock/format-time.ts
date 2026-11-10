const pad = (value: number) => String(value).padStart(2, "0");

export function formatClock(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return hours > 0 ? `${hours}:${pad(minutes)}:${pad(seconds)}` : `${minutes}:${pad(seconds)}`;
}

/** An approximate reading time; the caller writes "about" in front of it. */
export function formatDuration(seconds: number) {
  if (seconds < 59.5) {
    const whole = Math.round(seconds);
    return whole === 1 ? "1 second" : `${whole} seconds`;
  }
  const totalMinutes = Math.round(seconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours === 0) return `${minutes} min`;
  return minutes === 0 ? `${hours} h` : `${hours} h ${minutes} min`;
}

export function formatCount(value: number) {
  return value.toLocaleString("en-US");
}
