/// <reference types="cypress" />

describe("Translations", () => {
  const links = [
    {
      de: "Unsere Werte",
      en: "Our Values",
    },
    {
      de: "Projekte",
      en: "Projects",
    },
    {
      de: "Blog",
      en: "Blog",
    },
    {
      de: "Podcast",
      en: "Podcast",
    },
    {
      de: "Menschen",
      en: "Team",
    },
  ];

  const languages = { en: "de", de: "en" };

  Object.entries(languages).forEach(([from, to]) =>
    it(`should translate from ${from} to ${to}`, () => {
      cy.setCookie("locale", from).visit("/");

      links.forEach((link) => {
        cy.get("header .nav-link").should("contain", link[from]);
      });

      cy.clearCookies();
      cy.get("footer .nav-link").contains(to.toUpperCase()).click();

      links.forEach((link) => {
        cy.get("header .nav-link").should("contain", link[to]);
      });
    })
  );
});
