const text = document.querySelector('#text')
const btns = document.querySelectorAll('td:not(#text')
const list = document.querySelector('#list')
const clearBtn = document.querySelector('#clearBtn')

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    text.style.width = '100%'
    const btnText = btn.innerText
    const operators = ['+', '-', '*', '/', '.']
    const lastText = text.innerText.at(-1)
    if (btnText === '=') {
      if (!operators.includes(lastText)) {
        for (let i = 0; i < text.innerText.length - 1; i++) {
          if (text.innerText !== '0' && operators.includes(text.innerText[i])) {
            list.insertAdjacentHTML('afterbegin',
            `<li>${text.innerText} = ${eval(text.innerText)}</li>`
            )
            break
          }
        }
        text.innerText = eval(text.innerText)
      }
    } else if (btnText === 'C') {
      text.innerText = '0'
    } else if (text.innerText === '0' && !isNaN(parseInt(btnText))) {
      text.innerText = btnText
    } else if (operators.includes(lastText)) {
      if (!operators.includes(btnText)) {
        text.innerText += btnText
      }
    } else {
      text.innerText += btnText
    }
  })
})

document.addEventListener('keydown', event => {
  text.style.width = '100%'
  const btnText = event.key
  const operators = ['+', '-', '*', '/', '.']
  const lastText = text.innerText.at(-1)
  if (btnText === '=' || btnText === 'Enter') {
    if (!operators.includes(lastText)) {
      for (let i = 0; i < text.innerText.length - 1; i++) {
        if (text.innerText !== '0' && operators.includes(text.innerText[i])) {
          list.insertAdjacentHTML('afterbegin',
          `<li>${text.innerText} = ${eval(text.innerText)}</li>`
          )
          break
        }
      }
      text.innerText = eval(text.innerText)
    }
  } else if (btnText === 'c') {
    text.innerText = '0'
  } else if (btnText === 'Backspace') {
    if (text.innerText.length === 1) {
      text.innerText = '0'
    } else {
      text.innerText = text.innerText.split('').slice(0,-1).join('')
    }
  } else if (text.innerText === '0' && !isNaN(parseInt(btnText))) {
    text.innerText = btnText
  } else if (operators.includes(lastText)) {
    if (!operators.includes(btnText) && !isNaN(parseInt(btnText))) {
      text.innerText += btnText
    }
  } else if (!isNaN(parseInt(btnText)) || operators.includes(btnText)) {
    text.innerText += btnText
  }
  console.log(text.innerText.length)
})

clearBtn.addEventListener('click', () => {
  list.innerHTML = ''
})
