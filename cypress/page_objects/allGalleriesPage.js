class AllGalleriesPage {
    get allGalleriesLink() {
      return cy.get(".nav-link").eq(0);
    }
  
    get myGalleriesLink() {
        return cy.get(".nav-link").eq(1);
      }
  
    get createGalleryLink() {
        return cy.get(".nav-link").eq(2);
      }
  
    get searchInput() {
      return cy.get("input");
    }

    get filterButton() {
        return cy.get("button");
      }

      get logoutButton() {
        return cy.get("a").should('contain.text', 'Logout');
      }

      get galleryLink() {
        return cy.get(".cell");
      }
    }
  
  export const allGalleriesPage = new AllGalleriesPage();