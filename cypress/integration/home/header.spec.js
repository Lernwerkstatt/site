/// <reference types="cypress" />

describe("Header links", () => {
  beforeEach(() => {
    cy.visit("/").setCookie("locale", "de");

    cy.get(".osano-cm-window").contains("Accept").click();
  });

  const pages = [
    {
      link: "Unsere Werte",
      href: "values",
      title: "Unsere Werte",
    },
    {
      link: "Projekte",
      href: "projects",
      title: "Projekte",
    },
    {
      link: "Blog",
      href: "blogs",
      title: "Blog",
    },
    {
      link: "Podcast",
      href: "podcasts",
      title: "Podcast",
    },
    {
      link: "Menschen",
      href: "team",
      title: "Wir sind Die Lernwerkstatt",
    },
    // Doesn't work yet for cookie reasons
    // {
    //   link: "Galerie",
    //   href: "gallery",
    //   title: "Galerie"
    // }
  ];

  pages.forEach((page) => {
    it(`should go to ${page.link}`, () => {
      cy.get("header .nav-link").contains(page.link).click();

      cy.location("pathname").should("include", page.href);

      cy.get("h1").should("contain", page.title);
    });
  });
});
