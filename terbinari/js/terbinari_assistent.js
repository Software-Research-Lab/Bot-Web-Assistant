/*
Name:           Terbinari Web Assistant
Project:        Research and technology development
Object:         Website assistant script v0.1.0
Author:         Lado Oniani (Logic concept, algorithm, programming)
Copyright (C) 2016-2020 Lado Oniani, TAI Lab. All Rights Reserved     
Written by Lado Oniani <ladooniani@gmail.com>, github.com/ladooniani
https://github.com/ladooniani/Terbinari-Web-Assistant
*/

/* Variables  */
var input,
  output,
  question,
  conf_val,
  userData,
  lastOut,
  charNum,
  userIP,
  ic,
  locVal,
  logged = 0,
  quesCount = 0,
  passPhase = 0,
  btnVal = 0,
  passEqual = 0,
  passValid = 0,
  logOrReg = 3,
  d,
  b,
  c = " ",
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
  p18,
  p19,
  p44,
  p75,
  p20,
  p21,
  p22,
  p23,
  p24,
  p25,
  p26,
  p27,
  p28,
  p29,
  p30,
  p31,
  p32,
  p33,
  p34,
  p35,
  p36,
  p37,
  p38,
  p39,
  p40,
  p41,
  p42,
  p43,
  p45,
  p46,
  p47,
  p48,
  p49,
  p50,
  p51,
  p52,
  p53,
  p54,
  p55,
  p56,
  p57,
  p58,
  p59,
  p60,
  p61,
  p62,
  p63,
  p64,
  p65,
  p66,
  p67,
  p68,
  p69,
  p70,
  p71,
  p72,
  p73,
  p74,
  p76;
var year = new Date().getFullYear();
var arr = []; //arr = [];
var empty_list = [];
var countries = [];
var language = [];
var monthes = [];
var mainPage = "index.html"; /// bot.php

/* Text data */

var phrasesStrLstData =
  "Hi, what is your name?#Hello #! I am here to help you#Year:#Ok, you are welcome! Maybe next time...#Ok tell me...#what is your surname?#Hmm.. Not clear#Yes or no?#I am here just to help you register quickly :)#Ok!#Now choose username#Cool! ;) I like it!#Ok, as you wish... reset#Now type your password please#Please repeat your password#Fine!#Perfect! Almost done, to complete confirm your registration..#You sure you want to register profile?#Congratulations dear #Please check your email:#and confirm registration to login into your account. Receiving of message usually takes from 5 to 10 minutes#Now your birthday#Good one!#Passwords are not equal!#Passwords are not equal, please try again..#Please insert text..#Now..#Tell me your email#Input undefined#Try again..#Not valid!#Password must contain lowercase, uppercase, number and consist of minimum 8 characters#Terbinari Web Assistant#Model of interactive dynamic dialog instructing and data processing control with single-field chatbot interface, provides guided, sequential data entry and storage to simplify, minimize, modernize and speed up routine in user interface, just make registration forms fun =)#Do you want to Login or Register?#Hi :)#What is your name?#Hello =)#Please insert your username or email#Insert your password#Please, first choose..#Hello, dear#Your profile:#User not registered!#Please confirm you registration data#Too short! Username must contain at least 5 characters..#Please try again#Ok, now optional..#Insert your phone number#Month:#Day:#Too long! Must contain 4 numbers..#Too short! Must contain 4 numbers..#Too long! Must contain 1 or 2 numbers..#Choose your gender#Are you male?#Are you female?#Choose your language#Choose your country!#User already exist!#Try again#Input looks inccorect#January#February#March#April#May#June#July#August#September#October#November#December#Please login..#Your account is not verified";
var countriesStrLstData =
  "Afghanistan#Albania#Algeria#Andorra#Angola#Anguilla#Antigua#Barbuda#Argentina#Armenia#Aruba#Australia#Austria#Azerbaijan#Bahamas#Bahrain#Bangladesh#Barbados#Belarus#Belgium#Belize#Benin#Bermuda#Bhutan#Bolivia#Bosnia#Herzegovina#Botswana#Brazil#British Virgin Islands#Brunei#Bulgaria#Burkina Faso#Burundi#Cambodia#Cameroon#Canada#Cape Verde#Cayman Islands#Central Arfrican Republic#Chad#Chile#China#Colombia#Congo#Cook Islands#Costa Rica#Cote D Ivoire#Croatia#Cuba#Curacao#Cyprus#Czech Republic#Denmark#Djibouti#Dominica#Dominican Republic#Ecuador#Egypt#El Salvador#Equatorial Guinea#Eritrea#Estonia#Ethiopia#Falkland Islands#Faroe Islands#Fiji#Finland#France#French Polynesia#French West Indies#Gabon#Gambia#Georgia#Germany#Ghana#Gibraltar#Greece#Greenland#Grenada#Guam#Guatemala#Guernsey#Guinea#Guinea Bissau#Guyana#Haiti#Honduras#Hong Kong#Hungary#Iceland#India#Indonesia#Iran#Iraq#Ireland#Isle of Man#Israel#Italy#Jamaica#Japan#Jersey#Jordan#Kazakhstan#Kenya#Kiribati#Kosovo#Kuwait#Kyrgyzstan#Laos#Latvia#Lebanon#Lesotho#Liberia#Libya#Liechtenstein#Lithuania#Luxembourg#Macau#Macedonia#Madagascar#Malawi#Malaysia#Maldives#Mali#Malta#Marshall Islands#Mauritania#Mauritius#Mexico#Micronesia#Moldova#Monaco#Mongolia#Montenegro#Montserrat#Morocco#Mozambique#Myanmar#Namibia#Nauro#Nepal#Netherlands#Netherlands Antilles#New Caledonia#New Zealand#Nicaragua#Niger#Nigeria#North Korea#Norway#Oman#Pakistan#Palau#Palestine#Panama#Papua New Guinea#Paraguay#Peru#Philippines#Poland#Portugal#Puerto Rico#Qatar#Reunion#Romania#Russia#Rwanda#Saint Pierre & Miquelon#Samoa#San Marino#Sao Tome and Principe#Saudi Arabia#Senegal#Serbia#Seychelles#Sierra Leone#Singapore#Slovakia#Slovenia#Solomon Islands#Somalia#South Africa#South Korea#South Sudan#Spain#Sri Lanka#St Kitts & Nevis#St Lucia#St Vincent#Sudan#Suriname#Swaziland#Sweden#Switzerland#Syria#Taiwan#Tajikistan#Tanzania#Thailand#Timor LEste#Togo#Tonga#Trinidad & Tobago#Tunisia#Turkey#Turkmenistan#Turks & Caicos#Tuvalu#Uganda#Ukraine#United Arab Emirates#United Kingdom#United States of America#Uruguay#Uzbekistan#Vanuatu#Vatican City#Venezuela#Vietnam#Virgin Islands (US)#Yemen#Zambia#Zimbabwe";
