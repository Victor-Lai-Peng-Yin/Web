
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
        "國立臺北科技大學, 機械工程系機電整合碩士班",
        "國立臺北科技大學, 工業工程與管理系",
        "國立臺北科技大學, 能源與冷凍空調工程系",
        "國立臺北科技大學, 自動化科技研究所",
        "國立臺北科技大學, 製造科技研究所",
        "國立臺北科技大學, 機械工程系", 
        "國立臺北科技大學, 車輛工程系",
        "國立臺北科技大學, 能源與冷凍空調工程系", 
        "國立臺北科技大學, 機電學院機電科技博士班",
        "國立臺北科技大學, 電機工程系", 
        "國立臺北科技大學, 電子工程系",
        "國立臺北科技大學, 光電工程系", 
        "國立臺北科技大學, 化學工程與生物科技系化學工程碩士班",
        "國立臺北科技大學, 化學工程與生物科技系生化與生醫工程碩士班", 
        "國立臺北科技大學, 土木工程系土木與防災碩士班",
        "國立臺北科技大學, 環境工程與管理研究所", 
        "國立臺北科技大學, 材料科學與工程研究所",
        "國立臺北科技大學, 資源工程研究所",
        "國立臺灣海洋大學, 光電與材料科技學系",
        "國立臺灣海洋大學, 系統工程暨造船學系",
        "國立臺灣海洋大學, 河海工程學系",
        "國立臺灣海洋大學, 商船學系",
        "國立臺灣海洋大學, 通訊與導航工程學系",
        "國立臺灣海洋大學, 電機工程學系",
        "國立臺灣海洋大學, 輪機工程學系",
        "國立臺灣海洋大學, 機械與機電工程學系",
        "臺北醫學大學, 生醫材料暨組織工程研究所博士班",
        "臺北醫學大學, 奈米醫學工程研究所碩士班",
        "臺北醫學大學, 生物醫學工程系",
        "國立臺北大學, 通訊工程學系",
        "國立臺北大學, 電機工程學系",

    ],
    "資訊學群": 
    [
        "臺北醫學大學, 醫學資訊研究所博士班",
        "臺北醫學大學, 醫學資訊研究所碩士班",
        "國立臺北科技大學, 電機工程系",
        "國立臺北科技大學, 電子工程系",
        "國立臺北科技大學, 資訊工程系",
        "國立臺北科技大學, 光電工程系",
        "國立臺北科技大學, 互動設計系",
        "國立臺灣海洋大學, 海洋事務與資源管理研究所",
        "國立臺灣海洋大學, 資訊工程學系",
        "國立臺北大學, 資訊工程學系",
        "國立臺北大學, 資訊管理研究所",

    ],
    "社會與心理學群": 
    [
        "國立臺北大學, 社會學系",
        "國立臺北大學, 社會工作學系",
        "國立臺北大學, 犯罪學研究所",

    ],
    "數理化學群": 
    [
        "國立臺北科技大學, 化學工程與生物科技系化學工程碩士班",
        "國立臺北科技大學,化學工程與生物科技系生化與生醫工程碩士班",
        "國立臺北科技大學, 分子科學與工程系有機高分子碩士班",
        "國立臺北大學, 統計學系",
    ],
    "法政學群": 
    [
        "國立臺北科技大學, 智慧財產權研究所",
        "國立臺北大學, 法律系",
        "國立臺北大學, 不動產與城鄉環境學系",
        "國立臺北大學, 公共行政暨政策學系",
        "國立臺北大學, 犯罪學研究所",
        "國立臺灣海洋大學, 海洋法律研究所",
    ],
    "管理學群": 
    [
        "國立臺北科技大學, 工業工程與管理系",
        "國立臺北科技大學, 經營管理系",
        "國立臺北科技大學, 資訊與財金管理系",
        "國立臺北科技大學, 管理學院管理博士班",
        "國立臺灣海洋大學, 航運管理學系",
        "國立臺灣海洋大學, 運輸科學系",
        "國立臺灣海洋大學, 應用經濟研究所",
        "臺北醫學大學, 醫務管理學系",
        "國立臺北大學, 企業管理學系",
        "國立臺北大學, 國際企業研究所",
        "國立臺北大學, 資訊管理研究所",
        "國立臺北大學, 不動產與城鄉環境學系",
        "國立臺北大學, 公共行政暨政策學系",
        "臺北醫學大學, 國際生技醫療管理博士學位學程",
        "臺北醫學大學, 醫務管理學系碩士班",
        "臺北醫學大學, 大數據科技及管理研究所碩士班",
    ],
    "地球與環境學群": 
    [
        "國立臺北科技大學, 環境工程與管理研究所",
        "國立臺北科技大學, 材料科學與工程研究所",
        "國立臺北科技大學, 資源工程研究所",
        "國立臺北大學, 自然資源與環境管理研究所",
        "國立臺灣海洋大學, 地球科學研究所",
        "國立臺灣海洋大學, 海洋環境資訊系",
        "國立臺灣海洋大學, 海洋環境與生態研究所",
    ],
    "生物資源學群": 
    [
        "國立臺北科技大學, 環境工程與管理研究所",
        "國立臺北科技大學, 材料科學與工程研究所",
        "國立臺北科技大學, 資源工程研究所",
        "國立臺北大學, 自然資源與環境管理研究所",
        "國立臺灣海洋大學, 水產養殖學系",
        "國立臺灣海洋大學, 食品安全與風險管理研究所",
        "國立臺灣海洋大學, 食品科學系",
        "國立臺灣海洋大學, 環境生物與漁業科學學系",
    ],
    "生命科學學群": 
    [
        "國立臺灣海洋大學, 生命科學暨生物科技學系",
        "國立臺灣海洋大學, 海洋生物研究所",
    ],
    "財經學群": 
    [
        "國立臺北科技大學, 資訊與財金管理系",
        "國立臺北大學, 企業管理學系",
        "國立臺北大學, 金融與合作經營學系",
        "國立臺北大學, 會計學系",
        "國立臺北大學, 財政學系",
        "國立臺北大學, 經濟學系",
        "國立臺北大學, 國際企業研究所",
    ],
    "建築與設計": 
    [
        "國立臺北科技大學, 工業設計系產品設計組",
        "國立臺北科技大學, 建築系建築與都市設計碩士班",
        "國立臺北科技大學, 互動設計系",
        "國立臺北科技大學, 設計學院設計博士班",
        "國立臺北大學, 都市計劃研究所",


    ],
    "外語學群": 
    [
        "國立臺北科技大學, 應用英文系",
        "國立臺北大學, 應用外語學系",
    ],
    "文史哲學群": 
    [
        "國立臺北科技大學, 文化事業發展系",
        "國立臺北大學, 中國文學系",
        "國立臺北大學, 歷史學系",
        "國立臺北大學, 民俗藝術與文化資產研究所",
        "國立臺灣海洋大學, 海洋文化研究所",


    ],
    "教育學群": 
    [
        "國立臺北科技大學, 技術及職業教育研究所",


    ],

    "醫藥衛生學群":
    [
        "臺北醫學大學, 保健營養學系博士班",
        "臺北醫學大學, 國際醫學研究碩士學位學程",
        "臺北醫學大學, 牙醫學系碩士班",
        "臺北醫學大學, 牙體技術學系碩士班",
        "臺北醫學大學, 藥學系碩士班",
        "臺北醫學大學, 生藥學研究所碩士班",
        "臺北醫學大學, 臨床基因體學暨蛋白質體學碩士學位學程",
        "臺北醫學大學, 護理學系碩士班",
        "臺北醫學大學, 公共衛生學系碩士班",
        "臺北醫學大學, 傷害防治學研究所碩士班",
        "臺北醫學大學, 全球衛生暨衛生安全碩士學位學程",
        "臺北醫學大學, 醫學檢驗暨生物技術學系碩士班",
        "臺北醫學大學, 國際轉譯科學碩士學位學程",
        "臺北醫學大學, 癌症生物學與藥物研發研究所碩士班",
        "臺北醫學大學, 國際神經醫學碩士學位學程",
        "臺北醫學大學, 心智意識與腦科學研究所碩士班",
        "臺北醫學大學, 醫學人文研究所碩士班",
        "臺北醫學大學, 生醫光機電研究所碩士班",
        "臺北醫學大學, 保健營養學系碩士班",
        "臺北醫學大學, 代謝與肥胖科學研究所碩士班",
        "臺北醫學大學, 食品安全學系碩士班",
        "臺北醫學大學, 國際醫學研究博士學位學程",
        "臺北醫學大學, 細胞治療與再生醫學國際博士學位學程",
        "臺北醫學大學, 牙醫學系博士班",
        "臺北醫學大學, 藥學系博士班",
        "臺北醫學大學, 中草藥臨床藥物研發博士學位學程",
        "臺北醫學大學, 護理學系博士班",
        "臺北醫學大學, 國際高齡健康暨長期照護博士學位學程",
        "臺北醫學大學, 公共衛生學系博士班",
        "臺北醫學大學, 傷害防治學研究所博士班",
        "臺北醫學大學, 全球衛生暨衛生安全博士學位學程",
        "臺北醫學大學, 醫學生物科技博士學位學程",
        "臺北醫學大學, 癌症生物學與藥物研發博士學位學程",
        "臺北醫學大學, 國際轉譯科學博士學位學程",
        "臺北醫學大學, 心智意識與腦科學研究博士學位學程",
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

var btn = document.getElementById('sendEmailButton');

btn.addEventListener('click',function(e)
{
    e.preventDefault()
    document.getElementById("resultName").textContent = name;
    document.getElementById("resultEmail").textContent = email;
    var body = 'name:' + name +'<br/> email:'+ email + '<br/>' + window.location.href;
    console.log(window.location.href);

Email.send({
Host : "smtp.elasticemail.com",
Username : "penguinlai4@gmail.com",
Password : "AFB8354519A6271592DBAEE13591439E3FA1",
To : email,
From : "penguinlai4@gmail.com",
Subject : "恭喜您已完成四校升學測試，這是您的結果",
Body : body
}).then(
message => alert(message)
);
})
