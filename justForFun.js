// AGE CALCULATOR 
// This age calculator uses the current date to calculate your age (in years) by your birthday. It 
// will always return your CURRENT age (NOT simply the age you will be by the time your birthday has passed). 
// To use it, simply pass in arguments for your birth month, day, and year. 

console.log("HOW OLD ARE YOU?");

function getsAge(mm,dd,yyyy) {
var month = new Date().getMonth() + 1;
var day = new Date().getDate();
var year = new Date().getFullYear();
  if (mm === month && dd <= day) {
    return year - yyyy;
  } else if (mm === month && dd > day) {
    return year - yyyy - 1;
  } else if (mm > month) {
    return year - yyyy - 1;
  } else {
    return year - yyyy;
  }
}

var lauraAge = getsAge(09,18,1999);
var gregAge = getsAge(04,02,1989);
var bruceAge = getsAge(02, 04, 2014);

console.log(getsAge(01, 05, 1995));
// --> 28

console.log(`Laura, you have lived ${lauraAge} years of life!`);
// --> "Laura, you have lived 23 years of life."

console.log(`Greg, you have lived ${gregAge} years of life!`);
// --> "Greg, you have lived 33 years of life."

console.log(`Bruce, you hae lived ${bruceAge} years of life!`);
// --> "Bruce, you have lived 9 years of life."