var languageStrLstData =
  "french#romanian#portuguese#hebrew#ukrainian#german#italian#russian#dutch#hungarian#japanese#persian#polish#slovak#spanish#swedish#arabic#basque#bosnian#bulgarian#catalan#chinese#croatian#czech#danish#galician#icelandic#indonesian#korean#lithuanian#norwegian bokmal#norwegian nynorsk#serbian#slovenian#thai#uighur#welsh#finnish#greek#tamil#turkish#burmese#estonian#english#vietnamese#bengali#esperanto#georgian#javanese#khmer#kirgyz#latvian#malagasy#mongolian#sakha#sundanese#telugu#afrikaans#belarusian#swahili#azerbaijani#faroese#occitan#uzbek#acoli#albanian#armenian#breton#corsican#gujarati#hindi#irish#kazakh#kurdish#macedonian#nepali#papiamento#pirate english#sinhala#turkmen#urdu";
var monthesStrLstData =
  "January#February#March#April#May#June#July#August#September#October#November#December";

/* Load  */
data();
load();

/* Bot  */
function bot(var1) {
  scrollElmt(1);
  if (logOrReg == 1) {
    /// Register
    FocusCaret();
    input = document.getElementById("input").value;
    if (btnVal == 1) {
      input = var1;
    }
    aboutValue(input);
    var inpCond = checkInputCond(input);
    if (inpCond == 0) {
      parsName();
      conditionGate();
      var confirmator = processInput(input); ///display(input, confirmator, conf_val, quesCount);
      if (quesCount == 0) {
        loopIterIncr();
        passStep(p1 + input + p2, "input", p6); /// Hello (name)! I am here to help you, what is your surname?
        changeInputType(4);
      } else if (quesCount == 1) {
        if (confirmator != 0) {
          loopIterIncr();
          passStep(p10, "input", p11); /// Ok! Now choose username
          changeInputType(5);
        } else if (confirmator == 0) {
          reset_break(p13, "input", p33);
        } /// Ok, as you wish.. reset, do you want to Login or Register?
      } else if (quesCount == 2) {
        if (confirmator != 0) {
          var strLength = charLength(charNum, 1);
          if (strLength == 0) {
            checkUser(input.toLowerCase());
          } else if (strLength == 1) {
            passStep(p45, "input", p46); /// Too short! Username must contain at least 5 characters.. Please try again
          }
        } else if (confirmator == 0) {
          reset_break(p13, "input", p33);
        } /// No
      } else if (quesCount == 3) {
        if (confirmator != 0) {
          loopIterIncr();
          passFz(1);
          passStep(p16, "input", p15); ///  Fine! Please repeat your password
          changeInputType(6);
        } else if (confirmator == 0) {
          reset_break(p13, "input", p33);
        }
      } else if (quesCount == 4) {
        passFz(0);
        if (confirmator != 0) {
          loopIterIncr();
          ComparePasswords(input, arr[3]);
          if (passEqual == 0) {
            passStep(p25, "input", p26); /// Now.. Tell me your email
            changeInputType(2);
          } else if (passEqual == 1) {
            passFz(1);
            notEqual(p22, "input", p23); /// Passwords are not equal! Passwords are not equal, please try again..
          }
        } else if (confirmator == 0) {
          reset_break(p13, "input", p33);
        }
      } else if (quesCount == 5) {
        passFz(0);
        if (confirmator != 0) {
          checkEmail(input.toLowerCase());
        } else if (confirmator == 0) {
          reset_break(p13, "input", p33);
        }
      } else if (quesCount == 6) {
        HideSkip_showOk();
        passFz(0);
        if (confirmator != 0) {
          loopIterIncr();
          passStep(p20, "input", p3); /// Now your birthday.. Year:
          changeInputType(8);
        } else if (confirmator == 0) {
          reset_break(p13, "input", p33);
        }
      } else if (quesCount == 7) {
        passFz(1);
        if (confirmator != 0) {
          var strLength = charLength(charNum, 2);
          if (strLength == 1) {
            var x = checkGC(input, 0);
            var y = abcCont(input);
            if (x == 0 && y == 0) {
              loopIterIncr();
              passStep(p10, "input", p49); /// Ok! Month:
              changeInputType(9);
            } else if (x == 1) {
              passStep(p61, "input", p3); /// Input looks inccorect. Year:
            }
          } else {
            if (strLength == 0) {
              passStep(p51, "input", p3); /// Too long! Must contain 4 numbers. Year:
            } else if (strLength == 2) {
              passStep(p52, "input", p3); /// Too short! Must contain 4 numbers. Year:
            }
          }
        } else if (confirmator == 0) {
          reset_break(p13, "input", p33);
        }
      } else if (quesCount == 8) {
        passFz(0);
        if (confirmator != 0) {
          var strLength = charLength(charNum, 3);
          if (strLength == 1) {
            var x = checkGC(input, 1);
            var y = abcCont(input);
            if (x == 0 && y == 0) {
              loopIterIncr();
              passStep(p10, "input", p50); ///Ok! Day:
              changeInputType(10);
            } else if (x == 1) {
              passStep(p61, "input", p49);
              passFz(1); /// Input looks inccorect. Month:
            }
          } else {
            passStep(p53, "input", p49);
            passFz(1); ///  Too long! Must contain 1 or 2 numbers.. Month:
          }
        } else if (confirmator == 0) {
          reset_break(p13, "input", p33);
        }
      } else if (quesCount == 9) {
        passFz(0);
        if (confirmator != 0) {
          var strLength = charLength(charNum, 3);
          if (strLength == 1) {
            var x = checkGC(input, 2);
            var y = abcCont(input);
            if (x == 0 && y == 0) {
              passStep(p10, "input", p54); /// Ok! Choose your gender!
              GenderChoiseUI(1);
              loopIterIncr();
            } else if (x == 1) {
              passStep(p61, "input", p50); /// Input looks inccorect. Day:
            }
          } else {
            passStep(p53, "input", p49); /// Too long! Must contain 1 or 2 numbers.. Month:
          }
        } else if (confirmator == 0) {
          reset_break(p13, "input", p33);
        }
      } else if (quesCount == 10) {
        passFz(0);
        if (confirmator != 0) {
          autocomplete(document.getElementById("input"), language);
          loopIterIncr();
          passStep(p10, "input", p57); /// Ok! Choose your language!
          GenderChoiseUI(0);
          changeInputType(11);
        } else if (confirmator == 0) {
          reset_break(p13, "input", p33);
        }
      } else if (quesCount == 11) {
        passFz(0);
        if (confirmator != 0) {
          loopIterIncr();
          autocomplete(document.getElementById("input"), countries);
          passStep(p10, "input", p58); /// Ok! Choose your country!
          changeInputType(12);
        } else if (confirmator == 0) {
          reset_break(p13, "input", p33);
        }
      } else if (quesCount == 12) {
        autocomplete(document.getElementById("input"), empty_list);
        passFz(0);
        if (confirmator != 0) {
          loopIterIncr();
          ShowUserData();
          passStep(p17, "input", p18 + userData); /// Perfect! Almost done, to complete confirm your registration.. You sure you want to register profile?
          changeInputType(3);
        } else if (confirmator == 0) {
          reset_break(p13, "input", p33);
        }
      } else if (quesCount == 13) {
        if (confirmator == 0) {
          reset_break(p13, "input", p33);
        } /// Ok, as you wish... reset. Do you want to Login or Register?
        else if (confirmator == 1) {
          loopIterIncr();
          registerUser();
          changeInputType(0);
          Show_Login_hideInputOk();
          colorState(1);
          loginAfterReg();
        } else if (confirmator == 2) {
          conditional(p7, "input", p8);
        } /// Hmm.. Not clear. Yes or no?
        else if (confirmator == 3) {
          conditional(p9, "input", p43);
        } /// I am here just to help you register quickly :) Please confirm you registration to visit profile
        changeInputType(3);
      }
    } else {
      errorType();
    }
  } else if (logOrReg == 0) {
    /// Login
    FocusCaret();
    input = document.getElementById("input").value;
    if (btnVal == 1) {
      input = var1;
    }
    aboutValue(input);
    var inpCond = checkInputCond(input);
    if (inpCond == 0) {
      parsName();
      conditionGate();
      var confirmator = processInput(input);
      if (quesCount == 0) {
        loopIterIncr();
        passStep(p10, "input", p38); /// Ok! Please insert your password
        changeInputType(1);
      } else if (quesCount == 1) {
        loopIterIncr();
        checkUserPass();
      }
    } else {
      errorType();
    }
  }
}

