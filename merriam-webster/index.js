import axios from 'axios'

axios.get("https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=30e2b371-108f-4a20-ab74-c4b176ea51bc").then((response)=>{
		console.log(response.data);
})


