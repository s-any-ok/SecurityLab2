const request = require("request");

const authOptions = {
  method: "POST",
  url: "https://kpi.eu.auth0.com/oauth/token",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  form: {
    client_id: "JIvCO5c2IBHlAe2patn6l6q5H35qxti0",
    client_secret:
      "ZRF8Op0tWM36p1_hxXTU-B0K_Gq_-eAVtlrQpY24CasYiDmcXBhNS6IJMNcz1EgB",
    audience: "https://kpi.eu.auth0.com/api/v2/",
    grant_type: "client_credentials",
  },
};

const createUserOptions = {
  method: "POST",
  url: "https://kpi.eu.auth0.com/api/v2/users",
  headers: {
    "content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjVCZTlBZFhrMERaUjhmR1dZYjdkViJ9.eyJpc3MiOiJodHRwczovL2twaS5ldS5hdXRoMC5jb20vIiwic3ViIjoiSkl2Q081YzJJQkhsQWUycGF0bjZsNnE1SDM1cXh0aTBAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8va3BpLmV1LmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjczNjIzMTE2LCJleHAiOjE2NzM3MDk1MTYsImF6cCI6IkpJdkNPNWMySUJIbEFlMnBhdG42bDZxNUgzNXF4dGkwIiwic2NvcGUiOiJyZWFkOnVzZXJzIGNyZWF0ZTp1c2VycyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.CTEOVu3Gk8CAa7bFrlWp7zC0LI9cq1uzcbe43QtnxLTkkdxYtcM71yzrCQhuYDUy3KFh0w4buRLpOYxa_brmfabTUvtZVCshEtLXgUyfcUv2qdvw43zMaPajiPWHt6g71TauHULNFFZWA9r-jFrAepdtZEpfmNvDTKDXZGeYbxQ_m5L3mymaIA-6Qapz4SUmd0J7wtxnS7slYqbr85uIOUntDoxLFEiy29UINy9cAxb294aTwvNG0QlqmpKo8NNMM5VqHkoW31aREYgMEYUtkFw9E9mxnnHS33pDIdgfi2NwJcm2o8rXOjDZcqLKWpd9k94hCQyBJb5Hk2xecllZDA",
  },
  body: JSON.stringify({
    email: "levak2@gmail.com",
    user_metadata: {},
    blocked: false,
    email_verified: false,
    app_metadata: {},
    given_name: "Alex2",
    family_name: "Levak",
    name: "Alex2 Levak",
    nickname: "Alex2",
    user_id: "AlexLevak2",
    connection: "Username-Password-Authentication",
    password: "AlexLevak2341234",
    verify_email: false,
  }),
};

/*request(authOptions, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});*/

request(createUserOptions, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