function errorType() {
  if (ic == 1) {
    about();
  } else {
    if (passValid == 1) {
      pleaseInsertVal(p29, "input", p30);
      passValid = 0;
    } else if (input === undefined || input === "undefined") {
      pleaseInsertVal(p27, "input", p28);
    } else {
      pleaseInsertVal(p24, "input", p27);
    }
  }
}

/* Load string */
function loadStr(var1) {
  var splitContent;
  if (var1 == 1) {
    splitContent = phrasesStrLstData;
  } else if (var1 == 2) {
    splitContent = countriesStrLstData;
  } else if (var1 == 3) {
    splitContent = languageStrLstData;
  } else if (var1 == 4) {
    splitContent = monthesStrLstData;
  }

  var s = splitContent.split("#");
  if (var1 == 1) {
    // Sentences
    Assign(s);
  } else if (var1 == 2) {
    // Country
    for (i = 0; i < s.length; i++) {
      countries.push(s[i]);
    }
  } else if (var1 == 3) {
    // Language
    for (i = 0; i < s.length; i++) {
      language.push(s[i]);
    }
  } else if (var1 == 4) {
    // Monthes
    for (i = 0; i < s.length; i++) {
      monthes.push(s[i]);
    }
  }
}

function Assign(s) {
  Htag();
  question = d + s[0] + b;
  p1 = d + s[1] + c;
  p2 = s[2] + b;
  p3 = d + s[3] + b;
  p4 = d + s[4] + b;
  p5 = d + s[5] + b;
  p6 = d + s[6] + b;
  p7 = d + s[7] + b;
  p8 = d + s[8] + b;
  p9 = d + s[9] + b;
  p10 = d + s[10] + b;
  p11 = d + s[11] + b;
  p12 = d + s[12] + b;
  p13 = d + s[13] + b;
  p14 = d + s[14] + b;
  p15 = d + s[15] + b;
  p16 = d + s[16] + b;
  p17 = d + s[17] + b;
  p18 = d + s[18] + b;
  p19 = d + s[19] + c;
  p44 = d + s[20] + c;
  p75 = c + s[21] + b;
  p20 = d + s[22] + b;
  p21 = d + s[23] + b;
  p22 = d + s[24] + b;
  p23 = d + s[25] + b;
  p24 = d + s[26] + b;
  p25 = d + s[27] + b;
  p26 = d + s[28] + b;
  p27 = d + s[29] + b;
  p28 = d + s[30] + b;
  p29 = d + s[31] + b;
  p30 = d + s[32] + b;
  p31 = d + s[33] + b;
  p32 = d + s[34] + b;
  p33 = d + s[35] + b;
  p34 = d + s[36] + b;
  p35 = d + s[37] + b;
  p36 = d + s[38] + b;
  p37 = d + s[39] + b;
  p38 = d + s[40] + b;
  p39 = d + s[41] + b;
  p40 = d + s[42] + b;
  p41 = d + s[43] + b;
  p42 = d + s[44] + b;
  p43 = d + s[45] + b;
  p45 = d + s[46] + b;
  p46 = d + s[47] + b;
  p47 = d + s[48] + b;
  p48 = d + s[49] + b;
  p49 = d + s[50] + b;
  p50 = d + s[51] + b;
  p51 = d + s[52] + b;
  p52 = d + s[53] + b;
  p53 = d + s[54] + b;
  p54 = d + s[55] + b;
  p55 = d + s[56] + b;
  p56 = d + s[57] + b;
  p57 = d + s[58] + b;
  p58 = d + s[59] + b;
  p59 = d + s[60] + b;
  p60 = d + s[61] + b;
  p61 = d + s[62] + b;
  p62 = d + s[63] + b;
  p63 = d + s[64] + b;
  p64 = d + s[65] + b;
  p65 = d + s[66] + b;
  p66 = d + s[67] + b;
  p67 = d + s[68] + b;
  p68 = d + s[69] + b;
  p69 = d + s[70] + b;
  p70 = d + s[71] + b;
  p71 = d + s[72] + b;
  p72 = d + s[73] + b;
  p73 = d + s[74] + b;
  p74 = d + s[75] + b;
  p76 = d + s[76] + b;

  console.log(p60);

  firstQues(p33);
}

