/*
#Foxzy Botz WA X Paw Botz WA
#Recode By Foxzy Was Here X Paw Dev
#NO ENC?BELI ENAK AJA FREE
#RECODE MENU BY FOXZY
#FITUR JUALAN GW ENC
#SC GW UP YT ENC
#SC HASIL BELI NO ENC 100%
#YANG GW ENC JUALAN,FITUR PUNAH,TQ TO
# Haruka - UserBot
# Copyright (C) 2021 Haruka-Bot Created By ZeeoneOfc
#
# This file is a part of < https://github.com/zeeoneofc/Haruka/ >
# PLease read the GNU Affero General Public License in
# <https://www.github.com/zeeone/Haruka/blob/v1/LICENSE/>.
*/ 

// WhatsApp api
require('../settings/config.js')
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
	
//module exports
const axios = require("axios")
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")  
const crypto = require('crypto')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg') 
const figlet = require('figlet')
const fs = require('fs')
const gis = require('g-i-s')
const hx = require('hxz-api')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const request = require('request')
const speed = require('performance-now')
const util = require('util')
const yts = require( 'yt-search')
const ytdl = require("ytdl-core")
const toMs = require('ms')
const { sleep } = require('myfunc')
const zee = require('api-alphabot')
const phoneNum = require('awesome-phonenumber')

//library
const { simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../lib/functions')
const { fetchJson, kyun, fetchText } = require('../lib/fetcher')
const { color, bgcolor } = require('../lib/color')
const { yta, ytv} = require('../lib/y2mate')
const simple = require('../lib/simple')
const { uploadImages } = require('../lib/uploadimage')
const _sewa = require('../lib/sewa');
const dtod = "0@s.whatsapp.net"
const otod = "0@s.whatsapp.net"

//json
let antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('../database/user/register.js')
const tebakgambar = JSON.parse(fs.readFileSync('./database/game/tebakgambar.json'))
const sambungkata = JSON.parse(fs.readFileSync('./database/sambungkata.json'))
const akinator = JSON.parse(fs.readFileSync('./database/akinator.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));

/*
# language
# available now [ind]
*/
const  { ind } = require(`./help`)
lang = ind 

//times
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')


module.exports = haruka = async (haruka, mek) => {
	try {
		if (!mek.hasNewMessage) return
		mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
		const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
		const type = Object.keys(mek.message)[0]        
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'
		body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == "buttonsResponseMessage") && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : type == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const manti = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = haruka.user.jid
		const botNumberss = haruka.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? haruka.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const ownerNumber = [`${ownernumber}@s.whatsapp.net`] 
		const isOwner = mek.key.fromMe ? haruka.user.jid : ownerNumber.includes(sender)
		const totalchat = await haruka.chats.all()
		const groupMetadata = isGroup ? await haruka.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? haruka.user.jid : haruka.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? haruka.user.name : conts.notify || conts.vname || conts.name || '-'
		const isSewa = _sewa.checkSewaGroup(from, sewa)
        
        //apaya
        const isAntiLink = isGroup ? antilink.includes(from) : false
				
        
        //fake reply
			let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumbnail, surface: 200, message: `${botname} 🏟️\nBy ${ownername}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}},sendEphemeral: true}
      	  let fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumbnail}}}
   	     let fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
	        let fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${botname} 🏟️\nBy ${ownername}`, 'jpegThumbnail': thumbnail}}}
			let fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${botname}`, 'jpegThumbnail': thumbnail}}}
			let fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${botname}`, 'jpegThumbnail': thumbnail}}}
			let fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '99999', 'caption': `© ${ownername}`, 'jpegThumbnail': thumbnail}}}
			let floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': 'B826873620DD5947E683E3ABE663F263', 'participant':`0@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": botname , 'jpegThumbnail':thumbnail}}}}
			let fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© ${ownername}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumbnail, thumbnail: thumbnail,sendEphemeral: true}}}
            
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            haruka.sendMessage(from, teks, text, {quoted:mek})
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? haruka.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : haruka.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sleep = async (ms) => {
				return new Promise(resolve => setTimeout(resolve, ms));
			}
			
        function bytesToSize(bytes) {
				return new Promise((resolve, reject) => {
					const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
					if (bytes === 0) return 'n/a';
					const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
					if (i === 0) resolve(`${bytes} ${sizes[i]}`);
					resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
					});
				};
			
			const checkLimit = (sender) => {
				let found = false
				for (let lmt of _limit) {
					if (lmt.id === sender) {
						let limitCounts = limitawal - lmt.limit
						if (limitCounts <= 0) return haruka.sendMessage(from,`Limit kamu sudah habis`, text,{ quoted: mek})
						haruka.sendMessage(from, lang.limitcount(isPremium, limitCounts), text, { quoted : mek})
						found = true
					}
				}
					if (found === false) {
						let obj = { id: sender, limit: 1 }
						_limit.push(obj)
						fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
						haruka.sendMessage(from, lang.limitcount(isPremium, limitCounts), text, { quoted : mek})
						}
					}
			const isLimit = (sender) =>{ 
				let position = false
				for (let i of _limit) {
					if (i.id === sender) {
						let limits = i.limit
						if (limits >= limitawal ) {
							position = true
							haruka.sendMessage(from, lang.limitend(pushname), text, {quoted: mek})
							return true
						} else {
							_limit
							position = true
						return false
						}
					}
				}
				if (position === false) {
					const obj = { id: sender, limit: 0 }
					_limit.push(obj)
					fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
					return false
					}
				}
				
				const limitAdd = (sender) => {
					if (isOwner && isPremium) {return false;}
					let position = false
					Object.keys(_limit).forEach((i) => {
						if (_limit[i].id == sender) {
							position = i
							}
						})
				if (position !== false) {
					_limit[position].limit += 1
					fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
					}
				}
				

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        haruka.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            
			const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
					}
				const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    haruka.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            const sendFileFromUrl = async (from, url, caption, mek, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return haruka.sendMessage(from, await getBuffer(url), video ,{caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4' ,quoted: mek})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
                return haruka.sendMessage(from, await getBuffer(url), document, {mimetype: 'application/pdf', caption: caption, mentions: men ? men : [], quoted: mek })
            }
            if(mime.split("/")[0] === "image"){
                return haruka.sendMessage(from, await getBuffer(url), image ,{ caption: caption, mentions: men ? men : [], quoted: mek})
            }
            if(mime.split("/")[0] === "video"){
                return haruka.sendMessage(from, await getBuffer(url), video, {caption: caption, mentions: men ? men : [], mimetype: 'video/mp4', quoted: mek})
            }
            if(mime.split("/")[0] === "audio"){
                return haruka.sendMessage(from, await getBuffer(url), audio, {caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg', quoted: mek })
            }
        }

				// send message button
				const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
					const buttonMessage = {
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 1,
						};
						haruka.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);
					};
				const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
					them = gam1
					mediaxxaa = await haruka.prepareMessage(id, them, MessageType.location, {thumbnail: them})
					locmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						locationMessage: locmhan.message.locationMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 6
						}
						haruka.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
				const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
					them = vid1
					mediaxxaa = await haruka.prepareMessage(id, them, MessageType.video)
					vimhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						videoMessage: vimhan.message.videoMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 5
						}
						haruka.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
				const sendButImage = async(id, text1, desc1, vid1, but = [], options = {}) => {
					them = vid1
					mediaxxaa = await haruka.prepareMessage(id, them, MessageType.image, {thumbnail: Buffer.alloc(0)})
					imgmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						imageMessage: imgmhan.message.imageMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 4
						}
					haruka.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
				}
				
				// antilink
               if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                haruka.groupRemove(from, [sender])
            }
        }
		// Promote & Demote By Foxzy
		const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await haruka.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = haruka.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await haruka.groupMakeAdmin(to, [i])
           }else{
           reply("ANJAY NAIK JABATAN")
}
}
}
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await haruka.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = haruka.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await haruka.groupDemoteAdmin(to, [i])
           }else{
           reply("AOWKWKWKW TURUN JABATAN,KASIAN SEKALII")
}
}
}

			//game 
			if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    sendButMessage(from, "Selamat 😘 Jawaban kamu benar!", `• ${ownername}`, [{"buttonId": `.tebakgambar`,"buttonText": {"displayText": "Tebak Gambar"},"type": "RESPONSE"}], {quoted : mek})
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Salah!")
                }
            }
			 // Sambung Kata
            if (sambungkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = sambungkata[sender.split('@')[0]]
                userAnswer = budy.toLowerCase()
                if (userAnswer.startsWith(jawaban[jawaban.length - 1])) {
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sambungkata?apikey=${global.apikey}&text=${userAnswer}`)
                    await haruka.sendMessage(from, get_result.result, text, { quoted: ftroli }).then(() => {
                        sambungkata[sender.split('@')[0]] = get_result.result.toLowerCase()
                        fs.writeFileSync("./database/sambungkata.json", JSON.stringify(sambungkata))
                    })
                } else {
                    reply("Silahkan jawab dengan kata yang dimulai huruf " + jawaban[jawaban.length - 1])
                }
            }

           ////
            
			colors = ['red', 'pink', 'white', 'black', 'blue', 'yellow', 'green']
			const isHaruka = checkRegisteredUser(sender)
			const isPremium = premium.includes(sender) || isOwner
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')			 			  
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			
		//console termux
		if(!(isCmd)){
			console.log(('|\x1b[1;33m MSG \x1b[1;33m|'), time, chalk.yellow(budy), 'from', chalk.green(pushname), 'args :', chalk.green(args.length), 'in', chalk.green(groupName? groupName : 'Private chat'))
		}
		if(!(isCmd || mek.key.fromMe)){
			console.log(('|\x1b[1;32m CMD \x1b[1;37m|'), time, chalk.green(command), 'from', chalk.green(pushname), 'args :', chalk.green(args.length), 'in', chalk.green(groupName? groupName : 'Private chat'))
		}
		
		if (!mek.key.fromMe && global.self === true) return
//colong aja bang, ingat jgn asal colong ntr sc lu error
switch (command) {
case 'foxzy':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				sendButLocation(from, lang.menu(prefix, salam, pushname), '© ' + ownername, thumbnail, [{buttonId: '.owner', buttonText: {displayText: 'OWNER🧍‍'}, type: 1},{buttonId: '.infobot', buttonText:{displayText: 'INFOBOTZ🔰'}, type: 1}],{buttonId: '.menu', buttonText: {displayText: 'BACK MENU BUTTON⏩'}, type: 1}, {quoted: mek})
				break
case 'sewabot':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				sendButLocation(from, lang.sewabot(prefix), '© ' + ownername, thumbnail, [{buttonId: '.owner', buttonText: {displayText: 'OWNER🧍‍'}, type: 1},{buttonId: '.infobot', buttonText:{displayText: 'INFOBOTZ🔰'}, type: 1}],{buttonId: '.menu', buttonText: {displayText: 'BACK MENU BUTTON⏩'}, type: 1}, {quoted: mek})
				break
	case 'infobot':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`⃝👤INFO BOTZ
✗⃝🔖 Name Botz: FoxzyBotzWA
✗⃝🔖 Name Owner : FoxzyWasHere
✗⃝🔖 Nomor : @${sender.split('@')[0]}
------------------------------------------------------------
✗⃝🚨 ᴀᴛᴛᴇɴᴛɪᴏɴ

-ᴛʜᴀɴᴋs ғᴏʀ ᴀʟʟ ᴍʏ ᴛᴇᴀᴍ ᴀɴᴅ ᴍʏ ғʀɪᴇɴᴅs
-ᴛʜɪs sᴄʀɪᴘᴛ ɪs ғᴏʀ sʜᴀʟᴇ ɴᴏᴛ ғʀᴇᴇ
-ɪғ ʏᴏᴜ ғᴏᴜɴᴅ sᴏᴍᴇ ʙᴜɢ ɪ'ᴍ sᴏʀʀʏ ʙᴇᴄᴀᴜsᴇ ɪs sᴛɪʟʟ ᴜɴᴅᴇʀ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ
-ғᴏᴜᴍ ʙᴜɢ?? 
ʏᴏᴜ ᴄᴀɴ ᴄᴏɴᴛᴀᴄᴛ ᴘᴇʀsᴏɴ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ
-ᴄᴏᴍɪɴɢ sᴏᴏɴ ғᴏʀ ᴍᴀɴʏ ғᴇᴀᴛᴜʀᴇs  ! 
------------------------------------------------------------
✗⃝📌 𝐘𝐎𝐔𝐓𝐔𝐁𝐄: https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
------------------------------------------------------------
✗⃝📌𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌: https://instagram.com/foxzywashere
------------------------------------------------------------
✗⃝📌𝐆𝐈𝐓𝐇𝐔𝐁: https://github.com/foxzyganzz`)
break

case 'groupmenu':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

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
✗⃝🔖 ${prefix}totag`)
break

case 'downloadmenu':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

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
✗⃝🔖 ${prefix}telesticker [url]`)
break
case 'convertmenu':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

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
✗⃝🔖 ${prefix}nightcore [video/vn`)
break

case 'convertmenu':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

├ *EDUCATION MENU*
✗⃝🔖 ${prefix}nuliskiri [text]
✗⃝🔖 ${prefix}nuliskanan [text]
✗⃝🔖 ${prefix}foliokiri [text]
✗⃝🔖 ${prefix}foliokanan [text]`)
break

case 'gamemenu':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

├ *GAME MENU*
✗⃝🔖 ${prefix}tebakgambar 
✗⃝🔖 COMING SOON ADD FITUR`)
break
case 'ownermenu':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

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
✗⃝🔖 =>`)
break

