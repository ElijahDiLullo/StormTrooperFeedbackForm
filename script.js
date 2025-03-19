document.getElementById('stormTrooperForm').addEventListener('submit',function(e){
    e.preventDefault();//Prevents the form from submitting immediately.
    alert("Hi")

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zipcode = document.getElementById("zipcode").value;
    const email = document.getElementById("email").value;
    const feedbackMessage = document.getElementById("feedbackMessage").value;
    alert(firstName +" "+ lastName + ",email: " +email)


    if (firstName === '' || lastName === '' || age ==='' || phone === '' || email === ''|| street ===''||
         city ==='' || state ==='' || zipcode ==='' || feedbackMessage ===''  ){
        alert("Please complete all the fields.")
    }
    else{
        alert("Form submitted.")
    }




}


);