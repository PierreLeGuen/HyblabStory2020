/*
 * Project: handigo
 * Created Date: Wednesday February 5th 2020
 * Author: Pierre Le Guen
 * -----
 * Last Modified: Thursday, 6th February 2020 10:23:13 am
 * Modified By: Pierre Le Guen
 * -----
 * Copyright (c) 2020 Pierre Le Guen
 */

class View12Premium extends View {
  constructor (el) {
    super('view12premium', el || document.getElementById('view-container'))
    this.load().then(() => {
      this.view = document.getElementById(this.viewName)
      this.linkElements()
    })
  }

  linkElements () {
    // Background elements
    this.arobase = document.getElementById('arobase')
    this.clock = document.getElementById('clock')
    this.facebook = document.getElementById('facebook')
    this.instagram = document.getElementById('instagram')
    this.mail = document.getElementById('mail')
    this.money = document.getElementById('money')
    this.youtube = document.getElementById('youtube')
    this.phone = document.getElementById('phone')
    this.localisation = document.getElementById('localisation')


    // Parallax for background elements
    const vc = document.getElementById('view-container')
    vc.addEventListener('mousemove', e => {
      var relX = e.pageX - vc.offsetLeft
      var relY = e.pageY - vc.offsetTop

      TweenMax.to(this.arobase, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * -10,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * -10,
        ease: Power2.easeOut
      })
      TweenMax.to(this.clock, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * 10,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * -10,
        ease: Power2.easeOut
      })
      TweenMax.to(this.facebook, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * -10,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * 10,
        ease: Power2.easeOut
      })
      TweenMax.to(this.instagram, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * -10,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * -10,
        ease: Power2.easeOut
      })
      TweenMax.to(this.mail, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * 10,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * 10,
        ease: Power2.easeOut
      })
      TweenMax.to(this.money, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * -10,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * -10,
        ease: Power2.easeOut
      })
      TweenMax.to(this.youtube, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * 10,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * 10,
        ease: Power2.easeOut
      })
      TweenMax.to(this.phone, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * -10,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * 10,
        ease: Power2.easeOut
      })
      TweenMax.to(this.localisation, 1, {
        x: ((relX - vc.offsetWidth / 2) / vc.offsetWidth) * -10,
        y: ((relY - vc.offsetHeight / 2) / vc.offsetHeight) * 10,
        ease: Power2.easeOut
      })
    })
  }
}