//Force into https://
if (window.location.protocol != "https:") {
//  console.log("Forced the page to load into https://");
   window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
}

function loginFB() {
    console.log("Starting Facebook login");
}