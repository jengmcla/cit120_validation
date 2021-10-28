var responseDiv = document.body.querySelector(".response");
var textDiv = document.body.querySelector(".text");
var char = /[a-zA-Z]/g;

document.body.querySelector(".button").addEventListener("click", function() {
    var textUser = document.body.querySelector(".input").value;
    var textPass = document.body.querySelector(".inputPass").value;
    if(textUser !== "coolStudent123") {
        textDiv.innerHTML = "This is not a valid username.";
    } else if(textPass.length === 0) {
        textDiv.innerHTML = "Passwords must be at least 1 character.";
    } else {
        responseDiv.innerHTML = "";
        textDiv.innerHTML = "";
        renderPages();
    }
});

function renderPages() {
    var pages = ["Home", "About", "View"];
    function createNav() {
        var nav = document.createElement("nav");
        createButton(pages[0]);
        createButton(pages[1]);
        createButton(pages[2]);

        document.body.appendChild(nav);

        function createButton(pg) {
            var button = document.createElement("button");
            button.innerHTML = pg;
            button.addEventListener("click", function() {
                navigate(pg);
            });
            nav.appendChild(button);
        }
    }

    function createWrapper() {
        var wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        document.body.appendChild(wrapper);
    }

    function navigate(pg) {
        if(pg === "Home") { // CASE SENSITIVE
            homePage();
        } else if(pg === "About") {
            aboutPage();
        } else if(pg ==="View") {
            viewPage();
        }
    }

    function homePage() {
        var wrapper = document.body.querySelector(".wrapper"); // works bc this var is exclusive to this function
        wrapper.innerHTML = "";
        var header = document.createElement("h1");
        header.innerHTML = "Hello world!";
        wrapper.appendChild(header);
    }

    function aboutPage() {
        var wrapper = document.body.querySelector(".wrapper"); // works bc this var is exclusive to this function
        wrapper.innerHTML = "";
        var header = document.createElement("h1");
        var info = document.createElement("h3");
        header.innerHTML = "About me";
        info.innerHTML = "My name is Jenna.";
        wrapper.appendChild(header);
        wrapper.appendChild(info);
    }

    function viewPage() {
        var wrapper = document.body.querySelector(".wrapper"); // works bc this var is exclusive to this function
        wrapper.innerHTML = "";

        var header = document.createElement("h1");
        header.innerHTML = "View";

        var input = document.createElement("input");
        input.setAttribute('type', 'text');
        input.placeholder = "Write notes here.";

        var importance = document.createElement("input");
        importance.classList.add("importance");
        importance.setAttribute('type', 'text');
        importance.placeholder = "How important? Write a number!";

        var notesList = document.createElement("div");
        notesList.innerHTML = "";
        var list = [];

        var notesButton = document.createElement("button");
        notesButton.innerHTML = "Submit note.";
        notesButton.addEventListener("click", function() {
            if (isNaN(importance.value) && char.test(input.value)) {
                notesList.innerHTML = "Be sure to write a number!";
            } else if (input.value.length === 0) {
                notesList.innerHTML = "Don't forget to write a note!";
            } else if (importance.value.length === 0) {
                notesList.innerHTML = "Don't forget to number its importance!";
            } else {
                var pushThis = importance.value + ".) " + input.value;
                list.push(pushThis);
                renderList();
            }
        });

        function renderList() {
            notesList.innerHTML = "";
            for (var i = 0; i < list.length; i++) {
                var ele = document.createElement("div");
                ele.innerHTML = list[i];
                notesList.appendChild(ele);
            }
        }

        wrapper.appendChild(header);
        wrapper.appendChild(input);
        wrapper.appendChild(importance);
        wrapper.appendChild(notesButton);
        wrapper.appendChild(notesList);
    }


    createNav();
    createWrapper(); // have wrapper on bottom so it's below nav
    navigate("Home"); // has home as default
}

// when add item to list that is a json object
// DO NOT DO NUMBER INPUT