/* Verified registeration loggedin */
function LoggedIn() {
  console.log(
    "LoggedIn backend request ajax function displays verified user registration data by id in local storage"
  );

  /*

    var id = locVal;
    if(id == '') {
      alert('Invalid ID!')
    } else {
      $.ajax ({
        url: 'php/loggedin.php',      
        data: {ID: id},
        type: 'post',
        success: function(result)
        {               
          if (result.trim() != "ID Failure"){
             console_output("User registration data");       
          }               
        }
      });
    }

    */
}

/* Load */
function data() {
  var i;
  for (i = 1; i < 5; i++) {
    loadStr(i);
  }
}

function Htag() {
  var mod = md();
  if (mod == 0) {
    (d = "<h3>"), (b = "</h3>");
  } else if (mod == 1) {
    (d = "<h1>"), (b = "</h1>");
  }
}

function load() {
  ClearLists();
  LocalStorageGet();
  if (locVal == null) {
    firstQues(p33);
    loginButton();
    loadFunc();
    ifOutputUndefined(output);
  } else {
    HideAll_ShowLogData();
    LoggedIn();
  }
}

function ClearLists() {
  countries = [];
  language = [];
  monthes = [];
}

/* Echo out */
function procCheckUserRes(var1) {
  if (var1 == 0) {
    loopIterIncr();
    passFz(1);
    passStep(p12, "input", p14); /// Cool! ;) I like it! Now type your password please
    changeInputType(1);
  } else if (var1 == 1) {
    passStep(p59, "input", p60); /// 'User already exist! Try again
  }
}

function procCheckEmailRes(var1) {
  if (var1 == 0) {
    loopIterIncr();
    ShowSkip_showOk();
    passStep(p47, "input", p48); /// Ok, now optional.. Insert your phone number
    changeInputType(7);
  } else if (var1 == 1) {
    emailExist(p59, "input", p60); /// User already exist! Try again
  } else if (var1 == 2) {
    emailExist(d + "Inccorect format!" + b, "input", p60); /// User already exist! Try again
  }
}

/* Login after registration */
function loginAfterReg() {
  const n = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
  reset_break(p19 + n + "!" + b, "input", p44 + arr[5] + p75); /// Congratulations, dear (name) Please check your email <em@i.l> and confirm registration to login into your account
}

/* Output undefined */
function ifOutputUndefined(var1) {
  if (
    var1 == undefined ||
    var1 == null ||
    var1 == "undefined" ||
    var1 == "" ||
    var1.length < 1
  ) {
    document.getElementById("output").innerHTML = lastOut; // p75;
  }
}

/*Key input */
$(document).keypress(function (e) {
  if (e.which == 13 && logOrReg != 3) {
    if (logOrReg == 0 && quesCount == 2) {
      document.location = "index.html"; /// bot.html
    } else {
      bot();
    }
  } else {
  }
});

