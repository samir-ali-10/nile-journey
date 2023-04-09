let profileContent = document.querySelector(".profile .content"),
    logoutBtn = document.querySelector(".log_out");


logoutBtn.onclick = function() {
    profileContent.innerHTML += `<div class="log_out_screen">
        <h2>Logout</h2>
        <p>After logging out from your account you will still be able top access</p>
        <div class="buttons">
            <a href="profile.html"><button class="cancel">Cancel</button></a>
            <a href="index.html"><button class="logout">Logout</button></a>
        </div>
    </div>`
}