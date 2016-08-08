"use strict";

require.ensure([], require => {
  let Menu = require("./menu").default;
  let pandaMenu = new Menu({
    title: "Panda's menu",
    items: [
      {
        text: "Eggs",
        href: "#eggs"
      },
      {
        text: "Meat",
        href: "#meat"
      },
      {
        text: "90% of food is bamboo",
        href: "#bamboo"
      }
    ]
  });

  document.body.appendChild(pandaMenu.elem);
});


