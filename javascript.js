let url = "https://striveschool.herokuapp.com/api/movies/"
let authToken = btoa("user8:eAqd2ZPk3Rbtm8Mw")


const getFilms = async () => { 
    let response = await fetch(url , {
    method: "GET",
    headers: {
    "Authorization": `Basic ${authToken}`
    }
    })
    return await response.json()    
};

const getFilm = async (id) => {
  let response = await fetch(url + id, {
    method: "GET",
    headers: {
    "Authorization": `Basic ${authToken}`
    }
  });
  return await response.json();
};

  let saveFilm = async (film) => {
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(film),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `Basic ${authToken}`
      }),
    });
    return response;
  };

  const editFilm = async (id, film) => {
    let response = await fetch(url + id, {
      method: "PUT",
      body: JSON.stringify(film),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `Basic ${authToken}`
      }),
    });
    return response;
  };

  const deleteFilm = async (id) => {
    let response = await fetch(url + id, {
      method: "DELETE",
      headers: {
        "Authorization": `Basic ${authToken}`
      }
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