export function covertTimeStringToMinutes(timeString: string) {
  const [hours, minutes] = timeString.split(":").map((item) => Number(item))

  return hours * 60 + minutes
}
