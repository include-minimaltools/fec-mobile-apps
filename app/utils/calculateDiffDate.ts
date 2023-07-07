export type CountdownResult = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function calculateDiffDate(date: Date): CountdownResult {
  const currentDate = new Date();
  const timeDifference =
    date.getTime() - currentDate.getTime();

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDifference / 1000) % 60);

  return { days, hours, minutes, seconds }
}