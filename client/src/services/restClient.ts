/**
  * @example
  * var dice = 3;
  * var sides = 6;
  * var query = `query RollDice($dice: Int!, $sides: Int) {
  * rollDice(numDice: $dice, numSides: $sides)
  }`;
 */
class RestClient {
  static post(query: string, variables?: JSON) {
    const endpoint = process.env.REACT_APP_API_ENDPOINT ?? "";

    if (!endpoint) {
      alert("ERROR: Provide endpoint in .env");
    }

    return fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
  }
}

export default RestClient;
