let url = "https://striveschool.herokuapp.com/api/product/"
let authToken = btoa("user8:eAqd2ZPk3Rbtm8Mw")


const getFilms = async () => { 
    let response = await fetch(url, {
    method: "GET",
    headers: {
    "Authorization": `Basic ${authToken}`
    }
    })
    return await response.json()    
};

const getFilm = async (id) => {
  let response = await fetch(url + id);
  return await response.json();
};

const submitFilm = async (product) => {
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(product),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `Basic ${authToken}`
      }),
    });
    return response;
  };

  const editEvent = async (id, agendaEvent) => {
    let response = await fetch(url + id, {
      method: "PUT",
      body: JSON.stringify(agendaEvent),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
    return response;
  };

  /*
  Animazione
  Avventura
  Biografico
  Commedia
  Documentario
  Drammatico
  Pornografico
  Erotico
  Fantascienza
  Fantasy/Fantastico
  Guerra
  Horror
  Musical
  Storico
  Thriller
  Western

*/