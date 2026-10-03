const IMG={tee:"images/tee.jpg",chino:"images/chino.jpg",shirt:"images/shirt.jpg",tuck:"images/tuck.jpg",chain:"images/chain.jpg",hoop:"images/hoop.jpg",cuff:"images/cuff.jpg",ring:"images/ring.jpg",gold:"images/gold.jpg",m1:"images/m1.jpg",m2:"images/m2.jpg"};
const AP=['S','M','L','XL'];
const P=[
{id:'tee',cat:'apparel',name:'ヘビーウェイトTシャツ',en:'Heavyweight Tee / Black',price:9800,imgs:['tee','m1'],sizes:AP,desc:'しっかり厚みのある綿の生地で作った、ゆとりのあるTシャツ。首まわりは詰まった作りで、一枚でも重ね着でも形が崩れにくいです。',spec:[['素材','綿100%（厚手の生地・12oz）'],['サイズ(M)','着丈70・身幅56・肩幅51・袖丈23cm'],['特長','首まわりが伸びにくい・肩の位置が低いゆったりした形'],['生産','日本製・洗濯機で洗えます']]},
{id:'chino',cat:'apparel',name:'ストレートチノ',en:'Straight Chino / Black',price:16800,imgs:['chino','m1'],sizes:AP,desc:'太ももから裾まで同じ幅でまっすぐ落ちるパンツ。前の中央に折り目が入っているので、Tシャツと合わせてもきちんと見えます。',spec:[['素材','綿100%（丈夫でハリのある生地）'],['サイズ(M)','ウエスト80・股下74・太もも幅31・裾幅21cm'],['特長','ベルト通し・両脇ポケット・中央の折り目'],['生産','日本製・洗濯機で洗えます']]},
{id:'shirt',cat:'apparel',name:'オーバーサイズシャツ',en:'Oversized Shirt / White',price:17600,imgs:['shirt'],sizes:AP,desc:'肩が落ちた大きめの形で、厚みのある綿の生地なので白でも透けにくいシャツ。裾は前が短く後ろが長い、丸みのある形です。',spec:[['素材','綿100%（しっかり織った厚手の生地）'],['サイズ(M)','着丈80・身幅62・肩幅55・袖丈62cm'],['特長','胸ポケット・丸みのある裾'],['生産','日本製・洗濯機で洗えます']]},
{id:'tuck',cat:'apparel',name:'ワンプリーツテーパード',en:'Pleated Tapered Trousers / Black',price:19800,imgs:['tuck','m2'],sizes:AP,desc:'ウエストに2本のひだを入れ、裾に向かって細くなるパンツ。腰まわりはゆったりしていて、足首はすっきり見える丈です。',spec:[['素材','綿80%・ポリエステル20%'],['サイズ(M)','ウエスト76・股下66・太もも幅34・裾幅17cm'],['特長','ウエストのひだ2本・両脇ポケット・足首が見える丈'],['生産','日本製・洗濯機で洗えます']]},
{id:'chain',cat:'silver',name:'ケーブルチェーン',en:'Cable Chain Necklace / Silver',price:24000,imgs:['chain'],sizes:['45cm','50cm'],desc:'太めの楕円の輪をつなげた、シンプルなネックレス。Tシャツの襟元に一本つけるだけで存在感が出ます。',spec:[['素材','シルバー925（変色しにくい加工つき）'],['サイズ','幅4mm・長さ45cm／50cm'],['重さ','約28g'],['留め具','つまんで開け閉めするタイプ']]},
{id:'hoop',cat:'silver',name:'ファットフープピアス',en:'Fat Hoop Earrings / Silver',price:14000,imgs:['hoop'],sizes:['ペア'],desc:'ぽってりと太い、ピカピカに磨いたリング型のピアス。片手でとめられるので、毎日つけたままで過ごせます。',spec:[['素材','シルバー925'],['サイズ','内径16mm・太さ4.5mm'],['重さ','ペアで約9g'],['留め具','開閉式']]},
{id:'cuff',cat:'silver',name:'フラットカフ',en:'Flat Cuff / Silver',price:22000,imgs:['cuff'],sizes:['S','M'],desc:'平らな面をピカピカに磨いた腕輪。すき間を少し広げたり閉じたりして、手首の太さに合わせられます。',spec:[['素材','シルバー925'],['サイズ','幅6mm・厚さ1.5mm・内周15.5cm／16.5cm'],['重さ','約32g'],['仕上げ','ピカピカの鏡のような磨き']]},
{id:'ring',cat:'silver',name:'バンドリング',en:'Band Ring / Silver',price:12000,imgs:['ring'],sizes:['9号','11号','13号','15号'],desc:'外側が丸い、細身のシンプルな指輪。1本でも、何本か重ねてもなじむ幅です。',spec:[['素材','シルバー925'],['サイズ','幅3mm・9／11／13／15号'],['重さ','約3g'],['仕上げ','ピカピカの鏡のような磨き']]},
{id:'disc',cat:'gold',name:'ディスクネックレス',en:'Disc Necklace / Gold',price:18000,imgs:['gold','m2'],sizes:['40cm'],desc:'細いチェーンに小さな丸いプレートを下げた、18金仕上げのネックレス。プレートは無地で、文字を彫ることもできます。',spec:[['素材','シルバー925に18金をかぶせた素材'],['サイズ','プレート径8mm・長さ40cm（+5cmの調整用チェーン）'],['重さ','約3g'],['特長','無地・刻印可']]}
];
const CATS=[['all','すべて'],['apparel','服'],['silver','シルバー'],['gold','ゴールド']];
const $=s=>document.querySelector(s),yen=n=>'¥'+n.toLocaleString('ja-JP');
const FREE=30000,SHIP=600;
let cart=[],cat='all',m=null,tt;
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>e.classList.remove('on'),2200)}
function drawGrid(){
$('#filters').innerHTML=CATS.map(c=>`<button class="${c[0]===cat?'on':''}" data-cat="${c[0]}">${c[1]}</button>`).join('');
$('#grid').innerHTML=P.filter(p=>cat==='all'||p.cat===cat).map(p=>`<button class="card" data-id="${p.id}"><figure><img src="${IMG[p.imgs[0]]}" alt="${p.name}" loading="lazy"></figure><div class="t"><span>${p.name}</span><span>${yen(p.price)}</span></div><div class="e">${p.en}</div></button>`).join('')}
$('#filters').onclick=e=>{const b=e.target.closest('[data-cat]');if(b){cat=b.dataset.cat;drawGrid()}};
$('#grid').onclick=e=>{const c=e.target.closest('.card');if(!c)return;c.classList.add('pick');setTimeout(()=>{openM(c.dataset.id);c.classList.remove('pick')},230)};
document.addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(b)openM(b.dataset.open)});
function openM(id){const p=P.find(x=>x.id===id);m={p,size:p.sizes[0],qty:1,img:0};drawM();lock(1);$('#modal').classList.add('on');$('#ov').classList.add('on');$('#ov').onclick=closeM}
function drawM(){const{p,size,qty,img}=m;
$('#panel').innerHTML=`<button class="x" id="mx" aria-label="閉じる">×</button><div class="gal"><img class="main" src="${IMG[p.imgs[img]]}" alt="${p.name}">${p.imgs.length>1?`<div class="thumbs">${p.imgs.map((k,i)=>`<button class="${i===img?'on':''}" data-th="${i}" aria-label="画像${i+1}"><img src="${IMG[k]}" alt=""></button>`).join('')}</div>`:''}</div>
<div class="info"><h3>${p.name}</h3><p class="en">${p.en}</p><p class="price">${yen(p.price)}<small>税込</small></p><p>${p.desc}</p>
<dl>${p.spec.map(s=>`<div><dt>${s[0]}</dt><dd>${s[1]}</dd></div>`).join('')}</dl>
${p.sizes.length>1?`<div class="lbl">サイズ</div><div class="chips">${p.sizes.map(s=>`<button class="${s===size?'on':''}" data-sz="${s}">${s}</button>`).join('')}</div>`:''}
<div class="lbl">数量</div><div class="qrow"><div class="qty"><button data-q="-1" aria-label="減らす">−</button><output>${qty}</output><button data-q="1" aria-label="増やす">＋</button></div><div class="sub">${yen(p.price*qty)}</div></div>
<button class="add" id="addBtn">カートに入れる</button></div>`;
$('#mx').onclick=closeM}
$('#panel').onclick=e=>{if(!m)return;const t=e.target.closest('button');if(!t)return;
if(t.dataset.th){m.img=+t.dataset.th;drawM()}
else if(t.dataset.sz){m.size=t.dataset.sz;drawM()}
else if(t.dataset.q){m.qty=Math.min(10,Math.max(1,m.qty+ +t.dataset.q));drawM()}
else if(t.id==='addBtn'){addCart(m.p.id,m.size,m.qty);const b=$('#addBtn');b.textContent='追加しました';b.classList.add('done');setTimeout(()=>{if(m)closeM();openC()},600)}};
function closeM(){$('#modal').classList.remove('on');$('#ov').classList.remove('on');m=null;lock(0)}
function lock(v){document.body.style.overflow=v?'hidden':''}
function addCart(id,size,q){const l=cart.find(c=>c.id===id&&c.size===size);l?l.qty=Math.min(10,l.qty+q):cart.push({id,size,qty:q});drawCart()}
function drawCart(){
const n=cart.reduce((a,c)=>a+c.qty,0);$('#cnt').textContent=n;
$('#items').innerHTML=cart.length?cart.map((c,i)=>{const p=P.find(x=>x.id===c.id);return`<div class="it"><img src="${IMG[p.imgs[0]]}" alt=""><div><div class="n">${p.name}</div><div class="s">${p.sizes.length>1?c.size+'・':''}${yen(p.price)}</div><div class="r"><div class="qty"><button data-ci="${i}" data-d="-1" aria-label="減らす">−</button><output>${c.qty}</output><button data-ci="${i}" data-d="1" aria-label="増やす">＋</button></div><b>${yen(p.price*c.qty)}</b></div><button class="rm" data-rm="${i}">削除</button></div></div>`}).join(''):'<div class="empty">カートは空です。<br>気になる商品を選んでください。</div>';
const sub=cart.reduce((a,c)=>a+P.find(x=>x.id===c.id).price*c.qty,0),ship=!cart.length||sub>=FREE?0:SHIP;
$('#sum').innerHTML=`<div><span>小計</span><span>${yen(sub)}</span></div><div><span>送料</span><span>${cart.length?(ship?yen(ship):'無料'):'−'}</span></div>${cart.length&&sub<FREE?`<span class="note">あと${yen(FREE-sub)}で送料無料</span>`:''}<div class="tot"><span>合計（税込）</span><span>${yen(sub+ship)}</span></div><button class="add" id="co" ${cart.length?'':'disabled style="opacity:.35;cursor:not-allowed"'}>購入手続きへ</button>`}
$('#items').onclick=e=>{const t=e.target.closest('button');if(!t)return;
if(t.dataset.rm!==undefined)cart.splice(+t.dataset.rm,1);
else if(t.dataset.ci!==undefined){const l=cart[+t.dataset.ci];l.qty+=+t.dataset.d;if(l.qty<1)cart.splice(+t.dataset.ci,1);if(l&&l.qty>10)l.qty=10}
drawCart()};
$('#sum').onclick=e=>{if(e.target.id==='co'&&cart.length){cart=[];drawCart();closeC();toast('デモサイトのため、実際の購入はできません')}};
function openC(){$('#drawer').classList.add('on');$('#ov').classList.add('on');$('#ov').onclick=closeC;lock(1)}
function closeC(){$('#drawer').classList.remove('on');if(!m){$('#ov').classList.remove('on');lock(0)}}
$('#openCart').onclick=openC;$('#closeCart').onclick=closeC;
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if($('#drawer').classList.contains('on'))closeC();else if(m)closeM()}});
document.addEventListener('click',e=>{if(e.target.closest('footer a[href="#"]'))e.preventDefault()});
drawGrid();drawCart();
