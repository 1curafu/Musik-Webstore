document.addEventListener("DOMContentLoaded", function() {
    const profile = JSON.parse(localStorage.getItem("profile"));

    if (profile) {
        document.querySelector(".name").textContent = profile.name || "Eleanor Pena";
        document.querySelector(".idd").textContent = profile.username || "@eleanorpena";
        document.querySelector(".number").innerHTML = `${profile.followers} <span class="follow">Followers</span>`;
        document.querySelector(".text span").innerHTML = profile.bio || "Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.<br><br> Artist/ Creative Director by Day #NFT minting@ with FND night.";
        if (profile.avatar) {
            document.getElementById("profile-avatar").src = profile.avatar;
        }
    }
});