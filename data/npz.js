// Дані сторінки «НПЗдець». Оновлюються скриптом scripts/update-npz.mjs і вручну.
window.NPZ_DATA = {
 "asOf": "2026-11-23",
 "_comment": "Удари по НПЗ рф. Щодня доповнюється скриптом scripts/update-npz.mjs з переліку атак БпЛА у Вікіпедії (додає лише нові удари, нічого не видаляє). Вручну можна додати/виправити рядок у strikes (date, id заводу, note, src). match — регулярний вираз, за яким назва об'єкта у Вікіпедії зіставляється із заводом (null — не шукати). Потужність заводів — проектна, млн т нафти на рік, округлено (Reuters, сайти компаній).",
 "russiaCapacityMt": 340,
 "russiaCapacityNote": "≈930 тис. т на добу первинної переробки (Reuters, листопад 2026) ≈ 340 млн т на рік",
 "context": {
  "date": "2026-11-18",
  "text": "За оцінкою двох галузевих джерел Reuters, з кінця жовтня 2026 удари дронів зменшили сумарну переробку нафти в рф на 45%. Роботу порушено або зупинено на 15 із 35 великих НПЗ.",
  "url": "https://www.internazionale.it/ultime-notizie-reuters/2026/11/18/exclusive-drone-attacks-nearly-halve-russia-s-november-oil-refining-sources-say",
  "title": "Reuters, 18.11.2026"
 },
 "sources": [
  {
   "title": "Вікіпедія: Перелік атак БпЛА по російських цілях (2022–2025)",
   "url": "https://uk.wikipedia.org/wiki/Перелік_атак_БпЛА_по_російських_цілях_(2022-2025)"
  },
  {
   "title": "Вікіпедія: Перелік атак БпЛА по російських цілях (2026)",
   "url": "https://uk.wikipedia.org/wiki/Перелік_атак_БпЛА_по_російських_цілях_(2026)"
  },
  {
   "title": "Russian Refinery Status Tracker (Google-таблиця, 2024–2025)",
   "url": "https://docs.google.com/spreadsheets/d/1NfYoI5Qv2XO0I9wDOoJTqe8Y6PRIgESAm3MLQKFUFWA"
  },
  {
   "title": "Reuters: що уражено в рф (factbox, жовтень 2026)",
   "url": "https://hydrocarbonprocessing.com/news/2026/10/update-ukraines-attacks-on-russian-energy-sites-what-has-been-hit/"
  },
  {
   "title": "Meduza: які НПЗ ще не уражено (червень 2026)",
   "url": "https://meduza.io/en/feature/2026/06/29/ukrainian-drones-have-struck-nearly-every-major-russian-refinery-which-facilities-have-yet-to-be-hit"
  }
 ],
 "refineries": [
  {
   "id": "omsk",
   "name": "Омський НПЗ",
   "owner": "Газпром нафта",
   "region": "Омська обл.",
   "lat": 55.077,
   "lon": 73.241,
   "cap": 22,
   "prod": "бензин, дизель, авіагас",
   "match": "Омськ|ОНПЗ"
  },
  {
   "id": "kirishi",
   "name": "Кіришський НПЗ (КІНЕФ)",
   "owner": "Сургутнафтогаз",
   "region": "Ленінградська обл.",
   "lat": 59.484,
   "lon": 32.071,
   "cap": 20,
   "prod": "дизель, мазут, бензин",
   "match": "Кіриш"
  },
  {
   "id": "ryazan",
   "name": "Рязанський НПЗ",
   "owner": "Роснафта",
   "region": "Рязанська обл.",
   "lat": 54.569,
   "lon": 39.745,
   "cap": 17,
   "prod": "бензин, дизель, авіагас, мазут",
   "match": "Рязан"
  },
  {
   "id": "norsi",
   "name": "Кстовський НПЗ (NORSI)",
   "owner": "Лукойл",
   "region": "Нижньогородська обл.",
   "lat": 56.122,
   "lon": 44.143,
   "cap": 17,
   "prod": "бензин, дизель, авіагас",
   "match": "Кстов|NORSI"
  },
  {
   "id": "ufa",
   "name": "Уфимська група НПЗ",
   "owner": "Башнафта (Роснафта)",
   "region": "Башкортостан",
   "lat": 54.861,
   "lon": 56.085,
   "cap": 24,
   "prod": "бензин, дизель, авіагас (три заводи: Уфанафтохім, Новойл, УНПЗ)",
   "match": "Уф"
  },
  {
   "id": "taneco",
   "name": "ТАНЕКО",
   "owner": "Татнафта",
   "region": "Татарстан",
   "lat": 55.59,
   "lon": 51.957,
   "cap": 16,
   "prod": "дизель, бензин, авіагас",
   "match": "ТАНЕКО|Танеко|Єлаз"
  },
  {
   "id": "volgograd",
   "name": "Волгоградський НПЗ",
   "owner": "Лукойл",
   "region": "Волгоградська обл.",
   "lat": 48.493,
   "lon": 44.61,
   "cap": 15,
   "prod": "дизель, бензин, мастила",
   "match": "Волгоград"
  },
  {
   "id": "yanos",
   "name": "Ярославський НПЗ (Славнафта-ЯНОС)",
   "owner": "Газпром нафта / Роснафта",
   "region": "Ярославська обл.",
   "lat": 57.558,
   "lon": 39.785,
   "cap": 15,
   "prod": "бензин, дизель, авіагас",
   "match": "ЯНОС|Ярослав"
  },
  {
   "id": "perm",
   "name": "Пермський НПЗ",
   "owner": "Лукойл",
   "region": "Пермський край",
   "lat": 57.911,
   "lon": 56.152,
   "cap": 13,
   "prod": "дизель, бензин, авіагас",
   "match": "Перм"
  },
  {
   "id": "moscow",
   "name": "Московський НПЗ",
   "owner": "Газпром нафта",
   "region": "Москва",
   "lat": 55.652,
   "lon": 37.806,
   "cap": 12,
   "prod": "бензин, дизель, авіагас (≈40% бензину для Москви)",
   "match": "Моск"
  },
  {
   "id": "tuapse",
   "name": "Туапсинський НПЗ",
   "owner": "Роснафта",
   "region": "Краснодарський край",
   "lat": 44.097,
   "lon": 39.092,
   "cap": 12,
   "prod": "на експорт: нафта, дизель, мазут",
   "match": "Туапс"
  },
  {
   "id": "salavat",
   "name": "Салаватський НПЗ",
   "owner": "Газпром",
   "region": "Башкортостан",
   "lat": 53.422,
   "lon": 55.891,
   "cap": 10,
   "prod": "бензин, дизель, нафтохімія",
   "match": "Салават"
  },
  {
   "id": "angarsk",
   "name": "Ангарський НПЗ",
   "owner": "Роснафта",
   "region": "Іркутська обл.",
   "lat": 52.53,
   "lon": 103.85,
   "cap": 10,
   "prod": "бензин, дизель, авіагас",
   "match": null
  },
  {
   "id": "afipsky",
   "name": "Афіпський НПЗ",
   "owner": "Афіпський НПЗ (ex-Сафмар)",
   "region": "Краснодарський край",
   "lat": 44.885,
   "lon": 38.829,
   "cap": 9,
   "prod": "дизель, мазут, бензин",
   "match": "Афіпськ"
  },
  {
   "id": "novokuib",
   "name": "Новокуйбишевський НПЗ",
   "owner": "Роснафта",
   "region": "Самарська обл.",
   "lat": 53.112,
   "lon": 49.908,
   "cap": 9,
   "prod": "бензин, дизель, авіагас",
   "match": "Новокуйбиш"
  },
  {
   "id": "syzran",
   "name": "Сизранський НПЗ",
   "owner": "Роснафта",
   "region": "Самарська обл.",
   "lat": 53.08,
   "lon": 48.396,
   "cap": 8.5,
   "prod": "бензин, дизель, бітум",
   "match": "Сизран"
  },
  {
   "id": "taif",
   "name": "ТАІФ-НК",
   "owner": "Татнафта / Сибур",
   "region": "Татарстан",
   "lat": 55.62,
   "lon": 51.85,
   "cap": 8,
   "prod": "бензин, дизель, нафтохімія",
   "match": "ТАІФ"
  },
  {
   "id": "komsomolsk",
   "name": "Комсомольський НПЗ",
   "owner": "Роснафта",
   "region": "Хабаровський край",
   "lat": 50.56,
   "lon": 137.04,
   "cap": 8,
   "prod": "дизель, бензин, мазут",
   "match": null
  },
  {
   "id": "antipinsky",
   "name": "Тюменський (Антипінський) НПЗ",
   "owner": "Нова нафтова інвестиційна",
   "region": "Тюменська обл.",
   "lat": 57.101,
   "lon": 65.749,
   "cap": 7.5,
   "prod": "дизель, бензин",
   "match": "Тюмен"
  },
  {
   "id": "achinsk",
   "name": "Ачинський НПЗ",
   "owner": "Роснафта",
   "region": "Красноярський край",
   "lat": 56.23,
   "lon": 90.38,
   "cap": 7.5,
   "prod": "бензин, дизель",
   "match": null
  },
  {
   "id": "kuibyshev",
   "name": "Куйбишевський НПЗ",
   "owner": "Роснафта",
   "region": "Самарська обл.",
   "lat": 53.112,
   "lon": 50.062,
   "cap": 7,
   "prod": "бензин, дизель",
   "match": "Куйбишевськ"
  },
  {
   "id": "saratov",
   "name": "Саратовський НПЗ",
   "owner": "Роснафта",
   "region": "Саратовська обл.",
   "lat": 51.451,
   "lon": 45.943,
   "cap": 7,
   "prod": "дизель, бензин, мазут",
   "match": "Саратов"
  },
  {
   "id": "ilsky",
   "name": "Ільський НПЗ",
   "owner": "КНГК-Груп",
   "region": "Краснодарський край",
   "lat": 44.86,
   "lon": 38.613,
   "cap": 6.6,
   "prod": "дизель, мазут, бензин",
   "match": "Ільськ"
  },
  {
   "id": "orsk",
   "name": "Орський НПЗ",
   "owner": "Фортеінвест",
   "region": "Оренбурзька обл.",
   "lat": 51.253,
   "lon": 58.524,
   "cap": 6.6,
   "prod": "бензин, дизель, авіагас",
   "match": "Орськ"
  },
  {
   "id": "novoshakhtinsk",
   "name": "Новошахтинський НПЗ",
   "owner": "НЗНП",
   "region": "Ростовська обл.",
   "lat": 47.835,
   "lon": 39.854,
   "cap": 5,
   "prod": "дизель, мазут, бензин",
   "match": "Новошахтинськ"
  },
  {
   "id": "khabarovsk",
   "name": "Хабаровський НПЗ",
   "owner": "ННК",
   "region": "Хабаровський край",
   "lat": 48.4,
   "lon": 135.12,
   "cap": 5,
   "prod": "дизель, бензин, мазут",
   "match": null
  },
  {
   "id": "ukhta",
   "name": "Ухтинський НПЗ",
   "owner": "Лукойл",
   "region": "Республіка Комі",
   "lat": 63.64,
   "lon": 53.819,
   "cap": 4,
   "prod": "дизель, мазут, бензин",
   "match": "Ухт"
  },
  {
   "id": "slavyansk",
   "name": "Слов’янськ ЕКО",
   "owner": "Слов’янськ ЕКО",
   "region": "Краснодарський край",
   "lat": 45.226,
   "lon": 38.135,
   "cap": 4,
   "prod": "дизель, мазут, бензин",
   "match": "Слов.янськ"
  },
  {
   "id": "krasnodar",
   "name": "Краснодарський НПЗ",
   "owner": "Краснодареконафта",
   "region": "Краснодарський край",
   "lat": 45.03,
   "lon": 39.05,
   "cap": 3,
   "prod": "мазут, дизель, бензин",
   "match": "Краснодарськ[ийому]+ НПЗ"
  },
  {
   "id": "astrakhan",
   "name": "Астраханський ГПЗ",
   "owner": "Газпром",
   "region": "Астраханська обл.",
   "lat": 46.775,
   "lon": 48.111,
   "cap": null,
   "prod": "газ, газовий конденсат, бензин, дизель, сірка",
   "note": "Газопереробний завод: переробляє газ і конденсат, тому в частку нафтопереробки не входить.",
   "match": "Астрахан"
  },
  {
   "id": "mari",
   "name": "Марійський НПЗ",
   "owner": "Нова нафтова інвестиційна",
   "region": "Марій Ел",
   "lat": 56.981,
   "lon": 47.73,
   "cap": 1.5,
   "prod": "дизель, мазут",
   "match": "Марійськ"
  },
  {
   "id": "pervyi",
   "name": "Перший завод",
   "owner": "Перший завод",
   "region": "Калузька обл.",
   "lat": 54.712,
   "lon": 35.964,
   "cap": 1.2,
   "prod": "дизель, мазут",
   "match": "Пєрвий|Первый|Калуґанєфтєпродукт|Калуганафто"
  },
  {
   "id": "dagestan",
   "name": "Дагнафтопродукт",
   "owner": "Дагнафтопродукт",
   "region": "Дагестан",
   "lat": 43.014,
   "lon": 47.462,
   "cap": null,
   "prod": "мазут, дизель",
   "match": "Даґнєфтєпродукт|Дагнафто"
  },
  {
   "id": "nsoil",
   "name": "НС-Ойл",
   "owner": "НС-Ойл",
   "region": "Ульяновська обл.",
   "lat": 53.14,
   "lon": 47.76,
   "cap": null,
   "prod": "дизель, мазут",
   "match": "НС-Ойл"
  },
  {
   "id": "albashneft",
   "name": "Албашнафта",
   "owner": "Албашнафта",
   "region": "Краснодарський край",
   "lat": 46.33,
   "lon": 38.37,
   "cap": null,
   "prod": "дизель, мазут",
   "match": "Албашн"
  },
  {
   "id": "voronezh",
   "name": "Нижньодевицький НПЗ",
   "owner": "Воронезький НПЗ",
   "region": "Воронезька обл.",
   "lat": 51.545,
   "lon": 38.351,
   "cap": null,
   "prod": "суднове паливо, дизель",
   "match": null
  }
 ],
 "strikes": [
  {
   "date": "2022-06-22",
   "id": "novoshakhtinsk",
   "note": "внаслідок атаки виникла пожежа на площі 50 м²",
   "src": "https://www.pravda.com.ua/news/2022/06/22/7353963/"
  },
  {
   "date": "2023-02-28",
   "id": "tuapse",
   "note": "БпЛА атакували нафтозавод «Роснєфть»",
   "src": "https://glavred.net/world/na-neftebaze-v-tuapse-moshchnyy-pozhar-posle-vzryvov-stalo-izvestno-ob-atake-bpla-10452647.html"
  },
  {
   "date": "2023-05-04",
   "id": "ilsky",
   "note": "пожежа на резервуарі",
   "src": "https://www.rbc.ua/ukr/news/krasnodarskomu-krayi-rf-zagorilas-naftobaza-1683161801.html"
  },
  {
   "date": "2023-05-04",
   "id": "novoshakhtinsk",
   "note": "незначна пожежа",
   "src": "https://www.interfax.ru/russia/900009"
  },
  {
   "date": "2023-05-05",
   "id": "ilsky",
   "note": "повторний удар БпЛА і пожежа інфраструктури Ільського нафтопереробного заводу",
   "src": "https://focus.ua/uk/voennye-novosti/564499-atakuvali-diversanti-z-bezpilotnikami-na-npz-u-krasnodarskomu-znovu-pozhezha-roszmi-video"
  },
  {
   "date": "2023-05-28",
   "id": "ilsky",
   "note": "пожежа на Ільському нафтопереробному заводі внаслідок заявленої атаки БпЛА",
   "src": "https://www.unian.ua/war/ilskiy-npz-zavod-shcho-postachaye-palivom-chornomorskiy-flot-rf-znovu-atakovaniy-12272607.html"
  },
  {
   "date": "2023-05-31",
   "id": "afipsky",
   "note": "пожежа на установці по перегонці мазуту",
   "src": "https://belsat.eu/ru/news/31-05-2023-krasnodarskij-kraj-rf-atakovali-bespilotniki-zagorelsya-neftepererabatyvayushhij-zavod"
  },
  {
   "date": "2023-05-31",
   "id": "ilsky",
   "note": "вибух на території, без займання",
   "src": "https://www.rbc.ua/ukr/news/roszmi-zayavlyayut-chergovu-ataku-droniv-1685514348.html"
  },
  {
   "date": "2023-08-30",
   "id": "pervyi",
   "note": "пожежа на трубопроводі",
   "src": "https://ehorussia.com/new/node/30637"
  },
  {
   "date": "2023-10-29",
   "id": "afipsky",
   "note": "атака БпЛА на Афіпський нафтопереробний завод",
   "src": "https://www.rbc.ua/rus/news/npz-krasnodarskomu-krayi-rf-stavsya-vibuh-1698550676.html"
  },
  {
   "date": "2024-01-25",
   "id": "tuapse",
   "note": "сильна пожежа на вакуумній установці",
   "src": "https://www.currenttime.tv/a/krupnyy-pozhar-na-neftebaze-v-tuapse-predpolozhitelno-posle-udara-bespilotnika/32790982.html"
  },
  {
   "date": "2024-02-03",
   "id": "volgograd",
   "note": "безпілотники уразили установку первинної переробки нафти",
   "src": "https://www.pravda.com.ua/news/2024/02/3/7440235/"
  },
  {
   "date": "2024-02-09",
   "id": "ilsky",
   "note": "вибух та пожежа",
   "src": "https://www.currenttime.tv/a/pozhar-ilskiy-npz/32811783.html"
  },
  {
   "date": "2024-03-12",
   "id": "norsi",
   "note": "пожежа, переробку нафти зупинено",
   "src": "https://lenta."
  },
  {
   "date": "2024-03-13",
   "id": "novoshakhtinsk",
   "note": "робота підприємства зупинена, але відновлена того ж дня",
   "src": "https://www.kommersant.ru/doc/6563530"
  },
  {
   "date": "2024-03-13",
   "id": "ryazan",
   "note": "внаслідок влучання безпілотників виникла пожежа, травмовані працівники",
   "src": "https://tass.ru/proisshestviya/20219829"
  },
  {
   "date": "2024-03-15",
   "id": "pervyi",
   "note": "уражено нафтопереробний завод у Калузькій області",
   "src": "https://www.pravda.com.ua/news/2024/03/15/7446588/"
  },
  {
   "date": "2024-03-16",
   "id": "kuibyshev",
   "note": "відбулася атака БпЛА на Куйбишевський нафтопереробний завод",
   "src": "https://glavcom.ua/country/incidents/stali-vidomi-podrobitsi-nichnoji-ataki-na-naftopererobni-zavodi-u-samarskij-oblasti--991029.html"
  },
  {
   "date": "2024-03-16",
   "id": "novokuib",
   "note": "атака НПЗ та пожежу",
   "src": "https://uk.wikipedia.org/wiki/Перелік_атак_БпЛА_по_російських_цілях_(2022-2025)"
  },
  {
   "date": "2024-03-16",
   "id": "syzran",
   "note": "пожежа на установці переробки тривала більше доби",
   "src": "https://tass.ru/proisshestviya/20255917"
  },
  {
   "date": "2024-03-17",
   "id": "slavyansk",
   "note": "пожежа внаслідок атаки БпЛА, евакуація персоналу",
   "src": "https://tass.ru/proisshestviya/20255383"
  },
  {
   "date": "2024-03-23",
   "id": "kuibyshev",
   "note": "пожежа на колоні початкової переробки нафти",
   "src": "https://tsn.ua/svit/v-rosiyi-atakuvali-dva-npz-na-odnomu-spalahnula-pozhezha-podrobici-foto-2541661.html"
  },
  {
   "date": "2024-04-02",
   "id": "taneco",
   "note": "влучання в установку первинної переробки нафти, пожежа",
   "src": "https://lb.ua/society/2024/04/02/606481_sbu_i_gur_atakuvali_iz_naybilshih.html"
  },
  {
   "date": "2024-04-27",
   "id": "ilsky",
   "note": "атака БпЛА на нафтопереробний завод",
   "src": "https://www.livekuban.ru/news/proisshestviya/drony-vsu-atakovali-ilskiy-npz-na-kubani"
  },
  {
   "date": "2024-04-27",
   "id": "slavyansk",
   "note": "пошкоджена ректифікаційна колона",
   "src": "https://www.dw.com/ru/bespilotniki-atakovali-krasnodarskij-kraj/a-68935394"
  },
  {
   "date": "2024-05-01",
   "id": "ryazan",
   "note": "повторна (з березня) атака нафтозаводу «Рязаньнєфтєпродукт», пожежа",
   "src": "https://mil.in.ua/uk/news/u-ryazani-ta-voronezkij-oblasti-drony-atakuvaly-npz/"
  },
  {
   "date": "2024-05-02",
   "id": "afipsky",
   "note": "чергова атаку БпЛА",
   "src": "https://nv.ua/ukr/world/countries/ataka-npz-u-krasnodarskomu-kraji-2-travnya-novini-rosiji-50414916.html"
  },
  {
   "date": "2024-05-09",
   "id": "salavat",
   "note": "атака безпілотниками нафтопереробного заводу",
   "src": "https://nv.ua/ukr/world/countries/npz-gazpromu-v-bashkiriji-atakuvav-dron-u-merezhi-z-yavilisya-video-novini-rosiji-50416817.html"
  },
  {
   "date": "2024-05-10",
   "id": "pervyi",
   "note": "повторно (з березня) уражено НПЗ «Первый завод» у Калузькій області",
   "src": "https://hromadske.ua/svit/223774-u-rosiyi-vnochi-horiv-naftopererobnyy-zavod-pid-kaluhoiu"
  },
  {
   "date": "2024-05-12",
   "id": "volgograd",
   "note": "атаковано Волгоградський нафтопереробний завод, виникла пожежа",
   "src": "https://www.slovoidilo.ua/2024/05/12/novyna/bezpeka/volhohradskij-oblasti-rf-spalaxnula-pozhezha-npz"
  },
  {
   "date": "2024-05-17",
   "id": "tuapse",
   "note": "уражено нафтопереробне підприємство компанії «Роснєфть»",
   "src": "https://mil.in.ua/uk/news/drony-urazyly-rosijskyj-npz-v-tuapse/"
  },
  {
   "date": "2024-05-19",
   "id": "slavyansk",
   "note": "пошкоджено щонайменше одну установку",
   "src": "https://ua.krymr.com/a/news-rosia-slovianskyi-npz-poshkodzhennia-ataka-droniv/32954923.html"
  },
  {
   "date": "2024-06-06",
   "id": "novoshakhtinsk",
   "note": "повторна (після 13 березня) атаку на Новошахтинський НПЗ, пожежу",
   "src": "https://lb.ua/society/2024/06/06/617269_rostovskiy_oblasti_rosii_palaie.html"
  },
  {
   "date": "2024-06-14",
   "id": "voronezh",
   "note": "пошкоджено резервуари з паливом",
   "src": "https://docs.google.com/spreadsheets/d/1NfYoI5Qv2XO0I9wDOoJTqe8Y6PRIgESAm3MLQKFUFWA"
  },
  {
   "date": "2024-06-20",
   "id": "afipsky",
   "note": "атака на Афіпський НПЗ, пожежа",
   "src": "https://tsn.ua/svit/u-rosiyi-pislya-ataki-bpla-palaye-afipskiy-npz-video-2604087.html"
  },
  {
   "date": "2024-06-21",
   "id": "ilsky",
   "note": "відомо про ймовірно атаку безпілотників на нафтопереробний завод",
   "src": "https://nv.ua/ukr/world/countries/eysk-ilskiy-npz-krasnodar-sevastopol-video-ataki-droniv-21-chervnya-2024-novini-rosiji-50428951.html"
  },
  {
   "date": "2024-07-22",
   "id": "tuapse",
   "note": "дрони атакували нафтопереробний завод, пожежа внаслідок влучань",
   "src": "https://www.pravda.com.ua/news/2024/07/22/7466798/"
  },
  {
   "date": "2024-07-27",
   "id": "ryazan",
   "note": "відомо про атаку на Рязанський нафтопереробний завод",
   "src": "https://24tv.ua/vibuhi-ryazani-27072024-merezhi-pokazali-moment-obstrilu-mista_n2605828"
  },
  {
   "date": "2024-07-28",
   "id": "norsi",
   "note": "дрон атакував нафтопереробний завод у Нижньогородській області",
   "src": "https://mil.in.ua/uk/news/dron-atakuvav-naftopererobnyj-zavod-u-nyzhnogorodskij-oblasti/"
  },
  {
   "date": "2024-09-01",
   "id": "moscow",
   "note": "атака безпілотниками Московського нафтопереробного заводу",
   "src": "https://www.pravda.com.ua/news/2024/09/1/7472902/"
  },
  {
   "date": "2024-11-08",
   "id": "saratov",
   "note": "атаковано Саратовський нафтопереробний завод, пожежа",
   "src": "https://mil.in.ua/uk/news/drony-atakuvaly-rosijskyj-npz-u-saratovi/"
  },
  {
   "date": "2024-11-25",
   "id": "pervyi",
   "note": "уражений НПЗ «Калуґанєфтєпродукт», масштабна пожежа",
   "src": "https://24tv.ua/ataka-droniv-kalugu-chim-zaymavsya-atakovaniy-zavod-tayfun_n2693411"
  },
  {
   "date": "2024-12-19",
   "id": "novoshakhtinsk",
   "note": "ракетно-дронова атака, пожежа; роботу тимчасово зупинено",
   "src": "https://docs.google.com/spreadsheets/d/1NfYoI5Qv2XO0I9wDOoJTqe8Y6PRIgESAm3MLQKFUFWA"
  },
  {
   "date": "2025-01-14",
   "id": "saratov",
   "note": "знищено два резервуари",
   "src": "https://docs.google.com/spreadsheets/d/1NfYoI5Qv2XO0I9wDOoJTqe8Y6PRIgESAm3MLQKFUFWA"
  },
  {
   "date": "2025-01-24",
   "id": "ryazan",
   "note": "відомо про атаку і пожежу на місцевому нафтопереробному заводі",
   "src": "https://focus.ua/voennye-novosti/690056-rf-atakovali-bpla-unichtozhen-npz-gorit-tec-novosti-segodnya"
  },
  {
   "date": "2025-01-26",
   "id": "ryazan",
   "note": "повторна атака Рязанського нафтопереробного заводу",
   "src": "https://mil.in.ua/uk/news/drony-atakuvaly-naftopererobnyj-zavod-u-ryazani/"
  },
  {
   "date": "2025-01-29",
   "id": "norsi",
   "note": "дрони атакували нафтопереробний завод, сталася масштабна пожежа",
   "src": "https://mil.in.ua/uk/news/drony-atakuvaly-naftopererobnyj-zavod-u-kstovi/"
  },
  {
   "date": "2025-01-31",
   "id": "volgograd",
   "note": "відомо про атаку нафтопереробного заводу, зафіксовано вибухи і пожежу",
   "src": "https://www.radiosvoboda.org/a/news-npz-volhohrad-henshtab/33298334.html"
  },
  {
   "date": "2025-02-03",
   "id": "astrakhan",
   "note": "велика пожежа; ремонт на кілька місяців",
   "src": "https://docs.google.com/spreadsheets/d/1NfYoI5Qv2XO0I9wDOoJTqe8Y6PRIgESAm3MLQKFUFWA"
  },
  {
   "date": "2025-02-03",
   "id": "volgograd",
   "note": "ударні безпілотники повторно уразили нафтопереробний завод «Лукойл»",
   "src": "https://mil.in.ua/uk/news/drony-urazyly-naftopererobnyj-zavod-lukojl-u-volgogradi/"
  },
  {
   "date": "2025-02-08",
   "id": "volgograd",
   "note": "безпілотники атакували нафтопереробні станції у двох регіонах РФ",
   "src": "https://lb.ua/society/2025/02/08/659575_bezpilotniki_atakuvali.html"
  },
  {
   "date": "2025-02-10",
   "id": "afipsky",
   "note": "безпілотниками був атакований Афіпський нафтопереробний завод",
   "src": "https://defence-ua.com/news/u_rf_ne_mozhut_prikriti_npz_scho_stojit_za_parkanom_zenitnoji_brigadi-17943.html"
  },
  {
   "date": "2025-02-11",
   "id": "saratov",
   "note": "ударні безпілотники уразили нафтопереробний завод у Саратові",
   "src": "https://mil.in.ua/uk/news/u-saratovi-spalahnula-pozhezha-na-npz-pislya-ataky-droniv/"
  },
  {
   "date": "2025-02-15",
   "id": "pervyi",
   "note": "відомо про чергову атаку на НПЗ «Пєрвий завод»",
   "src": "https://inshe.tv/economics/2025-02-17/904475/"
  },
  {
   "date": "2025-02-15",
   "id": "volgograd",
   "note": "атака дронів, повідомлення про пожежу",
   "src": "https://docs.google.com/spreadsheets/d/1NfYoI5Qv2XO0I9wDOoJTqe8Y6PRIgESAm3MLQKFUFWA"
  },
  {
   "date": "2025-02-17",
   "id": "ilsky",
   "note": "українські дрони атакували нафтопереробний завод",
   "src": "https://mil.in.ua/uk/news/drony-atakuvaly-naftopererobnyj-zavod-u-krasnodarskomu-krayi/"
  },
  {
   "date": "2025-02-19",
   "id": "syzran",
   "note": "безпілотники уразили нафтопереробний завод",
   "src": "https://mil.in.ua/uk/news/bezpilotnyky-urazyly-naftopererobnyj-zavod-u-syzrani/"
  },
  {
   "date": "2025-02-24",
   "id": "ryazan",
   "note": "відомо про атаку і пожежу на Рязанському нафтопереробному заводі",
   "src": "https://www.pravda.com.ua/news/2025/02/24/7499787/"
  },
  {
   "date": "2025-02-26",
   "id": "tuapse",
   "note": "відомо про атаку нафтопереробного заводу та інфраструктури порту",
   "src": "https://nv.ua/ukr/world/countries/ataka-naftovih-ob-yektiv-atakovaniy-dronami-port-u-tuapse-duzhe-vazhliviy-dlya-rosiyan-povidomili-v-cpd-50493159.html"
  },
  {
   "date": "2025-03-03",
   "id": "ufa",
   "note": "велика пожежа",
   "src": "https://docs.google.com/spreadsheets/d/1NfYoI5Qv2XO0I9wDOoJTqe8Y6PRIgESAm3MLQKFUFWA"
  },
  {
   "date": "2025-03-04",
   "id": "novoshakhtinsk",
   "note": "дрони атакували Новошахтинський нафтопереробний завод",
   "src": "https://mil.in.ua/uk/news/ataka-na-rostovsku-oblast-tryvaye-urazheno-npz/"
  },
  {
   "date": "2025-03-04",
   "id": "syzran",
   "note": "дрони атакували нафтопереробний завод, відомо про пожежу на НПЗ",
   "src": "https://nv.ua/world/countries/drony-atakovali-npz-v-syzrani-vzryvy-i-pozhar-50494808.html"
  },
  {
   "date": "2025-03-08",
   "id": "kirishi",
   "note": "ударні дрони атакували нафтопереробне підприємство",
   "src": "https://mil.in.ua/uk/news/drony-atakuvaly-naftopererobnyj-zavod-v-leningradskij-oblasti/"
  },
  {
   "date": "2025-03-09",
   "id": "ryazan",
   "note": "відомо про атаку і пожежу на Рязанському нафтопереробному заводі",
   "src": "https://mil.in.ua/uk/news/ataky-bpla-po-rf-v-nich-na-9-bereznya-urazyly-novolypetskyj-metkombinat-ta-ryazanskyj-npz/"
  },
  {
   "date": "2025-03-10",
   "id": "novokuib",
   "note": "ударні дрони атакували Новокуйбишевський нафтопереробний завод",
   "src": "https://mil.in.ua/uk/news/drony-atakuvaly-naftopererobnyj-zavod-u-samarskij-oblasti/"
  },
  {
   "date": "2025-03-14",
   "id": "tuapse",
   "note": "безпілотники атакували НПЗ, на одному з резервуарів спалахнула пожежа",
   "src": "https://nv.ua/ukr/world/countries/ataka-bezpilotnikiv-po-npz-u-tuapse-14-bereznya-povidomlyayetsya-pro-pozhezhu-na-odnomu-z-rezervuariv-50497762.html"
  },
  {
   "date": "2025-03-15",
   "id": "volgograd",
   "note": "відомо про атаку на НПЗ, є інформація про пожежу",
   "src": "https://t.me/mash/62356"
  },
  {
   "date": "2025-07-07",
   "id": "ilsky",
   "note": "ГУР уразило ключовий цех",
   "src": "https://docs.google.com/spreadsheets/d/1NfYoI5Qv2XO0I9wDOoJTqe8Y6PRIgESAm3MLQKFUFWA"
  },
  {
   "date": "2025-07-13",
   "id": "norsi",
   "note": "відомо про атаку на нафтопереробний завод",
   "src": "https://www.rbc.ua/rus/news/droni-vdarili-naftozavodu-kstovo-rosiyani-1752410290.html"
  },
  {
   "date": "2025-08-02",
   "id": "novokuib",
   "note": "відомо про атаку на нафтопереробний завод та масштабну пожежу",
   "src": "https://militarnyi.com/uk/news/drony-atakuvaly-naftopererobni-zavody-v-ryazani-ta-novokujbyshevsku/"
  },
  {
   "date": "2025-08-02",
   "id": "ryazan",
   "note": "відомо про атаку на нафтопереробний завод та масштабну пожежу",
   "src": "https://militarnyi.com/uk/news/drony-atakuvaly-naftopererobni-zavody-v-ryazani-ta-novokujbyshevsku/"
  },
  {
   "date": "2025-08-07",
   "id": "afipsky",
   "note": "дрони уразили Афіпський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/drony-urazyly-afipskyj-naftopererobnyj-zavod-v-rosiyi/"
  },
  {
   "date": "2025-08-10",
   "id": "saratov",
   "note": "дрони атакували нафтопереробний завод корпорації «Роснєфть»",
   "src": "https://militarnyi.com/uk/news/u-saratovi-palaye-naftopererobnyj-zavod-pislya-ataky-droniv/"
  },
  {
   "date": "2025-08-10",
   "id": "ukhta",
   "note": "атаковано нафтопереробний завод «ЛУКОЙЛ-Ухтанєфтєпєрєработка»",
   "src": "https://www.pravda.com.ua/news/2025/08/10/7525522/"
  },
  {
   "date": "2025-08-13",
   "id": "slavyansk",
   "note": "уламки дрона спричинили невелику пожежу",
   "src": "https://docs.google.com/spreadsheets/d/1NfYoI5Qv2XO0I9wDOoJTqe8Y6PRIgESAm3MLQKFUFWA"
  },
  {
   "date": "2025-08-13",
   "id": "volgograd",
   "note": "атака території нафтопереробного заводу",
   "src": "https://www.pravda.com.ua/news/2025/08/14/7526078/"
  },
  {
   "date": "2025-08-15",
   "id": "syzran",
   "note": "відомо про атаку безпілотників на «Сизранський нафтопереробний завод»",
   "src": "https://nv.ua/ukr/world/countries/ataka-bezpilotnikiv-na-sizran-15-serpnya-roszmi-povidomlyayut-pro-ataku-droniv-na-misceviy-npz-50537252.html"
  },
  {
   "date": "2025-08-19",
   "id": "volgograd",
   "note": "повторне ураження нафтопереробного заводу, в також лікарні",
   "src": "https://www.dw.com/ru/v-volgograde-zagorelsa-neftepererabatyvausij-zavod-posle-ataki-ukrainskih-dronov/a-73686876"
  },
  {
   "date": "2025-08-21",
   "id": "novoshakhtinsk",
   "note": "українські безпілотники уразили нафтопереробний завод АО «НЗНП»",
   "src": "https://militarnyi.com/uk/news/bezpilotnyky-urazyly-novoshahtynskyj-npz-u-rostovskij-oblasti/"
  },
  {
   "date": "2025-08-24",
   "id": "syzran",
   "note": "відомо про атаку безпілотників на Сизранський НПЗ",
   "src": "https://glavcom.ua/world/observe/u-sizrani-prolunali-desjatki-vibukhiv-atakovano-mistsevij-npz-1075026.html"
  },
  {
   "date": "2025-08-28",
   "id": "afipsky",
   "note": "дрони вдарили по Афіпському нафтопереробному заводу",
   "src": "https://militarnyi.com/uk/news/14-j-polk-sbs-spilno-z-gur-urazyly-afipskyj-npz-u-krasnodarskomu-krayi/"
  },
  {
   "date": "2025-08-28",
   "id": "kuibyshev",
   "note": "українські дрони вдарили по Куйбишевському нафтопереробному заводу",
   "src": "https://militarnyi.com/uk/news/u-rosijskij-samari-pislya-udaru-droniv-goryt-kujbyshevskyj-npz/"
  },
  {
   "date": "2025-08-30",
   "id": "krasnodar",
   "note": "відбулася атака ударних безпілотників на Краснодарський НПЗ",
   "src": "https://www.rbc.ru/rbcfreenews/68b24a879a7947a713682290"
  },
  {
   "date": "2025-08-30",
   "id": "syzran",
   "note": "відомо про третю за місяць атаку безпілотників на Сизранський НПЗ",
   "src": "https://militarnyi.com/uk/news/drony-vtretye-za-misyats-atakuvaly-syzranskyj-npz/"
  },
  {
   "date": "2025-09-05",
   "id": "ryazan",
   "note": "внаслідок влучання безпілотників виникла пожежа",
   "src": "https://militarnyi.com/uk/news/syly-oborony-atakuvaly-odyn-iz-najbilshyh-npz-rosiyi-v-ryazani/"
  },
  {
   "date": "2025-09-07",
   "id": "ilsky",
   "note": "БпЛА атакували Ільський нафтопереробний завод, виникла пожежа",
   "src": "https://focus.ua/uk/voennye-novosti/722927-rosiyska-nafta-pislya-ataki-droniv-palaye-ilskiy-npz-u-rosiji"
  },
  {
   "date": "2025-09-13",
   "id": "ufa",
   "note": "Україна завдала удар далекобійними дронами по двох НПЗ в місті Уфа",
   "src": "https://militarnyi.com/uk/news/drony-urazyly-naftopererobnyj-zavod-v-ufi/"
  },
  {
   "date": "2025-09-14",
   "id": "kirishi",
   "note": "безпілотники уразили нафтопереробний завод у Ленінградській області",
   "src": "https://www.pravda.com.ua/news/2025/09/14/7530773/"
  },
  {
   "date": "2025-09-16",
   "id": "saratov",
   "note": "вибухи й пожежа",
   "src": "https://docs.google.com/spreadsheets/d/1NfYoI5Qv2XO0I9wDOoJTqe8Y6PRIgESAm3MLQKFUFWA"
  },
  {
   "date": "2025-09-18",
   "id": "salavat",
   "note": "атаковано нафтопереробний комплекс «Газпром нєфтєхім Салават»",
   "src": "https://militarnyi.com/uk/news/1400-kilometriv-drony-urazyly-salavatskyj-npz-v-rosiyi/"
  },
  {
   "date": "2025-09-18",
   "id": "volgograd",
   "note": "удар ССО, роботу тимчасово зупинено",
   "src": "https://docs.google.com/spreadsheets/d/1NfYoI5Qv2XO0I9wDOoJTqe8Y6PRIgESAm3MLQKFUFWA"
  },
  {
   "date": "2025-09-20",
   "id": "novokuib",
   "note": "сили оборони України завдали ударів по Новокуйбишевському НПЗ",
   "src": "https://militarnyi.com/uk/news/ukrayinski-drony-urazyly-saratovskyj-i-novokujbyshevskyj-npz-na-terytoriyi-zavodiv-spalahnula-pozhezha/"
  },
  {
   "date": "2025-09-20",
   "id": "saratov",
   "note": "сили оборони України завдали ударів по Саратовському НПЗ",
   "src": "https://militarnyi.com/uk/news/ukrayinski-drony-urazyly-saratovskyj-i-novokujbyshevskyj-npz-na-terytoriyi-zavodiv-spalahnula-pozhezha/"
  },
  {
   "date": "2025-09-22",
   "id": "astrakhan",
   "note": "пошкоджено виробничі ділянки, часткова зупинка",
   "src": "https://docs.google.com/spreadsheets/d/1NfYoI5Qv2XO0I9wDOoJTqe8Y6PRIgESAm3MLQKFUFWA"
  },
  {
   "date": "2025-09-24",
   "id": "salavat",
   "note": "чергова атака на нафтопереробний комплекс «Газпром нєфтєхім Салават»",
   "src": "https://militarnyi.com/uk/news/drony-povtorno-atakuvaly-salavatskyj-naftopererobnyj-zavod-za-1400-km-vid-ukrayiny/"
  },
  {
   "date": "2025-09-26",
   "id": "afipsky",
   "note": "дрони чергов й раз уразили Афіпський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/udar-droniv-sprychynyv-pozhezhu-na-afipskomu-npz-u-rf/"
  },
  {
   "date": "2025-10-03",
   "id": "orsk",
   "note": "ударні дрони «Лютий» атакували нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/dron-lyutyj-perevyshhyv-zayavlenu-dalnist-ta-doletiv-do-npz-v-rosijskomu-orsku/"
  },
  {
   "date": "2025-10-04",
   "id": "kirishi",
   "note": "дрони повторно атакували завод «Кіришінєфтєорґсінтєз»",
   "src": "https://militarnyi.com/uk/news/ukrayinski-drony-vtretye-atakuvaly-npz-v-leningradskij-oblasti/"
  },
  {
   "date": "2025-10-05",
   "id": "norsi",
   "note": "дрони атакували Кстовський НПЗ",
   "src": "https://glavcom.ua/world/observe/droni-atakuvali-kstovskij-npz-u-nizhehorodskij-oblasti-1081801.html"
  },
  {
   "date": "2025-10-07",
   "id": "antipinsky",
   "note": "українські безпілотники пошкодили градирню на Тюменському НПЗ",
   "src": "https://militarnyi.com/uk/news/rekordna-dalnist-ukrayinski-bezpilotnyky-poshkodyly-gradyrnyu-na-tyumenskomu-npz/"
  },
  {
   "date": "2025-10-11",
   "id": "ufa",
   "note": "безпілотники ЦСО «А» СБУ вразили нафтопереробний завод",
   "src": "https://www.pravda.com.ua/news/2025/10/11/8002307/"
  },
  {
   "date": "2025-10-15",
   "id": "ufa",
   "note": "дрони над заводом, пожежа",
   "src": "https://docs.google.com/spreadsheets/d/1NfYoI5Qv2XO0I9wDOoJTqe8Y6PRIgESAm3MLQKFUFWA"
  },
  {
   "date": "2025-10-15",
   "id": "volgograd",
   "note": "дрони атакували нафтопереробний завод компанії «Лукойл»",
   "src": "https://militarnyi.com/uk/news/odyn-iz-najbilshyh-npz-rosiyi-u-volgogradi-atakuvaly-drony/"
  },
  {
   "date": "2025-10-16",
   "id": "norsi",
   "note": "дрони повторно атакували Кстовський НПЗ",
   "src": "https://militarnyi.com/uk/news/drony-atakuvaly-lukojl-nyzhegorodnefteorgsyntez-pozhezha-j-zupynka-ustanovky/"
  },
  {
   "date": "2025-10-16",
   "id": "saratov",
   "note": "Україна підтвердила удар",
   "src": "https://docs.google.com/spreadsheets/d/1NfYoI5Qv2XO0I9wDOoJTqe8Y6PRIgESAm3MLQKFUFWA"
  },
  {
   "date": "2025-10-19",
   "id": "novokuib",
   "note": "ударні дрони вп'яте атакували НПЗ у Новокуйбишевську",
   "src": "https://militarnyi.com/uk/news/drony-vp-yate-atakuvaly-npz-u-novokujbyshevsku/"
  },
  {
   "date": "2025-10-22",
   "id": "dagestan",
   "note": "дрони атакували нафтопереробний завод «Даґнєфтєпродукт»",
   "src": "https://militarnyi.com/uk/news/drony-nevidomoyi-modeli-atakuvaly-npz-u-dagestani/"
  },
  {
   "date": "2025-10-23",
   "id": "ryazan",
   "note": "внаслідок атаки на нафтопереробному заводі спалахнула пожежа",
   "src": "https://zaxid.net/na_ryazanskomu_naftopererobnomu_zavodi_spalahnula_pozhezha_pislya_ataki_bpla_n1621989"
  },
  {
   "date": "2025-10-29",
   "id": "mari",
   "note": "відомо про атаку та вибухи на Марійському нафтопереробному заводі",
   "src": "https://t.me/astrapress/95883"
  },
  {
   "date": "2025-10-29",
   "id": "nsoil",
   "note": "ударні дрони атакували російський нафтопереробний завод «НС-Ойл»",
   "src": "https://militarnyi.com/uk/news/drony-atakuvaly-npz-ns-ojl-v-ulyanovskij-oblasti-rf-zafiksovana-pozhezha/"
  },
  {
   "date": "2025-10-31",
   "id": "yanos",
   "note": "під удар потрапив нафтопереробний завод у Ярославлі",
   "src": "https://militarnyi.com/uk/news/vms-ukrayiny-vdaryly-neptunamy-po-energomerezhi-bryanshhyny/"
  },
  {
   "date": "2025-11-02",
   "id": "saratov",
   "note": "сили оборони України повторно завдали ударів по Саратовському НПЗ",
   "src": "https://militarnyi.com/uk/news/odyn-iz-najbilshyh-drony-povtorno-atakuvaly-saratovskyj-npz/"
  },
  {
   "date": "2025-11-02",
   "id": "tuapse",
   "note": "атаковано нафтоналивний термінал Туапсинського НПЗ та танкер",
   "src": "https://militarnyi.com/uk/news/syly-oborony-urazyly-naftonalyvnyj-terminal-ta-tanker-v-rosijskomu-tuapse/"
  },
  {
   "date": "2025-11-04",
   "id": "norsi",
   "note": "дрони уразили нафтопереробне підприємство у місті Кстово",
   "src": "https://militarnyi.com/uk/news/ukrayinski-drony-urazyly-naftohimichnyj-zavod-u-sterlitamaku-ta-npz-u-kstovo/"
  },
  {
   "date": "2025-11-06",
   "id": "volgograd",
   "note": "безпілотники атакували нафтопереробний завод «Лукойла»",
   "src": "https://militarnyi.com/uk/news/drony-atakuvaly-naftopererobnyj-zavod-lukojla-u-rosijskomu-volgogradi/"
  },
  {
   "date": "2025-11-08",
   "id": "saratov",
   "note": "сили оборони України повторно завдали ударів по Саратовському НПЗ",
   "src": "https://zaxid.net/u_rosiyi_droni_vnochi_atakuvali_pidstantsiyu_u_volgogradskiy_oblasti_ta_saratovskiy_npz_n1623220"
  },
  {
   "date": "2025-11-11",
   "id": "orsk",
   "note": "безпілотники уразили нафтопереробний завод «Орскнєфтєеорґсінтєз»",
   "src": "https://militarnyi.com/uk/news/bezpilotnyky-urazyly-npz-v-rosijskomu-orsku-za-1400-kilometriv-vid-kordonu-ukrayiny-video/"
  },
  {
   "date": "2025-11-11",
   "id": "saratov",
   "note": "сили оборони України повторно завдали ударів по Саратовському НПЗ",
   "src": "https://militarnyi.com/uk/news/drony-vluchyly-po-npz-rosnefty-v-saratovi-spalahnula-pozhezha-video/"
  },
  {
   "date": "2025-11-13",
   "id": "taneco",
   "note": "масштабна пожежа на установці гідроочищення",
   "src": "https://docs.google.com/spreadsheets/d/1NfYoI5Qv2XO0I9wDOoJTqe8Y6PRIgESAm3MLQKFUFWA"
  },
  {
   "date": "2025-11-14",
   "id": "saratov",
   "note": "українські дрони повторно атакували нафтопереробний завод у Саратові",
   "src": "https://militarnyi.com/uk/news/drony-atakuvaly-rosijskyj-npz-u-saratovi-2/"
  },
  {
   "date": "2025-11-15",
   "id": "ryazan",
   "note": "українські дрони повторно атакували Рязанський НПЗ",
   "src": "https://militarnyi.com/uk/news/ukrayinski-drony-povtorno-atakuvaly-ryazanskyj-npz/"
  },
  {
   "date": "2025-11-16",
   "id": "novokuib",
   "note": "атака безпілотників на Новокуйбишевський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/reaktyvni-drony-bars-ukrayina-urazyla-npz-ta-sklad-rubykon/"
  },
  {
   "date": "2025-11-20",
   "id": "ryazan",
   "note": "українські дрони знову атакували Рязанський НПЗ",
   "src": "https://militarnyi.com/uk/news/u-ryazani-drony-atakuvaly-odyn-iz-najbilshyh-npz-rosiyi/"
  },
  {
   "date": "2025-11-22",
   "id": "syzran",
   "note": "українські безпілотники «розбомбили» один із цехів Сизранського НПЗ",
   "src": "https://militarnyi.com/uk/news/ukrayinski-bezpilotnyky-rozbombyly-odyn-iz-tsehiv-syzranskogo-npz/"
  },
  {
   "date": "2025-11-27",
   "id": "novokuib",
   "note": "дрони вчергове атакували Новокуйбишевський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/drony-atakuvaly-novokujbyshevskyj-npz-u-samarskij-oblasti/"
  },
  {
   "date": "2025-11-28",
   "id": "saratov",
   "note": "удар дронів, пожежі",
   "src": "https://docs.google.com/spreadsheets/d/1NfYoI5Qv2XO0I9wDOoJTqe8Y6PRIgESAm3MLQKFUFWA"
  },
  {
   "date": "2025-11-29",
   "id": "afipsky",
   "note": "після атаки дронів спалахнула пожежа на Афіпському НПЗ",
   "src": "https://militarnyi.com/uk/news/u-krasnodarskomu-krayi-spalahnula-pozhezha-na-afipskomu-npz-pislya-ataky-droniv/"
  },
  {
   "date": "2025-11-30",
   "id": "slavyansk",
   "note": "відомо про атаку нафтопереробного заводу",
   "src": "https://www.dw.com/ru/ukraina-udarila-po-slavanskomu-npz-na-kubani-i-kotelnoj-v-rostovskoj-oblasti/a-74956807"
  },
  {
   "date": "2025-12-05",
   "id": "syzran",
   "note": "після атаки безпілотників спалахнув нафтопереробний завод",
   "src": "https://nv.ua/ukr/world/countries/vibuhi-u-sizrani-5-grudnya-roszmi-povidomlyayut-pro-ataku-bezpilotnikiv-na-npz-50566037.html"
  },
  {
   "date": "2025-12-06",
   "id": "ryazan",
   "note": "дрони 9-й раз за 2025 рік атакували Рязанський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/9-j-udar-za-2025-rik-u-ryazani-drony-atakuvaly-odyn-iz-najbilshyh-npz-rosiyi/"
  },
  {
   "date": "2025-12-12",
   "id": "yanos",
   "note": "безпілотники атакували нафтопереробний завод «Славнєфть-ЯНОС»",
   "src": "https://militarnyi.com/uk/news/udar-droniv-sprychynyv-pozhezhu-na-odnomu-z-najbilshyh-npz-rf-u-yaroslavli/"
  },
  {
   "date": "2025-12-13",
   "id": "saratov",
   "note": "сили оборони України повторно завдали ударів по Саратовському НПЗ",
   "src": "https://www.rbc.ua/rus/news/nevidomi-droni-atakuvali-saratovskiy-npz-1765591159.html"
  },
  {
   "date": "2025-12-14",
   "id": "afipsky",
   "note": "ударні дрони атакували Афіпський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/ukrayinski-drony-atakuvaly-himichnyj-zavod-u-voronezkij-oblasti-odyn-iz-tsehiv-zupynyv-robotu/"
  },
  {
   "date": "2025-12-14",
   "id": "yanos",
   "note": "безпілотники повторно атакували НПЗ «Славнєфть-ЯНОС»",
   "src": "https://militarnyi.com/uk/news/udarni-drony-vdruge-za-try-dni-atakuvaly-odyn-iz-najbilshyh-npz-u-rf/"
  },
  {
   "date": "2025-12-17",
   "id": "slavyansk",
   "note": "чергова атака на нафтопереробний завод у Слов'янську-на-Кубані",
   "src": "https://militarnyi.com/uk/news/bezpilotnyky-atakuvaly-rosijskyj-npz-u-slov-yansku-na-kubani/"
  },
  {
   "date": "2025-12-28",
   "id": "syzran",
   "note": "уражено єдину установку первинної переробки нафти в дизель",
   "src": "https://militarnyi.com/uk/news/sbs-urazyly-yedynu-ustanovku-pervynnoyi-pererobky-nafty-klyuchovogo-vyrobnyka-dyzelya-u-samarskij-oblasti/"
  },
  {
   "date": "2025-12-31",
   "id": "tuapse",
   "note": "атаковано морський нафтовий термінал «Туапсе» і Туапсинський НПЗ",
   "src": "https://www.pravda.com.ua/news/2025/12/31/8014183/"
  },
  {
   "date": "2026-01-01",
   "id": "ilsky",
   "note": "був атакований Ільський нафтопереробний завод, сталися влучання",
   "src": "https://militarnyi.com/uk/news/v-nich-na-1-sichnya-u-rosiyi-vid-udariv-droniv-zapalaly-pivnichnyj-tovarnyj-park-npz-ta-naftobaza/"
  },
  {
   "date": "2026-01-02",
   "id": "novokuib",
   "note": "відомо про атаку нафтопереробного заводу",
   "src": "https://militarnyi.com/uk/news/bezpilotnyky-atakuvaly-npz-u-samarskij-oblasti-rf/"
  },
  {
   "date": "2026-01-26",
   "id": "slavyansk",
   "note": "дрони атакували нафтопереробний завод у Слов'янську-на-Кубані",
   "src": "https://militarnyi.com/uk/news/ukrayinski-drony-atakuvaly-npz-u-slavyansku-na-kubani-v-krasnodarskomu-krayi/"
  },
  {
   "date": "2026-02-11",
   "id": "volgograd",
   "note": "безпілотниками був атакований нафтопереробний завод",
   "src": "https://glavcom.ua/country/society/u-rosijskomu-volhohradi-urazheno-npz-video-1102359.html"
  },
  {
   "date": "2026-02-12",
   "id": "ukhta",
   "note": "дрони влучили у нафтопереробний завод «Лукойл-Ухтанєфтєпєрєработка»",
   "src": "https://militarnyi.com/uk/news/proletily-1700-km-drony-vluchyly-u-npz-v-uhti/"
  },
  {
   "date": "2026-02-17",
   "id": "ilsky",
   "note": "атаковано Ільський нафтопереробний завод, виникла пожежа",
   "src": "https://militarnyi.com/uk/news/drony-vdaryly-po-ilskomu-npz-u-krasnodarskomu-krayi-rf/"
  },
  {
   "date": "2026-02-27",
   "id": "albashneft",
   "note": "внаслідок атаки дронів відбулася пожежа на нафтопереробному заводі",
   "src": "https://militarnyi.com/uk/news/u-krasnodarskomu-krayi-goryt-npz/"
  },
  {
   "date": "2026-03-14",
   "id": "afipsky",
   "note": "внаслідок атаки Афіпського НПЗ, сталося загоряння технічних установок",
   "src": "https://www.pravda.com.ua/news/2026/03/14/8025465/"
  },
  {
   "date": "2026-03-21",
   "id": "saratov",
   "note": "сили оборони України атакували Саратовський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/drony-vluchyly-po-npz-rosnefty-v-saratovi-spalahnula-pozhezha-video/"
  },
  {
   "date": "2026-03-23",
   "id": "ufa",
   "note": "дрони уразили нафтопереробний завод «Башнєфть-Уфанєфтєхім»",
   "src": "https://militarnyi.com/uk/news/syly-oborony-urazyly-npz-ufaneftehym-u-glybokomu-tylu-rf/"
  },
  {
   "date": "2026-03-26",
   "id": "kirishi",
   "note": "дрони атакували нафтопереробний завод «Кіришінєфтєорґсінтєз»",
   "src": "https://militarnyi.com/uk/news/ukrayinski-drony-atakuvaly-odyn-iz-najbilshyh-npz-rosiyi-kyryshynefteorgsyntez/"
  },
  {
   "date": "2026-03-28",
   "id": "yanos",
   "note": "атакований нафтопереробний завод «Славнєфть-Янос»",
   "src": "https://www.rbc.ua/rus/news/nichna-bavovna-tilu-rf-nevidomi-droni-vlashtuvali-1774671389.html"
  },
  {
   "date": "2026-04-02",
   "id": "ufa",
   "note": "дрони уразили нафтопереробний завод «Башнєфть-Новойл»",
   "src": "https://militarnyi.com/uk/news/drony-urazyly-naftopererobnyj-zavod-v-ufi-2/"
  },
  {
   "date": "2026-04-05",
   "id": "norsi",
   "note": "атакований нафтопереробний завод «Лукойл-Ніжеґороднєфтєорґсінтєз»",
   "src": "https://militarnyi.com/uk/news/drony-atakuvaly-npz-lukojl-u-nyzhnogorodskij-oblasti/"
  },
  {
   "date": "2026-04-16",
   "id": "tuapse",
   "note": "був атакований Туапсинський нафтопереробний завод, порт і танкер",
   "src": "https://militarnyi.com/uk/news/u-tuapse-vnaslidok-udaru-droniv-goryat-rezervuary-na-npz/"
  },
  {
   "date": "2026-04-18",
   "id": "novokuib",
   "note": "українські безпілотники успішно атакували Новокуйбишевський НПЗ",
   "src": "https://militarnyi.com/uk/news/palaye-novokujbyshevskyj-npz-pislya-ataky-droniv-u-samarskij-oblasti/"
  },
  {
   "date": "2026-04-18",
   "id": "syzran",
   "note": "українські безпілотники успішно атакували Сизранський НПЗ",
   "src": "https://www.pravda.com.ua/news/2026/04/18/8030686/"
  },
  {
   "date": "2026-04-20",
   "id": "tuapse",
   "note": "повторна атака Туапсинського НПЗ і нафтової інфраструктури порту",
   "src": "https://militarnyi.com/uk/news/na-npz-u-tuapse-masshtabna-pozhezha-unaslidok-ataky-ukrayinskyh-droniv/"
  },
  {
   "date": "2026-04-23",
   "id": "novokuib",
   "note": "українські безпілотники вчергове уразили Новокуйбишевський НПЗ",
   "src": "https://militarnyi.com/uk/news/drony-urazyly-naftoperekachuvalnu-stantsiyu-u-nyzhnogorodskij-oblasti-rf/"
  },
  {
   "date": "2026-04-26",
   "id": "yanos",
   "note": "дрони уразили російський нафтопереробний завод «Славнєфть-ЯНОС»",
   "src": "https://militarnyi.com/uk/news/drony-urazyly-odyn-iz-najbilshyh-npz-rf-u-yaroslavli/"
  },
  {
   "date": "2026-04-28",
   "id": "tuapse",
   "note": "третя за місяць атака Туапсинського НПЗ і нафтової інфраструктури порту",
   "src": "https://militarnyi.com/uk/news/drony-vdaryly-po-rosijskomu-npz-v-tuapse-goryat-rezervuary/"
  },
  {
   "date": "2026-04-29",
   "id": "orsk",
   "note": "безпілотники уразили нафтопереробний завод «Орскнєфтєорґсінтез»",
   "src": "https://militarnyi.com/uk/news/v-orsku-drony-atakuvaly-naftopererobnyj-zavod-orsknefteorgsyntez/"
  },
  {
   "date": "2026-04-30",
   "id": "perm",
   "note": "дрони атакували нафтопереробний завод «Лукойл-Пєрмнєфтєорґсінтез»",
   "src": "https://militarnyi.com/uk/news/drony-lyutyj-vdaryly-po-rosijskomu-npz-u-permi/"
  },
  {
   "date": "2026-05-01",
   "id": "tuapse",
   "note": "четверта за місяць атака Туапсинського НПЗ і нафтової інф-ри порту",
   "src": "https://militarnyi.com/uk/news/u-tuapse-drony-atakuvaly-naftovu-infrastrukturu-vchetverte-za-dva-tyzhni/"
  },
  {
   "date": "2026-05-05",
   "id": "kirishi",
   "note": "дрони повторно атакували завод «Кіришінєфтєорґсінтєз»",
   "src": "https://militarnyi.com/uk/news/u-leningradskij-oblasti-vnaslidok-udaru-droniv-goryt-odyn-iz-najbilshyh-npz-rosiyi/"
  },
  {
   "date": "2026-05-07",
   "id": "perm",
   "note": "повторно уражено нафтопереробний завод «Лукойл-Пєрмнєфтєорґсінтез»",
   "src": "https://militarnyi.com/uk/news/drony-lyutyj-atakuvaly-npz-u-permi-ta-naftoperekachuvalnu-stantsiyu-poblyzu-mista/"
  },
  {
   "date": "2026-05-08",
   "id": "perm",
   "note": "чергова атака нафтопереробного заводу «Лукойл-Пєрмнєфтєорґсінтез»",
   "src": "https://militarnyi.com/uk/news/ukrayina-vtretye-vdaryla-po-rosijskomu-npz-u-permi/"
  },
  {
   "date": "2026-05-08",
   "id": "yanos",
   "note": "дрони вчергове атакували нафтопереробний завод «Славнєфть-ЯНОС»",
   "src": "https://www.pravda.com.ua/news/2026/05/08/8033713/"
  },
  {
   "date": "2026-05-12",
   "id": "perm",
   "note": "знову атакований нафтопереробний завод «Лукойл-Пєрмнєфтєорґсінтез»",
   "src": "https://www.obozrevatel.com/ukr/novosti-rossii/u-rosijskij-permi-prolunav-vibuh-na-npz-i-spalahnula-potuzhna-pozhezha-scho-vidomo-foto.htm"
  },
  {
   "date": "2026-05-15",
   "id": "ryazan",
   "note": "безпілотники вкотре атакували Рязанський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/u-ryazani-goryt-naftopererobnyj-zavod-pislya-udaru-droniv/"
  },
  {
   "date": "2026-05-17",
   "id": "moscow",
   "note": "був атакований Московський нафтопереробний завод",
   "src": "https://www.dw.com/uk/moskva-pid-atakou-zagibli-udar-po-npz-ulamki-v-aeroportu/a-77185884"
  },
  {
   "date": "2026-05-18",
   "id": "norsi",
   "note": "українськими дронами був атакуваний нафтопереробний завод",
   "src": "https://zn.ua/ukr/war/henshtab-pidtverdiv-udari-po-npz-lukojla-v-kstovo-ta-nps-bilja-jaroslavlja.html"
  },
  {
   "date": "2026-05-20",
   "id": "norsi",
   "note": "ударні дрони вчергове атакували нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/drony-urazyly-npz-lukojl-u-misti-kstovo/"
  },
  {
   "date": "2026-05-21",
   "id": "syzran",
   "note": "українські безпілотники вчергове атакували Сизранський НПЗ",
   "src": "https://militarnyi.com/uk/news/u-rosijskij-syzrani-goryt-npz-pislya-udaru-droniv/"
  },
  {
   "date": "2026-05-29",
   "id": "volgograd",
   "note": "українські ударні дрони уразили нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/drony-urazyly-rosijskyj-npz-u-volgogradi-ta-port-temryuk/"
  },
  {
   "date": "2026-05-31",
   "id": "saratov",
   "note": "ударні дрони ЗСУ уразили Саратовський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/ukrayinski-drony-urazyly-saratovskyj-npz-tam-pochalasya-pozhezha/"
  },
  {
   "date": "2026-06-02",
   "id": "ilsky",
   "note": "після атаки дронів спалахнув Ільський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/u-rosiyi-goryt-ilskyj-npz-pislya-udaru-droniv/"
  },
  {
   "date": "2026-06-10",
   "id": "kuibyshev",
   "note": "українські дрони уразили Куйбишевський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/u-samari-goryt-kujbyshevskyj-npz-pislya-udaru-syl-oborony-ukrayiny/"
  },
  {
   "date": "2026-06-11",
   "id": "afipsky",
   "note": "відомо про атаку нафтопереробного заводу та пожежу внаслідок атаки",
   "src": "https://militarnyi.com/uk/news/drony-urazyly-afipskyj-npz-u-krasnodarskomu-krayi-rf/"
  },
  {
   "date": "2026-06-12",
   "id": "taif",
   "note": "сили оборони України уразили два нафтопереробні заводи Татарстані",
   "src": "https://www.pravda.com.ua/news/2026/06/12/8038970/"
  },
  {
   "date": "2026-06-12",
   "id": "taneco",
   "note": "сили оборони України уразили два нафтопереробні заводи Татарстані",
   "src": "https://www.pravda.com.ua/news/2026/06/12/8038970/"
  },
  {
   "date": "2026-06-16",
   "id": "moscow",
   "note": "дрони атакували Московський нафтопереробний завод у районі Капотня",
   "src": "https://militarnyi.com/uk/news/goryt-moskovskyj-npz-pislya-urazhennya-ukrayinskymy-dronamy/"
  },
  {
   "date": "2026-06-18",
   "id": "moscow",
   "note": "дрони уразили нафтопереробний завод, відомо про масштабну пожежу",
   "src": "https://militarnyi.com/uk/news/u-rosiyi-goryt-moskovskyj-npz-i-naftobaza-v-gukovo-pislya-udariv-ukrayinskyh-droniv/"
  },
  {
   "date": "2026-06-20",
   "id": "antipinsky",
   "note": "українські дрони атакували Тюменський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/dron-fp-1-znyshhyv-vazhlyvu-ustanovku-na-tyumenskomu-npz/"
  },
  {
   "date": "2026-06-24",
   "id": "norsi",
   "note": "атакований нафтопереробний завод у Нижньогородській області",
   "src": "https://militarnyi.com/uk/news/chetvertyj-za-potuzhnistyu-npz-rosiyi-zupynyv-robotu-pislya-udaru-droniv/"
  },
  {
   "date": "2026-06-25",
   "id": "ufa",
   "note": "відомо про ураження двох нафтопереробних заводів у ході атаки",
   "src": "https://militarnyi.com/uk/news/lyuti-zavdaly-udariv-po-npz-v-ufi/"
  },
  {
   "date": "2026-06-28",
   "id": "slavyansk",
   "note": "вчергове атакований нафтопереробний завод у Слов'янську-на-Кубані",
   "src": "https://militarnyi.com/uk/news/u-slov-yansku-na-kubani-palaye-odyn-iz-najbilshyh-npz-rosiyi-vnaslidok-ataky-droniv/"
  },
  {
   "date": "2026-06-28",
   "id": "yanos",
   "note": "відомо про атаку нафтопереробного заводу",
   "src": "https://www.pravda.com.ua/news/2026/06/28/8041473/"
  },
  {
   "date": "2026-07-02",
   "id": "norsi",
   "note": "атакований нафтопереробний завод «ЛУКОЙЛ-Ніжеґороднєфтєорґсінтез»",
   "src": "https://militarnyi.com/uk/news/drony-urazyly-chetvertyj-za-potuzhnistyu-npz-rosiyi-lukojl-nyzhegorodnefteorgsyntez/"
  },
  {
   "date": "2026-07-06",
   "id": "omsk",
   "note": "атаковано Омський нафтопереробний завод, сталися пожежі",
   "src": "https://militarnyi.com/uk/news/ukrayina-urazyla-najbilshyj-naftopererobnyj-zavod-rosiyi-v-misti-omsk/"
  },
  {
   "date": "2026-07-06",
   "id": "yanos",
   "note": "українські дрони атакували нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/yaroslavskyj-npz-palaye-pislya-uspishnoyi-ataky-ukrayinskyh-droniv/"
  },
  {
   "date": "2026-07-08",
   "id": "saratov",
   "note": "відомо про дронову атаку та вибухи на Саратовському НПЗ",
   "src": "https://militarnyi.com/uk/news/goryat-naftozavody-u-saratovi-ta-nyzhnokamsku-pislya-urazhennya-dronamy/"
  },
  {
   "date": "2026-07-08",
   "id": "ufa",
   "note": "українські дрони атакували Уфімський нафтопереробний комплекс",
   "src": "https://militarnyi.com/uk/news/lyuti-urazyly-naftovyj-ob-yekt-v-rosijskij-ufi-tryvaye-pozhezha/"
  },
  {
   "date": "2026-07-10",
   "id": "ilsky",
   "note": "українські дрони уразили Ільський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/u-rosiyi-zagorivsya-ilskyj-npz-pislya-udaru-droniv/"
  },
  {
   "date": "2026-07-10",
   "id": "moscow",
   "note": "відомо про пожежу на Московському НПЗ після атаки безпілотників",
   "src": "https://epravda.com.ua/svit/moskovskiy-npz-znovu-zagorivsya-pislya-ataki-droniv-823550/"
  },
  {
   "date": "2026-07-12",
   "id": "syzran",
   "note": "дрони уразили обидві нафтопереробні установки Сизранського НПЗ",
   "src": "https://militarnyi.com/uk/news/drony-urazyly-syzranskyj-naftopererobnyj-zavod-tam-pozhezha/"
  },
  {
   "date": "2026-07-14",
   "id": "afipsky",
   "note": "українські безпілотники уразили Афіпський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/drony-urazyly-afipskyj-naftozavod-u-krasnodarskomu-krayi/"
  },
  {
   "date": "2026-07-14",
   "id": "salavat",
   "note": "українські безпілотники уразили НПЗ «Газпром нєфтєхім Салават»",
   "src": "https://militarnyi.com/uk/news/goryt-salavatskyj-npz-pislya-urazhennya-ukrayinskymy-bpla/"
  },
  {
   "date": "2026-07-16",
   "id": "yanos",
   "note": "удар по резервуарному парку на території нафтопереробного заводу",
   "src": "https://militarnyi.com/uk/news/fp-1-vdaryv-po-rezervuarnomu-parku-rosijskogo-npz-u-yaroslavli/"
  },
  {
   "date": "2026-07-23",
   "id": "nsoil",
   "note": "українські безпілотники уразили нафтопереробний завод «НС-Ойл»",
   "src": "https://militarnyi.com/uk/news/drony-urazyly-naftoperekachuvalnu-stantsiyu-u-bashkortostani-ta-naftobazu-v-ulyanovskij-oblasti/"
  },
  {
   "date": "2026-07-25",
   "id": "antipinsky",
   "note": "безпілотники атакували Тюменський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/syly-oborony-urazyly-tyumenskyj-npz/"
  },
  {
   "date": "2026-07-29",
   "id": "perm",
   "note": "атакований нафтопереробний завод «Лукойл-Пєрмнєфтєорґсінтез»",
   "src": "https://militarnyi.com/uk/news/urazy-ustanovku-pererobky-nafty-na-npz/"
  },
  {
   "date": "2026-07-29",
   "id": "ryazan",
   "note": "безпілотники вкотре атакували Рязанський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/drony-urazyly-npz-i-sklad-wildberries/"
  },
  {
   "date": "2026-07-31",
   "id": "volgograd",
   "note": "українські безпілотники атаковали нафтопереробний завод",
   "src": "https://suspilne.media/1368078-ataka-droniv-na-volgograd-pozezi-vinikli-na-npz-i-skladi-wildberries/"
  },
  {
   "date": "2026-08-01",
   "id": "ufa",
   "note": "безпілотники уразили нафтопереробний завод «Башнєфть-Уфанєфтєхім»",
   "src": "https://militarnyi.com/uk/news/ukrayinski-drony-urazyly-npz-bashkortostani/"
  },
  {
   "date": "2026-08-02",
   "id": "saratov",
   "note": "українські дрони атакували Саратовський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/syly-oborony-urazyly-caratovskyj-npz-engels/"
  },
  {
   "date": "2026-08-02",
   "id": "ufa",
   "note": "безпілотники уразили нафтопереробний завод «Башнефть-УНПЗ»",
   "src": "https://militarnyi.com/uk/news/syly-oborony-urazyly-bashneft-unpz/"
  },
  {
   "date": "2026-08-04",
   "id": "syzran",
   "note": "безпілотники атакували Сизранський НПЗ",
   "src": "https://militarnyi.com/uk/news/bezpilotnyky-atakuvaly-npz-ta-logistychnyj-hab/"
  },
  {
   "date": "2026-08-05",
   "id": "ufa",
   "note": "українські безпілотники атакували нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/drony-urazyly-npz-bashneft-novojl/"
  },
  {
   "date": "2026-08-06",
   "id": "yanos",
   "note": "безпілотниками атакований нафтопереробний завод, відомо про пожежу",
   "src": "https://militarnyi.com/uk/news/drony-urazyly-odyn-iz-najbilshyh-npz-rosiyi/"
  },
  {
   "date": "2026-08-08",
   "id": "ilsky",
   "note": "українські дрони атакували Ільський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/drony-sprychynyly-pozhezhi-na-syzranskomu-ta-ilskomu-npz/"
  },
  {
   "date": "2026-08-08",
   "id": "syzran",
   "note": "відомо про чергову атаку Сизранського НПЗ, зафіксовано пожежу",
   "src": "https://militarnyi.com/uk/news/drony-sprychynyly-pozhezhi-na-syzranskomu-ta-ilskomu-npz/"
  },
  {
   "date": "2026-08-11",
   "id": "orsk",
   "note": "безпілотники уразили нафтопереробний завод «Орскнєфтєорґсінтез»",
   "src": "https://militarnyi.com/uk/news/drony-urazyly-naftopererobnyj-zavod-orsknefteorgsyntez/"
  },
  {
   "date": "2026-08-13",
   "id": "salavat",
   "note": "українські безпілотники вкотре уразили НПЗ «Газпром нєфтєхім Салават»",
   "src": "https://militarnyi.com/uk/news/drony-urazyly-salavatskyj-naftopererobnyj-zavod-v-rf/"
  },
  {
   "date": "2026-08-14",
   "id": "syzran",
   "note": "українські дрони атакували Сизранський НПЗ",
   "src": "https://militarnyi.com/uk/news/ukrayinski-drony-urazyly-klyuchovi-ustanovky-syzranskogo-npz/"
  },
  {
   "date": "2026-08-19",
   "id": "ufa",
   "note": "відомо про пожежу внаслідок атаки на один із НПЗ в Уфі",
   "src": "https://militarnyi.com/uk/news/na-npz-v-ufi-zagorilasya-ustanovka-pislya-udaru-ukrayinskyh-droniv/"
  },
  {
   "date": "2026-08-20",
   "id": "taneco",
   "note": "безпілотники атакували нафтопереробний завод у Нижньокамську",
   "src": "https://militarnyi.com/uk/news/drony-atakuvaly-npz-u-nyzhnokamsku/"
  },
  {
   "date": "2026-08-21",
   "id": "perm",
   "note": "відомо про атаку Пермського нафтопереробного заводу, сталися пожежі",
   "src": "https://militarnyi.com/uk/news/bezpilotnyky-atakuvaly-naftozavod-u-rosijskij-permi/"
  },
  {
   "date": "2026-08-22",
   "id": "novokuib",
   "note": "атаковано Новокуйбишевський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/persha-ataka-na-ozon/"
  },
  {
   "date": "2026-08-25",
   "id": "afipsky",
   "note": "українські дрони вдарили по Афіпському нафтопереробному заводу",
   "src": "https://militarnyi.com/uk/news/drony-vdaryly-po-afipskomu-naftozavodi-u-krasnodarskomu-krayi/"
  },
  {
   "date": "2026-08-25",
   "id": "novoshakhtinsk",
   "note": "Новошахтинський нафтопереробний завод зупинив роботу після атаки",
   "src": "https://militarnyi.com/uk/news/novoshahtynskyj-npz-zupynyv-robotu-pislya-nichnoyi-ataky-droniv/"
  },
  {
   "date": "2026-08-26",
   "id": "norsi",
   "note": "атакований нафтопереробний завод компанії Лукойл, відомо про пожежу",
   "src": "https://militarnyi.com/uk/news/u-rosiyi-goryt-hab-wildberries-u-kotovsku-ta-npz-v-kstovo-pislya-urazhennya-dronamy/"
  },
  {
   "date": "2026-08-28",
   "id": "yanos",
   "note": "Ярославський нафтопереробний завод був атакований безпілотниками",
   "src": "https://militarnyi.com/uk/news/bezpilotnyky-vdaryly-po-npz-u-yaroslavli-ta-atakuvaly-aviabazu-engels-2/"
  },
  {
   "date": "2026-08-30",
   "id": "kirishi",
   "note": "дрони атакували нафтопереробний завод «Кіришінєфтєорґсінтєз»",
   "src": "https://militarnyi.com/uk/news/drony-urazyly-npz-u-leningradskij-oblasti/"
  },
  {
   "date": "2026-09-06",
   "id": "ryazan",
   "note": "українські дрони атакували Рязанський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/drony-atakuvaly-ryazanskyj-npz/"
  },
  {
   "date": "2026-09-08",
   "id": "saratov",
   "note": "безпілотники атакували Саратовський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/ukrayinski-drony-atakuvaly-npz-i-sklad-ozon-u-saratovi/"
  },
  {
   "date": "2026-09-11",
   "id": "saratov",
   "note": "безпілотники атакували Саратовський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/ukrayinski-drony-atakuvaly-npz-i-sklad-ozon-u-saratovi/"
  },
  {
   "date": "2026-09-13",
   "id": "slavyansk",
   "note": "дрони уразили нафтопереробний завод у Краснодарському краю",
   "src": "https://militarnyi.com/uk/news/goryt-npz-u-slov-yansku-na-kubani/"
  },
  {
   "date": "2026-09-13",
   "id": "taneco",
   "note": "сили оборони України уразили нафтопереробний завод у Нижньокамську",
   "src": "https://militarnyi.com/uk/news/drony-atakuvaly-nyzhnokamskyj-npz/"
  },
  {
   "date": "2026-09-15",
   "id": "syzran",
   "note": "дрони українських військових атакували Сизранський НПЗ",
   "src": "https://militarnyi.com/uk/news/drony-atakuvaly-syzranskyj-npz/"
  },
  {
   "date": "2026-09-17",
   "id": "yanos",
   "note": "вчергове був атакований нафтопереробний завод «Славнєфть-Янос»",
   "src": "https://militarnyi.com/uk/news/na-yaroslavskomu-npz-pozhezha-pislya-urazhennya-dronamy/"
  },
  {
   "date": "2026-09-20",
   "id": "moscow",
   "note": "ракетами та дронами атакований Московський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/drony-ta-rakety-atakuvaly-npz-moskvy/"
  },
  {
   "date": "2026-09-22",
   "id": "kuibyshev",
   "note": "українські дрони атакували Куйбишевський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/u-samari-drony-urazyly-kujbyshevskyj-npz/"
  },
  {
   "date": "2026-09-25",
   "id": "novoshakhtinsk",
   "note": "Новошахтинський нафтопереробний завод вкотре зупинився після атаки",
   "src": "https://militarnyi.com/uk/news/zupynyvsya-novoshahtynskyj-naftopererobnyj/"
  },
  {
   "date": "2026-09-25",
   "id": "perm",
   "note": "дрони уразили Пермський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/ukrayinski-drony-atakuvaly-odyn-iz-najbilshyh-npz-rosiyi-u-permi/"
  },
  {
   "date": "2026-09-26",
   "id": "ilsky",
   "note": "українські дрони уразили Ільський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/udar-droniv-sprychynyv-pozhezhu-na-ilskomu-npz-u-krasnodarskomu-krayi/"
  },
  {
   "date": "2026-10-02",
   "id": "volgograd",
   "note": "українські безпілотники атакували нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/ukrayinski-drony-atakuvaly-volgograd-u-rajoni-npz-spalahnula-pozhezha/"
  },
  {
   "date": "2026-10-08",
   "id": "omsk",
   "note": "атаковано Омський нафтопереробний завод, відомо про пожежі",
   "src": "https://nv.ua/ukr/ukraine/events/udari-po-rosiji-ukrajinski-droni-atakuvali-naybilshiy-rosiyskiy-npz-v-omsku-50648302.html"
  },
  {
   "date": "2026-10-08",
   "id": "salavat",
   "note": "українські безпілотники уразили НПЗ «Газпром нєфтєхім Салават»",
   "src": "https://militarnyi.com/uk/news/drony-urazyly-salavatskyj-npz/"
  },
  {
   "date": "2026-10-09",
   "id": "ukhta",
   "note": "дрони уразили нафтопереробний завод «Лукойл-Ухтанєфтєпєрєработка»",
   "src": "https://militarnyi.com/uk/news/rosijskij-uhti-pislya-ataky-dron-goryt-npz/"
  },
  {
   "date": "2026-10-15",
   "id": "ryazan",
   "note": "ударні безпілотники атакували Рязанський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/ukrayina-atakuvaly-ryazanskyj-npz/"
  },
  {
   "date": "2026-10-30",
   "id": "novokuib",
   "note": "українські дрони атакували Новокуйбишевський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/vnaslidok-ataky-ukrayinskyh-droniv-goryt-novokujbyshevskyj-npz-u-rf/"
  },
  {
   "date": "2026-10-31",
   "id": "ufa",
   "note": "українські безпілотники атакували нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/drony-urazyly-npz-bashneft-novojl/"
  },
  {
   "date": "2026-11-01",
   "id": "norsi",
   "note": "атакований нафтопереробний завод «Лукойл-Ніжеґороднєфтєорґсінтєз»",
   "src": "https://militarnyi.com/uk/news/urazyly-npz-lukojl-u-kstovo/"
  },
  {
   "date": "2026-11-03",
   "id": "yanos",
   "note": "атакований нафтопереробний завод «Славнєфть-Янос»",
   "src": "https://militarnyi.com/uk/news/pozhezha-na-yaroslavskomu-npz-pislya-ataky/"
  },
  {
   "date": "2026-11-05",
   "id": "ryazan",
   "note": "сили оборони України атакували Рязанський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/ryazanskyj-npz-ta-logistychnyj-sklad/"
  },
  {
   "date": "2026-11-06",
   "id": "afipsky",
   "note": "удар українських дронів спричинив пожежу на Афіпському НПЗ",
   "src": "https://militarnyi.com/uk/news/udar-ukrayinskyh-droniv-sprychynyv-pozhezhu-na-afipskomu-npz-u-rosiyi/"
  },
  {
   "date": "2026-11-07",
   "id": "saratov",
   "note": "сили оборони України атакували Саратовський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/udary-raketamy-ta-bpla-syly-oborony-urazyly-zavod-proton-v-orli-ta-saratovskyj-npz/"
  },
  {
   "date": "2026-11-09",
   "id": "kirishi",
   "note": "дрони атакували нафтопереробний завод «Кіришінєфтєорґсінтєз»",
   "src": "https://militarnyi.com/uk/news/kiryshskyj-npz-palaye-pislya-ataky/"
  },
  {
   "date": "2026-11-11",
   "id": "omsk",
   "note": "атаковано Омський нафтопереробний завод, відомо про пожежі",
   "src": "https://militarnyi.com/uk/news/npz-rosiyi-atakuyut-uzhe-somu-godynu/"
  },
  {
   "date": "2026-11-13",
   "id": "volgograd",
   "note": "відомо про успішну атаку нафтопереробного заводу",
   "src": "https://militarnyi.com/uk/news/drony-atakuvaly-npz-u-rosijskomu-volgogradi/"
  },
  {
   "date": "2026-11-16",
   "id": "ilsky",
   "note": "вкотре був атакований Ільський нафтопереробний завод",
   "src": "https://militarnyi.com/uk/news/syly-oborony-atakuvaly-ilskyj-npz/"
  },
  {
   "date": "2026-11-17",
   "id": "salavat",
   "note": "українські безпілотники уразили НПЗ «Газпром нєфтєхім Салават»",
   "src": "https://militarnyi.com/uk/news/syly-oborony-urazyly-gazprom-neftehym-salavat-odyn-iz-najbilshyh-naftohimichnyh-kompleksiv-rf/"
  },
  {
   "date": "2026-11-18",
   "id": "afipsky",
   "note": "відомо про пожежу внаслідок атаки Афіпського НПЗ",
   "src": "https://militarnyi.com/uk/news/ilskyj-ta-afipskyj-ukrayinski-drony-urazyly-odrazu-dva-npz-na-kubani/"
  },
  {
   "date": "2026-11-18",
   "id": "ilsky",
   "note": "був атакований Ільський нафтопереробний завод, спалахнула пожежа",
   "src": "https://militarnyi.com/uk/news/ilskyj-ta-afipskyj-ukrayinski-drony-urazyly-odrazu-dva-npz-na-kubani/"
  }
 ]
};
