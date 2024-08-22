"use strict";(self.webpackChunkdocubook=self.webpackChunkdocubook||[]).push([[1176],{5673:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var s=o(4848),a=o(8453);const c={},i="Razones para usar componentes funcionales en lugar de componentes de clase",r={id:"B\xe1sico/1-3-Razones para usar componentes funcionales en lugar de componentes de clase",title:"Razones para usar componentes funcionales en lugar de componentes de clase",description:"Introducci\xf3n",source:"@site/docs/1-B\xe1sico/1-3-Razones para usar componentes funcionales en lugar de componentes de clase.md",sourceDirName:"1-B\xe1sico",slug:"/B\xe1sico/1-3-Razones para usar componentes funcionales en lugar de componentes de clase",permalink:"/B\xe1sico/1-3-Razones para usar componentes funcionales en lugar de componentes de clase",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n a JSX y expresi\xf3n de componentes en React",permalink:"/B\xe1sico/1-2-Introducci\xf3n a JSX y expresi\xf3n de componentes en React"},next:{title:"Pasar datos a los componentes con Props",permalink:"/B\xe1sico/1-4-Pasar datos a los componentes con Props"}},t={},l=[{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"\xbfQu\xe9 son los componentes funcionales?",id:"qu\xe9-son-los-componentes-funcionales",level:2},{value:"\xbfQu\xe9 son los componentes de clase?",id:"qu\xe9-son-los-componentes-de-clase",level:2},{value:"Razones para preferir componentes funcionales",id:"razones-para-preferir-componentes-funcionales",level:2},{value:"1. <strong>Sintaxis m\xe1s simple y concisa</strong>",id:"1-sintaxis-m\xe1s-simple-y-concisa",level:3},{value:"2. <strong>Uso de Hooks</strong>",id:"2-uso-de-hooks",level:3},{value:"3. <strong>Mejor rendimiento</strong>",id:"3-mejor-rendimiento",level:3},{value:"4. <strong>Compatibilidad con las nuevas caracter\xedsticas de React</strong>",id:"4-compatibilidad-con-las-nuevas-caracter\xedsticas-de-react",level:3},{value:"5. <strong>Facilidad de prueba y mantenimiento</strong>",id:"5-facilidad-de-prueba-y-mantenimiento",level:3},{value:"M\xe1s informaci\xf3n",id:"m\xe1s-informaci\xf3n",level:2},{value:"Resumen",id:"resumen",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"razones-para-usar-componentes-funcionales-en-lugar-de-componentes-de-clase",children:"Razones para usar componentes funcionales en lugar de componentes de clase"}),"\n",(0,s.jsx)(n.h2,{id:"introducci\xf3n",children:"Introducci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["En el desarrollo con React, existen dos formas principales de crear componentes: usando ",(0,s.jsx)(n.strong,{children:"componentes funcionales"})," o ",(0,s.jsx)(n.strong,{children:"componentes de clase"}),". Si bien ambos m\xe9todos tienen su lugar en la historia de React, hoy en d\xeda los componentes funcionales son preferidos en la mayor\xeda de los casos. Vamos a explorar las razones detr\xe1s de esta preferencia y c\xf3mo puedes beneficiarte al elegir componentes funcionales para tus proyectos."]}),"\n",(0,s.jsx)(n.h2,{id:"qu\xe9-son-los-componentes-funcionales",children:"\xbfQu\xe9 son los componentes funcionales?"}),"\n",(0,s.jsxs)(n.p,{children:["Un ",(0,s.jsx)(n.strong,{children:"componente funcional"})," es una funci\xf3n de JavaScript que recibe ",(0,s.jsx)(n.code,{children:"props"})," como argumento y retorna un elemento JSX. Este tipo de componente no tiene su propio estado interno ni m\xe9todos de ciclo de vida hasta que se introduce el Hook ",(0,s.jsx)(n.code,{children:"useState"})," y ",(0,s.jsx)(n.code,{children:"useEffect"}),", lo que ampli\xf3 significativamente su funcionalidad."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'// Ejemplo de un componente funcional simple\nfunction Saludo({ nombre }) {\n  return <h1>Hola, {nombre}!</h1>;\n}\n\n// Uso del componente\n<Saludo nombre="Ana" />\n'})}),"\n",(0,s.jsxs)(n.p,{children:["En este ejemplo, ",(0,s.jsx)(n.code,{children:"Saludo"})," es un componente funcional que simplemente recibe ",(0,s.jsx)(n.code,{children:"nombre"})," como prop y retorna un encabezado con un mensaje de saludo."]}),"\n",(0,s.jsx)(n.h2,{id:"qu\xe9-son-los-componentes-de-clase",children:"\xbfQu\xe9 son los componentes de clase?"}),"\n",(0,s.jsxs)(n.p,{children:["Los ",(0,s.jsx)(n.strong,{children:"componentes de clase"})," se basan en clases de JavaScript y, tradicionalmente, han sido la forma principal de manejar el estado y los m\xe9todos del ciclo de vida en React."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'// Ejemplo de un componente de clase\nclass Saludo extends React.Component {\n  render() {\n    return <h1>Hola, {this.props.nombre}!</h1>;\n  }\n}\n\n// Uso del componente\n<Saludo nombre="Ana" />\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Aqu\xed, ",(0,s.jsx)(n.code,{children:"Saludo"})," es un componente de clase que tambi\xe9n recibe ",(0,s.jsx)(n.code,{children:"nombre"})," como prop y retorna un encabezado con un mensaje de saludo."]}),"\n",(0,s.jsx)(n.h2,{id:"razones-para-preferir-componentes-funcionales",children:"Razones para preferir componentes funcionales"}),"\n",(0,s.jsxs)(n.h3,{id:"1-sintaxis-m\xe1s-simple-y-concisa",children:["1. ",(0,s.jsx)(n.strong,{children:"Sintaxis m\xe1s simple y concisa"})]}),"\n",(0,s.jsxs)(n.p,{children:["Los componentes funcionales son m\xe1s f\xe1ciles de leer y escribir porque se asemejan a funciones regulares de JavaScript. No necesitas lidiar con ",(0,s.jsx)(n.code,{children:"this"}),", lo cual es una de las fuentes m\xe1s comunes de errores en componentes de clase."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"// Componente funcional\nfunction Boton() {\n  return <button>Haz clic aqu\xed</button>;\n}\n\n// Componente de clase equivalente\nclass Boton extends React.Component {\n  render() {\n    return <button>Haz clic aqu\xed</button>;\n  }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"En el ejemplo anterior, puedes notar c\xf3mo la versi\xf3n funcional es m\xe1s directa y f\xe1cil de entender."}),"\n",(0,s.jsxs)(n.h3,{id:"2-uso-de-hooks",children:["2. ",(0,s.jsx)(n.strong,{children:"Uso de Hooks"})]}),"\n",(0,s.jsxs)(n.p,{children:["Los Hooks, como ",(0,s.jsx)(n.code,{children:"useState"})," y ",(0,s.jsx)(n.code,{children:"useEffect"}),", permiten a los componentes funcionales manejar el estado y el ciclo de vida de manera similar a los componentes de clase, pero con una sintaxis m\xe1s limpia y modular. Los Hooks tambi\xe9n facilitan la reutilizaci\xf3n de la l\xf3gica del estado entre diferentes componentes."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"// Componente funcional con Hook\nfunction Contador() {\n  const [contador, setContador] = useState(0);\n\n  return (\n    <div>\n      <p>Has hecho clic {contador} veces</p>\n      <button onClick={() => setContador(contador + 1)}>Haz clic</button>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["En este ejemplo, ",(0,s.jsx)(n.code,{children:"useState"})," gestiona el estado ",(0,s.jsx)(n.code,{children:"contador"}),", algo que en un componente de clase requerir\xeda m\xe1s c\xf3digo."]}),"\n",(0,s.jsxs)(n.h3,{id:"3-mejor-rendimiento",children:["3. ",(0,s.jsx)(n.strong,{children:"Mejor rendimiento"})]}),"\n",(0,s.jsxs)(n.p,{children:["Los componentes funcionales suelen tener un rendimiento ligeramente mejor que los componentes de clase porque son menos complejos y React puede optimizarlos m\xe1s f\xe1cilmente. Adem\xe1s, los componentes funcionales no tienen que gestionar el ",(0,s.jsx)(n.code,{children:"this"}),", lo que reduce la sobrecarga."]}),"\n",(0,s.jsxs)(n.h3,{id:"4-compatibilidad-con-las-nuevas-caracter\xedsticas-de-react",children:["4. ",(0,s.jsx)(n.strong,{children:"Compatibilidad con las nuevas caracter\xedsticas de React"})]}),"\n",(0,s.jsx)(n.p,{children:"Las caracter\xedsticas m\xe1s recientes de React, como los Hooks y las Concurrent Mode, est\xe1n dise\xf1adas pensando en los componentes funcionales. Usar componentes funcionales te prepara mejor para adoptar nuevas funcionalidades de React sin necesidad de reescribir tu c\xf3digo."}),"\n",(0,s.jsxs)(n.h3,{id:"5-facilidad-de-prueba-y-mantenimiento",children:["5. ",(0,s.jsx)(n.strong,{children:"Facilidad de prueba y mantenimiento"})]}),"\n",(0,s.jsx)(n.p,{children:"Debido a su simplicidad y a que no dependen de un contexto complejo, los componentes funcionales son m\xe1s f\xe1ciles de probar y mantener. Esto se traduce en menos errores y un c\xf3digo m\xe1s limpio y predecible."}),"\n",(0,s.jsx)(n.h2,{id:"m\xe1s-informaci\xf3n",children:"M\xe1s informaci\xf3n"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Hooks en React"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"useState vs. state en componentes de clase"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Ciclo de vida de los componentes en React"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Concurrent Mode en React"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"resumen",children:"Resumen"}),"\n",(0,s.jsx)(n.p,{children:"Los componentes funcionales son preferidos en React debido a su sintaxis m\xe1s sencilla, compatibilidad con Hooks, mejor rendimiento, y facilidad de prueba y mantenimiento. Optar por componentes funcionales no solo simplifica el desarrollo, sino que tambi\xe9n te prepara mejor para aprovechar las \xfaltimas mejoras y caracter\xedsticas en React."})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>r});var s=o(6540);const a={},c=s.createContext(a);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);