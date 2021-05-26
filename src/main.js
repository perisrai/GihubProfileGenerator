'use strict';

import './dom.js';
import node from './dom.js';

const form = node('form');
const inputUsername = node('input-username');

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
            setValues(res);
            console.log(mainSection);

            // console.log(res);
            // console.log(JSON.stringify(res));
            // const name = res.name;
            // document.getElementById("fullname").innerHTML = res["name"];
            // console.log(document.getElementById("fullname").innerHTML);
        }
    };
})


const setValues = (data) => {
    console.log(data);
    const username = node('username');
    const fullName = node('full-name');
    const followers = node('followers-count');
    const following = node('following-count');
    const repositories = node('repositories-count');
    const email = node('email-id');
    const location = node('location');
    const twitter = node('twitter-id');
    const organization = node('organization');
    const joinedDate = node('joined-date');
    const website = node('website');
    const bio = node('bio');
    const avatar = node('user-avatar');

    fullName.el.innerText = data.name;
    username.el.innerText= data.login;
    followers.el.innerText = data.followers;
    following.el.innerText = data.following;
    repositories.el.innerText = data.public_repos;
    email.el.innerText = data.email;
    location.el.innerText = data.location;
    twitter.el.innerText = data.twitter_username;
    organization.el.innerText = data.company;
    joinedDate.el.innerText = data.created_at;
    website.el.innerText = data.blog;
    bio.el.innerText = data.bio;
    console.log(avatar);
    document.getElementById("user-avatar").src = data.avatar_url;

}

