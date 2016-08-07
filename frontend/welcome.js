"use strict";

module.exports = function (msg) {
	if (process.env.NODE_ENV == "development") {
		alert('dev mode');
	}

	alert(msg);
};