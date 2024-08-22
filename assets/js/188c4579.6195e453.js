"use strict";(self.webpackChunkdocubook=self.webpackChunkdocubook||[]).push([[4638],{1642:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>t,toc:()=>l});var i=o(4848),s=o(8453);const r={},a="Emotion",t={id:"Estilo/9-2-Emotion",title:"Emotion",description:"\xbfQu\xe9 es Emotion?",source:"@site/docs/9-Estilo/9-2-Emotion.md",sourceDirName:"9-Estilo",slug:"/Estilo/9-2-Emotion",permalink:"/Estilo/9-2-Emotion",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Estilo en l\xednea",permalink:"/Estilo/9-1-Estilo en l\xednea"},next:{title:"Styled-Components",permalink:"/Estilo/9-3-Styled-Components"}},c={},l=[{value:"\xbfQu\xe9 es Emotion?",id:"qu\xe9-es-emotion",level:2},{value:"\xbfPor qu\xe9 usar Emotion?",id:"por-qu\xe9-usar-emotion",level:3},{value:"Usando Emotion en un Componente React",id:"usando-emotion-en-un-componente-react",level:2},{value:"Ejemplo 1: Estilos B\xe1sicos en un Componente",id:"ejemplo-1-estilos-b\xe1sicos-en-un-componente",level:3},{value:"Explicaci\xf3n del C\xf3digo",id:"explicaci\xf3n-del-c\xf3digo",level:3},{value:"Ejemplo 2: Estilos Din\xe1micos con Props",id:"ejemplo-2-estilos-din\xe1micos-con-props",level:3},{value:"Explicaci\xf3n del C\xf3digo",id:"explicaci\xf3n-del-c\xf3digo-1",level:3},{value:"Integraci\xf3n con Temas",id:"integraci\xf3n-con-temas",level:3},{value:"Explicaci\xf3n del C\xf3digo",id:"explicaci\xf3n-del-c\xf3digo-2",level:3},{value:"M\xe1s informaci\xf3n",id:"m\xe1s-informaci\xf3n",level:2},{value:"Resumen",id:"resumen",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"emotion",children:"Emotion"}),"\n",(0,i.jsx)(n.h2,{id:"qu\xe9-es-emotion",children:"\xbfQu\xe9 es Emotion?"}),"\n",(0,i.jsx)(n.p,{children:"Emotion es una popular librer\xeda de JavaScript utilizada en React para aplicar estilos en l\xednea (CSS-in-JS) de manera eficiente y din\xe1mica. A diferencia del enfoque tradicional de CSS, donde los estilos se separan del c\xf3digo JavaScript, Emotion permite escribir estilos directamente dentro de los componentes, proporcionando una mayor flexibilidad y mantenibilidad en el desarrollo de aplicaciones modernas."}),"\n",(0,i.jsx)(n.h3,{id:"por-qu\xe9-usar-emotion",children:"\xbfPor qu\xe9 usar Emotion?"}),"\n",(0,i.jsx)(n.p,{children:"Emotion es una excelente herramienta porque combina lo mejor de ambos mundos: la simplicidad de escribir CSS con la potencia de JavaScript. Aqu\xed te dejo algunas razones para considerar Emotion en tus proyectos:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Estilos Din\xe1micos:"})," Puedes cambiar los estilos en funci\xf3n del estado o las props de un componente."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Mejor Rendimiento:"}),' Genera clases optimizadas y utiliza el concepto de "CSS-in-JS" para reducir la cantidad de CSS cargado.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Compatibilidad:"})," Emotion funciona perfectamente con cualquier sistema de dise\xf1o o framework de UI."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Facilidad de Uso:"})," Con una sintaxis amigable y componentes f\xe1ciles de escribir, es ideal para proyectos de cualquier tama\xf1o."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"usando-emotion-en-un-componente-react",children:"Usando Emotion en un Componente React"}),"\n",(0,i.jsx)(n.p,{children:"Para empezar a usar Emotion en React, primero debes instalar la librer\xeda en tu proyecto. Puedes hacerlo con el siguiente comando:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install @emotion/react\n"})}),"\n",(0,i.jsx)(n.p,{children:"Una vez instalada, puedes comenzar a aplicar estilos a tus componentes. Aqu\xed te muestro c\xf3mo:"}),"\n",(0,i.jsx)(n.h3,{id:"ejemplo-1-estilos-b\xe1sicos-en-un-componente",children:"Ejemplo 1: Estilos B\xe1sicos en un Componente"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"/** @jsxImportSource @emotion/react */\nimport { css } from '@emotion/react';\n\n// Definimos un estilo b\xe1sico para un bot\xf3n\nconst estiloBoton = css`\n  background-color: #6200ea;\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 16px;\n  &:hover {\n    background-color: #3700b3;\n  }\n`;\n\nfunction Boton() {\n  return (\n    // Aplicamos el estilo usando la sintaxis de Emotion\n    <button css={estiloBoton}>\n      Haz clic aqu\xed\n    </button>\n  );\n}\n\nexport default Boton;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"explicaci\xf3n-del-c\xf3digo",children:"Explicaci\xf3n del C\xf3digo"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"css"})}),": Esta funci\xf3n se importa de ",(0,i.jsx)(n.code,{children:"@emotion/react"})," y se utiliza para definir estilos CSS como si estuvieras escribi\xe9ndolos en un archivo CSS, pero directamente dentro del archivo JS."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"@jsxImportSource @emotion/react"})}),": Esta l\xednea es necesaria para que Emotion funcione correctamente con la sintaxis de JSX."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"&:hover"})}),": Define un estilo que se aplicar\xe1 cuando el usuario pase el cursor sobre el bot\xf3n."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ejemplo-2-estilos-din\xe1micos-con-props",children:"Ejemplo 2: Estilos Din\xe1micos con Props"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"/** @jsxImportSource @emotion/react */\nimport { css } from '@emotion/react';\n\nfunction Boton({ esPrimario }) {\n  return (\n    <button\n      css={css`\n        background-color: ${esPrimario ? '#6200ea' : '#03dac6'};\n        color: white;\n        padding: 10px 20px;\n        border: none;\n        border-radius: 5px;\n        cursor: pointer;\n        font-size: 16px;\n        &:hover {\n          background-color: ${esPrimario ? '#3700b3' : '#018786'};\n        }\n      `}\n    >\n      {esPrimario ? 'Bot\xf3n Primario' : 'Bot\xf3n Secundario'}\n    </button>\n  );\n}\n\nexport default Boton;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"explicaci\xf3n-del-c\xf3digo-1",children:"Explicaci\xf3n del C\xf3digo"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"esPrimario"})}),": Es una prop que decide si el bot\xf3n debe ser primario (con un color p\xfarpura) o secundario (con un color verde)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Interpolaci\xf3n de Estilos"}),": Usamos ",(0,i.jsx)(n.code,{children:"${}"})," dentro del ",(0,i.jsx)(n.code,{children:"css"})," para aplicar estilos de manera condicional basados en la prop ",(0,i.jsx)(n.code,{children:"esPrimario"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"integraci\xf3n-con-temas",children:"Integraci\xf3n con Temas"}),"\n",(0,i.jsx)(n.p,{children:"Emotion tambi\xe9n permite trabajar con temas, lo que facilita la gesti\xf3n de estilos globales en aplicaciones grandes. Aqu\xed un peque\xf1o ejemplo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"/** @jsxImportSource @emotion/react */\nimport { ThemeProvider } from '@emotion/react';\n\nconst tema = {\n  colores: {\n    primario: '#6200ea',\n    secundario: '#03dac6',\n  },\n  tipografia: {\n    tama\xf1o: '16px',\n  },\n};\n\nfunction Boton() {\n  return (\n    <ThemeProvider theme={tema}>\n      <button\n        css={(theme) => css`\n          background-color: ${theme.colores.primario};\n          color: white;\n          padding: 10px 20px;\n          border: none;\n          border-radius: 5px;\n          cursor: pointer;\n          font-size: ${theme.tipografia.tama\xf1o};\n          &:hover {\n            background-color: ${theme.colores.secundario};\n          }\n        `}\n      >\n        Bot\xf3n Tem\xe1tico\n      </button>\n    </ThemeProvider>\n  );\n}\n\nexport default Boton;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"explicaci\xf3n-del-c\xf3digo-2",children:"Explicaci\xf3n del C\xf3digo"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"ThemeProvider"})}),": Envuelve el componente y proporciona el tema definido a todos los componentes hijos."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"theme"})}),": Es el objeto que contiene los valores de colores, tipograf\xedas, y otros estilos que pueden ser reutilizados en diferentes componentes."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"m\xe1s-informaci\xf3n",children:"M\xe1s informaci\xf3n"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"CSS-in-JS"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Optimizaci\xf3n de rendimiento en React"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Gesti\xf3n de temas en aplicaciones React"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Estilizaci\xf3n din\xe1mica en componentes de React"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"resumen",children:"Resumen"}),"\n",(0,i.jsx)(n.p,{children:"Emotion es una herramienta poderosa para aplicar estilos en React de manera eficiente y din\xe1mica. Permite escribir CSS directamente dentro de tus componentes usando JavaScript, lo que facilita la creaci\xf3n de estilos din\xe1micos y temas reutilizables. Emotion no solo mejora el rendimiento, sino que tambi\xe9n proporciona una gran flexibilidad para personalizar la apariencia de tu aplicaci\xf3n, todo mientras mantiene el c\xf3digo limpio y organizado."})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>t});var i=o(6540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);