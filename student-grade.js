   let marks = 64;
    if (marks > 79) {
      marks= "A"
    } else if (marks >= 60 && marks <= 79) {
      marks= "B"
    } else if (marks >= 49 && marks <= 59) {
      marks= "C"
    } else if (marks >= 40 && marks <= 49) {
      marks= "D"
    } else 
   {
      marks="E"
    }

  console.log (marks)
  
//   function main() {
//     const marks = parseInt(prompt("Enter the student's marks (0-100):"));
  
//     if (marks >= 0 && marks <= 100) {
//       const grade = calculateGrade(marks);
//       console.log("Grade:", grade);
//     } else {
//       console.log("Invalid marks. Please enter a number between 0 and 100.");
//     }
//   }
  
//   main();