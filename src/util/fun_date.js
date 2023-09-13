exports.dateFullNow = () => {
    var currentDate = new Date();
    // ดึงข้อมูลวันที่
    var day = ("0" + currentDate.getDate()).slice(-2);
    var month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // เดือนใน JavaScript เริ่มนับจาก 0
    var year = currentDate.getFullYear();
    // ดึงข้อมูลเวลา
    var hours = ("0" + currentDate.getHours()).slice(-2);
    var minutes = ("0" + currentDate.getMinutes()).slice(-2);
    var seconds = ("0" + currentDate.getSeconds()).slice(-2);
    // สร้างสตริงเพื่อแสดงผลวันที่และเวลาปัจจุบัน
    var currentDateTime = day + "-" + month + "-" + year + " " + hours + ":" + minutes + ":" + seconds;
    return currentDateTime
},
exports.dateNow = () => {
    var currentDate = new Date();
    // ดึงข้อมูลวันที่
    var day = ("0" + currentDate.getDate()).slice(-2);
    var month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // เดือนใน JavaScript เริ่มนับจาก 0
    var year = currentDate.getFullYear();
    // ดึงข้อมูลเวลา
    var hours = ("0" + currentDate.getHours()).slice(-2);
    var minutes = ("0" + currentDate.getMinutes()).slice(-2);
    var seconds = ("0" + currentDate.getSeconds()).slice(-2);
    // สร้างสตริงเพื่อแสดงผลวันที่และเวลาปัจจุบัน
    var currentDateTime = day + "-" + month + "-" + year ;
    return currentDateTime
}