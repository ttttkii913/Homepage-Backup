window.onload = function () { /*프롬프트 출력*/
    let n = document.getElementById("button");
    n.onclick = save;
}

function save()  {
  alert('저장되었습니다');
  document.location.href="index.html";
}


function over(obj){ /*마우스 핸들링 이벤트 */
    obj.style.backgroundColor="rgb(193, 124, 235)";
}
function out(obj){ 
    obj.style.backgroundColor="rgb(118, 22, 235)";
}


