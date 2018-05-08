const token = ' ba69666bc4aaf6798d5d746f3f6e55ad85e911e0'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
