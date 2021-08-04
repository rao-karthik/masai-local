// const url = "https://api.unsplash.com/photos";
let url = "https://api.imgur.com/3/album/5";

const getImages = ()=>{
    fetch(url, {
        headers: {
            // Authorization: `Client-ID zTrXpS12rpdEfZ8sY3sd3R4POpHmtU5LtZ118arWRjo`,
            Authorization: 'Client-ID 3b6e101d9edb7c1'
        }
    })
    .then(res=>{
        return res.json();
    })
    .then(res=>{
        console.log(res);
    })
};

getImages();

