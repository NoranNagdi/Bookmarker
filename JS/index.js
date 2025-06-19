var siteNameInput = document.getElementById("siteNameInput");
var siteUrlInput = document.getElementById("siteUrlInput");

var sitesArr = [];
if(localStorage.getItem("sites") != null){
  sitesArr = JSON.parse(localStorage.getItem("sites"))
  displayBookmark();
}


function addBookmark() {
  var site = {
    name: siteNameInput.value,
    url: siteUrlInput.value,
  };

  sitesArr.push(site);
  localStorage.setItem("sites",JSON.stringify(sitesArr));
  displayBookmark();
  resetInputs();
}

function displayBookmark() {
  var sitesToDisplay = "";

  for (var i = 0; i < sitesArr.length; i++) {
    sitesToDisplay += `<tr>
    <td>${i + 1}</td>
    <td>${sitesArr[i].name}</td>
    <td>
      <a href="${sitesArr[i].url}" target="_blank" id="visitLink">
        <button class="btn btn-success px-4"> <i class="fa-solid fa-eye"></i> Visit</button>
      </a>
    </td>
    <td>
      <button class="btn btn-danger px-4" onclick="deleteBookmark(${i})"> <i class="fa-solid fa-trash"></i> Delete</button>
    </td>
  </tr>`;
  }
  document.getElementById("tBody").innerHTML = sitesToDisplay;
}

function deleteBookmark(siteIndex){
  sitesArr.splice(siteIndex,1);
  localStorage.setItem("sites", JSON.stringify(sitesArr));
  displayBookmark();
}

function resetInputs(){
  siteNameInput.value ="";
  siteUrlInput.value="";
}

