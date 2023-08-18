const body = document.querySelector(".available");

const title = document.createElement("h5");
title.textContent = [" Name", " Occupation", " Starting Price:"]

const freelancer1 = document.createElement("h5");
freelancer1.textContent = [" Alice", " Writer", " $30"];

const freelancer2 = document.createElement("h5");
freelancer2.textContent = [" Bob", " Teacher", " $50"];

const freelancer3 = document.createElement("h5");
freelancer3.textContent = [" Carol", " Programmer", " $70"];

body.append(title, freelancer1, freelancer2, freelancer3);