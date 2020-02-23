function logTime() {
    // first log the current date/time
  //  console.log(new Date());

    // if the counter is equal to 4 it means the function has been called 5 times (because we started the counter at 0)
    // cancel the timer - the logTime function won't be called again
    if(counter === 4) {


        const generalParagraph = document.querySelectorAll("p");

        function handleEachPar(item) {
        console.log(item)
        const formattedParagraph=item.textContent.replace(/the/g, "replaced").replace(/The/g, "Replaced");
        item.textContent = formattedParagraph;
        }

    generalParagraph.forEach(handleEachPar);

        const generalHeading = document.querySelector("h1");
        const formattedHeading=generalHeading.textContent.replace(/the/g, "replaced").replace(/The/g, "Replaced");
        generalHeading.textContent = formattedHeading;
    
    clearInterval(intervalId);
         

    }

    // add one to the counter variable
    // this is shorthand for count = count + 1
    counter++;

}

// this is the variable we'll increment and use to check how of often the function has been called
let counter = 0;

// The timer's id will be stored in `intervalId`:
const intervalId = setInterval(logTime, 1000);
