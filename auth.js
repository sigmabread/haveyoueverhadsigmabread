var auth0 = new auth0.WebAuth({
  domain: 'fatgarfield777.us.auth0.com',
  clientID: 'okqJvRUru9qpT6BMLIRqtstkB3O1cE4p',
  redirectUri: 'chrome://new-tab-page',
  responseType: 'token id_token',
  scope: 'openid profile email'
});
