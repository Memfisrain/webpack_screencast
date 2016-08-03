"use strict";

export default function (msg) {
	if (process.env.NODE_ENV == "development") {
		alert('dev mode');
	}

	alert(process.env.USER);
};