
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
  
    const errorMessage = document.getElementById('error-message');
    
   
    errorMessage.style.display = 'none';
    
    if (username === password) {
        alert("Login successful!");
        window.location.href="dashboard.html";
      
    } else {
       
        errorMessage.textContent = "Username and password must be the same.";
        errorMessage.style.display = 'block';
    }
});
