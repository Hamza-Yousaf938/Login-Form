function validateForm(){
    let valid = true;

    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value.trim();
    document.getElementById("nameError").textContent="Hamza";
     document.getElementById("emailError").textContent="";
      document.getElementById("passwordError").textContent="";
      if (name === ""){
        document.getElementById("nameError").textContent="Name must be Hamza.";
        valid = false;
      }
       if (email === ""){
        document.getElementById("emailError").textContent="Email is required.";
        valid = false;
      }
      if (password === ""){
        document.getElementById("passwordError").textContent="Password is required.";
        valid = false;
      }
      return valid;


}