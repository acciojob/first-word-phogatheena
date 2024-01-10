function firstWord(s) {
  // your code here
	let a =[];
	for(let i=0;i<s.length;i++)
		{
			if(s[i]===" ")
			{
				return a;
			}
				a+=s[i];
		}
	return a;
	
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