/* Allow only letters and whitespaces */
$(document).ready(function () {
  $("#input").keypress(function (event) {
    var inputValue = event.which;
    if (quesCount == 11 || quesCount == 12) {
      if (
        !(inputValue >= 65 && inputValue <= 120) &&
        inputValue != 32 &&
        inputValue != 0
      ) {
        event.preventDefault();
      }
    }
  });
});

/*Button input */
$("#logBtn").click(function () {
  btnVal = 1;
  var uname = $("#input").val();
  if (quesCount == 13) {
    if (logOrReg == 1) {
      uname = "yes";
    }
  }
  if (logOrReg == 1 && quesCount == 14) {
    loginAfterReg();
  }
  if (logged == 1) {
    LocalStorageReset();
  }
  if (logOrReg == 0 && quesCount == 2) {
    document.location = mainPage;
  } else {
    bot(uname);
  }
});

/* Skip button */
$("#skipBtn").click(function () {
  btnVal = 1;
  bot("x");
  HideSkip_showOk();
});

/* End functions  */
function loadFunc() {
  FocusCaret();
  SetReset("text", "", "", "Name..", "Text Type");
  autoComp = 0;
}

function checkInputCond(input) {
  if (
    input != "" &&
    input != null &&
    input.length != 0 &&
    input !== undefined &&
    input !== "undefined" &&
    passValid == 0 &&
    ic == 0
  ) {
    return 0;
  } else {
    return 1;
  }
}

function aboutValue(input) {
  if (input == "who are you") {
    ic = 1;
  } else {
    ic = 0;
  }
}

function addToList(input) {
  arr.push(input);
}

function loopIterIncr() {
  btnVal = 0;
  quesCount++;
  addToList(input);
}

function conditionGate() {
  if (conf_val == 1) {
    quesCount = 0;
    conf_val = 0;
  }
  if (conf_val == 2) {
    quesCount = 13;
    conf_val = 0;
  }
}

function parsName() {
  /**/
}

function DateTime() {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  return dateTime;
}

function randomNumber() {
  var rand = Math.floor(Math.random() * 2 + 1);
  if (rand == 1) {
    return 1;
  } else if (rand == 2) {
    return 2;
  }
}

/* Displays */
function ShowUserData() {
  var dt = DateTime();
  userData =
    " First name: \n" +
    arr[0] +
    "<br>" +
    " Last name:\n" +
    arr[1] +
    "<br>" +
    " Username:\n" +
    arr[2].toLowerCase() +
    "<br>" +
    " Email:\n" +
    arr[5] +
    "<br>" +
    " Phone:\n" +
    arr[6] +
    "<br>" +
    " Birthday:\n" +
    arr[7] +
    "-" +
    arr[8] +
    "-" +
    arr[9] +
    "<br>" +
    " Gender:\n" +
    arr[10] +
    "<br>" +
    " Language:\n" +
    arr[11] +
    "<br>" +
    " Country:\n" +
    arr[12] +
    "<br>" +
    " Registration date:\n" +
    dt;
}

function about() {
  scrollElmt(0);
  var copyright =
    " Lado Oniani, TAI Lab. Research and technology development project. All Rights Reserved";
  var cr = "Copyright © 2016-" + year + copyright;
  passStep(
    p31,
    "input",
    p32 +
      cr +
      "<br><br><a href='https://github.com/ladooniani/Bot-Web-Assistant'>Terbinari Web Assistant</a>"
  );
}

/* Process conditional input */
function processInput(input) {
  var inp;
  if (passPhase != 1) {
    inp = input.trim().toLocaleLowerCase().split(/[^\w]/);
  } else if (passPhase == 1) {
    inp = input.trim().split(/[^\w]/);
  }
  const y = [
    "yes",
    "sure",
    "i want",
    "yes i want",
    "ok",
    "oks",
    "okay",
    "okey",
    "yo",
    "want",
  ];
  const n = ["no", "nope", "not now"];
  var found = { y: 0, n: 0 };
  for (let i = 0; i < inp.length; i++) {
    found["y"] += inp[i] && y.indexOf(inp[i]) != -1 ? 1 : 0;
    found["n"] += inp[i] && n.indexOf(inp[i]) != -1 ? 1 : 0;
  }
  if (found.y > 0 && found.n === 0) {
    return 1; /// yes
  } else if (found.y === 0 && found.n > 0) {
    return 0; /// no
  } else if (found.y > 0 && found.n > 0) {
    return 2; /// yes/no
  } else if (found.y === 0 && found.n === 0) {
    return 3; /// other
  }
}

var g, j;
function checkGC(var1, var2) {
  g = parseInt(var1, 10);
  if (var2 == 0) {
    /// Year
    j = parseInt(year, 10);
  } else if (var2 == 1) {
    /// Month
    j = 12;
  } else if (var2 == 2) {
    /// Day
    j = 31;
  }
  if (g > j) {
    return 1;
  } else {
    return 0;
  }
}

/*Check string abc */
function abcCont(str) {
  if (str.match(/[a-z]/i)) {
    return 1;
  } else {
    return 0;
  }
}

/* Question/Answer requests */
function firstQues(var1) {
  if (locVal == null) {
    output = document.getElementById("output");
    output.innerHTML = var1;
  } else {
    output = document.getElementById("output");
    output.innerHTML = d + " " + b;
  }
}

function passFz(var1) {
  if (var1 == 1) {
    passPhase = 1;
  } else if (var1 == 0) {
    passPhase = 0;
  }
}

function reset_break(var1, var2, var3) {
  reqQues(var1, var2, var3);
  conf_val = 1;
  arr = [];
  saveLastOut(var3);
  HideOk_showRegLog();
  logOrReg = 3;
  quesCount = 0;
}

function conditional(var1, var2, var3) {
  reqQues(var1, var2, var3);
  conf_val = 2;
  saveLastOut(var3);
}

