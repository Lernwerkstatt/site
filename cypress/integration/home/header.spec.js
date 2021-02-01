/// <reference types="cypress" />

function closeCookieBanner() {
  cy.get(".osano-cm-window").contains("Accept").click();
}

describe("Cookie banner", () => {
  beforeEach(() => {
    cy.visit("/");
  });

it(`should save the cookie preferences`, () => {
    closeCookieBanner();

    cy.get(".osano-cm-window").should("not.be.visible");
  });
});

describe("Header links", () => {
  beforeEach(() => {
    cy.visit("/").setCookie("locale", "de");

    closeCookieBanner();
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
