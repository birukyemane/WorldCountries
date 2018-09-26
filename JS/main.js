
  
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
		document.querySelector('#container').innerHTML = '';		
		numOfResults.textContent = (result.length >1 ? `${result.length} matchs found` : `${(result.length==1?"1 match found":"No matches found")}`);	
		(result.length >= 1? numOfResults.className="found":numOfResults.className="not-found");
		container.appendChild(numOfResults);
		result.forEach(element => {
			item = document.createElement('div');
			item.textContent = element;
			container.appendChild(item);
			item.style.background = randomHexaColor();
		});				
	}
	
	function runSearch(search){  
		let keyWord = document.querySelector('#searchInput').value.toLowerCase(); 
		if (keyWord){
			let result = search(keyWord); // search 
			displayResult(result); // display the reslut
		}	 		
	}

	function handleSearchEvent(){ // it handles the whole process of searching
		let startwith = document.querySelector('#startWord').checked;
		let anyWord = document.querySelector('#anyWord').checked;
		if(startwith){
			runSearch(startsWith);
			} else if(anyWord){
			runSearch(containsWord);
		}		
		
	}

   // Event handlers

	document.querySelector('#searchInput').addEventListener('input',handleSearchEvent);
	document.querySelector('#startWord').onclick = handleSearchEvent;
	document.querySelector('#anyWord').onclick = handleSearchEvent;


	// initial state .. when the page loads first 
	let noOfCountries =  document.querySelector('#noOfCountries');
	noOfCountries.append(document.createElement('textNode').value = countries.length);
	let container = document.querySelector('#container');
	let	initialMessage = document.createElement('h2');
	initialMessage.textContent = "Search patterns in country names!";
	initialMessage.className = "initialMessage";
	container.appendChild(initialMessage);

