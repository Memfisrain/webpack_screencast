"use strict";

//import angular from "angular";

/*let moduleName = location.pathname.slice(1);

let context = require.context("./routes/", false, /\.js$/);
let handler;

try {
	handler = require("!!bundle!./routes/" + moduleName);
} catch(e) {
	console.log(e.message);
}

if (handler) {
	handler(function(route) {
		try {
			route();
		} catch(e) {
			console.log(e.message);
		}
	});
}*/


const old = require("imports?workSettings=>{delay:500}!exports?Work!old");
/*const moment = require("moment");


let today = moment(new Date());

alert(today.format("YYYY-MM-DD"))*/


/*try {
	let route = context("./" + moduleName);
	route();

} catch(e) {
	alert(e.message);
}
*/

/*document.getElementById("loginButton").onclick = function() {
  require.ensure([], function(require) {
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
