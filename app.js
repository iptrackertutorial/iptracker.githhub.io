const lookupBtn = document.querySelector(".lookup-btn");
const ipDisplay = document.querySelector(".ip-display");
const locationdisplay=document.querySelector(".location-display");
const geoDisplay=document.querySelector(".geo-display");
const loader=document.querySelector(".loader-container");
 
lookupBtn.addEventListener("click",()=>{
    loader.style.display="flex";
    axios.get("https://ipapi.co/json/").then((response) =>{
    ipDisplay.textContent = `Ip:${response.data.ip}`;
    loader.style.display="none";

    locationdisplay.textContent= `Location:${response.data.city},${response.data.region},${response.data.country_name}` ; 

    geoDisplay.textContent=`Geo Location: ${response.data.latitude},${response.data.longitude}`;
     
});

});
 