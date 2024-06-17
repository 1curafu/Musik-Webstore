document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("profileForm");
    const nameInput = document.getElementById("name");
    const usernameInput = document.getElementById("username");
    const followersInput = document.getElementById("followers");
    const bioInput = document.getElementById("bio");
    const profileImageInput = document.getElementById("profileImage");

    // Load saved data from local storage
    const savedProfile = JSON.parse(localStorage.getItem("profile"));

    if (savedProfile) {
        nameInput.value = savedProfile.name || "";
        usernameInput.value = savedProfile.username || "";
        followersInput.value = savedProfile.followers || "";
        bioInput.value = savedProfile.bio || "";
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const reader = new FileReader();
        reader.onload = function(e) {
            const profile = {
                name: nameInput.value,
                username: usernameInput.value,
                followers: followersInput.value,
                bio: bioInput.value,
                avatar: e.target.result // base64 string
            };

            localStorage.setItem("profile", JSON.stringify(profile));

            alert("Profile saved!");
            window.location.href = "/pages/profile.html";
        };

        if (profileImageInput.files[0]) {
            reader.readAsDataURL(profileImageInput.files[0]);
        } else {
            const profile = {
                name: nameInput.value,
                username: usernameInput.value,
                followers: followersInput.value,
                bio: bioInput.value,
                avatar: savedProfile ? savedProfile.avatar : null // retain previous avatar
            };

            localStorage.setItem("profile", JSON.stringify(profile));

            alert("Profile saved!");
            window.location.href = "/pages/profile.html";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const profile = JSON.parse(localStorage.getItem('profile'));
    if (profile && profile.avatar) {
        document.getElementById('profile-avatar').src = profile.avatar;
    }
});