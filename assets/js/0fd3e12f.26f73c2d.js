"use strict";(self.webpackChunkdocubook=self.webpackChunkdocubook||[]).push([[4356],{3209:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var s=o(4848),a=o(8453);const l={},i="M\xf3dulos CSS",t={id:"Estilo/9-4-M\xf3dulos CSS",title:"M\xf3dulos CSS",description:"Cuando trabajamos con React, uno de los desaf\xedos m\xe1s comunes es la gesti\xf3n de estilos en componentes, especialmente cuando se trata de evitar conflictos de nombres de clases y mantener el c\xf3digo organizado. Aqu\xed es donde los M\xf3dulos CSS se convierten en una herramienta invaluable. Los M\xf3dulos CSS permiten escribir estilos que son autom\xe1ticamente locales al componente en el que se usan, lo que significa que no necesitamos preocuparnos por colisiones de nombres en todo nuestro proyecto.",source:"@site/docs/9-Estilo/9-4-M\xf3dulos CSS.md",sourceDirName:"9-Estilo",slug:"/Estilo/9-4-M\xf3dulos CSS",permalink:"/Estilo/9-4-M\xf3dulos CSS",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Styled-Components",permalink:"/Estilo/9-3-Styled-Components"},next:{title:"Uso de la librer\xeda clsx",permalink:"/Estilo/9-5-Uso de la librer\xeda clsx"}},r={},c=[{value:"\xbfQu\xe9 es un M\xf3dulo CSS?",id:"qu\xe9-es-un-m\xf3dulo-css",level:2},{value:"Ventajas de usar M\xf3dulos CSS",id:"ventajas-de-usar-m\xf3dulos-css",level:3},{value:"C\xf3mo usar M\xf3dulos CSS en React",id:"c\xf3mo-usar-m\xf3dulos-css-en-react",level:2},{value:"Paso 1: Crear el archivo del M\xf3dulo CSS",id:"paso-1-crear-el-archivo-del-m\xf3dulo-css",level:3},{value:"Paso 2: Importar y aplicar los estilos en el componente",id:"paso-2-importar-y-aplicar-los-estilos-en-el-componente",level:3},{value:"Paso 3: Usar el componente en tu aplicaci\xf3n",id:"paso-3-usar-el-componente-en-tu-aplicaci\xf3n",level:3},{value:"Detalles a tener en cuenta",id:"detalles-a-tener-en-cuenta",level:3},{value:"M\xe1s informaci\xf3n",id:"m\xe1s-informaci\xf3n",level:2},{value:"Resumen",id:"resumen",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"m\xf3dulos-css",children:"M\xf3dulos CSS"}),"\n",(0,s.jsxs)(n.p,{children:["Cuando trabajamos con React, uno de los desaf\xedos m\xe1s comunes es la gesti\xf3n de estilos en componentes, especialmente cuando se trata de evitar conflictos de nombres de clases y mantener el c\xf3digo organizado. Aqu\xed es donde los ",(0,s.jsx)(n.strong,{children:"M\xf3dulos CSS"})," se convierten en una herramienta invaluable. Los M\xf3dulos CSS permiten escribir estilos que son autom\xe1ticamente locales al componente en el que se usan, lo que significa que no necesitamos preocuparnos por colisiones de nombres en todo nuestro proyecto."]}),"\n",(0,s.jsx)(n.h2,{id:"qu\xe9-es-un-m\xf3dulo-css",children:"\xbfQu\xe9 es un M\xf3dulo CSS?"}),"\n",(0,s.jsxs)(n.p,{children:["Un ",(0,s.jsx)(n.strong,{children:"M\xf3dulo CSS"})," es simplemente un archivo ",(0,s.jsx)(n.code,{children:".css"})," que, cuando se importa en un componente de React, autom\xe1ticamente genera nombres de clases \xfanicos y espec\xedficos para ese componente. Esto permite que los estilos sean encapsulados, evitando que afecten a otros componentes, y viceversa."]}),"\n",(0,s.jsx)(n.h3,{id:"ventajas-de-usar-m\xf3dulos-css",children:"Ventajas de usar M\xf3dulos CSS"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Encapsulaci\xf3n de estilos"}),": Los estilos se aplican solo al componente donde se importan, sin riesgo de que afecten a otros componentes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Nombres de clases \xfanicos"}),": No necesitas preocuparte por colisiones de nombres en todo el proyecto."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Mantenimiento y escalabilidad"}),": Facilita la organizaci\xf3n de estilos a medida que el proyecto crece."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"c\xf3mo-usar-m\xf3dulos-css-en-react",children:"C\xf3mo usar M\xf3dulos CSS en React"}),"\n",(0,s.jsx)(n.p,{children:"Veamos un ejemplo pr\xe1ctico de c\xf3mo aplicar M\xf3dulos CSS en un proyecto de React."}),"\n",(0,s.jsx)(n.h3,{id:"paso-1-crear-el-archivo-del-m\xf3dulo-css",children:"Paso 1: Crear el archivo del M\xf3dulo CSS"}),"\n",(0,s.jsxs)(n.p,{children:["Primero, crea un archivo CSS para el componente que vas a estilizar. Por convenci\xf3n, el archivo deber\xeda tener el nombre del componente seguido de ",(0,s.jsx)(n.code,{children:".module.css"}),". Por ejemplo, si tu componente se llama ",(0,s.jsx)(n.code,{children:"Boton"}),", el archivo de estilos se llamar\xeda ",(0,s.jsx)(n.code,{children:"Boton.module.css"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"/* Boton.module.css */\n.boton {\n  background-color: #4CAF50; /* Verde */\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n.botonPrimario {\n  background-color: #008CBA; /* Azul */\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"paso-2-importar-y-aplicar-los-estilos-en-el-componente",children:"Paso 2: Importar y aplicar los estilos en el componente"}),"\n",(0,s.jsx)(n.p,{children:"Luego, en el archivo del componente React, importa el M\xf3dulo CSS y aplica las clases como propiedades del objeto importado."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"// Boton.js\nimport React from 'react';\nimport styles from './Boton.module.css';\n\nfunction Boton({ tipo, texto }) {\n  // Se usa `styles.boton` para aplicar la clase `boton` del m\xf3dulo CSS\n  // Si se pasa el tipo \"primario\", se a\xf1ade tambi\xe9n la clase `botonPrimario`\n  return (\n    <button\n      className={`${styles.boton} ${tipo === 'primario' ? styles.botonPrimario : ''}`}\n    >\n      {texto}\n    </button>\n  );\n}\n\nexport default Boton;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"paso-3-usar-el-componente-en-tu-aplicaci\xf3n",children:"Paso 3: Usar el componente en tu aplicaci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Ahora puedes usar tu componente ",(0,s.jsx)(n.code,{children:"Boton"})," en cualquier parte de tu aplicaci\xf3n, y los estilos se aplicar\xe1n correctamente sin afectar a otros elementos."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'// App.js\nimport React from \'react\';\nimport Boton from \'./Boton\';\n\nfunction App() {\n  return (\n    <div>\n      <Boton tipo="primario" texto="Bot\xf3n Primario" />\n      <Boton texto="Bot\xf3n Secundario" />\n    </div>\n  );\n}\n\nexport default App;\n'})}),"\n",(0,s.jsx)(n.h3,{id:"detalles-a-tener-en-cuenta",children:"Detalles a tener en cuenta"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Localidad de los estilos"}),": Recuerda que los nombres de clases generados a partir de los M\xf3dulos CSS son \xfanicos y espec\xedficos para cada componente. Si intentas aplicar un estilo que no est\xe1 definido en el M\xf3dulo CSS importado, el estilo no se aplicar\xe1."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Uso de clases condicionales"}),": Como en el ejemplo anterior, puedes combinar m\xfaltiples clases usando plantillas de cadenas o interpolaciones, lo que te permite aplicar estilos condicionalmente."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"m\xe1s-informaci\xf3n",children:"M\xe1s informaci\xf3n"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Encapsulaci\xf3n de estilos"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Mantenimiento de CSS en grandes proyectos"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Estilos condicionales en React"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Optimizaci\xf3n del rendimiento con CSS Modules"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"resumen",children:"Resumen"}),"\n",(0,s.jsx)(n.p,{children:"Los M\xf3dulos CSS en React son una excelente manera de mantener tus estilos organizados y libres de conflictos de nombres. Te permiten encapsular los estilos en un nivel de componente, lo que asegura que los estilos aplicados no interfieran con otros componentes. Usar M\xf3dulos CSS mejora el mantenimiento y la escalabilidad de tu c\xf3digo, especialmente en aplicaciones grandes."})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>t});var s=o(6540);const a={},l=s.createContext(a);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);