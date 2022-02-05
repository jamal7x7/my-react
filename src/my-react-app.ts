import './style.css'

const myReactApp = document.querySelector<HTMLDivElement>('#my-react-app')

let clock

function render() {
  const template = (n) => `

    <div> Clock #${n} </div>
    <h4>time now is</h4>
    <h1 class="clock">${clock}</h1>
    <hr/>

`

  const createTemplate = (n) =>
    new Array(n).fill(null).reduce((acc, _, i) => {
      acc += template(i)
      return acc
    }, ` <h3 class="r">My React Clock</h3> <hr/>`)

  myReactApp.innerHTML = createTemplate(10)
}

setInterval(() => {
  clock = new Date().toLocaleTimeString()
  render()
}, 1000)