case 'ownermenu':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

├ *STICKER MENU*
✗⃝🔖 ${prefix}sticker
✗⃝🔖 ${prefix}stiker
✗⃝🔖 ${prefix}stickergif
✗⃝🔖 ${prefix}stikergif
✗⃝🔖 ${prefix}sgif
✗⃝🔖 s`)
break

case 'dosamenu':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

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
✗⃝🔖 ${prefix}dosa24`)
break

case 'islammenu':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

├ *ISLAM MENU*
✗⃝🔖 ${prefix}listsurah
✗⃝🔖 ${prefix}alquran
✗⃝🔖 ${prefix}alquranaudio
✗⃝🔖 ${prefix}kisahnabi
✗⃝🔖 ${prefix}jadwalsholat
✗⃝🔖 ${prefix}asmaulhusna`)
break

case 'downloadmenu2':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

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
✗⃝🔖 ${prefix}xhamster`)
break

case 'animexmangamenu':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

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
✗⃝🔖 ${prefix}nekopoisearch`)
break

case 'informationmenu':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

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
✗⃝🔖 ${prefix}ocr`)
break
case 'filmstorymenu':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

├ *FILM&STORY MENU*
✗⃝🔖 ${prefix}lk21
✗⃝🔖 ${prefix}drakorongoing
✗⃝🔖 ${prefix}wattpad
✗⃝🔖 ${prefix}wattpadsearch
✗⃝🔖 ${prefix}cerpen
✗⃝🔖 ${prefix}ceritahoror`)
break
case 'randomtextquotesmenu':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

├ *RANDOM TEXT&QUOTES MENU*
✗⃝🔖 ${prefix}quotes
✗⃝🔖 ${prefix}quotesanime
✗⃝🔖 ${prefix}quotesdilan
✗⃝🔖 ${prefix}quotesimage
✗⃝🔖 ${prefix}faktaunik
✗⃝🔖 ${prefix}katabijak
✗⃝🔖 ${prefix}pantun
✗⃝🔖 ${prefix}bucin
✗⃝🔖 ${prefix}randomnama`)
break

case 'searchmenu':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

├ *RANDOM TEXT&QUOTES MENU*
✗⃝🔖 ${prefix}quotes
✗⃝🔖 ${prefix}quotesanime
✗⃝🔖 ${prefix}quotesdilan
✗⃝🔖 ${prefix}quotesimage
✗⃝🔖 ${prefix}faktaunik
✗⃝🔖 ${prefix}katabijak
✗⃝🔖 ${prefix}pantun
✗⃝🔖 ${prefix}bucin
✗⃝🔖 ${prefix}randomnama`)
break

case 'gabutmenu':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

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
✗⃝🔖 ${prefix}sadgirl`)
break

case 'entertainmentmenu':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

├ *ENTERTAINMENT MENU*
✗⃝🔖 ${prefix}asupan
✗⃝🔖 ${prefix}wancak
✗⃝🔖 ${prefix}sambungkata
✗⃝🔖 ${prefix}cancelsambungkata
✗⃝🔖 ${prefix}canceltebakgambar`)
break
case 'makermenu':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

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
✗⃝🔖 ${prefix}attp`)
break

case 'imgmenu':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

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
⃝🔖 ${prefix}hentai4everyone`)
break

case 'imgmenu2':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

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
✗⃝🔖 ${prefix}nsfw_avatar`)
break

case 'stalkmenu':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

├ *STALK MENU*
✗⃝🔖 ${prefix}stalkig
✗⃝🔖 ${prefix}stalkgithub
✗⃝🔖 ${prefix}stalktwitter
✗⃝🔖 ${prefix}stalktiktok`)
break

case 'othermenu':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply(`Hai kak ${pushname} ${salam}
semoga hari mu menyenangkan

✗⃝💞Stay Healty
✗⃝⏰Time Indonesia : ${time}
✗⃝🔋NameBotz :  FoxzyBotz WA
✗⃝⏲️Yotube-Instagram-Github:
https://www.youtube.com/channel/UCNdRrmmOqNbxDrp85USLXig
https://instagram.com/foxzywashere
https://github.com/foxzyganzz
✗⃝🪀Owner : ${ownername} (@${ownernumber})
✗⃝📚Lib : Baileys Version 3.5.2
✗⃝⚒️PREFIX : MULTI-PREFIX
✗⃝📎WA VERSION : BASE NEW
✗⃝🖥Mode :  PUBLIC
------------------------------------------------------------
✗⃝👤YOUR INFO
✗⃝🔖 Name : _${pushname}_
✗⃝🔖 Nomor : _@${sender.split('@')[0]}_
------------------------------------------------------------

│
├ *OTHER MENU*
✗⃝🔖 ${prefix}ssweb
✗⃝🔖 ${prefix}ssweb2
✗⃝🔖 ${prefix}shortlink
✗⃝🔖 ${prefix}spamsms`)
break



//------------------< Sewa >-------------------
       case 'sewa':
              if (!isGroup)return reply(`Bisanya Di grup dek`)
              if (!isOwner) return reply(`khusus owner bang`)
              if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
              if (args[0].toLowerCase() === 'add'){
            _sewa.addSewaGroup(from, args[1], sewa)
              reply(`Success`)
              } else if (args[0].toLowerCase() === 'del'){
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./database/group/sewa.json', JSON.stringify(sewa))
              reply(`Succes Ngab`)
              } else {
              reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
}
              break
       case 'sewalist': 
       case 'listsewa':
              let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
              reply(txtnyee)
              break
       case 'sewacheck':
       case 'ceksewa': 
              if (!isGroup) return reply(`Bisanya Di grup dek`)
              if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
              let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
              let premiumnya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
              reply(premiumnya)
              break
			  case 'antilink':
              if (!isGroup) return reply(`Bisanya Di grup dek`)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let isMedia = antilink.indexOf(from)
              antilink.splice(isMedia, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
case 'owner':{
	if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
		const ownerContact = [ownernumber, "", "", "", "", "", "", "", "", "", "" , "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
		let ini_list = []
		for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
			const vname = haruka.contacts[i] != undefined ? haruka.contacts[i].vname || haruka.contacts[i].notify : undefined
			ini_list.push({
				"displayName": `${ownername}`,
				"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
				})
				}
				hehe = await haruka.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: mek })
					haruka.sendMessage(from, `Nih Kak Contact Owner Ku, Cuma Sv Nomor Cewe Ya 🤝`, text, {quoted: hehe})
				}
			break
			case 'yabang': case 'yatod':
 listMsg = {
 buttonText: 'KLIK DISINI',
 footerText: '*_©FoxzyWasHere_*',
 description: `_*🙅‍♀️ Halo ${pushname} Selamat ${salam} *_\n\n • Nama : ${pushname}
 GUNAKAN BOT DENGAN BIJAK
 DAN JANGAN SPAM YA KAK
 BOT BY FOXZY WAS HERE\n\n`,
 sections: [
                     {
                      "title": `Selamat ${salam} Bot WhatsApp By Foxzy Was Here`,
 rows: [
						{
                              "title": "_[🛒]STORE MENU_",
                              "description": "MENAMPILKAN SEMUA JASA & JUALAN",
                              "rowId": ".listnya"
                           },
                          {
                              "title": "_[🌐]ALL MENU BOTZ_",
                              "description": "MENAMPILKAN SEMUA MENU",
                              "rowId": ".foxzy"
                           },
						    {
                              "title": "_[⚡]ANIMEXMANGA MENU_",
							  "description": "MENAMPILKAN ANIME MENU",
                              "rowId": ".animexmangamenu"
                           },
						   {
                              "title": "_[⚡]STALK MENU_",
							  "description": "MENAMPILKAN MENU STALKING SOSMED",
                              "rowId": ".stalkmenu"
                           },
						   {
                              "title": "_[〽]INFORMATION MENU_",
							  "description": "MENAMPILKAN MENU YANG BERGUNA",
                              "rowId": ".informationmenu"
                           },
						   {
                              "title": "_[💠]FILM & STORY MENU_",
							  "description": "MENAMPILKAN FILM X STORY MENU",
                              "rowId": ".filmstorymenu"
                           },
						   {
                              "title": "_[💠]OTHER MENU_",
							  "description": "MENAMPILKAN FILM X STORY MENU",
                              "rowId": ".filmstorymenu"
                           },
						   {
                              "title": "_[🔹]RANDOM TEXT&QUOTES MENU_",
							  "description": "MENAMPILKAN RANDOM MENU",
                              "rowId": ".'randomtextquotesmenu"
                           },
						   {
                              "title": "_[♠]SEARCH MENU_",
							  "description": "MENAMPILKAN SEARCH MENU",
                              "rowId": ".searchmenu"
                           },
						   {
                              "title": "_[♣]GABUT & KERANG AJAIB MENU_",
							  "description": "MENAMPILKAN SEARCH MENU",
                              "rowId": ".gabutmenu"
                           },
						   {
                              "title": "_[⚡]ENTERTAINMENT MENU_",
							  "description": "MENAMPILKAN ENTERTAINMENT MENU",
                              "rowId": ".entertainmentmenu"
                           },
						   {
                              "title": "_[🕋]ISLAM MENU_",
							  "description": "MENAMPILKAN ISLAM MENU",
                              "rowId": ".islammenu"
                           },
						   {
                              "title": "_[🎭]STICKER MENU_",
							  "description": "MENAMPILKAN MENU STIKER",
                              "rowId": ".stickermenu"
                           },
						   {
                              "title": "_[🎭]RANDOM IMAGE MENU🎭_",
							  "description": "MENAMPILKAN MENU GAMBAR RANDOM",
                              "rowId": ".imgmenu"
                           },
						   {
                              "title": "_[🎭]RANDOM IMAGE MENU V2🎭_",
							  "description": "MENAMPILKAN MENU GAMBAR RANDOM V2",
                              "rowId": ".imgmenu2"
                           },
                           {
                              "title": "_[🚻]GROUP MENU_",
							  "description": "MENAMPILKAN GROUP MENU",
                              "rowId": ".groupmenu"
                           },
                           {
                              "title": "_[🔱]DOWNLOAD MENU_",
							  "description": "MENAMPILKAN DOWNLOAD MENU",
                              "rowId": ".downloadmenu"
                           },
						   {
                              "title": "_[🔱]OTHER MENU_",
							  "description": "MENAMPILKAN OTHER MENU",
                              "rowId": ".othermenu"
                           },
						   {
                              "title": "_[🔱]DOWNLOAD MENU V2_",
							  "description": "MENAMPILKAN DOWNLOAD MENU VERSI 2",
                              "rowId": ".downloadmenu2"
                           },
						    {
                              "title": "_[♻]CONVERT MENU_",
							  "description": "MENAMPILKAN CONVERT MENU",
                              "rowId": ".convertmenu"
                           },
						   {
                              "title": "_[📚]EDUCATION MENU_",
							  "description": "MENAMPILKAN BANTU TUGAS MENU",
                              "rowId": ".educationmenu"
                           },
						   {
                              "title": "_[🎮]GAME MENU_",
							  "description": "MENAMPILKAN GAME MENU",
                              "rowId": ".gamemenu"
                           },
						   {
                              "title": "_[🔞]DOSA MENU_",
							  "description": "DOSA TANGGUNG SENDIRI:V",
                              "rowId": ".dosamenu"
                           },
						   {
                              "title": "_[🙅]OWNER MENU_",
							  "description": "KHUSUS OWNER BANG:V",
                              "rowId": ".ownermenu"
                           },
                           {
                              "title": "_[🔰]INFO BOTZ_",
							  "description": "MENAMPILKAN SEMUA MENU",
                              "rowId": ".infobot"
                           },
                        ]
                     }],
 listType: 1
}
haruka.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted: ftroli})
break

case 'menu': case 'help':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '🙅‍♀️ Halo Kak Saya FoxzyBotz *_\n\n • Nama Botz: FoxzyBotzWA\n • Nomor Owner:\nwa.me/6281386383559\n• Jangan Spam Ya Kak\n• Nama Owner : FoxzyWasHere\n• SC BASE:ZEEONE OFC\n RECODE BY: FOXZY WAS HERE\n• JANGAN LUPA SUBS:\n- ZEEONE OFC\n -FoxzyMods\nJoin Grup:https://chat.whatsapp.com/ExiDZoKE1Nr3VP0F8ZK6zs\n *SILAHKAN PENCET MENU DI BAWAH UNTUK MELIHAT MENU BOT*\n\n@FOXZYBOTZWA\n', '© ' + ownername, thumbnail, [{buttonId: `.oh ${q}`, buttonText: {displayText: 'MENU🧸'}, type: 1},{buttonId: `.listnya ${q}`, buttonText:{displayText: 'MENU STORE🛒'}, type: 1},{buttonId: `.donasi ${q}`, buttonText:{displayText: 'DONASI'}, type: 1}], {quoted: mek})
break

case 'oh': case 'ohh':
 listMsg = {
 buttonText: 'KLIK DISINI',
 footerText: '*_©FoxzyWasHere_*',
 description: `_*🙅‍♀️ Halo ${pushname} Selamat ${salam} *_\n\n • Nama : ${pushname}
 • Nomor : wa.me/${sender.split("@")[0]}
 • Waktu  : ${time}
 • Nama Owner : FoxzyWasHere
 • SC BASE:ZEEONE OFC 
   RECODE :BY FOXZY WAS HERE
 • JANGAN LUPA SUBS: 
 - Zeeone OFC
 -Foxzy Mods
 Join Grup:https://chat.whatsapp.com/ExiDZoKE1Nr3VP0F8ZK6zs\n`,
 sections: [
                     {
                      "title": `Selamat ${salam} Botz WhatsApp By Foxzy Was Here`,
 rows: [
						   {
                              "title": "_[🔰]DONASI_",
							   "description": "DONASI KAK:V SE IKHLASNYA HEHEHE:)",
                              "rowId": ".donasi"
                           },
                          {
                              "title": "_[🧸]MENU BOTZ_",
                              "description": "MENAMPILKAN MENU BOT",
                              "rowId": ".yabang"
                           },
                           {
                              "title": "_[🛒]MENU STORE_",
							   "description": "ALL JUALAN OWNER",
                              "rowId": ".listnya"
                           },
                           {
                              "title": "_[🙅]OWNER BOTZ_",
							   "description": "OWNER NIH BANG",
                              "rowId": ".owner"
                           },
                           {
                              "title": "_[🔰]INFO BOTZ_",
							   "description": "INFO BOTZ NYA BANG",
                              "rowId": ".infobot"
                           },
						   {
                              "title": "_[🔰]TQ TO_",
							   "description": "THANKS TO AND ALL NAME MY FRIENDS",
                              "rowId": ".tqto"
                           },
                        ]
                     }],
 listType: 1
}
haruka.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted: ftroli})
break
//batas
case 'pilihan':
 listMsg = {
 buttonText: 'KLIK DISINI',
 footerText: '*_©FoxzyWasHere_*',
 description: `_*🙅‍♀️ Halo ${pushname} Selamat ${salam} *_\n\n • Nama : ${pushname}
 • Nomor : wa.me/${sender.split("@")[0]}
 • Waktu  : ${time}
 • Nama Owner : FoxzyWasHere
  
 Jual jasa OTAV (One Time Account Verification)
• Harga sangat terjangkau (paling murah SE-INDONESIA)
• Garansi berlaku apabila OTAV gagal terkirim
Harga: mulai dari 1k-15k (Tergantung negara) 🌐
Pembayaran bisa dilakukan via:
• Dana
• Gopay 
• OVO
• QRIS ALL PAYMENT
Tanya-tanya bisa melalui WA dibawah 👇🏼
Minat? chat wa.me/6281386383559 (FOXZY SELLER)

NB:UNTUK HARGA NOMOR YANG ADA DI BOT INI
ADALAH HARGA UNTUK APLIKASI WHATSAPP.
harga akan berbeda jika anda ingin melakukan OTAV untuk aplikasi lain 
(misalnya Discord,Telegram,Tinder,OLX,Tiktok,Instagram,Paypal,Gojek,dll)

HALO KAK
	SILAHKAN PILIH LIST NOKOS
	DIBAWAH INI,ITU DI PISAH KARNA TERLALU PANJANG:\n`,
 sections: [
                     {
                      "title": `Selamat ${salam} Botz WhatsApp By Foxzy Was Here`,
 rows: [
                          {
                              "title": "_[🛒]LIST NOKOS 1_",
                              "description": "LIST NOKOS 1-30",
                              "rowId": ".li1"
                           },
                           {
                              "title": "_[🛒]LIST NOKOS 2_",
							   "description": "LIST NOKOS 31-60",
                              "rowId": ".li2"
                           },
                           {
                              "title": "_[🛒]LIST NOKOS 3_",
							   "description": "LIST NOKOS 61-78",
                              "rowId": ".li3"
                           },
                        ]
                     }],
 listType: 1
}
haruka.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted: ftroli})
break
case 'listnya':
 listMsg = {
 buttonText: 'KLIK DISINI',
 footerText: '*_©FoxzyWasHere_*',
 description: `_*🙅‍♀️ Halo ${pushname} Selamat ${salam} *_\n\n • Nama : ${pushname}
 SELAMAT DATANG DI STORE FOXZY
 YA DI STORE INI MENYEDIAKAN SEMUA JUALAN DAN JASA
 SILAHKAN PILIH SAJA LIST DI BAWAH INI\N\n`,
 sections: [
                     {
                      "title": `Selamat ${salam} | BACA KETENTUAN TERLEBIH DAHULU`,
 rows: [
							{
                              "title": "_⚠️KETENTUAN STORE_",
							  "description": "WAJIB BACA KETENTUAN DAN PERATURAN",
                              "rowId": ".ketentuan"
                           },
                           {
                              "title": "_[🛒]NOKOS LUAR/INDO_",
							  "description": "NOMOR KOSONG SEMUA APK+NEGARA",
                              "rowId": ".pilihan"
                           },
                           {
                              "title": "_[🛒]SEMUA JASA OWNER_",
							  "description": "ALL JASA OWNER",
                              "rowId": ".storenya"
                           },
                           {
                              "title": "_[🛒]KEBUTUHAN SOSMED_",
							  "description": "KEBUTUHAN SOSMED ALL APK SOSMED",
                              "rowId": ".owner"
                           },
                           {
                              "title": "_[🛒]KEBUTUHAN GAME_",
							  "description": "JASA TOP UP/KEBUTUHAN ALL GAME",
                              "rowId": ".infobot"
                           },
                        ]
                     }],
 listType: 1
}
haruka.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted: ftroli})
break
//  li1

