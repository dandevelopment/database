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

//AWARD NAME, HOURS | description
setCookie('AWARD_law enforcement training', '60|Recognizes the accumulation of 60 hours of training in decided areas.|AWARD')
setCookie('AWARD_community service', '100|Acknowledges 100 hours of community service, including crowd trafficcontrol, parking service, community events, etc. Service must bepreapproved and logged by the Advisor.|AWARD')
setCookie('AWARD_crime prevention', '25|Includes the basic 8 hours of crime prevention instruction as well as an additional 8 hours of training in areas such as neighborhood watch, home security survey, and bicycle registration. The award is presented to Explorers who participate in at least three departmental crime prevention projects with a total of 25 hours of activity.|AWARD')
setCookie('AWARD_law enforcement service', '100|Includes assistance to the department in areas such as records, communications, data processing, etc. It recognizes an accumulation of 100 hours of service.|AWARD')
setCookie('AWARD_emergency preparedness', '1|Certifies that the Explorer has received training in advanced first aid and CPR; has received training in how the post would assist in a disaster, such as flood, tornado, hurricane, etc.; and has participated in at least one civil defense or community-wide disaster training exercise.|AWARD')
setCookie('AWARD_tenure', '1|Awarded to those Explorers who complete one year of satisfactory service to the post.|AWARD')
setCookie('AWARD_perfect attendance', '1|Recognizes attendance at each scheduled meeting of the post during thepreceding year.|AWARD')
setCookie('AWARD_drug abuse prevention', '6|Acknowledges proficiency in drug abuse prevention training and service. Requires 6 hours of advanced training.|AWARD')
setCookie('AWARD_eagle or gold award recognition', '1|May be worn by an Explorer who has achieved the Boy Scouts of America or Girl Scouts of the U.S.A. highest award and honor (the BSA Eagle or GSUSA Gold).|AWARD')
setCookie('AWARD_explorer of the year', '1|This Explorer is selected based on dependability, attitude, attendance, and contributions to the post, department, and community. Explorers of the Year are obviously recognized for their outstanding performances and personal attributes.|AWARD')

setCookie('AWARD_history of law enforcement', '1|Part of Law Enforcement Training.|AWARD')
setCookie('AWARD_the contemporary law enforcement', '2|Part of Law Enforcement Training.|AWARD')
setCookie('AWARD_the criminal justice system', '2|Part of Law Enforcement Training.|AWARD')
setCookie('AWARD_radio procedures', '2|Part of Law Enforcement Training.|AWARD')
setCookie('AWARD_basic patrol procedures', '3|Part of Law Enforcement Training.|AWARD')
setCookie('AWARD_report wrighting', '4|Part of Law Enforcement Training.|AWARD')
setCookie('AWARD_criminal law', '6|Part of Law Enforcement Training.|AWARD')
setCookie('AWARD_junevel law', '2|Part of Law Enforcement Training.|AWARD')
setCookie('AWARD_traffic law', '2|Part of Law Enforcement Training.|AWARD')
setCookie('AWARD_procedures of investigation', '6|Part of Law Enforcement Training.|AWARD')
setCookie('AWARD_human relations', '4|Part of Law Enforcement Training.|AWARD')
setCookie('AWARD_crime prevention', '8|Part of Law Enforcement Training.|AWARD')
setCookie('AWARD_accident investigation', '4|Part of Law Enforcement Training.|AWARD')
setCookie('AWARD_crime scene investigation', '4|Part of Law Enforcement Training.|AWARD')
setCookie('AWARD_fingerprinting and classification', '4|Part of Law Enforcement Training.|AWARD')
setCookie('AWARD_narcotics and dangerous drugs', '2|Part of Law Enforcement Training.|AWARD')
setCookie('AWARD_arrest and search', '4|Part of Law Enforcement Training.|AWARD')

var achl = [];


    //achl =  values;

var i45 = 0;
while(getCookies().length > i45){
     if(getCookies2()[i45].split('#$')[1].split('_')[0] == 'AWARD'){
     achl.push(getCookies2()[i45].split('#$')[1].split('_')[1])
     }
  i45++
}

console.log('getCookies: ' + getCookies().length)
console.log('Achievments: '+ achl.length)
var achievments = achl;
function getit(place){
return document.getElementById(place)
}

if(getCollegeOptions() == ''){
addCollegeOption('none')
}

