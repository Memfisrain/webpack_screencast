"use strict";

require.ensure([], require => {
	let Menu = require("./menu").default;

	let menu = new Menu({
		title: "Home Page",
		items: [
			{text: "releases", href: "#releases"},
			{text: "contacts", href: "#contacts"},
			{text: "series", href: "#series"}
		]
	});

	document.body.appendChild(menu.elem);
});