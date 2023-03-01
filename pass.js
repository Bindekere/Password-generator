let allChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                "1","2","3","4","5","6","7","8","9","0",
                "!","@","#","$","%","^","&","*","(",")","-","_","=","+","{","}","[","]","|",";",":",".","<",">","/","?"]
let pwLength = document.getElementById("length-input")
let btnGeneratePassword = document.getElementById("big-button")
let all = document.querySelectorAll(".password-sugg")

btnGeneratePassword.addEventListener("click", generatePassword)
// function makeid(length) {
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * 
//  charactersLength));
//    }
//    return result;
// }
function createPassword(length){
    let createdPassword = ""
        for ( let i = 0; i < length; i++){
            createdPassword += allChars[Math.floor( Math.random() * allChars.length)]
        }
        return createdPassword
}
function generatePassword(){
    for (const f of all){
        f.textContent = createPassword(pwLength.value)
    }
    // newPassword0.textContent = makeid(pwLength.value)
    // newPassword1.textContent = makeid(pwLength.value)
    // newPassword2.textContent = makeid(pwLength.value)
    // newPassword3.textContent = makeid(pwLength.value)
}
for (const password of all) {
    password.addEventListener("click", function() {
        navigator.clipboard.writeText(password.textContent);
        alert("Password copied to clipboard!")
    })
}
