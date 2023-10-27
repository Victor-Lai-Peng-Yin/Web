
function toggleEducationGroup() {
    var educationSelect = document.getElementById("education");
    var interestSelect = document.getElementById("interest");

    if (educationSelect.value === "大學") {
        interestSelect.querySelector("option[value='大眾傳播學群']").style.display = "none";
        interestSelect.querySelector("option[value='生命科學學群']").style.display = "block";
        interestSelect.querySelector("option[value='生物資源學群']").style.display = "block";
        interestSelect.querySelector("option[value='藝術學群']").style.display =      "none";
        interestSelect.querySelector("option[value='醫藥衛生學群']").style.display =  "block";
        interestSelect.querySelector("option[value='地球與環境學群']").style.display ="block";
        interestSelect.querySelector("option[value='外語學群']").style.display =      "block";
        interestSelect.querySelector("option[value='醫藥衛生學群']").style.display =  "block";
        interestSelect.querySelector("option[value='文史哲學群']").style.display =    "block";
        interestSelect.querySelector("option[value='教育學群']").style.display =      "none";
        interestSelect.querySelector("option[value='法政學群']").style.display =      "block";
        interestSelect.querySelector("option[value='社會與心理學群']").style.display ="block";
        interestSelect.querySelector("option[value='遊憩與運動學群']").style.display ="block";
    } 

    else if(educationSelect.value === "港二技")
    {
        interestSelect.querySelector("option[value='大眾傳播學群']").style.display = "none";
        interestSelect.querySelector("option[value='生命科學學群']").style.display = "none";
        interestSelect.querySelector("option[value='生物資源學群']").style.display = "none";
        interestSelect.querySelector("option[value='醫藥衛生學群']").style.display = "none";
        interestSelect.querySelector("option[value='地球與環境學群']").style.display = "none";
        interestSelect.querySelector("option[value='外語學群']").style.display = "none";
        interestSelect.querySelector("option[value='醫藥衛生學群']").style.display = "none";
        interestSelect.querySelector("option[value='文史哲學群']").style.display = "none";
        interestSelect.querySelector("option[value='教育學群']").style.display = "none";
        interestSelect.querySelector("option[value='法政學群']").style.display = "none";
        interestSelect.querySelector("option[value='社會與心理學群']").style.display = "none";
        interestSelect.querySelector("option[value='藝術學群']").style.display = "none";
        interestSelect.querySelector("option[value='遊憩與運動學群']").style.display = "none";
    }
    else if(educationSelect.value === "研究所")
    {
        interestSelect.querySelector("option[value='大眾傳播學群']").style.display = "none";
        interestSelect.querySelector("option[value='生命科學學群']").style.display = "block";
        interestSelect.querySelector("option[value='生物資源學群']").style.display =  "block";
        interestSelect.querySelector("option[value='醫藥衛生學群']").style.display =  "block";
        interestSelect.querySelector("option[value='地球與環境學群']").style.display ="block";
        interestSelect.querySelector("option[value='外語學群']").style.display =      "block";
        interestSelect.querySelector("option[value='醫藥衛生學群']").style.display =  "block";
        interestSelect.querySelector("option[value='文史哲學群']").style.display =    "block";
        interestSelect.querySelector("option[value='教育學群']").style.display =      "block";
        interestSelect.querySelector("option[value='法政學群']").style.display =      "block";
        interestSelect.querySelector("option[value='社會與心理學群']").style.display ="block";
        interestSelect.querySelector("option[value='藝術學群']").style.display =      "none";
        interestSelect.querySelector("option[value='遊憩與運動學群']").style.display ="none";
    }
    else {
        interestSelect.querySelector("option[value='大眾傳播學群']").style.display = "block";
        interestSelect.querySelector("option[value='生命科學學群']").style.display = "block";
        interestSelect.querySelector("option[value='生物資源學群']").style.display =  "block";
        interestSelect.querySelector("option[value='醫藥衛生學群']").style.display =  "block";
        interestSelect.querySelector("option[value='地球與環境學群']").style.display ="block";
        interestSelect.querySelector("option[value='外語學群']").style.display =      "block";
        interestSelect.querySelector("option[value='醫藥衛生學群']").style.display =  "block";
        interestSelect.querySelector("option[value='文史哲學群']").style.display =    "block";
        interestSelect.querySelector("option[value='教育學群']").style.display =      "block";
        interestSelect.querySelector("option[value='法政學群']").style.display =      "block";
        interestSelect.querySelector("option[value='社會與心理學群']").style.display ="block";
        interestSelect.querySelector("option[value='藝術學群']").style.display =      "block";
        interestSelect.querySelector("option[value='遊憩與運動學群']").style.display ="block";
    }
}