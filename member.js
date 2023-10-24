function skillsMember() {
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var skillsValue = skills.value;
    var memberValue = member.value;
    var skillsMember = document.getElementById("skillsMember");
    skillsMember.innerHTML = skillsValue + " " + memberValue;
}