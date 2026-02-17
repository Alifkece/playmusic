async function playMusic(){
const query=document.getElementById("query").value;
const loading=document.getElementById("loading");
const resultArea=document.getElementById("resultArea");

if(!query){
alert("Masukkan judul lagu dulu");
return;
}

loading.style.display="block";
resultArea.style.display="none";

try{
const res=await fetch(`https://corsproxy.io/?https://api.vreden.my.id/api/v1/download/play/audio?query=${encodeURIComponent(query)}`);
const data=await res.json();

if(!data || data.status!==200){
alert("Lagu tidak ditemukan atau API error");
loading.style.display="none";
return;
}

const {title,downloadUrl,thumbnail,duration,source}=data.result;

document.getElementById("thumb").src=thumbnail;
document.getElementById("title").innerText=title;
document.getElementById("duration").innerText=duration;
document.getElementById("source").innerText=source;
document.getElementById("audio").src=downloadUrl;
document.getElementById("download").href=downloadUrl;

resultArea.style.display="block";
}
catch(err){
alert("Server error / API error");
}
finally{
loading.style.display="none";
}
}
