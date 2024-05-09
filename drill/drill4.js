function average() {
      var science = parseFloat(document.getElementById("science").value);
      var math = parseFloat(document.getElementById("math").value);
      var english = parseFloat(document.getElementById("english").value);
      var filipino = parseFloat(document.getElementById("filipino").value);
      var mapeh = parseFloat(document.getElementById("mapeh").value);

      var average = (science + math + english + filipino + mapeh) / 5;

      
      document.getElementById("result").innerHTML = average.toFixed(2);
      
    }


    let t = new Date();
    document.write("<span style='color: white;'> Today's date: " + t + "</span>");
    