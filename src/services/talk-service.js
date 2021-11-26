const url = "https://api.airtable.com/v0/appxX0NbJgCKlSD1O/Talk";
const apiKey = process.env.REACT_APP_AIRTABLE_KEY;

export function getTalks() {
  return fetch(`${url}?api_key=${apiKey}`).then((response) => {
    return response.json().then((data) => {
      return data.records.map((talkData) => {
        return { ...talkData.fields, id: talkData.id };
      });
    });
  });
}

export function getTalk(id) {
  return fetch(`${url}/${id}?api_key=${apiKey}`)
    .then((response) => {
      return response.json();
    })
    .then((talkData) => {
      return { ...talkData.fields, id: talkData.id };
    });
}
