import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

let clock

function render() {
  const template = (n) => `
    <div> Clock #${n} </div>
  <h4>time now is</h4>
  <h1 class="clock">${clock}</h1>
  <hr/>
`

  const crateTemplate = (n) =>
    new Array(n).fill(0).reduce((acc, _, i) => {
      acc += template(i)
      return acc
    }, ` <h3>Vanilla Clock</h3> <hr/>`)

  app.innerHTML = crateTemplate(10)

  // return arr.map((r) => {
  //   // console.log(clock)
  //   return r + r
  // })
}

setInterval(() => {
  clock = new Date().toLocaleTimeString()
  render()
}, 1000)
