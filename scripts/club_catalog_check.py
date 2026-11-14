from pathlib import Path
import re,json,subprocess
from html.parser import HTMLParser
class Tags(HTMLParser):
 def __init__(self,text): super().__init__();self.ids=[];self.sources=[];self.feed(text)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.append(a['id'])
  if 'data-src' in a:self.sources.append(a['data-src'])
hub=Path('caulacbo.html').read_text(); session=Path('clb-tham-tu-14112026.html').read_text()
for text in [hub,session]:
 ids=Tags(text).ids;assert len(ids)==len(set(ids)), 'duplicate ids'
old=subprocess.check_output(['git','show','9819894117013f67c0baf6bd053e34b17f383d1e:caulacbo.html']).decode()
oldlinks={s for s in Tags(old).sources if 'clb-tham-tu' not in s}
assert oldlinks <= set(Tags(hub).sources),'legacy tools removed'
assert len(oldlinks)==27
for f in ['caulacbo.html','clb-tham-tu-14112026.html']:
 for i,s in enumerate(re.findall(r'<script(?:\s[^>]*)?>(.*?)</script>',Path(f).read_text(),re.S)):
  if s.strip():
   t=Path('/tmp/club-inline.js');t.write_text(s);subprocess.run(['node','--check',str(t)],check=True)
for f in Path('assets/clb').glob('*.js'):subprocess.run(['node','--check',str(f)],check=True)
js="global.window={};require('./assets/clb/sessions.js');console.log(JSON.stringify(window.CLB_SESSIONS))"
data=json.loads(subprocess.check_output(['node','-e',js])); ids=[x['id'] for x in data];assert len(ids)==len(set(ids))
for s in data:
 for a in s['activities']:
  path,_,anchor=a['url'].partition('#');assert Path(path).is_file(),path
  if anchor:assert anchor in Tags(Path(path).read_text()).ids,anchor
assert 'id="khoidong"' in session and 'data-tab="khoidong"' in session
oldsession=subprocess.check_output(['git','show','9819894117013f67c0baf6bd053e34b17f383d1e:clb-tham-tu-14112026.html']).decode()
get=lambda x:json.loads(re.search(r'const sudokuData=(.*?);',x).group(1))
assert get(session)==get(oldsession),'print Sudoku changed'
d=get(session); rev={v:k for k,v in d['mapping'].items()};chars=''.join(rev[d['solution'][r-1][c-1]] for r,c in d['coordinates_1based']);assert chars==d['message'].replace(' ','')
print('PASS: 27 legacy tools retained; unique IDs; JS syntax; catalog links; warmup; exact Sudoku preserved and message validated.')
