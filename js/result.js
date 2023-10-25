
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
        "國立臺灣海洋大學, 商船學系",
        "國立臺灣海洋大學, 輪機工程學系",
        "國立臺灣海洋大學, 機械與機電工程學系",
        "國立臺灣海洋大學, 河海工程學系",
        "國立臺灣海洋大學, 電機工程學系",
        "國立臺灣海洋大學, 通訊與導航工程學系",
        "國立臺灣海洋大學, 光電與材料科技學系",
        "國立臺灣海洋大學, 海洋工程科技學士學位學程",

    ],
    "資訊學群": 
    [
        "國立臺北科技大學, 電機工程系",
        "國立臺北科技大學, 電子工程系",
        "國立臺北科技大學, 資訊工程系",
        "國立臺北科技大學, 光電工程系",
        "國立臺北科技大學, 資訊與財金管理系",
        "國立臺北科技大學, 互動設計系媒體設計組",
        "國立臺灣海洋大學, 資訊工程學系",
    ],
    "數理化學群": 
    [
        "國立臺北科技大學, 電機工程系",
        "國立臺北科技大學, 電子工程系",
        "國立臺北科技大學, 資訊工程系",
        "國立臺北科技大學, 光電工程系",
    ],
    "管理學群": 
    [
        "國立臺北科技大學, 工業工程與管理系",
        "國立臺北科技大學, 經營管理系",
        "國立臺灣海洋大學, 航運管理學系",
        "國立臺灣海洋大學, 運輸科學系",
        "國立臺灣海洋大學, 海洋觀光管理學士學位學程",
    ],
    "地球與環境學群": 
    [
        "國立臺灣海洋大學, 海洋環境資訊系",
    ],
    "財經學群": 
    [
        "國立臺北科技大學, 資訊與財金管理系",
    ],
    "建築與設計": 
    [
        "國立臺北科技大學, 工業設計系產品設計組",
        "國立臺北科技大學, 工業設計系家具與室內設計組",
        "國立臺北科技大學, 建築系",
        "國立臺北科技大學, 互動設計系媒體設計組",
        "國立臺北科技大學, 互動設計系視覺傳達設計組",

    ],
    "外語學群": 
    [
        "國立臺北科技大學, 應用英文系",
    ],
    "文史哲學群": 
    [
        "國立臺北科技大學, 文化事業發展系",
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
