"use strict";(self.webpackChunkdocubook=self.webpackChunkdocubook||[]).push([[1371],{6049:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var i=o(4848),r=o(8453);const t={},a="Declaraci\xf3n de componentes internos dentro de un componente",s={id:"Componente/5-5-Declaraci\xf3n de componentes internos dentro de un componente",title:"Declaraci\xf3n de componentes internos dentro de un componente",description:"Cuando trabajamos con React, a menudo necesitamos dividir nuestro c\xf3digo en partes m\xe1s peque\xf1as y manejables. Una forma efectiva de hacerlo es declarar componentes internos dentro de un componente m\xe1s grande. Este enfoque nos permite encapsular l\xf3gica espec\xedfica y mantener el c\xf3digo organizado, adem\xe1s de reducir el alcance de los componentes que no necesitan ser reutilizables en toda la aplicaci\xf3n.",source:"@site/docs/5-Componente/5-5-Declaraci\xf3n de componentes internos dentro de un componente.md",sourceDirName:"5-Componente",slug:"/Componente/5-5-Declaraci\xf3n de componentes internos dentro de un componente",permalink:"/Componente/5-5-Declaraci\xf3n de componentes internos dentro de un componente",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Retorno de JSX desde una funci\xf3n de componente",permalink:"/Componente/5-4-Retorno de JSX desde una funci\xf3n de componente"},next:{title:"Configuraci\xf3n de displayName",permalink:"/Componente/5-6-Configuraci\xf3n de displayName"}},c={},d=[{value:"\xbfQu\xe9 son los componentes internos?",id:"qu\xe9-son-los-componentes-internos",level:2},{value:"Ejemplo simple",id:"ejemplo-simple",level:3},{value:"Puntos clave a considerar",id:"puntos-clave-a-considerar",level:3},{value:"Cu\xe1ndo evitar componentes internos",id:"cu\xe1ndo-evitar-componentes-internos",level:3},{value:"M\xe1s informaci\xf3n",id:"m\xe1s-informaci\xf3n",level:2},{value:"Resumen",id:"resumen",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"declaraci\xf3n-de-componentes-internos-dentro-de-un-componente",children:"Declaraci\xf3n de componentes internos dentro de un componente"}),"\n",(0,i.jsx)(n.p,{children:"Cuando trabajamos con React, a menudo necesitamos dividir nuestro c\xf3digo en partes m\xe1s peque\xf1as y manejables. Una forma efectiva de hacerlo es declarar componentes internos dentro de un componente m\xe1s grande. Este enfoque nos permite encapsular l\xf3gica espec\xedfica y mantener el c\xf3digo organizado, adem\xe1s de reducir el alcance de los componentes que no necesitan ser reutilizables en toda la aplicaci\xf3n."}),"\n",(0,i.jsx)(n.h2,{id:"qu\xe9-son-los-componentes-internos",children:"\xbfQu\xe9 son los componentes internos?"}),"\n",(0,i.jsx)(n.p,{children:'En React, un componente interno es simplemente un componente que se define dentro de otro componente. Esto se puede hacer cuando el componente interno es relevante \xfanicamente en el contexto del componente externo y no necesita ser utilizado en otros lugares de la aplicaci\xf3n. Declarar componentes internos ayuda a evitar la "contaminaci\xf3n" del espacio global de nombres y a mantener la claridad en el c\xf3digo.'}),"\n",(0,i.jsx)(n.h3,{id:"ejemplo-simple",children:"Ejemplo simple"}),"\n",(0,i.jsxs)(n.p,{children:["Imaginemos que estamos creando un componente ",(0,i.jsx)(n.code,{children:"PerfilUsuario"})," que muestra la informaci\xf3n de un usuario. Dentro de este componente, queremos mostrar una lista de hobbies, pero esta lista no ser\xe1 \xfatil fuera de este contexto. Por lo tanto, podemos crear un componente ",(0,i.jsx)(n.code,{children:"ListaHobbies"})," dentro de ",(0,i.jsx)(n.code,{children:"PerfilUsuario"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'// Componente principal PerfilUsuario\nfunction PerfilUsuario({ nombre, edad, hobbies }) {\n  // Componente interno para listar hobbies\n  function ListaHobbies({ hobbies }) {\n    return (\n      <ul>\n        {hobbies.map((hobby, index) => (\n          <li key={index}>{hobby}</li>\n        ))}\n      </ul>\n    );\n  }\n\n  return (\n    <div>\n      <h1>{nombre}</h1>\n      <p>Edad: {edad}</p>\n      <h2>Hobbies</h2>\n      {/* Uso del componente interno ListaHobbies */}\n      <ListaHobbies hobbies={hobbies} />\n    </div>\n  );\n}\n\n// Ejemplo de uso del componente PerfilUsuario\nconst usuario = {\n  nombre: "Juan",\n  edad: 30,\n  hobbies: ["Leer", "Correr", "Programar"],\n};\n\n<PerfilUsuario {...usuario} />;\n'})}),"\n",(0,i.jsx)(n.h3,{id:"puntos-clave-a-considerar",children:"Puntos clave a considerar"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Encapsulaci\xf3n"}),": Declarar un componente dentro de otro lo encapsula dentro del alcance del componente externo, manteniendo el c\xf3digo m\xe1s modular y organizado."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Evitar la reutilizaci\xf3n innecesaria"}),": Si un componente no va a ser reutilizado en diferentes partes de la aplicaci\xf3n, mantenerlo como un componente interno es una buena pr\xe1ctica."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Desempe\xf1o"}),": Un punto importante a tener en cuenta es que declarar componentes internos puede, en algunos casos, tener un impacto en el rendimiento, especialmente si el componente externo se renderiza con frecuencia. Cada vez que se renderiza el componente externo, se redefinir\xe1n los componentes internos, lo que podr\xeda ser ineficiente. Para evitar esto, se puede definir el componente interno fuera de la funci\xf3n si se requiere una optimizaci\xf3n."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"cu\xe1ndo-evitar-componentes-internos",children:"Cu\xe1ndo evitar componentes internos"}),"\n",(0,i.jsx)(n.p,{children:"Aunque declarar componentes internos tiene sus ventajas, es importante saber cu\xe1ndo evitarlos. Si el componente tiene potencial de ser reutilizado en otras partes de la aplicaci\xf3n, es mejor declararlo de manera independiente para promover la reutilizaci\xf3n y la consistencia en el c\xf3digo."}),"\n",(0,i.jsx)(n.h2,{id:"m\xe1s-informaci\xf3n",children:"M\xe1s informaci\xf3n"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Componentes funcionales en React"}),"\n",(0,i.jsx)(n.li,{children:"Gesti\xf3n del ciclo de vida con Hooks"}),"\n",(0,i.jsx)(n.li,{children:"Buenas pr\xe1cticas en la organizaci\xf3n de componentes en React"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"resumen",children:"Resumen"}),"\n",(0,i.jsx)(n.p,{children:"Declarar componentes internos dentro de un componente es una pr\xe1ctica \xfatil para mantener el c\xf3digo modular y organizado, especialmente cuando el componente interno no necesita ser reutilizado fuera del contexto del componente externo. Sin embargo, es importante ser consciente de los posibles impactos en el rendimiento y evitar este enfoque si el componente interno tiene potencial de reutilizaci\xf3n."})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>s});var i=o(6540);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);