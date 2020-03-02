/// <reference types="cypress" />

describe("Footer links", () => {
  beforeEach(() => {
    cy.visit("/").setCookie("locale", "de");
  });

  const pages = [
    {
      link: "Mitmachen",
      href: "support",
      title: "Mitmachen"
    },
    {
      link: "Kontakt",
      href: "contact",
      title: "Kontakt"
    },
    {
      link: "Abonnieren",
      href: "subscribe",
      title: "Abonnieren"
    },
    {
      link: "Partner",
      href: "partners",
      title: "Partner"
    },
    {
      link: "Freunde",
      href: "friends",
      title: "Befreundete Initiativen"
    },
    {
      link: "Impressum",
      href: "imprint",
      title: "Impressum"
    }
  ];

  pages.forEach(page => {
    it(`should go to ${page.link}`, () => {
      cy.get("footer .nav-link")
        .contains(page.link)
        .click();

      cy.location("pathname").should("include", page.href);

      cy.get("h1").should("contain", page.title);
    });
  });
});
