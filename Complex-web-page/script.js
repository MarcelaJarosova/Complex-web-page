/*------MENU------*/
const menuIcons = document.querySelector('.fa-solid')
const menuIconsDiv = document.querySelector('.menu-icon')
const navList = document.querySelector('nav')

class MenuSwapper {
   constructor(icons, iconsDiv, navTag) {
      this.icons = icons
      this.iconsDiv = iconsDiv
      this.navTag = navTag
   }

   addClass = (htmlTag, nameClass) => {
      htmlTag.classList.add(nameClass)
   }
   removeClass = (htmlTag, nameClass) => {
      htmlTag.classList.remove(nameClass)
   }
   iconDisplay = (htmlTag, displayStatus) => {
      htmlTag.style.display = displayStatus
   }
}

const hamburgerMenu = new MenuSwapper(menuIcons, menuIconsDiv, navList)

hamburgerMenu.iconsDiv.addEventListener('click', () => {
   if (hamburgerMenu.icons.classList[1] === 'fa-bars') {
      hamburgerMenu.addClass(hamburgerMenu.icons, 'fa-xmark')
      hamburgerMenu.removeClass(hamburgerMenu.icons, 'fa-bars')
      hamburgerMenu.iconDisplay(hamburgerMenu.navTag, 'block')
   } else {
      hamburgerMenu.addClass(hamburgerMenu.icons, 'fa-bars')
      hamburgerMenu.removeClass(hamburgerMenu.icons, 'fa-xmark')
      hamburgerMenu.iconDisplay(hamburgerMenu.navTag, 'none')
   }
})

const anchors = document.querySelectorAll('nav ul li')
anchors.forEach((a) => {
   a.addEventListener('click', () => {
      hamburgerMenu.iconDisplay(hamburgerMenu.navTag, 'none')
      hamburgerMenu.addClass(hamburgerMenu.icons, 'fa-bars')
      hamburgerMenu.removeClass(hamburgerMenu.icons, 'fa-xmark')
   })
})

/*------ABOUT-US------*/
class ImgEnlarger {
   constructor(imgs) {
      this.imgs = imgs
   }

   imgTransform = (img, transformValue) => {
      img.style.transform = transformValue
   }
}

const photos = document.querySelectorAll('.photo')
const photosEnlarger = new ImgEnlarger(photos)

photosEnlarger.imgs.forEach((onePhoto) => {
   onePhoto.addEventListener('mouseenter', () => {
      photosEnlarger.imgTransform(onePhoto, 'scale(1.1)')
   })
   onePhoto.addEventListener('mouseleave', () => {
      photosEnlarger.imgTransform(onePhoto, 'scale(1)')
   })
})

/*------SUBSCRIPTION------*/
class TwoTagChecker {
   constructor(twoHtmlTags) {
      this.twoHtmlTags = twoHtmlTags
   }

   insertContent = (htmlTag, content) => {
      htmlTag.innerHTML = content
   }
   addClass = (htmlTag, className) => {
      htmlTag.classList.add(className)
   }
   removeClass = (htmlTag, className) => {
      htmlTag.classList.remove(className)
   }
   tagCleaner = (input1value, input2value, htmlTag) => {
      if (input1value === '' && input2value === '') {
         htmlTag.innerHTML = ''
      }
   }
}

const passwords = document.querySelectorAll('.password')
const matchText = document.querySelector('.password-match-text')

const passwordChecker = new TwoTagChecker(passwords)

passwordChecker.twoHtmlTags.forEach((oneInput) => {
   oneInput.addEventListener('input', () => {
      const password1Value = passwordChecker.twoHtmlTags[0].value
      const password2Value = passwordChecker.twoHtmlTags[1].value

      if (password1Value === password2Value) {
         passwordChecker.insertContent(matchText, 'Passwords match')
         passwordChecker.addClass(matchText, 'valid')
         passwordChecker.removeClass(matchText, 'invalid')
      } else {
         passwordChecker.insertContent(matchText, 'Passwords do not match')
         passwordChecker.addClass(matchText, 'invalid')
         passwordChecker.removeClass(matchText, 'valid')
      }
      passwordChecker.tagCleaner(password1Value, password2Value, matchText)
   })
})

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
   e.preventDefault()
})

/*------DARK-MODE------*/
class ModeSwitcher {
   constructor(darkButtons, switchButton) {
      this.darkButtons = darkButtons
      this.switchButton = switchButton
   }

   toggleClass = (htmlTag, nameClass) => { 
      htmlTag.classList.toggle(nameClass)
   }
}

const darkBtn = document.querySelector('.dark-mode-btn')
const btns = document.querySelectorAll('.btn')

const darkMode = new ModeSwitcher(btns, darkBtn)

darkMode.switchButton.addEventListener('click', () => {
   darkMode.toggleClass(document.body, 'body-dark')
   darkMode.darkButtons.forEach((b) => {
      darkMode.toggleClass(b, 'btn-dark')
   })
})

/*------SCROLL-BUTTON------*/
class TopScrollButton {
   constructor(button) {
      this.button = button
   }
   buttonDisplay = (btn, displayStatus) => {
      btn.style.display = displayStatus
   }
}

const btnScroll = document.querySelector('.scroll-btn')

const ButtonTop = new TopScrollButton(btnScroll)

window.addEventListener('scroll', () => {
   if (window.scrollY > 200) {
      ButtonTop.buttonDisplay(ButtonTop.button, 'block')
   } else {
      ButtonTop.buttonDisplay(ButtonTop.button, 'none')
   }
})

ButtonTop.button.addEventListener('click', () => {
   window.scrollTo(0, 0)
})