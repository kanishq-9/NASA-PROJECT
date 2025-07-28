async function fetchURLData(url, end) {
  const response = await fetch(`${url}/${end}`);
  const newdata = await response.json();
  return newdata;
}
export { fetchURLData };
