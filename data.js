var data = [
        {
                scenario_name: "The Untamed Wilds",
                agenda: [
                {
                        cat: "1a",
                        name: "Expedition into the Wild",
                        en: "Your expedition has ventured far into the rainforests of southern Mexico in search of a forgotten Aztec city-state. What will you find when you head deeper into the untamed jungle?",
                        ko: "당신의 원정대는 잊혀진 아즈텍 도시 국가를 찾아 멕시코 남부의 열대 우림으로 긴 여행을 했다. 문명의 자취가 없는 밀림의 깊은 곳에서 무엇을 찾아낼 수 있을까?"
                },
                {
                        cat: "1b",
                        name: "The Serpents Attack!",
                        en: "After hours of exploration and futile attempts to map out the wilds, you're convinced something is watching your progress, stalking your every move. The shapes of large serpentine creatures slither in the brush all around you. You try to back away, but the creatures have you completely surrounded, hissing at you from all sides. Suddenly, several shapes emerge from the brush: human-sized creatures with the bodies of serpents and arms wielding spears and jagged knives. The creatures are savage, attacking you fiercely. Somehow, you manage to flee to safety, though the sensation that you are being watched remains. Although you survive the encounter, you are confronted with a stark reality: this place is home to creatures beyond your understanding.",
                        ko: "몇 시간 동안이나 헤매이며 야생 지역의 지도를 그리려는 헛된 시도 후에, 당신은 무언가가 당신의 모든 발걸음을 쫓으며, 당신의 여정을 지켜보고 있다는 것을 확신했다. 커다란 뱀 같은 생물체의 형상이 당신을 둘러싼 덤불 속에서 미끄러지며 움직이고 있다. 당신은 도망치려 했지만, 그 생물들이 이미 당신을 포위하였는지 주변에선 온통 쉿쉿대는 소리가 들려오고 있다. 그때 덤불 속에서 그 생물 몇이 모습을 드러내었다. 그것은 창과 날카로운 단도로 무장하고 있는 뱀의 몸을 가진, 사람 크기의 생물이다. 그 야만스러운 생물들은 당신에게 맹렬한 공격을 시작했다. 당신은 어떻게든 안전하게 도망치는 것에 성공했지만, 여전히 그들의 추적을 벗어나지 못 했다는 것을 알 수 있다. 당장은 위험에서 벗어났지만, 당신은 끔찍한 사실을 깨달았다. 바로 이 장소는 당신이 상상도 못했던 그 생물들의 서식처라는 것을."
                },
                {
                        cat: "2a",
                        name: "Intruders",
                        en: "What was once excitement has turned to dread. This place is far deadlier than you could have imagined. It is as though the jungle itself wants you out.",
                        ko: "모험의 흥분은 이제 공포가 되었다. 이 곳은 당신이 상상했던 그 무엇보다 위험한 곳이다. 마치 이 밀림 자체가 당신을 쫓아내려 하는 것 같다."
                },
                {
                        cat: "2b",
                        name: "Endless Meandering",
                        en: "You find yourself in an endless loop, traversing the same path through the jungle over and over again. No matter which direction you walk, the result is the same. It has been hours, perhaps even days. Meanwhile, you can hear the serpent creatures hissing in the trees, mocking you from afar. Out of food and exhausted from lack of sleep, you collapse against a half-rotted tree. Your vision becomes hazy.",
                        ko: "당신은 모두 다 같아 보이는 밀림의 길을 걷고 또 걸으며 끝없이 헤매이고 있는 자신을 발견했다. 당신이 어느 쪽으로 방향을 정하더라도 결과는 같았다. 이것은 몇 시간 동안 계속되었다, 아니. 며칠일지도. 이 시간 동안 당신은 나무 위에서 쉿쉿대는 뱀 같은 생물들이 멀리서부터 당신을 조롱하는 소리를 들을 수 있었다. 수면 부족으로 인한 피로와 굶주림으로 당신은 반쯤 썩어가는 나무에 부딪혀 쓰러졌다. 당신의 시야가 흐릿해졌다."
                }
                ],
                act: [
                {
                        cat: "1a",
                        name: "Exploring the Rainforest",
                        en: "Today, you depart from your camp in order to find the ruins Alejandro seeks. That is, if they even exist…",
                        ko: "오늘, 당신은 알레한드로가 이야기한 유적을 찾기 위해 야영지에서 출발한다. 그것이 진짜 존재한다면 말이지..."
                },
                {
                        cat: "1b",
                        name: "The Natives",
                        en: "As you explore the dense jungle, you are suddenly confronted by several natives. At first glance, they appear to be warriors of an Aztec city-state: perhaps even the one you seek. But how could they have survived undiscovered for this long? Even with Alejandro's notes, you are barely able to translate what the warriors say, only that they call you \"intruder\" and implore you to leave the jungle at once. You try to explain that you are searching for the \"Eztli,\" which causes them to murmur and debate among themselves. Finally, one of them speaks to you in rudimentary Spanish. 'Ichtaca will know what to do with you, intruder.\" He blows on a decorated clay ocarina, producing a shrill note that echoes throughout the jungle. The warriors depart as suddenly as they arrived.",
                        ko: "울창한 밀림을 탐험하던 중 당신은 몇몇 원주민과 마주쳤다. 언뜻 보기에 그들은 아즈텍 도시 국가의 전사로 보인다. 어쩌면 당신이 찾고 있는 그 도시에서 온 사람들일 수도 있다. 궁금한것은 그들이 어떻게 이토록 오래 동안 발견되지 않은 채 살고 있었던 것일까 하는 점이다. 알레한드로의 노트를 참고하여 겨우 그들이 말하는 것의 일부를 알아들을 수 있었다. 그것은 그들이 당신을 \"침입자\"라 부르며 당장 이 밀림에서 나가라고 하는 내용이었다. 당신은 그들에게 당신이 \"에즈틀리\"를 찾고 있다는 것을 설명하려 했고, 이 말을 들은 그들은 서로 이야기를 주고 받기 시작했다. 마침내 그들 중 한 명이 미숙한 스페인어로 이야기 했다. \"이차카가 너희를 어떻게 해야할지 알 것이다. 침입자.\" 그가 화려한 도자기 오카리나를 불자, 날카로운 소리가 온 밀림에 메아리친다. 전사들은 그들이 나타났을 때와 마찬가지로 순식간에 사라졌다."
                },
                {
                        cat: "2a",
                        name: "Huntress of the Eztli",
                        en: "\"I don't trust them,\" Alejandro says as soon as the natives are out of earshot. \"They mean to kill us, not aid us. If you think this 'Ichtaca' is going to help us find the ruins, be my guest. But I refuse to follow where she leads.\" You can feel the discomfort and confusion in Alejandro's voice. You can attempt to speak with Ichtaca, or you can take Alejandro's advice and fight your way to the ruins you seek.",
                        ko: "\"나는 그들을 못 믿겠어.\" 원주민 전사들이 사라지자 마자 안레한드로가 이야기 했다. \"그들은 우리를 죽일 작정이야. 네가 그들이 말한 '이차카' 가 우리에게 도움을 줄거라 생각한다면 네 맘대로 해. 하지만 나라면 거절하겠어.\" 당신은 알레한드로의 목소리에서 불편함과 혼란을 느낄 수 있다. 당신은 이차카와 대화를 시도하거나, 알레한드로의 말에 따라 원주민들과 싸움을 각오하고 폐허로 가는 길을 찾아볼 수 있다."
                },
                {
                        cat: "2b",
                        name: "Ichtaca's Response",
                        en: "\"Interesting. You are not simply here to shed blood,\" Ichtaca says with a spark of wonder in her voice, and you are stunned to hear her speaking in perfect English.\n\n\"Fools!\" Ichtaca shouts to you with a pained voice. \"You do not understand the forces you are meddling with. If you truly wish to die, you will find the temple over the river to the south.\"",
                        ko: "\"너희들은 단순히 사냥을 위해 여기에 온 것이 아니군. 흥미로워.\" 이차카는 놀랍다는 말투로 이야기 했다. 당신은 그녀가 완벽한 영어를 구사하는 것에 몹시 놀랐다. \"어리석은 놈들!\" 이차카는 가시 돋친 목소리로 소리친다. \"너희들은 너희가 손 데려고 하는 그 힘에 대해 아무것도 몰라. 그렇게 죽음을 재촉하고 싶다면 남쪽의 강 너머에서 사원을 찾아낼 수 있을 것이다.\""
                },
                {
                        cat: "3a(SftR)",
                        name: "Search for the Ruins",
                        en: "\"If I cannot dissuade you, so be it. Follow me, and I will lead you to the place you seek. But heed my warning: Disturb the ruins at your own risk. They have remained hidden for a reason.\" Alejandro warily keeps a safe distance from Ichtaca as she shows you the way.",
                        ko: "\"내가 너희를 단념시킬 수 없다면, 어쩔 수 없군. 나를 따라 와. 너희가 찾고 있는 곳으로 안내해주지. 하지만 폐허를 어지럽힐 생각이라면 그 만한 각오를 해야 할 거다. 그것들이 숨겨진채로 남아있는 것은 그 만한 이유가 있어서이다. 난 분명히 경고했어.\" 그녀가 길을 안내하는 동안 알레한드로는 그녀로 부터 조심스럽게 거리를 유지하고 있었다."
                },
                {
                        cat: "3b(SftR)",
                        name: "Discovery of a Lifetime",
                        en: "What you have found is beyond your wildest expectations. Despite their supposed age, the ruins appear preserved in time. Several aspects of the architecture are strangely futuristic. You set out to investigate at once.",
                        ko: "당신이 발견 한 것은 당신이 기대했던 그 무엇보다 대단했다. 그것은 무척 오래되었을 것이라 생각되지만, 마치 시간이 멈춘듯 잘 보존되어 있었다. 구조물의 몇몇 특징은 이상하리만치 미래적이다. 당신은 즉시 조사에 착수했다."
                },
                {
                        cat: "3a(TGR)",
                        name: "The Guarded Ruins",
                        en: "Ichtaca swiftly retreats, and Alejandro places a hand on your shoulder. \"Thank you for taking my advice,\" he says, relieved. \"Now that she's gone, I'll take point from now on. I know the river she speaks of. Come, follow me!\"",
                        ko: "이차카가 순식간에 도망쳐버리자, 알레한드로는 당신의 어깨에 손을 올린다. \"내 충고를 들어줘서 고마워.\" 그는 안심한 듯 보인다. \"방해꾼이 사라졌으니 이제 할 일을 해야지. 난 그녀가 말했던 강이 어디 있는지 알고 있어. 따라와!\""
                },
                {
                        cat: "3b(TGR)",
                        name: "Discovery of a Lifetime",
                        en: "What you have found is beyond your wildest expectations. Despite their supposed age, the ruins appear preserved in time. Several aspects of the architecture are strangely futuristic. You set out to investigate at once.",
                        ko: "당신이 발견 한 것은 당신이 기대했던 그 무엇보다 대단했다. 그것은 무척 오래되었을 것이라 생각되지만, 마치 시간이 멈춘듯 잘 보존되어 있었다. 구조물의 몇몇 특징은 이상하리만치 미래적이다. 당신은 즉시 조사에 착수했다."
                },
                ],
                location: [
                        {
                                name: "? Expedition Camp",
                                en: "The camp is abuzz with both excitement and dread. Some members of the expedition are setting up additional canvas tents for supplies, while others are huddled around an incomplete map of the northern edge of the rainforest.",
                                ko: "그 캠프는 흥분과 두려움으로 가득 차 있다. 이 탐험의 일부 사람들은 공급을 위해 캔버스 텐트를 추가로 설치하고 있고, 다른 사람들은 열대 우림의 북쪽 끝자락에 대한 불완전한 지도 주변에 웅크리고 있다."
                        },
                        {
                                name: "Expedition Camp",
                                en: "The expedition has staked its claim on the jungle, and the jungle doesn't seem too happy about it.",
                                ko: "그 탐험은 정글에 그 주장을 굽히지 않았고, 정글은 그것에 대해 그다지 행복해 보이지 않는다."
                        },
                        {
                                name: "Ruins of Eztli",
                                en: "Serpent statues carved from limestone surround the central temple, glaring at you ominously from afar.",
                                ko: "석회암으로 조각된 뱀상들이 중앙 사원을 둘러싸고 멀리서부터 불길하게 당신을 노려보고 있다."
                        },
                ]
        }
];

/*
{
                        cat: "",
                        name: "",
                        en: "",
                        ko: ""
                },
*/