function emailExist(var1, var2, var3) {
  reqQues(var1, var2, var3);
  quesCount = 5;
  saveLastOut(var3);
}

function passStep(var1, var2, var3) {
  reqQues(var1, var2, var3);
  saveLastOut(var3);
}

function notEqual(var1, var2, var3) {
  reqQues(var1, var2, var3);
  for (var i = 0; i < 2; i++) {
    arr.splice(-1, 1);
  }
  quesCount = 3;
  saveLastOut(var3);
}

function saveLastOut(var3) {
  lastOut = d + var3 + b;
}

function pleaseInsertVal(var1, var2, var3) {
  reqQues(var1, var2, var3);
}

/*Output response */
function reqQues(var1, var2, var3) {
  if (quesCount == 0 && output == undefined) {
    document.location = "https://ladooniani.github.io/Bot-Web-Assistant/" + mainPage; /// githubpage/bot.html
  } else {
    output.innerHTML = var1;
    document.getElementById(var2).value = "";
    question = var3;
    setTimeout(delayedQuestion, 2000);
  }
}

function delayedQuestion() {
  output.innerHTML = question;
}

/* Password validation */
var myInput = document.getElementById("input");
myInput.onkeyup = function () {
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  var note1, note2, note3, note4;

  if (passPhase == 1) {
    if (quesCount < 7) {
      if (
        myInput.value.match(lowerCaseLetters) &&
        myInput.value.match(upperCaseLetters) &&
        myInput.value.match(numbers) &&
        myInput.value.length >= 8
      ) {
        document.getElementById("output").innerHTML = p21;
        passValid = 0;
        var i = document.getElementById("input").value;
        if (
          quesCount == 4 &&
          arr[3] != null &&
          arr[3] != "" &&
          arr[3] != undefined &&
          i != null &&
          i != "" &&
          i != undefined
        ) {
          if (arr[3] == i) {
            document.getElementById("output").innerHTML =
              d + "Yes, passwords equal!" + b;
          } else if (arr[3].length < i.trim().length && arr[3] != i) {
            document.getElementById("output").innerHTML =
              d + "No, passwords not equal!" + b;
          }
        }
      } else {
        passValid = 1;
        if (myInput.value.length < 1 || myInput == "" || myInput == null) {
          var passNote;
          if (quesCount == 3) {
            passNote = d + "..." + b;
          } else if (quesCount == 4) {
            passNote = p15;
          } // from 4, 5 to  3, 4
          document.getElementById("output").innerHTML = passNote;
        } else {
          if (myInput.value.match(lowerCaseLetters)) {
            note1 = "";
          } else {
            note1 = "lovercase, ";
          }
          if (myInput.value.match(upperCaseLetters)) {
            note2 = "";
          } else {
            note2 = "uppercase, ";
          }
          if (myInput.value.match(numbers)) {
            note3 = "";
          } else {
            note3 = "numbers, ";
          }
          if (myInput.value.length >= 8) {
            note4 = "";
          } else {
            note4 = "minimum 8 characters";
          }
          var noteout =
            "Password must contain " + note1 + note2 + note3 + note4.trim();
          noteout = noteout.replace(/\,+/g, ",").trim();
          noteout = noteout.replace(/,$/, "").trim();
          document.getElementById("output").innerHTML = d + noteout + b;
        }
      }
    } else if (quesCount == 7 || quesCount == 8) {
      var inp = document.getElementById("input").value;
      myInput = parseInt(inp, 10);
      if (myInput == 1) {
        document.getElementById("output").innerHTML = p62;
      } else if (myInput == 2) {
        document.getElementById("output").innerHTML = p63;
      } else if (myInput == 3) {
        document.getElementById("output").innerHTML = p64;
      } else if (myInput == 4) {
        document.getElementById("output").innerHTML = p65;
      } else if (myInput == 5) {
        document.getElementById("output").innerHTML = p66;
      } else if (myInput == 6) {
        document.getElementById("output").innerHTML = p67;
      } else if (myInput == 7) {
        document.getElementById("output").innerHTML = p68;
      } else if (myInput == 8) {
        document.getElementById("output").innerHTML = p69;
      } else if (myInput == 9) {
        document.getElementById("output").innerHTML = p70;
      } else if (myInput == 10) {
        document.getElementById("output").innerHTML = p71;
      } else if (myInput == 11) {
        document.getElementById("output").innerHTML = p72;
      } else if (myInput == 12) {
        document.getElementById("output").innerHTML = p73;
      } else {
        document.getElementById("output").innerHTML = p49;
      }
    }
  }
};

/* Compare Passwords */
function ComparePasswords(var1, var2) {
  if (var1.trim() == var2.trim()) {
    passEqual = 0;
  } else {
    passEqual = 1;
  }
}

/* Change type */
function changeInputType(val1) {
  if (val1 == 1) {
    SetReset(
      "password",
      "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
      "required",
      "Password..",
      "Password Type"
    );
  } else if (val1 == 2) {
    SetReset("email", "", "", "Email..", "Email Type");
  } else if (val1 == 3) {
    SetReset("text", "", "", "Confirm..", "Text Type");
  } else if (val1 == 4) {
    SetReset("text", "", "", "Surname..", "Text Type");
  } else if (val1 == 5) {
    SetReset("text", "", "", "Username..", "Text Type");
  } else if (val1 == 0) {
    SetReset("text", "", "", "", "Text Type");
  } else if (val1 == 6) {
    SetReset(
      "password",
      "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
      "required",
      "Repeat password..",
      "Password Type"
    );
  } else if (val1 == 7) {
    SetReset("tel", "", "", "Phone..", "Phone Type");
  } else if (val1 == 8) {
    SetReset("text", "", "", "Year..", "Text Type");
  } else if (val1 == 9) {
    SetReset("text", "", "", "Month..", "Text Type");
  } else if (val1 == 10) {
    SetReset("text", "", "", "Day..", "Text Type");
  } else if (val1 == 11) {
    SetReset("text", "", "", "Language..", "Text Type");
  } else if (val1 == 12) {
    SetReset("text", "", "", "Country..", "Text Type");
  }
}

