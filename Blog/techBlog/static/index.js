function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.addEventListener("DOMContentLoaded", ()=>{
  var array = new Array();
  var array1 = new Array();
  var array2 = new Array();
    document.querySelector('#button').addEventListener('click', ()=>{
        window.location.replace('/news/');
    });

    document.querySelector('#btn').addEventListener('click', ()=>{
        window.location.replace('/videos/');
    });

    document.querySelector('#button1').addEventListener('click', ()=>{
        window.location.replace('/articles/');
    });

    document.querySelectorAll('.content').forEach(function(e){

      if(e.innerHTML.length > 300){
        e.innerHTML = e.innerHTML.slice(0, 300);
        var seemore = document.createElement('a');
        seemore.innerHTML = "See More";
        seemore.setAttribute('href', '/news/');
        e.append(seemore);
      }
    });

    document.querySelectorAll('.content1').forEach(function(e){

      if(e.innerHTML.length > 150){
        e.innerHTML = e.innerHTML.slice(0, 150);
        var seemore = document.createElement('a');
        seemore.innerHTML = "See More";
        seemore.setAttribute('href', '/articles/');
        e.append(seemore);
      }
    });

    document.querySelectorAll('#new1').forEach(function(e){
      array.push(e);
    });

    document.querySelectorAll('#article1').forEach(function(e){
      array1.push(e);
    });

    document.querySelectorAll("#videos2").forEach(function(e){
      array2.push(e);
    });
    if(array.length === 0){
      var no = document.createElement('h3');
      no.setAttribute('class', 'no_news');
      no.innerHTML = "No news available";
      document.querySelector('#new').append(no);
    }

    if(array1.length === 0){
      var no = document.createElement('h3');
      no.setAttribute('class', 'no_news');
      no.innerHTML = "No articles available";
      document.querySelector('#article').append(no);
    }

    if(array2.length === 0){
      var no = document.createElement('h3');
      no.setAttribute('class', 'no_news');
      no.innerHTML = "No videos available";
      document.querySelector('#videos1').append(no);
    }

    for(i=0; i <= array1.length-6; i++){
      array1[i].parentNode.removeChild(array1[i]);
    }
    for(i=0; i <= array.length-6; i++){
      array[i].parentNode.removeChild(array[i]);
    }
    console.log(array2.length);
});

function getCount(parent, getChildrensChildren){
    var relevantChildren = 0;
    var children = parent.childNodes.length;
    for(var i=0; i < children; i++){
        if(parent.childNodes[i].nodeType != 3){
            if(getChildrensChildren)
                relevantChildren += getCount(parent.childNodes[i],true);
            relevantChildren++;
        }
    }
    return relevantChildren;
}
