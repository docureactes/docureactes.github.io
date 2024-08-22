"use strict";(self.webpackChunkdocubook=self.webpackChunkdocubook||[]).push([[338],{8283:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=o(4848),s=o(8453);const i={},l="Hooks personalizados",r={id:"Hook/7-9-Hooks personalizados",title:"Hooks personalizados",description:"Los Hooks personalizados en React son una poderosa herramienta que te permite extraer y reutilizar la l\xf3gica de estado entre diferentes componentes. Al igual que los Hooks integrados de React como useState, useEffect y useRef, los Hooks personalizados permiten encapsular l\xf3gica relacionada con el estado o efectos en funciones que pueden ser reutilizadas en cualquier parte de tu aplicaci\xf3n.",source:"@site/docs/7-Hook/7-9-Hooks personalizados.md",sourceDirName:"7-Hook",slug:"/Hook/7-9-Hooks personalizados",permalink:"/Hook/7-9-Hooks personalizados",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useImperativeHandle",permalink:"/Hook/7-8-useImperativeHandle"},next:{title:"T\xe9cnicas de optimizaci\xf3n del rendimiento de componentes",permalink:"/Optimizaci\xf3n/8-1-T\xe9cnicas de optimizaci\xf3n del rendimiento de componentes"}},t={},d=[{value:"\xbfQu\xe9 es un Hook personalizado?",id:"qu\xe9-es-un-hook-personalizado",level:2},{value:"Ejemplo b\xe1sico de un Hook personalizado",id:"ejemplo-b\xe1sico-de-un-hook-personalizado",level:3},{value:"\xbfQu\xe9 est\xe1 pasando aqu\xed?",id:"qu\xe9-est\xe1-pasando-aqu\xed",level:3},{value:"Ventajas de los Hooks personalizados",id:"ventajas-de-los-hooks-personalizados",level:3},{value:"Creando un Hook personalizado m\xe1s complejo",id:"creando-un-hook-personalizado-m\xe1s-complejo",level:3},{value:"\xbfQu\xe9 aprendimos de este ejemplo?",id:"qu\xe9-aprendimos-de-este-ejemplo",level:3},{value:"M\xe1s informaci\xf3n",id:"m\xe1s-informaci\xf3n",level:2},{value:"Resumen",id:"resumen",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"hooks-personalizados",children:"Hooks personalizados"}),"\n",(0,a.jsxs)(n.p,{children:["Los ",(0,a.jsx)(n.strong,{children:"Hooks personalizados"})," en React son una poderosa herramienta que te permite extraer y reutilizar la l\xf3gica de estado entre diferentes componentes. Al igual que los Hooks integrados de React como ",(0,a.jsx)(n.code,{children:"useState"}),", ",(0,a.jsx)(n.code,{children:"useEffect"})," y ",(0,a.jsx)(n.code,{children:"useRef"}),", los Hooks personalizados permiten encapsular l\xf3gica relacionada con el estado o efectos en funciones que pueden ser reutilizadas en cualquier parte de tu aplicaci\xf3n."]}),"\n",(0,a.jsx)(n.h2,{id:"qu\xe9-es-un-hook-personalizado",children:"\xbfQu\xe9 es un Hook personalizado?"}),"\n",(0,a.jsxs)(n.p,{children:["Un Hook personalizado es simplemente una funci\xf3n de JavaScript cuyo nombre comienza con ",(0,a.jsx)(n.code,{children:"use"})," y que puede llamar a otros Hooks dentro de ella. La clave de un Hook personalizado es que puede ser utilizado como cualquier otro Hook en un componente de React, permitiendo compartir l\xf3gica compleja de una manera sencilla y mantenible."]}),"\n",(0,a.jsx)(n.h3,{id:"ejemplo-b\xe1sico-de-un-hook-personalizado",children:"Ejemplo b\xe1sico de un Hook personalizado"}),"\n",(0,a.jsx)(n.p,{children:"Imaginemos que queremos crear un Hook personalizado para manejar el estado de una entrada de texto. Este Hook gestionar\xe1 el valor del texto y la funci\xf3n para actualizarlo."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'// Creamos un Hook personalizado llamado useInputValue\nfunction useInputValue(initialValue) {\n  // Usamos el Hook useState para manejar el valor del input\n  const [value, setValue] = React.useState(initialValue);\n\n  // Retornamos el valor actual y una funci\xf3n para actualizarlo\n  return {\n    value,\n    onChange: (e) => setValue(e.target.value),\n  };\n}\n\n// Ejemplo de uso del Hook personalizado en un componente\nfunction MyInputComponent() {\n  // Utilizamos nuestro Hook personalizado\n  const nameInput = useInputValue("");\n\n  return (\n    <div>\n      <input type="text" {...nameInput} />\n      <p>El valor del input es: {nameInput.value}</p>\n    </div>\n  );\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"qu\xe9-est\xe1-pasando-aqu\xed",children:"\xbfQu\xe9 est\xe1 pasando aqu\xed?"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Encapsulamiento de l\xf3gica"}),": El Hook ",(0,a.jsx)(n.code,{children:"useInputValue"})," encapsula toda la l\xf3gica necesaria para manejar el estado de una entrada de texto. Esto incluye tanto el valor como la funci\xf3n para actualizarlo."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Reutilizaci\xf3n"}),": Puedes reutilizar este Hook en cualquier otro componente que necesite manejar una entrada de texto sin tener que duplicar c\xf3digo."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Simplificaci\xf3n del componente"}),": El componente ",(0,a.jsx)(n.code,{children:"MyInputComponent"})," se simplifica al usar ",(0,a.jsx)(n.code,{children:"useInputValue"}),", lo que hace que el c\xf3digo sea m\xe1s limpio y f\xe1cil de entender."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"ventajas-de-los-hooks-personalizados",children:"Ventajas de los Hooks personalizados"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Reutilizaci\xf3n de l\xf3gica"}),": Puedes reutilizar la misma l\xf3gica en diferentes componentes sin tener que duplicar c\xf3digo."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Legibilidad"}),": Al mover la l\xf3gica compleja fuera de los componentes, haces que estos sean m\xe1s f\xe1ciles de leer y mantener."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Desacoplamiento"}),": Los Hooks personalizados permiten desacoplar la l\xf3gica de la interfaz de usuario, lo que facilita su prueba y mantenimiento."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"creando-un-hook-personalizado-m\xe1s-complejo",children:"Creando un Hook personalizado m\xe1s complejo"}),"\n",(0,a.jsx)(n.p,{children:"Supongamos que necesitamos un Hook que nos permita saber si una ventana del navegador tiene un ancho mayor a un valor determinado. Este Hook se actualizar\xe1 cada vez que se redimensione la ventana."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"// Creamos un Hook personalizado llamado useWindowWidth\nfunction useWindowWidth(threshold) {\n  // Usamos useState para almacenar el ancho de la ventana\n  const [isWide, setIsWide] = React.useState(window.innerWidth > threshold);\n\n  // Usamos useEffect para actualizar el estado cuando la ventana se redimensiona\n  React.useEffect(() => {\n    const handleResize = () => {\n      setIsWide(window.innerWidth > threshold);\n    };\n\n    // Escuchamos el evento de redimensionamiento\n    window.addEventListener('resize', handleResize);\n\n    // Limpieza: removemos el evento cuando el componente se desmonta\n    return () => {\n      window.removeEventListener('resize', handleResize);\n    };\n  }, [threshold]);\n\n  return isWide;\n}\n\n// Ejemplo de uso del Hook personalizado en un componente\nfunction MyResponsiveComponent() {\n  // Utilizamos nuestro Hook personalizado\n  const isWindowWide = useWindowWidth(768);\n\n  return (\n    <div>\n      {isWindowWide ? <p>La ventana es ancha</p> : <p>La ventana es estrecha</p>}\n    </div>\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"qu\xe9-aprendimos-de-este-ejemplo",children:"\xbfQu\xe9 aprendimos de este ejemplo?"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"L\xf3gica de efectos"}),": El Hook ",(0,a.jsx)(n.code,{children:"useWindowWidth"})," utiliza ",(0,a.jsx)(n.code,{children:"useEffect"})," para manejar un evento del DOM y actualizar el estado en consecuencia."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Desempe\xf1o y limpieza"}),": A\xf1adir y remover eventos de manera adecuada ayuda a mantener un buen desempe\xf1o y evita fugas de memoria."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Modularidad"}),": El Hook es completamente reutilizable en cualquier componente que necesite saber si la ventana es m\xe1s ancha que un determinado umbral."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"m\xe1s-informaci\xf3n",children:"M\xe1s informaci\xf3n"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Hooks en React"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Reutilizaci\xf3n de l\xf3gica con Hooks personalizados"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Mejores pr\xe1cticas en la creaci\xf3n de Hooks personalizados"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Optimizaci\xf3n y limpieza en Hooks"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"resumen",children:"Resumen"}),"\n",(0,a.jsx)(n.p,{children:"Los Hooks personalizados permiten encapsular y reutilizar l\xf3gica relacionada con el estado en funciones reutilizables, lo que facilita la mantenibilidad y legibilidad del c\xf3digo. Desde la gesti\xf3n de entradas hasta la monitorizaci\xf3n de eventos, los Hooks personalizados son una herramienta esencial en React para mantener el c\xf3digo limpio, modular y eficiente."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>r});var a=o(6540);const s={},i=a.createContext(s);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);