function notify(message){
    var newE = document.createElement('div');
    newE.style.width = '30%';
    newE.style.backgroundColor = '#4f4f4f';
    newE.style.borderRadius = '10px';
    newE.style.color = 'white';
    newE.style.boxShadow = '0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    newE.style.position = 'fixed';
    newE.style.bottom = '10px';
    newE.style.right = '10px';
    newE.innerHTML = message;
    //document.insertBefore(newE, document.body.childNodes[0])
    document.body.innerHTML = '<div style="position:absolute;bottom:0px;right:0px;"><p style="width:30%;background-color:#3a3a3a;border-radius:10px;color:white;boxShadow:0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;margin-right:30px;margin-bottom:30px;"><p style="">' + message + '</p></p></div>' + document.body.innerHTML
}

function getCompletedAchievments(user){
         var i = user;
                    var doneAchievments = '';
                    var i62 = 0;
                    //for each achievment
      
                    while(getAchievments().length > i62){
                    // console.log(Number(getFractionCompleted(i, getAchievments()[i62]).split('/')[0]) + '/' + Number(getFractionCompleted(i, getAchievments()[i62]).split('/')[1]))
                    if(Number(getFractionCompleted(i, getAchievments()[i62]).split('/')[0]) >= Number(getFractionCompleted(i, getAchievments()[i62]).split('/')[1])){
                      doneAchievments = doneAchievments + getAchievments()[i62] + ', ';
                      //console.log('Added ' + getAchievments()[i62])
                    }
                    i62++
                    }
                    if (doneAchievments == '') {
                        doneAchievments = 'none'
                    }
                    return doneAchievments
                
}
function getAchievmentCompletedHours(user, achievment){
var i = 0;
    var nmb = 0;
    while(getCookie(user + 'AchievementRecord' + i) != ''){
   var currentAchievment = getCookie(user + 'AchievementRecord' + i).split('|')
   var hoursOfCurrentAchievment = Number(currentAchievment[3])
   if(currentAchievment[2] == achievment){
   nmb += hoursOfCurrentAchievment;
   }
    i++
  }
    return nmb
}
function getFractionCompleted(user, achievment){
  var i = 0;
  var nmb = 0;
  var outOf = getAward(achievment).split('|')[0];
  
  nmb = getAchievmentCompletedHours(user, achievment)
  return nmb + "/" + outOf
}
function getAward(award){
return getCookie('AWARD_' + award)
     return 'none found'
}

function getAchievments(){
     return achievments;
     /*
  var i = 0;
  var toReturn = [];
  while(getCookie(user + 'AchievementRecord' + i) != ''){
    var currentAchievment = getCookie(user + 'AchievementRecord' + i).split('|')
    var cont = true;
    var i34 = 0;
    while(i34 < toReturn.length){
      console.log(i34 + ':  CURRENT ACHIVEMENT achievments:' + currentAchievment[2] + '  TORETURN name:' + toReturn[i34].achievments)
          if(currentAchievment[2] == toReturn[i34].achievments){
          cont = i34;
         //   console.log('TAGGED ' + i34)
          }
      i34++
    }
    if(cont){
        toReturn.push({'name':currentAchievment[0], 
                      'user':currentAchievment[1],
                       'achievments':currentAchievment[2],
                       'hours':currentAchievment[3]
                      })
    } else {
    toReturn[cont].hours += currentAchievment[i]; 
    }
    
    i++
  }
  
  return toReturn
  */
}

function setShirtSize(user, data){
   setCookie('ShirtSize.' + user, data)
}
function getShirtSize(user){
    if(getCookie('ShirtSize.' + user) != ''){
    return getCookie('ShirtSize.' + user)
    } else {
     return 'none'   
    }
}
function getShirtSizeOptions(){
    return ['Option1','Option2','Option3']
}
function setPantSize(user, data){
     return setCookie('PantSize.' + user, data)
}
function getPantSize(user){
    if(getCookie('PantSize.' + user) != ''){
    return getCookie('PantSize.' + user)
    } else {
     return 'none'   
    }
}
function getPantSizeOptions(){
    return ['Option1','Option2','Option3']
}
function setHatSize(user, data){
     setCookie('HatSize.' + user, data)
}
function getHatSize(user){
    if(getCookie('HatSize.' + user) != ''){
    return getCookie('HatSize.' + user)
    } else {
     return 'none'   
    }
}
function getHatSizeOptions(){
    return ['Option1','Option2','Option3']
}


