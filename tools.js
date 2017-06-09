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
if(getCookie('AWARD_arrest and search') == ''){
	
setTimeout(function(){
	setCookie('AWARD_law enforcement training', '60|Recognizes the accumulation of 60 hours of training in decided areas.|AWARD')
},1);setTimeout(function(){
	setCookie('AWARD_community service', '100|Acknowledges 100 hours of community service, including crowd trafficcontrol, parking service, community events, etc. Service must bepreapproved and logged by the Advisor.|AWARD')
},2);setTimeout(function(){
	setCookie('AWARD_crime prevention', '25|Includes the basic 8 hours of crime prevention instruction as well as an additional 8 hours of training in areas such as neighborhood watch, home security survey, and bicycle registration. The award is presented to Explorers who participate in at least three departmental crime prevention projects with a total of 25 hours of activity.|AWARD')
},3);setTimeout(function(){setCookie('AWARD_law enforcement service', '100|Includes assistance to the department in areas such as records, communications, data processing, etc. It recognizes an accumulation of 100 hours of service.|AWARD')
},4);setTimeout(function(){setCookie('AWARD_emergency preparedness', '1|Certifies that the Explorer has received training in advanced first aid and CPR; has received training in how the post would assist in a disaster, such as flood, tornado, hurricane, etc.; and has participated in at least one civil defense or community-wide disaster training exercise.|AWARD')
},5);setTimeout(function(){setCookie('AWARD_tenure', '1|Awarded to those Explorers who complete one year of satisfactory service to the post.|AWARD')
},6);setTimeout(function(){setCookie('AWARD_perfect attendance', '1|Recognizes attendance at each scheduled meeting of the post during thepreceding year.|AWARD')
},7);setTimeout(function(){setCookie('AWARD_drug abuse prevention', '6|Acknowledges proficiency in drug abuse prevention training and service. Requires 6 hours of advanced training.|AWARD')
},8);setTimeout(function(){setCookie('AWARD_eagle or gold award recognition', '1|May be worn by an Explorer who has achieved the Boy Scouts of America or Girl Scouts of the U.S.A. highest award and honor (the BSA Eagle or GSUSA Gold).|AWARD')
},9);setTimeout(function(){setCookie('AWARD_explorer of the year', '1|This Explorer is selected based on dependability, attitude, attendance, and contributions to the post, department, and community. Explorers of the Year are obviously recognized for their outstanding performances and personal attributes.|AWARD')
},10);setTimeout(function(){setCookie('AWARD_history of law enforcement', '1|Part of Law Enforcement Training.|AWARD')
},11);setTimeout(function(){setCookie('AWARD_the contemporary law enforcement', '2|Part of Law Enforcement Training.|AWARD')
},12);setTimeout(function(){setCookie('AWARD_the criminal justice system', '2|Part of Law Enforcement Training.|AWARD')
},13);setTimeout(function(){setCookie('AWARD_radio procedures', '2|Part of Law Enforcement Training.|AWARD')
},14);setTimeout(function(){setCookie('AWARD_basic patrol procedures', '3|Part of Law Enforcement Training.|AWARD')
},15);setTimeout(function(){setCookie('AWARD_report wrighting', '4|Part of Law Enforcement Training.|AWARD')
},16);setTimeout(function(){setCookie('AWARD_criminal law', '6|Part of Law Enforcement Training.|AWARD')
},17);setTimeout(function(){setCookie('AWARD_junevel law', '2|Part of Law Enforcement Training.|AWARD')
},18);setTimeout(function(){setCookie('AWARD_traffic law', '2|Part of Law Enforcement Training.|AWARD')
},19);setTimeout(function(){setCookie('AWARD_procedures of investigation', '6|Part of Law Enforcement Training.|AWARD')
},20);setTimeout(function(){setCookie('AWARD_human relations', '4|Part of Law Enforcement Training.|AWARD')
},21);setTimeout(function(){setCookie('AWARD_crime prevention', '8|Part of Law Enforcement Training.|AWARD')
},22);setTimeout(function(){setCookie('AWARD_accident investigation', '4|Part of Law Enforcement Training.|AWARD')
},23);setTimeout(function(){setCookie('AWARD_crime scene investigation', '4|Part of Law Enforcement Training.|AWARD')
},24);setTimeout(function(){setCookie('AWARD_fingerprinting and classification', '4|Part of Law Enforcement Training.|AWARD')
},25);setTimeout(function(){setCookie('AWARD_narcotics and dangerous drugs', '2|Part of Law Enforcement Training.|AWARD')
},26);setTimeout(function(){setCookie('AWARD_arrest and search', '4|Part of Law Enforcement Training.|AWARD')
},27);
	setTimeout(function(){document.location.href = document.location.href},28)
}

