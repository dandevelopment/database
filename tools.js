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
function addEventRecord(Name, Hours, Achievments, User){
  var i = 1;
  while (getCookie('EventRecord' + i) != ''){
    i++ 
  }
  setCookie('EventRecord' + Math.floor(i + 1), Name + '|' + User + '|' + Hours + '|' + Achievments)
  return ''
}
/*
function getEventRecordHours(user, event){
  var i = 0;
  while (getCookie('EventRecord' + i) != ''){
    i++ 
  }
  setCookie('EventRecord' + Math.floor(i + 1), Name + '|' + Hours + '|' + Achievments)
  return ''
}
*/
function addMeetingRecord(user, meetings, type){
  var i = 1;
  while (getCookie(user + 'MeetingRecord' + i) != ''){
    i++ 
  }
  setCookie(user + 'MeetingRecord' + Math.floor(i + 1), type + ':' + meetings)
  return ''
}
//REMEMBER A ":" IS ADDED BETWEEN TYPE AND MEETINGS
function setMeetings(user, meetings){ 
  addMeetingRecord(user, meetings, 'SET')
  setCookie('meetings.' + user, meetings) 
  return ''
}

function addMeetings(user, meetings){
  addMeetingRecord(user, meetings, 'ADDED')
  setCookie('meetings.'+user, Number(getCookie('meetings.' + user)) + Number(meetings));
return ''
}

function getMeetings(user){
  addMeetingRecord(user, getCookie('meetings.' + user), 'GET')
return getCookie('meetings.' + user)
return ''
}

function subtractMeetings(user, meetings){
  addMeetingRecord(user, meetings, 'SUBTRACT')
setCookie('meetings.'+user, Number(getCookie('meetings.' + user)) - Number(meetings)) 
  return ''
}

function addHourRecord(user, hour, type){
  var i = 1;
  while (getCookie(user + 'HourRecord' + i) != ''){
    i++ 
  }
  setCookie(user + 'HourRecord' + Math.floor(i + 1), type + ':' + hour)
  return ''
}

function setHours(user, hours){
  addHourRecord(user, hours, 'SET')
  setCookie('hours.'+user, hours)  
return ''
}

function addHours(user, hours){
  addHourRecord(user, hours, 'ADD')
  setCookie('hours.'+user, Number(getCookie('hours.' + user)) + Number(hours)) 
return ''
}

function getHours(user){
  addHourRecord(user, getCookie('hours.' + user), 'GET')
return getCookie('hours.' + user)
return ''
}

function subtractHours(user, hours){
  addHourRecord(user, hours, 'SUBTRACT')
setCookie('hours.'+user, Number(getCookie('hours.' + user)) - Number(hours)) 
  return ''
}

function addPointRecord(user, point, type){
  var i = 1;
  while (getCookie(user + 'PointRecord' + i) != ''){
    i++ 
  }
  setCookie(user + 'PointRecord' + Math.floor(i + 1), type + ':' + point)
  return ''
}

function setPoints(user, points){
  addPointRecord(user, points, 'SET')
setCookie('points.' + user, points)  
  return ''
}

function getPoints(user){
  addPointRecord(user, getCookie('points.' + user), 'GET')
return getCookie('points.' + user)
return ''
}
function getPointsPercent(user){
  addPointRecord(user, '%', 'GETpercent')
  if(getPoints(user) != ''){
return Math.floor((getPoints(user) / getMeetings(user)) * 100)
  } else {return '0'}
}

function subtractPoints(user, points){
  addPointRecord(user, points, 'SUBTRACT')
setCookie('points.'+user, Number(getCookie('points.' + user)) - Number(points)) 
  return ''
}

function addPoints(user, points){
  addPointRecord(user, points, 'ADD')
  setCookie('points.'+user, Number(getCookie('points.' + user)) + Number(points)) 
return ''
}

function getCookie(cname) {
  if(localStorage.getItem(cname) != null){
  return localStorage.getItem(cname);
  } else {
  return ''
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

function archiveData(ID) {
  setCookie(ID, 'deleted.archived.' + getCookie(ID))
  return 'archived.'
}

function unarchiveData(ID) {
  if(getCookie(ID).split('.')[1] == 'archived'){
  setCookie(ID, getCookie(ID).split('.')[2])
  return 'unarchived.'
}
}

function isArchived(ID){
if(getCookie(ID).split('.')[1] == 'archived'){
return true
} else {
return false
}
}

function isDeleted(ID){
if(getCookie(ID).split('.')[0] == 'deleted'){
return true
} else {
return false
}
}

function isDeletedNotArchived(ID){
if(getCookie(ID).split('.')[1] != 'archived' && getCookie(ID).split('.')[0] == 'deleted'){
return true
} else {
return false
}
}

function isArchivedNotDeleted(ID){
if(getCookie(ID).split('.')[1] != 'archived' && getCookie(ID).split('.')[0] == 'deleted'){
return true
} else {
return false
}
}

function isNotArchivedOrDeleted(ID){
if(getCookie(ID).split('.')[1] != 'archived' && getCookie(ID).split('.')[0] != 'deleted'){
return true
} else {
return false
}
}

function deleteData(ID) {
  setCookie(ID, 'deleted.' + getCookie(ID))
  return 'deleted.'
}
