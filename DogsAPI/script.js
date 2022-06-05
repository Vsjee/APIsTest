const dogImg = document.getElementsByClassName('dog');

console.log('fetchin dog img');

callDogAPI().catch(err => {
    console.log('error');
    console.error(err);
});

//more cleaner way to fetch()
async function callDogAPI() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const response2 = await fetch('https://dog.ceo/api/breeds/image/random');
    
    const img = await response.json();
    const img2 = await response2.json();
    
    const url = img.message;
    const url2 = img2.message;
    
    document.getElementById('dog').src = url;
    document.getElementById('dog2').src = url2;
}

//normal way to fetch()
// fetch('https://dog.ceo/api/breeds/image/random').then(response => {
//     console.log(response);
//     return response.json();
// }).then(si => {
//     console.log(si);
//     const url = si.message;
//     console.log(url);
//     document.getElementById('dog').src = url;
// }).catch(err => {
//     console.log('error');
//     console.error(err);
// });