case 'li1':
 listMsg = {
 buttonText: 'KLIK DISINI',
 footerText: '*_©FoxzyWasHere_*',
 description: `_*🙅‍♀️ Halo ${pushname} Selamat ${salam} *_\n\n • Nama : ${pushname}
 Jual jasa OTAV (One Time Account Verification)
• Harga sangat terjangkau (paling murah SE-INDONESIA)
• Garansi berlaku apabila OTAV gagal terkirim
Harga: mulai dari 1k-15k (Tergantung negara) 🌐
Pembayaran bisa dilakukan via:
• Dana
• Gopay 
• OVO
• QRIS (Up to 1k)
Tanya-tanya bisa melalui WA dibawah 👇🏼
Minat? chat wa.me/6281386383559 (FOXZY SELLER)
⚠️ PERHATIAN! ⚠️
• Harga dibawah merupakan harga OTAV untuk WhatsApp, 
harga akan berbeda jika anda ingin melakukan OTAV untuk aplikasi lain 
(misalnya Discord,Telegram,Tinder,OLX,dll)

 • NOTE NOMOR MASIH FRESH,DAN 
 - SETIAP BELI NOMOR ADA KETENTUAN
 -SILAHKAN PILIH PEMBAYARAN METHODE APA
 Jangan Lupa Join Grup:
 https://chat.whatsapp.com/ExiDZoKE1Nr3VP0F8ZK6zs
 
 SILAHKAN PILIH NOKOS DI BAWAH INI\n`,
 sections: [
                     {
                      "title": `Selamat ${salam} Botz WhatsApp By Foxzy Was Here`,
 rows: [
                          {
                              "title": "_[🛒]Algeria (+213)_",
                              "rowId": ".1"
                           },
                           {
                              "title": "_[🛒]Argentina (+54)_",
                              "rowId": ".2"
                           },
                           {
                              "title": "_[🛒]Austria (+43)_",
                              "rowId": ".3"
                           },
                           {
                              "title": "_[🛒]Azerbaijan (+994)_",
                              "rowId": ".4"
                           },
						   {
                              "title": "_[🛒]Belarus (+375)_",
                              "rowId": ".5"
                           },
						   {
                              "title": "_[🛒]Belgium (+32)_",
                              "rowId": ".6"
                           },
						   {
                              "title": "_[🛒]Bolivia (+591)_",
                              "rowId": ".7"
                           },
						   {
                              "title": "_[🛒Brazil (+55)_",
                              "rowId": ".8"
                           },
						   {
                              "title": "_[🛒]Cambodia (+855)_",
                              "rowId": ".9"
                           },
						   {
                              "title": "_[🛒]Croatia (+385)_",
                              "rowId": ".10"
                           },
						   {
                              "title": "_[🛒]Cyprus (+357)NO LANGKA_",
                              "rowId": ".11"
                           },
						   {
                              "title": "_[🛒]Côte d'Ivoire (+225)_",
                              "rowId": ".12"
                           },
						   {
                              "title": "_[🛒]Egypt (+20)_",
                              "rowId": ".13"
                           },
						   {
                              "title": "_[🛒]El Salvador (+503)_",
                              "rowId": ".14"
                           },
						   {
                              "title": "_[🛒]Estonia (+372)_",
                              "rowId": ".15"
                           },
						   {
                              "title": "_[🛒]Ethiopia (+251)_",
                              "rowId": ".16"
                           },
						   {
                              "title": "_[🛒]France (+33)_",
                              "rowId": ".17"
                           },
						   {
                              "title": "_[🛒]Gambia (+220)_",
                              "rowId": ".18"
                           },
						   {
                              "title": "_[🛒]Germany (+49)_",
                              "rowId": ".19"
                           },
						   {
                              "title": "_[🛒]Ghana (+233)_",
                              "rowId": ".20"
                           },
						   {
                              "title": "_[🛒]China (+86)_",
                              "rowId": ".21"
                           },
						   {
                              "title": "_[🛒]Cameroon (+237)_",
                              "rowId": ".22"
                           },
						   {
                              "title": "_[🛒]Canada (+1) CUSTOM DIGIT_",
                              "rowId": ".23"
                           },
						   {
                              "title": "_[🛒]Chad (+235)_",
                              "rowId": ".24"
                           },
						   {
                              "title": "_[🛒]Greece (+30)_",
                              "rowId": ".25"
                           },
						   {
                              "title": "_[🛒]Haiti (+509)_",
                              "rowId": ".26"
                           },
						   {
                              "title": "_[🛒]Hong Kong (+852)_",
                              "rowId": ".27"
                           },
						   {
                              "title": "_[🛒India (+91)_",
                              "rowId": ".28"
                           },
						   {
                              "title": "_[🛒]Indonesia (+62)_",
                              "rowId": ".29"
                           },
						   {
                              "title": "_[🛒]India (+91)_",
                              "rowId": ".30"
                           },
                        ]
                     }],
 listType: 1
}
haruka.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted: ftroli})
break
// LIST 1-30
case '1':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n ALGERIA (+213)\nHARGA:6K/6.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break 
case '2':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Argentina (+54)\nHARGA:6K/6.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '3':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Austria (+43)\nHARGA:7K/7.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '4':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Azerbaijan (+994)\nFREE BERSYARAT/HARGA:4K/4.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '5':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Belarus (+375)\nHARGA:10K/10.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '6':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Belgium (+32)\nHARGA:7K/7.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '7':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Bolivia (+591)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '8':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Brazil (+55)\nHARGA:6K/6.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '9':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Cambodia (+855)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '10':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Croatia (+385)\nHARGA:6K/6.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '11':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Cyprus (+357)NO LANGKA\nHARGA:15K/15.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '12':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Côte d Ivoire (+225)\nHARGA:8K/8.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '13':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Egypt (+20)\nHARGA:8K/8.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '14':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n El Salvador (+503)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '15':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Estonia (+372)\nHARGA:6K/6.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '16':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Ethiopia (+251)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '17':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n France (+33)\nHARGA:7K/7.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '18':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Gambia (+220)\nHARGA:6K/6.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '19':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Germany (+49)\nHARGA:8K/8.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '20':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Ghana (+233)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '21':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n China (+86)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '22':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Cameroon (+237)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '23':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Canada (+1) CUSTOM DIGIT\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '24':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Chad (+235)\nHARGA:6K/6.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '25':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Greece (+30)\nHARGA:6K/6.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '26':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Haiti (+509)\nHARGA:6K/6.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '27':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Hong Kong (+852)\nHARGA:7K/7.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '28':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n India (+91)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '29':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Indonesia (+62)\nHARGA:1K/1.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '30':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Iran (+98)\nHARGA:9K/9.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break

