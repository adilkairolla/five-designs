const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

export function formatProjectCreatedDate(
  value: string,
  options: { includeTime?: boolean } = {},
) {
  const match = value.match(
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):\d{2}([+-]\d{2}:\d{2})$/,
  )

  if (!match) {
    return value
  }

  const [, year, month, day, hour, minute, offset] = match
  const label = `${MONTHS[Number(month) - 1]} ${Number(day)}, ${year}`

  if (!options.includeTime) {
    return label
  }

  return `${label} · ${hour}:${minute} UTC${offset}`
}
