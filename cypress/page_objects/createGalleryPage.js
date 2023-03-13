class CreateGalleryPage {
    get createGalleryLink(){
        return cy.get(".nav-link").eq(2);
    }

    get titleInput(){
        return cy.get("title");
    }

    get descriptionsInput(){
        return cy.get("descriptions");
    }

    get imagesInput(){
        return cy.get("url");
    }

    get inputButton() {
        return cy.get("button");
      }

    get addImageButton(){
        return cy.get("button");
    }

    get submitButton() {
        return cy.get("button");
      }

    get cancelButton() {
        return cy.get("button");
      }
}

export const createGalleryPage = new CreateGalleryPage();