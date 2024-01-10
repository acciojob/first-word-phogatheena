function firstWord(s) {
  // your code here
	let a ="Hello ";
	let b ;
	for(let i=0;i<a.length;i++)
		{
			if(s.charAt(i)==" ")
			{
				return b;
			}
			b+=s.charAt(i);
		}
	return b;

}
// Do not change the code below
//const s = prompt("Enter String:");
alert(firstWord(s));
