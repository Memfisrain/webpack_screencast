"use strict";

exports.showMenu = function() {
	require.ensure([], require => {
		let Menu = require("./menu").default;

		let menu = new Menu({
			title: "About Page",
			items: [
				{text: "terms", href: "#terms"},
				{text: "help", href: "#help"},
				{text: "policy", href: "#policy"}
			]
		});

		document.body.appendChild(menu.elem);
	});
};


