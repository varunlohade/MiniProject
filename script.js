async function fetchData() {
  const res = await fetch("https://api.coronavirus.data.gov.uk/v1/data");
  const record = await res.json();
  document.getElementById("date").innerHTML = record.data[0].date;
  document.getElementById("areaName").innerHTML = record.data[0].areaName;
  document.getElementById("latestBy").innerHTML = record.data[0].latestBy;
  document.getElementById("deathNew").innerHTML = record.data[0].deathNew;
}
fetchData();

var initiated=false;
const btn = document.getElementById("btn");
try{
  const media = document.getElementsByTagName("video")[0];
  media.addEventListener("playing", () => {
    if(initiated){
      console.log('playing');
      btn.innerText = "Video Detected";
    }
  });
  console.log('present');
  
btn.addEventListener("click", ()=>{
  if(initiated){
    btn.innerText = "Start Detection";
    initiated=false;
  }else{
    btn.innerText = "Started";
    initiated=true;
  }
});
} catch (e){
  console.log('not present');
}