function SetReset(var1, var2, var3, var4, outTxt) {
  document.getElementById("input").type = var1;
  document.getElementById("input").pattern = var2;
  document.getElementById("input").required = var3;
  document.getElementById("input").placeholder = var4;
}

/* Focus caret */
myInput.onblur = function () {
  FocusCaret();
};
function FocusCaret() {
  document.getElementById("input").focus();
  document.getElementById("input").select();
  $("#input").focus();
}

/*Scroll to element */
function scrollElmt(var1) {
  var mod = md();
  if (var1 == 1) {
    if (mod == 0) {
      var elmnt = document.getElementById("line");
      elmnt.scrollIntoView();
    }
  } else if (var1 == 0) {
    if (mod == 0) {
      var elmnt = document.getElementById("output");
      elmnt.scrollIntoView();
    }
  }
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

/*Check mobile or desktop */
function md() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    return 0;
  } else {
    return 1;
  }
}

/* Hide Log/Reg btn, show OK btn */
function loginButton() {
  document.getElementById("logBtn").style.display = "none";
  document.getElementById("input").style.display = "none";
  document.getElementById("skipBtn").style.display = "none";
}

function lrs(var1) {
  if (quesCount != 10) {
    if (var1 == 1) {
      HideRegLog_showOk();
      passStep(p34, "input", p35); ///  Hi :) What is your name? (Registration scenario)
      SetReset("text", "", "", "Name..", "Text Type");
    } else if (var1 == 0) {
      HideRegLog_showOk();
      passStep(p36, "input", p37); /// Hello =) Please insert your username or email (Login scenario)
      SetReset("text", "", "", "Username or email..", "Text Type");
    }
    logOrReg = var1;
  } else {
    btnVal = 1;
    if (var1 == 1) {
      bot("female");
    } else if (var1 == 0) {
      bot("male");
    }
  }

  scrollElmt(1);
  FocusCaret();
}

function HideRegLog_showOk() {
  document.getElementById("loginBtn").style.display = "none";
  document.getElementById("regBtn").style.display = "none";
  document.getElementById("logBtn").style.display = "inline";
  document.getElementById("input").style.display = "inline";
  document.getElementById("skipBtn").style.display = "none";
  document.getElementById("logBtn").value = "Ok";
}

function HideOk_showRegLog() {
  document.getElementById("loginBtn").style.display = "inline";
  document.getElementById("regBtn").style.display = "inline";
  document.getElementById("logBtn").style.display = "none";
  document.getElementById("input").style.display = "none";
  document.getElementById("skipBtn").style.display = "none";
}

function Show_Login_hideInputOk() {
  document.getElementById("logBtn").value = "Login";
  document.getElementById("input").style.display = "none";
}

function ShowSkip_showOk() {
  document.getElementById("skipBtn").style.display = "inline";
}

function HideSkip_showOk() {
  document.getElementById("skipBtn").style.display = "none";
}

function hideInput() {
  document.getElementById("input").style.display = "none";
  document.getElementById("logBtn").style.display = "inline";
  document.getElementById("logBtn").value = "Logout";
}

function HideAll_ShowLogData() {
  document.getElementById("loginBtn").style.display = "none";
  document.getElementById("regBtn").style.display = "none";
  document.getElementById("logBtn").style.display = "none";
  document.getElementById("skipBtn").style.display = "none";
}

function GenderChoiseUI(var1) {
  if (var1 == 1) {
    document.getElementById("input").style.display = "none";
    document.getElementById("logBtn").style.display = "none";
    document.getElementById("loginBtn").style.display = "inline";
    document.getElementById("regBtn").style.display = "inline";
    document.getElementById("loginBtn").value = "Male";
    document.getElementById("regBtn").value = "Female";
  } else if (var1 == 0) {
    document.getElementById("input").style.display = "inline";
    document.getElementById("logBtn").style.display = "inline";
    document.getElementById("loginBtn").value = "Login";
    document.getElementById("regBtn").value = "Register";
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("regBtn").style.display = "none";
  }
}

/*Check User and Login */
function checkUserPass() {
  var uname = arr[0];
  var pass = arr[1];
  if (uname == "") {
    alert("Please enter username.");
  } else if (pass == "") {
    alert("Please enter password.");
  } else {
    doYouWantReg();

    console.log(
      "checkUserPass backend request ajax function checks email or username registration, email verification and shows user data"
    );

    /* 

   $.ajax ({
          url: 'php/login.php',      
          data: {username: uname, password: pass}, 
          type: 'post',
          success: function(result)
          {               
            if (result.trim() != "User not registered") {                      
              if(result.verified == 1){
                  console_output("User registration data");  
              } else {
                  console_output("Please verifiy email");  
              }     
            } 
            else if (result.trim() == "User not registered")
            {             
              console_output("User not registered! Do you want to register?");            
            }                
          }
        });

        */
  }
}

function checkUser(user) {
  var u = user;
  if (u == "") {
    alert("Please enter username.");
  } else {
    procCheckUserRes(0);

    console.log(
      "checkUser backend request ajax function checks if user avalible or alredy exist"
    );

    /* 

   $.ajax ({
      url: 'php/userCheck.php',      
      data: {username: u}, 
      type: 'post',
      success: function(result)
      {                
        if (result.trim() == "Username available") 
        {   
          console_output("Username available");
        } 
        else if (result.trim() != "Username available")
        {   
          console_output("User already exist");
        } 
        else 
        {
          console_output("Some bug here :(");
        }   
        console_output(result);
      }
    });

    */
  }
}

