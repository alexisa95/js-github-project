const userUL=[];
const reposUL=[];
const getUserURl = 'https://api.github.com/users';
const getuserRepoURL = 'https://api.github.com/repos/'
let form;
document.addEventListener('submit',function(){
form=document.getElementById("#github-form");
})
function searchUsers(){
        return fetch('getUserURl', {
            method: 'get',
            headers: {
                'Content - Type': 'application/json',
                'Accept': 'application/vnd.github.v3+json'
    },
            body: JSON.stringify()
    
        })
    
        .then(response => response.json())
        .then(obj => displayUsers(obj.message))
        
    }
    
    function displayUsers(userNameUl) {
        const userList = document.getElementById('#user-list');
        for (user in userNameUl){
            let li = document.createElement('li');
            let node = document.createTextNode(user);
            li.appendChild(node);
            userList.appendChild(li);
            userNameUl.filter(showUser => showUser.login ) 
        }
            
        }