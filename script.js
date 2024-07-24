//searchinput
//searchbtn
const dictionary = (word) => {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'bb5d9f4027msh1396aa6a1abc81ep123899jsna7c101bab8c7',
        'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    fetch(`https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`, options)
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        wordheading.innerHTML ="Meaning of : " + response.word;
        definition.innerHTML = response.definition.replace("2.","<br>2.").replace("3.","<br>3.").replace("4.","<br>4.");
      })
      .catch(err => console.error(err));
  }
  
  searchbtn.addEventListener("click", (e) => {
    e.preventDefault();
    dictionary(searchinput.value);
  });
  