function checkEmail(Email) {
  var mail = Email;
  if (mail == "") {
    alert("Please enter username.");
  } else {
    procCheckEmailRes(0);
    console.log(
      "checkEmail backend request ajax function checks if email avalible, alredy exist or invalid"
    );

    /* 

      $.ajax ({
      url: 'php/emailCheck.php',      
      data: {email: mail}, 
      type: 'post',
      success: function(result)
      {        
        if (result.trim() == "Email available") 
        {             
          console_output("Email available");
        }
         else if (result.trim() == "Email invalid") 
        {            
          console_output("Email inccorect format");
        } 
        else if (result.trim() != "Email available" && result.trim() != "Email invalid") 
        {         
          console_output("Email already regitered");
        }   
      }
    });

    */
  }
}

function registerUser() {
  var dt = DateTime();
  var first_name = arr[0].toLowerCase();
  var last_name = arr[1].toLowerCase();
  var user_name = arr[2].toLowerCase();
  var user_pass = arr[3];
  var user_email = arr[5].toLowerCase();
  var user_phone = arr[6];
  var user_age = arr[7] + "-" + arr[8] + "-" + arr[9];
  var user_gender = arr[10];
  var user_language = arr[11];
  var user_country = arr[12];
  var user_date = dt;
  var user_ip = userIP;

  console.log(
    "registerUser backend request ajax function insert user data, check user input data is valid, send verification email, create user directory"
  );

  /* 

 if(first_name == '' || ... ) {
     console_output('Please insert data.');
 } else {
  $.ajax ({
    url: 'php/insert.php',
    data: {name: first_name, ... },
     type: 'post',
     success: function(result)
     {
        var user_directory = user_email;  
        if(user_directory == '') {
          console_output('No directory name.'); 
        } else {
          $.ajax ({
            url: 'php/directory.php',
            data: {directory: user_directory},
            type: 'post',
            success: function(result)
            {
              console_output(result);
            }
          });
        }        
        console_output(result);
      }
    });
  }

  */
}

function LoginAnswer(
  var1,
  var2,
  var3,
  var4,
  var5,
  var6,
  var7,
  var8,
  var9,
  var10,
  var11,
  var12
) {
  userData =
    " ID: \n" +
    var1 +
    "<br>" +
    " Username:\n" +
    var2 +
    "<br>" +
    " Name:\n" +
    var3 +
    "<br>" +
    " Surname:\n" +
    var4 +
    "<br>" +
    " Email:\n" +
    var5 +
    "<br>" +
    " Phone:\n" +
    var6 +
    "<br>" +
    " Age:\n" +
    var7 +
    "<br>" +
    " Gender:\n" +
    var8 +
    "<br>" +
    " Language:\n" +
    var9 +
    "<br>" +
    " Country:\n" +
    var10 +
    "<br>" +
    " Date:\n" +
    var11;

  const n = var3.charAt(0).toUpperCase() + var3.slice(1);
  const s = var4.charAt(0).toUpperCase() + var4.slice(1);
  passStep(p40 + d + n + " " + s + b, "input", p41 + userData); /// Hello, dear (name/surname) Your profile:
  colorState(1);
  hideInput();
  LocalStorageSet(var1);
  console_output("LOC: " + var1);
  logged = 1;
  quesCount = 0;
}

function doYouWantReg() {
  reset_break(p42, "input", p33);
}

/* Local Storage Set/Get */
function LocalStorageSet(var1) {
  localStorage.setItem("storageName", var1);
  console_output("Local storage value: " + var1);
}

function LocalStorageGet() {
  locVal = localStorage.getItem("storageName");
  console_output("Logged in user value: " + locVal);
}

function LocalStorageReset() {
  window.localStorage.removeItem("storageName");
  location.reload();
  logged = 0;
}

/*Input text control */
function inputFilter(e) {
  if (logOrReg != 0) {
    var regEx;
    if (quesCount > 5 && quesCount < 10) {
      /// 6,7,8,9
      regEx = "^[0-9]*$";
    } else {
      regEx = "^[a-zA-Z0-9 ]+$";
    }
    var regex = new RegExp(regEx);
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
      return true;
    }
    e.preventDefault();
    return false;
  }
}

function cif() {
  if (quesCount != 5) {
    return inputFilter(this.event);
  }
}

/* Input length control */
$("#input").on("keypress", function (e) {
  var currentValue = String.fromCharCode(e.which);
  var finalValue = $(this).val() + currentValue.trim();
  charNum = finalValue.length;
});

function charLength(var1, var2) {
  if (var2 == 1) {
    /// User
    if (var1 >= 5) {
      return 0;
    } else {
      return 1;
    }
  } else if (var2 == 2) {
    /// Year
    if (var1 == 4) {
      return 1;
    } else {
      if (var1 > 4) {
        return 0;
      } else if (var1 < 4) {
        return 2;
      }
    }
  } else if (var2 == 3) {
    /// Month, Day
    if (var1 < 3) {
      return 1;
    } else {
      return 0;
    }
  }
}

/* Color indicator */
function colorState(val1) {
  if (val1 == 1) {
    $(".input-color").css({
      color: "black",
      "background-color": "#19d4d4",
      "border-color": "#19d4d4",
    });
  } else if (val1 == 0) {
    $(".input-color").css({
      color: "black",
      "background-color": "yellow",
      "border-color": "#yellow",
    });
  }
}

/*Autocomplete */
function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } /*else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }*/
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

function console_output(var1) {
  console.log(var1);
}
