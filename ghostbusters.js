// Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!
//
// In this kata, strings represent buildings while whitespaces within those strings represent ghosts.
//
// So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!
//
// Example:
//
// ghostBusters("Sky scra per");
// Should return:
//
// "Skyscraper"
// If the building contains no ghosts, return the string:
//
// "You just wanted my autograph didn't you?"


//solution
function ghostBusters(building) {
  const cleared = building.split(" ").join("").trim()
  const noGhost = "You just wanted my autograph didn't you?"
  return building.length === cleared.length ? noGhost : cleared
}