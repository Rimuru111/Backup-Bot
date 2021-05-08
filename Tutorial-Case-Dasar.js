/*
]=====> 𝙼 𝚎 𝙼 𝚊 𝚗 𝚜 シ︎ <=====[
tutorial membuat case bot dasar
jangan lupa subscribe channel gue
btw ramein group gw hamdeh
]=====> 𝙼 𝚎 𝙼 𝚊 𝚗 𝚜 シ︎ <=====[
*/

< PENGUMUMAN >
INI HANYA KHUSUS YANG MEMAKAI BASE ORI MHANKBARBAR
YANG MAKE NURUTOMO GK BAKAL WORK MAKE GINIAN

************************* YANG PAKE SENDMESSAGE **************************

[ CASE BIASA ] ( PESAN )
//// DIBAWAH V1
case 'tes': // 'tes' boleh kalian ganti terserah mau apa aja
client.sendMessage(from, 'PESAN NYA MASUKIN SINI', text) // 'hallo' adalah pesan yg dijawab bot
client.sendMessage(from, "PESAN NYA MASUKIN SINI", text) // "hallo" adalah pesan yg dijawab bot
client.sendMessage(from, `PESAN NYA MASUKIN SINI`, text) // `hallo` adalah pesan yg di jawab bot
// di atas bebas pilih yg mana aja bisa ' " dan `
// client nya sesuain sama bot kalian y
break
//// DIBAWAH V2
case 'tes': // 'tes' boleh kalian ganti terserah mau apa aja
teksnye = `PESAN NYA MASUKIN SINI
PESAN NYA MASUKIN SINI` // di awal dan di akhir text kasih `
client.sendMessage(from, teksnye, text) // teksnye adalah pesan yg dijawab bot
// client nya sesuain sama bot kalian y
break

[ CASE BIASA ] ( PESAN + REPLY )
//// DIBAWAH V1
case 'tes': // 'tes' boleh kalian ganti terserah mau apa aja
client.sendMessage(from, 'hallo', text, {quoted:mek}) // 'hallo' adalah pesan yg dijawab bot
client.sendMessage(from, "hallo", text, {quoted:mek}) // "hallo" adalah pesan yg dijawab bot
client.sendMessage(from, `hallo`, text, {quoted:mek}) // `hallo` adalah pesan yg di jawab bot
// di atas bebas pilih yg mana aja bisa ' " dan `
// client nya sesuain sama bot kalian y
// mek nya sesuain sama bot kalian y
break
//// DIBAWAH V2
case 'tes': // 'tes' boleh kalian ganti terserah mau apa aja
teksnye = `PESAN NYA MASUKIN SINI
PESAN NYA MASUKIN SINI` // di awal dan di akhir text kasih `
client.sendMessage(from, teksnye, text, {quoted:mek}) // teksnye adalah pesan yg dijawab bot
// client nya sesuain sama bot kalian y
// mek nya sesuain sama bot kalian y
break

[ CASE BIASA ] ( PESAN + REPLY + IMAGE )
//// DIBAWAH V1
case 'tes': // 'tes' boleh kalian ganti terserah mau apa aja
wew = fs.readFileSync('./namafile/namafile') // wew nya bisa diganti namanya terserah // namafile nya ganti ke nama folder fotonya, kalo nama file yg pertama itu foto/gambarnya di taro folder mana nah terus namafilenya ganti ke nama folder yg ada foto/gambar, nah namafile yg kedua itu nama dari foto/gambarnya
client.sendMessage(from, wew, image, {quoted:mek, caption:"hallo\nyahaha"}) // jangan lupa kasih teks image biar work // arti dari ( \n ) adalah kayak enter/spasi panjang
// client nya sesuain sama bot kalian y
break
//// DIBAWAH V2
case 'tes': // 'tes' boleh kalian ganti terserah mau apa aja
teksnye = `PESAN NYA MASUKIN SINI
PESAN NYA MASUKIN SINI` // di awal dan akhir text kasih `
wew = fs.readFileSync('./namafile/namafile') // wew nya bisa diganti namanya terserah // namafile nya ganti ke nama folder fotonya, kalo nama file yg pertama itu foto/gambarnya di taro folder mana nah terus namafilenya ganti ke nama folder yg ada foto/gambar, nah namafile yg kedua itu nama dari foto/gambarnya
client.sendMessage(from, wew, image, {quoted:mek, caption:`${teksnye}`}) // jangan lupa kasih teks image biar work // arti dari `${teksnye}` adalah kek semacam function gitulah
// client nya sesuain sama bot kalian y
break

