let inputValue = document.querySelector('.inputValue');
let btnSubmit = document.querySelector('.inputSubmit');
let cityName = document.querySelector('.cityName');
let cityDesc = document.querySelector('.cityDesc');
let cityTemp = document.querySelector('.cityTemp');

btnSubmit.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value +'&appid=606b82580da373e8021ee25a288ccc1c')
    .then(response => response.json())
    .then(data => {
        let nameValue = data['name'];
        let temValue = data['main']['temp'];
        let descValue = data['weather'][0]['description'];

        cityName.innerHTML = nameValue;
        cityTemp.innerHTML = (temValue - 273).toFixed(0);
        cityDesc.innerHTML = descValue;
    })

    .catch( err => alert("Please enter the correct city name!"))
    inputValue.value="";
    
})
// inputValue = "";
