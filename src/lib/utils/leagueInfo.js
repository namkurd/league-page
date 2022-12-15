/*   STEP 1   */
export const leagueID = "859919691194462208"; // your league ID
export const leagueName = "DTF Club"; // your league name
export const dues = 120; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
<p>Welcome to The DTF Club, the premiere fantasy football league for jamokes by jamokes. Founded over a decade ago, The DTF Club has become the gold standard in meaningless arguments, petty grudges, and complete disregard for order or process. </p>
<p>We did a draft by e-mail once. </p>

`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
     {
       "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Aidan",
       "tookOver": 2016, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "One of the Carolinas", // (optional)
       "bio": "Since joining The DTF Club in 2016, Aidan quickly earned his stripes and the confidence of his fellow league members which resulted in his coronation as League Commissioner in 2017. Having grown into his role as the decision maker, Aidan has ruled with an iron (but fair) fist in order to maintain control. He's won over the hearts of the league, now the only thing left to win is the ever-elusive Championship ring.",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "tradingScale": 6, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Ben",
       "tookOver": 2013, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Brooklyn", // (optional)
       "bio": "Are we still talking about his management? For the first time, yes. We're talking about League historian and archivist, Ben. Ben won a chip in 2018 and has shown consistent fantasy competence in the form of having the winningest lifetime head-to-head record (.607). The DTF Stats & Analytics team has also noted him as the 'luckiest' member. The question for this season will be, 'Is Ben feeling lucky, punk?'",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "tradingScale": 7, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Jake",
       "tookOver": 2010, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "One of the Carolinas, but not the other one", // (optional)
       "bio": "Two rings and zero Sackos, yet he's not mentioned in the GOAT conversation. Is it the lack of thread participation? The unambitious team names? Some will try to sell you on a narrative that Jake's 2016 ring is less valid because someone else drafted the team for him. What gets left out of that conversation is Jake's coordination with his proxy on draft strategy ahead of the actual draft. Jake will try to put the conversation to rest using his newly gained swaddling skills and go for chip number three in 2021.",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "tradingScale": 7, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