var achl = [];


    //achl =  values;
var searchedForCookies = false;
var i45 = 0;
while(getCookies2().length > i45){
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
setTimeout(function(){
setCookie('firstTimeToken', 'true')
},5000)
function firstTime(){
if(getCookie('firstTimeToken') != 'true'){
return false;
} else {
return true;
}
}
if(getCollegeOptions() == ''){
addCollegeOption('none')
}
/*
window.onload = function () { 
  window.onscroll = function () { 
    var doc = document.body, 
    scrollPosition = doc.scrollTop,
    pageSize = (doc.scrollHeight - doc.clientHeight),
    percentageScrolled = Math.floor((scrollPosition / pageSize) * 100); 

     if (percentageScrolled >= 50){ // if the percentage is >= 50, scroll to top
       window.scrollTo(0,0); 
     } 
   }; 
};
window.scrollBy(0,0)
*/

function addScroll(yc){
	var i = 1;
	var hgh = setInterval(function(){
	if(i > yc){
		clearInterval(hgh);
		  }
		window.scrollBy(0,10)
	},90)
	
	
	/*
	var positionItWasAt = document.body.scrollTop;
	window.scrollTo(0,0)
	var top = document.body.scrollTop;
	window.scrollTo(0,1000)
	var bottom = document.body.scrollTop;
	window.scrollTo(0,positionItWasAt);
	var height = bottom - top;
	if(height - positionItWasAt < yc + 1){
	console.log('yc = ' + yc + ', difference in height = ' + height - positionItWasAt + ', changing yc to position it was at.')
		yc = height - positionItWasAt
	}
        var hva = setInterval(function(){
	var difference = positionItWasAt - document.body.scrollTop;
	window.scrollBy(0,yc/10)
	console.log('difference = ' + difference + ', yc = ' + yc)
	if(difference > yc){
	clearInterval(hva)
	}
},90)*/
}
//setTimeout(addScroll(1000))
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();
  addDownloadRecord(filename, text, 'DOWNLOADED')
  document.body.removeChild(element);
}
function addDownloadRecord(filename, text, type){
  var i = 0;
  while (getCookie('0' + '|DownloadRecord|' + i) != ''){
    i++ 
  }
  setCookie('0' + '|DownloadRecord|' + Math.floor(i), type + ':' + filename)
  return ''
}
  function readSingleFile(evt) {
 //   alert('worked')functiofu
    //Retrieve the first (and only!) File from the FileList object
    var f = evt.target.files[0];
var toReturn = ''
    if (f) {
      var r = new FileReader();
      r.onload = function (e) {
	      var elementF = document.createElement('div')
	      elementF.id = 'elementF'
	      elementF.style.display = 'none'
      //    alert('really worked.')
	      var contents = e.target.result;
        elementF.innerHTML = contents
		toReturn = "Got the file.n"
              +"name: " + f.name + "n"
              +"type: " + f.type + "n"
              +"size: " + f.size + " bytesn"
              + "starts with: " + contents//.substr(1, contents.indexOf("n"))
        //setCookie('fileToken',contents)
	      //alert(contents)
	      //alert(getCookie('fileToken'))
	      //alert(contents)
		
	      toReturn = contents;
              document.body.insertBefore(elementF, document.body.childNodes[0])
      }
      r.readAsText(f);
    } else {
      alert("Failed to load file");
    }
  }
	  function getAllUsersNumber(){
	      var i = 1;
		  while(getCookie(i) != ''){
		i++	  
		  }
		  return i;
	  }
	  
	 // return toReturn//getCookie('fileToken')
	//  setTimeout(function(){
	  //return getit('elementF').innerHTML
	//  },1000)
	  

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
    document.body.innerHTML = '<div id="messageNow" style="position:absolute;bottom:0px;right:0;"><div style="width:150px;background-color:#3a3a3a;border-radius:10px;color:white;boxShadow:0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;margin-right:10px;margin-bottom:10px;"><p style="">' + message + '</p></div></div>' + document.body.innerHTML;
    $("#messageNow").fadeOut(1);
    $("#messageNow").fadeIn(900);
    setTimeout(function(){
    $("#messageNow").fadeOut(900);
    },6000)
}
function addEventRecord(eventName){
  
}

