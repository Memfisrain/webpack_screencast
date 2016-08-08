/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

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

	var old = __webpack_require__(1);
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

/***/ },
/* 1 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var workSettings = {delay:500};

	"use strict";

	function Work() {
	  setTimeout(function () {
	    alert("work here");
	  }, workSettings.delay);
	}

	/*** EXPORTS FROM exports-loader ***/
	module.exports = Work;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDBlMTAyOGNjZmQwMjRjMTAwN2NhIiwid2VicGFjazovLy9mcm9udGVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uL3ZlbmRvci9vbGQvb2xkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDBlMTAyOGNjZmQwMjRjMTAwN2NhXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vL2ltcG9ydCBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcblxyXG4vKmxldCBtb2R1bGVOYW1lID0gbG9jYXRpb24ucGF0aG5hbWUuc2xpY2UoMSk7XHJcblxyXG5sZXQgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcIi4vcm91dGVzL1wiLCBmYWxzZSwgL1xcLmpzJC8pO1xyXG5sZXQgaGFuZGxlcjtcclxuXHJcbnRyeSB7XHJcblx0aGFuZGxlciA9IHJlcXVpcmUoXCIhIWJ1bmRsZSEuL3JvdXRlcy9cIiArIG1vZHVsZU5hbWUpO1xyXG59IGNhdGNoKGUpIHtcclxuXHRjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG59XHJcblxyXG5pZiAoaGFuZGxlcikge1xyXG5cdGhhbmRsZXIoZnVuY3Rpb24ocm91dGUpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHJvdXRlKCk7XHJcblx0XHR9IGNhdGNoKGUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSovXHJcblxyXG5cclxuY29uc3Qgb2xkID0gcmVxdWlyZShcImltcG9ydHM/d29ya1NldHRpbmdzPT57ZGVsYXk6NTAwfSFleHBvcnRzP1dvcmshb2xkXCIpO1xyXG4vKmNvbnN0IG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XHJcblxyXG5cclxubGV0IHRvZGF5ID0gbW9tZW50KG5ldyBEYXRlKCkpO1xyXG5cclxuYWxlcnQodG9kYXkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSkqL1xyXG5cclxuXHJcbi8qdHJ5IHtcclxuXHRsZXQgcm91dGUgPSBjb250ZXh0KFwiLi9cIiArIG1vZHVsZU5hbWUpO1xyXG5cdHJvdXRlKCk7XHJcblxyXG59IGNhdGNoKGUpIHtcclxuXHRhbGVydChlLm1lc3NhZ2UpO1xyXG59XHJcbiovXHJcblxyXG4vKmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5CdXR0b25cIikub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XHJcbiAgICBsZXQgbG9naW4gPSByZXF1aXJlKFwiLi9sb2dpblwiKTtcclxuICAgIGxvZ2luLmRlZmF1bHQoKTtcclxuICB9LCBcImF1dGhcIik7XHJcbn07XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ291dEJ1dHRvblwiKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcclxuICAgIGxldCBsb2dvdXQgPSByZXF1aXJlKFwiLi9sb2dvdXRcIik7XHJcbiAgICBsb2dvdXQuZGVmYXVsdCgpO1xyXG4gIH0sIFwiYXV0aFwiKTtcclxufTsqL1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBmcm9udGVuZC9hcHAuanNcbiAqKi8iLCJmdW5jdGlvbiBXb3JrKCkge1xyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICBhbGVydChcIndvcmsgaGVyZVwiKTtcclxuICB9LCB3b3JrU2V0dGluZ3MuZGVsYXkpO1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vdmVuZG9yL29sZC9vbGQuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFNQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==