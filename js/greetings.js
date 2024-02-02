const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

// todo
const toDoForm2 = document.querySelector('#todo-form');
const toDoInput2 = toDoForm2.querySelector('input');
const toDoList2 = document.querySelector('#todo-list');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

// 로그인 버튼 클릭했을 때
const onLoginSubmit = (e) => {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // username을 local storage에 저장하기
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
};

loginForm.addEventListener('submit', onLoginSubmit);

const paintGreetings = () => {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  
  toDoForm2.classList.remove(HIDDEN_CLASSNAME);
  toDoList2.classList.remove(HIDDEN_CLASSNAME);

};

// 저장된 로그인 값이 있는지 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //form을 보여주기
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings();
}
