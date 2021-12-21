window.function = function (bool1,text1,bool2,text2,bool3,text3,bool4,text4,bool5,text5,other) {

  bool1 = bool1.value ?? "";
  text1 = text1.value ?? "";
  bool2 = bool2.value ?? "";
  text2 = text2.value ?? "";
  bool3 = bool3.value ?? "";
  text3 = text3.value ?? "";
  bool4 = bool4.value ?? "";
  text4 = text4.value ?? "";
  bool5 = bool5.value ?? "";
  text5 = text5.value ?? "";
  other = other.value ?? "";

  let val1 = "";
  let val2 = "";
  let val3 = "";
  let val4 = "";
  let val5 = "";

  if (bool1 !== "true" &&  bool2 !== "true" && bool3 !== "true" && bool4 !== "true" && bool5 !== "true") {
    return "N/A";
  }

  if (bool1 == "true") {
    val1 = text1;
  }

  if (bool2 == "true") {
    val2 = text2;
  }

  if (bool3 == "true") {
    val3 = text3;
  }

  if (bool4 == "true") {
    val4 = text4;
  }

  if (bool5 == "true") {
    val5 = text5;
  }

  let final = [val1, val2, val3, val4, val5, other].filter(Boolean).join(", ");
  return final;
}
