exports.limitcount = (prem, limitCounts) => {
	return`
*γ LIMIT COUNT γ*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` πββοΈ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar π`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

β’ Nama : ${pushname}
β’ Nomor : ${sender.split("@")[0]}
β’ Waktu : ${time}
β’ Serial : ${serialUser}
β’ Total User : ${totalUser.length}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` πββοΈ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`πββοΈ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`β οΈ Bot bukan admin grup`
	}
exports.err = () =>{
	return`β οΈ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`πββοΈ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`β³ Sedang di proses ~`
	}
exports.ok = () =>{
	return` β Oke done ~`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro Ya~
β―ΦΈ   ΦNama :
β―ΦΈ   ΦUmur :
β―ΦΈ   ΦKelamin :
β―ΦΈ   ΦAskot :
β°β α¬ _Patuhi Rules Group Ya_  >_<`
      }
exports.leave = () =>{
	return`
β
β°β α¬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

β­ββ¬£ *LIST MENU*
ββπ ${prefix}menu
ββπ ${prefix}help
β
β *GROUP MENU*
ββπ ${prefix}antilink enable/disable
ββπ ${prefix}hidetag [text]
ββπ ${prefix}linkgrup
ββπ ${prefix}tagall
ββπ ${prefix}kick @tag
ββπ  ${prefix}setdesc [text] 
ββπ ${prefix}setname [text] 
ββπ ${prefix}ceksewa
ββπ ${prefix}infogrup
ββπ ${prefix}promote
ββπ ${prefix}antivirtex
ββπ ${prefix}demote
ββπ ${prefix}listonline
ββπ ${prefix}leave
ββπ ${prefix}add
ββπ ${prefix}setppgrup
ββπ ${prefix}sider
ββπ ${prefix}kontag
ββπ ${prefix}sticktag
ββπ ${prefix}totag
β
β *DOWNLOAD MENU*
ββπ ${prefix}play [query]
ββπ ${prefix}song [judul lagu]
ββπ ${prefix}pinterest [query]
ββπ ${prefix}ytmp3 [url]
ββπ ${prefix}ytmp4 [url]
ββπ ${prefix}tiktok [url]
ββπ ${prefix}tiktoknowm [url]
ββπ ${prefix}tiktokwm [url]
ββπ ${prefix}tiktokaudio [url]
ββπ ${prefix}soundcloud [url]
ββπ ${prefix}telesticker [url]
β
β *DOWNLOAD MENU V2*
ββπ ${prefix}ytplay2
ββπ ${prefix}ytmp3v2
ββπ ${prefix}ytmp4v2
ββπ ${prefix}ytsearch2
ββπ ${prefix}telesticker2
ββπ ${prefix}tiktoknowm2
ββπ ${prefix}tiktokmusic2
ββπ ${prefix}spotify2
ββπ ${prefix}spotifysearch
ββπ ${prefix}jooxplay
ββπ ${prefix}igdl
ββπ ${prefix}igdl2
ββπ ${prefix}twtdl
ββπ ${prefix}fbdl
ββπ ${prefix}zippyshare
ββπ ${prefix}pinterest2
ββπ ${prefix}pinterest3
ββπ ${prefix}pinterestdl
ββπ ${prefix}xhamstersearch
ββπ ${prefix}xnxxsearch
ββπ ${prefix}xnxx
ββπ ${prefix}xhamster
β
β *CONVERT MENU*
ββπ ${prefix}stiker [video/image]
ββπ ${prefix}semoji π
ββπ ${prefix}smeme [text]
ββπ ${prefix}memegen [text|text2]
ββπ ${prefix}fast [video/vn]
ββπ ${prefix}tupai [video/vn]
ββπ ${prefix}vibra [video/vn]
ββπ ${prefix}robot [video/vn]
ββπ ${prefix}slow [video/vn]
ββπ ${prefix}bass [video/vn]
ββπ ${prefix}nightcore [video/vn]
β
β *EDUCATION MENU*
ββπ ${prefix}nuliskiri [text]
ββπ ${prefix}nuliskanan [text]
ββπ ${prefix}foliokiri [text]
ββπ ${prefix}foliokanan [text]
ββπ ${prefix}brainly
ββπ ${prefix}brainly2
β
β *GAME MENU*
ββπ ${prefix}tebakgambar 
ββπ ${prefix}sambungkata
ββπ ${prefix}canceltebakgambar
ββπ ${prefix}cancelsambungkata
β
β *STALK MENU*
ββπ ${prefix}stalkig
ββπ ${prefix}stalkgithub
ββπ ${prefix}stalktwitter
ββπ ${prefix}stalktiktok
β
β *OTHER MENU*
ββπ ${prefix}ssweb
ββπ ${prefix}ssweb2
ββπ ${prefix}shortlink
ββπ ${prefix}spamsms
β
β *RANDOM IMAGE MENU*
ββπ ${prefix}art
ββπ ${prefix}bts
ββπ ${prefix}exo
ββπ ${prefix}elf
ββπ ${prefix}loli
ββπ ${prefix}neko
ββπ ${prefix}husbu
ββπ ${prefix}sagiri
ββπ ${prefix}shinobu
ββπ ${prefix}megumin
ββπ ${prefix}wallnime
ββπ ${prefix}elf
ββπ ${prefix}chiisaihentai
ββπ ${prefix}trap
ββπ ${prefix}blowjob
ββπ ${prefix}yaoji
ββπ ${prefix}ecchi
ββπ ${prefix}hentai
ββπ ${prefix}ahegao
ββπ ${prefix}hololewd
ββπ ${prefix}sideoppai
ββπ ${prefix}animefeets
ββπ ${prefix}animebooty
ββπ ${prefix}animethighss
ββπ ${prefix}hentaiparadise
ββπ ${prefix}animearmpits
ββπ ${prefix}hentaifemdom
ββπ ${prefix}lewdanimegirls
βπ ${prefix}biganimetiddies
βπ ${prefix}animebellybutton
βπ ${prefix}hentai4everyone
β
β *RANDOM IMAGE MENU V2*
ββπ ${prefix}bj
ββπ ${prefix}ero
ββπ ${prefix}cum
ββπ ${prefix}feet
ββπ ${prefix}yuri
ββπ ${prefix}trap
ββπ ${prefix}lewd
ββπ ${prefix}feed
ββπ ${prefix}eron
ββπ ${prefix}solo
ββπ ${prefix}gasm
ββπ ${prefix}poke
ββπ ${prefix}anal
ββπ ${prefix}holo
ββπ ${prefix}tits
ββπ ${prefix}kuni
ββπ ${prefix}kiss
ββπ ${prefix}erok
ββπ ${prefix}smug
ββπ ${prefix}baka
ββπ ${prefix}solog
ββπ ${prefix}feetg
ββπ ${prefix}lewdk
ββπ ${prefix}waifu
ββπ ${prefix}pussy
ββπ ${prefix}femdom
ββπ ${prefix}cuddle
ββπ ${prefix}hentai2
ββπ ${prefix}eroyuri
ββπ ${prefix}cum_jpg
ββπ ${prefix}blowjob2
ββπ ${prefix}erofeet
ββπ ${prefix}holoero
ββπ ${prefix}classic
ββπ ${prefix}erokemo
ββπ ${prefix}fox_girl
ββπ ${prefix}futanari
ββπ ${prefix}lewdkemo
ββπ ${prefix}wallpaper2
ββπ ${prefix}pussy_jpg
ββπ ${prefix}kemonomimi
ββπ ${prefix}nsfw_avatar
β
β *INFO BANG*
ββπ ${prefix}owner
ββπ ${prefix}daftar
β
β *OWNER MENU*
ββπ ${prefix}sewa add/del waktu
ββπ ${prefix}listsewa
ββπ ${prefix}ceksewa
ββπ ${prefix}broadcast [text]
ββπ ${prefix}leave
βπ ${prefix}bcsticker
ββπ ${prefix}bcaudio
ββπ ${prefix}bcimage
ββπ ${prefix}bcvideo
ββπ ${prefix}bcgif
ββπ >
ββπ $
ββπ =>
β
β *ISLAM MENU*
ββπ ${prefix}listsurah
ββπ ${prefix}alquran
ββπ ${prefix}alquranaudio
ββπ ${prefix}kisahnabi
ββπ ${prefix}jadwalsholat
ββπ ${prefix}asmaulhusna
β
β *STICKER MENU*
ββπ ${prefix}sticker
ββπ ${prefix}stiker
ββπ ${prefix}stickergif
ββπ ${prefix}stikergif
ββπ ${prefix}sgif
ββπ s
β
β *MAKER MENU*
ββπ ${prefix}quotemaker3
ββπ ${prefix}stickerwmv2
ββπ ${prefix}stickerv2
ββπ ${prefix}roundsticker
ββπ ${prefix}stickernobg
ββπ ${prefix}takesticker
ββπ ${prefix}ttp
ββπ ${prefix}ttp1
ββπ ${prefix}ttp2
ββπ ${prefix}ttp3
ββπ ${prefix}ttp4
ββπ ${prefix}attp
β
β *ANIMANGA MENU*
ββπ ${prefix}anime
ββπ ${prefix}character
ββπ ${prefix}wait
ββπ ${prefix}kusonime
ββπ ${prefix}kusonimesearch
ββπ ${prefix}otakudesu
ββπ ${prefix}otakudesusearch
ββπ ${prefix}nhentai
ββπ ${prefix}nhentaipdf
ββπ ${prefix}nhentaisearch
ββπ ${prefix}nekopoi
ββπ ${prefix}nekopoisearch
β
β *INFORMATION MENU*
ββπ ${prefix}kbbi
ββπ ${prefix}brainly2
ββπ ${prefix}jarak
ββπ ${prefix}urbandictionary
ββπ ${prefix}chord
ββπ ${prefix}heroml
ββπ ${prefix}mlstalk
ββπ ${prefix}genshin
ββπ ${prefix}qrreader
ββπ ${prefix}wikipedia
ββπ ${prefix}translate
ββπ ${prefix}brainly
ββπ ${prefix}jadwaltv
ββπ ${prefix}jadwaltvnow
ββπ ${prefix}newsinfo
ββπ ${prefix}cnnindonesia
ββπ ${prefix}cnnnasional
ββπ ${prefix}cnninternasional
ββπ ${prefix}infogempa
ββπ ${prefix}lirik
ββπ ${prefix}cuaca
ββπ ${prefix}covidindo
ββπ ${prefix}covidglobal
ββπ ${prefix}kodepos
ββπ ${prefix}jadwalbola
ββπ ${prefix}indbeasiswa
ββπ ${prefix}hoax
ββπ ${prefix}nsfwcheck
ββπ ${prefix}ocr
β
β *FILM&STORY MENU*
ββπ ${prefix}lk21
ββπ ${prefix}drakorongoing
ββπ ${prefix}wattpad
ββπ ${prefix}wattpadsearch
ββπ ${prefix}cerpen
ββπ ${prefix}ceritahoror
β
β *RANDOM TEXT&QUOTES MENU*
ββπ ${prefix}quotes
ββπ ${prefix}quotesanime
ββπ ${prefix}quotesdilan
ββπ ${prefix}quotesimage
ββπ ${prefix}faktaunik
ββπ ${prefix}katabijak
ββπ ${prefix}pantun
ββπ ${prefix}bucin
ββπ ${prefix}randomnama
β
β *SEARCH MENU*
ββπ ${prefix}gimage
ββπ ${prefix}gimage2
ββπ ${prefix}konachan
ββπ ${prefix}wallpapersearch
ββπ ${prefix}wallpapersearch2
ββπ ${prefix}playstore
ββπ ${prefix}shopee
ββπ ${prefix}google
ββπ ${prefix}stickerwa
β
β *GABUT&KERANG AJAIB MENU*
ββπ ${prefix}artinama
ββπ ${prefix}jodoh
ββπ ${prefix}weton
ββπ ${prefix}jadian
ββπ ${prefix}tebakumur
ββπ ${prefix}bisakah
ββπ ${prefix}apakah
ββπ ${prefix}bisakah
ββπ ${prefix}ganteng
ββπ ${prefix}cantik
ββπ ${prefix}bego
ββπ ${prefix}pakgirl
ββπ ${prefix}pakboy
ββπ ${prefix}jelek
ββπ ${prefix}goblok
ββπ ${prefix}pinter
ββπ ${prefix}jago
ββπ ${prefix}nolep
ββπ ${prefix}monyet
ββπ ${prefix}babi
ββπ ${prefix}beban
ββπ ${prefix}baik
ββπ ${prefix}jahat
ββπ ${prefix}anjing
ββπ ${prefix}haram
ββπ ${prefix}wibu
ββπ ${prefix}hebat
ββπ ${prefix}sadboy
ββπ ${prefix}sadgirl
β
β *ENTERTAINMENT MENU*
ββπ ${prefix}asupan
ββπ ${prefix}wancak
ββπ ${prefix}sambungkata
ββπ ${prefix}cancelsambungkata
ββπ ${prefix}canceltebakgambar
β
β *DOSA MENU*
ββπ ${prefix}dosa1
ββπ ${prefix}dosa2
ββπ ${prefix}dosa3
ββπ ${prefix}dosa4
ββπ ${prefix}dosa5
ββπ ${prefix}dosa6
ββπ ${prefix}dosa7
ββπ ${prefix}dosa8
ββπ ${prefix}dosa9
ββπ ${prefix}dosa10
ββπ ${prefix}dosa11
ββπ ${prefix}dosa12
ββπ ${prefix}dosa13
ββπ ${prefix}dosa14
ββπ ${prefix}dosa15
ββπ ${prefix}dosa16
ββπ ${prefix}dosa17
ββπ ${prefix}dosa18
ββπ ${prefix}dosa19
ββπ ${prefix}dosa20
ββπ ${prefix}dosa21
ββπ ${prefix}dosa23
ββπ ${prefix}dosa24
ββπ ${prefix}dosa24

β°βBase ZEEONE OFC Recode By Foxzy β¬£
`
	}
	exports.sewabot = (prefix) => {
return `|I----OPEN SEWA BY FOXZY----I| 

β­ββ  β FITUR BOTZ β  βββ
ββ Antilink
ββ Antivirtex
ββ Leave
ββ Welcome
ββ Convert Menu
ββ Islam Menu
ββ Download Menu
ββ Download Menu V2
ββ Education Menu
ββ Sticker Menu
ββ Group Menu
ββ Game Menu
ββ Wibu Menu
ββ 18+ Menu
ββ DAN MENU LAINNYA
β°βββββββββββββ β³Ή
β­ε HargacSewa ε
β 1 Minggu : 5k
βPermanen Sampe Owner Pensi : 10k
βJoin Murid Bot Full Pengajaran+Free SC : 20k
βBuat Sc Store/Botz Free Req Tampilam+Menu : 30k
β°ββββββββββ β³Ή
β­ε OWNER ε
βhttps://wa.me/6281386383559
β°ββββββββββ β³Ή

KETIK #payment untuk mengetahui payment di bot ini

[β οΈπΌπππβ οΈ]
π©ππ«π¦ππ§ππ§ ππ?π€ππ§ ππ¦π©π π€π’ππ¦ππ­ ππ§π£

_FOXZY BOTZβοΈ_`

}