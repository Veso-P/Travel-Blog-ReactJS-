const databaseUrl = 'https://blog-apps-c12bf.firebaseio.com/posts.json';

const getData = () => {
    return fetch(databaseUrl)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

export default getData;