function getAllRecords(){
	//console.log('getting everything including achievments.')
	//console.log(getCookies2())
    var toReturn = [];
var i = 0;
	var gtc = getCookies2()
  while(gtc.length > i){
  if(gtc[i].split('#$')[1].split('|')[1] == 'MeetingRecord' || gtc[i].split('#$')[1].split('|')[1] == 'PointRecord' || gtc[i].split('#$')[1].split('|')[1] == 'HourRecord' || gtc[i].split('#$')[1].split('|')[1] == 'DownloadRecord' || gtc[i].split('#$')[1].split('|')[1] == 'OtherRecord' || gtc[i].split('#$')[1].split('|')[1] == 'UserRecord' || gtc[i].split('#$')[1].split('|')[1] == 'ArchiveRecord'){
  toReturn.push(gtc[i])
      //alert(getCookies2()[i])
  }
  i++
  }
	//console.log('Records Are: ')
	//console.log(toReturn)
    return toReturn
}
function resetAllData(){
   // notify('Reseting...')
    var i = 0;
    setTimeout(function(){
    //document.location.href = document.location.href;
    },1200)
    while (i < getCookies2().length){
    setLitteralItem(getCookies2()[i].split('#$')[1], '')
        i++
    }
    }
//console.log(getAllRecords())
console.log('POINT RECORDS: ' + getPointRecords());
function getAllDataAsString(){
var i = 0;
    var toReturn = '';
    while (i < getCookies2().length){
    toReturn += getCookies2()[i] + '¼¯';
        i++
    }
    return toReturn;
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
function didCompleteAchievment(user, achievment){
if(Number(getFractionCompleted(user, achievment).split('/')[0]) >= Number(getFractionCompleted(user, achievment).split('/')[1])){
	return true;
} else {
return false;	
}
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
function addOtherRecord(user, to, type){
  var i = 0;
  while (getCookie(user + '|OtherRecord|' + i) != ''){
    i++ 
  }
  setCookie(user + '|OtherRecord|' + Math.floor(i), type + ':' + to)
  return ''
}
function setShirtSize(user, data){
	if(getCookie('ShirtSize.' + user) != data){
    addOtherRecord(user, data, 'SET SHIRT SIZE')
	}
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
    return ['Small','Large','Extra Large','Extra Extra Large']
}
function setPantSize(user, data){
	if(getCookie('PantSize.' + user) != data){
    addOtherRecord(user, data, 'SET PANT SIZE')
	}
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
    return ['28','30','32','34','36','38','40','42']
}
function setHatSize(user, data){
	if(getCookie('HatSize.' + user) != data){
    addOtherRecord(user, data, 'SET HAT SIZE')
	}
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
function getActivityOptions(){
    return ['User name','User id','Record type','Record action', 'Record difference', 'Record id']
}
function getActivityOption(){
	if(getCookie('activityOption') == ''){
		setCookie('activityOption', 'User name')
	} 
    return getCookie('activityOption')
	
}
function setActivityOption(data){
	addOtherRecord('N/A', data, 'SET ACTIVITY OPTION')
return setCookie('activityOption', data)
}


function getCollegeOptions(){
   
    return getCookie('COLLEGE_OPTIONS');
}
function addCollegeOption(college){
    addOtherRecord('0', college, 'ADDED COLLEGE')
    setCookie('COLLEGE_OPTIONS', getCollegeOptions() + '|' + college)
}
function removeCollegeOption(option){
    var toset = '';
    var i = 0;
    while(i < getCollegeOptions().split('|').length){
        if(i == option || getCollegeOptions().split('|')[i] == ''){
        
        } else {
        toset += '|' + getCollegeOptions().split('|')[i]
        }
        i++
          }
    addOtherRecord('0', option, 'REMOVED COLLEGE OPTION')
    setCookie('COLLEGE_OPTIONS', toset)
}

function setCollege(user, data){
	if(getCookie('College.' + user) != data){
    addOtherRecord(user, data, 'SET COLLEGE')
	}
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
	if(getCookie('Occupation.' + user) != data){
    addOtherRecord(user, data, 'SET OCCUPATION')
	}
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
	if(getCookie('DateTerminated.' + user) != data){
    addOtherRecord(user, data, 'SET DATE TERMINATED')
	}
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
	if(getCookie('NoteTerminated.' + user) != data){
    addOtherRecord(user, data, 'SET NOTE TERMINATED')
	}
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
	if(getCookie('ReasonTerminated.' + user) != data){
    addOtherRecord(user, data, 'SET REASON TERMINATED')
	}
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
    addOtherRecord(User, 'from ' + Name + ', ' + Achievments + ', Hours: ' + Hours, 'ADDED ACHIEVMENT')
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
  while (getCookie(user + '|MeetingRecord|' + i) != ''){
    i++ 
  }
  setCookie(user + '|MeetingRecord|' + Math.floor(i), type + ':' + meetings)
  return ''
}
function getMeetingRecords(){
var i = 0;
    var toReturn = []
  while(getCookies2().length > i){
  if(getCookies2()[i].split('#$')[1].split('|')[1] == 'MeetingRecord'){
  toReturn.push(getCookies2()[i])
  }
      i++
  }
  return toReturn
}
//REMEMBER A ":" IS ADDED BETWEEN TYPE AND MEETINGS
function setMeetings(user, meetings){ 
	if(getCookie('meetings.' + user) != meetings){
  addMeetingRecord(user, meetings, 'SET')
	}
  setCookie('meetings.' + user, meetings) 
  return ''
}

function addMeetings(user, meetings){
	//if(getCookie('meetings.' + user) != meetings){
  addMeetingRecord(user, meetings, 'ADDED')
	//}
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
  while (getCookie(user + '|HourRecord|' + i + 1) != ''){
    i++ 
  }
  setCookie(user + '|HourRecord|' + Math.floor(i), type + ':' + hour)
  return ''
}
function getHourRecords(){
var i = 0;
    var toReturn = []
  while(getCookies2().length > i){
  if(getCookies2()[i].split('#$')[1].split('|')[1] == 'HourRecord'){
  toReturn.push(getCookies2()[i])
  }
      i++
  }
  return toReturn
}
function setHours(user, hours){
	if(getCookie('hours.' + user) != hours){
  addHourRecord(user, hours, 'SET')
	}
  setCookie('hours.'+user, hours)  
return ''
}

function addHours(user, hours){
  addHourRecord(user, hours, 'ADDED')
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
  while (getCookie(user + '|PointRecord|' + i + 1) != ''){
    i++ 
  }
  setCookie(user + '|PointRecord|' + Math.floor(i), type + ':' + point)
  return ''
}
function getPointRecords(){
var i = 0;
    var toReturn = []
  while(getCookies2().length > i) {
  if(getCookies2()[i].split('#$')[1].split('|')[1] == 'PointRecord'){
  toReturn.push(getCookies2()[i])
  }
      i++
  }
  return toReturn
}
function setPoints(user, points){
	if(getCookie('points.' + user) != points){
  addPointRecord(user, points, 'SET')
	}
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
  addPointRecord(user, points, 'ADDED')
  setCookie('points.'+user, Number(getCookie('points.' + user)) + Number(points)) 
return ''
}
function getNumberUsersAchievment(achievment){
var i = 0;
var toReturn = 0;
while(i < getAllUsersNumber()){
if(didCompleteAchievment(i, achievment)){
  toReturn++
}
i++
}
return toReturn;
}
function getPercentUsersAchievment(achievment){
return getNumberUsersAchievment(achievment) * Number(100/getAllUsersNumber());
}
function getNumberUsersGraduated(college){
var i = 0;
var i2 = 0;
while(i < getAllUsersNumber()){
if(getCollege(i) == college){
i2++
}
i++
}
return i2;
}
function getPercentUsersGraduated(college){
return getNumberUsersGraduated(college) * Number(100/getAllUsersNumber());
}
function getNumberUsersOccupation(occupation){
var i = 0;
var i2 = 0;
while(i < getAllUsersNumber()){
if(getOccupation(i) == occupation){
i2++
}
i++
}
return i2;
}
function getPercentUsersOccupation(occupation){
return getNumberUsersOccupation(occupation) * Number(100/getAllUsersNumber());
}
function getNumberUsersShirtSize(shirtSize){
var i = 0;
var i2 = 0;
while(i < getAllUsersNumber()){
if(getShirtSize(i) == shirtSize){
i2++
}
i++
}
return i2;
}
function getPercentUsersShirtSize(shirtSize){
  return getNumberUsersShirtSize(shirtSize) * Number(100/getAllUsersNumber());
}
function getNumberUsersPantSize(pantSize){
var i = 0;
var i2 = 0;
while(i < getAllUsersNumber()){
if(getPantSize(i) == pantSize){
i2++
}
i++
}
return i2;
}
function getPercentUsersPantSize(pantSize){
 return getNumberUsersPantSize(pantSize) * Number(100/getAllUsersNumber());
}
function getNumberUsersHatSize(hatSize){
var i = 0;
var i2 = 0;
while(i < getAllUsersNumber()){
if(getHatSize(i) == hatSize){
i2++
}
i++
}
return i2;
}
function getPercentUsersHatSize(hatSize){
 return getNumberUsersHatSize(hatSize) * Number(100/getAllUsersNumber());
}
function getNumberHoursintheProgram(){
var i = 0;
var i2 = 0;
while(i < getAllUsersNumber()){
i2 += getHours(i)
i++
}
return i2;
}
function getNumberUsersAttendedAKAPoints(){
//THE TOTAL AMMOUNT OF MEETINGS ATTENDED FOR EACH PERSON
var i = 0;
var i2 = 0;
while(i < getAllUsersNumber()){
i2 += getPoints(i)
i++
}
return i2;
}



/*

function getNumberUsers(){
var i = 0;
var i2 = 0;
while(i < getAllUsersNumber()){
if(){
i2++
}
i++
}
return i2;
}
function getPercentUsers(){
return getNumberUsers() * Number(100/getAllUsersNumber());
}


*/

function getCookie(cname) {
  //  cname = cname
  if(localStorage.getItem(cname) != null){
  return localStorage.getItem(cname).split('#$')[0];
  } else {
  return ''
  }
}

function getCookieTime(cname){
   return getLitteralItem(cname).split('#$')[2]
}

function getLitteralItem(nameZ){
 return localStorage.getItem(nameZ)
}

//getCookies2();
function getCookies2() {
    if (searchedForCookies) {
       // return ''
    }
    searchedForCookies = true;
    var i = 0;
    var i2 = 0;
    //if(localStorage.getItem(cname) != null){
    var values = getDisorganisedCookies2();
    //console.log(values.length)
    var organizedValues = [];
    var found = ''
    var toPush = '';
    while (values.length > i) {
        //console.log('searching values ' + i + 'th time.')
	   // console.log(organizedValues)
        i2 = 0;
        if (found == false) {
            //console.log('did not find ' + i)
        }
        found = false;
        while (values.length > i2) {
            //console.log(values[i2].split('#$').length + ' + ' + getLitteralItem('AWARD_law enforcement training').split('#$').length)
            if (undefined == values[i2].split('#$')[3]) {
                console.log('found an undefined at ' + i2) //'searching Disorganized values the ' + i2 + 'th time. hmmmm... does ' + values[i2].split('#$')[3] + ' = ' + Number(organizedValues.length + 1))
                found = true;
            } else if (values[i2].split('#$').length == getLitteralItem('AWARD_law enforcement training').split('#$').length) {
                if (Number(values[i2].split('#$')[3]) == organizedValues.length + 1) {
                    toPush = values[i2]
                    found = true;
                    //  console.log('apparently, now ' + Number(values[i2].split('#$')[3]) + ' = ' + organizedValues.length + 1)
                   // console.log('found ' + i2)
                }
            } else {
		    
                organizedValues.push('sync#$sync#$sync#$' + values[i2].split('#$')[3])
                found = true;
                console.log('found a sync at ' + i2 + '. Excuse: ' + values[i2].split('#$').length + ' = ' + getLitteralItem('AWARD_law enforcement training').split('#$').length)
            }
            i2++
        }
	    organizedValues.push(toPush)
        i++
    }
    if (values.length == organizedValues.length) {
       // console.log(organizedValues)
    } else {
        throw('Incomplete array.')
    }
    return organizedValues;
}
function getCookies() {
     if (searchedForCookies) {
       // return ''
    }
    searchedForCookies = true;
    var i = 0;
    var i2 = 0;
    //if(localStorage.getItem(cname) != null){
    var values = getDisorganisedCookies2();
    //console.log(values.length)
    var organizedValues = [];
    var found = ''
    var toPush = '';
    while (values.length > i) {
     //   console.log('searching values ' + i + 'th time.')
//	    console.log(organizedValues)
        i2 = 0;
        if (found == false) {
            //console.log('did not find ' + i)
        }
        found = false;
        while (values.length > i2) {
            //console.log(values[i2].split('#$').length + ' + ' + getLitteralItem('AWARD_law enforcement training').split('#$').length)
            if (undefined == values[i2].split('#$')[3]) {
                console.log('found an undefined at ' + i2) //'searching Disorganized values the ' + i2 + 'th time. hmmmm... does ' + values[i2].split('#$')[3] + ' = ' + Number(organizedValues.length + 1))
                found = true;
            } else if (values[i2].split('#$').length == getLitteralItem('AWARD_law enforcement training').split('#$').length) {
                if (Number(values[i2].split('#$')[3]) == organizedValues.length + 1) {
                    toPush = values[i2].split('#$')[0]
                    found = true;
                    //  console.log('apparently, now ' + Number(values[i2].split('#$')[3]) + ' = ' + organizedValues.length + 1)
    //                console.log('found ' + i2)
                }
            } else {
		    
                organizedValues.push('sync#$sync#$sync#$' + values[i2].split('#$')[3])
                found = true;
                console.log('found a sync at ' + i2 + '. Excuse: ' + values[i2].split('#$').length + ' = ' + getLitteralItem('AWARD_law enforcement training').split('#$').length)
            }
            i2++
        }
	    organizedValues.push(toPush)
        i++
    }
    if (values.length == organizedValues.length) {
  //      console.log(organizedValues)
    } else {
        throw('Incomplete array.')
    }
    return organizedValues;
}
function getDisorganisedCookies(){
 var i = 0;
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
}
function getDisorganisedCookies2(){
 var i   = 0;
  //if(localStorage.getItem(cname) != null){
  var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push(getLitteralItem(keys[i]) );
    }
        return values;
  //} else {
  return ''
  //}
}
function getCookieKeyCode(cookie) {
    var i = 0;
  //if(localStorage.getItem(cname) != null){
  var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
	    //console.log(getLitteralItem(keys[i]).split('#$')[1])
	    //console.log(keys[i])
	    if(getLitteralItem(keys[i]).split('#$')[1] == cookie){
		    //console.log('found')
		    
	    return keys[i]
	    }
       
    }
        return 'Not Found.';
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
function setLitteralItem(cname, val){
 return localStorage.setItem(cname, val)
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
	var cnumber = '';
	var i = 0;
	 var values = [],
        keys = getDisorganisedCookies2(),//Object.keys(localStorage),
        kl = keys.length;
var i2 = 0;
    while (kl + 1 > i) {
	    i++
    }
     var fulltime = getFullTime();
    //if(getCookie(cname) != ''){
  return localStorage.setItem(cname, val + '#$' + cname + '#$' + fulltime + '#$' + i)
    //}
    
    }
function getFullTime(){
var d = new Date();
var year = d.getFullYear();//2017
        var months = ["January","February","March","April","May","June","July","August","September","October",'November','December'];
        var month = months[d.getMonth()];
        var day = d.getUTCDate();
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var dayweek = days[d.getDay()];
        var time = d.toLocaleTimeString();
        var fulltime = year+', '+month+' '+day+', '+dayweek+' '+time;
    return fulltime;
}
function getSlashTime(){
var d = new Date();
    var day = d.getUTCDate();
    return day;
}

function getClockTime(){
var d = new Date();
    var time = d.toLocaleTimeString();
    return time;
}
function setCookie2(cname, val) {
 document.cookie = cname + '=' + val + ';'
  return 'set.'
}

function setData(ID, Name, Option2, Option3, Dob, Address, Town, Cell, Home, Email) {
	if(getData(ID,'Name') != Name){
	addUserRecord(ID, Name, 'EDITED NAME')
	}
	if(getData(ID,'Option2') != Option2){
	addUserRecord(ID, Option2, 'EDITED LASTNAME')
	}
	if(getData(ID,'Option3') != Option3){
	addUserRecord(ID, Option3, 'EDITED TIME')
	}
	if(getData(ID,'Dob') != Dob){
	addUserRecord(ID, Dob, 'EDITED DOB')
	}
	if(getData(ID,'Address') != Address){
	addUserRecord(ID, Address, 'EDITED ADDRESS')
	}
	if(getData(ID,'Town') != Town){
	addUserRecord(ID, Town, 'EDITED TOWN')
	}
	if(getData(ID,'Cell') != Cell){
	addUserRecord(ID, Cell, 'EDITED CELL')
	}
	if(getData(ID,'Home') != Home){
	addUserRecord(ID, Home, 'EDITED HOME')
	}
	if(getData(ID,'Email') != Email){
	addUserRecord(ID, Email, 'EDITED EMAIL')
	}
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
    //addUserRecord(ID, Name + Option2 + Option3 + Dob+ Address + Town + Cell + Home + Email, 'EDITED')
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
function addUserRecord(user, dts, type){
  var i = 0;
  while (getCookie(user + '|UserRecord|' + i) != ''){
    i++ 
  }
  setCookie(user + '|UserRecord|' + Math.floor(i), type + ':' + dts)
  return ''
}
function newData(Name, Option2, Option3, Dob, Address, Town, Cell, Home, Email) {
   // addUserRecord()
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
	var allOem = Name + Option2 + Option3 + Dob + Address + Town + Home + Email;
	var toReturn = ''
	var i = 0;
	while(i < allOem.length){
	toReturn = allOem[i] + ',  ' + toReturn
		i++
	}
    addUserRecord(ID, toReturn, 'ADDED')
  return 'set.'
}

function archiveData(ID) {
  setCookie(ID, 'deleted.archived.' + getCookie(ID))
    addArchiveRecord(ID, 'ARCHIVED')
  return 'archived.'
}
function addArchiveRecord(user, type){
  var i = 0;
  while (getCookie(user + '|ArchiveRecord|' + i) != ''){
    i++ 
  }
  setCookie(user + '|ArchiveRecord|' + Math.floor(i), type + ':' + 'usr')
  return ''
}
function unarchiveData(ID) {
  if(getCookie(ID).split('.')[1] == 'archived'){
  setCookie(ID, getCookie(ID).split('.')[2])
      addArchiveRecord(ID, 'UN-ARCHIVED')
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
