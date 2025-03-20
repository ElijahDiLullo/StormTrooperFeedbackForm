document.getElementById('sTF').addEventListener('submit',function(e){
    e.preventDefault();//Prevents the form from submitting immediately.
    alert("Submit button pressed")
    let EmailPattern = "/\@/g"
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = parseInt(document.getElementById("age")).value;
    const phone = document.getElementById("phone").value;
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zipcode = document.getElementById("zipcode").value;
    const email = document.getElementById("email").value;
    const feedbackMessage = document.getElementById("feedbackMessage").value;
    alert(firstName +" "+ lastName + ",email: ")
    email.search(EmailPattern)

    if (firstName === '' || lastName === '' || age ==='' || phone === '' || email === ''|| street ===''||
         city ==='' || state ==='' || zipcode ==='' || feedbackMessage ===''){
        alert("Please complete all the fields.")
    }
    else if(email.search(EmailPattern) !== true){
        alert("Please enter a valid Email!")
    }
    else{
        alert("Form submitted.")
    }




}


);