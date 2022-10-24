
const inputRangeRef = document.querySelector("#font-size-control");
const inputTextRef = document.querySelector("#text");

  inputRangeRef.addEventListener("input", () => {
    inputTextRef.style.fontSize = `${inputRangeRef.value}px`;
  });



