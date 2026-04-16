async function getData(){
    let textBoxElem=document.getElementById("textBox");
    let city=textBoxElem.value;
    // console.log(city);
    let API =`http://api.weatherapi.com/v1//current.json?key=76a368caa21646d7b5740739251402&q=${city}`;


    try{
        let res = await axios.get(API);
        display(res.data)


    }
    catch(e){
        console.log(e);
        alert("something went wronng plase try again later");
    }
}


function display(d){
    console.log(d);
    let html=`
         <div class="row">
            <div class="col-6">
                <h1>${d.location.name}</h1>
                <p>${d.current.condition.text}</p>
                <h1>${d.current.temp_c}<sup>o</sup>C</h1>
            </div>
            <div class="col-6">
                <img src=${d.current.condition.icon} alt="">
            </div>
        </div>


    `
    let refElem=document.getElementById("ref");
    refElem.innerHTML=html;
}
