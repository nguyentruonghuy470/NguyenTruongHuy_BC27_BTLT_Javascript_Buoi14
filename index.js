
/**
 * INPUT: Nhập vào tháng và năm 
 * PROCESS: (Pseudo code)
        1. lấy được input (hardcode) là var thang, year;
        2. tạo biến var kq để in kết quả sau khi kiểm tra
           tạo biến var date chứa giá trị ngày
        3. kiểm tra năm nhuận và năm không nhuận:
        4. In ra số ngày tương ứng vs tháng và năm 
 * OUTPUT: In kết quả ra màn hình
 */
function ktraNamNhuan() {
  var kq= document.getElementById("kq");
  var date = 0;
  var thang= parseInt(document.getElementById("month").value);
  var year= parseInt(document.getElementById("year").value);
  if (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
      if (thang == 2)
      {
        date = 29;
        kq.innerHTML="Tháng "+thang+ " Năm " +year+" có " +date+ " ngày";
      }  
  } else if  (thang==1 || thang==3 || thang==5 || thang==7 || thang==8 || thang==10 || thang==12){
      date = 31;
      kq.innerHTML="Tháng "+thang+ " Năm " +year+" có " +date+ " ngày";
  } else if  (thang==4 || thang==6 || thang==9 || thang==11){
      date = 30;
      kq.innerHTML="Tháng "+thang+ " Năm " +year+" có " +date+ " ngày";
  } else if (thang==2) {
        date = 28;
        kq.innerHTML="Tháng "+thang+ " Năm " +year+" có " +date+ " ngày";
  } else 
      kq.innerHTML="Kiểm tra lại thông tin";
  
}

/**
 * INPUT: Nhập số có 3 chữ số
 * PROCESS: (Pseudo code)
        1. lấy được input (hardcode) là var number7, amountUSD;
        2. tạo biến var hangtram, var hangchuc, var hangdonvi chứa giá trị mỗi khi tính lấy ra hàng trăm, hàng chục, hàng đơn vị
           tạo biến var chusohangtram=""; var chusohangchuc=""; var chusohangdonvi=""; chứa giá trị sau khi quy đổi thành chữ số
        3. Kiểm tra các điều kiện:
        4. Đổi ra các giá trị chữ số tương ứng
 * OUTPUT: In kết quả ra màn hình
 */
