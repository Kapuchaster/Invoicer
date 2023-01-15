//TODO get domain from .env file
const endpoint = "http://localhost:4000/graphql/";

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
