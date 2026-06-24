const { useState, useEffect, useRef } = React;

// ─── DATA ────────────────────────────────────────────────────────────
const RACKET_DATA = {
  Wilson: ["Pro Staff 97","Pro Staff 97L","Pro Staff 97 v14","Blade 98 (16x19)","Blade 98 (18x20)","Blade 100L","Clash 100","Clash 100 Pro","Ultra 100","Burn 100S"],
  Babolat: ["Pure Drive","Pure Drive Plus","Pure Drive Team","Pure Aero","Pure Aero Plus","Pure Strike","Pure Strike 16x19","Pure Control"],
  HEAD: ["Speed MP","Speed Pro","Speed S","Radical MP","Radical Pro","Prestige MP","Prestige Pro","Gravity MP","Gravity Pro","Boom MP"],
  Yonex: ["VCORE 98","VCORE 100","VCORE Pro 97","VCORE Pro 100","EZONE 98","EZONE 100","EZONE 98L","Astrel 105"],
  Dunlop: ["CX 200","CX 200 Tour","CX 400 Tour","FX 500","FX 500 LS","SX 300"],
  Prince: ["Textreme Beast 100","Textreme Tour 100P","Phantom 100","O3 Legacy 110"],
  Tecnifibre: ["TFight 300 RS","TFight 295 Isoflex","T-Flash 300 CurveSpeed","TFight 305 RS"],
  Volkl: ["V-Cell 8","V-Feel 10 300g","C10 Pro"],
  "手入力": [],
};
const GUT_DATA = {
  Luxilon: ["ALU Power 125","ALU Power 130","ALU Power Rough 125","4G 125","4G 130","Element 125","Savage 127"],
  Wilson: ["NXT 16","NXT 17","Sensation 16","Champion's Choice Duo"],
  Babolat: ["RPM Blast 125","RPM Blast 130","RPM Team 125","VS Touch 130","SG Spiralteck 130","Addiction 130"],
  HEAD: ["Hawk 125","Hawk Touch 125","Lynx Tour 125","Velocity MLT 130"],
  Yonex: ["Poly Tour Pro 125","Poly Tour Pro 130","Poly Tour Spin 125","Poly Tour Strike 125","Poly Tour Fire 125","BG80","Aerobite"],
  Dunlop: ["Explosive Bite 16","Black Widow 16"],
  Technifibre: ["Black Code 125","Pro Red Code 125","X-One Biphase 130","NRG2 130"],
  "Signum Pro": ["Poly Plasma 125","Poly Fibre 125"],
  Solinco: ["Tour Bite 125","Hyper-G 125","Confidential 125"],
  Pacific: ["Poly Force 125","Classic 130"],
  "手入力": [],
};
const SURFACES = ["ハードコート","クレーコート","砂入り人工芝","天然芝","カーペット","オムニ"];
const CATEGORIES = ["シングルス","ダブルス","ミックスダブルス","団体戦"];
const ROUNDS = ["1回戦","2回戦","3回戦","4回戦","準々決勝","準決勝","決勝","コンソレ1回戦","コンソレ2回戦","コンソレ決勝"];
const FOCUS_OPTIONS = ["サーブ","リターン","ストローク","ボレー","スマッシュ","フットワーク","メンタル","総合"];
const CONDITIONS = ["絶好調 🔥","良い ✅","普通","やや悪い","悪い 😔"];
const DAYS_JP = ["日","月","火","水","木","金","土"];

// ─── DESIGN TOKENS ───────────────────────────────────────────────────
const T = {
  bg:           "#0c1118",
  bgDeep:       "#080c12",
  surface:      "#131b27",
  surfaceRaised:"#1a2538",
  surfaceHover: "#1f2d42",
  line:         "#1e2d42",
  lineStrong:   "#2a3d56",
  // sport accents
  gut:          "#3dd68c",
  gutDim:       "rgba(61,214,140,0.15)",
  gutGlow:      "rgba(61,214,140,0.35)",
  match:        "#f5a623",
  matchDim:     "rgba(245,166,35,0.15)",
  matchGlow:    "rgba(245,166,35,0.35)",
  plan:         "#38bdf8",
  planDim:      "rgba(56,189,248,0.12)",
  practice:     "#a78bfa",
  practiceDim:  "rgba(167,139,250,0.12)",
  // text
  text:         "#e8eef5",
  textSub:      "#8fa3bc",
  textMuted:    "#4d637d",
  // result
  win:          "#3dd68c",
  winBg:        "rgba(61,214,140,0.15)",
  lose:         "#fc6565",
  loseBg:       "rgba(252,101,101,0.12)",
  draw:         "#8fa3bc",
  drawBg:       "rgba(143,163,188,0.12)",
  // court line white
  courtLine:    "rgba(232,244,253,0.06)",
  accent:       "#3b82f6",
  accentDim:    "rgba(59,130,246,0.15)",
};

// ─── UTILS ───────────────────────────────────────────────────────────
const pad = n => String(n).padStart(2,"0");
const toDateStr = (y,m,d) => `${y}-${pad(m+1)}-${pad(d)}`;
const todayObj = new Date();
const isToday = (y,m,d) => d===todayObj.getDate()&&m===todayObj.getMonth()&&y===todayObj.getFullYear();

function useLS(key, init) {
  const [v, setV] = useState(() => { try { return JSON.parse(localStorage.getItem(key)??'null')??init; } catch { return init; } });
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(v)); } catch {} }, [key,v]);
  return [v, setV];
}

function gutDisplayName(ev, mk, mo, cu) {
  const c = ev[cu]; if (c) return c;
  const maker = ev[mk]||"", model = ev[mo]||"";
  if (maker && maker!=="手入力" && model) return `${maker} ${model}`;
  if (maker && maker!=="手入力") return maker;
  return "";
}

// ─── MICRO COMPONENTS ────────────────────────────────────────────────
const Label = ({children, color}) => (
  <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.1em",color:color||T.textMuted,marginBottom:6,textTransform:"uppercase"}}>
    {children}
  </div>
);

function Field({label, children}) {
  return <div style={{marginBottom:14}}><Label>{label}</Label>{children}</div>;
}

const baseInput = {
  width:"100%", background:T.surfaceRaised, border:`1px solid ${T.lineStrong}`,
  borderRadius:8, color:T.text, padding:"10px 13px", fontSize:14,
  outline:"none", boxSizing:"border-box", transition:"border-color 0.2s",
  fontFamily:"inherit",
};

function Inp({label, ...p}) {
  const [focused, setFocused] = useState(false);
  return (
    <Field label={label}>
      <input {...p}
        onFocus={e=>{setFocused(true); p.onFocus&&p.onFocus(e);}}
        onBlur={e=>{setFocused(false); p.onBlur&&p.onBlur(e);}}
        style={{...baseInput, borderColor: focused ? T.accent : T.lineStrong, ...p.style}}
      />
    </Field>
  );
}

function Sel({label, children, ...p}) {
  return (
    <Field label={label}>
      <select {...p} style={{...baseInput, cursor:"pointer", ...p.style}}>{children}</select>
    </Field>
  );
}

function Chip({children, active, color, onClick}) {
  return (
    <button onClick={onClick} style={{
      padding:"5px 12px", borderRadius:20, border:"none", cursor:"pointer",
      fontSize:11, fontWeight:700, transition:"all 0.15s",
      background: active ? (color||T.accent) : T.surfaceRaised,
      color: active ? "#fff" : T.textSub,
    }}>{children}</button>
  );
}