function docSo(){
var number7= parseInt(document.getElementById("number7").value);
var kq=document.getElementById("kq");

var hangtram=0;
var hangchuc=0;
var hangdonvi=0;
var chusohangtram="";
var chusohangchuc="";
var chusohangdonvi="";

  if(number7>=100 && number7<=999){
      hangtram=number7/100;
      hangtram=Math.trunc(hangtram,0);
      console.log(hangtram);
      hangchuc=Math.trunc((number7/10)%10);
      console.log(hangchuc);
      hangdonvi=number7%10;
      console.log(hangdonvi);
      switch (hangtram)
      {
        
          case 1 :{      
            chusohangtram="Một Trăm";
            break;
          }
          case 2 : {
            chusohangtram="Hai Trăm"
            break;
          }
          case 3: {
            chusohangtram="Ba Trăm";
            break;
        }
          case 4: {
            chusohangtram="Bốn Trăm";
            break;
          }
          case 5: {
            chusohangtram="Năm Trăm";
            break;
        }
          case 6 : {
            chusohangtram="Sáu Trăm";
            break;
        }
          case 7: {
            chusohangtram="Bảy Trăm";
            break;
        }
          case 8: {
            chusohangtram="Tám Trăm";
            break;
        }
          case 9: {
            chusohangtram="Chín Trăm";
            break;
        }
          default : {
            kq.innerHTML="Kiểm tra lại thông tin";
          }
      }
      switch (hangchuc)
      {   
          case 0: {
            chusohangchuc= " Lẻ "
            break;  
          }
          case 1: {      
            chusohangchuc=" Mười";
            break;
        }

          case 2: {
            chusohangchuc=" Hai Mươi"
            break;
          }
          case 3 : {
            chusohangchuc=" Ba Mươi";
            break;
        }
          case 4 : {
            chusohangchuc=" Bốn Mươi";
            break;
        }
          case 5: {
            chusohangchuc=" Năm Mươi";
            break;
        }
          case 6 : {
            chusohangchuc=" Sáu Mươi";
            break;
        }
          case 7: {
            chusohangchuc=" Bảy Mươi";
            break;
        }
          case 8 : {
            chusohangchuc=" Tám Mươi";
            break;
        }
          case 9: {
            chusohangchuc=" Chín Mươi";
            break;
        }
          default : {
            kq.innerHTML="Kiểm tra lại thông tin";
          }
      }
      switch (hangdonvi)
      {
          case 1 : {      
            chusohangdonvi=" Một";
            break;
          }
          case 2 : {
            chusohangdonvi=" Hai"
            break;
          }
          case 3 : {
            chusohangdonvi=" Ba";
            break;
        }
          case 4 : {
            chusohangdonvi=" Bốn";
            break;
          }
          case 5 : {
            chusohangdonvi=" Năm";
            break;
        }
          case 6 : {
            chusohangdonvi=" Sáu";
            break;
        }
          case 7 : {
            chusohangdonvi=" Bảy";
            break;
        }
          case 8 : {
            chusohangdonvi=" Tám";
            break;
        }
          case 9 : {
            chusohangdonvi=" Chín";
            break;
        }
          default : {
            kq.innerHTML="Kiểm tra lại thông tin";
          }
      }
  }
  else if(number7>=1 && number7<=99){
      hangchuc=Math.trunc((number7/10)%10);
      console.log(hangchuc);
      hangdonvi=number7%10;
      console.log(hangdonvi);
      switch (hangchuc)
      { 
          case 1: {      
            chusohangchuc=" Mười ";
            break;
        }
          case 2: {
            chusohangchuc=" Hai Mươi "
          }
          case 3 : {
            chusohangchuc=" Ba Mươi";
            break;
        }
          case 4: {
            chusohangchuc=" Bốn Mươi";
            break;
        }
          case 5: {
            chusohangchuc=" Năm Mươi";
            break;
        }
          case 6: {
            chusohangchuc=" Sáu Mươi";
            break;
        }
          case 7: {
            chusohangchuc=" Bảy Mươi";
            break;
        }
          case 8: {
            chusohangchuc=" Tám Mươi";
            break;
        }
          case 9: {
            chusohangchuc=" Chín Mươi";
            break;
        }
          default : {
            kq.innerHTML="Kiểm tra lại thông tin";
          }
      }
      switch (hangdonvi)
      {
          case 1 : {      
            chusohangdonvi=" Một";
            break;
          }
          case 2 : {
            chusohangdonvi=" Hai"
            break;
          }
          case 3 : {
            chusohangdonvi=" Ba";
            break;
        }
          case 4 : {
            chusohangdonvi=" Bốn";
            break;
          }
          case 5 : {
            chusohangdonvi=" Năm";
            break;
        }
          case 6 : {
            chusohangdonvi=" Sáu";
            break;
        }
          case 7 : {
            chusohangdonvi=" Bảy";
            break;
        }
          case 8 : {
            chusohangdonvi=" Tám";
            break;
        }
          case 9 : {
            chusohangdonvi=" Chín";
            break;
        }
          default : {
            kq.innerHTML="Kiểm tra lại thông tin";
          }
    }
  }
  else
    alert("VUI LÒNG KIỂM TRA THÔNG TIN");
  
  kq.innerHTML=(chusohangtram+chusohangchuc+ chusohangdonvi);
}

/**
 * INPUT: Nhập vào 3 giá trị ngày, tháng, năm
 * PROCESS: (Pseudo code)
        1. lấy được input (hardcode) là var date, month, year;
        2. tạo biến var kq để in kết quả sau khi kiểm tra
        3. Kiểm tra các điều kiện tương ứng vs các tháng
        4. Tinh các giá trị: ngày, tháng, năm  
 * OUTPUT:  In kết quả ra màn hình của ngày hôm qua
 */
function tinhNgayHomQua()
{
  var date = document.getElementById("date1").value;
  var month = document.getElementById("month1").value;
  var year = document.getElementById("year1").value;
  var kq = document.getElementById("kq");

  if (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12)
  {   
      if(date>30)
      {
        alert ("Kiểm tra lại thông tin ngày");
      }
      else if(date==1 && month==1){
        date=31;
        month=12;
        year--;
      }
      else if (date==1 && month==3)
      {
        date=28;
        month--;
      }
      else if (date==1){
        date=30;
        month--;
      }
      else
        date = date - 1;
  }
  else if  (month==4 || month==6 || month==9 || month==11){ 
    if(date>30)
    {
      alert ("Kiểm tra lại thông tin ngày");
    }
    else
      date = date - 1;
  }
  else if (month==2)
  {   
    if(date<1 || date>28)
    {
      alert("Tháng 2 có 28 ngày");
    }
    else
      date = date - 1;
  }
  else 
      kq.innerHTML="Vui lòng kiểm tra";
  
  kq.innerHTML=(date+"/" +month+ "/" +year);
}

