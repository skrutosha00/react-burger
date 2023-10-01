export default async function fetchJson(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throwError();
      return;
    }
    const responseJson = await response.json();
    return responseJson;
  } catch (err) {
    throwError(err);
  }
}

function throwError(err = "") {
  const errorMessage = "fetchJson failed " + err;
  throw new Error(errorMessage);
}