function getCollegeOptions(){
    return getCookie('COLLEGE_OPTIONS');
}
function addCollegeOption(college){
    setCookie('COLLEGE_OPTIONS', getCollegeOptions() + '|' + college)
}


function setCollege(user, data){
 setCookie('College.' + user, data)
}
function getCollege(user){
    if(getCookie('College.' + user) != ''){
    return getCookie('College.' + user)
    } else {
     return 'none'   
    }
}
function setOccupation(user, data){
     setCookie('Occupation.' + user, data)
}
function getOccupation(user){
    if(getCookie('Occupation.' + user) != ''){
    return getCookie('Occupation.' + user)
    } else {
     return 'none'   
    }
}
function setDateTerminated(user, data){
       setCookie('DateTerminated.' + user, data)
}
function getDateTerminated(user){
    if(getCookie('DateTerminated.' + user) != ''){
     return getCookie('DateTerminated.' + user)
    } else {
     return 'none'   
    }
}
function setNoteTerminated(user, data){
       setCookie('NoteTerminated.' + user, data)
}
function getNoteTerminated(user){
    if(getCookie('NoteTerminated.' + user) != ''){
      return getCookie('NoteTerminated.' + user)
    } else {
     return 'none'   
    }
}
function setReasonTerminated(user, data){
       setCookie('ReasonTerminated.' + user, data)
}
function getReasonTerminated(user){
    if(getCookie('ReasonTerminated.' + user) != ''){
      return getCookie('ReasonTerminated.' + user)
    } else {
     return 'none'   
    }
}

function addAchievement(Name, User, Achievments, Hours){
  var i = 0;
  while (getCookie(User + 'AchievementRecord' + i) != ''){
    i++ 
  }
  setCookie(User + 'AchievementRecord' + i, Name + '|' + User + '|' + Achievments + '|' + Hours)
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
  var i = 0;
  while (getCookie(user + 'MeetingRecord' + i) != ''){
    i++ 
  }
  setCookie(user + 'MeetingRecord' + Math.floor(i), type + ':' + meetings)
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
 // addMeetingRecord(user, getCookie('meetings.' + user), 'GET')
return getCookie('meetings.' + user)
return ''
}

function subtractMeetings(user, meetings){
  addMeetingRecord(user, meetings, 'SUBTRACT')
setCookie('meetings.'+user, Number(getCookie('meetings.' + user)) - Number(meetings)) 
  return ''
}

function addHourRecord(user, hour, type){
  var i = 0;
  while (getCookie(user + 'HourRecord' + i + 1) != ''){
    i++ 
  }
  setCookie(user + 'HourRecord' + Math.floor(i), type + ':' + hour)
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
  //addHourRecord(user, getCookie('hours.' + user), 'GET')
return getCookie('hours.' + user)
return ''
}

function subtractHours(user, hours){
  addHourRecord(user, hours, 'SUBTRACT')
setCookie('hours.'+user, Number(getCookie('hours.' + user)) - Number(hours)) 
  return ''
}

function addPointRecord(user, point, type){
  var i = 0;
  while (getCookie(user + 'PointRecord' + i + 1) != ''){
    i++ 
  }
  setCookie(user + 'PointRecord' + Math.floor(i), type + ':' + point)
  return ''
}

function setPoints(user, points){
  addPointRecord(user, points, 'SET')
setCookie('points.' + user, points)  
  return ''
}

function getPoints(user){
 // addPointRecord(user, getCookie('points.' + user), 'GET')
return getCookie('points.' + user)
return ''
}
function getPointsPercent(user){
//  addPointRecord(user, '%', 'GETpercent')
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
  //  cname = cname
  if(localStorage.getItem(cname) != null){
  return localStorage.getItem(cname).split('#$')[0];
  } else {
  return ''
  }
}

function getCookies2() {
    var i   = 0;
  //if(localStorage.getItem(cname) != null){
  var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }
        return values;
  //} else {
  return ''
  //}
}

function getCookies() {
    var i   = 0;
  //if(localStorage.getItem(cname) != null){
  var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push(getCookie(keys[i]));
    }
        return values;
  //} else {
  return ''
  //}
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
    /*
    if(cname.length >= 5){
    if(cname.charAt(5) == '_'){
        var i = 0;
        while (getCookie('TITLE_' + i) != ''){
               
               i++
               }
        if(getCookie(cname) != ''){
        
        } else {
    setCookie('TITLE_' + i, cname)
    }
    }
}*/
  return localStorage.setItem(cname, val + '#$' + cname)
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
