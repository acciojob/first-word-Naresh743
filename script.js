function firstWord(s) {
  // your code here
	s = s.trim();
  let index = s.indexOf(' ');

  // If there is no space, return the whole string; otherwise, return up to the first space
  return index === -1 ? s : s.substring(0, index);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
