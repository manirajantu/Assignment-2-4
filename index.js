const API = require("./instance");

API.get("/environment/psi").then(res => {

  for (var i=0; i<res.data.items.length; i++) {
   console.log((res.data.items)[i]);
}
});
