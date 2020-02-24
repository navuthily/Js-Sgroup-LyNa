 function bai1() {
    var date = new Date();
    var h = date.getHours();
    var n = date.getDate();
    document.getElementById("hour").innerHTML = "bay gio la: " + h + " gio";
    document.getElementById("day1").innerHTML = "hom nay la ngay: " + n;
    day = date.getDate()
    month = date.getMonth();
    let strMonth = (month < 9) ? ("0" + (month + 1)) : String(month + 1);
    let strDay = (day < 10) ? ("0" + day) : String(day);
    let strYear = String(date.getFullYear());
    document.getElementById("mm-dd-yyyy").innerHTML = "Tháng - Ngày - Năm: " +
       strMonth + "-" + strDay + "-" + strYear;
    document.getElementById("mm/dd/yyyy").innerHTML = "Tháng / Ngày / Năm: " +
       strMonth + "/" + strDay + "/" + strYear;
    document.getElementById("dd-mm-yyyy").innerHTML = "Ngày - Tháng - Năm: " +
       strDay + "-" + strMonth + "-" + strYear;
    document.getElementById("dd/mm/yyyy").innerHTML = "Ngày / Tháng / Năm: " +
       strDay + "/" + strMonth + "/" + strYear;
    var thang;
    var m = strMonth;
    switch (m) {
       case '01':
          thang = "thang mot";
          break;
       case '02':
          thang = "thang hai";
          break;
       case '03':
          thang = "thang mot";
          break;
       case '04':
          thang = "thang hai";
          break;
       case '05':
          thang = "thang mot";
          break;
       case '06':
          thang = "thang hai";
          break;
       case '07':
          thang = "thang mot";
          break;
       case '08':
          thang = "thang hai";
          break;
       case '09':
          thang = "thang mot";
          break;
       case '10':
          thang = "thang hai";
          break;
       case '11':
          thang = "thang mot";
          break;
       case '12':
          thang = "thang hai";
          break;
    }
    document.getElementById('bai8').innerHTML = "thang nay la: " + thang;
 }
 function bai4() {
    var str = document.getElementById("four").value;
    var strArr = str.split("");
    for (var i = 0; i < str.length; i++) {
       strArr[i] = String.fromCharCode(str.charCodeAt(i) + 1);
    }

    document.getElementById('bai4').innerHTML = strArr.join("");

 }
 function bai5() {
    var str = document.getElementById("five").value;
    var k = str.length / 2;
    var strAfter = str.substr(k - 1, 3);
    document.getElementById('bai5').innerHTML = strAfter;
 }
 //bai 6 vi du cho [1,2,3,4,2,3,4,2,2]=>2
 function bai6() {
    var arr = [5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1, 1, 21, 1, 1, 1, 1, 1, 1];
    var a = arr.sort();
    var i = 0,
       max = 0,
       index = 0;
    var frequency;
    while (i < arr.length) {
       frequency = 1;
       while (a[i] == a[i + 1]) {
          frequency++;
          i++;
       }
       if (max < frequency) {
          max = frequency;
          index = i;
       }
       i++;
    }
    document.getElementById('bai6').innerHTML = a[index];
 }
 function bai7() {
    var a = document.getElementById("seven").value;

    if (a.indexOf('java') >= 0) {
       document.getElementById('bai7').innerHTML = "chuoi co chua 'java'";
    } else {
       document.getElementById('bai7').innerHTML = "chuoi ko chua 'java'";
    }
 }
 function longestword() {
    var str = document.getElementById("nine").value;;
    var replaced = str.replace(/[^A-Za-z\s]/g, "");
    var final = replaced.split(" ").sort(function (a, b) {
       return b.length - a.length
    })
    document.getElementById('bai9').innerHTML = (final[0]);
 }
 //this function for test 10 
 function main() {
    var a = Number(document.getElementById("start").value);
    var b = Number(document.getElementById("end").value);
    var i;
    var j;
    var flag;
    var arr = [];
    for (i = a ; i <=b; ++i) {
       flag = 1;
       for (j = 2; j <= i / 2; ++j) {
          if (i % j == 0) {
             flag = 0;
             break;
          }
       }
       if (flag == 1) {
         if(a<b){
             arr.push(i);
             document.getElementById('main').innerHTML = arr.join(" ");
         }
         else{
            alert("hay nhap lai");
         }
       }
    }
    return;
 }
 