const fb = require("fb");

const { facebookToken, facebookPageId } = require("../config/secrets");

const FB = new fb.Facebook({ version: "v3.2" });
FB.setAccessToken(facebookToken);

FB.api(`/${facebookPageId}/events`, "get", {}, res => {
  if (!res || res.error) {
    console.log(!res ? "error occurred" : res.error);
    return;
  }
  const events = res;
  console.log(events);
});
