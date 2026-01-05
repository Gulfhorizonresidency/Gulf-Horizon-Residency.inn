const roomImages={
"Deluxe Room":["deluxe1.jpg","deluxe2.jpg","deluxe3.jpg"],
"Suite Room":["suite1.jpg","suite2.jpg","suite3.jpg"]
};

let imgs=[],i=0;

/* cache elements ONCE (no logic change) */
const popTitle = document.getElementById("popTitle");
const popImg   = document.getElementById("popImg");
const popup    = document.getElementById("popup");

const nameEl     = document.getElementById("name");
const phoneEl    = document.getElementById("phone");
const roomEl     = document.getElementById("room");
const checkinEl  = document.getElementById("checkin");
const checkoutEl = document.getElementById("checkout");

/* date formatter: YYYY-MM-DD ➜ DD-MM-YYYY */
function formatDate(d){
if(!d) return '';
const [y,m,day] = d.split('-');
return `${day}-${m}-${y}`;
}

function openRoom(t,img){
popTitle.innerText=t;
imgs=roomImages[t]||[img];
i=0;
popImg.src=imgs[i];
popup.style.display='flex';
}

function openImg(img){
popTitle.innerText='';
imgs=[img];
popImg.src=img;
popup.style.display='flex';
}

popImg.onclick=()=>{
if(imgs.length>1){
i=(i+1)%imgs.length;
popImg.src=imgs[i];
}};

function closePop(){
popup.style.display='none';
}

document.addEventListener('keydown',e=>{
if(e.key==="Escape") closePop();
});

function sendWhatsApp(e){
e.preventDefault();
const msg=
`Booking Request:
Name: ${nameEl.value}
Phone: ${phoneEl.value}
Room: ${roomEl.value}
Check-in: ${formatDate(checkinEl.value)}
Check-out: ${formatDate(checkoutEl.value)}`;
window.open(
`https://wa.me/919701111659?text=${encodeURIComponent(msg)}`,
'_blank'
);
}
