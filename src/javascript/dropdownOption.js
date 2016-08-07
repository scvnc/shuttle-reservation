/////////////// These routes/routes_val are looping below to show up in the console////////////////
var routes = ['Aurora,IL','Chicago,IL', 'Dekalb,IL', 'Lombard,IL', 'Villa Park,IL', 'Wheaton, IL'];
var routes_val = ['AUR', 'CHI', 'DKB',  'LMB', 'VP', 'WTN'];


//////// cityCodes////////////////////////////////////////////////////
var cityCodes = {
  'AUR':  'Aurora, IL',
  'CHI': 'Chicago,IL',
  'DKB': 'DeKalb, IL',
  'LMB': 'Lombard,IL',
  'VP': 'Villa Park, IL',
  'WTN': 'Wheaton,IL'
};
//console.log(Object.keys(cityCodes));



/////////ON CHANGE EVENT ///////////////////////
function populateDestinations () {

  var list = document.getElementById("list");
  var list2 = document.getElementById("list2");
  list2.innerHTML  = " ";

  var cityCode = $(list).val()

  var optionArray = getDestinations(cityCode);

  // OK, add in a 'blank' option
  var blankOpt = document.createElement("option");
  blankOpt.value = '';
  blankOpt.innerHTML = 'Select destination';
  list2.options.add(blankOpt);


  for (var option in optionArray) {
    //var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    var option = optionArray[option];
    var cityCode = option.cityCode;
    var displayName = option.displayName;
    newOption.value = cityCode;
    newOption.innerHTML = displayName;
    list2.options.add(newOption);
  }
}


////// Loop to display routes in dropdown and console/////****//////////////
for (var i = 0; i < routes.length; i++) {
  var option = document.createElement('option');
  option.innerHTML = routes[i];
  option.value = routes_val[i];
  $('#list').append(option);
}

routes_val.forEach(function (val) {
  console.log(val, cityCodes[val]);
});
/////////////////////////////*******/////////////////////////////////




//
//// SOURCE CITY PICKER LOGIC
//
document.getElementById('list2').disabled=true;

function handleSourceChange () {

  var selectedValue = $("#list").val();


  // Determine if destination should be enabled/disabled
  if(selectedValue === "From Location") {
    document.getElementById('list2').disabled=true;
  } else {
    document.getElementById('list2').disabled=false;
  }

  populateDestinations();

  handleDestinationChange();

}
$("#list").change(handleSourceChange)

//
//// DESTINATION CITY PICKER LOGIC
//
//
document.getElementById("date-picker").style.display = '';

function figureOutDays () {
  return [5];
}

function handleDestinationChange () {

  var selectedValue = $("#list2").val();

  if(selectedValue === '') {
    document.getElementById("date-picker").style.display = 'none';
  } else {
    document.getElementById("date-picker").style.display = ''; // Show
  }

  let sourceCity = $("#list").val();
  let destCity = $("#list2").val();

  let activeDays = figureOutDays(sourceCity, destCity); // [3, 4, 5]

  // NOT WORKING
  datePicker.set('disable', true);
  datePicker.set('enable', activeDays)

}

$("#list2").change(handleDestinationChange)


//////////GET DESTINATIONS FUNCTION///////////////////////////////////////////////
var getDestinations = function(cityCode) {

  if (cityCode == 'AUR') {
    var optionArray = [{cityCode: 'woo', displayName: 'Woo'}, {cityCode: 'yea', displayName: 'Yea'}];
  }

  if (cityCode == 'CHI') {
    var optionArray = [{cityCode: 'woo', displayName: 'Woo'}, {cityCode: 'yea', displayName: 'Yea'}];
  }

  if(cityCode == 'DKB') {
    var optionArray = [{cityCode: 'woo', displayName: 'Woo'}, {cityCode: 'yea', displayName: 'Yea'}];
  }

  if(cityCode == 'LMB') {
    var optionArray = [{cityCode: 'woo', displayName: 'Woo'}, {cityCode: 'yea', displayName: 'Yea'}];
  }

  if (cityCode == 'VP') {
    var optionArray = [{cityCode: 'woo', displayName: 'Woo'}, {cityCode: 'yea', displayName: 'Yea'}];
  }

  if (cityCode == 'WTN') {
    var optionArray = [{cityCode: 'woo', displayName: 'Woo'}, {cityCode: 'yea', displayName: 'Yea'}];
  }

  return optionArray;

}

console.log(getDestinations('aur'));
//var optionsArray = getDestinations('aur')


var getRouteDays = function() {

return [1,2,3,4];
}

console.log(getRouteDays());


var goFurther = function() {

var pickup = document.getElementById("list");
var pickupCityCode = pickup.options[pickup.selectedIndex].value;


  return true;
  if(pickupCityCode != ''){
    document.getElementById('list2').disabled=false;
  }else{
    document.getElementById('list2').disabled=true;
  }
}

console.log(goFurther());

/*
switch(cityCodes){
case 'Aurora, IL':
  console.log("did this work?");
  break;
  default:
  console.log("Maybe?");
}*/



///////////////////// DATE PICKER IF ( ) GREY OUT THAT... //////////////////////////////////////////////////
/*  var pickup = document.getElementById("list");
  var pickupCityCode = pickup.options[pickup.selectedIndex].value;

if(pickupCityCode != '') {
  list2.disabled=true;
} else {
  list2.disabled=false;
}

if(list2 != '') {
  input_01.disabled=true;
} else {
  input_01.disabled=false;
}


console.log(pickup);*/