/**
 * INPUT: Nhập vào 3 giá trị ngày, tháng, năm
 * PROCESS: (Pseudo code)
        1. lấy được input (hardcode) là var date2, month2, year2;
        2. tạo biến var kq để in kết quả sau khi kiểm tra
        3. Kiểm tra các điều kiện tương ứng vs các tháng
        4. Tinh các giá trị: ngày, tháng, năm  
 * OUTPUT:  In kết quả ra màn hình của ngày mai
 */
function tinhNgayMai()
{
  var date2 = document.getElementById("date1").value;
  var month2 = document.getElementById("month1").value;
  var year2 = document.getElementById("year1").value;
  var kq = document.getElementById("kq");

  if (month2==1 || month2==3 || month2==5 || month2==7 || month2==8 || month2==10 || month2==12)
  {
      if(date2>30)
      {
        alert ("Kiểm tra lại thông tin ngày");
      }
      else if (date2==31){
        if (month2==12)
        {
          date2=1;
          month2=1;
          year2++;
        
        }
        else
        {
          var date2=0;
          date2= date2+1;
          month2++;  
        }
      }
      else
        date2++;
  }
  else if  (month2==4 || month2==6 || month2==9 || month2==11)
  {   
      if(date2>30)
      {
        alert ("Kiểm tra lại thông tin ngày");
      }
      if (date2==30){
        var date2=0;
        date2= date2+1;
        month2++;
      }
      else
        date2++;
  }
  else if ( month2==2 )
  {   if(date2<1 || date2>28)
      {
        alert("Tháng 2 có 28 ngày")
      }
      else if (date2==28){
        var date2=1;
        month2++;
      }
      else
        date2++;
  }
  else 
  {
   alert("Vui lòng nhập đầy đủ thông tin")
  }
  kq.innerHTML=(date2+"/" +month2+ "/" +year2);
}

/**
 * INPUT: Nhập tên, tọa độ x , tọa độ y của 3 sinh viên và tọa độ x, y của trường
 * PROCESS: (Pseudo code)
        1. lấy được input (hardcode) là tên sinh viên var name1, name2, name3;
           lấy được input (hardcode) là tọa độ x của sinh viên: var toadox1, toadox2, toadox3;
           lấy được input (hardcode) là tọa độ y của sinh viên: var toadoy1, toadoy2, toadoy3;
           lấy được input (hardcode) là tọa độ x, toa độ y của trường học: var toadox0, var toadoy0;
        2. tạo biến var d1,d2,d3 chứ giá trị tính quãng đường theo tọa độ 2 đầu của 1 đoạn thẳng trên mặt phẳng
              var d1=Math.sqrt(Math.pow(toadox0-toadox1,2)+Math.pow(toadoy0-toadoy1,2));
              var d2=Math.sqrt(Math.pow(toadox0-toadox2,2)+Math.pow(toadoy0-toadoy2,2));
              var d3=Math.sqrt(Math.pow(toadox0-toadox3,2)+Math.pow(toadoy0-toadoy3,2));
        3. kiểm tra các điều kiện (so sánh các quãng đường của 3 sinh viên)
        4. Tìm Sinh viên xa trường nhất
 * OUTPUT: In ra kết quả tên sinh viên xa trường nhất
 */
function tinhKhoangCach(){
  var kq=document.getElementById("kq");

  var name1=document.getElementById("student1").value;
  var name2=document.getElementById("student2").value;
  var name3=document.getElementById("student3").value;

  var toadox0=document.getElementById("toadox0").value;
  var toadox1=document.getElementById("toadox1").value;
  var toadox2=document.getElementById("toadox2").value;
  var toadox3=document.getElementById("toadox3").value;

  var toadoy0=document.getElementById("toadoy0").value;
  var toadoy1=document.getElementById("toadoy1").value;
  var toadoy2=document.getElementById("toadoy2").value;
  var toadoy3=document.getElementById("toadoy3").value;

  var d1=Math.sqrt(Math.pow(toadox0-toadox1,2)+Math.pow(toadoy0-toadoy1,2));
  var d2=Math.sqrt(Math.pow(toadox0-toadox2,2)+Math.pow(toadoy0-toadoy2,2));
  var d3=Math.sqrt(Math.pow(toadox0-toadox3,2)+Math.pow(toadoy0-toadoy3,2));
  
  console.log(d1);
  if(d1>d2 && d1>d3){
    kq.innerHTML="Sinh viên xa trường nhất là " +name1;
  } else if (d2>d1 && d2>d3 ){
    kq.innerHTML="Sinh viên xa trường nhất là " +name2;
  } else if (d3>d1 && d3>d2){
    kq.innerHTML="Sinh viên xa trường nhất là " +name3;
  } else
    kq.innerHTML="Vui lòng kiểm tra lại thông tin";

}