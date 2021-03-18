const form = document.getElementById('form')
const names = document.getElementById('name')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const word = document.getElementById('sub2')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
})

function checkInputs(){

  const nameValue = names.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const wordValue = word.value.trim();


  if(nameValue == ""){
      setErrorFor(names,'Names must be filled')
  }else{
      setSuccessFor(names ,'Successful')
  }

  if(phoneValue == ""){
      setErrorFor(phone,'Please your Phone Number is needed')
  }else if(phoneValue === ''){
      setErrorFor(phone,'Your Phone number must be digits please')
  }
  else{
      setSuccessFor(phone,'Successful')
  }

  if(emailValue==""){
      setErrorFor(email,'Please your email is needed')
  }else{
      setSuccessFor(email,'Successful')
  }

  if(wordValue==''){
      setErrorFor(word,'Please address is needed')
  }else{
  setSuccessFor(word,'Thanks for Abiding')
}
}






function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText= message;

    formControl.className="control error";
}
function setSuccessFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;

    formControl.className="control success";
}