// li2
case 'li2':
 listMsg = {
 buttonText: 'KLIK DISINI',
 footerText: '*_©FoxzyWasHere_*',
 description: `_*🙅‍♀️ Halo ${pushname} Selamat ${salam} *_\n\n • Nama : ${pushname}
 Jual jasa OTAV (One Time Account Verification)
• Harga sangat terjangkau (paling murah SE-INDONESIA)
• Garansi berlaku apabila OTAV gagal terkirim
Harga: mulai dari 1k-15k (Tergantung negara) 🌐
Pembayaran bisa dilakukan via:
• Dana
• Gopay 
• OVO
• QRIS (Up to 1k)
Tanya-tanya bisa melalui WA dibawah 👇🏼
Minat? chat wa.me/6281386383559 (FOXZY SELLER)
⚠️ PERHATIAN! ⚠️
• Harga dibawah merupakan harga OTAV untuk WhatsApp, 
harga akan berbeda jika anda ingin melakukan OTAV untuk aplikasi lain 
(misalnya Discord,Telegram,Tinder,OLX,dll)

• NOTE NOMOR MASIH FRESH,DAN 
 - SETIAP BELI NOMOR ADA KETENTUAN
 -SILAHKAN PILIH PEMBAYARAN METHODE APA
 Jangan Lupa Join Grup:
 https://chat.whatsapp.com/ExiDZoKE1Nr3VP0F8ZK6zs
 
 SILAHKAN PILIH NOKOS DI BAWAH INI\n`,
 sections: [
                     {
                      "title": `Selamat ${salam} Botz WhatsApp By Foxzy Was Here`,
 rows: [
                          {
                              "title": "_[🛒]Ireland (+353)_",
                              "rowId": ".31"
                           },
                           {
                              "title": "_[🛒]Israel (+972)_",
                              "rowId": ".32"
                           },
                           {
                              "title": "_[🛒]Kazakhstan (+7)_",
                              "rowId": ".32"
                           },
                           {
                              "title": "_[🛒]Kenya (+254)_",
                              "rowId": ".24"
                           },
						   {
                              "title": "_[🛒]Kyrgyztan (+996)_",
                              "rowId": ".35"
                           },
						   {
                              "title": "_[🛒]Macao (+853)_",
                              "rowId": ".36"
                           },
						   {
                              "title": "_[🛒]Malawi (+265)_",
                              "rowId": ".37"
                           },
						   {
                              "title": "_[🛒Malaysia (+60)_",
                              "rowId": ".38"
                           },
						   {
                              "title": "_[🛒]Mali (+223)_",
                              "rowId": ".39"
                           },
						   {
                              "title": "_[🛒]Mauritania (+222)_",
                              "rowId": ".40"
                           },
						   {
                              "title": "_[🛒]Mexico (+52)_",
                              "rowId": ".41"
                           },
						   {
                              "title": "_[🛒]Montonegro (+382)_",
                              "rowId": ".42"
                           },
						   {
                              "title": "_[🛒]Morocco (+212)_",
                              "rowId": ".43"
                           },
						   {
                              "title": "_[🛒]Myanmar (+95)_",
                              "rowId": ".44"
                           },
						   {
                              "title": "_[🛒]Netherlands (+31)_",
                              "rowId": ".45"
                           },
						   {
                              "title": "_[🛒]New Caledonia (+687) NOMOR LANGKA_",
                              "rowId": ".46"
                           },
						   {
                              "title": "_[🛒]Nicaragua (+505)_",
                              "rowId": ".47"
                           },
						   {
                              "title": "_[🛒]Nigeria (+234)_",
                              "rowId": ".48"
                           },
						   {
                              "title": "_[🛒]Pakistan (+92)_",
                              "rowId": ".49"
                           },
						   {
                              "title": "_[🛒]Panama (+507)_",
                              "rowId": ".50"
                           },
						   {
                              "title": "_[🛒]Peru (+51)_",
                              "rowId": ".51"
                           },
						   {
                              "title": "_[🛒]Philippines (+63)_",
                              "rowId": ".52"
                           },
						   {
                              "title": "_[🛒]Puerto Rico (+1) CUSTOM DIGIT_",
                              "rowId": ".53"
                           },
						   {
                              "title": "_[🛒]Reunion (+262)_",
                              "rowId": ".54"
                           },
						   {
                              "title": "_[🛒]Romania (+40)_",
                              "rowId": ".55"
                           },
						   {
                              "title": "_[🛒]Russia (+7)_",
                              "rowId": ".56"
                           },
						   {
                              "title": "_[🛒]Saudi Arabia (+966)_",
                              "rowId": ".57"
                           },
						   {
                              "title": "_[🛒Senegal (+221)_",
                              "rowId": ".58"
                           },
						   {
                              "title": "_[🛒]Serbia (+381)_",
                              "rowId": ".59"
                           },
						   {
                              "title": "_[🛒]Singapore (+65)_",
                              "rowId": ".60"
                           },
                        ]
                     }],
 listType: 1
}
haruka.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted: ftroli})
break
// LIST 31-60
case '31':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Ireland (+353)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break 
case '32':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Israel (+972)\nHARGA:7K/7.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '33':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Kazakhstan (+7)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '34':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Kenya (+254)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '35':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Kyrgyztan (+996)\nHARGA:6K/6.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '36':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Macao (+853)\nHARGA:14K/14.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '37':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Malawi (+265)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '38':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Malaysia (+60)\nHARGA:7K/7.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '39':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Mali (+223)\nHARGA:10K/10.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '40':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Mauritania (+222)\nHARGA:6K/6.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '41':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Mexico (+52)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '42':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Montonegro (+382)\nHARGA:6K/6.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '43':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Morocco (+212)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '44':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Myanmar (+95)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '45':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Netherlands (+31)\nHARGA:9K/9.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '46':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n New Caledonia (+687) NOMOR LANGKA\n NOMOR TITIK BUKAN PAKAI STRIP\nEXAMPLE:wa.me/687774609\nHARGA:15K/15.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '47':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Nicaragua (+505)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '48':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Nigeria (+234)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '49':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Pakistan (+92)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '50':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Panama (+507)\nHARGA:8K/8.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '51':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Peru (+51)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '52':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Philippines (+63)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '53':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Puerto Rico (+1) CUSTOM DIGIT\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '54':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Reunion (+262)\nHARGA:6K/6.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '55':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Romania (+40)\nHARGA:8K/8.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '56':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Russia (+7)\nHARGA:9K/9.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '57':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Saudi Arabia (+966)\nHARGA:10K/10.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '58':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Senegal (+221)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '59':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Serbia (+381)\nHARGA:10K/10.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '60':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Singapore (+65)\nHARGA:10K/10.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break

// li3
case 'li3':
 listMsg = {
 buttonText: 'KLIK DISINI',
 footerText: '*_©FoxzyWasHere_*',
 description: `_*🙅‍♀️ Halo ${pushname} Selamat ${salam} *_\n\n • Nama : ${pushname}
 Jual jasa OTAV (One Time Account Verification)
• Harga sangat terjangkau (paling murah SE-INDONESIA)
• Garansi berlaku apabila OTAV gagal terkirim
Harga: mulai dari 1k-15k (Tergantung negara) 🌐
Pembayaran bisa dilakukan via:
• Dana
• Gopay 
• OVO
• QRIS (Up to 1k)
Tanya-tanya bisa melalui WA dibawah 👇🏼
Minat? chat wa.me/6281386383559 (FOXZY SELLER)
⚠️ PERHATIAN! ⚠️
• Harga dibawah merupakan harga OTAV untuk WhatsApp, 
harga akan berbeda jika anda ingin melakukan OTAV untuk aplikasi lain 
(misalnya Discord,Telegram,Tinder,OLX,dll)

• NOTE NOMOR MASIH FRESH,DAN 
 - SETIAP BELI NOMOR ADA KETENTUAN
 -SILAHKAN PILIH PEMBAYARAN METHODE APA
 Jangan Lupa Join Grup:
 https://chat.whatsapp.com/ExiDZoKE1Nr3VP0F8ZK6zs
 
 SILAHKAN PILIH NOKOS DI BAWAH INI\n`,
 sections: [
                     {
                      "title": `Selamat ${salam} Botz WhatsApp By Foxzy Was Here`,
 rows: [
                          {
                              "title": "_[🛒]South Africa (+27)_",
                              "rowId": ".61"
                           },
                           {
                              "title": "_[🛒]Spain (+34)_",
                              "rowId": ".62"
                           },
                           {
                              "title": "_[🛒]Sudan (+249)_",
                              "rowId": ".63"
                           },
                           {
                              "title": "_[🛒]Taiwan (+886)_",
                              "rowId": ".64"
                           },
						   {
                              "title": "_[🛒]Thailand (+66)_",
                              "rowId": ".65"
                           },
						   {
                              "title": "_[🛒]Togo (+228)_",
                              "rowId": ".66"
                           },
						   {
                              "title": "_[🛒]Tunisia (+216)_",
                              "rowId": ".67"
                           },
						   {
                              "title": "_[🛒Turkey (+90)_",
                              "rowId": ".68"
                           },
						   {
                              "title": "_[🛒]UAE (+971)_",
                              "rowId": ".69"
                           },
						   {
                              "title": "_[🛒]Uganda (+256)_",
                              "rowId": ".70"
                           },
						   {
                              "title": "_[🛒]UK (+44)_",
                              "rowId": ".71"
                           },
						   {
                              "title": "_[🛒]Ukraine (+380)_",
                              "rowId": ".72"
                           },
						   {
                              "title": "_[🛒]Uzbekistan (+998)_",
                              "rowId": ".73"
                           },
						   {
                              "title": "_[🛒]Venezuela (+58)_",
                              "rowId": ".74"
                           },
						   {
                              "title": "_[🛒]Vietnam (+84)_",
                              "rowId": ".75"
                           },
						   {
                              "title": "_[🛒]Yemen (+967)_",
                              "rowId": ".76"
                           },
						   {
                              "title": "_[🛒]Zambia (+260)_",
                              "rowId": ".77"
                           },
						   {
                              "title": "_[🛒]Zimbabwe (+263)_",
                              "rowId": ".78"
                           },
                        ]
                     }],
 listType: 1
}
haruka.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted: ftroli})
break

case '61':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n South Africa (+27)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break 
case '62':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Spain (+34)\nHARGA:7=13K/13.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '63':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Sudan (+249)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '64':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Taiwan (+886)\nHARGA:7K/7.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '65':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Thailand (+66)\nHARGA:6K/6.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '66':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Togo (+228)\nHARGA:6K/6.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '67':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Tunisia (+216)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '68':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Turkey (+90)\nHARGA:7K/7.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '69':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n UAE (+971)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '70':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Uganda (+256)\nHARGA:6K/6.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '71':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n UK (+44)Mexico (+52)\n BEBAS REQUEST TIGA DIGIT TENGAH\n EXAMPLE:\n +44 7360 666xxx\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '72':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Ukraine (+380)\nHARGA:6K/6.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '73':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Uzbekistan (+998)\nHARGA:7K/7.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '74':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Venezuela (+58)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '75':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Vietnam (+84)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '76':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Yemen (+967) \nHARGA:13K/13.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '77':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Zambia (+260)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
case '78':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• NOMOR YANG ANDA MAU BELI/PILIH:\n Zimbabwe (+263)\nHARGA:5K/5.000\nSILAHKAN PILIH METHODE PEMBAYARAN DIBAWAH\n\nNOTE SILAHKAN PILIH METHODE QRIS ALL PAYMENT\n BILA APLIKASI ANDA BELUM UPGRADE(GOPAY,OVO,DANA,DLL)\n', '© ' + ownername, thumbnail, [{buttonId: `.qris ${q}`, buttonText: {displayText: 'QRIS ALL PAY'}, type: 1},{buttonId: `.dana ${q}`, buttonText:{displayText: 'VIA DANA'}, type: 1},{buttonId: `.ovo ${q}`, buttonText:{displayText: 'VIA OVO'}, type: 1}], {quoted: mek})
break
//bates

// PAYMENT 
case 'donasi':				 			
				qute = fs.readFileSync('settings/qris.jpeg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: '*[ DONASI FOXZYBOTZ ]\n>Mau Donasi Ya Kak?Scan Aja QR CODE DIATAS\n>Scan Di Apk Gopay,Ovo,Dana,Shopee Pay,dll\n>Untuk Donasi Lewat Dana/Ovo Nih Nomornya\n>Dana:081386383559\n>Ovo:081386383559\n\n Terima Kasih KAK Bagi Yang Sudah Donasi HEHEHE' })				   
				   break
case 'ketentuan':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, '• [ KETENTUAN STORE FOXZY BOTZ]\n•UNTUK MEMBELI JUALAN YANG ADA DI BOT DIHARAPKAN TIDAK SPAM\n•BAGI YANG SUDAH TF SILAHKAN CHAT OWNER DAN KIRIM BUKTI TF DAN KIRIM APA YANG KAMU BELI\n•INGAT TIDAK BOLEH SPAM BOTZ/SPAM MENU BOT\n•KETAWAN SPAM BOT AKAN TERKENA SANKSI/BLOK/BANNED\n•BILA BELUM DI RESPON OLEH OWNER SILAHKAN TUNGGU,MUNGKIN OWNER SEDANG SIBUK\n•OWNER AKTIF 06:00-12:00 OFF SAMPAI JAM 15:00\n•AKTIF LAGI JAM 15:30-20:00\nSEKALI LAGI JANGAN SPAM NOMOR OWNER\nDAN SETIAP PEMBELIAN NOKOS AKAN SELALU ADA GARANSI 1 KALI DALAM 1 BULAN\n\n\nUNTUL CHAT OWNER SILAHKAN PENCET TOMBOL DIBAWAH\nTERIMA KASIH TTD BY OWNER•\n', '© ' + ownername, thumbnail, [{buttonId: `.owner ${q}`, buttonText: {displayText: 'OWNER BOT'}, type: 1},{buttonId: `.pembayaran ${q}`, buttonText:{displayText: 'PEMBAYARAN'}, type: 1},{buttonId: `.infobot ${q}`, buttonText:{displayText: 'INFO BOTZ'}, type: 1}], {quoted: mek})
break
case 'qris':				 			
				qute = fs.readFileSync('settings/qris.jpeg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: '*HAI KAK SILAHKAN SCAN QR CODE DIATAS\nDAN SCAN DI APK PEMBAYARAN ANDA' })				   
				   break
case 'dana':				 			
				qute = fs.readFileSync('settings/qris.jpeg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SILAHKAN SCAN QR CODE DIATAS BILA APK DANA ANDA BELUM UPDATE\nUNTUK PEMBAYARAN METHODE DANA SILAHKAN TF KE NOMOR INI:\n DANA:081386383559\n SERTAKAN BUKTI PEMBAYARAN KE OWNER' })				   
				   break
				   
