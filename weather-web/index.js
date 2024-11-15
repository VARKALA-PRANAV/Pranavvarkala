const form = document.getElementById("form");
const latitudeInput = document.getElementById("latitude");
const longitudeInput = document.getElementById("longitude");
const Resultflow = document.getElementById("info");
const aqiResult = document.getElementById("aqi");
const coResult = document.getElementById("co");
const no2Result = document.getElementById("no2");
const o3Result = document.getElementById("o3");
const pm2Result = document.getElementById("pm2");
const pm10Result = document.getElementById("pm10");
const so2Result = document.getElementById("so2");
form.addEventListener("submit",(Event)=>{
    Event.preventDefault();
    const latitude = latitudeInput.value;
    const langitude = latitudeInput.value;
    const url ='https://air-quality.p.rapidapi.com/history/airquality?lon=${langitude}&lat=${latitude}';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f6cfde6556mshf3e0ba228757c96p1a4eafjsn7504a6dc755b',
            'x-rapidapi-host': 'air-quality.p.rapidapi.com'
        }
    };
    fetch(url,options)
    .then(response=>response.json())
    .then(resullt=>{
        let reading = result.data[0];
        console.log(readings);
        aqiResult.textcontent=reading.aqi;
        coResult.textcontent=reading.co;
        no2Result.textcontent=reading.no2;
        o3Result.textcontent=reading.o3;
        pm2Result.textcontent=reading.pm2;
        pm10Result.textcontent=reading.pm10;
        so2Result.textcontent=reading.so2;
        Resultflow.style.display = 'flex';
    })
});