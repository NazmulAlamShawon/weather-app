const api_key=`48ed5be0ca09b9e54d32263b69e75b52`;
const searchTemperature = ()=>{
    const city = document.getElementById('city-name').value ;
    const cityurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    
    fetch(cityurl)
    .then(res => res.json())
    .then(data => displayTemperature(data));
 
}


// set  innertext id and text
 const setinnerText = (id,text) =>{
    document.getElementById(id).innerHTML=text;
 }  

const displayTemperature = temperature =>{
    setinnerText('city', temperature.name)
    setinnerText('temperature',temperature.main.temp )
    setinnerText('condition',temperature.weather[0].main)

    
  //
  const url=`http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById('weather-icon');
  imgIcon.setAttribute('src', url);

}