case 'ovo':				 			
				qute = fs.readFileSync('settings/qris.jpeg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SILAHKAN SCAN QR CODE DIATAS BILA APK OVO ANDA BELUM UPDATE\nUNTUK PEMBAYARAN METHODE DANA SILAHKAN TF KE NOMOR INI:\n OVO:081386383559\n SERTAKAN BUKTI PEMBAYARAN KE OWNER' })				   
				   break
// Stalk
                case 'stalkig':
                    if (args.length == 0) return reply(`Example: ${prefix + command} foxzywashere`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${global.apikey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.photo_profile)
                    ini_txt = `Username : ${ini_result.username}\n`
                    ini_txt += `Full Name : ${ini_result.fullname}\n`
                    ini_txt += `Posts : ${ini_result.posts}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    haruka.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    break
                case 'stalkgithub':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL-Human`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${global.apikey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.avatar)
                    ini_txt = `Name : ${ini_result.name}\n`
                    ini_txt += `Link : ${ini_result.url}\n`
                    ini_txt += `Public Repo : ${ini_result.public_repos}\n`
                    ini_txt += `Public Gists : ${ini_result.public_gists}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    haruka.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    break
                case 'stalktwitter':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jokowi`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${username}?apikey=${global.apikey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.profile_picture)
                    ini_txt = `Username : ${ini_result.screen_name}\n`
                    ini_txt += `Name : ${ini_result.name}\n`
                    ini_txt += `Tweet : ${ini_result.tweet}\n`
                    ini_txt += `Joined : ${ini_result.joined}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Like : ${ini_result.like}\n`
                    ini_txt += `Description : ${ini_result.description}`
                    haruka.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    break
                case 'stalktiktok':
                    if (args.length == 0) return reply(`Example: ${prefix + command} bulansutena`)
                    stalk_toktok = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = `Username : ${get_result.username}\n`
                    ini_txt += `Nickname : ${get_result.nickname}\n`
                    ini_txt += `Followers : ${get_result.followers}\n`
                    ini_txt += `Followings : ${get_result.followings}\n`
                    ini_txt += `Likes : ${get_result.likes}\n`
                    ini_txt += `Video : ${get_result.video}\n`
                    ini_txt += `Bio : ${get_result.bio}\n`
                    pp_tt = await getBuffer(get_result.user_picture)
                    haruka.sendMessage(from, pp_tt, image, { quoted: ftroli, caption: ini_txt })
                    break
  // Other
                case 'ssweb':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${global.apikey}&url=${ini_link}`)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'ssweb2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/sswebfull?apikey=${global.apikey}&url=${ini_link}`)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'shortlink':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${global.apikey}&url=${ini_link}`)
                    reply(ini_buffer.result)
                    break
                case 'spamsms':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${global.apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${global.apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${global.apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${global.apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${global.apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${global.apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${global.apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${global.apikey}&nomor=${nomor}`)
                    reply("Success")
                    break
					// Random Image //
                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${global.apikey}`).then((gambar) => {
                        haruka.sendMessage(from, gambar, image, { quoted: ftroli })
                    })
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                    await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${global.apikey}`).then((gambar) => {
                        haruka.sendMessage(from, gambar, image, { quoted: ftroli })
                    })
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai2':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob2':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper2':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                    getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${global.apikey}`).then((gambar) => {
                        haruka.sendMessage(from, gambar, image, { quoted: ftroli })
                    })
                    break
// FITUR YANG UDAH PUNAH:V
case 'bcsticker':
case 'bcstik':{
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(`Khusus Owner Bang:v`)
					let isMedia = await haruka.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						let bc = await haruka.downloadMediaMessage(encmedia)
						for (let _ of isMedia) {
							haruka.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						reply('Suksess broadcast')
					}}
					break
case 'bcvideo':{
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(`Khusus Owner Bang:v`)
					let isMedia = await haruka.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						let bc = await haruka.downloadMediaMessage(encmedia)
						for (let _ of isMedia) {
							haruka.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: mek,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						reply(`OK DONE`)
					}}
					break
	case 'bcaudio':{
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(`Khusus Owner Bang:v`)
					isMedia = await haruka.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						let bc = await haruka.downloadMediaMessage(encmedia)
						for (let _ of isMedia) {
							haruka.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mpeg' , duration : 359996400, ptt : true,quoted: mek})
						}
						reply(`OK DONE`)
					}}
					break
case 'bcgif':{
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(`Khusus Owner Bang:v`)
					let isMedia = await haruka.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						let bc = await haruka.downloadMediaMessage(encmedia)
						for (let _ of isMedia) {
							haruka.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : ftroli})
						}
						reply(`OK DONE`)
					}}
					break
case 'kontag':
					if (!isGroupAdmins && isGroup) return reply(`Bisanya Di grup dek`)
					pe = args.join('')
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            haruka.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
		            await limitAdd(sender, limit)
					break   
		    case 'sticktag':
		            if (!isGroupAdmins && isGroup) return reply(`Bisanya Di grup dek`)
				    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await haruka.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await haruka.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            haruka.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else {
		            reply(`*Reply sticker yang sudah dikirim*`)
		            }
		            await limitAdd(sender, limit)
					break   
		    case 'totag':
		            if (!isGroupAdmins && isGroup) return reply(`Bisanya Di grup dek`)
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await haruka.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await haruka.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            haruka.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await haruka.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await haruka.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            haruka.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await haruka.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await haruka.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'audio/mpeg',
		            	ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            haruka.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await haruka.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await haruka.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            haruka.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        await limitAdd(sender, limit)
					break
 case 'darkjokes':
					let data = fs.readFileSync('./src/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					haruka.sendMessage(from, hasil, image, {thumbnail: Buffer.alloc(0), quoted: fgclink})
					await limitAdd(sender, limit)
					break
		
			case 'clone':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(`Khusus Owner Bang:v`)
if (!isGroup) return reply(lang.onlygc())
if (args.length < 1) return reply('Tag target yang ingin di clone')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, idk, notify } = groupMembers.find(x => x.jid === mentioned)
try {
var pp = await haruka.getProfilePicture(idk)
buffer = await getBuffer(pp)
haruka.updateProfilePicture(botNumber, buffer)
mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('Emror')
}
break

case 'fdeface':
		            ge = args.join('')           
		            var pe = ge.split("|")[0];
		            var pen = ge.split("|")[1];
		            var pn = ge.split("|")[2];
		            var be = ge.split("|")[3];
		            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
		            if (args.length < 1) return reply (fde)
		            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const tipes = await haruka.downloadAndSaveMediaMessage(dipes)        
		            const bufer = fs.readFileSync(tipes)
		            const desc = `${pn}`
		            const title = `${pen}`
		            const url = `${pe}`
		            const buu = `https://${be}`
		    		var anu = {
		        	detectLinks: false
		    		}
		    		var mat = await haruka.generateLinkPreview(url)
		    		mat.title = title;
		    		mat.description = desc;
		    		mat.jpegThumbnail = bufer;
		   			mat.canonicalUrl = buu; 
		    		haruka.sendMessage(from, mat, MessageType.extendedText, anu)
		            await limitAdd(sender, limit)
					break   
		    case 'public':
		              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(`Khusus Owner Bang:v`)
		          	if (global.self === false) return sendButMessage(from, `「 *PUBLIC-MODE* 」`, `Click self to return to self mode`, [{buttonId: 'self',buttonText: {displayText: `Self Mode`,},type: 1,}], {quoted: mek});
		          	global.self = false
		          	//fakeitem(`「 *PUBLIC-MODE* 」`)
						sendButMessage(from, `「 *PUBLIC-MODE* 」`, `Click self to return to self mode`, [{buttonId: 'self',buttonText: {displayText: `Self Mode`,},type: 1,}], {quoted: mek});
        break;
			case 'self':
			          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(`Khusus Owner Bang:v`)
		          	if (global.self === true) return sendButMessage(from, `「 *SELF-MODE* 」`, `Click public to return to public mode`, [{buttonId: 'public',buttonText: {displayText: `Public Mode`,},type: 1,}], {quoted: mek});
		          	global.self = true
		          	sendButMessage(from, `「 *SELF-MODE* 」`, `Click public to return to public mode`, [{buttonId: 'public',buttonText: {displayText: `Public Mode`,},type: 1,}], {quoted: mek});
        break;
		case 'revoke':
if (!isGroup) return reply(`khusus Grup Bang`)
					if (!isGroupAdmins) return reply(`Khusus Admin Bang`)
await haruka.revokeInvite(from)
reply(`Sukses Bang`)
break
case 'take':
		    case 'colong':
		if (!isQuotedSticker) return reply('```Reply stc nya```')
		            var encmedia_ = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    var media_ = await haruka.downloadAndSaveMediaMessage(encmedia_)
		            isMedia = args.join(' ').split('|')
		            satu = isMedia[0] !== '' ? isMedia[0] : `SUBSCRIBE YT`
		            dua = typeof isMedia[1] !== 'undefined' ? isMedia[1] : `Foxzy Mods`
		            require('./lib/fetcher.js').createExif(satu, dua)
					break   
			case 'stikerwm':
			case 'stickerwm':
		    case 'swm':
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia___ = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media___ = await haruka.downloadAndSaveMediaMessage(encmedia___)
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            haruka.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            haruka.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia___ = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media___ = await haruka.downloadAndSaveMediaMessage(encmedia___)
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            haruka.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            haruka.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
		            }
					break