function Badge({label, type}) {
  const cfg = {
    gut:     {bg:T.gutDim,   color:T.gut,      border:"rgba(61,214,140,0.25)"},
    match:   {bg:T.matchDim, color:T.match,    border:"rgba(245,166,35,0.25)"},
    plan:    {bg:T.planDim,  color:T.plan,     border:"rgba(56,189,248,0.25)"},
    practice:{bg:T.practiceDim,color:T.practice,border:"rgba(167,139,250,0.25)"},
  };
  const c = cfg[type]||cfg.gut;
  return (
    <div style={{
      display:"flex", alignItems:"center", gap:3,
      background:c.bg, color:c.color,
      border:`1px solid ${c.border}`,
      fontSize:9, fontWeight:700, borderRadius:3,
      padding:"2px 6px", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap",
    }}>
      <div style={{width:4,height:4,borderRadius:"50%",background:c.color,flexShrink:0}}/>
      {label}
    </div>
  );
}

function ResultPill({result}) {
  if (!result) return null;
  const cfg = {
    win: {bg:T.winBg, color:T.win, label:"WIN"},
    lose:{bg:T.loseBg,color:T.lose,label:"LOSE"},
    draw:{bg:T.drawBg, color:T.draw, label:"DRAW"},
  };
  const c = cfg[result]||cfg.draw;
  return <span style={{background:c.bg,color:c.color,fontSize:10,fontWeight:800,borderRadius:6,padding:"2px 9px",letterSpacing:"0.07em"}}>{c.label}</span>;
}

function SectionDivider({label}) {
  return (
    <div style={{display:"flex",alignItems:"center",gap:10,margin:"18px 0 14px"}}>
      <div style={{flex:1,height:1,background:T.line}}/>
      {label&&<span style={{color:T.textMuted,fontSize:10,fontWeight:700,letterSpacing:"0.08em"}}>{label}</span>}
      <div style={{flex:1,height:1,background:T.line}}/>
    </div>
  );
}

