const tb=document.querySelector("#grid tbody");
let doneCount=0;
G.forEach(([pos,cols],r)=>{
  const tr=document.createElement("tr");
  tr.innerHTML=`<th>${pos}</th>`;
  const gd=document.createElement("td");gd.className="gonecol";
  const gl=DONE[pos]||[];
  if(!gl.length){gd.classList.add("empty");gd.textContent="–";}
  else{
    const d=document.createElement("div");d.className="names";
    gl.forEach(n=>{const s=document.createElement("span");s.className="p out done";s.textContent=n;d.appendChild(s);doneCount++;});
    gd.appendChild(d);
  }
  tr.appendChild(gd);
  cols.forEach((list,c)=>{
    const td=document.createElement("td");
    if(!list.length){td.className="empty";td.textContent="–";}
    else{
      const d=document.createElement("div");d.className="names";
      list.forEach((n,i)=>{
        const commit=n.startsWith("*");const leaving=n.startsWith("!");
        const name=(commit||leaving)?n.slice(1):n;
        const b=document.createElement("button");b.type="button";
        b.id=`p-${r}-${c}-${i}`;
        b.className="p"+(commit?" commit":"")+(leaving?" out":"");
        b.dataset.r=r;b.dataset.c=c;
        if(leaving)b.dataset.def="1";
        b.textContent=name;
        b.setAttribute("aria-pressed",leaving?"true":"false");
        b.addEventListener("click",()=>{b.classList.toggle("out");b.setAttribute("aria-pressed",b.classList.contains("out"));calc();});
        d.appendChild(b);
      });
      td.appendChild(d);
    }
    tr.appendChild(td);
  });
  const t=document.createElement("td");t.className="tot";tr.appendChild(t);
  tb.appendChild(tr);
});
function calc(){
  const colT=[0,0,0,0,0];let all=0,out=0;
  [...tb.rows].forEach((tr,r)=>{
    let rt=0;
    tr.querySelectorAll(".p:not(.done)").forEach(p=>{
      if(p.classList.contains("out")){out++;return;}
      rt++;colT[+p.dataset.c]++;
    });
    const t=tr.querySelector(".tot");t.textContent=rt;
    const pos=G[r][0];
    t.classList.toggle("low",rt<=3 && !["K","P"].includes(pos) || (pos==="LS"&&rt===0));
    all+=rt;
  });
  colT.forEach((v,i)=>document.getElementById("t"+i).textContent=v);
  document.getElementById("t5").textContent=all;
  document.getElementById("tg").textContent=doneCount;
  document.getElementById("sTotal").textContent=all;
  document.getElementById("sOut").textContent=out;
}
document.getElementById("reset").addEventListener("click",()=>{document.querySelectorAll(".p:not(.done)").forEach(p=>{const d=!!p.dataset.def;p.classList.toggle("out",d);p.setAttribute("aria-pressed",d);});calc();});
calc();
