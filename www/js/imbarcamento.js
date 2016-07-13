var imbares;
function controllo() {
    "use strict";
    if ( document.getElementById('rck').value === '') {
        var attenzione = document.getElementById('attenzione');
        alert("Devi inserire la Rck");
    document.getElementById('rck').focus();
    } else {controllo5();}
}
function controllo5(){
var cespo=document.getElementById('classesp').value;
var rck=document.getElementById('rck').value;
if(cespo=='XC1' && rck < 30){
alert("ATTENZIONE:"+"\n"+"\n"+ " Rck inferiore a 30, minima classe di resistenza ammessa per XC1");
document.getElementById('rck').value='';
document.getElementById('rck').focus();

}else if (cespo=='XC2' && rck < 30){
alert("ATTENZIONE:"+"\n"+"\n"+ " Rck inferiore a 30, minima classe di resistenza ammessa per XC2");
document.getElementById('rck').value='';
document.getElementById('rck').focus();
}else if (cespo=='XC3' && rck < 35) {
alert("ATTENZIONE: "+"\n"+"\n"+ "Rck inferiore a 35, minima classe di resistenza ammessa per XC3");
document.getElementById('rck').value='';
document.getElementById('rck').focus();
}else if(cespo=='XC4' && rck < 40){
alert("ATTENZIONE:"+"\n"+"\n"+ " Rck inferiore a 40, minima classe di resistenza ammessa per XC4");
document.getElementById('rck').value='';
document.getElementById('rck').focus();
}else if(cespo=='XF3' && rck < 30){
alert("ATTENZIONE:"+"\n"+"\n"+ " Rck inferiore a 30, minima classe di resistenza ammessa per XF3");
document.getElementById('rck').value='';
document.getElementById('rck').focus();
}else if (cespo=='XF4' && rck < 35){
alert("ATTENZIONE:"+"\n"+"\n"+ " Rck inferiore a 35, minima classe di resistenza ammessa per XF4");
document.getElementById('rck').value='';
document.getElementById('rck').focus();
} 
else {controllo1()

}
}
function controllo1() {
    "use strict"
     if ( document.getElementById('digiucont').value === '') {
         alert("Devi inserire la distanza dei giunti di contrazione") ;
         document.getElementById('digiucont').focus();
         } else{controllo2();}
}
function controllo2(){
if(document.getElementById('umidita').value==''){
alert("Devi inserire l'umidit&agrave; relativa") ;
document.getElementById('umidita').focus();
} else{
controllo3();}
}

function controllo3(){
if(document.getElementById('spesspav').value==''){
alert("Devi inserire lo spessore del pavimento") ;
document.getElementById('spesspav').focus();
} else{
imbarcamento();}
}



