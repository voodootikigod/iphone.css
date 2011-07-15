// convenience functions I use, up to you to use
var h = [];
function showSection(e, skipchain) {
  var id = (e.currentTarget ?  "#"+e.currentTarget.href.split("#")[1] : e),
      section = $(id),
      c = $(".current").removeClass("current").addClass("reverse").attr("id");
  if (!skipchain) {
    if (section.attr("data-chain") == "true") {
      h.push("#"+c);
      $("#back").show();
    }
    else {
      h.length=0;
      $("#back").hide();
    }
  }
  $(".current").removeClass("current").addClass("reverse");
  var title = section.addClass("current").attr("title");
  $(".active").removeClass("active");
  //activate toolbar -- if appropriate
  $(id+"-tb").addClass("active");
  if (title == "") {
    $("#header").hide();
    $("#wrapper").addClass("noheader");
  } else {
    $("#header").show().find("h1").text(title)
    $("#wrapper").removeClass("noheader");
  }
  // wait for DOM to settle
  setTimeout(function () {
  		myScroll.refresh();
      myScroll.scrollTo(0,0,1);
  	}, 0);
}
function back(e) { 
  var target = h.pop();
  if (target) {
    showSection(target,true);
    if (h.length==0)
      $("#back").hide();
  } else {
   $("#back").hide();
  }
}

