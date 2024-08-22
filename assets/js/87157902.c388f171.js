"use strict";(self.webpackChunkdocubook=self.webpackChunkdocubook||[]).push([[6276],{5091:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=a(4848),o=a(8453);const s={},c="Introducci\xf3n a React y preparaci\xf3n del entorno de desarrollo",i={id:"B\xe1sico/1-1-Introducci\xf3n a React y preparaci\xf3n del entorno de desarrollo",title:"Introducci\xf3n a React y preparaci\xf3n del entorno de desarrollo",description:"React es una biblioteca de JavaScript que nos permite construir interfaces de usuario de manera eficiente y manejable. Fue desarrollada por Facebook y se ha convertido en una de las herramientas m\xe1s populares para el desarrollo de aplicaciones web modernas. Una de sus caracter\xedsticas m\xe1s destacadas es su capacidad para construir componentes reutilizables, lo que facilita la creaci\xf3n y mantenimiento de proyectos grandes y complejos.",source:"@site/docs/1-B\xe1sico/1-1-Introducci\xf3n a React y preparaci\xf3n del entorno de desarrollo.md",sourceDirName:"1-B\xe1sico",slug:"/B\xe1sico/1-1-Introducci\xf3n a React y preparaci\xf3n del entorno de desarrollo",permalink:"/B\xe1sico/1-1-Introducci\xf3n a React y preparaci\xf3n del entorno de desarrollo",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Comenzar",permalink:"/"},next:{title:"Introducci\xf3n a JSX y expresi\xf3n de componentes en React",permalink:"/B\xe1sico/1-2-Introducci\xf3n a JSX y expresi\xf3n de componentes en React"}},d={},l=[{value:"\xbfQu\xe9 es React?",id:"qu\xe9-es-react",level:2},{value:"Ejemplo b\xe1sico de un componente en React",id:"ejemplo-b\xe1sico-de-un-componente-en-react",level:3},{value:"Preparaci\xf3n del entorno de desarrollo",id:"preparaci\xf3n-del-entorno-de-desarrollo",level:2},{value:"Requisitos previos",id:"requisitos-previos",level:3},{value:"Creaci\xf3n de una nueva aplicaci\xf3n React",id:"creaci\xf3n-de-una-nueva-aplicaci\xf3n-react",level:3},{value:"Explorando la estructura del proyecto",id:"explorando-la-estructura-del-proyecto",level:3},{value:"Modificando el primer componente",id:"modificando-el-primer-componente",level:3},{value:"M\xe1s informaci\xf3n",id:"m\xe1s-informaci\xf3n",level:2},{value:"Resumen",id:"resumen",level:2}];function t(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"introducci\xf3n-a-react-y-preparaci\xf3n-del-entorno-de-desarrollo",children:"Introducci\xf3n a React y preparaci\xf3n del entorno de desarrollo"}),"\n",(0,r.jsx)(n.p,{children:"React es una biblioteca de JavaScript que nos permite construir interfaces de usuario de manera eficiente y manejable. Fue desarrollada por Facebook y se ha convertido en una de las herramientas m\xe1s populares para el desarrollo de aplicaciones web modernas. Una de sus caracter\xedsticas m\xe1s destacadas es su capacidad para construir componentes reutilizables, lo que facilita la creaci\xf3n y mantenimiento de proyectos grandes y complejos."}),"\n",(0,r.jsx)(n.h2,{id:"qu\xe9-es-react",children:"\xbfQu\xe9 es React?"}),"\n",(0,r.jsxs)(n.p,{children:["React es una ",(0,r.jsx)(n.strong,{children:"biblioteca"})," para construir ",(0,r.jsx)(n.strong,{children:"interfaces de usuario"}),". A diferencia de otros marcos de trabajo, React se enfoca en la construcci\xf3n de componentes que puedes combinar para crear aplicaciones interactivas. Estos componentes son como bloques de construcci\xf3n que puedes reutilizar, lo que hace que el desarrollo sea m\xe1s \xe1gil y menos propenso a errores."]}),"\n",(0,r.jsx)(n.h3,{id:"ejemplo-b\xe1sico-de-un-componente-en-react",children:"Ejemplo b\xe1sico de un componente en React"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"// Definimos un componente simple que muestra un saludo\nfunction Saludo() {\n  return <h1>\xa1Hola, mundo!</h1>; // Retornamos un encabezado con el saludo\n}\n\n// Usamos el componente en nuestra aplicaci\xf3n\nfunction App() {\n  return (\n    <div>\n      <Saludo /> {/* Aqu\xed usamos el componente Saludo */}\n    </div>\n  );\n}\n\nexport default App; // Exportamos el componente para usarlo en otros archivos\n"})}),"\n",(0,r.jsxs)(n.p,{children:["En este ejemplo, ",(0,r.jsx)(n.code,{children:"Saludo"})," es un ",(0,r.jsx)(n.strong,{children:"componente funcional"})," que retorna un encabezado (",(0,r.jsx)(n.code,{children:"<h1>"}),") con un mensaje. Luego, usamos este componente dentro de otro llamado ",(0,r.jsx)(n.code,{children:"App"}),". ",(0,r.jsx)(n.strong,{children:"Cada componente en React debe retornar un elemento JSX"})," (que veremos m\xe1s adelante en detalle), que es la forma en la que React define el contenido que se mostrar\xe1 en la pantalla."]}),"\n",(0,r.jsx)(n.h2,{id:"preparaci\xf3n-del-entorno-de-desarrollo",children:"Preparaci\xf3n del entorno de desarrollo"}),"\n",(0,r.jsx)(n.p,{children:"Para empezar a trabajar con React, necesitamos preparar nuestro entorno de desarrollo. A continuaci\xf3n, te guiar\xe9 paso a paso en la configuraci\xf3n."}),"\n",(0,r.jsx)(n.h3,{id:"requisitos-previos",children:"Requisitos previos"}),"\n",(0,r.jsx)(n.p,{children:"Antes de comenzar, aseg\xfarate de tener instalado en tu computadora:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Node.js"}),": Es un entorno de ejecuci\xf3n para JavaScript que tambi\xe9n incluye npm, el gestor de paquetes que usaremos para instalar React. Puedes descargar Node.js desde ",(0,r.jsx)(n.a,{href:"https://nodejs.org/",children:"su sitio oficial"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Editor de c\xf3digo"}),": Aunque puedes usar cualquier editor de texto, te recomiendo ",(0,r.jsx)(n.strong,{children:"Visual Studio Code"})," por sus caracter\xedsticas amigables con el desarrollo en JavaScript y React. Puedes descargarlo desde ",(0,r.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"su sitio web"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"creaci\xf3n-de-una-nueva-aplicaci\xf3n-react",children:"Creaci\xf3n de una nueva aplicaci\xf3n React"}),"\n",(0,r.jsxs)(n.p,{children:["La forma m\xe1s sencilla de crear un nuevo proyecto en React es utilizando la herramienta ",(0,r.jsx)(n.code,{children:"create-react-app"}),", que configura por ti todo lo necesario para empezar a programar."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Abre una terminal"})," y ejecuta el siguiente comando para instalar ",(0,r.jsx)(n.code,{children:"create-react-app"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx create-react-app mi-primera-app\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Aqu\xed, ",(0,r.jsx)(n.code,{children:"mi-primera-app"})," es el nombre de tu proyecto. Puedes cambiarlo por cualquier nombre que prefieras."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Navega al directorio del proyecto"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd mi-primera-app\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Inicia la aplicaci\xf3n"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm start\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Este comando iniciar\xe1 un servidor de desarrollo y abrir\xe1 tu nueva aplicaci\xf3n en el navegador. Por defecto, se abrir\xe1 en ",(0,r.jsx)(n.code,{children:"http://localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"explorando-la-estructura-del-proyecto",children:"Explorando la estructura del proyecto"}),"\n",(0,r.jsx)(n.p,{children:"Despu\xe9s de crear tu aplicaci\xf3n React, ver\xe1s que se ha generado una estructura de carpetas y archivos. Vamos a explorar brevemente los m\xe1s importantes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"public/"}),": Contiene el archivo ",(0,r.jsx)(n.code,{children:"index.html"})," que es el punto de entrada de tu aplicaci\xf3n. React se montar\xe1 dentro de este archivo."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"src/"}),": Aqu\xed es donde se encuentra todo el c\xf3digo de tu aplicaci\xf3n. Los archivos m\xe1s relevantes son:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"index.js"}),": El archivo donde React se inicializa y renderiza tu componente principal (",(0,r.jsx)(n.code,{children:"App"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"App.js"}),": Este es el componente principal que se genera por defecto y desde donde se compone tu aplicaci\xf3n."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"modificando-el-primer-componente",children:"Modificando el primer componente"}),"\n",(0,r.jsx)(n.p,{children:"Vamos a hacer una peque\xf1a modificaci\xf3n para que veas c\xf3mo React actualiza la interfaz en tiempo real."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Abre el archivo ",(0,r.jsx)(n.code,{children:"src/App.js"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Cambia el contenido de ",(0,r.jsx)(n.code,{children:"return"})," en el componente ",(0,r.jsx)(n.code,{children:"App"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"function App() {\n  return (\n    <div>\n      <h1>Mi primera aplicaci\xf3n en React</h1>\n      <p>\xa1Estoy aprendiendo a construir interfaces con React!</p>\n    </div>\n  );\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Guarda los cambios y observa c\xf3mo tu navegador se actualiza autom\xe1ticamente con el nuevo contenido."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"m\xe1s-informaci\xf3n",children:"M\xe1s informaci\xf3n"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"JSX"}),": Un lenguaje de marcado que combina JavaScript con HTML."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Componentes"}),": Bloques reutilizables que definen partes de la interfaz de usuario en React."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Node.js"}),": Entorno de ejecuci\xf3n de JavaScript fuera del navegador."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"npx"}),": Comando de npm que ejecuta paquetes sin necesidad de instalarlos globalmente."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"resumen",children:"Resumen"}),"\n",(0,r.jsxs)(n.p,{children:["React es una poderosa herramienta para construir interfaces de usuario a partir de componentes reutilizables. Preparar tu entorno de desarrollo es sencillo con ",(0,r.jsx)(n.code,{children:"create-react-app"}),", que te permite comenzar a programar de inmediato. Entender la estructura b\xe1sica de un proyecto en React es crucial para empezar a desarrollar aplicaciones web din\xe1micas y modernas."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>i});var r=a(6540);const o={},s=r.createContext(o);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);