case 'sticker':case 'stiker':case 'stickergif':case 'stikergif':case 'sgif':case 's':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			const media = await haruka.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.webp')
			await ffmpeg(`./${media}`)
			.input(media)
			.on('start', function (cmd) {
				console.log(`Started : ${cmd}`)
				})
				.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					reply('Eror')
					})
			.on('end', function () {
				console.log('Finish')
				haruka.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek })
				fs.unlinkSync(media)
				fs.unlinkSync(ran)
				})
				.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				.toFormat('webp')
				.save(ran)
				} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
				const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				const media = await haruka.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.webp')
				await ffmpeg(`./${media}`)
				.inputFormat(media.split('.')[1])
				.on('start', function (cmd) {
					console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
						console.log(`Error : ${err}`)
						fs.unlinkSync(media)
						tipe = media.endsWith('.mp4') ? 'video' : 'gif'
						reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
						})
						.on('end', function () {
							console.log('Finish')
							haruka.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek })
							fs.unlinkSync(media)
							fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else  {
								reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\nDurasi sticker video 1-9 detik...`)
							}
					
             break
			 // AniManga //
                case 'character':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    await haruka.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'manga':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await haruka.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'anime':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await haruka.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'wait':
                    if ((isMedia && !haruka.meessage.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        const filebuffer = await lolhuman.downloadMediaMessage(encmedia);
                        const form = new FormData();
                        form.append('img', filebuffer, { filename: 'tahu.jpg' })
                        get_result = await axios.post(`https://api.lolhuman.xyz/api/wait?apikey=${global.apikey}`, form.getBuffer(), { headers: { "content-type": `multipart/form-data; boundary=${form._boundary}` } })
                        get_result = get_result.data.result
                        ini_txt = `Anilist id : ${get_result.anilist_id}\n`
                        ini_txt += `MAL id : ${get_result.mal_id}\n`
                        ini_txt += `Title Romaji : ${get_result.title_romaji}\n`
                        ini_txt += `Title Native : ${get_result.title_native}\n`
                        ini_txt += `Title English : ${get_result.title_english}\n`
                        ini_txt += `at : ${get_result.at}\n`
                        ini_txt += `Episode : ${get_result.episode}\n`
                        ini_txt += `Similarity : ${get_result.similarity}`
                        await haruka.sendMessage(from, { url: get_result.video }, video, { quoted: ftroli, caption: ini_txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'kusonime':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonime?apikey=${global.apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'kusonimesearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'otakudesu':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesu?apikey=${global.apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'otakudesusearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'nhentai':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
                    break
                case 'nhentaipdf':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    await haruka.sendMessage(from, ini_buffer, document, { quoted: ftroli, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                case 'nhentaisearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nekopoi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${global.apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n`
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'nekopoisearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
	 // Information //
                case 'kbbi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} kursi`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${global.apikey}&query=${args.join(" ")}`)
                    lila = get_result.result
                    ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
                    ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
                    ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
                    ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
                    for (var x of lila) {
                        ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
                        ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
                        ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
                        ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
                        ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
                    }
                    reply(ini_txt)
                    break
                case 'brainly2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} siapakah sukarno`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly2?apikey=${global.apikey}&query=${args.join(" ")}`)
                    lala = get_result.result
                    ini_txt = "Beberapa Pembahasan Dari Brainly :\n\n"
                    for (var x of lala) {
                        ini_txt += `==============================\n`
                        ini_txt += `\`\`\`Pertanyaan :\`\`\`\n${x.question.content}\n\n`
                        ini_txt += `\`\`\`Jawaban :\`\`\`\n${x.answer[0].content}\n`
                        ini_txt += `==============================\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jarak':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jakarta - yogyakarta`)
                    pauls = args.join(" ")
                    teks1 = pauls.split("-")[0].trim()
                    teks2 = pauls.split("-")[1].trim()
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${global.apikey}&kota1=${teks1}&kota2=${teks2}`)
                    x = get_result.result
                    ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
                    ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
                    ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
                    ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
                    ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
                    ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
                    ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
                    ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
                    ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
                    ini_txt += `   ╭───────────────❏\n`
                    ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
                    ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
                    ini_txt += `❍┤ Mobil : ${x.mobil}\n`
                    ini_txt += `❍┤ Motor : ${x.motor}\n`
                    ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
                    ini_txt += `   ╰───────────────❏\n`
                    reply(ini_txt)
                    break
                case 'urbandictionary':
                    urb = args.join(" ")
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/urdict?apikey=${global.apikey}&query=${urb}`)
                    lilu = get_result.result
                    for (var x of lilu) {
                        ini_txt = `\`\`\`Meaning :\n${x.definition}\`\`\`\n\n`
                        ini_txt += `\`\`\`Link : ${x.permalink}\`\`\`\n\n`
                        ini_txt += `\`\`\`Sounds Url : ${x.sound_urls[0]}\`\`\`\n\n`
                        ini_txt += `\`\`\`Like : ${x.thumbs_up}\`\`\`\n\n`
                        ini_txt += `\`\`\`Dislike : ${x.thumbs_down}\`\`\`\n\n`
                        ini_txt += `\`\`\`Created On : \n${x.written_on}\`\`\`\n\n`
                        ini_txt += `\`\`\`Author : ${x.author}\`\`\`\n\n`
                        ini_txt += `\`\`\`Word : ${x.word}\`\`\`\n\n`
                        ini_txt += `\`\`\`Defined Id : ${x.defid}\`\`\`\n\n`
                        ini_txt += `\`\`\`Example : ${x.example}\`\`\`\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'chord':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/chord?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Chord : \n${get_result.chord}`
                    reply(ini_txt)
                    break
                case 'heroml':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
                    hero = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/heroml/${hero}?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.hero_name}\n`
                    ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
                    ini_txt += `Role : ${get_result.detail.role}\n`
                    ini_txt += `Specialty : ${get_result.detail.specialty}\n`
                    ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
                    ini_txt += `Release : ${get_result.detail.release_date}\n`
                    ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
                    ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
                    ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
                    ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
                    ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
                    ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr.hp}\n`
                    ini_txt += `Mana : ${get_result.attr.mana}\n`
                    ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
                    ini_icon = await getBuffer(get_result.icon)
                    await haruka.sendMessage(from, ini_icon, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'mlstalk':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 84830127/2169`)
                    ml_id = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${ml_id}?apikey=${global.apikey}`)
                    reply(get_result.result)
                    break
                case 'genshin':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jean`)
                    hero = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/genshin/${hero}?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.title}\n`
                    ini_txt += `Intro : ${get_result.intro}\n`
                    ini_txt += `Icon : ${get_result.icon}\n`
                    ini_icon = await getBuffer(get_result.cover1)
                    await haruka.sendMessage(from, ini_icon, image, { quoted: ftroli, caption: ini_txt })
                    ini_voice = await getBuffer(get_result.cv[0].audio[0])
                    await haruka.sendMessage(from, ini_voice, audio, { quoted: ftroli, mimetype: Mimetype.mp4Audio })
                    break
                case 'qrreader':
                    if ((isMedia && !haruka.meessage.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        const filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/read-qr?apikey=${global.apikey}`, {...options })
                        fs.unlinkSync(filePath)
                        reply("Result: " + get_result.result)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'wikipedia':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    reply(get_result)
                    break
                case 'translate':
                    if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${global.apikey}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break
                case 'brainly':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Soekarno adalah`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltv':
                    if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
                    channel = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltvnow':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'newsinfo':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnindonesia':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnnasional':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnninternasional':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'infogempa':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await getBuffer(get_result.map)
                    await haruka.sendMessage(from, get_buffer, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'lirik':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${global.apikey}&query=${query}`)
                    reply(get_result.result)
                    break
                case 'cuaca':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    await haruka.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: ftroli })
                    reply(ini_txt)
                    break
                case 'covidindo':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'covidglobal':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'kodepos':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=${global.apikey}&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    reply(ini_txt)
                    break
                case 'jadwalbola':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'indbeasiswa':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'hoax':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nsfwcheck':
                    if ((isMedia && !haruka.meessage.videoMessage || isQuotedImage) && args.length == 0) {
                        var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        var filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        var form = new FormData();
                        var stats = fs.statSync(filePath);
                        var fileSizeInBytes = stats.size;
                        var fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        var options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/nsfwcheck?apikey=${global.apikey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        is_nsfw = "No"
                        if (Number(get_result.replace("%", "")) >= 50) is_nsfw = "Yes"
                        reply(`Is NSFW? ${is_nsfw}\nNSFW Score : ${get_result}`)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'ocr':
                    if ((isMedia && !haruka.meessage.videoMessage || isQuotedImage) && args.length == 0) {
                        var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        var filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        var form = new FormData();
                        var stats = fs.statSync(filePath);
                        var fileSizeInBytes = stats.size;
                        var fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        var options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/ocr?apikey=${global.apikey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        reply(`Result : ${get_result}`)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
					// Movie & Story
                case 'lk21':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await haruka.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'drakorongoing':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'wattpad':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${global.apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    await haruka.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'wattpadsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cerpen':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply(ini_txt)
                    break
                case 'ceritahoror':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await haruka.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
					// Random Text //
                case 'quotes':
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${global.apikey}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*― ${author}*`)
                    break
                case 'quotesanime':
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${global.apikey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
                    break
                case 'quotesdilan':
                    quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${global.apikey}`)
                    reply(quotedilan.result)
                    break
                case 'quotesimage':
                    get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${global.apikey}`)
                    await haruka.sendMessage(from, get_result, image, { quotes: lol })
                    break
                case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${global.apikey}`)
                    reply(get_result.result)
                    break
                case 'randomnama':
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${global.apikey}`)
                    reply(anu.result)
                    break
					 // Searching
                case 'gimage':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${global.apikey}&query=${query}`)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'gimage2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gimage2?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        await haruka.sendMessage(from, ini_buffer, image)
                    }
                    break
                case 'konachan':
                    if (args.length == 0) return reply(`Example: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/konachan?apikey=${global.apikey}&query=${query}`)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'wallpapersearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${global.apikey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'wallpapersearch2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper2?apikey=${global.apikey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'playstore':
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'shopee':
                    if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'google':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'stickerwa':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${global.apikey}&img=${x}`)
                        await haruka.sendMessage(from, ini_buffer, sticker)
                    }
                    break
	 // Primbon
                case 'artinama':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_nama = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${global.apikey}&nama=${ini_nama}`)
                    reply(get_result.result)
                    break
                case 'jodoh':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu & Bacem`)
                    ini_nama = args.join(" ").split("&")
                    nama1 = ini_nama[0].trim()
                    nama2 = ini_nama[1].trim()
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Negative : ${get_result.negatif}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    break
                case 'weton':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = `Weton : ${get_result.weton}\n`
                    ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
                    ini_txt += `Rejeki : ${get_result.rejeki}\n`
                    ini_txt += `Jodoh : ${get_result.jodoh}`
                    reply(ini_txt)
                    break
                case 'jadian':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    break
                case 'tebakumur':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_name = args.join(" ")
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=SoftApikey&name=${ini_name}`)
                    get_result = get_result.result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    reply(ini_txt)
                    break
					case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':  case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
               	await gameAdd(sender, glimit)
				   if (!isGroup) return reply(lang.onlygc()) 
 				   jds = []
				   const A1 = groupMembers
  		 		const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `Yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
		case 'bisakah':
		if (args.length < 1) return haruka.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
				bisakah = q
					const bisa =['Tentu Saja Bisa! Kamu Adalah Orang Paling beruntung','Gak Bisa','Hmm Gua Gak Tau Yaa, tanya ama bapakau','Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					haruka.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender, limit)
					break
				case 'kapankah':
				if (args.length < 1) return haruka.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
				kapankah = q
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					haruka.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender, limit)
					break
           case 'apakah':
           if (args.length < 1) return haruka.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
           apakah = q
					const apa =['Iya','Tidak','Bisa Jadi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					haruka.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender, limit)
					break
					// Entertainment
                case 'asupan':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${global.apikey}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await haruka.sendMessage(from, ini_buffer, video, { quoted: ftroli, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
                case 'wancak':
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/onecak?apikey=${global.apikey}`)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'sambungkata':
                    if (sambungkata.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    if (args.length == 0) return reply(`Example: ${prefix + command} tahu`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sambungkata?apikey=${global.apikey}&text=${ini_txt}`)
                    get_result = get_result.result
                    await haruka.sendMessage(from, get_result, text, { quoted: ftroli }).then(() => {
                        sambungkata[sender.split('@')[0]] = get_result.toLowerCase()
                        fs.writeFileSync("./database/sambungkata.json", JSON.stringify(sambungkata))
                    })
                    break
                case 'cancelsambungkata':
                    if (!sambungkata.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
                    delete sambungkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/sambungkata.json", JSON.stringify(sambungkata))
                    reply("Success mengcancel sambung kata sebelumnya")
                    break
                case 'canceltebakgambar':
                    if (!tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    reply("Success mengcancel tebak gambar sebelumnya")
                    break

// Case Group By Foxzy
		 case 'promote':
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             haruka.groupMakeAdmin(from, mems_ids)
             } else {
             haruka.groupMakeAdmin(from, entah)
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             haruka.groupMakeAdmin(from, [entah])
}
             break
      case 'demote':
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             haruka.groupDemoteAdmin(from, mems_ids)
             } else {
             haruka.groupDemoteAdmin(from, [entah[0]])
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             haruka.groupDemoteAdmin(from, [entah])
}
             break
			 case 'leave':
              if (!isGroup) return reply(`Bisanya Di grup dek`)
              setTimeout( () => {
              haruka.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('Byee...')
              }, 0)
              break
       case 'online':
       case 'listonline':           
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(haruka.chats.get(ido).presences), haruka.user.jid]
             haruka.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6288215463787@g.us" }: {})},message:{"orderMessage":{"orderId":"6288215463787","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case 'sider':
             if(!isGroup) return reply(`Bisanya Di grup dek`)
             try {
             infom = await haruka.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             break
			 case "antivirtex":
               if (!isGroup) return reply(`Bisanya Di grup dek`)
               if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
               if (!isBotGroupAdmins) return reply(`JADIIN ADMN DULU BANG 🗿`)
               if (args[0] == "enable") {
               if (isAntivirtex) return reply("UDAH AKTIF DARI TADI TOD");
               antivirtex.push(from);
               fs.writeFileSync("./database/antivirtex.json", JSON.stringify(antivirtex))
               reply("Sukses mengaktifkan fitur antivirtex di group ini ✅")
               } else if (args[0] == "disable") {
               antivirtex.splice(from, 1);
               fs.writeFileSync("./database/antivirtex.json", JSON.stringify(ant))
               reply("Sukses menonaktifkan fitur antivirtex di group ini ✅")
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break     
			   case 'setppgrup':
              if (!isGroup) return reply(`Bisanya Di grup dek`)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await haruka.downloadMediaMessage(encmedia)
              haruka.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
			  // Creator
                case 'quotemaker3':
                    if ((isMedia && !haruka.meessage.videoMessage || isQuotedImage)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} LoL|Human`)
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ")
                        request({
                            url: `https://api.lolhuman.xyz/api/quotemaker3?apikey=${global.apikey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "text": ini_txt
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            haruka.sendMessage(from, ini_buff, image, { quoted: ftroli }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'stickerwmv2':
                    if ((isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        var image_buffer = await lolhuman.downloadMediaMessage(encmedia);
                        var formdata = new FormData()
                        formdata.append('package', 'Foxzy')
                        formdata.append('author', 'Gans')
                        formdata.append('img', image_buffer, { filename: 'tahu.jpg' })
                        axios.post(`https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${global.apikey}`, formdata.getBuffer(), { headers: { "content-type": `multipart/form-data; boundary=${formdata._boundary}` }, responseType: 'arraybuffer' }).then((res) => {
                            haruka.sendMessage(from, res.data, sticker)
                        })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'stickerv2':
                    if ((isQuotedVideo || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        var filepath = await lolhuman.downloadAndSaveMediaMessage(encmedia, getRandom())
                        var randomName = getRandom('.webp')
                        ffmpeg(`./${filepath}`)
                            .input(filepath)
                            .on('error', () => {
                                fs.unlinkSync(filepath)
                                reply('Terjadi kesalahan saat mengconvert sticker.')
                            })
                            .on('end', () => {
                                haruka.sendMessage(from, fs.readFileSync(randomName), sticker, { quoted: ftroli })
                                fs.unlinkSync(filepath)
                                fs.unlinkSync(randomName)
                            })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(randomName)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'roundsticker':
                    if ((isMedia && !haruka.meessage.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        var image_buffer = await lolhuman.downloadMediaMessage(encmedia);
                        var formdata = new FormData()
                        formdata.append('img', image_buffer, { filename: 'tahu.jpg' })
                        axios.post(`https://api.lolhuman.xyz/api/convert/towebpwround?apikey=${global.apikey}`, formdata.getBuffer(), { headers: { "content-type": `multipart/form-data; boundary=${formdata._boundary}` }, responseType: 'arraybuffer' }).then((res) => {
                            haruka.sendMessage(from, res.data, sticker)
                        })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'stickernobg':
                    if ((isMedia && !haruka.meessage.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.png')
                        file_name2 = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/removebg?apikey=${global.apikey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ffmpeg(`./${file_name}`)
                                .input(file_name)
                                .on('error', function(err) {
                                    console.log(err)
                                    fs.unlinkSync(file_name)
                                })
                                .on('end', function() {
                                    haruka.sendMessage(from, fs.readFileSync(file_name2), sticker, { quoted: ftroli })
                                    fs.unlinkSync(file_name2)
                                })
                                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                                .toFormat('webp')
                                .save(file_name2)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'takesticker':
                    if ((isMedia && !haruka.meessage.videoMessage || isQuotedSticker)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} LoL|Human`)
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        var image_buffer = await lolhuman.downloadMediaMessage(encmedia);
                        var ini_txt = args.join(" ").split("|")
                        var formdata = new FormData()
                        formdata.append('package', ini_txt[0])
                        formdata.append('author', ini_txt[1])
                        formdata.append('img', image_buffer, { filename: 'tahu.jpg' })
                        axios.post(`https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${global.apikey}`, formdata.getBuffer(), { headers: { "content-type": `multipart/form-data; boundary=${formdata._boundary}` }, responseType: 'arraybuffer' }).then((res) => {
                            haruka.sendMessage(from, res.data, sticker)
                        })
                    } else {
                        reply(`Tag sticker yang sudah dikirim`)
                    }
                    break
                case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${global.apikey}&text=${ini_txt}`)
                    await haruka.sendMessage(from, ini_buffer, sticker, { quoted: ftroli })
                    break
                case 'triggered':
                    ini_url = args[0]
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/editor/triggered?apikey=${global.apikey}&img=${ini_url}`
                    exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        haruka.sendMessage(from, buff, sticker, { quoted: ftroli }).then(() => {
                            fs.unlinkSync(rano)
                        })
                    })
                    break
                case 'wasted':
                    ini_url = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/editor/wasted?apikey=${global.apikey}&img=${ini_url}`)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'smoji':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${global.apikey}`)
                    await haruka.sendMessage(from, ini_buffer, sticker, { quoted: ftroli })
                    break
                case 'smoji2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${global.apikey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${global.apikey}&img=` + ini_buffer.result.emoji.whatsapp)
                    await haruka.sendMessage(from, ini_buffer, sticker, { quoted: ftroli })
                    break
                case 'fakedonald':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/tweettrump?apikey=${global.apikey}&text=${ini_txt}`)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'faketoko':
                    await faketoko(teks = "Tahu Bacem", url_image = "https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg", title = "LoL Human", code = "IDR", price = 1000000)
                    break
                case 'ktpmaker':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${global.apikey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
			  //addfiturdosa🗿
                case 'dosa1':				 
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: 'Nama : DilaPye Colmek\nFoto : -\nVideo : 1\nSize : 90 MB\nDurasi : 5 Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1We9TeG1whjz2bmNCrahctK1-Hiy3BtWN/view \n PASSWORD FILE : AA18+#29' })
				   break
				   case 'dosa2':
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: 'Nama : Missluttyv SMA\nFoto : -\nVideo : 3\nSize : 74 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1TodhXRAHt6MHMqS2-3DYmCQoIFe7yuI-/view \nPASSWORD FILE : AA18+#21' })
				   break
				   case 'dosa3':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: 'Nama : Arce\nFoto : 114\nVideo : 16\bSize : 64 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1SwXbmd2sXnYSNYmn_tdCiaBsHHXjYvQM/view \nPASSWORD FILE : AA18+#6' })				    
				   break
				   case 'dosa4':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: 'Nama : Annisa\nFoto : 71\nVideo : 2\nSize : 48 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1St_Pb9xNZnrSX_fPfaarno6Bpjc3ArUx/view \nPASSWORD FILE : AA18+#5', })				   
				   break
				   case 'dosa5':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: 'Nama : 038493040494_0[Ws_Gloia]\nFoto : 19\nVideo : 1\nSize : 379 MB\nDurasi : 8 Menit\nKualitas : HD++\nRate : ⭐⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1Y0ALFotYLT2F8kKjgxMZ_BFJ6vWKalck/view\nPASSWORD FILE : AA18+#30' })				   
				   break
				   case 'dosa6':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: 'Nama : ASD - Ria Bali\nFoto : -\nVideo : 1\nSize : 165 MB\nDurasi : 45 Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1T84UWWj1oJlDAMXd-snZr6gP4Yt61P6P/view\nPASSWORD FILE : AA18+#7' })				   
				   break
                   case 'dosa7':
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: 'Nama : Nanad Apr\nFoto : 18\nVideo : 23\nSize : 357 MB\nDurasi : - Menit\nKualitas : -\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1YO0rvEgbx6Qsrtfm6tTOlvHI7OE5V42p/view\nPASSWORD FILE : AA18+#32' })				   
				   break
		           case 'dosa8':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
				   break
	
				   case 'dosa10':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
				   break
				   case 'dosa11':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
				   break
				   case 'dosa12':	
                if (!isPremium) return reply(mess.only.premium)			    
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
				   break
				   case 'dosa13':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
				   break
				   case 'dosa14':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
				   break
	               case 'dosa15':
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
				   break
    	           case 'dosa16':
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
				   break
				   case 'dosa17':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
				   break
				   case 'dosa18':
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
				   break
				   case 'dosa19':				 
                if (!isPremium) return reply(mess.only.premium)				
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
				   break
				   case 'dosa20':			
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })				   
				   break
				   case 'dosa21':				 
                if (!isPremium) return reply(mess.only.premium)				
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
				   break
				   case 'dosa22':		
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
				   break
				   case 'dosa23':	
                if (!isPremium) return reply(mess.only.premium)
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
				   break
				   case 'dosa24':				 
                if (!isPremium) return reply(mess.only.premium)				
				qute = fs.readFileSync('settings/haruka.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
				   break
// Case Join
				   case 'join': 
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(`khusus owner bang`)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = haruka.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
// GAME BANTU ADD BANG:V

// Downloader V2//
                case 'ytplay2':
                    if (args.length == 0) return await reply(`Example: ${prefix + command} melukis senja`)
                    await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${global.apikey}&query=${args.join(" ")}`)
                        .then(async(result) => {
                            await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${global.apikey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
                                .then(async(result) => {
                                    result = result.result
                                    caption = `❖ Title    : *${result.title}*\n`
                                    caption += `❖ Size     : *${result.size}*`
                                    ini_buffer = await getBuffer(result.thumbnail)
                                    await haruka.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: caption })
                                    get_audio = await getBuffer(result.link)
                                    await haruka.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: ftroli })
                                })
                        })
                    break
                case 'ytsearch2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'ytmp3v2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${global.apikey}&url=${ini_link}`)
                    get_result = get_result.result
                    caption = `❖ Title    : *${result.title}*\n`
                    caption += `❖ Size     : *${result.size}*`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await haruka.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: ftroli })
                    break
                case 'ytmp4v2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${global.apikey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await haruka.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: ftroli })
                    break
                case 'telesticker2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${global.apikey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        await haruka.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                case 'tiktoknowm2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${global.apikey}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    await haruka.sendMessage(from, ini_buffer, video, { quoted: ftroli })
                    break
                case 'tiktokmusic2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${global.apikey}&url=${ini_link}`)
                    await haruka.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: ftroli })
                    break
                case 'spotify2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${global.apikey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await haruka.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await haruka.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: ftroli })
                    break
                case 'spotifysearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jooxplay':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    await haruka.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    await haruka.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: ftroli })
                    break
                case 'igdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${global.apikey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    await haruka.sendMessage(from, ini_buffer, ini_type, { quoted: ftroli })
                    break
                case 'igdl2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=${global.apikey}&url=${ini_url}`)
                    ini_result = ini_url.result.media
                    for (var x of ini_result) {
                        ini_type = image
                        if (x.includes(".mp4")) ini_type = video
                        ini_buffer = await getBuffer(x)
                        await haruka.sendMessage(from, ini_buffer, ini_type, { quoted: ftroli })
                    }
                    break
                case 'twtdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/twitter?apikey=${global.apikey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_url = ini_url[ini_url.length - 1].link
                    ini_buffer = await getBuffer(ini_url)
                    await haruka.sendMessage(from, ini_buffer, video, { quoted: ftroli })
                    break
                case 'fbdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${global.apikey}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    await haruka.sendMessage(from, ini_buffer, video, { quoted: ftroli })
                    break
                case 'zippyshare':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${global.apikey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    reply(ini_txt)
                    break
                case 'pinterest2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${global.apikey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'pinterest3':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        await haruka.sendMessage(from, ini_buffer, image)
                    }
                    break
                case 'pinterestdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${global.apikey}&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'pixiv':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pixiv?apikey=${global.apikey}&query=${query}`)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'pixivdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 63456028`)
                    query = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${global.apikey}`)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: ftroli })
                    break
                case 'xhamstersearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamstersearch?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xhamster':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamster?apikey=${global.apikey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await haruka.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'xnxxsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${global.apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${global.apikey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await haruka.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
// Case Islam By Foxzy
			 case 'listsurah':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${global.apikey}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${global.apikey}`)
                    await haruka.sendMessage(from, ini_buffer, audio, { quoted: ftroli, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${global.apikey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
// download fix by zeeone
case 'ig': case 'igdl': 
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
	if (!q) return reply('Linknya?')
	if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.errorLink)
	let urlnya = q
	zee.Igdl(urlnya)
	.then(async(result) => {
		for(let i of result.medias){
			if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                    haruka.sendMessage(from,link,video,{thumbnail: Buffer.alloc(0), quoted: mek,caption: `Instagram •  ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    haruka.sendMessage(from,link,image,{thumbnail: Buffer.alloc(0), quoted: mek,caption: `Instagram • ${i.type}`})                  
                }
            }
            }).catch((err) => reply(`🤲 Server eror`))
            
             break
