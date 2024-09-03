function metersToFeetAndInches(meters) {
  // 1 meter is equal to 3.28084 feet
  const feet = meters * 3.28084;

  // Get the whole number of feet
  const wholeFeet = Math.floor(feet);

  // Get the remaining inches
  const inches = (feet - wholeFeet) * 12;

  return `${wholeFeet} feet ${inches} inches`;
}

// Example usage:
console.log(metersToFeetAndInches(1.76)); // Output: 5 feet 9 inches
