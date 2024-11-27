function customRendor(reactElement,container){
   /* const domElement= document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.chidlren
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)*/ 

    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.chidlren
    for (const prop in reactElement.props) {
        if(prop==='chidlren') continue
        domElement.setAttribute(prop,reactElement.props[prop])

    }
    container.appendChild(domElement)
}
const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    chidlren:'Click me to visit google'
}

const mainConatainer= document.querySelector('#root')

customRendor(reactElement,mainConatainer)