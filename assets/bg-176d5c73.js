var s={async all(){try{const o=await(await fetch("http://localhost:3001/book/all",{method:"GET",headers:{"Content-type":"application/json"}})).json();return o!=null&&o.length?o:[]}catch(t){console.log(t)}}};const a="/Leorio_shop.github.io/assets/bg-b4eb9a52.svg";export{a as _,s as b};
