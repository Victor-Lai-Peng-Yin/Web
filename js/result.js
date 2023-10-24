
var recommendedDepartmentsSet = new Set();
// 解析 URL 参数
const queryParams = new URLSearchParams(window.location.search);

// 獲取參數的值
const name = queryParams.get("name");
const gender = queryParams.get("gender");
const email = queryParams.get("email");
const education = queryParams.get("education");
const interests = queryParams.get("interests").split(",");

// 顯示參數的值在頁面上
document.getElementById("resultName").textContent = name;
document.getElementById("resultGender").textContent = gender;
document.getElementById("resultEmail").textContent = email;
document.getElementById("resultEducation").textContent = education;
document.getElementById("resultInterests").textContent = interests.join(", ");

// 大學科系信息
var universityDepartments = {
    "工程學群": 
    [
        "國立臺北科技大學, 機械工程系", 
        "國立臺北科技大學, 車輛工程系",
        "國立臺北科技大學, 能源與冷凍空調工程系", 
        "國立臺北科技大學, 電機工程系",
        "國立臺北科技大學, 電子工程系", 
        "國立臺北科技大學, 資訊工程系",
        "國立臺北科技大學, 光電工程系", 
        "國立臺北科技大學, 化學工程與生物科技系",
        "國立臺北科技大學, 分子科學與工程系", 
        "國立臺北科技大學, 土木工程系",
        "國立臺北科技大學, 材料及資源工程系材料組", 
        "國立臺北科技大學, 材料及資源工程系資源組",
        "國立臺北科技大學, 工業工程與管理系", 
    ],
    "資訊學群": 
    [
        "國立臺北科技大學, 電機工程系",
        "國立臺北科技大學, 電子工程系",
        "國立臺北科技大學, 資訊工程系",
        "國立臺北科技大學, 光電工程系",
    ],
    "數理化學群": 
    [
        "國立臺北科技大學, 電機工程系",
        "國立臺北科技大學, 電子工程系",
        "國立臺北科技大學, 資訊工程系",
        "國立臺北科技大學, 光電工程系",
    ],
    "醫藥衛生學群": 
    [
        "臺北醫藥大學, 牙醫學系",
        "臺北醫藥大學, 呼吸治療學系",
    ],
    // 其他學群和科系
};

// 獲取用戶選擇的學群
var selectedInterests = interests;

// 遍歷用戶選擇的學群，將匹配的大學科系添加到recommendedDepartmentsSet 集合中
for (var i = 0; i < selectedInterests.length; i++) {
    var interest = selectedInterests[i];
    if (universityDepartments[interest]) {
        universityDepartments[interest].forEach(function(department) {
            recommendedDepartmentsSet.add(department);
        });
    }
}

// 將Set集合轉換為陣列
var recommendedDepartments = Array.from(recommendedDepartmentsSet);
var resultDepartments = document.getElementById("resultDepartments");

// 遍歷recommendedDepartments陣列，創建列表項並添加到結果頁面
for (var j = 0; j < recommendedDepartments.length; j++) {
    var department = recommendedDepartments[j];
    var listItem = document.createElement("div");
    listItem.textContent = department;
    resultDepartments.appendChild(listItem);
}
