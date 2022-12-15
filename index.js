const signButton=document.querySelector(".sign_btn");
const signPopUp=document.querySelector(".sign_pop_up");
const modalClose=document.querySelector(".modalclose");

signButton.addEventListener("click",()=>{
    signPopUp.classList.add("display_block");
});

modalClose.addEventListener("click",()=>{
    signPopUp.classList.remove("display_block");
})

const phoneNumber=document.querySelector(".phone_num");
const termsCondition=document.querySelector(".terms");
const continueBox=document.querySelector(".continue");
const height=document.querySelector(".height");

height.addEventListener("click",()=>{
    phoneNumber.style.borderBottom="1px solid rgb(156, 154, 154)";
    termsCondition.classList.remove("display_none");
    continueBox.classList.remove("display_block");
})
phoneNumber.addEventListener("click",()=>{
    phoneNumber.style.borderBottom="1px solid red";
    termsCondition.classList.add("display_none");
    continueBox.classList.add("display_block");
})

const hideCity=document.querySelector(".hide");
const other=document.querySelector(".other");
const otherCity=document.querySelector(".other_city");

hideCity.addEventListener("click",()=>{
   other.classList.add("display_none");
   otherCity.classList.add("display_none");
})