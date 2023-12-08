import getWordForm from "./getWordForm";

export default function getCardTimestamp(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );
  const dayWord = getWordForm(diffInDays, ["день", "дня", "дней"]);

  let hours: number | string = date.getHours();
  let minutes: number | string = date.getMinutes();

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  const isToday =
    diffInDays === 0 &&
    (now.getHours() >= date.getHours() ||
      (now.getHours() === date.getHours() &&
        now.getMinutes() > date.getMinutes()));

  const isYesterday = diffInDays === 1 || (diffInDays === 0 && !isToday);

  if (isToday) {
    return `Сегодня, ${hours}:${minutes}`;
  } else if (isYesterday) {
    return `Вчера, ${hours}:${minutes}`;
  } else {
    return `${diffInDays} ${dayWord} назад, ${hours}:${minutes}`;
  }
}
