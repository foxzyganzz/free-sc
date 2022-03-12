exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` 🙅‍♀️ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar 😒`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

• Nama : ${pushname}
• Nomor : ${sender.split("@")[0]}
• Waktu : ${time}
• Serial : ${serialUser}
• Total User : ${totalUser.length}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`⏳ Sedang di proses ~`
	}
exports.ok = () =>{
	return` ✅ Oke done ~`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro Ya~
⌯ָ   ֙Nama :
⌯ָ   ֙Umur :
⌯ָ   ֙Kelamin :
⌯ָ   ֙Askot :
╰─ ᝬ _Patuhi Rules Group Ya_  >_<`
      }
exports.leave = () =>{
	return`
│
╰─ ᝬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *LIST MENU*
✗⃝🔖 ${prefix}menu
✗⃝🔖 ${prefix}help
│
├ *GROUP MENU*
✗⃝🔖 ${prefix}antilink enable/disable
✗⃝🔖 ${prefix}hidetag [text]
✗⃝🔖 ${prefix}linkgrup
✗⃝🔖 ${prefix}tagall
✗⃝🔖 ${prefix}kick @tag
✗⃝🔖  ${prefix}setdesc [text] 
✗⃝🔖 ${prefix}setname [text] 
✗⃝🔖 ${prefix}ceksewa
✗⃝🔖 ${prefix}infogrup
✗⃝🔖 ${prefix}promote
✗⃝🔖 ${prefix}antivirtex
✗⃝🔖 ${prefix}demote
✗⃝🔖 ${prefix}listonline
✗⃝🔖 ${prefix}leave
✗⃝🔖 ${prefix}add
✗⃝🔖 ${prefix}setppgrup
✗⃝🔖 ${prefix}sider
✗⃝🔖 ${prefix}kontag
✗⃝🔖 ${prefix}sticktag
✗⃝🔖 ${prefix}totag
│
├ *DOWNLOAD MENU*
✗⃝🔖 ${prefix}play [query]
✗⃝🔖 ${prefix}song [judul lagu]
✗⃝🔖 ${prefix}pinterest [query]
✗⃝🔖 ${prefix}ytmp3 [url]
✗⃝🔖 ${prefix}ytmp4 [url]
✗⃝🔖 ${prefix}tiktok [url]
✗⃝🔖 ${prefix}tiktoknowm [url]
✗⃝🔖 ${prefix}tiktokwm [url]
✗⃝🔖 ${prefix}tiktokaudio [url]
✗⃝🔖 ${prefix}soundcloud [url]
✗⃝🔖 ${prefix}telesticker [url]
│
├ *DOWNLOAD MENU V2*
✗⃝🔖 ${prefix}ytplay2
✗⃝🔖 ${prefix}ytmp3v2
✗⃝🔖 ${prefix}ytmp4v2
✗⃝🔖 ${prefix}ytsearch2
✗⃝🔖 ${prefix}telesticker2
✗⃝🔖 ${prefix}tiktoknowm2
✗⃝🔖 ${prefix}tiktokmusic2
✗⃝🔖 ${prefix}spotify2
✗⃝🔖 ${prefix}spotifysearch
✗⃝🔖 ${prefix}jooxplay
✗⃝🔖 ${prefix}igdl
✗⃝🔖 ${prefix}igdl2
✗⃝🔖 ${prefix}twtdl
✗⃝🔖 ${prefix}fbdl
✗⃝🔖 ${prefix}zippyshare
✗⃝🔖 ${prefix}pinterest2
✗⃝🔖 ${prefix}pinterest3
✗⃝🔖 ${prefix}pinterestdl
✗⃝🔖 ${prefix}xhamstersearch
✗⃝🔖 ${prefix}xnxxsearch
✗⃝🔖 ${prefix}xnxx
✗⃝🔖 ${prefix}xhamster
│
├ *CONVERT MENU*
✗⃝🔖 ${prefix}stiker [video/image]
✗⃝🔖 ${prefix}semoji 😎
✗⃝🔖 ${prefix}smeme [text]
✗⃝🔖 ${prefix}memegen [text|text2]
✗⃝🔖 ${prefix}fast [video/vn]
✗⃝🔖 ${prefix}tupai [video/vn]
✗⃝🔖 ${prefix}vibra [video/vn]
✗⃝🔖 ${prefix}robot [video/vn]
✗⃝🔖 ${prefix}slow [video/vn]
✗⃝🔖 ${prefix}bass [video/vn]
✗⃝🔖 ${prefix}nightcore [video/vn]
│
├ *EDUCATION MENU*
✗⃝🔖 ${prefix}nuliskiri [text]
✗⃝🔖 ${prefix}nuliskanan [text]
✗⃝🔖 ${prefix}foliokiri [text]
✗⃝🔖 ${prefix}foliokanan [text]
✗⃝🔖 ${prefix}brainly
✗⃝🔖 ${prefix}brainly2
│
├ *GAME MENU*
✗⃝🔖 ${prefix}tebakgambar 
✗⃝🔖 ${prefix}sambungkata
✗⃝🔖 ${prefix}canceltebakgambar
✗⃝🔖 ${prefix}cancelsambungkata
│
├ *STALK MENU*
✗⃝🔖 ${prefix}stalkig
✗⃝🔖 ${prefix}stalkgithub
✗⃝🔖 ${prefix}stalktwitter
✗⃝🔖 ${prefix}stalktiktok
│
├ *OTHER MENU*
✗⃝🔖 ${prefix}ssweb
✗⃝🔖 ${prefix}ssweb2
✗⃝🔖 ${prefix}shortlink
✗⃝🔖 ${prefix}spamsms
│
├ *RANDOM IMAGE MENU*
✗⃝🔖 ${prefix}art
✗⃝🔖 ${prefix}bts
✗⃝🔖 ${prefix}exo
✗⃝🔖 ${prefix}elf
✗⃝🔖 ${prefix}loli
✗⃝🔖 ${prefix}neko
✗⃝🔖 ${prefix}husbu
✗⃝🔖 ${prefix}sagiri
✗⃝🔖 ${prefix}shinobu
✗⃝🔖 ${prefix}megumin
✗⃝🔖 ${prefix}wallnime
✗⃝🔖 ${prefix}elf
✗⃝🔖 ${prefix}chiisaihentai
✗⃝🔖 ${prefix}trap
✗⃝🔖 ${prefix}blowjob
✗⃝🔖 ${prefix}yaoji
✗⃝🔖 ${prefix}ecchi
✗⃝🔖 ${prefix}hentai
✗⃝🔖 ${prefix}ahegao
✗⃝🔖 ${prefix}hololewd
✗⃝🔖 ${prefix}sideoppai
✗⃝🔖 ${prefix}animefeets
✗⃝🔖 ${prefix}animebooty
✗⃝🔖 ${prefix}animethighss
✗⃝🔖 ${prefix}hentaiparadise
✗⃝🔖 ${prefix}animearmpits
✗⃝🔖 ${prefix}hentaifemdom
✗⃝🔖 ${prefix}lewdanimegirls
⃝🔖 ${prefix}biganimetiddies
⃝🔖 ${prefix}animebellybutton
⃝🔖 ${prefix}hentai4everyone
│
├ *RANDOM IMAGE MENU V2*
✗⃝🔖 ${prefix}bj
✗⃝🔖 ${prefix}ero
✗⃝🔖 ${prefix}cum
✗⃝🔖 ${prefix}feet
✗⃝🔖 ${prefix}yuri
✗⃝🔖 ${prefix}trap
✗⃝🔖 ${prefix}lewd
✗⃝🔖 ${prefix}feed
✗⃝🔖 ${prefix}eron
✗⃝🔖 ${prefix}solo
✗⃝🔖 ${prefix}gasm
✗⃝🔖 ${prefix}poke
✗⃝🔖 ${prefix}anal
✗⃝🔖 ${prefix}holo
✗⃝🔖 ${prefix}tits
✗⃝🔖 ${prefix}kuni
✗⃝🔖 ${prefix}kiss
✗⃝🔖 ${prefix}erok
✗⃝🔖 ${prefix}smug
✗⃝🔖 ${prefix}baka
✗⃝🔖 ${prefix}solog
✗⃝🔖 ${prefix}feetg
✗⃝🔖 ${prefix}lewdk
✗⃝🔖 ${prefix}waifu
✗⃝🔖 ${prefix}pussy
✗⃝🔖 ${prefix}femdom
✗⃝🔖 ${prefix}cuddle
✗⃝🔖 ${prefix}hentai2
✗⃝🔖 ${prefix}eroyuri
✗⃝🔖 ${prefix}cum_jpg
✗⃝🔖 ${prefix}blowjob2
✗⃝🔖 ${prefix}erofeet
✗⃝🔖 ${prefix}holoero
✗⃝🔖 ${prefix}classic
✗⃝🔖 ${prefix}erokemo
✗⃝🔖 ${prefix}fox_girl
✗⃝🔖 ${prefix}futanari
✗⃝🔖 ${prefix}lewdkemo
✗⃝🔖 ${prefix}wallpaper2
✗⃝🔖 ${prefix}pussy_jpg
✗⃝🔖 ${prefix}kemonomimi
✗⃝🔖 ${prefix}nsfw_avatar
│
├ *INFO BANG*
✗⃝🔖 ${prefix}owner
✗⃝🔖 ${prefix}daftar
│
├ *OWNER MENU*
✗⃝🔖 ${prefix}sewa add/del waktu
✗⃝🔖 ${prefix}listsewa
✗⃝🔖 ${prefix}ceksewa
✗⃝🔖 ${prefix}broadcast [text]
✗⃝🔖 ${prefix}leave
⃝🔖 ${prefix}bcsticker
✗⃝🔖 ${prefix}bcaudio
✗⃝🔖 ${prefix}bcimage
✗⃝🔖 ${prefix}bcvideo
✗⃝🔖 ${prefix}bcgif
✗⃝🔖 >
✗⃝🔖 $
✗⃝🔖 =>
│
├ *ISLAM MENU*
✗⃝🔖 ${prefix}listsurah
✗⃝🔖 ${prefix}alquran
✗⃝🔖 ${prefix}alquranaudio
✗⃝🔖 ${prefix}kisahnabi
✗⃝🔖 ${prefix}jadwalsholat
✗⃝🔖 ${prefix}asmaulhusna
│
├ *STICKER MENU*
✗⃝🔖 ${prefix}sticker
✗⃝🔖 ${prefix}stiker
✗⃝🔖 ${prefix}stickergif
✗⃝🔖 ${prefix}stikergif
✗⃝🔖 ${prefix}sgif
✗⃝🔖 s
│
├ *MAKER MENU*
✗⃝🔖 ${prefix}quotemaker3
✗⃝🔖 ${prefix}stickerwmv2
✗⃝🔖 ${prefix}stickerv2
✗⃝🔖 ${prefix}roundsticker
✗⃝🔖 ${prefix}stickernobg
✗⃝🔖 ${prefix}takesticker
✗⃝🔖 ${prefix}ttp
✗⃝🔖 ${prefix}ttp1
✗⃝🔖 ${prefix}ttp2
✗⃝🔖 ${prefix}ttp3
✗⃝🔖 ${prefix}ttp4
✗⃝🔖 ${prefix}attp
│
├ *ANIMANGA MENU*
✗⃝🔖 ${prefix}anime
✗⃝🔖 ${prefix}character
✗⃝🔖 ${prefix}wait
✗⃝🔖 ${prefix}kusonime
✗⃝🔖 ${prefix}kusonimesearch
✗⃝🔖 ${prefix}otakudesu
✗⃝🔖 ${prefix}otakudesusearch
✗⃝🔖 ${prefix}nhentai
✗⃝🔖 ${prefix}nhentaipdf
✗⃝🔖 ${prefix}nhentaisearch
✗⃝🔖 ${prefix}nekopoi
✗⃝🔖 ${prefix}nekopoisearch
│
├ *INFORMATION MENU*
✗⃝🔖 ${prefix}kbbi
✗⃝🔖 ${prefix}brainly2
✗⃝🔖 ${prefix}jarak
✗⃝🔖 ${prefix}urbandictionary
✗⃝🔖 ${prefix}chord
✗⃝🔖 ${prefix}heroml
✗⃝🔖 ${prefix}mlstalk
✗⃝🔖 ${prefix}genshin
✗⃝🔖 ${prefix}qrreader
✗⃝🔖 ${prefix}wikipedia
✗⃝🔖 ${prefix}translate
✗⃝🔖 ${prefix}brainly
✗⃝🔖 ${prefix}jadwaltv
✗⃝🔖 ${prefix}jadwaltvnow
✗⃝🔖 ${prefix}newsinfo
✗⃝🔖 ${prefix}cnnindonesia
✗⃝🔖 ${prefix}cnnnasional
✗⃝🔖 ${prefix}cnninternasional
✗⃝🔖 ${prefix}infogempa
✗⃝🔖 ${prefix}lirik
✗⃝🔖 ${prefix}cuaca
✗⃝🔖 ${prefix}covidindo
✗⃝🔖 ${prefix}covidglobal
✗⃝🔖 ${prefix}kodepos
✗⃝🔖 ${prefix}jadwalbola
✗⃝🔖 ${prefix}indbeasiswa
✗⃝🔖 ${prefix}hoax
✗⃝🔖 ${prefix}nsfwcheck
✗⃝🔖 ${prefix}ocr
│
├ *FILM&STORY MENU*
✗⃝🔖 ${prefix}lk21
✗⃝🔖 ${prefix}drakorongoing
✗⃝🔖 ${prefix}wattpad
✗⃝🔖 ${prefix}wattpadsearch
✗⃝🔖 ${prefix}cerpen
✗⃝🔖 ${prefix}ceritahoror
│
├ *RANDOM TEXT&QUOTES MENU*
✗⃝🔖 ${prefix}quotes
✗⃝🔖 ${prefix}quotesanime
✗⃝🔖 ${prefix}quotesdilan
✗⃝🔖 ${prefix}quotesimage
✗⃝🔖 ${prefix}faktaunik
✗⃝🔖 ${prefix}katabijak
✗⃝🔖 ${prefix}pantun
✗⃝🔖 ${prefix}bucin
✗⃝🔖 ${prefix}randomnama
│
├ *SEARCH MENU*
✗⃝🔖 ${prefix}gimage
✗⃝🔖 ${prefix}gimage2
✗⃝🔖 ${prefix}konachan
✗⃝🔖 ${prefix}wallpapersearch
✗⃝🔖 ${prefix}wallpapersearch2
✗⃝🔖 ${prefix}playstore
✗⃝🔖 ${prefix}shopee
✗⃝🔖 ${prefix}google
✗⃝🔖 ${prefix}stickerwa
│
├ *GABUT&KERANG AJAIB MENU*
✗⃝🔖 ${prefix}artinama
✗⃝🔖 ${prefix}jodoh
✗⃝🔖 ${prefix}weton
✗⃝🔖 ${prefix}jadian
✗⃝🔖 ${prefix}tebakumur
✗⃝🔖 ${prefix}bisakah
✗⃝🔖 ${prefix}apakah
✗⃝🔖 ${prefix}bisakah
✗⃝🔖 ${prefix}ganteng
✗⃝🔖 ${prefix}cantik
✗⃝🔖 ${prefix}bego
✗⃝🔖 ${prefix}pakgirl
✗⃝🔖 ${prefix}pakboy
✗⃝🔖 ${prefix}jelek
✗⃝🔖 ${prefix}goblok
✗⃝🔖 ${prefix}pinter
✗⃝🔖 ${prefix}jago
✗⃝🔖 ${prefix}nolep
✗⃝🔖 ${prefix}monyet
✗⃝🔖 ${prefix}babi
✗⃝🔖 ${prefix}beban
✗⃝🔖 ${prefix}baik
✗⃝🔖 ${prefix}jahat
✗⃝🔖 ${prefix}anjing
✗⃝🔖 ${prefix}haram
✗⃝🔖 ${prefix}wibu
✗⃝🔖 ${prefix}hebat
✗⃝🔖 ${prefix}sadboy
✗⃝🔖 ${prefix}sadgirl
│
├ *ENTERTAINMENT MENU*
✗⃝🔖 ${prefix}asupan
✗⃝🔖 ${prefix}wancak
✗⃝🔖 ${prefix}sambungkata
✗⃝🔖 ${prefix}cancelsambungkata
✗⃝🔖 ${prefix}canceltebakgambar
│
├ *DOSA MENU*
✗⃝🔖 ${prefix}dosa1
✗⃝🔖 ${prefix}dosa2
✗⃝🔖 ${prefix}dosa3
✗⃝🔖 ${prefix}dosa4
✗⃝🔖 ${prefix}dosa5
✗⃝🔖 ${prefix}dosa6
✗⃝🔖 ${prefix}dosa7
✗⃝🔖 ${prefix}dosa8
✗⃝🔖 ${prefix}dosa9
✗⃝🔖 ${prefix}dosa10
✗⃝🔖 ${prefix}dosa11
✗⃝🔖 ${prefix}dosa12
✗⃝🔖 ${prefix}dosa13
✗⃝🔖 ${prefix}dosa14
✗⃝🔖 ${prefix}dosa15
✗⃝🔖 ${prefix}dosa16
✗⃝🔖 ${prefix}dosa17
✗⃝🔖 ${prefix}dosa18
✗⃝🔖 ${prefix}dosa19
✗⃝🔖 ${prefix}dosa20
✗⃝🔖 ${prefix}dosa21
✗⃝🔖 ${prefix}dosa23
✗⃝🔖 ${prefix}dosa24
✗⃝🔖 ${prefix}dosa24

╰─Base ZEEONE OFC Recode By Foxzy ⬣
`
	}
	exports.sewabot = (prefix) => {
return `|I----OPEN SEWA BY FOXZY----I| 

╭─═  ❃ FITUR BOTZ ❃  ═══
│❒ Antilink
│❒ Antivirtex
│❒ Leave
│❒ Welcome
│❒ Convert Menu
│❒ Islam Menu
│❒ Download Menu
│❒ Download Menu V2
│❒ Education Menu
│❒ Sticker Menu
│❒ Group Menu
│❒ Game Menu
│❒ Wibu Menu
│❒ 18+ Menu
│❒ DAN MENU LAINNYA
╰────────────┈ ⳹
╭回 HargacSewa 回
│ 1 Minggu : 5k
│Permanen Sampe Owner Pensi : 10k
│Join Murid Bot Full Pengajaran+Free SC : 20k
│Buat Sc Store/Botz Free Req Tampilam+Menu : 30k
╰─────────┈ ⳹
╭回 OWNER 回
│https://wa.me/6281386383559
╰─────────┈ ⳹

KETIK #payment untuk mengetahui payment di bot ini

[⚠️𝐼𝑛𝑓𝑜⚠️]
𝐩𝐞𝐫𝐦𝐚𝐧𝐞𝐧 𝐛𝐮𝐤𝐚𝐧 𝐚𝐦𝐩𝐞 𝐤𝐢𝐚𝐦𝐚𝐭 𝐚𝐧𝐣

_FOXZY BOTZ☕︎_`

}