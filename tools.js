/*
Name > FirstName
Option2 > LastName
Option3 > JoinDate
DOB
Address
Town
Cell
Home
Email
*/
function getCookie(cname) {
  if(localStorage.getItem(cname) != ''){
  return localStorage.getItem(cname);
  } else {
  return 'not found'
  }
}

function getCookie2(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, val) {
  return localStorage.setItem(cname, val)
}

function setCookie2(cname, val) {
 document.cookie = cname + '=' + val + ';'
  return 'set.'
}

function setData(ID, Name, Option2, Option3, Dob, Address, Town, Cell, Home, Email) {
  if (Name == '' || Name == undefined) {
    Name = 'NAME:' + getData(ID, 'Name') + '|'
  } else {
    Name = 'NAME:' + Name + '|'
  }
  if (Option2 == '' || Option2 == undefined) {
    Option2 = 'OPTION2:' + getData(ID, 'Option2') + '|'
  } else {
    Option2 = 'OPTION2:' + Option2 + '|'
  }
  if (Option3 == '' || Option3 == undefined) {
    Option3 = 'OPTION3:' + getData(ID, 'Option3') + '|'
  } else {
    Option3 = 'OPTION3:' + Option3 + '|'
  }
  if (Dob == '' || Dob == undefined) {
    Dob = 'DOB:' + getData(ID, 'Dob') + '|'
  } else {
    Dob = 'DOB:' + Dob + '|'
  }
  if (Address == '' || Address == undefined) {
    Address = 'ADDRESS:' + getData(ID, 'Address') + '|'
  } else {
    Address = 'ADDRESS:' + Address + '|'
  }
  if (Town == '' || Town == undefined) {
    Town = 'TOWN:' + getData(ID, 'Town') + '|'
  } else {
    Town = 'TOWN:' + Town + '|'
  }
  if (Cell == '' || Cell == undefined) {
    Cell = 'CELL:' + getData(ID, 'Cell') + '|'
  } else {
    Cell = 'CELL:' + Cell + '|'
  }
  if (Home == '' || Home == undefined) {
    Home = 'HOME:' + getData(ID, 'Home') + '|'
  } else {
    Home = 'HOME:' + Home + '|'
  }
  if (Email == '' || Email == undefined) {
    Email = 'EMAIL:' + getData(ID, 'Email') + '|'
  } else {
    Email = 'EMAIL:' + Email + '|'
  }
  setCookie(ID, Name + Option2 + Option3 + Dob + Address + Town + Cell + Home + Email)
  return 'set.'
}

function getData(Id, Data) {
  var Type = getCookie(Id)
  if (Data == 'Name') {
    return Type.split('NAME:')[1].split('|')[0]
  }
  if (Data == 'Option2') {
    return Type.split('OPTION2:')[1].split('|')[0]
  }
  if (Data == 'Option3') {
    return Type.split('OPTION3:')[1].split('|')[0]
  }
  if (Data == 'Dob') {
    return Type.split('DOB:')[1].split('|')[0]
  }
  if (Data == 'Address') {
    return Type.split('ADDRESS:')[1].split('|')[0]
  }
  if (Data == 'Town') {
    return Type.split('TOWN:')[1].split('|')[0]
  }
  if (Data == 'Cell') {
    return Type.split('CELL:')[1].split('|')[0]
  }
  if (Data == 'Home') {
    return Type.split('HOME:')[1].split('|')[0]
  }
  if (Data == 'Email') {
    return Type.split('EMAIL:')[1].split('|')[0]
  }
  return ''
}

function newData(Name, Option2, Option3, Dob, Address, Town, Cell, Home, Email) {
  var ID = '1'
  var i2 = 1
  while (getCookie(i2) != '') {
    ID = i2 + 1
    i2++
  }
  Name = 'NAME:' + Name + '|'
  Option2 = 'OPTION2:' + Option2 + '|'
  Option3 = 'OPTION3:' + Option3 + '|'
  Dob = 'DOB:' + Dob + '|'
  Address = 'ADDRESS:' + Address + '|'
  Town = 'TOWN:' + Town + '|'
  Cell = 'CELL:' + Cell + '|'
  Home = 'HOME:' + Home + '|'
  Email = 'EMAIL:' + Email + '|'
  setCookie(ID, Name + Option2 + Option3+ Dob+ Address+ Town+ Cell+ Home+ Email)
  return 'set.'
}


function deleteData(ID) {
  setCookie(ID, 'deleted.' + getCookie(ID))
  return 'deleted.'
}
