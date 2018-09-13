const countries= ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","British Virgin Islands"
	,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
	,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
	,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre and Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
	,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts and Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
	,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad and Tobago","Tunisia"
	,"Turkey","Turkmenistan","Turks and Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
  ,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  
	function randomHexaColor(){
      let randomNum = Math.floor(Math.random()* 10000000);
      return (`#${randomNum.toString(16)}`);    
  }
  
  function startsWith(keyWord){ // search countries that start with the input search key word		
		return countries.filter(e => e.toLowerCase().startsWith(keyWord));		
	}
	
	function containsWord(keyWord){ // search countries that includes the search key word		
		return countries.filter(e => e.toLowerCase().includes(keyWord));
	}
  
  function displayResult(result){ // display the result data by creating element for each data and changing the dom
		let item;
		let container = 	document.querySelector('#container');
		let	numOfResults = document.createElement('p');
		numOfResults.textContent = `Countries that start with: ${result.length}`;	
		container.appendChild(numOfResults);
		result.forEach(element => {
			item = document.createElement('div');
			item.textContent = element;
			container.appendChild(item);
			item.style.background = randomHexaColor();
		});				
	}

	function clearResult(){ // clears the dom 
		document.querySelector('#container').innerHTML = '';
	}
	
	function runSearch(search,display){  
		let keyWord = document.querySelector('#searchInput').value.toLowerCase(); 
		let result = search(keyWord); // search 
		clearResult(); // clear the display container div 
		display(result); // display the reslut 		
	}

	function handleSearchEvent(e){ // it handles the whole process of searching
		let startwith = document.querySelector('#startWord').checked;
		let Anyword = document.querySelector('#anyWord').checked;
		if(startwith){
			runSearch(startsWith, displayResult);
			} else {
			runSearch(containsWord, displayResult);
		}		
		
	}

   // Event handlers

	document.querySelector('#searchInput').addEventListener('input',handleSearchEvent);


	// initial state .. when the page loads first 
	let noOfCountries =  document.querySelector('#noOfCountries');
	noOfCountries.append(document.createElement('textNode').value = countries.length);