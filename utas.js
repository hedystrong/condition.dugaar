// Хэрвээ хэрэглэгч гараас утасны дугаар оруулвал өгөгдсөн утгыг тоо мөн эсвэл биш эсэхийг шалгаарай.
// Дараа нь тухайн өгөгдсөн утасны эхний 4 орон нь +976 байгаа эсэхийг шалгана. 
// Эцэст нь өгөгдсөн утасны дугаарын урт 12 байвал та монгол улсын утасны дугаарыг зөв орууллаа гэж харуулаарай. 
// Хэрвээ буруу байвал та монгол улсын утасны дугаарыг буруу орууллаа гэж харуулна.
// Жишээ нь
// Input: +97699119911

let i = prompt("Ta too oruulna uu");

let a = "+976";

if(a === "+976" && i.length === 12){
    console.log("Mongol ulsiin utasnii dugaar zuw oruullaa");
}else{
    console.log("Mongol ulsiin utasnii dugaar bish bn");
}