// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  console.log(saturdayFun()); //  Saturday, I want to roller-skate!"
  console.log(saturdayFun('go hiking')); // Saturday, I want to go hiking!"


  function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  console.log(mondayWork()); //  Monday, I will go to the office."
  console.log(mondayWork('work from home')); // Monday, I will work from home."



  function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer"));
  
  
  
