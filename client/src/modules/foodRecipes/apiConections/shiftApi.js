const URI = "http://localhost:8080/api";
const PREFIX = "/ingredientes";

export const getAllIngredientsApi = async () => {
  const ingredients = await fetch(`${URI + PREFIX}`);
  const ingredientsJson = ingredients.json();
  return ingredientsJson;
};

export const saveIngredientsApi = async (data) => {
  const reponse = await fetch(`${URI + PREFIX}`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  const reponseJson = reponse.json();
  return reponseJson; //{ message: "success, Teacher added" }
};
