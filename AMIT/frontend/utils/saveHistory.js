export default function saveHistory(entry) {
  const history = JSON.parse(localStorage.getItem("history") || "[]");
  entry.date = new Date().toISOString();
  history.unshift(entry);
  localStorage.setItem("history", JSON.stringify(history));
}
