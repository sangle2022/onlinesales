function simulateEvent(customOutcomes) {
    const customEventCount = 1000;
    const customOccurrenceCount = {};
    for (const customOutcome of Object.keys(customOutcomes)) {
      customOccurrenceCount[customOutcome] = 0;
    }
  

    const customCumulativeProbabilities = [];
    let customCumulativePercentage = 0;
    for (const [customOutcome, customProbability] of Object.entries(customOutcomes)) {
      customCumulativePercentage += customProbability;
      customCumulativeProbabilities.push([customOutcome, customCumulativePercentage]);
    }
  
   
    for (let i = 0; i < customEventCount; i++) {
      const customRandNum = getRandomInt(1, 100);
      for (const [customOutcome, customCumulativePercentage] of customCumulativeProbabilities) {
        if (customRandNum <= customCumulativePercentage) {
          customOccurrenceCount[customOutcome]++;
          break;
        }
      }
    }
  
    
    for (const [customOutcome, customCount] of Object.entries(customOccurrenceCount)) {
      console.log(`${customOutcome}: ${customCount} times`);
    }
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
  const customOutcomes1 = { 1: 10, 2: 30, 3: 15, 4: 15, 5: 30, 6: 0 };
  simulateEvent(customOutcomes1);
  
  const customOutcomes2 = { "Head": 35, "Tail": 65 };
  simulateEvent(customOutcomes2);
  