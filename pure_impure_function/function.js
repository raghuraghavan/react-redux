// pure function
// Given the same input, it will always return the same result
function checkAge (age) {
    let minimun = 18;
    return age <= minimun //FALSE
}
checkAge(16)

//IMPURE FUNCTION
//Given the same input, we can't be sure if the same result will be provided.

let minimun = 15;
function checkAge(age) {
    return age <= minimun  // IT DEPENDS WHAT MINIMUN VALUE IS. NOTE THIS MINIMUN VALUE CAN BE CHANGE AS THE SCOPE IS GLOBAL
}
checkAge(16)