case 'tiktok':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, 'Silahkan pilih media yang ingin kamu download', '© ' + ownername, thumbnail, [{buttonId: `.tiktokwm ${q}`, buttonText: {displayText: 'WM'}, type: 1},{buttonId: `.tiktoknowm ${q}`, buttonText:{displayText: 'NOWM'}, type: 1},{buttonId: `.tiktokmusic ${q}`, buttonText:{displayText: 'AUDIO'}, type: 1}], {quoted: mek})
						
             break
case 'tiktoknowm':   
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!q) return reply('Linknya?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
			reply(lang.wait())
			let nowem = q
			zee.Ttdownloader(nowem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					noweem = await getBuffer(nowm)
					haruka.sendMessage(from,noweem , MessageType.video, {mimetype: 'video/mp4',quoted: mek})
					})
				}).catch((err) => reply(`Link tidak valid`))
			
             break 
case 'tiktokwm':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!q) return reply('Linknya?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
			reply(lang.wait())
			let wem = args.join(' ')
			zee.Ttdownloader(wem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					weem = await getBuffer(wm)
					haruka.sendMessage(from,weem , MessageType.video, {mimetype: 'video/mp4',quoted: mek})
					})
				}).catch((err) => reply(`Link tidak valid`))
			
             break 
case 'tiktokmusic': case 'tiktokaudio':  
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!q) return reply('Linknya?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid Link')
			reply(lang.wait())
			let audi = q
			zee.Ttdownloader(audi)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
				.then(async (a) => {
					audnha = await getBuffer(audio)
					haruka.sendMessage(from,audnha , MessageType.document, {mimetype: 'audio/mp4',filename: `Tiktok Music.mp3`,quoted: mek})
					})
				}).catch((err) => reply(`Link tidak valid`))
			
             break
