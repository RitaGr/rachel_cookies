 const cookieBox = document.querySelector(".wrapper");
    buttons = document.querySelectorAll(".button");

const executeCodes = () => {
    // if cookie contains codinglab it will be returned and below of this code will not run
    if(document.cookie.includes("codinglab")) return;
    cookieBox.classList.add("show");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");

            //if button has acceptBtn id
            if (button.id == "acceptBtn") {
                //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
                document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
            }
        });
    });
};

// executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);

// const cookieBox = document.querySelector(".wrapper"),
//     acceptBtn = cookieBox.querySelector("button");
//     acceptBtn.onclick = () => {
//       //setting cookie for 1 month, after one month it'll be expired automatically
//       document.cookie = "CookieBy=CodingNepal; max-age="+ 60 * 60 * 24 * 30;
//       if(document.cookie){ //if cookie is set
//         cookieBox.classList.add("hide"); //hide cookie box
//       } else { //if cookie not set then alert an error
//         alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
//       }
//     }
//     let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal"); //checking our cookie
//     //if cookie is set then hide the cookie box else show it
//     checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");