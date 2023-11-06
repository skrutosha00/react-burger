export default async function fetchJson(url: string, options = {}) {
  try {
    const response = await fetch(url, options);
    const responseJson = await response.json();

    if (!response.ok) {
      throwError(responseJson?.message);
      return;
    }

    return responseJson;
  } catch (err) {
    throwError((err as Error).message);
  }
}

function throwError(err = "") {
  const errorMessage = "fetchJson failed; " + err;
  throw new Error(errorMessage);
}
