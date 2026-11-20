import re, json, sys
t = open(sys.argv[1]).read()
sec = t[t.index('== Перелік атак =='):]
sec = sec[:sec.index('надводними') if 'надводними' in sec else len(sec)]
rows = []
for tbl in re.findall(r'\{\|.*?\n\|\}', sec, flags=re.S):
    rows += re.split(r'\n\|-[^\n]*', tbl)[1:]
refs = dict(re.findall(r'<ref name="?([^">/]+)"?\s*>\s*\{\{Cite web[^}]*?\|url=([^ |}]+)', t))
date = None; carry = [['',0],['',0],['',0]]; out = []
def clean(s):
    s = re.sub(r'<ref[^>]*/>', '', s); s = re.sub(r'<ref[^>]*>.*?</ref>', '', s, flags=re.S)
    s = re.sub(r'\[\[(?:[^\]|]*\|)?([^\]]*)\]\]', r'\1', s)
    return re.sub(r"'''?", '', s).strip()
for r in rows:
    cells = [c for c in re.split(r'\n\|', '\n' + r.strip('\n')) if c.strip() != ''] 
    cells = [c.strip() for c in cells]
    if cells and re.search(r'\d\d\.\d\d\.\d{4}', cells[0]):
        m = re.search(r'rowspan="?(\d+)', cells[0]); span = int(m.group(1)) if m else 1
        date = re.search(r'(\d\d)\.(\d\d)\.(\d{4})', cells[0]); date = f'{date.group(3)}-{date.group(2)}-{date.group(1)}'
        cells = cells[1:]
    vals = []
    for ci in range(3):
        if carry[ci][1] > 0:
            vals.append(carry[ci][0]); carry[ci][1] -= 1
        elif cells:
            c = cells.pop(0)
            m = re.match(r'\s*rowspan="?(\d+)"?\s*\|(.*)', c, flags=re.S)
            if m: c = m.group(2); carry[ci] = [c, int(m.group(1)) - 1]
            vals.append(c)
        else: vals.append('')
    if cells: vals[2] += ' ' + ' '.join(cells)
    region, obj, hit = vals
    if not obj: continue
    urls = re.findall(r'url=(https?://[^ |}]+)', hit)
    if not urls:
        n = re.search(r'<ref name="?([^">/]+)"?\s*/>', hit)
        if n and n.group(1) in refs: urls = [refs[n.group(1)]]
    o = clean(obj)
    if re.search(r'НПЗ|нафтоперероб|ТАНЕКО|ТАІФ|Танеко|NORSI|Кінеф|КІНЕФ|Ярославнафтооргсинтез|Уфанєфтєхім|Салават|переробк', o + ' ' + clean(hit)):
        out.append({'date': date, 'region': clean(region), 'obj': o, 'hit': clean(hit)[:260], 'src': urls[0] if urls else None})
json.dump(out, open(sys.argv[2], 'w'), ensure_ascii=False, indent=1)
print(len(out))
for x in out: print(x['date'], '|', x['region'][:40], '|', x['obj'][:60], '|', (x['src'] or '-')[:70])