case 'pinterest': 
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if(!q) return reply('Masukkan query')
            async function pinterestSearch(query) {
                    return new Promise((resolve, reject) => {
                        fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                            "headers": {
                                "accept": "application/json, text/javascript, */*, q=0.01",
                                "accept-language": "en-US,en;q=0.9",
                                "cache-control": "no-cache",
                                "pragma": "no-cache",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin",
                                "sec-gpc": "1",
                                "x-app-version": "9a236a4",
                                "x-pinterest-appstate": "active",
                                "x-requested-with": "XMLHttpRequest"
                            },
                            "referrer": "https://www.pinterest.com/",
                            "referrerPolicy": "origin",
                            "body": null,
                            "method": "GET",
                            "mode": "cors"
                        }).then((res) => res.json())
                            .then((json) => {
                                const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                                var result = [];
                                result.push({
                                    link: generatepin.images.orig.url
                                })
                                resolve(result)
                            }).catch(reject)
                    })
                }

                const pinterest = (query) => new Promise((resolve, reject) => {
                    pinterestSearch(query).then((data) => {
                        resolve({
                            status: 200,
                            image: data[0].link
                        })
                    }).catch(reject)
                })

                pinterest(q).then(async(res) => {
                	let we = await getBuffer(res.image)
              	  sendButImage(from,  lang.ok() , `© ${ownername}`,we, [{"buttonId": `.pinterest ${q}`,"buttonText": {"displayText": "Next"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
                   }).catch(async(err) => {
                    reply('Terjadi kesalahan')
                })
                
             break
case 'play': case 'song':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu_`)
			var srch = args.join(' ')
			aramas = await yts(srch);
			aramat = aramas.all 
			var mulaikah = aramat[0].url
			try {
				zee.Youtube(mulaikah).then(async (data) => {
					if (Number(data.medias[7].formattedSize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*---- 「 PLAY MUSIC 」----*
						
• Title : ${aramas.videos[0].title}
• ID : ${aramas.videos[0].videoId}
• Upload : ${aramas.videos[0].ago}
• Size : ${data.medias[7].formattedSize}
• Views: ${aramas.videos[0].views} 
• Duration : ${aramas.videos[0].timestamp}
• Url : ${aramas.videos[0].url}`
var thumbyt = await getBuffer(aramas.videos[0].thumbnail)
sendButLocation(from, captions, '© ' + ownername, thumbyt, [{buttonId: `.ytmp4 ${mulaikah}`, buttonText: {displayText: 'Video'}, type: 1},{buttonId: `.ytmp3 ${mulaikah}`, buttonText:{displayText: 'Audio'}, type: 1}], {quoted: mek})
						})
				} catch (err) {
					reply('Terjadi kesalahan')
					}
			
             break
//group
case 'daftar': case 'verify': case 'verif':
			if (isHaruka) return  reply(lang.regis())
			try {
					ppregis = await haruka.getProfilePicture(sender)
				} catch {
					ppregis = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			const serialUser = createSerial(20)
			await addRegisteredUser(sender.split('@')[0] + '@s.whatsapp.net', pushname, time, serialUser)
			await sendButImage(from, lang.daftar(sender, pushname, time, serialUser, _registered), `© ${botname}`,await getBuffer(ppregis), [{buttonId: '.menu',buttonText: {displayText: `MENU`,},type: 1,}], {thumbnail: Buffer.alloc(0), quoted : mek})
break

case 'memegenerator': case 'memegen':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
									   var mediiia = await haruka.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediiia)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`)
										haruka.sendMessage(from, resu, image, {caption:'.stikerin bang', thumbnail: Buffer.alloc(0), quoted: mek})
										fs.unlinkSync(mediiia)
										} catch (e) {
											reply(lang.err())
											console.log(e)
										}
										}
									break
					 	case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':{
						if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* FoxzyBotzXPawBotz`)
									if (q.includes('|')) return reply(`Kirim perintah *${prefix + command}* FoxzyBotzXPawBotz`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks2 = args.join(' ')
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
										var mediia = await haruka.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediia)
										var resu = `https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`
										sendStickerFromUrl(from,`${resu}`)	
										} catch (e) {
											reply(lang.err())
											console.log(e)
										}
										}
									break	
case 'leave':
			if (!isGroup) return reply(lang.group())
			if (!isOwner) return reply(lang.owner(botname))
			setTimeout( () => {
			haruka.groupLeave(from) 
			}, 2000)
			setTimeout( () => {
			haruka.sendMessage(from, 'Sayonara👋', text)
			}, 0)
			break
case 'hidetag':        
	                if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await haruka.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					//var options = {text: value, contextInfo: { mentionedJid: mem }, quoted: fhidetag}
					haruka.sendMessage(from, value, text, {quoted: ftroli, contextInfo: { mentionedJid: mem }})
					break;
									case 'tagall':
										if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*${prefix}* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
case 'linkgrup':case 'linkgroup': case 'linkgc':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			linkgc = await haruka.groupInviteCode(from)
			yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
			haruka.sendMessage(from, yeh, text, { quoted: mek })
			break  
case 'setname':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
					await haruka.groupUpdateSubject(from, `${q}`)
					haruka.sendMessage(from, `Sukses Mengubah Nama Grup Menjadi ${q}`, text, { quoted: mek })
			break          
case 'setdesc': case 'setdesk':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
					await haruka.groupUpdateDescription(from, `${q}`)
					haruka.sendMessage(from, `Sukses Mengubah Desk Grup Menjadi ${q}`, text, { quoted: mek })
			break   
case 'kick':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
			if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
			var kickya = q.split('@')[1] + '@s.whatsapp.net'
			await haruka.groupRemove(from, [kickya])
			reply(`Succses kick target!`)
break
case 'bc': case 'broadcast':
			if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
			if (args.length === 0) return reply(`Kirim perintah *${prefix + command}* text`)
			var bcnya = await haruka.chats.all()
			if (isMedia && !mek.message.videoMessage || isQuotedImage) {
			var  bcnya2 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			var bcnya3 = await haruka.downloadMediaMessage(bcnya2)
					for (let _ of bcnya) {
						haruka.sendMessage(_.jid, bcnya3, image, { caption: `*----「  BROADCAST 」----*\n\n${q}` })
						}
						reply('Sukses broadcast')
					} else {
						for (let _ of bcnya) {
							sendButLocation(_.jid, '「 PESAN SIARAN 」\n\n' + q, '© ' + ownername, thumbnail, [{buttonId: '.owner', buttonText: {displayText: 'Owner'}, type: 1},{buttonId: '.infobot', buttonText:{displayText: 'Infobot'}, type: 1}], {quoted: mek})
							}
						reply('Sukses broadcast')
					}
					break      
case 'nightcore':{
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await haruka.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						haruka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:99999999999999999999999})
						fs.unlinkSync(ran)
					   })}
				  break      
case 'bass': {
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await haruka.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										haruka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek, duration:99999999999999999999999})
										fs.unlinkSync(ran)
										})}
										break    
case 'slowmo': case 'slow':{
								try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await haruka.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											uhh = fs.readFileSync(ran)
											haruka.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply('Error!')
												}  
											}
												
									break
case 'robot':{
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await haruka.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										haruka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
										fs.unlinkSync(ran)
										})
										}
									break
case 'vibra': case 'vibrato':{
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await haruka.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										haruka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
										fs.unlinkSync(ran)
										})
										}
									break
case 'tupai':{
									try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await haruka.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											haruka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration: 999099})
											fs.unlinkSync(ran)
											})
											 } catch (e) {	
												reply(mess.error)
												}  	
												}
												break
case 'fast':{
									try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await haruka.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											haruka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply('Error!')
												}  
										}
									break
									case 'nulis':
									reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
									break
case 'toimg':{
		if (!isQuotedSticker) return reply('Reply stc nya!')
					reply(lang.wait())
					encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaa = await haruka.downloadAndSaveMediaMessage(encmediaa)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
					fs.unlinkSync(mediaa)
					if (err) return reply('Eror')
					buffer = fs.readFileSync(ran)
					haruka.sendMessage(from, buffer, image, {quoted: mek, thumbnail:Buffer.alloc(0), caption: 'Done'})
					fs.unlinkSync(ran)
					})
					}
					break   
case 'nuliskiri':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./database/media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										haruka.sendMessage(from, fs.readFileSync('./database/media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'nuliskanan':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./database/media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										haruka.sendMessage(from, fs.readFileSync('./database/media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'foliokiri':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./database/media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										haruka.sendMessage(from, fs.readFileSync('./database/media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'foliokanan':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./database/media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										haruka.sendMessage(from, fs.readFileSync('./database/media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
									})
									}
									break
									case 'facebook': case 'fb': case 'fbdl': case 'facebookdl':{
	if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                if(!q)return reply(`Example : ${prefix + command} link Facebook`)
                if (!q.includes('facebook.com') && !q.includes('fb.watch')) return reply('Itu bukan link Facebook')
                await reply(lang.wait())
try{
                zee.Facebook(`${q}`).then(async data => {
                    let txt = `*----「 FACEBOOK DOWNLOADER 」----*\n\n`
                    txt += `*• Title :* ${data.title}\n`
                    txt += `*• Type :* ${data.medias[0].extension}\n`
                    txt += `*• Quality :* ${data.medias[0].quality}\n`
                    txt += `*• Size HD:* ${data.medias[1].formattedSize}\n`
					txt += `*• Url :* ${data.url}`
                    let ppfb = await getBuffer(data.medias[1].url)
                    haruka.sendMessage(from, ppfb, video, {mimetype:'video/mp4', quoted: mek, caption: txt})
             })} catch {
             	reply('Fitur sedang error')
} 
   }          
             break
   case 'soundcloud':
	if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                if(!q)return reply(`Example : ${prefix + command} link SoundCloud`)
                if (!q.includes('m.soundcloud.com')) return reply('Itu bukan link SoundCloud')
                await reply(lang.wait())
				zee.SoundCloud(`${q}`).then(async (data) => {
                    let txt = `*----「 SOUNDCLOUD DOWNLOAD 」----*\n\n`
                    txt += `*• Title :* ${data.title}\n`
                    txt += `*• Duration :* ${data.duration}\n`
					txt += `*• Quality :* ${data.medias[1].quality}\n`
					txt += `*• Ext :* ${data.medias[0].extension}\n`
                    txt += `*• Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*• Url  :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar, sedang proses pengiriman...*`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    haruka.sendMessage(from , await getBuffer(data.medias[0].url), audio,{ quoted: mek, mimetype: 'audio/mp4' })
				})
			break
	case 'telesticker': case 'tstiker': {
		if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!q) return reply(`Contoh: ${prefix + command} *https://t.me/addstickers/geestickerpack*`)
			if (!q.includes('t.me')) return reply('Bukan link telegram stiker')
			var telestc = await zee.Telesticker(`${q}`)
			await reply(lang.wait())
			for (let i = 0; i < (telestc.length < 10 ? telestc.length : 10); i++) {
			haruka.sendMessage(from, await getBuffer(telestc[i].url), sticker, {mimetype:'image/webp',quoted: mek})
			}
		}
		break
case 'tebakgambar':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
hx.tebakgambar().then(async data =>{
	tebakya = await getBuffer(data[0].image)
jawaban = `${data[0].jawaban.replace('Jawaban ', '')}`
tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
console.log(jawaban)
haruka.sendMessage(from, tebakya, image, {quoted: mek, caption: "\n\nTimeout : 120.00 seconds" })
await sleep(120000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
haruka.sendMessage(from, "Waktu permainan habis" + '\n\n' +"*Jawaban :*"  + '\n' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    })
					break   
case 'semoji': case'emoji':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
if (!q) return reply('emojinya?')
					qes = args.join(' ')
reply(lang.wait())
	emoji.get(`${qes}`).then(async emojii => {
					teks = `${emojii.images[4].url}`
					console.log(teks)
					//haruka.sendMessage(from, await getBuffer(teks), sticker, {mimetype:'image/webp',quoted: mek})
		  sendStickerFromUrl(from,`${teks}`)	
		
		})
		
		break 
case 'ytmp3': {
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3* _Url YouTube_`)
			if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link tidak valid!')
			var mulaikah = args.join(' ')
			await reply(lang.wait())
                zee.Youtube(mulaikah).then(async (data) => {
                    let txt = `*----「 YOUTUBE AUDIO 」----*\n\n`
                    txt += `*• Quality :* ${data.medias[7].quality}\n`
                    txt += `*• Type :* ${data.medias[7].extension}\n`
                    txt += `*• Size :* ${data.medias[7].formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `_Mohon tunggu sebentar , uploading media..._`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    sendFileFromUrl(from, data.medias[7].url, '', mek)
                })
                }
             break
case 'ytmp4': {
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3* _Url YouTube_`)
			if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link tidak valid!')
			var mulaikah = args.join(' ')
			zee.Youtube(mulaikah).then(async (data) => {
                    let txt = `*----「 YOUTUBE VIDEO 」----*\n\n`
                    txt += `*• Quality :* ${data.medias[1].quality}\n`
                    txt += `*• Type :* ${data.medias[1].extension}\n`
                    txt += `*• Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `_Mohon tunggu sebentar , uploading media..._`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    sendFileFromUrl(from, data.medias[1].url, '', mek)                    
                })
                }
             break                         
		default:
if (budy.startsWith('>')){
try {
	if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
return haruka.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`HarukaBot :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;31m~\x1b[1;37m>', '[', '\x1b[1;32m EXC \x1b[1;37m', ']', time, chalk.green("=>"), 'from', chalk.green(pushname), 'args :', chalk.green(args.length))
} catch(e){
reply(String(e))
}
}                                               	
              }   
	
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', chalk.green(e))
        }
	}
}


	
    
