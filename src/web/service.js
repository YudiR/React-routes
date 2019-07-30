    export const getAllItems = () => {
        return new Promise((resolve, reject) => {
          fetch("https://jsonplaceholder.typicode.com/users", {
          })
            .then(e => (e.ok ? resolve(e) : reject(e)))
            .catch(err => console.log("FETCH_ERR::", err));
        });
      };


      export const getWorker = id => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      
    })
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(err => console.log("FETCH_ERR::", err));
  });
};
