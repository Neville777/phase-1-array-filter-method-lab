// Define the function findMatching
function findMatching(drivers, name) {
    // Use the filter method to create a new array with case-insensitive matches
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
// Define the function fuzzyMatch
  function fuzzyMatch(drivers, query) {
    // Use the filter method to create a new array with matching driver names
    return drivers.filter(driver => driver.startsWith(query));
  }

  // Define the function matchName
  function matchName(drivers, name) {
    // Use the filter method to create a new array with matching driver objects
    return drivers.filter(driver => driver.name === name);
  }