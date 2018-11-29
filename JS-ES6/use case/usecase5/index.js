
const Urls = [
  "https://api.github.com/users/SidVedi",
  "https://api.github.com/users/ajayp944",
  "https://api.github.com/users/rajeevjain1983",
  "https://api.github.com/users/CodeWithAnkitSinghal",
  "https://api.github.com/users/vinamrasingh",
  "https://api.github.com/users/rohit-khanna",
  "HTTPS://api.github.com/users/JugalJoshi8",
  "https://api.github.com/users/rohngonnarock",
];

function getAllGithubUsers() {
  return Promise.all(
    Urls.map(value => {
      return fetch(value).then(r => r.json());
    })
  )
}

getAllGithubUsers()
        .then(value => {
          console.log(value.map(res => res.name));
        })
        .catch(err => console.log(err));
