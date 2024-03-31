import clear from "./clear";

const createAboutPage = () => {
    clear();
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add('page-content');

    const header = document.createElement("h2");
    header.textContent = "Some header ABOUT PAGEEE";
    pageContent.appendChild(header);

    const someImg = document.createElement("img");
    someImg.src = "https://img.freepik.com/free-psd/mix-fruits-png-isolated-transparent-background_191095-9865.jpg";
    someImg.height = "300";
    pageContent.appendChild(someImg);

    const para = document.createElement("p");
    para.textContent = "Some jkfldsajlkjfl;askdjf ABOUT PAGEEE";
    pageContent.appendChild(para);

    content.appendChild(pageContent);
}

export default createAboutPage;