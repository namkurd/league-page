/*   STEP 1   */
export const leagueID = "859919691194462208"; // your league ID
export const leagueName = "DTF Club"; // your league name
export const dues = 120; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
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
          {
       "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Haan",
       "tookOver": 2010, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Brooklyn", // (optional)
       "bio": "Some thought it would never happen. Some said he didn't have what it takes. Haan hit an all-time low when he became the Sacko in 2017, but he used that to fuel him the following years. He climbed and climbed each season - from the 2017 Sacko to finishing eighth in 2018 and then fourth in 2019. Haan finally reached the mountain top in 2020 and won his first championship. But is this the start of something truly great or will he go back down the mountain as a one-hit wonder?",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "tradingScale": 1, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
          {
       "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Joe",
       "tookOver": 2010, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "The Brooklyn Museum, ever heard of it?", // (optional)
       "bio": "He'll tell you he won in 2007, but much like his success in The DTF Club, none of it is real. What is real is that Joe is the three-time reigning league Sacko. But do not mistake a lack of results for a lack of effort. Joe always gives everything he's got to his teams - it's just not enough for some cursed reason. The undisputed transaction king will enter the 2021 season looking to wheel and deal his way into the promised land without the weekly podcast punishment looming over him. For now...",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "tradingScale": 9, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
          {
       "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Alex",
       "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "It's not upstate!", // (optional)
       "bio": "WIP",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "tradingScale": 9, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
          {
       "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Steven",
       "tookOver": 2010, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "One of the Carolinas, but not the other one", // (optional)
       "bio": "He's had many names during his decade in The DTF Club. He has been both the voice of The People and, when that didn't work, the voice of The State. Steven shares the record for most consecutive playoff appearances and has been in back-to-back Finals in the past, but his fate was sealed when Haan selected him as the first round opponent in last season's playoffs. Will his inter-league rivalries cloud his path to victory or act as fuel to finally get him across the finish line? The People are watching.",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "tradingScale": 6, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
          {
       "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Ankit",
       "tookOver": 2010, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Manhattan", // (optional)
       "bio": "Once the leader of the world-infamous Swagmen, Ankit's recent seasons should not diminish the fact that he won the 2012 DTF Championship . It should, however, highlight that he is entering what could be his ninth consecutive season missing the playoffs. Lifetime analytics say that Ankit is the league's 'unluckiest' member. Does the former star still contain a supernova or will he burn out quietly while breaking a league record for number of Sackos?",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
          {
       "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Tommy",
       "tookOver": 2015, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "One of the Carolinas, but not the other one", // (optional)
       "bio": "Tommy took the league by storm when he joined in 2015 following the departure of Oleg. He followed in his predecessor's footsteps by winning a championship his rookie year and went on to win another in 2017. Tommy followed his second championship season with an astounding and multi-record-breaking 14-0 regular season, but Joe would go on to knock him out in the first round during a rare down week. The tape junkie knows his stuff and comes out swinging each season - it's just a matter of if he hits this year or not.",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "favoriteTeam": "lar", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "tradingScale": 7, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
          {
       "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Ryan",
       "tookOver": 2010, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Manhattan", // (optional)
       "bio": "Number's don't lie. With three rings, five finals appearances, and making the playoffs in seven out of eleven seasons, Ryan has cemented his legacy as one of the greatest members in DTF Club history. Was his David and Goliath loss to Haan last season a permanent usurping? Or has he brushed off his second finals loss and prepared to make another run for greatness? If history is any indicator, we shouldn't write him off yet.",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "tradingScale": 5, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     }
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
