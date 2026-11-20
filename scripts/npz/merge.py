import csv, json, re, sys, datetime as dt
sys.path.insert(0, sys.argv[1])
from refineries import R
W = sys.argv[2]   # dir with downloaded files
OUT = sys.argv[3]

def find(text, key):
    for r in R:
        if r[key] and re.search(r[key], text):
            return r['id']
    return None

# Пропускаємо спроби без наслідків
FAIL = re.compile(r'невдала спроба|РЕБ|спроба атаки|без пошкоджень', re.I)
NONREF = re.compile(r'нафтобаз|нафтоперекачув|нафтопереробн(а|і) станц|Нижньокамськнафтохім|нафтохімічний завод|Тольятті', re.I)

strikes = []
wiki_url = {
    'w2225': 'https://uk.wikipedia.org/wiki/Перелік_атак_БпЛА_по_російських_цілях_(2022-2025)',
    'w2026': 'https://uk.wikipedia.org/wiki/Перелік_атак_БпЛА_по_російських_цілях_(2026)',
}
for fn, tag in [('strikes2225.json', 'w2225'), ('strikes2026.json', 'w2026')]:
    for x in json.load(open(f'{W}/{fn}')):
        obj, reg, hit = x['obj'], x['region'], x['hit']
        if FAIL.search(hit) or NONREF.search(obj): continue
        if re.search(r'Орел|Орловськ|Курськ|Єрохіно|Станова|Чортково|Урюпінськ', reg): continue
        rid = find(obj, 'wk') or find(reg + ' ' + obj, 'wk')
        if not rid:
            print('?? wiki', x['date'], reg, obj, file=sys.stderr); continue
        strikes.append(dict(date=x['date'], id=rid, note=hit, src=x['src'] or wiki_url[tag], via='wiki'))

# Трекер 2024–2025 (Google-таблиця Woody Fitzwell)
MON = {m: i + 1 for i, m in enumerate('Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split())}
SKIP = re.compile(r'restart|repaired|back online|resumed|Due to|thwarted|no reported damage|no damage|no apparent|claimed attack, but|NA\b|no confirmation what|pumping station|depot|fuel storage|oil export infrastructure|Moscow\'s Mayor confirmed debris|not officially confirmed|attributed the incident|technological problem|normal flare', re.I)
TRACKER = 'https://docs.google.com/spreadsheets/d/1NfYoI5Qv2XO0I9wDOoJTqe8Y6PRIgESAm3MLQKFUFWA'
coords = {}
for row in list(csv.reader(open(f'{W}/sheet.csv')))[5:]:
    if len(row) < 17 or not row[0].strip().isdigit(): continue
    name = row[2].replace('\n', ' ')
    rid = find(name, 'tr')
    if not rid: continue
    try: coords.setdefault(rid, (float(row[7]), float(row[8])))
    except ValueError: pass
    for line in row[16].split('\n'):
        m = re.match(r'\s*(\d{1,2})[\s-]*([A-Z][a-z]{2,3})[a-z]*-?(\d{2})?\s*:\s*(.*)', line)
        if not m: continue
        d, mon, yy, text = m.groups()
        if SKIP.search(text): continue
        y = 2000 + int(yy) if yy else 2024
        date = dt.date(y, MON[mon[:3]], int(d)).isoformat()
        strikes.append(dict(date=date, id=rid, note=text.strip(), src=TRACKER, via='tracker', lang='en'))

# Дедуплікація: той самий завод ±1 доба → один удар (перевага запису Вікіпедії)
D = lambda s: dt.date.fromisoformat(s['date'])
wiki = [s for s in strikes if s['via'] == 'wiki']
out = []
for s in sorted(wiki, key=lambda s: (s['id'], s['date'])):
    if out and out[-1]['id'] == s['id'] and out[-1]['date'] == s['date']: continue  # Уфа: кілька заводів групи за одну ніч
    out.append(s)
for s in strikes:
    if s['via'] == 'tracker' and not any(o['id'] == s['id'] and abs((D(o) - D(s)).days) <= 1 for o in out):
        out.append(s)
out.sort(key=lambda s: (s['date'], s['id']))

refs = []
for r in R:
    r = {k: v for k, v in r.items() if k not in ('wk', 'tr')}
    if r['id'] in coords: r['lat'], r['lon'] = round(coords[r['id']][0], 3), round(coords[r['id']][1], 3)
    refs.append(r)

import collections
c = collections.Counter(s['date'][:4] for s in out)
print('strikes by year', sorted(c.items()), 'total', len(out), file=sys.stderr)
print('by via', collections.Counter(s['via'] for s in out), file=sys.stderr)
json.dump(dict(refineries=refs, strikes=[{k: v for k, v in s.items() if k != 'via'} for s in out]), open(OUT, 'w'), ensure_ascii=False, indent=1)

# Ручна перевірка записів трекера: прибрати сумнівні, перекласти решту
DROP = {('salavat', '2025-05-09'), ('saratov', '2025-03-19'), ('novoshakhtinsk', '2025-08-02')}
UA = {
 ('voronezh', '2024-06-14'): 'пошкоджено резервуари з паливом',
 ('novoshakhtinsk', '2024-12-19'): 'ракетно-дронова атака, пожежа; роботу тимчасово зупинено',
 ('saratov', '2025-01-14'): 'знищено два резервуари',
 ('astrakhan', '2025-02-03'): 'велика пожежа; ремонт на кілька місяців',
 ('volgograd', '2025-02-15'): 'атака дронів, повідомлення про пожежу',
 ('ufa', '2025-03-03'): 'велика пожежа',
 ('ilsky', '2025-07-07'): 'ГУР уразило ключовий цех',
 ('slavyansk', '2025-08-13'): 'уламки дрона спричинили невелику пожежу',
 ('saratov', '2025-09-16'): 'вибухи й пожежа',
 ('volgograd', '2025-09-18'): 'удар ССО, роботу тимчасово зупинено',
 ('astrakhan', '2025-09-22'): 'пошкоджено виробничі ділянки, часткова зупинка',
 ('ufa', '2025-10-15'): 'дрони над заводом, пожежа',
 ('saratov', '2025-10-16'): 'Україна підтвердила удар',
 ('taneco', '2025-11-13'): 'масштабна пожежа на установці гідроочищення',
 ('saratov', '2025-11-28'): 'удар дронів, пожежі',
}
d = json.load(open(OUT))
d['strikes'] = [s for s in d['strikes'] if (s['id'], s['date']) not in DROP]
for s in d['strikes']:
    if s.pop('lang', None): s['note'] = UA[(s['id'], s['date'])]
json.dump(d, open(OUT, 'w'), ensure_ascii=False, indent=1)
print('final', len(d['strikes']), file=sys.stderr)
