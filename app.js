const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.links a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    
    }
})

// Active Link Dropdown 
const navLinksdd = document.querySelectorAll('.linksdd a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('activedd');
    
    }
})


// function handleFormSubmit(event) {
    
    
//     const data = new FormData(event.target);   
//     const formJSON = Object.fromEntries(data.entries());   
//     const results = document.querySelector('.results pre');
//     results.innerText = JSON.stringify(formJSON, null, 2);
//     console.log(formJSON);
// }
  
const form = document.querySelector('form');

const username = document.querySelector("#nameid");
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const errorMsg = document.getElementsByClassName('error');
const subject = document.querySelector("#subject");


form.addEventListener('submit', (e) => {
    if (username.value === '') {
        e.preventDefault();
        errorMsg[0].innerHTML = "This field cannot be blank"
    } else {
        errorMsg[0].innerHTML = '';
    }
    
    if (subject.value === "") {
        e.preventDefault();
        errorMsg[2].innerHTML = "This field cannot be blank"
    } else {
        errorMsg[2].innerHTML = '';
    }

    if (message.value === '') {
        e.preventDefault();
        errorMsg[3].innerHTML = "This field cannot be blank!"
    } else {
        errorMsg[3].innerHTML = '';
    }
    
    if (email.value === '') {
        e.preventDefault();
        errorMsg[1].innerHTML = "Email cannot be blank!";
    } else if (!isEmail(email.value)) {
        e.preventDefault();
        errorMsg[1].innerHTML = "Email is not valid!"; 
    } else {
        errorMsg[1].innerHTML = '';
    }
})

// form.addEventListener('submit', handleFormSubmit);




function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function myFunction() {
    document.querySelector("#myDropdown").classList.toggle("show");
    document.querySelector("#myDropdown").classList.toggle("dropdownmenu");
    console.log("hello");

}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn1')) {
  
        var dropdowns = document.getElementsByClassName("dropdown-content1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}