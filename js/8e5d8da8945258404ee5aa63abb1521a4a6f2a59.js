HB_BACKEND_HOST="hey.hellobar.com",HB_SITE_ID=121885,HB_WK="904c6f89-9c91-4a0a-8f34-4f8c1727cdc6",HB_TZ="-05:00",HB_PS="f92b8f4287d6c6f44c68170c6d7aa4a7a5ed0e95","undefined"==typeof _hbq&&(_hbq=[]);var HBQ=function(){if(HB.rules=[],HB.loadCookies(),"undefined"!=typeof _hbq&&_hbq&&_hbq.length)for(var e=0;_hbq.length>e;e++)this.push(_hbq[e]);HB.setDefaultSegments();var t=HB.applyRules();t&&HB.render(t),HB.isMobileWidth=!1,setInterval(function(){var e=window.frames.hellobar_container;if(e){var t=e.document;if(HB.e={container:HB.$("#hellobar_container"),pusher:HB.$("#hellobar_pusher")},t&&(HB.e.siteElement=t.getElementById("hellobar"),HB.e.shadow=t.getElementById("hellobar-shadow")),HB.e.siteElement){HB.e.siteElement.clientHeight&&(HB.e.shadow&&(HB.e.shadow.style.top=HB.e.siteElement.clientHeight+(HB.currentSiteElement.show_border?0:-1)+"px",HB.e.shadow.style.display="block"),HB.e.container&&(HB.e.container.style.height=HB.e.siteElement.clientHeight+8+"px"),HB.e.pusher&&(HB.e.pusher.style.height=HB.e.siteElement.clientHeight+(HB.t(HB.currentSiteElement.show_border)?3:0)+"px"),HB.e.siteElement.clientHeight>50?HB.addClass(HB.e.siteElement,"multiline"):HB.removeClass(HB.e.siteElement,"multiline"));var n=HB.isMobileWidth;if(HB.isMobileWidth=640>=HB.e.siteElement.clientWidth,n==HB.isMobileWidth)return;HB.isMobileWidth?HB.addClass(HB.e.siteElement,"mobile"):HB.removeClass(HB.e.siteElement,"mobile")}}},50)};HBQ.prototype.push=function(){if(1==arguments.length&&"function"==typeof arguments[0])arguments[0]();else{for(var e=[],t=1;arguments.length>t;t++)e.push(arguments[t]);HB[arguments[0]].apply(HB,e)}};var _HB={CAP:{},$:function(e){return"string"==typeof e?document.getElementById(e.replace("#","")):e},t:function(e){return e&&"false"!=e&&"0"!=e?!0:!1},addClass:function(e,t){e=HB.$(e),0>e.className.indexOf(t)&&(e.className+=" "+t)},removeClass:function(e,t){e=HB.$(e);for(var n=e.className.split(" "),i=[],r=0;n.length>r;r++)n[r]!=t&&i.push(n[r]);e.className=i.join(" ")},addCSS:function(e){e&&(HB.css||(HB.css=""),e=e.split("hellobar_logo").join("hellobar_logo_"+HB_PS),HB.css+="<style>"+e+"</style>")},getNDomain:function(e){return e?(e+="",0==e.indexOf("/")?"":e.replace(/.*?\:\/\//,"").replace(/(.*?)\/.*/,"$1").replace(/www\./i,"").toLowerCase()):""},n:function(e,t){(e.match(/^https?:\/\/[^\/]*$/i)||e.match(/^[^\/]*\.(com|edu|gov|us|net|io)$/i))&&(e+="/"),e=(e+"").toLowerCase().replace(/https?:\/\//,"").replace(/^www\./,"").replace(/\#.*/,""),t&&(e.match(/^\//)||(e=e.replace(/.*?\//,"/")));var n=e.split("?");return n[1]?HB.stripTrailingSlash(n[0])+"?"+n[1].split("&").sort().join("&"):HB.stripTrailingSlash(n[0])},stripTrailingSlash:function(e){return e.replace(/(.+)\/$/i,"$1")},umatch:function(e,t){return-1==e.indexOf("?")?HB.n(e,!0)==HB.n(t,!0).split("?")[0]:HB.n(e,!0)==HB.n(t,!0)},getVisitorAttributes:function(){var e=["fv","lv","ec","sc","dt"],t=/(^ec.*_[fl]$)|(^sc.*_[fl]$)|(^l\-.+)/,n={};for(var i in HB.cookies.visitor){var r=HB.cookies.visitor[i];"string"!=typeof r&&"number"!=typeof r&&"boolean"!=typeof r||-1!=e.indexOf(i)||i.match(t)||(n[i.toLowerCase()]=(HB.cookies.visitor[i]+"").toLowerCase().substr(0,150))}return HB.serializeCookieValues(n)},s:function(e,t,n,i){if("undefined"!=typeof HB_DNT||"undefined"==typeof HB_SITE_ID||"undefined"==typeof HB_WK)return i&&"function"==typeof i&&i(),void 0;var r="/"+e+"/"+HB.obfID(HB_SITE_ID);t&&(r+="/"+HB.obfID(t));var o=Math.round((new Date).getTime()/1e3);n.t=o,n.v=HB.i(),n.f="i",n.s=HB.signature(HB_WK,r,n),r+="?"+HB.paramsToString(n);var a=document.createElement("img");if(a.style.display="none",i){var l=!1,s=function(){l||i(),l=!0};setTimeout(s,750),a.onload=s}a.src=HB.hi(r)},hi:function(e){return("https:"==document.location.protocol?"https":"http")+"://"+HB_BACKEND_HOST+e},trackClick:function(e){var t=e.href;HB.converted(function(){"_blank"==e.target?window.open(t):document.location=t})},getConversionKey:function(e){switch(e.type){case"email":return"ec";case"social":return"sc";case"traffic":return"l-"+HB.getShortestKeyForURL(e.settings.url)}},getShortestKeyForURL:function(e){return e=0==e.indexOf("/")||HB.getNDomain(e)==HB.getNDomain(document.location)?HB.n(e,!0):HB.n(e),e.length>40?HBCrypto.SHA1(e).toString():e},converted:function(e){var t=HB.getConversionKey(HB.currentSiteElement),n=Math.round((new Date).getTime()/1e3);HB.setVisitorData(t,(HB.getVisitorData(t)||0)+1),HB.setVisitorData(t+"_f",n),HB.setVisitorData(t+"_l",n),HB.setSiteElementData(HB.si,"nc",(HB.getSiteElementData(HB.si,"nc")||0)+1),HB.getSiteElementData(HB.si,"fc")||HB.setSiteElementData(HB.si,"fc",n),HB.setSiteElementData(HB.si,"lc",n),HB.trigger("conversion",HB.currentSiteElement),HB.s("g",HB.si,{a:HB.getVisitorAttributes()},e)},didConvert:function(e){return HB.getVisitorData(HB.getConversionKey(e))},submitEmail:function(e,t,n,i){HB.validateEmail(e.value,t.value,function(){n.innerHTML="<span>"+i+"</span>",HB.recordEmail(e.value,t.value,function(){})},function(){HB.shake(e)})},validateEmail:function(e,t,n,i){e&&e.match(/.+@.+\..+/)&&!e.match(/,/)?n():i()},recordEmail:function(e,t,n){if(e){var i=e;t&&(i+=","+t),HB.s("c",HB.cli,{e:i},function(){HB.converted(n)})}},serializeCookieValues:function(e){if(!e)return"";var t=[];for(var n in e){var i=e[n];"function"!=typeof i&&"object"!=typeof i&&t.push(HB.sanitizeCookieValue(n).replace(/:/g,"-")+":"+HB.sanitizeCookieValue(i))}return t.join("|")},sanitizeCookieValue:function(e){return(e+"").replace(/[\^\|\,\;\n\r]/g," ")},parseCookieValues:function(e){if(!e)return{};for(var t=e.split("|"),n={},i=0;t.length>i;i++){var r=t[i].split(":"),o=r[0],a=r.slice(1,r.length).join(":");n[o]=HB.parseValue(a)}return n},parseValue:function(e){return parseInt(e,10)==e?e=parseInt(e,10):parseFloat(e)==e&&(e=parseFloat(e)),e},loadCookies:function(){if("undefined"==typeof HB_SITE_ID)HB.cookies={siteElements:{},visitor:{}};else{HB.cookies={visitor:HB.parseCookieValues(HB.gc("hbv_"+HB_SITE_ID)),siteElements:{}};for(var e=(HB.gc("hbs_"+HB_SITE_ID)||"").split("^"),t=0;e.length>t;t++){var n=e[t];if(n){var i=n.indexOf("|"),r=n.slice(0,i),o=n.slice(i+1);HB.cookies.siteElements[r]=HB.parseCookieValues(o)}}}},saveCookies:function(){if("undefined"!=typeof HB_SITE_ID){HB.sc("hbv_"+HB_SITE_ID,HB.serializeCookieValues(HB.cookies.visitor),1825);var e=[];for(var t in HB.cookies.siteElements){var n=HB.cookies.siteElements[t];"function"!=typeof n&&e.push(t+"|"+HB.serializeCookieValues(n))}HB.sc("hbs_"+HB_SITE_ID,e.join("^"),1825)}},getVisitorData:function(e){return HB.cookies.visitor[e]},setVisitorData:function(e,t,n){(!n||t)&&(HB.cookies.visitor[e]=t,HB.saveCookies())},getSiteElementData:function(e,t){if(e){e+="";var n=HB.cookies.siteElements;return n[e]||(n[e]={}),n[e][t]}},setSiteElementData:function(e,t,n){if(e){e+="";var i=HB.cookies.siteElements;i[e]||(i[e]={}),i[e][t]=n,HB.saveCookies()}},gc:function(e){var t,n,i,r=document.cookie.split(";");for(t=0;r.length>t;t++)if(n=r[t].substr(0,r[t].indexOf("=")),i=r[t].substr(r[t].indexOf("=")+1),n=n.replace(/^\s+|\s+$/g,""),n==e)return unescape(i)},sc:function(e,t,n){if("undefined"==typeof HB_NC){var i=new Date;i.setDate(i.getDate()+n),t=escape(t)+(null==n?"":"; expires="+i.toUTCString()),document.cookie=e+"="+t}},i:function(){var e;if(e=HB.gc("hbuid"))return e;var t=(new Date).getTime();return e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=0|(t+16*Math.random())%16;return t=Math.floor(t/16),("x"==e?n:8|7&n).toString(16)}),HB.sc("hbuid",e,1825),e},domReady:function(e){if(document.body)e();else var t=setInterval(function(){document.body&&(e(),clearInterval(t))},50)},templateHTML:{},setTemplate:function(e,t){HB.templateHTML[e]=t},getTemplate:function(e){return HB.templateHTML[e.template_name]},prerender:function(e){return this.sanitize(e)},sanitize:function(e){for(var t in e)e.hasOwnProperty(t)&&e[t]&&e[t].replace&&(e[t]=e[t].replace(/</g,"&lt;").replace(/>/g,"&gt;"));return e},renderTemplate:function(e,t){return e.replace(/\{\{(.*?)\}\}/g,function(e,n){return HB.parseTemplateVar(n,t)})},parseTemplateVar:function(value,siteElement){try{value=eval(value)}catch(e){}return void 0===value?"":value},on:function(e,t){HB.eventCallbacks||(HB.eventCallbacks={}),HB.eventCallbacks[e]||(HB.eventCallbacks[e]=[]),HB.eventCallbacks[e].push(t)},trigger:function(){var e=arguments[0];if(HB.eventCallbacks&&HB.eventCallbacks[e]){for(var t=HB.eventCallbacks[e].length,n=[],i=1;arguments.length>i;i++)n.push(arguments[i]);for(i=0;t>i;i++)(function(e,t){setTimeout(function(){HB.eventCallbacks[e][t].apply(HB,n)},t)})(e,i)}},render:function(e){var t={};for(var n in e)t[n]=e[n];var i=HB.prerender(t);if(HB.currentSiteElement=i,HB.si=i.id,HB.cli=i.contact_list_id,"#nohb"!=document.location.hash){var r=HB.renderTemplate(this.getTemplate(i)+"",i);HB.domReady(function(){setTimeout(function(){HB.injectSiteElementHTML(r,i),HB.viewed(),HB.hideOnZoom()},1)})}},viewed:function(){HB.s("v",HB.si,{a:HB.getVisitorAttributes()}),HB.setSiteElementData(HB.si,"nv",(HB.getSiteElementData(HB.si,"nv")||0)+1);var e=Math.round((new Date).getTime()/1e3);HB.getSiteElementData(HB.si,"fv")||HB.setSiteElementData(HB.si,"fv",e),HB.setSiteElementData(HB.si,"lv",e),HB.trigger("siteElementshown",HB.currentSiteElement)},hideOnZoom:function(){if(window.addEventListener&&window.outerWidth&&window.innerWidth){var e=HB.w.style.position,t=function(t){var n=(window.outerWidth-8)/window.innerWidth;if(t.scale)HB.w.style.position=1.03>=t.scale?e:"absolute";else if("undefined"!=typeof window.orientation){if(480>=window.outerWidth&&1.3>=n)return HB.w.style.position=e;HB.w.style.position=.6>=n?e:"absolute"}else HB.w.style.position=1.3>=n?e:"absolute"};window.addEventListener("gesturechange",t),window.addEventListener("scroll",t)}},injectAtTop:function(e){document.body.children[0]?document.body.insertBefore(e,document.body.children[0]):document.body.appendChild(e)},injectSiteElementHTML:function(e,t){if(HB.w&&HB.w.parentNode.removeChild(HB.w),HB.w=document.createElement("iframe"),HB.w.src="about:blank",HB.w.id="hellobar_container",HB.w.name="hellobar_container",HB.w.className=t.size+(HB.t(t.remains_at_top)?" remains_at_top":""),HB.w.scrolling="no",HB.p&&HB.p.parentNode.removeChild(HB.p),HB.p=null,HB.t(t.pushes_page_down)&&(HB.p=document.createElement("div"),HB.p.id="hellobar_pusher",HB.p.className=t.size,HB.injectAtTop(HB.p)),HB.extCSS){HB.extCSSStyle&&HB.extCSSStyle.parentNode.removeChild(HB.extCSSStyle),HB.extCSSStyle=document.createElement("STYLE"),HB.extCSSStyle.type="text/css",HB.extCSSStyle.styleSheet?HB.extCSSStyle.styleSheet.cssText=HB.extCSS:HB.extCSSStyle.appendChild(document.createTextNode(HB.extCSS));var n=document.getElementsByTagName("HEAD")[0];n.appendChild(HB.extCSSStyle)}HB.injectAtTop(HB.w);var i=HB.w.contentWindow.document;i.open(),i.write((HB.css||"")+e),i.close()},addRule:function(e,t,n){"[object Array]"!==Object.prototype.toString.call(n)&&(n=[n]);var i={matchType:e,conditions:t,siteElements:n};HB.rules.push(i);for(var r=0;n.length>r;r++)n[r].rule=i},applyRules:function(){var e,t,n,i=[];for(e=0;HB.rules.length>e;e++){var r=HB.rules[e];if(HB.ruleTrue(r))for(t=0;r.siteElements.length>t;t++)n=r.siteElements[t],"traffic"!=n.type&&HB.didConvert(n)||(i[n.type]||(i[n.type]=[]),i[n.type].push(n))}if(i.email)i=i.email;else if(i.social)i=i.social;else{if(!i.traffic)return;i=i.traffic}if(i&&0!=i.length){if(1==i.length)return i[0];for(e=0;i.length>e;e++)if(HB.getSiteElementData(i[e].id,"nv"))return i[e];var o=[];for(e=0;i.length>e;e++)1e3>i[e].views&&o.push(i[e]);return o.length>=1?o[Math.floor(Math.random()*o.length)]:Math.random()>=.9?i[Math.floor(Math.random()*i.length)]:(i.sort(function(e,t){return e.conversion_rate<t.conversion_rate?1:e.conversion_rate>t.conversion_rate?-1:0}),i[0])}},ruleTrue:function(e){for(var t=0;e.conditions.length>t;t++)if(HB.conditionTrue(e.conditions[t])){if("any"==e.matchType)return!0}else if("any"!=e.matchType)return!1;return"any"==e.matchType&&e.conditions.length>0?!1:!0},conditionTrue:function(e){var t=HB.getSegmentValue(e.segment),n=e.value;if("between"==e.operand)return HB.applyOperand(t,e.operand,n);("object"!=typeof n||"number"!=typeof n.length)&&(n=[n]),t=HB.sanitizeConditionValue(e.segment,t);var i;for(i=0;n.length>i;i++)n[i]=HB.sanitizeConditionValue(e.segment,n[i]);if(e.operand.match(/not/)){for(i=0;n.length>i;i++)if(!HB.applyOperand(t,e.operand,n[i]))return!1;return!0}for(i=0;n.length>i;i++)if(HB.applyOperand(t,e.operand,n[i]))return!0;return!1},sanitizeConditionValue:function(e,t){return"pu"==e&&(t=HB.n(t,!0)),t},getSegmentValue:function(e){return"url"==e?e="pu":"device"==e?e="dv":"country"==e?e="co":"referrer"==e||"referer"==e?e="rf":"date"==e&&(e="dt"),HB.getVisitorData(e)},applyOperand:function(e,t,n){switch(t){case"is":case"equals":return e==n;case"is_not":case"does_not_equal":return e!=n;case"includes":return-1!=HB.stringify(e).indexOf(HB.stringify(n));case"does_not_include":return-1==HB.stringify(e).indexOf(HB.stringify(n));case"before":case"less_than":return n>e;case"less_than_or_equal":return n>=e;case"after":case"greater_than":return e>n;case"greater_than_or_equal":return e>=n;case"between":case"is_between":return e>=n[0]&&n[1]>=e}},stringify:function(e){return(e+"").toLowerCase()},setDefaultSegments:function(){var e=new Date,t=Math.round(e.getTime()/1e3),n=86400;HB.getVisitorData("fv")||HB.setVisitorData("fv",t);var i=HB.getVisitorData("lv");i&&HB.setVisitorData("ls",Math.round((t-i)/n)),HB.setVisitorData("lv",t),HB.setVisitorData("lf",Math.round((t-HB.getVisitorData("fv"))/n)),HB.setVisitorData("nv",(HB.getVisitorData("nv")||0)+1);var r=HB.paramsFromString(document.location);if(HB.setVisitorData("ad_so",r.utm_source,!0),HB.setVisitorData("ad_ca",r.utm_campaign,!0),HB.setVisitorData("ad_me",r.utm_medium,!0),HB.setVisitorData("ad_co",r.utm_content,!0),HB.setVisitorData("ad_te",r.utm_term,!0),document.referrer){var o=HB.getTLD().toLowerCase(),a=(document.referrer+"").replace(/.*?\:\/\//,"").replace(/www\./i,"").toLowerCase().substr(0,150),l=a.replace(/(.*?)\/.*/,"$1");if(-1==l.indexOf(o)){HB.getVisitorData("or")||HB.setVisitorData("or",a),HB.setVisitorData("rf",a),HB.setVisitorData("rd",l);var s=HB.paramsFromString(document.referer);HB.setVisitorData("st",s.query||s.q||s.search,!0)}}HB.setVisitorData("pu",HB.n(document.location+"",!0)),HB.setVisitorData("dt",HB.ymd(HB.nowInTimezone()));var h=navigator.userAgent;h.match(/(mobi|phone|ipod|blackberry|docomo)/i)?HB.setVisitorData("dv","mobile"):h.match(/(ipad|kindle|android)/i)?HB.setVisitorData("dv","tablet"):HB.setVisitorData("dv","computer")},paramsFromString:function(e){var t={};if(!e)return t;e+="";var n=-1==e.indexOf("?")?e:e.split("?")[1];if(!n)return t;for(var i=n.split("&"),r=0;i.length>r;r++){var o,a,l=i[r].split("=");o=decodeURIComponent(l[0]).toLowerCase(),a=decodeURIComponent(l[1]),t[o]=a}return t},paramsToString:function(e){var t=[];for(var n in e)"function"!=typeof e[n]&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")},getTLD:function(){var e,t,n="tld=ck",i=document.location.hostname.split(".");for(e=i.length-1;e>=0;e--)if(t=i.slice(e).join("."),document.cookie=n+";domain=."+t+";",document.cookie.indexOf(n)>-1)return document.cookie=n.split("=")[0]+"=;domain=."+t+";expires=Thu, 01 Jan 1970 00:00:01 GMT;",t;return document.location.hostname},shake:function(e){(function(e){var t=0,n=-.1,i=1,r=e.style.position,o=parseInt(e.style.left,0)||0,a=o,l=0;e.style.position="relative";var s=setInterval(function(){t+=n,a-o>=i&&n>0&&(n*=-1),-i>=a-o&&0>n&&(l+=1,n*=-1),a+=t,l>=2&&a>=o&&(clearInterval(s),e.style.left=o+"px",e.style.position=r),e.style.left=Math.round(a)+"px"},5)})(HB.$(e))},parseTimezone:function(e){if(!e||"string"!=typeof e)return null;if("+"!=e[0]&&"-"!=e[0]&&(e="+"+e),-1==e.indexOf(":")&&(e=e.slice(0,e.length-2)+":"+e.slice(e.length-2)),!e.match(/^[\+-]\d{1,2}:\d\d$/))return null;var t=e.split(":"),n="+"==e[0]?1:-1,i=Math.abs(parseInt(t[0],10)),r=parseInt(t[1],10);return(60*60*i+60*r)*n},nowInTimezone:function(e){e||"string"!=typeof HB_TZ||(e=HB_TZ);var t=HB.parseTimezone(e);if(null===t)return new Date;var n=new Date;return new Date(n.getTime()+1e3*60*n.getTimezoneOffset()+1e3*t)},ymd:function(e){"undefined"==typeof e&&(e=new Date);var t=e.getMonth()+1;return e.getFullYear()+"-"+this.zeropad(t)+"-"+this.zeropad(e.getDate())},zeropad:function(e,t){return e=e.toString(),"undefined"==typeof t&&1==e.length&&(t=2),t=t||e.length,e.length>=t?e:this.zeropad("0"+e,t)},obfID:function(e){var t,n="-",i="_",r="S6pjZ9FbD8RmIvT3rfzVWAloJKMqg7CcGe1OHULNuEkiQByns5d4Y0PhXw2xta",o=e+"",a=[],l=[o.slice(0,3),o.slice(3,6),o.slice(6,9)],s=[];for(t=0;l.length>t;t++)l[t]&&s.push(l[t]);for(t=0;s.length>t;t++){for(var h="",c=s[t].split(""),u=0;c.length>u&&"0"==c[u];u++)h+=i;var p=parseInt(s[t],10);if(0!=p)for(;;){var d;if(d=p>r.length?Math.floor(Math.random()*r.length+1):Math.floor(Math.random()*p+1),h+=r[d-1],p-=d,0>=p)break}a.push(h)}return a.join(n)},signature:function(e,t,n){var i=[];for(var r in n)"function"!=typeof n[r]&&"s"!=r&&i.push(r+"="+n[r]);return i.sort(),HBCrypto.HmacSHA512(t+"?"+i.join("|"),e).toString()}},HBCrypto=HBCrypto||function(e,t){var n={},i=n.lib={},r=function(){},o=i.Base={extend:function(e){r.prototype=this;var t=new r;return e&&t.mixIn(e),t.hasOwnProperty("init")||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},a=i.WordArray=o.extend({init:function(e,n){e=this.words=e||[],this.sigBytes=n!=t?n:4*e.length},toString:function(e){return(e||s).stringify(this)},concat:function(e){var t=this.words,n=e.words,i=this.sigBytes;if(e=e.sigBytes,this.clamp(),i%4)for(var r=0;e>r;r++)t[i+r>>>2]|=(255&n[r>>>2]>>>24-8*(r%4))<<24-8*((i+r)%4);else if(n.length>65535)for(r=0;e>r;r+=4)t[i+r>>>2]=n[r>>>2];else t.push.apply(t,n);return this.sigBytes+=e,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-8*(n%4),t.length=e.ceil(n/4)},clone:function(){var e=o.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n=[],i=0;t>i;i+=4)n.push(0|4294967296*e.random());return new a.init(n,t)}}),l=n.enc={},s=l.Hex={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],i=0;e>i;i++){var r=255&t[i>>>2]>>>24-8*(i%4);n.push((r>>>4).toString(16)),n.push((15&r).toString(16))}return n.join("")},parse:function(e){for(var t=e.length,n=[],i=0;t>i;i+=2)n[i>>>3]|=parseInt(e.substr(i,2),16)<<24-4*(i%8);return new a.init(n,t/2)}},h=l.Latin1={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],i=0;e>i;i++)n.push(String.fromCharCode(255&t[i>>>2]>>>24-8*(i%4)));return n.join("")},parse:function(e){for(var t=e.length,n=[],i=0;t>i;i++)n[i>>>2]|=(255&e.charCodeAt(i))<<24-8*(i%4);return new a.init(n,t)}},c=l.Utf8={stringify:function(e){try{return decodeURIComponent(escape(h.stringify(e)))}catch(t){throw Error("Malformed UTF-8 data")}},parse:function(e){return h.parse(unescape(encodeURIComponent(e)))}},u=i.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new a.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=c.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,i=n.words,r=n.sigBytes,o=this.blockSize,l=r/(4*o),l=t?e.ceil(l):e.max((0|l)-this._minBufferSize,0);if(t=l*o,r=e.min(4*t,r),t){for(var s=0;t>s;s+=o)this._doProcessBlock(i,s);s=i.splice(0,t),n.sigBytes-=r}return new a.init(s,r)},clone:function(){var e=o.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});i.Hasher=u.extend({cfg:o.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new p.HMAC.init(e,n).finalize(t)}}});var p=n.algo={};return n}(Math);if(function(e){var t=HBCrypto,n=t.lib,i=n.Base,r=n.WordArray,t=t.x64={};t.Word=i.extend({init:function(e,t){this.high=e,this.low=t}}),t.WordArray=i.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=n!=e?n:8*t.length},toX32:function(){for(var e=this.words,t=e.length,n=[],i=0;t>i;i++){var o=e[i];n.push(o.high),n.push(o.low)}return r.create(n,this.sigBytes)},clone:function(){for(var e=i.clone.call(this),t=e.words=this.words.slice(0),n=t.length,r=0;n>r;r++)t[r]=t[r].clone();return e}})}(),function(){function e(){return r.create.apply(r,arguments)}for(var t=HBCrypto,n=t.lib.Hasher,i=t.x64,r=i.Word,o=i.WordArray,i=t.algo,a=[e(1116352408,3609767458),e(1899447441,602891725),e(3049323471,3964484399),e(3921009573,2173295548),e(961987163,4081628472),e(1508970993,3053834265),e(2453635748,2937671579),e(2870763221,3664609560),e(3624381080,2734883394),e(310598401,1164996542),e(607225278,1323610764),e(1426881987,3590304994),e(1925078388,4068182383),e(2162078206,991336113),e(2614888103,633803317),e(3248222580,3479774868),e(3835390401,2666613458),e(4022224774,944711139),e(264347078,2341262773),e(604807628,2007800933),e(770255983,1495990901),e(1249150122,1856431235),e(1555081692,3175218132),e(1996064986,2198950837),e(2554220882,3999719339),e(2821834349,766784016),e(2952996808,2566594879),e(3210313671,3203337956),e(3336571891,1034457026),e(3584528711,2466948901),e(113926993,3758326383),e(338241895,168717936),e(666307205,1188179964),e(773529912,1546045734),e(1294757372,1522805485),e(1396182291,2643833823),e(1695183700,2343527390),e(1986661051,1014477480),e(2177026350,1206759142),e(2456956037,344077627),e(2730485921,1290863460),e(2820302411,3158454273),e(3259730800,3505952657),e(3345764771,106217008),e(3516065817,3606008344),e(3600352804,1432725776),e(4094571909,1467031594),e(275423344,851169720),e(430227734,3100823752),e(506948616,1363258195),e(659060556,3750685593),e(883997877,3785050280),e(958139571,3318307427),e(1322822218,3812723403),e(1537002063,2003034995),e(1747873779,3602036899),e(1955562222,1575990012),e(2024104815,1125592928),e(2227730452,2716904306),e(2361852424,442776044),e(2428436474,593698344),e(2756734187,3733110249),e(3204031479,2999351573),e(3329325298,3815920427),e(3391569614,3928383900),e(3515267271,566280711),e(3940187606,3454069534),e(4118630271,4000239992),e(116418474,1914138554),e(174292421,2731055270),e(289380356,3203993006),e(460393269,320620315),e(685471733,587496836),e(852142971,1086792851),e(1017036298,365543100),e(1126000580,2618297676),e(1288033470,3409855158),e(1501505948,4234509866),e(1607167915,987167468),e(1816402316,1246189591)],l=[],s=0;80>s;s++)l[s]=e();i=i.SHA512=n.extend({_doReset:function(){this._hash=new o.init([new r.init(1779033703,4089235720),new r.init(3144134277,2227873595),new r.init(1013904242,4271175723),new r.init(2773480762,1595750129),new r.init(1359893119,2917565137),new r.init(2600822924,725511199),new r.init(528734635,4215389547),new r.init(1541459225,327033209)])},_doProcessBlock:function(e,t){for(var n=this._hash.words,i=n[0],r=n[1],o=n[2],s=n[3],h=n[4],c=n[5],u=n[6],n=n[7],p=i.high,d=i.low,f=r.high,g=r.low,m=o.high,B=o.low,H=s.high,b=s.low,_=h.high,v=h.low,w=c.high,y=c.low,x=u.high,S=u.low,E=n.high,C=n.low,k=p,D=d,T=f,V=g,z=m,I=B,M=H,A=b,O=_,j=v,L=w,W=y,N=x,P=S,q=E,R=C,$=0;80>$;$++){var K=l[$];if(16>$)var F=K.high=0|e[t+2*$],U=K.low=0|e[t+2*$+1];else{var F=l[$-15],U=F.high,Z=F.low,F=(U>>>1|Z<<31)^(U>>>8|Z<<24)^U>>>7,Z=(Z>>>1|U<<31)^(Z>>>8|U<<24)^(Z>>>7|U<<25),Y=l[$-2],U=Y.high,Q=Y.low,Y=(U>>>19|Q<<13)^(U<<3|Q>>>29)^U>>>6,Q=(Q>>>19|U<<13)^(Q<<3|U>>>29)^(Q>>>6|U<<26),U=l[$-7],G=U.high,X=l[$-16],J=X.high,X=X.low,U=Z+U.low,F=F+G+(Z>>>0>U>>>0?1:0),U=U+Q,F=F+Y+(Q>>>0>U>>>0?1:0),U=U+X,F=F+J+(X>>>0>U>>>0?1:0);K.high=F,K.low=U}var G=O&L^~O&N,X=j&W^~j&P,K=k&T^k&z^T&z,et=D&V^D&I^V&I,Z=(k>>>28|D<<4)^(k<<30|D>>>2)^(k<<25|D>>>7),Y=(D>>>28|k<<4)^(D<<30|k>>>2)^(D<<25|k>>>7),Q=a[$],tt=Q.high,nt=Q.low,Q=R+((j>>>14|O<<18)^(j>>>18|O<<14)^(j<<23|O>>>9)),J=q+((O>>>14|j<<18)^(O>>>18|j<<14)^(O<<23|j>>>9))+(R>>>0>Q>>>0?1:0),Q=Q+X,J=J+G+(X>>>0>Q>>>0?1:0),Q=Q+nt,J=J+tt+(nt>>>0>Q>>>0?1:0),Q=Q+U,J=J+F+(U>>>0>Q>>>0?1:0),U=Y+et,K=Z+K+(Y>>>0>U>>>0?1:0),q=N,R=P,N=L,P=W,L=O,W=j,j=0|A+Q,O=0|M+J+(A>>>0>j>>>0?1:0),M=z,A=I,z=T,I=V,T=k,V=D,D=0|Q+U,k=0|J+K+(Q>>>0>D>>>0?1:0)}d=i.low=d+D,i.high=p+k+(D>>>0>d>>>0?1:0),g=r.low=g+V,r.high=f+T+(V>>>0>g>>>0?1:0),B=o.low=B+I,o.high=m+z+(I>>>0>B>>>0?1:0),b=s.low=b+A,s.high=H+M+(A>>>0>b>>>0?1:0),v=h.low=v+j,h.high=_+O+(j>>>0>v>>>0?1:0),y=c.low=y+W,c.high=w+L+(W>>>0>y>>>0?1:0),S=u.low=S+P,u.high=x+N+(P>>>0>S>>>0?1:0),C=n.low=C+R,n.high=E+q+(R>>>0>C>>>0?1:0)},_doFinalize:function(){var e=this._data,t=e.words,n=8*this._nDataBytes,i=8*e.sigBytes;return t[i>>>5]|=128<<24-i%32,t[(i+128>>>10<<5)+30]=Math.floor(n/4294967296),t[(i+128>>>10<<5)+31]=n,e.sigBytes=4*t.length,this._process(),this._hash.toX32()},clone:function(){var e=n.clone.call(this);return e._hash=this._hash.clone(),e},blockSize:32}),t.SHA512=n._createHelper(i),t.HmacSHA512=n._createHmacHelper(i)}(),function(){var e=HBCrypto,t=e.enc.Utf8;e.algo.HMAC=e.lib.Base.extend({init:function(e,n){e=this._hasher=new e.init,"string"==typeof n&&(n=t.parse(n));var i=e.blockSize,r=4*i;n.sigBytes>r&&(n=e.finalize(n)),n.clamp();for(var o=this._oKey=n.clone(),a=this._iKey=n.clone(),l=o.words,s=a.words,h=0;i>h;h++)l[h]^=1549556828,s[h]^=909522486;o.sigBytes=a.sigBytes=r,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher;return e=t.finalize(e),t.reset(),t.finalize(this._oKey.clone().concat(e))}})}(),function(){var e=HBCrypto,t=e.lib,n=t.WordArray,i=t.Hasher,r=[],t=e.algo.SHA1=i.extend({_doReset:function(){this._hash=new n.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var n=this._hash.words,i=n[0],o=n[1],a=n[2],l=n[3],s=n[4],h=0;80>h;h++){if(16>h)r[h]=0|e[t+h];else{var c=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=c<<1|c>>>31}c=(i<<5|i>>>27)+s+r[h],c=20>h?c+((o&a|~o&l)+1518500249):40>h?c+((o^a^l)+1859775393):60>h?c+((o&a|o&l|a&l)-1894007588):c+((o^a^l)-899497514),s=l,l=a,a=o<<30|o>>>2,o=i,i=c}n[0]=0|n[0]+i,n[1]=0|n[1]+o,n[2]=0|n[2]+a,n[3]=0|n[3]+l,n[4]=0|n[4]+s},_doFinalize:function(){var e=this._data,t=e.words,n=8*this._nDataBytes,i=8*e.sigBytes;return t[i>>>5]|=128<<24-i%32,t[(i+64>>>9<<4)+14]=Math.floor(n/4294967296),t[(i+64>>>9<<4)+15]=n,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=i.clone.call(this);return e._hash=this._hash.clone(),e}});e.SHA1=i._createHelper(t),e.HmacSHA1=i._createHmacHelper(t)}(),"[object Array]"===Object.prototype.toString.call(_hbq)){if(HB=_HB,HB.CAP={no_b:null},"undefined"!=typeof Object.defineProperty){try{Object.defineProperty(HB,"CAP",{writable:!1,configurable:!1})}catch(e){}for(var p in HB.CAP)try{Object.defineProperty(HB.CAP,p,{writable:!1,configurable:!1})}catch(e){}}HB.setTemplate("email",'<div id="hellobar" class="{{siteElement.size}} {{siteElement.tab_side}} {{HB.t(siteElement.show_border) ? \'has_border\' : \'\'}} {{HB.t(siteElement.remains_at_top) ? \'remains_at_top\' : \'\'}}" style="background-color: #{{siteElement.background_color}}; color: #{{siteElement.text_color}}; font-family: {{siteElement.font}}; border-color: #{{siteElement.border_color}};">\n<div id="hb_msg_container">\n<span>\n  {{siteElement.message}}\n  <input id="hb_email" type="email" placeholder="Your Email"/>\n  <input id="hb_name" type="text" placeholder="Your Name" {{HB.t(siteElement.settings.collect_names) ? "" : "style=\'display:none\'"}}/>\n</span>\n<a onclick="window.parent.HB.submitEmail(document.getElementById(\'hb_email\'), document.getElementById(\'hb_name\'), document.getElementById(\'hb_msg_container\'), \'{{siteElement.thank_you_text}}\'); return false" href="#" class="hellobar_cta hb-{{siteElement.link_style}}" style="color: #{{siteElement.link_color}}; background-color: #{{siteElement.button_color}}; border-color: #{{siteElement.button_color}}">\n  {{siteElement.link_text}}\n</a>\n</div>\n<a href="http://www.hellobar.com/?utm_medium=hellobar&utm_campaign=HBlogo" target="_parent" class="hellobar_logo_{{HB_PS}}" style="{{(HB.t(siteElement.show_branding) || !HB.CAP.no_b) ? \'\' : \'display:none\'}}"><img src="https://s3.amazonaws.com/hb-assets/logo_white.png" alt="Hello Bar"  width="48" height="29" /></a>\n  <a href="#" class="hellobar_arrow" style="{{HB.t(siteElement.closable) ? \'\' : \'display:none\'}}"><img src="https://s3.amazonaws.com/hb-assets/arrow_white.png" alt="" width="28" height="29" /></a>\n  <div id="hellobar-shadow"></div>\n</div>\n'),HB.addCSS("#hellobar_pusher{height:30px;position:relative;overflow:hidden}#hellobar{min-height:30px;height:auto;text-align:center;width:100%;_width:expression(eval(document.body.offsetWidth-20));top:0;left:0;margin:0;padding:0;z-index:5000;position:absolute}#hellobar.has_border{border-bottom:3px solid white}#hellobar_pusher.large{height:50px}#hellobar.large{min-height:50px;height:auto;font-size:17px;font-weight:600}#hellobar.large span{font-size:17px}#hellobar.large a{line-height:45px}#hellobar.large a.hellobar_cta.hb-text{line-height:48px}#hellobar.large span{line-height:25px}#hellobar.large a.hellobar_logo{top:10px}#hellobar.large a.hellobar_logo img{height:29px;width:48px}#hellobar.large a.hellobar_arrow{top:10px}#hellobar.large a.hellobar_arrow img{height:29px;width:28px}#hellobar.large a.hellobar_cta.hb-button{padding:6px 15px}#hellobar.regular{font-size:14px}#hellobar.regular span{font-size:14px}#hellobar.regular a{line-height:30px}#hellobar.regular a.hellobar_cta.hb-text{line-height:28px}#hellobar.regular span{line-height:20px;margin-top:3px}#hellobar.regular a.hellobar_logo{top:4px}#hellobar.regular a.hellobar_logo img{height:21px;width:33px}#hellobar.regular a.hellobar_arrow{top:4px}#hellobar.regular a.hellobar_arrow img{height:21px;width:21px}#hellobar.regular a.hellobar_cta.hb-button{padding:2px 8px}#hellobar{white-space:normal}#hellobar span{margin-left:50px;margin-right:20px;margin-top:13px;display:inline-block}#hellobar a{margin-right:30px}#hellobar.large span{margin-left:65px}#hellobar.large.mobile span,#hellobar.regular.mobile span{margin-left:10px}#hellobar.large a{margin-right:65px}#hellobar a.hellobar_cta.hb-text{padding:6px 15px;border-radius:4px;color:#fff;padding-left:5px;text-decoration:underline;background:none!important}#hellobar a:hover.hellobar_cta.hb-text{}#hellobar a img{border:none;padding:0;margin:0;background-color:transparent}#hellobar a.hellobar_cta.hb-button{border:1px solid;box-shadow:inset 0 1px 1px rgba(255,255,255,0.1);border-radius:4px;margin:0;margin-left:10px;text-decoration:none;color:#fff;white-space:nowrap}#hellobar.mobile a.hellobar_logo{display:none}#hellobar.mobile a.hellobar_arrow{display:none}#hellobar a.hellobar_logo{position:absolute;display:block;left:10px;right:auto;opacity:.3}#hellobar a.hellobar_arrow{display:block;position:absolute;right:10px;left:auto;opacity:.3}#hellobar.left a.hellobar_logo{right:10px;left:auto}#hellobar.left a.hellobar_arrow{left:10px;right:auto}a:hover.hellobar_logo,a:hover.hellobar_arrow{opacity:.6}#hellobar-shadow{left:0;width:100%;height:8px;line-height:8px;background:url(https://s3.amazonaws.com/hb-assets/system/modules/hellobar/lib/sprite-8bit.png);position:absolute;margin-top:-3px;display:none}#hellobar.has_border #hellobar-shadow{margin-top:0}#hellobar input{box-shadow:inset 1px 1px 3px #aaa;border-radius:4px;border:none;width:150px;margin-left:10px;vertical-align:middle;padding:3px 3px;margin-bottom:2px;margin-top:0}#hellobar.large input{padding:5px 5px;margin-bottom:5px;margin-top:0}#hellobar iframe{vertical-align:middle}#hellobar.large span.social-wrapper{white-space:nowrap;margin:0}#hellobar.large span.twitter-share-button-wrapper{width:110px}#hellobar.large span.twitter-follow-button-wrapper{width:130px}#hellobar.large span.fb-like-wrapper{width:80px}#hellobar.large span.linkedin-button-wrapper{width:105px}#hellobar.large span.g-plusone-wrapper{width:110px}#hellobar.large span.pinterest-pin-button-wrapper{width:50px}#hellobar.large span.pinterest-follow-button-wrapper{width:100px}#hellobar span.fb_iframe_widget,#hellobar span.fb_iframe_widget span{margin:0;overflow:hidden}#hellobar span.fb_iframe_widget{position:relative;top:4px}#hellobar span.linkedin-button{line-height:normal;position:relative;top:5px;margin:0}#hellobar span.linkedin-button span{line-height:normal;margin:0;font-size:100%}#hellobar div#___plusone_0,#hellobar div#___follow_0{vertical-align:middle!important}#hellobar span.pinterest-pin-button{position:relative;top:5px;margin:0}#hellobar span.pinterest-pin-button a{margin:0}#hellobar span.pinterest-follow-button{position:relative;top:-2px;margin-left:0}#hellobar span.pinterest-follow-button a{display:none}#hellobar a.buffer-add-button{width:55px;height:20px;display:inline-block;overflow:hidden;background-image:url(https://d389zggrogs7qo.cloudfront.net/images/buffer_button.png);position:relative;top:4px;margin-right:0}#hellobar a.buffer-add-button:hover{background-position:0 -20px}.gc-bubbleDefault,.pls-container{display:none!important}#hellobar.multiline a.hellobar_cta.hb-button{margin-left:10px}#hellobar.mobile a.hellobar_cta.hb-button{margin-left:inherit}#hellobar.mobile #hb_email,#hellobar.mobile #hb_name{width:80%;margin-right:2.5%}#hellobar.mobile #hb_email{margin-top:10px}#hellobar>div{margin-right:58px}#hellobar.multiline>div{margin-right:65px}#hellobar.mobile>div{margin-right:inherit}"),HB.extCSS="#hellobar_container{width:100%;height:40px;border:none;padding:0;margin:0;position:absolute;overflow:hidden;left:0;top:0;z-index:17000}#hellobar_container.large{height:60px}#hellobar_container.remains_at_top{position:fixed;_position:absolute;top:0;_top:expression(eval(document.body.scrollTop))}#hellobar_pusher{height:30px;position:relative;overflow:hidden}#hellobar_pusher.large{height:50px}"
}_hbq.push(function(){HB.addRule("all",[],[{closable:!1,show_border:!1,background_color:"545352",border_color:"ffffff",button_color:"ffff03",font:"Helvetica,Arial,sans-serif",link_color:"545352",link_style:"button",link_text:"Go",message:"Subscribe to Lumera news and updates",size:"large",text_color:"ffffff",texture:"none",show_branding:!0,id:97736,views:7,conversions:0,conversion_rate:0,contact_list_id:70818,template_name:"email",type:"email",settings:{collect_names:0},hide_destination:!0,open_in_new_window:!1,pushes_page_down:!0,remains_at_top:!0,wiggle_wait:0,tab_side:"right",thank_you_text:"Thank you for signing up!"}])}),_hbq=new HBQ;