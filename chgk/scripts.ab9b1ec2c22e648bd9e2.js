(()=>{"use strict";var e,t={172:(e,t,s)=>{s(755),s(9);var o=s(974),n=s(857),a=s(374),i=s(35),c=s(518),r=s(40),l=s(266),p=s(225),g=s(312),d=s(204),u=s(969),m=s(764),f=s(407),b=s(113),x=s(748),h=s(935),y=(s(574),s(475),s(568),s(465),s(830),s(624),s(951),s(298),s(638),s(145),s(528),s(771),s(728),s(274),s(344),s(593),s(596),s(666),s(948),s(36),s(309),s(961),s(824),s(705),s(89),s(877),s(605),s(137),[{img:o,text:"Оргкомитет при приёме заявок"},{img:n,text:"Настроение нашего тренера зависит от цвета его головного убора: красный - лучше не рассказывать о том, что на вопросы, содержащие слово кукуруза, мы по умолчанию отвечаем «Никита Сергеевич» даже до сигнала время, желтый - можем обсудить почему Пушкин - это Дюма"},{img:a,text:" Искренне надеемся, что это мы 6 апреля"},{img:i,text:"На игре Медиа-азбука, где ответы должны начинаться с буквы, объявленной ведущим, мы не могли придумать ничего подходящего, поэтому оргкомитет долго смеялся с Урганта узбека и абортпроводника. Вся команда валялась от смеха под столом, а я, капитан, наблюдала за процессом снаружи"},{img:c,text:"Наша команда после взятого дублета или блица"},{img:r,text:"А что, если никто не смотрит наши мемы и все это зря?"},{img:l,text:"POV: наши аргументы в апелляции по спорному ответу"},{img:p,text:"Тренер после наших рассказов о многочисленных вопросах про Хрущева на Малом кубке Физтеха"},{img:g,text:"Мы предупреждаем о том, что опоздаем на игру на 15 минут (но на финал мы можем выехать хоть сейчас)"},{img:d,text:"POV: команда не поняла, как ты на вопрос «Какого числа произошло это событие?» ответил «на мой день рождения» и заставила написать другой вариант"},{img:u,text:"POV: завалили весь турнир, но один раз спасли площадку от гроба"},{img:m,text:"POV: услышали, что написанный на листочке ответ верный, но поняли, что забыли указать номер команды"},{img:f,text:"Каждый из участников команды, когда капитан написал неправильный ответ"},{img:b,text:"Немного самоиронии: наша команда почти всегда была исключительно женской"},{img:x,text:"Мы, в надежде получить приглашение на финал ШЧР"},{img:h,text:"Первый очный турнир после дистанта"}]),w=s(755),v=w(".achievements-table-col-info__item"),_=w(".achievements-table-col-info"),j=w(".owl-carousel"),O=w(".achievements-table"),k=w(".toggleTable"),L=!0,T=100,C="next.owl.carousel",E=[0,11,13,15,16,17,19,21,24,25,27],M={memes:w("#memes1")[0],team:w("#team1")[0],achievements:w("#ach1")[0],conclusion:w("#conclusion1")[0]};function B(e){var t,s=Object.values(k).indexOf(e.target),o=w(".tohide");~s&&(0===s||1===s?(t=o[0]).classList.contains("none")?(w("#doublebutton")[0].style.display="none",w("#asd")[0].style.display="inline",P(t),P(o[1])):(w("#doublebutton")[0].style.display="inline",w("#asd")[0].style.display="none",H(t),H(o[1])):(t=o[1]).classList.contains("none")?P(t):H(t))}function H(e){e.classList.add("none"),e.style.display="none"}function P(e){e.classList.remove("none"),e.style.display="grid"}function G(e){var t=Object.values(v).indexOf(e.target);L=!1,~t&&(j.trigger("to.owl.carousel",[t,0]),j.trigger("stop.owl.autoplay"),setTimeout((function(){L=!0,j.trigger("play.owl.autoplay",[5e3,1e3])}),7e3),Object.values(w(".tohide")).forEach((function(e){e.classList.contains("none")||H(e)})))}function S(){w(".appendingimg")[0].style.display="none"}function N(){w(".memes-buttons__showall")[0].classList.contains("memes-buttons__hideall")?(w(".memes-picsGallery")[0].style.display="none",w(".memes-buttons__hideall")[0].innerHTML="Показать всю коллекцию",w(".memes-buttons__hideall")[0].classList.remove("memes-buttons__hideall")):(w(".memes-picsGallery")[0].style.display="grid",w(".memes-buttons__showall")[0].innerHTML="Скрыть коллекцию",w(".memes-buttons__showall")[0].classList.add("memes-buttons__hideall"))}window.onload=function(){var e=document.getElementsByClassName("team-block-body"),t=document.getElementsByClassName("team-block-header"),s=document.getElementsByClassName("team-block");t[0].onclick=function(){return n(0)},t[1].onclick=function(){return n(1)},t[2].onclick=function(){return n(2)},t[3].onclick=function(){return n(3)},t[4].onclick=function(){return n(4)},w(document).scroll((function(){return o(w(".memes")[0])})),w(document).scroll((function(){return o(w(".team")[0])})),w(document).scroll((function(){return o(w(".achievements")[0])})),w(document).scroll((function(){return o(w(".conclusion")[0])}));var o=function(e){var t=window.pageYOffset+e.getBoundingClientRect().top,s=window.pageXOffset+e.getBoundingClientRect().left,o=window.pageXOffset+e.getBoundingClientRect().right,n=window.pageYOffset+e.getBoundingClientRect().bottom,a=window.pageYOffset,i=window.pageXOffset,c=window.pageXOffset+document.documentElement.clientWidth,r=window.pageYOffset+document.documentElement.clientHeight;M[e.classList[0]].style.boxShadow=n>a&&t<r&&o>i&&s<c?"2px 12px 26px 5px rgba(34, 60, 80, 0.7)":"none"};function n(t){var o=e[t],n=s[t];o.classList.contains("hidden")?(n.classList.toggle("onerow"),o.classList.toggle("notDisplayed"),setTimeout((function(){o.classList.toggle("hidden")}),30)):(n.classList.toggle("onerow"),o.classList.toggle("hidden"),setTimeout((function(){o.classList.toggle("notDisplayed")}),300))}setTimeout((function(){j.owlCarousel({items:1,autoWidth:!1,autoplay:!0,autoplayTimeout:3500,autoplaySpeed:1e3,autoplayHoverPause:!0,loop:!0,smartSpeed:500,dots:!1})}),10),_[0].onclick=G,_[1].onclick=G,_[2].onclick=G,O[0].onclick=B;var a=11;j.on("changed.owl.carousel",(function(e){a=e.item.index,L&&~E.indexOf(a)&&j.trigger(C,[0])}));for(var i=0;i<y.length;i++)w("#pic".concat(i+1)).attr("src",y[i].img);w("#leftarrow")[0].onmouseenter=function(){return j.trigger("stop.owl.autoplay")},w("#rightarrow")[0].onmouseenter=function(){return j.trigger("stop.owl.autoplay")},w("#leftarrow")[0].onmouseleave=function(){return j.trigger("play.owl.autoplay",[5e3,1e3])},w("#rightarrow")[0].onmouseleave=function(){return j.trigger("play.owl.autoplay",[5e3,1e3])},w("#leftarrow")[0].onclick=function(){C="prev.owl.carousel",j.trigger("prev.owl.carousel",[300])},w("#rightarrow")[0].onclick=function(){C="next.owl.carousel",j.trigger("next.owl.carousel")},w(".appendingimg-bottom__close")[0].onclick=S,w("#firstcol")[0].onclick=function(){"none"!=w("#asd")[0].style.display&&(w("#asd")[0].style.display="none",w("#doublebutton")[0].style.display="inline")},w(".memes-picsGallery")[0].onclick=function(e){var t,s,o=(t=e.target,s=w(".memes-picsGallery__img"),Object.values(s).indexOf(t));~o&&(w("#mainpic").attr("src",y[o].img),w(".appendingimg-bottom__text")[0].innerHTML=y[o].text,w(".appendingimg")[0].style.display="grid")},w(".memes-buttons__showall")[0].onclick=function(){w(".memes-picsGenerator")[0].style.display="none",N()},w(".memes-buttons__generate")[0].onclick=function(){var e,t,s;w(".memes-buttons__showall")[0].classList.add("memes-buttons__hideall"),N(),e=0,t=y.length,e=Math.ceil(e),t=Math.floor(t),(s=Math.floor(Math.random()*(t-e))+e)===T&&(s<y.length-1?s++:s>0&&s--),T=s,w(".memes-picsGenerator")[0].style.display="grid",w("#generated-mainpic").attr("src",y[s].img),w(".appendingimg-bottom__text1")[0].innerHTML=y[s].text},w("#shapka")[0].onclick=function(){console.log(123),w(".memes-buttons__showall")[0].classList.contains("memes-buttons__hideall")||N(),w("#mainpic").attr("src",y[1].img),w(".appendingimg-bottom__text")[0].innerHTML=y[1].text,w(".appendingimg")[0].style.display="grid"}}},137:(e,t,s)=>{e.exports=s.p+"assets/64669e9217c21c0e7223.jpg"},974:(e,t,s)=>{e.exports=s.p+"assets/47a86abcbc9540898b58.png"},204:(e,t,s)=>{e.exports=s.p+"assets/3620c49e8ee96c244468.jpg"},969:(e,t,s)=>{e.exports=s.p+"assets/7f112e29714190d0abfe.png"},764:(e,t,s)=>{e.exports=s.p+"assets/42dafe29136d4ccfe7aa.png"},407:(e,t,s)=>{e.exports=s.p+"assets/8b6ce019bd4ea75fbfb5.png"},113:(e,t,s)=>{e.exports=s.p+"assets/02525bcbc0c7b50a3f21.jpg"},748:(e,t,s)=>{e.exports=s.p+"assets/14c5d01b4b13272d0776.png"},935:(e,t,s)=>{e.exports=s.p+"assets/38cafc25253281ee89df.jpg"},857:(e,t,s)=>{e.exports=s.p+"assets/4855a4a49e95b660ec12.png"},374:(e,t,s)=>{e.exports=s.p+"assets/a2ea633988419766b180.png"},35:(e,t,s)=>{e.exports=s.p+"assets/4cc6cb234720c188a4dc.jpg"},518:(e,t,s)=>{e.exports=s.p+"assets/a07c5a4f522a9825e520.png"},40:(e,t,s)=>{e.exports=s.p+"assets/bbe470a3a5027d042382.jpg"},266:(e,t,s)=>{e.exports=s.p+"assets/e25ef4770e1ac12d6acd.png"},225:(e,t,s)=>{e.exports=s.p+"assets/a1ee1d90e278d93c0a6c.jpg"},312:(e,t,s)=>{e.exports=s.p+"assets/0d5c0612475d2eb74c9a.png"},574:(e,t,s)=>{e.exports=s.p+"assets/f69f4946959164706cbf.jpg"},475:(e,t,s)=>{e.exports=s.p+"assets/28f617151ecc9b1696e0.jpg"},830:(e,t,s)=>{e.exports=s.p+"assets/08b3e291972c8e54b170.jpg"},568:(e,t,s)=>{e.exports=s.p+"assets/8ad4480de5c187208323.jpg"},465:(e,t,s)=>{e.exports=s.p+"assets/a856bccd58976a60d885.png"},624:(e,t,s)=>{e.exports=s.p+"assets/af6834f2a11929de8dfc.jpg"},344:(e,t,s)=>{e.exports=s.p+"assets/2452048f04ca4a040d09.jpg"},593:(e,t,s)=>{e.exports=s.p+"assets/db8d8062f0d7a15b0164.jpg"},596:(e,t,s)=>{e.exports=s.p+"assets/59878085a5bfb2c9dd59.jpg"},666:(e,t,s)=>{e.exports=s.p+"assets/687da9223b2bb2c8010a.jpg"},948:(e,t,s)=>{e.exports=s.p+"assets/07072ef5e78e0fa336c9.jpg"},36:(e,t,s)=>{e.exports=s.p+"assets/f6397f1e8afa258b1312.jpg"},309:(e,t,s)=>{e.exports=s.p+"assets/37cd25f433569977580f.jpg"},961:(e,t,s)=>{e.exports=s.p+"assets/75564d796a3182ac7405.jpg"},824:(e,t,s)=>{e.exports=s.p+"assets/3ba0caa0a6279d3d740d.jpg"},705:(e,t,s)=>{e.exports=s.p+"assets/4ccf29c9f0fa46dc5903.jpg"},951:(e,t,s)=>{e.exports=s.p+"assets/4a3477baf3c0544fa34e.jpg"},89:(e,t,s)=>{e.exports=s.p+"assets/d5244bd056121605ba94.jpg"},877:(e,t,s)=>{e.exports=s.p+"assets/52e7fc2149c0952551d3.png"},605:(e,t,s)=>{e.exports=s.p+"assets/6f6e537c3d56995162c8.png"},298:(e,t,s)=>{e.exports=s.p+"assets/3545a4d894a2b016eaeb.jpg"},638:(e,t,s)=>{e.exports=s.p+"assets/d9d57b9c2df3d7cfa074.jpg"},145:(e,t,s)=>{e.exports=s.p+"assets/9ddeb677f62aef40483b.jpg"},528:(e,t,s)=>{e.exports=s.p+"assets/fbc8e95b83e08e7ea257.jpg"},771:(e,t,s)=>{e.exports=s.p+"assets/2b8abd93103ba8d0a789.jpg"},728:(e,t,s)=>{e.exports=s.p+"assets/f63b0a1f75cbd8259ecf.png"},274:(e,t,s)=>{e.exports=s.p+"assets/b3103bdf492e6c87877e.jpg"}},s={};function o(e){var n=s[e];if(void 0!==n)return n.exports;var a=s[e]={exports:{}};return t[e].call(a.exports,a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,s,n,a)=>{if(!s){var i=1/0;for(p=0;p<e.length;p++){for(var[s,n,a]=e[p],c=!0,r=0;r<s.length;r++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](s[r])))?s.splice(r--,1):(c=!1,a<i&&(i=a));if(c){e.splice(p--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[s,n,a]},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");s.length&&(e=s[s.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={787:0};o.O.j=t=>0===e[t];var t=(t,s)=>{var n,a,[i,c,r]=s,l=0;if(i.some((t=>0!==e[t]))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(r)var p=r(o)}for(t&&t(s);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(p)},s=self.webpackChunkchgk=self.webpackChunkchgk||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var n=o.O(void 0,[9],(()=>o(172)));n=o.O(n)})();
//# sourceMappingURL=scripts.ab9b1ec2c22e648bd9e2.js.map