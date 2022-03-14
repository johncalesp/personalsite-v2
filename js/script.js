'use strict';

// MOBILE MENU
const icon = document.querySelector('.mobileIcon');
const mobileMenu = document.querySelector('.mobile_menu');

// HEADER
const header = document.querySelector('#main');

// HOME
const navHomeLogo = document.querySelector('#nav-home-logo');
const navHomeDesktop = document.querySelector('#nav-home-desktop');
const navHomeMobile = document.querySelector('#nav-home-mobile');

// MOBILE
const navAboutMobile = document.querySelector('#nav-about-mobile');
const navResumeMobile = document.querySelector('#nav-resume-mobile');
const navPortfolioMobile = document.querySelector('#nav-portfolio-mobile');

// DESKTOP
const navAboutDesktop = document.querySelector('#nav-about-desktop');
const navResumeDesktop = document.querySelector('#nav-resume-desktop');
const navPortfolioDesktop = document.querySelector('#nav-portfolio-desktop');

// SECTIONS
const about = document.querySelector('#about');
const resume = document.querySelector('#resume');
const portfolio = document.querySelector('#portfolio');

// OPEN-CLOSE MOBILE MENU
const mobileOpenClose = () => {
  mobileMenu.classList.toggle('mobile_menu__open');
  icon.classList.toggle('open');
};

icon.addEventListener('click', function () {
  mobileOpenClose();
});

// FOR MOBILE

const menuSectionBehavior = (elemMount, elementsUnmount, mobile) => {
  if (mobile) mobileOpenClose();
  header.classList.add('header-top');
  elemMount.classList.add('section-show');
  elementsUnmount.forEach(function (elem) {
    elem.classList.remove('section-show');
  });
};

const toggleClassActive = (mainMenu, otherMenus) => {
  mainMenu.classList.add('active');
  otherMenus.forEach(function (menu) {
    menu.classList.remove('active');
  });
  navHomeDesktop.classList.remove('active');
  navHomeMobile.classList.remove('active');
};

navAboutMobile.addEventListener('click', function () {
  toggleClassActive(navAboutMobile, [navResumeMobile, navPortfolioMobile]);
  menuSectionBehavior(about, [resume, portfolio], true);
});

navResumeMobile.addEventListener('click', function () {
  toggleClassActive(navResumeMobile, [navAboutMobile, navPortfolioMobile]);
  menuSectionBehavior(resume, [about, portfolio], true);
});

navPortfolioMobile.addEventListener('click', function () {
  toggleClassActive(navPortfolioMobile, [navAboutMobile, navResumeMobile]);
  menuSectionBehavior(portfolio, [about, resume], true);
});

// FOR DESKTOP
navAboutDesktop.addEventListener('click', function () {
  toggleClassActive(navAboutDesktop, [navResumeDesktop, navPortfolioDesktop]);
  menuSectionBehavior(about, [resume, portfolio], false);
});

navResumeDesktop.addEventListener('click', function () {
  toggleClassActive(navResumeDesktop, [navAboutDesktop, navPortfolioDesktop]);
  menuSectionBehavior(resume, [about, portfolio], false);
});

navPortfolioDesktop.addEventListener('click', function () {
  toggleClassActive(navPortfolioDesktop, [navAboutDesktop, navResumeDesktop]);
  menuSectionBehavior(portfolio, [about, resume], false);
});

// HOME MENU - DEFAULT
const reset = () => {
  icon.classList.remove('open');
  mobileMenu.classList.remove('mobile_menu__open');
  header.classList.remove('header-top');
  about.classList.remove('section-show');
  resume.classList.remove('section-show');
  portfolio.classList.remove('section-show');
  // UNDERLINE
  navAboutMobile.classList.remove('active');
  navResumeMobile.classList.remove('active');
  navPortfolioMobile.classList.remove('active');
  navAboutDesktop.classList.remove('active');
  navResumeDesktop.classList.remove('active');
  navPortfolioDesktop.classList.remove('active');
  navHomeDesktop.classList.add('active');
  navHomeMobile.classList.add('active');
};

navHomeLogo.addEventListener('click', function () {
  reset();
});

navHomeDesktop.addEventListener('click', function () {
  reset();
});

navHomeMobile.addEventListener('click', function () {
  reset();
});
