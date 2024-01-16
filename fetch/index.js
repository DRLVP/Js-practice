// fetch in javascript

// fetch('https://api.github.com/users/DRLVP')
// .then((response)=> response.json())
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err));

/* jodi ami fetch request koru aru request result tu jodi 404 ahe thente ee response ote ahibo , jodi kiba karonot request fulfill nohoi ba cancel hoi jai taiata hai2 ha reject formot ahibo */

/* fetch method or karone ata special task queue bone jak high priority queue, micro-task queue bulio kua hoi ee hodai hokolutkoi agote execute hoi */

// ** MOST IMPORTANT **
/* JATIA AMI FETCH REQUEST KORU TATIA 2TA BHAGOT KAM HOI PRTHOM BHGOT MEMORY RESERVE HOI ARU 2TA ARRAY BONE (1>ONFULLFIELD, 2>ONREJECTION) ARU 2ND BHGOT HOI NETWORK REQUEST. NETWORK REQUEST AMI DIRECT KORIBO NUWARU IYAR BABE RESOURCE AMAK WEB API NOHOLR NODE API E DIE RU JETIAI DATA AHE TATIA ONFULLFIELD[] ARRAYT THOKA FUNCTIONOR JORIOTE DATA RESPONSEOT AHE RU JODI KIBA PROBLEM HOI ONREJECTION[] AHE */


// fetch methodot ami url or bahireo ru parameter dibo paru 
// The calling script is on the origin 'https://example.com'

// async function getData() {
//     const response = await fetch('https://api.github.com/users/DRLVP')

//     const result = await response.json();
//     const card = document.querySelector('.card');
//     card.innerHTML = `${result.twitter_username}`;
//     console.log(result);
// }
  
// getData();

user = {
	"name": "Geeks for Geeks",
	"age": "23"
}

// Options to be given as parameter 
// in fetch for making requests
// other then GET
let options = {
	method: 'POST',
	headers: {
		'Content-Type':
			'application/json;charset=utf-8'
	},
	body: JSON.stringify(user)
}

// Fake api for making post requests
let fetchRes = fetch(
	"http://dummy.restapiexample.com/api/v1/create",
	options);
fetchRes.then(res =>
	res.json()).then(d => {
		console.log(d)
	})