[ CASE BIASA ] ( IMAGE + REPLY )
case 'tes': // 'tes' boleh kalian ganti terserah mau apa aja
wew = fs.readFileSync('./namafile/namafile') // wew nya bisa diganti namanya terserah // namafile nya ganti ke nama folder fotonya, kalo nama file yg pertama itu foto/gambarnya di taro folder mana nah terus namafilenya ganti ke nama folder yg ada foto/gambar, nah namafile yg kedua itu nama dari foto/gambarnya
client.sendMessage(from, wew, image, {quoted:mek}) // jangan lupa kasih teks image biar work
// client nya sesuain sama bot kalian y
break

[ CASE BIASA ] ( PESAN + REPLY + VIDEO )
case 'tes': // 'tes' boleh kalian ganti terserah mau apa aja
wew = fs.readFileSync('./namafile/namafile') // wew nya bisa diganti namanya terserah // namafile nya ganti ke nama folder fotonya, kalo nama file yg pertama itu video di taro folder mana nah terus namafilenya ganti ke nama folder yg ada video, nah namafile yg kedua itu nama dari video
client.sendMessage(from, wew, video, {mimetype: 'video/mp4', ptt:true, quoted:mek, caption:"hallo\nyahaha"}) // jangan lupa kasih teks video biar work // arti dari ( \n ) adalah kayak enter/spasi panjang
// client nya sesuain sama bot kalian y
break

[ CASE BIASA ] ( VIDEO + REPLY )
case 'tes': // 'tes' boleh kalian ganti terserah mau apa aja
wew = fs.readFileSync('./namafile/namafile') // wew nya bisa diganti namanya terserah // namafile nya ganti ke nama folder fotonya, kalo nama file yg pertama itu video di taro folder mana nah terus namafilenya ganti ke nama folder yg ada video, nah namafile yg kedua itu nama dari video
client.sendMessage(from, wew, video, {mimetype: 'video/mp4', ptt:true, quoted:mek}) // jangan lupa kasih teks video biar work
// client nya sesuain sama bot kalian y
break

[ CASE BIASA ] ( AUDIO + REPLY )
case 'tes': // 'tes' boleh kalian ganti terserah mau apa aja
wew = fs.readFileSync('./namafile/namafile') // wew nya bisa diganti namanya terserah // namafile nya ganti ke nama folder fotonya, kalo nama file yg pertama itu audio di taro folder mana nah terus namafilenya ganti ke nama folder yg ada audio, nah namafile yg kedua itu nama dari audio
client.sendMessage(from, wew, audio, {mimetype: 'audio/mp4', ptt:true, quoted:mek}) // jangan lupa kasih teks audio biar work 
// client nya sesuain sama bot kalian y
break

[ CASE BIASA ] ( DOCUMENT + REPLY )
//// DIBAWAH YANG TXT
case 'tes': // 'tes' boleh kalian ganti terserah mau apa aja
wew = fs.readFileSync('./namafile/namafile') // wew nya bisa diganti namanya terserah // namafile nya ganti ke nama folder fotonya, kalo nama file yg pertama itu file txt di taro folder mana nah terus namafilenya ganti ke nama folder yg ada file txt, nah namafile yg kedua itu nama dari file txt
client.sendMessage(from, wew, document, {mimetype: 'application/txt', filename: `blabla.txt`, quoted:mek}) // jangan lupa kasih teks image biar work // filenamenya yg blabla.txt ganti terserah kalian
// client nya sesuain sama bot kalian y
break
//// YANG LAINYA SAMA KAYAK TXT DIGANTI TXTNYA AJA

************************* YANG PAKE REPLY **************************

Yang pakai reply itu kalian harus punya functionya dulu guys 

[ CASE BIASA ] ( PESAN )
//// DIBAWAH V1
case 'tes':
reply('PESAN NYA MASUKIN SINI')
break
//// DIBAWAH V2
case 'tes':
reply(<functionye>)
break

# THANKS TO
• Baileys
• MhankBarBar
• MeMans

# NOMOR ADMIN
• 62882248593508
• 62882248593502

/*
]=====> 𝙼 𝚎 𝙼 𝚊 𝚗 𝚜 シ︎ <=====[
Mau bertanya tanya bisa hubungi
kontak gw ya untuk yang lain segera
menyusul jan lupa subscribe yt gue
]=====> 𝙼 𝚎 𝙼 𝚊 𝚗 𝚜 シ︎ <=====[
*/
