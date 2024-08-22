"use strict";(self.webpackChunkdocubook=self.webpackChunkdocubook||[]).push([[1644],{6771:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var s=a(4848),o=a(8453);const t={},i="Uso de etiquetas auto-cerradas",r={id:"Componente/5-2-Uso de etiquetas auto-cerradas",title:"Uso de etiquetas auto-cerradas",description:"\xbfQu\xe9 son las etiquetas auto-cerradas?",source:"@site/docs/5-Componente/5-2-Uso de etiquetas auto-cerradas.md",sourceDirName:"5-Componente",slug:"/Componente/5-2-Uso de etiquetas auto-cerradas",permalink:"/Componente/5-2-Uso de etiquetas auto-cerradas",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n a componentes y buenos nombres para componentes",permalink:"/Componente/5-1-Introducci\xf3n a componentes y buenos nombres para componentes"},next:{title:"Casos en los que se necesita Fragment y cu\xe1ndo no",permalink:"/Componente/5-3-Casos en los que se necesita Fragment y cu\xe1ndo no"}},c={},d=[{value:"\xbfQu\xe9 son las etiquetas auto-cerradas?",id:"qu\xe9-son-las-etiquetas-auto-cerradas",level:2},{value:"Ejemplos b\xe1sicos de etiquetas auto-cerradas",id:"ejemplos-b\xe1sicos-de-etiquetas-auto-cerradas",level:2},{value:"Explicaci\xf3n del c\xf3digo:",id:"explicaci\xf3n-del-c\xf3digo",level:3},{value:"Puntos clave a tener en cuenta",id:"puntos-clave-a-tener-en-cuenta",level:2},{value:"M\xe1s informaci\xf3n",id:"m\xe1s-informaci\xf3n",level:2},{value:"Resumen",id:"resumen",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"uso-de-etiquetas-auto-cerradas",children:"Uso de etiquetas auto-cerradas"}),"\n",(0,s.jsx)(n.h2,{id:"qu\xe9-son-las-etiquetas-auto-cerradas",children:"\xbfQu\xe9 son las etiquetas auto-cerradas?"}),"\n",(0,s.jsxs)(n.p,{children:["En HTML y JSX, una ",(0,s.jsx)(n.strong,{children:"etiqueta auto-cerrada"})," es aquella que no requiere una etiqueta de cierre separada. Estas etiquetas se usan com\xfanmente para elementos que no tienen contenido o hijos. Por ejemplo, en HTML, la etiqueta ",(0,s.jsx)(n.code,{children:"<img>"})," es auto-cerrada porque no contiene texto ni otros elementos dentro de ella."]}),"\n",(0,s.jsxs)(n.p,{children:["En JSX, el concepto es similar, pero con una sintaxis ligeramente diferente. Mientras que en HTML podr\xedamos escribir ",(0,s.jsx)(n.code,{children:"<img>"})," o ",(0,s.jsx)(n.code,{children:"<img />"}),", en JSX siempre debemos escribirla como ",(0,s.jsx)(n.code,{children:"<img />"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplos-b\xe1sicos-de-etiquetas-auto-cerradas",children:"Ejemplos b\xe1sicos de etiquetas auto-cerradas"}),"\n",(0,s.jsx)(n.p,{children:"Veamos c\xf3mo funcionan las etiquetas auto-cerradas con algunos ejemplos simples en JSX:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'// Un componente React que muestra una imagen y un salto de l\xednea\n\nimport React from \'react\';\n\nfunction MiComponente() {\n  return (\n    <div>\n      {/* Etiqueta auto-cerrada para una imagen */}\n      <img src="ruta/a/imagen.jpg" alt="Descripci\xf3n de la imagen" />\n\n      {/* Etiqueta auto-cerrada para un salto de l\xednea */}\n      <br />\n\n      {/* Etiqueta auto-cerrada para un input de texto */}\n      <input type="text" placeholder="Escribe aqu\xed" />\n    </div>\n  );\n}\n\nexport default MiComponente;\n'})}),"\n",(0,s.jsx)(n.h3,{id:"explicaci\xf3n-del-c\xf3digo",children:"Explicaci\xf3n del c\xf3digo:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"<img />"})}),": Muestra una imagen. Como no tiene contenido interno, usamos una etiqueta auto-cerrada."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"<br />"})}),": Inserta un salto de l\xednea. De nuevo, no tiene contenido, por lo que se usa como auto-cerrada."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"<input />"})}),": Define un campo de entrada de texto. Como no tiene etiquetas hijas, es ideal para una etiqueta auto-cerrada."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"puntos-clave-a-tener-en-cuenta",children:"Puntos clave a tener en cuenta"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"JSX requiere la barra inclinada al final"}),": A diferencia de HTML, donde se puede omitir la barra inclinada al final de una etiqueta auto-cerrada, en JSX es obligatorio usarla. Esto significa que siempre debes escribir etiquetas como ",(0,s.jsx)(n.code,{children:"<img />"})," y no simplemente ",(0,s.jsx)(n.code,{children:"<img>"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Simplicidad y claridad"}),": El uso de etiquetas auto-cerradas ayuda a mantener el c\xf3digo limpio y f\xe1cil de leer, especialmente cuando se trabaja con elementos que no requieren un contenido interno."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Compatibilidad con HTML5"}),": Aunque en HTML5 es v\xe1lido no cerrar expl\xedcitamente algunas etiquetas auto-cerradas, en JSX esto es un error. As\xed que es una buena pr\xe1ctica acostumbrarse a siempre cerrarlas correctamente."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"m\xe1s-informaci\xf3n",children:"M\xe1s informaci\xf3n"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"JSX"}),": C\xf3mo funciona y en qu\xe9 se diferencia de HTML."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"React Components"}),": Creaci\xf3n y uso de componentes en React."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Buenas pr\xe1cticas de codificaci\xf3n"}),": C\xf3mo mantener un c\xf3digo React limpio y legible."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"resumen",children:"Resumen"}),"\n",(0,s.jsx)(n.p,{children:"Las etiquetas auto-cerradas en JSX son esenciales para trabajar con elementos que no tienen contenido interno, como im\xe1genes o campos de entrada. Es crucial recordar que en JSX estas etiquetas deben incluir una barra inclinada al final, algo obligatorio para evitar errores en el c\xf3digo. Usar etiquetas auto-cerradas correctamente no solo mejora la legibilidad, sino que tambi\xe9n asegura la compatibilidad con las reglas de JSX."})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>r});var s=a(6540);const o={},t=s.createContext(o);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);