!function(){var t={176:function(){const t=document.querySelector(".end .button__end"),e=document.querySelector(".end .present"),s=document.querySelector(".end .present .close__button"),n=document.querySelector(".end .present .copy"),i=document.querySelector(".end .present .name");t.addEventListener("click",(()=>{document.querySelector("body").style.overflow="hidden",e.classList.remove("hidden")})),s.addEventListener("click",(()=>{document.querySelector("body").style.overflow="auto",e.classList.add("hidden")})),n.addEventListener("click",(()=>navigator.clipboard.writeText(i.textContent)))},973:function(){const t=document.querySelector(".button__container.button__container__mob"),e=()=>{if(window.screen.width>1300)return;const e=t.querySelector(".button");t.getBoundingClientRect().bottom>window.screen.height-20?e.classList.add("button__main__fixed"):e.classList.remove("button__main__fixed")};e(),window.addEventListener("scroll",e)}},e={};function s(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,s),o.exports}!function(){"use strict";s(973);const t=[{text:"Когда вы в последний раз хорошенько отдохнули и восстановились? Какое событие вспомнили?",answers:[{text:"Это точно были последние выходные. А ещё мне удалось выспаться сегодня ночью",points:3},{text:"Вспомнился отпуск в прошлом году. Смотрите, вот я держу солнышко на ладошке!",points:2},{text:"В голове заиграло «звук-сверчка-неловкая-ситуация». Кажется, последний отдых у меня был в прошлой жизни",points:1}]},{text:"В конце рабочего дня начальник просит вас подготовить забавные тексты для валентинок компаниям-партнёрам. Дедлайн — следующее утро. Как поступите?",answers:[{text:"Займусь прямо сейчас. Дорогие коллеги, за нашу дружбу в интернете!",points:1},{text:"Откажусь — это не моя зона ответственности. Вообще-то я работаю аналитиком, а шутить предпочитаю в Твиттере.",points:3},{text:"Сначала спрошу, можно ли подвинуть дедлайн. Работать ночью я соглашусь только в самом крайнем случае",points:2}]},{text:"В субботу вы планировали обложиться роллами и посмотреть новые эпизоды любимого сериала. В пятницу пишет друг и предлагает уехать на выходные за город — фотографировать бобров. Как поступите?",answers:[{text:"За городом я не смогу отдохнуть и расслабиться. Да и бобров не очень люблю, так что откажусь",points:3},{text:"Подстроюсь под друга — сериалы никуда не денутся. Бобрам тоже надо дать шанс, может, сейчас они мне понравятся!",points:1},{text:"Завлеку друга к себе домой роллами, предложу посмотреть сериал вместе. Если откажется — едем к бобрам, но я возьму ноутбук с сериалом.",points:2}]},{text:"Вы научились мыть кота в ванной и решили поделиться своим опытом в Инстаграме. Кто-то пишет, что вы всё сделали неправильно. Говорит, хвост у кота не отвалился только чудом. Как отреагируете?",answers:[{text:"Посмеюсь и проигнорирую — я делаю всё по рекомендациям ветеринаров",points:3},{text:"Раз в интернете всегда кто-то неправ, этим человеком не могу быть я. Пойду доказывать свою точку зрения",points:2},{text:"Расстроюсь и начну сомневаться в себе. Ещё проверю хвост у кота — вдруг и правда отвалился?",points:1}]},{text:"Вы пришли в кино на модный боевик, которым в один голос восхищаются и кинокритики, и ваши друзья — редкое совпадение. Но вам совсем не нравится. К тому же вы очень хотите пить. Как поступите?",answers:[{text:"Неловко беспокоить людей, которые сидят в моём ряду. Воспользуюсь советом «Представь, что уже попил/попила» и сосредоточусь на фильме.",points:1},{text:"Сразу же пойду за водой, но пить буду нервно — что, если пропущу важную сцену, из-за которой все фильмом и восхищаются?",points:2},{text:"Раз мне скучно и хочется чего-то другого, уйду с фильма. И воды попью, и домой пораньше вернусь — одни плюсы!",points:3}]},{text:"Вы записались в поликлинику на прививку, но в день вакцинации перепутали время. На вас ворчит женщина из регистратуры и осуждающе смотрит вся очередь. Что почувствуете?",answers:[{text:"Ну, бывает. Спокойно посижу в очереди, может, ещё получится договориться с доктором и привиться сегодня",points:3},{text:"Захочу провалиться сквозь землю, но испугаюсь, что меня даже под землёй продолжат осуждать — туда ведь я тоже без записи.",points:1},{text:"Перед всеми извинюсь и постараюсь перенести запись на другой день. Очередь подождёт, это дело пяти минут.",points:2}]},{text:"После сложного дня вам хочется расслабиться и посмотреть лекцию про историю русского рэпа. Ваш партнёр вызвался приготовить ужин, но каждые пять минут отвлекает вопросами, как делать ризотто. Как будете реагировать?",answers:[{text:"Мягко объясню партнёру, что не хочу сейчас принимать никаких решений — даже если нужно выбрать специи к рису",points:3},{text:"Пойду готовить ужин вместе с ним, а потом вернусь к разбору текстов Моргенштерна",points:2},{text:"Буду ставить на паузу каждый раз, когда нужно ответить. «Да, рис в зелёной банке! Нет, карри не подойдёт! Да, я тоже тебя люблю!!!»",points:1}]},{text:"Вы возвращаетесь из отпуска, ваш рейс задержали на два часа. С учётом разницы во времени вы попадёте домой поздно и не сможете выспаться перед первым рабочим днём. В вас закипает злость, что сделаете с этим чувством?",answers:[{text:"Я имею право злиться. Запишу парочку гневных голосовых про ситуацию близкому другу и почувствую себя лучше",points:3},{text:"Попытаюсь замять это чувство и сфокусироваться на том, какой красивый закат был в последний день отдыха.",points:1},{text:"Всякое бывает, но всё равно бесит. До посадки меня будет раздражать любая мелочь.",points:2}]}],e={20:{text:"Кажется, вы часто думаете сначала о потребностях других людей, а потом уже — о своих. Лосось Леонид вас понимает — он тоже не сразу научился ставить себя на первое место. И он уверен, что у вас получится обозначить границы и искренне полюбить себя."},40:{text:"Не сомневаемся, что вы заслуживаете большего. Лосось Леонид уже направил волну чистой любви к себе в вашу сторону. Ещё он передаёт, что пара его друзей-осьминогов искренне вами восхищаются."},60:{text:"Неплохой результат, но лосось Леонид знает, что вы можете относиться к себе бережнее. Мы уверены, что со временем у вас получится полюбить себя чистой рыбьей любовью на все 100%."},80:{text:"Вы — рыба мечты лосося Леонида. У вас получается выбирать себя почти во всех ситуациях. Но даже если вам сложно кому-то сказать нет, помните: Леонид всегда на вашей стороне."},100:{text:"Лосось Леонид вами гордится, рассказывает о вас своим подругам-медузам и уже заказал ваш портрет в своё подводное царство. Ему даже есть чему у вас поучиться!"}},n=document.querySelector(".main-container"),i=document.querySelector(".end-block"),o=document.querySelector(".test-container"),r=document.querySelector("body"),c=o.querySelector(".test__number"),a=o.querySelector(".test__question"),d=o.querySelector(".test__answers"),u={questions:[],stage:"",points:0,test:0,setStageMain:function(){this.setBody("main"),this.stage="main",this.setHidden(o),this.setVisible(n)},setStageEnd:function(){this.calcPoints(),this.setBody("ends"),this.stage="end",this.setHidden(n),this.setHidden(o),this.setVisible(i)},setStageTest:function(){this.setBody("tests"),this.stage="test",this.setQuestions(),this.setTest(0),this.setPoints(0),this.setHidden(n),this.setVisible(o)},calcPoints:function(){switch(this.points=this.questions.reduce(((t,e)=>t+e.answers[e.answer].points),0),this.points){case 8:case 9:case 10:default:this.setPresent(20);break;case 11:case 12:case 13:this.setPresent(40);break;case 14:case 15:case 16:case 17:this.setPresent(60);break;case 18:case 19:case 20:case 21:this.setPresent(80);break;case 22:case 23:case 24:this.setPresent(100)}},setPresent:function(t){i.querySelector(".heart img").src=`img/heart${t}.svg`,i.querySelector(".heart source").srcset=`img/heart${t}.svg`;const s=e[t];i.querySelector(".present-container .header").innerHTML=`Вы лосось, влюблённый в себя на ${t}%`,i.querySelector(".present-container .description").innerHTML=s.text},setBody:function(t){r.classList.add(t),r.classList.remove(...((...t)=>["main","tests","end"].filter((e=>!t.includes(e))))(t))},setQuestions:function(){this.questions=t},setPoints:function(t){this.points=t},setTest:function(t){this.test=t,c.innerHTML=`Вопрос ${t+1} из ${this.questions.length}`,a.innerHTML=this.questions[t].text;let e="";this.questions[t].answers.forEach(((t,s)=>{e+=`\n        <div class="answer" id="answer${s}">\n          <div class="check"></div>\n          <div class="text">${t.text}</div>\n        </div>\n      `})),d.innerHTML=e,d.querySelectorAll(".answer").forEach(((t,e)=>t.addEventListener("click",(()=>this.selectAnswer(e)))))},setVisible:function(t){t.classList.remove("hidden")},setHidden:function(t){t.classList.add("hidden")},checkQuestion:function(){void 0!==this.questions[this.test].answer&&(this.test!==this.questions.length-1?this.setTest(++this.test):this.setStageEnd())},selectAnswer:function(t){this.questions[this.test].answer=t,d.querySelectorAll(".answer.selected").forEach((t=>t.classList.remove("selected"))),d.querySelector("#answer"+t).classList.add("selected")}},l=Object.create(u);l.setStageMain(),n.querySelectorAll(".button__main").forEach((t=>t.addEventListener("click",(()=>l.setStageTest())))),o.querySelector(".button__container").addEventListener("click",(()=>l.checkQuestion())),document.addEventListener("keypress",(t=>{13===t.keyCode&&("test"===l.stage?l.checkQuestion():"main"===l.stage&&l.setStageTest())})),s(176)}()}();