function imbarcamento(){
 document.getElementById('pinserimento').style.display="none";
document.getElementById('risultati').style.display="block";
var rck=document.getElementById('rck').value;
var distcont=document.getElementById('digiucont').value;
var umrel=document.getElementById('umidita').value;
var spess=document.getElementById('spesspav').value;
var cespo=document.getElementById('classesp').value;
var tgetto=document.getElementById('tipogetto').value;
if ( document.getElementById('barriera').checked) {
    var barvap= "si";
} else {
barvap="no";
}
if (tgetto=="diretto" && cespo=='XC1'){
var srit=700;}
if (tgetto=="diretto" && cespo=='XC2'){
srit=700;}
if (tgetto=="diretto" && cespo=='XC3'){
srit=650;}
if (tgetto=="diretto" && cespo=='XC4'){
srit=600;}
if (tgetto=="diretto" && cespo=='XF3'){
srit=600;}
if (tgetto=="diretto" && cespo=='XF4'){
srit=550;}
if (tgetto=="pompa" && cespo=='XC1'){
srit=800;}
if (tgetto=="pompa" && cespo=='XC2'){
srit=800;}
if (tgetto=="pompa" && cespo=='XC3'){
srit=750;}
if (tgetto=="pompa" && cespo=='XC4'){
srit=700;}
if (tgetto=="pompa" && cespo=='XF3'){
srit=700;}
if (tgetto=="pompa" && cespo=='XF4'){
srit=650;}
if(umrel<40){
umi=1.15;
}else if (umrel==40) {
umi=1.1 ;
}else if (umrel>40 && umrel<60){
umi=1.1-((umrel-40)*0.01);
}else if(umrel>=60 && umrel<80) {
umi=0.9-((umrel-60)*0.02);
}else if(umrel>80){
umi=0.45;
}
if(cespo=='XC1'){ var ac=0.6; }
if(cespo=='XC2'){ var ac=0.6; }
if(cespo=='XC3'){ var ac=0.55; }
if(cespo=='XC4'){ var ac=0.5; }
if(cespo=='XF3'){ var ac=0.5; }
if(cespo=='XF4'){ var ac=0.45; }
var ritteo=(umi*srit*1.15)/1000000;
var disdia=Math.sqrt((Math.pow(distcont,2)+Math.pow(distcont,2))) ;
var raggio=((spess*(1-ritteo))/ritteo)/100;
var alfa=disdia/(raggio+(spess/100));
var alfa1=alfa/2;
var cosalfa1=Math.cos(alfa1);
var alfa2=1-cosalfa1;
var imb1=(raggio*alfa2)*100;
var imbarcafinale=imb1-((100-(spess*2.35)*imb1)/100);
var imbarcamfinale=Math.round(imbarcafinale*100)/100;
var imbarcamentot = document.getElementById('imbarcamentot');
if (barvap=="no"){
imbarcamentot.innerHTML="La piastra di calcestruzzo subir&agrave; un imbarcamento tra il centro e l'incrocio dei giunti di mm <span style='font:bold 18px arial;color:#ff2200;'>"+imbarcamfinale+"  </span>";
}else if (barvap=="si"){
var imbavapo = Math.round((imbarcafinale+(imbarcafinale*15/100))*100)/100;
imbarcamentot.innerHTML="nel caso il pavimento sia su un supporto impermeabile o foglio di polietilene  l'imbarcamento tra il centro e l'incrocio dei giunti sar&agrave; di mm <span style='font:bold 20px arial;color:#ff2200;'>"+imbavapo+"  </span>";
}
if (barvap=="no"){
    imbares = imbarcamfinale;
 
    } else if(barvap=="si"){
    imbares = imbavapo;
    
    }
var alert=document.getElementById('alertimbarca')  ;
if (imbares<2.5){
alert.innerHTML="L'imbarcamento &egrave; nella norma.";
}else if (imbares>5){
alert.innerHTML="<span style='font-weigth:bold;color:#ff2200;'>IMBARCAMENTO ECCESSIVO. E' NECESSARIO INTERVENTO DI RIPARAZIONE</span>";
}else{
alert.innerHTML="L'imbarcamento eccede la norma, decidere con il committente se eseguire o meno l'intervento di riparazione.";
}  
    
var canvas = document.getElementById("imbarcamento");
var ctx=canvas.getContext("2d");
var img=document.getElementById('imbpic');
ctx.drawImage(img, 0, -20);
ctx.font="18px arial";
ctx.fillStyle = "#000040";
ctx.textAlign = "center";
ctx.fillText("A = "+imbares+" mm", 235, 140)
 
}
function init(){
document.getElementById('intro').style.display="block";
document.getElementById('risultati').style.display="none";
document.getElementById('pinserimento').style.display="none";
}
function fineintro(){
document.getElementById('intro').style.display="none";
document.getElementById('pinserimento').style.display="block";
}
function esci(){
 app.exitApp();
}
function ripeti(){
window.location="index.html";
}
function gocalcolo(){
 window.location = "imbarcamento.html";

} 
function inviamail(){
var pac=document.getElementById('classesp').value;
var contr=document.getElementById('digiucont').value;
var getto=document.getElementById('tipogetto').value;
var cls=document.getElementById('rck').value;
var spessore=document.getElementById('spesspav').value;
if(document.getElementById('barriera').checked){
var strimp="si";
}else{
var strimp="no";
}


var mess="DATI DI CALCOLO %0d%0a -------------------------%0d%0a%0d%0a Classe esposizione cls: "+pac+"%0d%0aRck calcestruzzo        : "+cls+" N/mmq%0d%0aSpessore pavimento   : "+spessore+" cm%0d%0aDistanza giunti contr: "+contr+" ml%0d%0aTipo di getto             : "+getto+"%0d%0aSottofondo impermeabile :"+strimp+"%0d%0a%0d%0a%0d%0aRISULTATI%0d%0a----------------------%0d%0aL'imbarcamento atteso della piastra sar&agrave; di "+ imbares +" mm.;%0d%0a" ;
var oggetto="Calcolo imbarcamento pavimento cantiere di"  ;
document.location.href = "mailto:?"+"Subject=" + oggetto + "&Body=" + mess; 
}



