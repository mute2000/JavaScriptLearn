function sayHiBye(firstName, lastName) {
    function getFullName() {
      const age = 18;
  
      function inter() {
        console.log(firstName + " " + lastName + " " + age);
      }
  
      inter();
      return firstName + " " + lastName;
    }
  
    alert("Hello, " + getFullName());
    alert("Bye, " + getFullName());
}