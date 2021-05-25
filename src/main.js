'use strict';

import './dom.js';
import node from './dom.js';

const form = node('form');
const inputUsername = node('input-username');
const btnGenerate = node('btn-generate');

inputUsername.handleKeyUp(handleUsernameKeyUp);

inputUsername.handleChange((e) => {
    e.preventDefault();
    handleUsernameKeyUp(e);
    console.log(e.target.value);
});
  
function handleUsernameKeyUp(e) {
    e.preventDefault();
}

const createXhrRequest = (username) => {
    const apiUrl = `https://api.github.com/users/` + username;
    const xhrObject = new XMLHttpRequest();
    xhrObject.open('GET', apiUrl);
    xhrObject.setRequestHeader('Content-Type', 'application/json');
    xhrObject.responseType = "json";
  
    return xhrObject;
  };

form.handleSubmit((e) => {
    e.preventDefault();
    console.log('OnSubmit');
    const username = form.el.elements.username.value;
    console.log(username);
    const xhrObject = createXhrRequest(username.toLowerCase());
    console.log(xhrObject);
    xhrObject.send();
    xhrObject.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const res = xhrObject.response;
            console.log(res);
            console.log(JSON.stringify(res));
            const name = res.name;
            document.getElementById("fullname").innerHTML = res["name"];
            console.log(document.getElementById("fullname").innerHTML);
        }
    };
})


