const requestUser = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data;
};

const extractName = (data) => {
    const { first, last, title } = data.results[0].name;
    return "Fullname: " + title + " " + first + " " + last;
};

const addNameToDom = (name) => {
    const fullName = document.getElementsByClassName("user-name");
    fullName[0].innerText = name;
};

const extractDate = (data) => {
    const { date } = data.results[0].registered;
    let newStr = date.substring(0, 10);
    return "Date Employed: " + newStr;
};
const addDateToDom = (name) => {
    const dateAdded = document.getElementsByClassName("date-employed");
    dateAdded[0].innerText = name;
};

const extractImg = (data) => {
    const { large } = data.results[0].picture;
    return large;
};

const addImgToDom = (src) => {
    const imgElem = document.querySelector(".user-img");
    console.log(imgElem, src);
    imgElem.src = src;
};

const extractId = (data) => {
    const { uuid } = data.results[0].login;
    return "ID Number: " + uuid;
};

const addIdToDom = (id) => {
    const userId = document.getElementsByClassName("id-number");
    userId[0].innerText = id;
};

document.querySelector("button").addEventListener("click", (e) => {
    requestUser().then(extractName).then(addNameToDom);
    requestUser().then(extractDate).then(addDateToDom);
    requestUser().then(extractImg).then(addImgToDom);
    requestUser().then(extractId).then(addIdToDom);
});

console.log("program keeps running");
