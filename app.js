let inputBox = document.getElementById('input-box');  //Access the Elements
let listContainer = document.getElementById('list-container');
let music = new Audio('mymusic.wav')  //Add music

const addTask = ()=>{           //add task function
    if(inputBox.value ===''){       //if user enter empty text create alert
        alert('Add Your Task');
    }

    else {              
        let task = document.createElement('li');               //create element LI
        task.textContent = inputBox.value;
        listContainer.appendChild(task);                       //Append LI
        inputBox.value = '';

        let span = document.createElement('span');              //create element Span
        span.textContent = '\u00d7';
        task.appendChild(span);                                    //append span
    }
    music.play();
    saveData();
};

listContainer.addEventListener('click',(e)=>{                   //add event listener on clicking the elements
    if(e.target.tagName === 'LI'){                              //if user clicks on LI toggle class
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN') {                      //if user clicks on span delete parent element
        e.target.parentElement.remove();
        saveData();
    }
    music.play();
});

const saveData = ()=>{                                          //save data function
    localStorage.setItem('tasks',listContainer.innerHTML)
};

const showData = ()=>{                                           //show data function
    listContainer.innerHTML = localStorage.getItem('tasks')
};

showData();