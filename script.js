document.getElementById("uu").style.display = "none";
function gon() {
  if (document.getElementById("jj").style.width == "100%") {
    document.getElementById("jj").style.width = "0%";
  } else if (document.getElementById("jj").style.width == "0%") {
    document.getElementById("uu").style.display = "none";
    for (let i = 0; i < 101; i++) {
      document.getElementById("jj").style.width = i + "%";
    }
    document.getElementById("uu").style.display = "block";
  }
}
