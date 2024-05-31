{
  /* 
  
      <div class="pop-up-container about show">
      <div>
        <div class="pop-up">
          <div class="pop-up-header">
            <h3>弹出框标题</h3>
          </div>
          <div class="pop-up-content">
            <p>
              这里是一些内容 Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Blanditiis itaque ad explicabo enim saepe nulla eaque ullam,
              dolore dignissimos. Voluptate vel reiciendis quasi delectus
              corrupti unde et aut, iste officiis maiores ratione nisi quis.
              Doloribus suscipit nulla similique tempora quasi nostrum quisquam
              vero excepturi recusandae fuga inventore libero, aliquid iure
              deleniti eius ratione ullam asperiores provident ducimus ut
              tempore pariatur? Ullam repudiandae repellat id quisquam. Eaque
              nam quia, aspernatur incidunt nesciunt ut sapiente officiis
              laborum animi nisi
            </p>
          </div>
          <div class="button special close-pop-up">Confirm</div>
        </div>
      </div>
    </div>

    <div class="pop-up-container language show">
      <div>
        <div class="pop-up">
          <div class="pop-up-header">
            <h3>弹出框标题</h3>
          </div>
          <div class="pop-up-content">
            <button class="button">english</button>
            <hr />
            <button class="button">中文</button>
          </div>
          <!-- <div class="button special close-pop-up">Confirm</div> -->
        </div>
      </div>
    </div>
  
  */
}

//dom elements
const aboutButton = document.querySelector(".about-button");
const languageButton = document.querySelector(".language-button");

//pop-up
const aboutPopUpContainer = document.querySelector(".pop-up-container.about");
const languagePopUpContainer = document.querySelector(
  ".pop-up-container.language"
);

const closePopUp = (popUpContainer) => {
  if (popUpContainer == "about") {
    aboutPopUpContainer.classList.remove("show");
  } else if (popUpContainer == "language") {
    languagePopUpContainer.classList.remove("show");
  }
};

const openPopUp = (popUpContainer) => {
  if (popUpContainer == "about") {
    aboutPopUpContainer.classList.add("show");
  } else if (popUpContainer == "language") {
    languagePopUpContainer.classList.add("show");
  }
};

const languegeSelectHandler = (languege) => {
  if (languege == "english") {
    console.log("is english");
  } else if (languege == "chinese") {
    console.log("is chinese");
  }
  closePopUp("language");
};

const closeAboutPopUpHandler = () => {
  closePopUp("about");
};
