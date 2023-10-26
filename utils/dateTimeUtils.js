export function adjustCurrentDate(dayToAdjust) {
  const currentDate = new Date(); // Get the current date
  const sevenDaysAgo = new Date(currentDate);

  sevenDaysAgo.setDate(currentDate.getDate() + dayToAdjust);

  return sevenDaysAgo;
}

export function getReadTime(text) {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  return time;
}
