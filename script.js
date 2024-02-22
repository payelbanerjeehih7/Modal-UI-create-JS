'use strict';
const modal = document.querySelector('.modal');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnCloseModal2 = document.querySelector('.close-modal2');
const btnCloseModal3 = document.querySelector('.close-modal3');
const btnOpenModal = document.querySelectorAll('.show-modal');
const btnOpenModal2 = document.querySelectorAll('.show-modal2');
const btnOpenModal3 = document.querySelectorAll('.show-modal3');
// console.log(modal);
function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function openModal2() {
  modal2.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function openModal3() {
  modal3.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
for (let i = 0; i < btnOpenModal.length; i++) {
  // console.log('Button Clicked');
  btnOpenModal[i].addEventListener('click', openModal);
}
for (let i = 0; i < btnOpenModal2.length; i++) {
  btnOpenModal2[i].addEventListener('click', openModal2);
}
for (let i = 0; i < btnOpenModal3.length; i++) {
  btnOpenModal3[i].addEventListener('click', openModal3);
}

function closeModal() {
  modal.classList.add('hidden');
  modal2.classList.add('hidden');
  modal3.classList.add('hidden');
  overlay.classList.add('hidden');
}
btnCloseModal.addEventListener('click', closeModal);
btnCloseModal2.addEventListener('click', closeModal);
btnCloseModal3.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
//esc button handler
document.addEventListener('keydown', function (e) {
  //event
  // console.log('A key was pressed');
  // console.log(e.key); //KeyboardEvent {isTrusted: true, key: 'Escape', code: 'Escape', location: 0, ctrlKey: false, …} isTrusted :  true altKey :  false bubbles :  true cancelBubble :  false cancelable :  true charCode :  0 code :  "Escape" composed :  true ctrlKey :  false currentTarget :  null defaultPrevented :  false detail :  0 eventPhase :  0 isComposing :  false key :  "Escape" keyCode :  27 location :  0 metaKey :  false repeat :  false returnValue :  true shiftKey :  false sourceCapabilities :  InputDeviceCapabilities {firesTouchEvents: false} srcElement :  body target :  body timeStamp :  398303 type :  "keydown" view :  Window {window: Window, self: Window, document: document, name: '', location: Location, …} which :  27 [[Prototype]] :  KeyboardEvent
  if (
    e.key === 'Escape' &&
    (!modal.classList.contains('hidden') ||
      !modal2.classList.contains('hidden') ||
      !modal3.classList.contains('hidden'))
  ) {
    closeModal();
  }
});
