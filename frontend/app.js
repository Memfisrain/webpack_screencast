"use strict";

let moduleName = location.pathname.slice(1);
let route = require("./routes/" + moduleName);
route();


/*
document.getElementById("loginButton").onclick = function() {
  require.ensure(["./login"], function(require) {
    let login = require("./login");
    login.default();
  }, "auth");
};

document.getElementById("logoutButton").onclick = function() {
  require.ensure([], function(require) {
    let logout = require("./logout");
    logout.default();
  }, "auth");
};*/
