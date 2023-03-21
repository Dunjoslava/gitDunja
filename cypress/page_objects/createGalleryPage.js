class CreateGalleryPage {

    get createGalleryHeading(){
        return cy.get("h1");
    }

    get galleryTitle(){
        return cy.get("#title");
    }

    get galleryDescription(){
        return cy.get("#description");
    }

    get galleryImageInput(){
        return cy.get('input').last();
    }

    get cancelButton() {
        return cy.get("button").last();
      }

    get submitButton() {
        return cy.get("button").eq(-2);
      }

    get addImageButton(){
        return cy.get("button").eq(-3);
    }

    get imageUrlInptWrapper(){
        return cy.get("div[class='input-group mb- 3']");
    }

    get deleteGalleryButton(){
        return this.imagerlInputWrapper.find("button").first();
    }

    get deleteGalleryButton(){
        return this.imagerlInputWrapper.find("button").eq(1);
    }

    get deleteGalleryButton(){
        return this.imagerlInputWrapper.find("button").eq(2);
    }

   createGallery(title, description, imageUrl) {
    this.galleryTitleInput.type(title);
    this.galleryDescriptionInput.type(description);
    this.galleryImageInput.type(imageUrl);
    this.submitButton.click();
   }

    
}

export const createGalleryPage = new CreateGalleryPage();