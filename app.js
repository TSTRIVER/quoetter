let jsondata = "";
let length = 0;

const getquotes = async ()=>{
    const api = "https://type.fit/api/quotes";
    try{
        let data = await fetch(api);
        jsondata = await data.json() ;
       // console.log(jsondata);
       length = jsondata.length;
       //console.log(jsondata);
    }catch (error){
    }
};
getquotes();

let h2 = document.getElementById('h2');
let h3 = document.getElementById('h3');
let btn = document.getElementById('btn');
let tweet = document.getElementById('tweet');

btn.addEventListener("click",()=>{
    let rand_index = Math.floor(Math.random()*length-1);
    let quote = jsondata[rand_index].text;
    let author = jsondata[rand_index].author;
    
    h2.innerText = `${quote}`;
    author == null ? h3.innerText = "Unknown" : h3.innerText = ` By ${author}`;
});

tweet.addEventListener("click",()=>{
     //console.log(h2.innerText);
     let post = `https://twitter.com/intent/tweet?text=${h2.innerText}`;
     window.open(post);
})
