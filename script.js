var n=200;
for(var i=1;i<=n;i++){
    fetch(`https://api-thirukkural.vercel.app/api?num=${i}`)
    .then((res)=>res.json())
    .then((data)=>thirukkural(data));
    let thirukkural=(data)=>{
        console.log(data);
        const kuralNumber=document.createElement('h1');
        kuralNumber.innerHTML="Kural Number : "+data.number;
        document.getElementById("root").appendChild(kuralNumber);

        const line1=document.createElement('h2');
        line1.innerHTML=data.line1;
        document.getElementById("root").appendChild(line1);

        const line2=document.createElement('h2');
        line2.innerHTML=data.line2;
        document.getElementById("root").appendChild(line2);

        const tam=document.createElement('h3');
        tam.innerHTML="Tamil Explanation : ";
        document.getElementById("root").appendChild(tam);
        const tamElement=document.createElement('p');
        tamElement.innerHTML=data.tam_exp;
        document.getElementById("root").appendChild(tamElement);
        const eng=document.createElement('h3');
        eng.innerHTML="English Explanation : ";
        document.getElementById("root").appendChild(eng);
        const engElement=document.createElement('p');
        engElement.innerHTML=data.eng;
        document.getElementById("root").appendChild(engElement);
    }
}