// ─── MODAL ───────────────────────────────────────────────────────────
function Modal({title, subtitle, onClose, wide, children}) {
  return (
    <div style={{
      position:"fixed",inset:0,background:"rgba(4,8,16,0.85)",
      display:"flex",alignItems:"flex-end",justifyContent:"center",zIndex:200,
      backdropFilter:"blur(4px)",
    }} onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div style={{
        background:T.surface, borderRadius:"20px 20px 0 0",
        borderTop:`1px solid ${T.lineStrong}`,
        borderLeft:`1px solid ${T.line}`, borderRight:`1px solid ${T.line}`,
        padding:"0 0 32px", width:"100%", maxWidth:620,
        maxHeight:"92vh", overflowY:"auto",
        boxShadow:"0 -24px 64px rgba(0,0,0,0.6)",
      }}>
        {/* handle bar */}
        <div style={{display:"flex",justifyContent:"center",padding:"12px 0 0"}}>
          <div style={{width:36,height:4,borderRadius:2,background:T.lineStrong}}/>
        </div>
        <div style={{padding:"16px 24px 20px",borderBottom:`1px solid ${T.line}`}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div>
              <h2 style={{margin:0,fontSize:18,fontWeight:800,color:T.text}}>{title}</h2>
              {subtitle&&<div style={{fontSize:12,color:T.textMuted,marginTop:2}}>{subtitle}</div>}
            </div>
            <button onClick={onClose} style={{
              background:T.surfaceRaised,border:"none",color:T.textSub,
              width:32,height:32,borderRadius:8,cursor:"pointer",fontSize:16,
              display:"flex",alignItems:"center",justifyContent:"center",
            }}>×</button>
          </div>
        </div>
        <div style={{padding:"20px 24px"}}>{children}</div>
      </div>
    </div>
  );
}

// ─── GUT SELECTOR ────────────────────────────────────────────────────
function GutSelector({label, color, makerK, modelK, customK, f, setF}) {
  const maker = f[makerK]||"";
  const models = maker&&maker!=="手入力" ? GUT_DATA[maker]||[] : [];
  return (
    <div style={{
      background:T.bgDeep, borderRadius:12, padding:14,
      border:`1px solid ${color||T.gut}33`, marginBottom:12,
    }}>
      <div style={{fontSize:11,fontWeight:700,color:color||T.gut,marginBottom:10,letterSpacing:"0.06em"}}>{label}</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
        <Sel label="メーカー" value={maker} onChange={e=>setF(p=>({...p,[makerK]:e.target.value,[modelK]:"",[customK]:""}))} >
          <option value="">選択</option>
          {Object.keys(GUT_DATA).map(m=><option key={m}>{m}</option>)}
        </Sel>
        {maker&&maker!=="手入力"&&(
          <Sel label="モデル" value={f[modelK]||""} onChange={e=>setF(p=>({...p,[modelK]:e.target.value}))}>
            <option value="">選択</option>
            {models.map(m=><option key={m}>{m}</option>)}
          </Sel>
        )}
      </div>
      <Inp label="手入力（未掲載モデル）" placeholder="例: ALU Power Rough 125" value={f[customK]||""} onChange={e=>setF(p=>({...p,[customK]:e.target.value}))}/>
    </div>
  );
}

// ─── GUT FORM ────────────────────────────────────────────────────────
function GutForm({onSave, onClose, rackets}) {
  const [f,setF] = useState({date:"",racketId:"",hybrid:false,mainMaker:"",mainModel:"",mainCustom:"",mainTension:"",crossMaker:"",crossModel:"",crossCustom:"",crossTension:"",amount:"",memo:""});
  const save = () => { if(!f.date) return alert("日付を入力してください"); onSave({...f,type:"gut",id:Date.now()}); };
  return (<>
    <Inp label="張り替え日" type="date" value={f.date} onChange={e=>setF(p=>({...p,date:e.target.value}))}/>
    <Field label="使用ラケット">
      <select value={f.racketId} onChange={e=>setF(p=>({...p,racketId:e.target.value}))} style={baseInput}>
        <option value="">選択（マイラケットから）</option>
        {rackets.map(r=>(
          <option key={r.id} value={r.id}>#{r.number} {r.maker!=="手入力"?r.maker:""} {r.model||r.custom||""}</option>
        ))}
      </select>
      {rackets.length===0&&<div style={{fontSize:11,color:T.textMuted,marginTop:5}}>※ マイラケットタブで先に登録してください</div>}
    </Field>

    <label style={{display:"flex",alignItems:"center",gap:10,cursor:"pointer",marginBottom:16,padding:"10px 14px",background:T.bgDeep,borderRadius:10,border:`1px solid ${T.line}`}}>
      <input type="checkbox" checked={f.hybrid} onChange={e=>setF(p=>({...p,hybrid:e.target.checked}))} style={{width:16,height:16,accentColor:T.gut}}/>
      <div>
        <div style={{fontSize:13,fontWeight:600,color:T.text}}>ハイブリッド張り</div>
        <div style={{fontSize:11,color:T.textMuted}}>縦・横で異なるガットを使用</div>
      </div>
    </label>

    {f.hybrid ? (<>
      <GutSelector label="縦ガット（メイン）" color={T.gut} makerK="mainMaker" modelK="mainModel" customK="mainCustom" f={f} setF={setF}/>
      <Inp label="縦テンション (lbs)" type="number" placeholder="50" value={f.mainTension} onChange={e=>setF(p=>({...p,mainTension:e.target.value}))}/>
      <GutSelector label="横ガット（クロス）" color={T.plan} makerK="crossMaker" modelK="crossModel" customK="crossCustom" f={f} setF={setF}/>
      <Inp label="横テンション (lbs)" type="number" placeholder="48" value={f.crossTension} onChange={e=>setF(p=>({...p,crossTension:e.target.value}))}/>
    </>) : (<>
      <GutSelector label="ガット" color={T.gut} makerK="mainMaker" modelK="mainModel" customK="mainCustom" f={f} setF={setF}/>
      <Inp label="テンション (lbs)" type="number" placeholder="50" value={f.mainTension} onChange={e=>setF(p=>({...p,mainTension:e.target.value}))}/>
    </>)}

    <Field label="費用 (円)">
      <div style={{position:"relative"}}>
        <span style={{position:"absolute",left:13,top:"50%",transform:"translateY(-50%)",color:T.textMuted,fontSize:14}}>¥</span>
        <input type="number" placeholder="3500" value={f.amount} onChange={e=>setF(p=>({...p,amount:e.target.value}))} style={{...baseInput,paddingLeft:28}}/>
      </div>
    </Field>
    <Inp label="張り替え店・メモ" placeholder="例: スポーツデポ高槻店" value={f.memo} onChange={e=>setF(p=>({...p,memo:e.target.value}))}/>
    <div style={{display:"flex",gap:10,marginTop:8}}>
      <button onClick={onClose} style={{flex:1,padding:"12px",background:T.surfaceRaised,border:`1px solid ${T.lineStrong}`,borderRadius:10,color:T.textSub,fontSize:14,fontWeight:600,cursor:"pointer"}}>キャンセル</button>
      <button onClick={save} style={{flex:2,padding:"12px",background:T.gut,border:"none",borderRadius:10,color:"#031a0c",fontSize:14,fontWeight:800,cursor:"pointer",letterSpacing:"0.03em"}}>保存する</button>
    </div>
  </>);
}

// ─── TOURNAMENT FORM ─────────────────────────────────────────────────
function TournamentForm({onSave, onClose, isPlan}) {
  const mkMatch = () => ({round:"",opponent:"",score:"",result:"",memo:""});
  const [f,setF] = useState({date:"",name:"",surface:"",category:"",venue:"",partner:"",overallResult:"",amount:"",memo:"",matches:[mkMatch()]});
  const setMatch = (i,k,v) => setF(p=>({...p,matches:p.matches.map((m,idx)=>idx===i?{...m,[k]:v}:m)}));
  const save = () => { if(!f.date||!f.name) return alert("日付と大会名を入力してください"); onSave({...f,type:isPlan?"plan":"match",id:Date.now()}); };
  const accentColor = isPlan ? T.plan : T.match;
  return (<>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
      <Inp label="日付" type="date" value={f.date} onChange={e=>setF(p=>({...p,date:e.target.value}))}/>
      <Inp label="大会名" placeholder="例: 高槻市民大会" value={f.name} onChange={e=>setF(p=>({...p,name:e.target.value}))}/>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
      <Sel label="サーフェス" value={f.surface} onChange={e=>setF(p=>({...p,surface:e.target.value}))}>
        <option value="">選択</option>
        {SURFACES.map(s=><option key={s}>{s}</option>)}
      </Sel>
      <Sel label="カテゴリ" value={f.category} onChange={e=>setF(p=>({...p,category:e.target.value}))}>
        <option value="">選択</option>
        {CATEGORIES.map(s=><option key={s}>{s}</option>)}
      </Sel>
    </div>
    <Inp label="会場" placeholder="例: 高槻市立テニスコート" value={f.venue} onChange={e=>setF(p=>({...p,venue:e.target.value}))}/>
    <Inp label="ペア名（ダブルス）" placeholder="例: 山田さん" value={f.partner} onChange={e=>setF(p=>({...p,partner:e.target.value}))}/>

    {!isPlan&&(<>
      <Inp label="大会結果（自由記入）" placeholder="例: 優勝 / 準優勝 / コンソレ優勝 / 2回戦負け" value={f.overallResult} onChange={e=>setF(p=>({...p,overallResult:e.target.value}))}/>
      <SectionDivider label="試合結果"/>
      {f.matches.map((m,i)=>(
        <div key={i} style={{background:T.bgDeep,borderRadius:12,padding:14,marginBottom:10,border:`1px solid ${T.line}`}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
            <span style={{fontSize:12,fontWeight:700,color:accentColor}}>{i+1}試合目</span>
            {f.matches.length>1&&<button onClick={()=>setF(p=>({...p,matches:p.matches.filter((_,idx)=>idx!==i)}))} style={{background:"none",border:"none",color:T.textMuted,cursor:"pointer",fontSize:16}}>×</button>}
          </div>
          <Sel label="ラウンド" value={m.round} onChange={e=>setMatch(i,"round",e.target.value)}>
            <option value="">選択</option>
            {ROUNDS.map(r=><option key={r}>{r}</option>)}
          </Sel>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            <Inp label="相手名" placeholder="田中さん" value={m.opponent} onChange={e=>setMatch(i,"opponent",e.target.value)}/>
            <Inp label="スコア" placeholder="6-4, 6-3" value={m.score} onChange={e=>setMatch(i,"score",e.target.value)}/>
          </div>
          <div style={{display:"flex",gap:8,marginBottom:10}}>
            {["win","lose","draw"].map(r=>(
              <button key={r} onClick={()=>setMatch(i,"result",r)} style={{
                flex:1,padding:"8px 0",borderRadius:8,border:"none",cursor:"pointer",fontSize:12,fontWeight:700,
                background:m.result===r?(r==="win"?T.winBg:r==="lose"?T.loseBg:T.drawBg):T.surfaceRaised,
                color:m.result===r?(r==="win"?T.win:r==="lose"?T.lose:T.draw):T.textMuted,
                outline:m.result===r?`2px solid ${r==="win"?T.win:r==="lose"?T.lose:T.draw}`:"none",
              }}>{r==="win"?"WIN":r==="lose"?"LOSE":"DRAW"}</button>
            ))}
          </div>
          <Inp label="メモ" placeholder="サーブ好調など" value={m.memo} onChange={e=>setMatch(i,"memo",e.target.value)}/>
        </div>
      ))}
      <button onClick={()=>setF(p=>({...p,matches:[...p.matches,mkMatch()]}))} style={{
        width:"100%",padding:"10px",background:"transparent",border:`1px dashed ${T.lineStrong}`,
        borderRadius:10,color:T.textSub,fontSize:13,fontWeight:600,cursor:"pointer",marginBottom:14,
      }}>＋ 試合を追加</button>
    </>)}

    <Field label="費用 (円)">
      <div style={{position:"relative"}}>
        <span style={{position:"absolute",left:13,top:"50%",transform:"translateY(-50%)",color:T.textMuted,fontSize:14}}>¥</span>
        <input type="number" placeholder="3000" value={f.amount} onChange={e=>setF(p=>({...p,amount:e.target.value}))} style={{...baseInput,paddingLeft:28}}/>
      </div>
    </Field>
    <Inp label="その他メモ" placeholder="" value={f.memo} onChange={e=>setF(p=>({...p,memo:e.target.value}))}/>
    <div style={{display:"flex",gap:10,marginTop:8}}>
      <button onClick={onClose} style={{flex:1,padding:"12px",background:T.surfaceRaised,border:`1px solid ${T.lineStrong}`,borderRadius:10,color:T.textSub,fontSize:14,fontWeight:600,cursor:"pointer"}}>キャンセル</button>
      <button onClick={save} style={{flex:2,padding:"12px",background:accentColor,border:"none",borderRadius:10,color:isPlan?"#001a2c":"#1a0800",fontSize:14,fontWeight:800,cursor:"pointer"}}>保存する</button>
    </div>
  </>);
}

// ─── PRACTICE FORM ───────────────────────────────────────────────────
function PracticeForm({onSave, onClose}) {
  const [f,setF] = useState({date:"",duration:"",partner:"",surface:"",focus:"",condition:"",amount:"",memo:""});
  const save = () => { if(!f.date) return alert("日付を入力してください"); onSave({...f,type:"practice",id:Date.now()}); };
  return (<>
    <Inp label="日付" type="date" value={f.date} onChange={e=>setF(p=>({...p,date:e.target.value}))}/>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
      <Inp label="練習時間 (分)" type="number" placeholder="90" value={f.duration} onChange={e=>setF(p=>({...p,duration:e.target.value}))}/>
      <Sel label="サーフェス" value={f.surface} onChange={e=>setF(p=>({...p,surface:e.target.value}))}>
        <option value="">選択</option>{SURFACES.map(s=><option key={s}>{s}</option>)}
      </Sel>
    </div>
    <Inp label="練習相手" placeholder="山田さん / スクール" value={f.partner} onChange={e=>setF(p=>({...p,partner:e.target.value}))}/>
    <Field label="フォーカス">
      <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
        {FOCUS_OPTIONS.map(opt=>(
          <button key={opt} onClick={()=>setF(p=>({...p,focus:p.focus===opt?"":opt}))} style={{
            padding:"6px 12px",borderRadius:20,border:"none",cursor:"pointer",fontSize:11,fontWeight:600,
            background:f.focus===opt?T.practice:T.surfaceRaised,
            color:f.focus===opt?"#fff":T.textSub,
          }}>{opt}</button>
        ))}
      </div>
    </Field>
    <Field label="コンディション">
      <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
        {CONDITIONS.map(opt=>(
          <button key={opt} onClick={()=>setF(p=>({...p,condition:p.condition===opt?"":opt}))} style={{
            padding:"6px 12px",borderRadius:20,border:"none",cursor:"pointer",fontSize:11,fontWeight:600,
            background:f.condition===opt?T.accent:T.surfaceRaised,
            color:f.condition===opt?"#fff":T.textSub,
          }}>{opt}</button>
        ))}
      </div>
    </Field>
    <Field label="費用 (円)">
      <div style={{position:"relative"}}>
        <span style={{position:"absolute",left:13,top:"50%",transform:"translateY(-50%)",color:T.textMuted,fontSize:14}}>¥</span>
        <input type="number" placeholder="2000" value={f.amount} onChange={e=>setF(p=>({...p,amount:e.target.value}))} style={{...baseInput,paddingLeft:28}}/>
      </div>
    </Field>
    <Inp label="メモ" placeholder="気づき・改善点" value={f.memo} onChange={e=>setF(p=>({...p,memo:e.target.value}))}/>
    <div style={{display:"flex",gap:10,marginTop:8}}>
      <button onClick={onClose} style={{flex:1,padding:"12px",background:T.surfaceRaised,border:`1px solid ${T.lineStrong}`,borderRadius:10,color:T.textSub,fontSize:14,fontWeight:600,cursor:"pointer"}}>キャンセル</button>
      <button onClick={save} style={{flex:2,padding:"12px",background:T.practice,border:"none",borderRadius:10,color:"#fff",fontSize:14,fontWeight:800,cursor:"pointer"}}>保存する</button>
    </div>
  </>);
}

// ─── RACKET MANAGER ──────────────────────────────────────────────────
function RacketManager({rackets, setRackets}) {
  const [showForm, setShowForm] = useState(false);
  const [f,setF] = useState({maker:"",model:"",custom:"",grip:"",weight:"",memo:""});
  const models = f.maker&&f.maker!=="手入力"?RACKET_DATA[f.maker]||[]:[];
  const save = () => {
    if(!f.maker) return alert("メーカーを選択してください");
    setRackets(p=>[...p,{...f,id:Date.now(),number:p.length+1}]);
    setShowForm(false); setF({maker:"",model:"",custom:"",grip:"",weight:"",memo:""});
  };
  const del = id => { if(!confirm("削除しますか？")) return; setRackets(p=>p.filter(r=>r.id!==id).map((r,i)=>({...r,number:i+1}))); };

  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
        <div style={{fontSize:13,color:T.textSub}}><span style={{color:T.text,fontWeight:700,fontSize:20}}>{rackets.length}</span> 本登録中</div>
        <button onClick={()=>setShowForm(!showForm)} style={{
          padding:"8px 16px",background:T.accent,border:"none",borderRadius:10,
          color:"#fff",fontSize:13,fontWeight:700,cursor:"pointer",
        }}>＋ 追加</button>
      </div>

      {showForm&&(
        <div style={{background:T.bgDeep,borderRadius:14,padding:18,marginBottom:18,border:`1px solid ${T.line}`}}>
          <Sel label="メーカー" value={f.maker} onChange={e=>setF(p=>({...p,maker:e.target.value,model:""}))}>
            <option value="">選択してください</option>
            {Object.keys(RACKET_DATA).map(m=><option key={m}>{m}</option>)}
          </Sel>
          {f.maker&&f.maker!=="手入力"&&(
            <Sel label="モデル" value={f.model} onChange={e=>setF(p=>({...p,model:e.target.value}))}>
              <option value="">選択してください</option>
              {models.map(m=><option key={m}>{m}</option>)}
            </Sel>
          )}
          <Inp label="手入力（未掲載モデル）" placeholder="例: Pro Staff RF97" value={f.custom} onChange={e=>setF(p=>({...p,custom:e.target.value}))}/>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            <Inp label="グリップ" placeholder="G2 / G3" value={f.grip} onChange={e=>setF(p=>({...p,grip:e.target.value}))}/>
            <Inp label="重量 (g)" type="number" placeholder="305" value={f.weight} onChange={e=>setF(p=>({...p,weight:e.target.value}))}/>
          </div>
          <Inp label="メモ" placeholder="カスタマイズ内容など" value={f.memo} onChange={e=>setF(p=>({...p,memo:e.target.value}))}/>
          <div style={{display:"flex",gap:10}}>
            <button onClick={()=>setShowForm(false)} style={{flex:1,padding:"10px",background:T.surfaceRaised,border:`1px solid ${T.lineStrong}`,borderRadius:8,color:T.textSub,fontSize:13,fontWeight:600,cursor:"pointer"}}>キャンセル</button>
            <button onClick={save} style={{flex:2,padding:"10px",background:T.accent,border:"none",borderRadius:8,color:"#fff",fontSize:13,fontWeight:700,cursor:"pointer"}}>登録</button>
          </div>
        </div>
      )}

      {rackets.length===0&&!showForm&&(
        <div style={{textAlign:"center",padding:"48px 0",color:T.textMuted}}>
          <div style={{fontSize:14,marginBottom:6,fontWeight:600}}>ラケットが登録されていません</div>
          <div style={{fontSize:12}}>上の「＋ 追加」から登録してください</div>
        </div>
      )}

      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        {rackets.map(r=>(
          <div key={r.id} style={{
            background:T.surface,borderRadius:14,padding:"14px 16px",
            border:`1px solid ${T.line}`,
            display:"flex",justifyContent:"space-between",alignItems:"center",
          }}>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <div style={{
                background:T.accentDim,color:T.accent,
                fontSize:13,fontWeight:800,borderRadius:10,
                width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",
                border:`1px solid ${T.accent}44`,flexShrink:0,
              }}>#{r.number}</div>
              <div>
                <div style={{fontWeight:700,color:T.text,fontSize:14}}>{r.maker!=="手入力"?r.maker:""} {r.model||r.custom||"（名称未設定）"}</div>
                <div style={{fontSize:11,color:T.textMuted,marginTop:2}}>
                  {r.grip&&`グリップ ${r.grip}`}{r.grip&&r.weight&&"  "}
                  {r.weight&&`${r.weight}g`}{r.memo&&`  ${r.memo}`}
                </div>
              </div>
            </div>
            <button onClick={()=>del(r.id)} style={{background:"none",border:"none",color:T.textMuted,cursor:"pointer",fontSize:11,padding:"4px 8px",fontWeight:600,letterSpacing:"0.04em"}}>削除</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── EVENT CARD (detail) ─────────────────────────────────────────────
function EventCard({ev, rackets, onDelete}) {
  const racket = rackets.find(r=>String(r.id)===String(ev.racketId));
  const typeColor = {gut:T.gut,match:T.match,plan:T.plan,practice:T.practice};
  const c = typeColor[ev.type]||T.accent;

  return (
    <div style={{background:T.bgDeep,borderRadius:12,padding:16,borderLeft:`3px solid ${c}`}}>
      {ev.type==="gut"&&(
        <>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
            <div style={{width:3,height:16,borderRadius:2,background:T.gut,flexShrink:0}}/>
            <span style={{fontWeight:700,color:T.gut,fontSize:13,letterSpacing:"0.04em"}}>ガット張り替え</span>
            {racket&&<span style={{background:T.accentDim,color:T.accent,fontSize:10,fontWeight:700,borderRadius:4,padding:"1px 7px"}}>#{racket.number}</span>}
          </div>
          {ev.hybrid?(
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              <div style={{background:T.surface,borderRadius:8,padding:"8px 10px"}}>
                <div style={{fontSize:9,color:T.gut,fontWeight:700,marginBottom:3}}>縦 MAIN</div>
                <div style={{fontSize:12,color:T.text,fontWeight:600}}>{gutDisplayName(ev,"mainMaker","mainModel","mainCustom")||"—"}</div>
                {ev.mainTension&&<div style={{fontSize:11,color:T.textMuted}}>{ev.mainTension} lbs</div>}
              </div>
              <div style={{background:T.surface,borderRadius:8,padding:"8px 10px"}}>
                <div style={{fontSize:9,color:T.plan,fontWeight:700,marginBottom:3}}>横 CROSS</div>
                <div style={{fontSize:12,color:T.text,fontWeight:600}}>{gutDisplayName(ev,"crossMaker","crossModel","crossCustom")||"—"}</div>
                {ev.crossTension&&<div style={{fontSize:11,color:T.textMuted}}>{ev.crossTension} lbs</div>}
              </div>
            </div>
          ):(
            <div style={{fontSize:13,color:T.text}}>
              {gutDisplayName(ev,"mainMaker","mainModel","mainCustom")||"—"}
              {ev.mainTension&&<span style={{color:T.textMuted,fontSize:12}}> / {ev.mainTension} lbs</span>}
            </div>
          )}
          {ev.memo&&<div style={{fontSize:11,color:T.textMuted,marginTop:6}}>{ev.memo}</div>}
          {ev.amount&&<div style={{fontSize:13,fontWeight:700,color:"#facc15",marginTop:6}}>¥{Number(ev.amount).toLocaleString()}</div>}
        </>
      )}

      {(ev.type==="match"||ev.type==="plan")&&(
        <>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
            <div style={{width:3,height:16,borderRadius:2,background:c,flexShrink:0}}/>
            <span style={{fontWeight:700,color:c,fontSize:13,letterSpacing:"0.04em"}}>{ev.name}</span>
            {ev.type==="plan"&&<span style={{background:T.planDim,color:T.plan,fontSize:9,fontWeight:700,borderRadius:4,padding:"1px 6px"}}>予定</span>}
          </div>
          <div style={{fontSize:11,color:T.textMuted,marginBottom:6}}>
            {ev.surface&&`${ev.surface}　`}{ev.category&&`${ev.category}　`}{ev.venue}
          </div>
          {ev.partner&&<div style={{fontSize:12,color:T.textSub,marginBottom:6}}>ペア: {ev.partner}</div>}
          {ev.overallResult&&(
            <div style={{background:T.surfaceRaised,borderRadius:8,padding:"6px 12px",fontSize:13,fontWeight:700,color:T.text,marginBottom:8}}>
              {ev.overallResult}
            </div>
          )}
          {ev.type==="match"&&ev.matches?.map((m,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"6px 0",borderTop:i===0?`1px solid ${T.line}`:"none"}}>
              <span style={{fontSize:10,color:T.textMuted,minWidth:60}}>{m.round||`${i+1}試合目`}</span>
              <span style={{fontSize:13,color:T.text,flex:1}}>vs {m.opponent||"—"}</span>
              {m.score&&<span style={{fontSize:12,fontWeight:700,color:T.text}}>{m.score}</span>}
              <ResultPill result={m.result}/>
            </div>
          ))}
          {ev.memo&&<div style={{fontSize:11,color:T.textMuted,marginTop:6}}>{ev.memo}</div>}
          {ev.amount&&<div style={{fontSize:13,fontWeight:700,color:"#facc15",marginTop:6}}>¥{Number(ev.amount).toLocaleString()}</div>}
        </>
      )}

      {ev.type==="practice"&&(
        <>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
            <div style={{width:3,height:16,borderRadius:2,background:T.practice,flexShrink:0}}/>
            <span style={{fontWeight:700,color:T.practice,fontSize:13,letterSpacing:"0.04em"}}>練習</span>
            {ev.duration&&<span style={{fontSize:11,color:T.textMuted}}>{ev.duration}分</span>}
          </div>
          <div style={{fontSize:12,color:T.textSub}}>
            {ev.partner&&`${ev.partner}　`}{ev.surface&&`${ev.surface}　`}{ev.focus&&`[${ev.focus}]`}
          </div>
          {ev.condition&&<div style={{fontSize:11,color:T.textMuted,marginTop:3}}>{ev.condition}</div>}
          {ev.memo&&<div style={{fontSize:11,color:T.textMuted,marginTop:4}}>{ev.memo}</div>}
          {ev.amount&&<div style={{fontSize:13,fontWeight:700,color:"#facc15",marginTop:6}}>¥{Number(ev.amount).toLocaleString()}</div>}
        </>
      )}

      {onDelete&&(
        <button onClick={()=>onDelete(ev.id)} style={{background:"none",border:"none",color:T.textMuted,cursor:"pointer",fontSize:11,marginTop:10,padding:0,display:"block",letterSpacing:"0.04em"}}>
          削除
        </button>
      )}
    </div>
  );
}

// ─── EXPENSE FORM ────────────────────────────────────────────────────
const EXPENSE_CATS = [
  {key:"gut",    label:"ガット代・工賃", icon:"🎾", color:"#3dd68c"},
  {key:"entry",  label:"大会参加費",     icon:"🏆", color:"#f5a623"},
  {key:"court",  label:"コート代",       icon:"🎾", color:"#38bdf8"},
  {key:"lesson", label:"レッスン代",     icon:"📚", color:"#a78bfa"},
  {key:"gear",   label:"用具・ラケット", icon:"🛒", color:"#fb923c"},
  {key:"travel", label:"交通費",         icon:"🚃", color:"#94a3b8"},
  {key:"other",  label:"その他",         icon:"💴", color:"#64748b"},
];

function ExpenseForm({onSave, onClose}) {
  const [f,setF] = useState({date:"",category:"gut",amount:"",memo:""});
  const save = () => {
    if(!f.date||!f.amount) return alert("日付と金額を入力してください");
    onSave({...f,type:"expense",id:Date.now()});
  };
  const cat = EXPENSE_CATS.find(c=>c.key===f.category)||EXPENSE_CATS[0];
  return (<>
    <Inp label="日付" type="date" value={f.date} onChange={e=>setF(p=>({...p,date:e.target.value}))}/>
    <Field label="カテゴリ">
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:4}}>
        {EXPENSE_CATS.map(c=>(
          <button key={c.key} onClick={()=>setF(p=>({...p,category:c.key}))} style={{
            padding:"9px 10px",borderRadius:9,border:"none",cursor:"pointer",
            fontSize:12,fontWeight:700,textAlign:"left",
            background:f.category===c.key?`${c.color}22`:T.surfaceRaised,
            color:f.category===c.key?c.color:T.textSub,
            outline:f.category===c.key?`2px solid ${c.color}66`:"none",
          }}>{c.icon} {c.label}</button>
        ))}
      </div>
    </Field>
    <Field label="金額 (円)">
      <div style={{position:"relative"}}>
        <span style={{position:"absolute",left:13,top:"50%",transform:"translateY(-50%)",color:T.textMuted,fontSize:14}}>¥</span>
        <input type="number" placeholder="3000" value={f.amount}
          onChange={e=>setF(p=>({...p,amount:e.target.value}))}
          style={{...baseInput,paddingLeft:28}}/>
      </div>
    </Field>
    <Inp label="メモ" placeholder="例: スポーツデポ高槻、張り替え工賃込み" value={f.memo} onChange={e=>setF(p=>({...p,memo:e.target.value}))}/>
    <div style={{display:"flex",gap:10,marginTop:8}}>
      <button onClick={onClose} style={{flex:1,padding:"12px",background:T.surfaceRaised,border:`1px solid ${T.lineStrong}`,borderRadius:10,color:T.textSub,fontSize:14,fontWeight:600,cursor:"pointer"}}>キャンセル</button>
      <button onClick={save} style={{flex:2,padding:"12px",background:"#facc15",border:"none",borderRadius:10,color:"#1a1200",fontSize:14,fontWeight:800,cursor:"pointer"}}>保存する</button>
    </div>
  </>);
}

// ─── EXPENSE VIEW ─────────────────────────────────────────────────────
function ExpenseView({expenses, onDelete}) {
  const now = new Date();
  const [viewYear,  setViewYear]  = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());

  const monthStr = `${viewYear}-${String(viewMonth+1).padStart(2,"0")}`;
  const monthEvs = expenses.filter(e=>e.date.startsWith(monthStr));
  const total = monthEvs.reduce((s,e)=>s+(Number(e.amount)||0),0);

  // カテゴリ別集計
  const byCategory = EXPENSE_CATS.map(c=>({
    ...c,
    total: monthEvs.filter(e=>e.category===c.key).reduce((s,e)=>s+(Number(e.amount)||0),0),
    items: monthEvs.filter(e=>e.category===c.key),
  })).filter(c=>c.total>0);

  const sorted = [...monthEvs].sort((a,b)=>b.date.localeCompare(a.date));

  return (
    <div>
      {/* 月ナビ */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:18}}>
        <button onClick={()=>{
          const d = new Date(viewYear,viewMonth-1,1);
          setViewYear(d.getFullYear()); setViewMonth(d.getMonth());
        }} style={{background:T.surfaceRaised,border:`1px solid ${T.line}`,borderRadius:8,color:T.textSub,width:34,height:34,cursor:"pointer",fontSize:16}}>‹</button>
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:13,fontWeight:700,color:T.text}}>{viewYear}年 {viewMonth+1}月</div>
          <div style={{fontSize:22,fontWeight:900,color:"#facc15",letterSpacing:"-0.02em",fontVariantNumeric:"tabular-nums"}}>
            ¥{total.toLocaleString()}
          </div>
        </div>
        <button onClick={()=>{
          const d = new Date(viewYear,viewMonth+1,1);
          setViewYear(d.getFullYear()); setViewMonth(d.getMonth());
        }} style={{background:T.surfaceRaised,border:`1px solid ${T.line}`,borderRadius:8,color:T.textSub,width:34,height:34,cursor:"pointer",fontSize:16}}>›</button>
      </div>

      {/* カテゴリ別バー */}
      {byCategory.length>0&&(
        <div style={{background:T.surface,borderRadius:14,padding:16,marginBottom:16,border:`1px solid ${T.line}`}}>
          <div style={{fontSize:10,fontWeight:700,color:T.textMuted,marginBottom:12,letterSpacing:"0.08em"}}>カテゴリ別</div>
          {byCategory.map(c=>(
            <div key={c.key} style={{marginBottom:10}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                <span style={{fontSize:12,color:T.textSub}}>{c.icon} {c.label}</span>
                <span style={{fontSize:12,fontWeight:700,color:c.color}}>¥{c.total.toLocaleString()}</span>
              </div>
              <div style={{height:4,background:T.surfaceRaised,borderRadius:2}}>
                <div style={{height:"100%",borderRadius:2,background:c.color,width:`${total>0?Math.round(c.total/total*100):0}%`,transition:"width 0.4s"}}/>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 明細一覧 */}
      {sorted.length===0?(
        <div style={{textAlign:"center",padding:"36px 0",color:T.textMuted}}>
          <div style={{fontSize:14}}>この月の記録はありません</div>
        </div>
      ):(
        <div style={{display:"flex",flexDirection:"column",gap:8}}>
          {sorted.map(ev=>{
            const cat = EXPENSE_CATS.find(c=>c.key===ev.category)||EXPENSE_CATS[6];
            return (
              <div key={ev.id} style={{
                background:T.surface,borderRadius:12,padding:"12px 14px",
                border:`1px solid ${T.line}`,borderLeft:`3px solid ${cat.color}`,
                display:"flex",justifyContent:"space-between",alignItems:"center",
              }}>
                <div>
                  <div style={{fontSize:11,color:T.textMuted,marginBottom:2}}>{ev.date}</div>
                  <div style={{fontSize:13,fontWeight:600,color:T.text}}>{cat.icon} {cat.label}</div>
                  {ev.memo&&<div style={{fontSize:11,color:T.textMuted,marginTop:2}}>{ev.memo}</div>}
                </div>
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <span style={{fontSize:15,fontWeight:800,color:"#facc15",fontVariantNumeric:"tabular-nums"}}>¥{Number(ev.amount).toLocaleString()}</span>
                  <button onClick={()=>onDelete(ev.id)} style={{background:"none",border:"none",color:T.textMuted,cursor:"pointer",fontSize:11,fontWeight:600,letterSpacing:"0.04em"}}>削除</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── STATS ───────────────────────────────────────────────────────────
function StatsView({events, rackets, expenses}) {
  const gutEvs = events.filter(e=>e.type==="gut");
  const matchEvs = events.filter(e=>e.type==="match");
  const practiceEvs = events.filter(e=>e.type==="practice");
  const allMatches = matchEvs.flatMap(t=>t.matches||[]);
  const wins = allMatches.filter(m=>m.result==="win").length;
  const loses = allMatches.filter(m=>m.result==="lose").length;
  const total = wins+loses;
  const winRate = total>0?Math.round(wins/total*100):null;
  const totalMin = practiceEvs.reduce((s,e)=>s+(Number(e.duration)||0),0);
  const latestGut = [...gutEvs].sort((a,b)=>b.date.localeCompare(a.date))[0];
  const now = new Date();
  const thisMonthStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}`;
  const monthExpenses = expenses.filter(e=>e.date.startsWith(thisMonthStr));
  const monthTotal = monthExpenses.reduce((s,e)=>s+(Number(e.amount)||0),0);
  const allTimeTotal = expenses.reduce((s,e)=>s+(Number(e.amount)||0),0);

  const StatBlock = ({label, value, unit, sub, color}) => (
    <div style={{background:T.surface,borderRadius:14,padding:16,border:`1px solid ${T.line}`}}>
      <div style={{fontSize:10,fontWeight:700,color:T.textMuted,marginBottom:8,letterSpacing:"0.08em"}}>{label}</div>
      <div style={{fontSize:28,fontWeight:900,color:color||T.text,letterSpacing:"-0.02em",fontVariantNumeric:"tabular-nums"}}>
        {value??<span style={{color:T.textMuted,fontSize:20}}>—</span>}
        {value&&unit&&<span style={{fontSize:14,fontWeight:600,color:T.textSub,marginLeft:4}}>{unit}</span>}
      </div>
      {sub&&<div style={{fontSize:11,color:T.textMuted,marginTop:4}}>{sub}</div>}
    </div>
  );

  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:10}}>
        <StatBlock label="勝率" value={winRate!=null?winRate:null} unit="%" sub={total>0?`${wins}勝 ${loses}敗 / ${total}試合`:null} color={T.win}/>
        <StatBlock label="大会参加" value={matchEvs.length} unit="回" color={T.match}/>
        <StatBlock label="練習時間" value={totalMin>=60?Math.floor(totalMin/60):totalMin>0?totalMin:null} unit={totalMin>=60?"h":"min"} sub={`${practiceEvs.length}セッション`} color={T.practice}/>
        <StatBlock label="マイラケット" value={rackets.length} unit="本" color={T.accent}/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:10}}>
        <StatBlock label="今月のテニス代" value={monthTotal>0?`¥${monthTotal.toLocaleString()}`:null} sub={`${monthExpenses.length}件`} color="#facc15"/>
        <StatBlock label="累計テニス代" value={allTimeTotal>0?`¥${allTimeTotal.toLocaleString()}`:null} sub={`全${expenses.length}件`} color="#fb923c"/>
      </div>
      {latestGut&&(
        <div style={{background:T.surface,borderRadius:14,padding:16,border:`1px solid ${T.line}`}}>
          <div style={{fontSize:10,fontWeight:700,color:T.textMuted,marginBottom:8,letterSpacing:"0.08em"}}>LATEST STRINGING</div>
          <div style={{fontWeight:700,color:T.gut,fontSize:13}}>{latestGut.date}</div>
          <div style={{fontSize:14,color:T.text,marginTop:4,fontWeight:600}}>
            {gutDisplayName(latestGut,"mainMaker","mainModel","mainCustom")||"—"}
            {latestGut.hybrid&&<span style={{fontSize:11,color:T.textMuted}}> / ハイブリッド</span>}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── HISTORY ─────────────────────────────────────────────────────────
function HistoryView({events, rackets, onDelete}) {
  const [filter, setFilter] = useState("all");
  const filters = [["all","すべて"],["gut","ガット"],["match","大会結果"],["plan","大会予定"],["practice","練習"]];
  const filtered = events.filter(e=>filter==="all"||e.type===filter).sort((a,b)=>b.date.localeCompare(a.date));
  return (
    <div>
      <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16}}>
        {filters.map(([k,l])=>(
          <Chip key={k} active={filter===k} color={T.accent} onClick={()=>setFilter(k)}>{l}</Chip>
        ))}
      </div>
      {filtered.length===0?(
        <div style={{textAlign:"center",padding:"48px 0",color:T.textMuted}}>
          <div style={{fontSize:14}}>記録がありません</div>
        </div>
      ):(
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {filtered.map(ev=>(
            <div key={ev.id}>
              <div style={{fontSize:11,color:T.textMuted,marginBottom:5,paddingLeft:4}}>{ev.date}</div>
              <EventCard ev={ev} rackets={rackets} onDelete={onDelete}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── MAIN ────────────────────────────────────────────────────────────
function App() {
  const [events, setEvents] = useLS("tc_v3_events", []);
  const [rackets, setRackets] = useLS("tc_v3_rackets", []);
  const [expenses, setExpenses] = useLS("tc_v3_expenses", []);
  const [cur, setCur] = useState(new Date());
  const [modal, setModal] = useState(null);
  const [tab, setTab] = useState("calendar");
  const [dayModal, setDayModal] = useState(null);
  const [fabOpen, setFabOpen] = useState(false);

  const y = cur.getFullYear(), m = cur.getMonth();
  const firstDay = new Date(y,m,1).getDay();
  const daysInM = new Date(y,m+1,0).getDate();
  const cells = [...Array(firstDay).fill(null),...Array.from({length:daysInM},(_,i)=>i+1)];

  const eventsOn = d => events.filter(e=>e.date===toDateStr(y,m,d));
  const addEvent = ev => { setEvents(p=>[...p,ev]); setModal(null); setFabOpen(false); };
  const delEvent = id => {
    setEvents(p=>p.filter(e=>e.id!==id));
    setDayModal(p=>p?{...p,events:p.events.filter(e=>e.id!==id)}:null);
  };
  const addExpense = ev => { setExpenses(p=>[...p,ev]); setModal(null); setFabOpen(false); };
  const delExpense = id => setExpenses(p=>p.filter(e=>e.id!==id));

  const evBadge = ev => {
    const cfg = {
      gut:{label:gutDisplayName(ev,"mainMaker","mainModel","mainCustom")||"ガット",type:"gut"},
      match:{label:ev.name||"大会",type:"match"},
      plan:{label:ev.name||"大会予定",type:"plan"},
      practice:{label:ev.partner||"練習",type:"practice"},
    };
    return cfg[ev.type]||cfg.practice;
  };

  const tabs = [["calendar","カレンダー"],["history","履歴"],["expense","費用"],["rackets","ラケット"],["stats","統計"]];

  const fabActions = [
    {label:"ガット",color:T.gut,textColor:"#001a0a",modal:"gut"},
    {label:"大会予定",color:T.plan,textColor:"#001a2c",modal:"plan"},
    {label:"大会結果",color:T.match,textColor:"#1a0800",modal:"match"},
    {label:"練習",color:T.practice,textColor:"#fff",modal:"practice"},
    {label:"費用",color:"#facc15",textColor:"#1a1200",modal:"expense"},
  ];

  return (
    <div style={{minHeight:"100vh",background:T.bg,color:T.text,fontFamily:"'Inter','Noto Sans JP',system-ui,sans-serif",paddingBottom:100}}>

      {/* ── HEADER ── */}
      <div style={{
        background:T.bgDeep, borderBottom:`1px solid ${T.line}`,
        padding:"16px 16px 0", position:"sticky", top:0, zIndex:50,
      }}>
        <div style={{maxWidth:680,margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}}>
            <div>
              <div style={{fontSize:9,letterSpacing:"0.2em",color:T.accent,fontWeight:700,marginBottom:3}}>TENNIS LOG</div>
              <div style={{fontSize:20,fontWeight:800,color:T.text,letterSpacing:"-0.01em"}}>マイテニス手帳</div>
            </div>
            {tab==="calendar"&&(
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4}}>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <button onClick={()=>setCur(new Date(y,m-1,1))} style={{background:T.surfaceRaised,border:`1px solid ${T.line}`,borderRadius:8,color:T.textSub,width:32,height:32,cursor:"pointer",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center"}}>‹</button>
                  <span style={{fontSize:13,fontWeight:700,minWidth:80,textAlign:"center",color:T.text}}>{y}年 {m+1}月</span>
                  <button onClick={()=>setCur(new Date(y,m+1,1))} style={{background:T.surfaceRaised,border:`1px solid ${T.line}`,borderRadius:8,color:T.textSub,width:32,height:32,cursor:"pointer",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center"}}>›</button>
                </div>
                {(()=>{
                  const ms = `${y}-${pad(m+1)}`;
                  const total = [...events,...expenses].filter(e=>e.date&&e.date.startsWith(ms)&&e.amount).reduce((s,e)=>s+(Number(e.amount)||0),0);
                  return <div style={{fontSize:11,fontWeight:700,color:total>0?"#facc15":T.textMuted,letterSpacing:"0.02em"}}>¥{total.toLocaleString()}</div>;
                })()}
              </div>
            )}
          </div>
          {/* tabs */}
          <div style={{display:"flex",gap:0}}>
            {tabs.map(([k,label])=>(
              <button key={k} onClick={()=>setTab(k)} style={{
                flex:1,padding:"11px 2px",border:"none",background:"transparent",cursor:"pointer",
                fontSize:11,fontWeight:700,letterSpacing:"0.04em",
                color:tab===k?T.accent:T.textMuted,
                borderBottom:`2px solid ${tab===k?T.accent:"transparent"}`,
                transition:"all 0.2s",
              }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div style={{maxWidth:680,margin:"0 auto",padding:"16px 12px"}}>

        {/* CALENDAR */}
        {tab==="calendar"&&(
          <>
            {/* day headers */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:3,marginBottom:3}}>
              {DAYS_JP.map((d,i)=>(
                <div key={d} style={{textAlign:"center",fontSize:10,fontWeight:700,padding:"4px 0",
                  color:i===0?"#fc6565":i===6?"#60a5fa":T.textMuted}}>
                  {d}
                </div>
              ))}
            </div>

            {/* cells */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:3}}>
              {cells.map((d,i)=>{
                const dayEvs = d?eventsOn(d):[];
                const dow = i%7;
                const today = isToday(y,m,d);
                return (
                  <div key={i}
                    onClick={()=>d&&dayEvs.length>0&&setDayModal({d,events:dayEvs})}
                    style={{
                      background: d ? T.surface : "transparent",
                      border: today ? `2px solid ${T.accent}` : `1px solid ${T.line}`,
                      borderRadius:10, minHeight:80, padding:"8px 6px",
                      cursor: d&&dayEvs.length>0?"pointer":"default",
                      position:"relative",
                      // court-line signature: hairline inner top for non-today cells
                      boxShadow: !today&&d ? `inset 0 1px 0 ${T.courtLine}` : undefined,
                    }}>
                    {d&&(
                      <>
                        <div style={{
                          fontSize:11,fontWeight:today?900:500,marginBottom:3,
                          color: dow===0?"#fc6565":dow===6?"#60a5fa":today?T.accent:T.text,
                          ...(today?{
                            background:T.accent,color:"#fff",
                            width:20,height:20,borderRadius:"50%",
                            display:"flex",alignItems:"center",justifyContent:"center",
                            fontSize:10,fontWeight:900,marginBottom:4,
                          }:{}),
                        }}>{d}</div>
                        <div style={{display:"flex",flexDirection:"column",gap:2}}>
                          {dayEvs.slice(0,3).map(ev=>{
                            const b = evBadge(ev);
                            return <Badge key={ev.id} label={b.label} type={b.type}/>;
                          })}
                          {dayEvs.length>3&&<div style={{fontSize:9,color:T.textMuted}}>+{dayEvs.length-3}</div>}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            {/* legend */}
            <div style={{display:"flex",gap:8,marginTop:14,flexWrap:"wrap",justifyContent:"center"}}>
              {[["ガット","gut"],["大会結果","match"],["大会予定","plan"],["練習","practice"]].map(([label,type])=>(
                <Badge key={type} label={label} type={type}/>
              ))}
            </div>
          </>
        )}

        {tab==="history"&&<HistoryView events={events} rackets={rackets} onDelete={delEvent}/>}
        {tab==="expense"&&<ExpenseView expenses={expenses} onDelete={delExpense}/>}
        {tab==="rackets"&&<RacketManager rackets={rackets} setRackets={setRackets}/>}
        {tab==="stats"&&<StatsView events={events} rackets={rackets} expenses={expenses}/>}
      </div>

      {/* ── FAB ── */}
      <div style={{position:"fixed",bottom:24,right:20,zIndex:100}}>
        {fabOpen&&(
          <div style={{
            position:"absolute",bottom:60,right:0,
            display:"flex",flexDirection:"column",gap:8,alignItems:"flex-end",
          }}>
            {fabActions.map(a=>(
              <button key={a.modal} onClick={()=>{setModal(a.modal);setFabOpen(false);}} style={{
                background:a.color,color:a.textColor,
                border:"none",borderRadius:20,cursor:"pointer",
                padding:"9px 18px",fontSize:13,fontWeight:800,
                boxShadow:`0 4px 20px ${a.color}55`,
                whiteSpace:"nowrap",letterSpacing:"0.02em",
              }}>{a.label}</button>
            ))}
          </div>
        )}
        <button onClick={()=>setFabOpen(p=>!p)} style={{
          width:52,height:52,borderRadius:"50%",border:"none",cursor:"pointer",
          background: fabOpen ? T.surfaceRaised : T.accent,
          color:"#fff",fontSize:24,fontWeight:700,
          boxShadow: fabOpen ? "none" : `0 4px 24px ${T.accent}66`,
          transition:"all 0.2s",
          display:"flex",alignItems:"center",justifyContent:"center",
          transform: fabOpen?"rotate(45deg)":"none",
        }}>＋</button>
      </div>

      {/* ── MODALS ── */}
      {modal==="expense"&&<Modal title="費用メモ" onClose={()=>setModal(null)}><ExpenseForm onSave={addExpense} onClose={()=>setModal(null)}/></Modal>}
      {modal==="gut"&&<Modal title="ガット張り替え" onClose={()=>setModal(null)}><GutForm onSave={addEvent} onClose={()=>setModal(null)} rackets={rackets}/></Modal>}
      {modal==="match"&&<Modal title="大会結果" onClose={()=>setModal(null)} wide><TournamentForm onSave={addEvent} onClose={()=>setModal(null)} isPlan={false}/></Modal>}
      {modal==="plan"&&<Modal title="大会予定" onClose={()=>setModal(null)} wide><TournamentForm onSave={addEvent} onClose={()=>setModal(null)} isPlan={true}/></Modal>}
      {modal==="practice"&&<Modal title="練習記録" onClose={()=>setModal(null)}><PracticeForm onSave={addEvent} onClose={()=>setModal(null)}/></Modal>}

      {dayModal&&dayModal.events.length>0&&(
        <Modal title={`${m+1}月${dayModal.d}日`} onClose={()=>setDayModal(null)}>
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {dayModal.events.map(ev=><EventCard key={ev.id} ev={ev} rackets={rackets} onDelete={delEvent}/>)}
            <div style={{display:"flex",gap:8,marginTop:4,flexWrap:"wrap"}}>
              {fabActions.map(a=>(
                <button key={a.modal} onClick={()=>{setModal(a.modal);setDayModal(null);}} style={{
                  padding:"7px 14px",background:a.color,color:a.textColor,border:"none",
                  borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer",
                }}>＋{a.label}</button>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ── Mount ──────────────────────────────────────────────────────────────
const __tcRoot__ = document.getElementById('tennis-calendar-root');
if (__tcRoot__) {
  ReactDOM.createRoot(__tcRoot__).render(React.createElement(App, null));
}
