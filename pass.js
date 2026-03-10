const allChars = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z',
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  '1','2','3','4','5','6','7','8','9','0',
  '!','@','#','$','%','^','&','*','(',')','–','_','=',
  '+','{','}','[',']','|',';',':','.','<','>','/','?'
]

const pwLength = document.getElementById('length-input')
const btnGenerate = document.getElementById('big-button')
const allPasswordBtns = document.querySelectorAll('.password-sugg')
const copyFeedback = document.getElementById('copy-feedback')

function createPassword(length) {
  let password = ''
  for (let i = 0; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)]
  }
  return password
}

function generatePasswords() {
  const length = Math.min(Math.max(parseInt(pwLength.value) || 10, 8), 25)
  allPasswordBtns.forEach(btn => {
    btn.textContent = createPassword(length)
  })
}

btnGenerate.addEventListener('click', generatePasswords)

allPasswordBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (!btn.textContent || btn.querySelector('ion-icon')) return
    navigator.clipboard.writeText(btn.textContent).then(() => {
      copyFeedback.style.display = 'block'
      setTimeout(() => { copyFeedback.style.display = 'none' }, 2000)
    })
  })
})
