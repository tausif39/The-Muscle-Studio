export const exerciseOptions=
{
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '39879cb66bmsh2376f20a982c59ep13297ajsna75cd68f3e1e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const ytOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '34b9cb7c3dmsh31d4fef1ffc07e1p1b7c9ejsn5299441e1bbc',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async(url , options) =>
{
   const response = await fetch(url,options);
   const data = await response.json();

   return data;
}
