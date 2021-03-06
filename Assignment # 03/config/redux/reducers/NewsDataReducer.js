const INITIAL_STATE = {
    type:'NEWSDATA',
    isLoading:true,
    data:{}
  
    
    
  };
  
  const NewsDataReducer = (state = INITIAL_STATE,action) => {

    if(action.type === 'NEWSDATA'){
      return {...state,...action}
    }
    else{
      return state
    }


  }
  
  export default NewsDataReducer;
  


  // data:{
  //   "status": "ok",
  //   "totalResults": 38,
  //   "articles": [
  //   {
  //   "source": {
  //   "id": "cnn",
  //   "name": "CNN"
  //   },
  //   "author": "Christina Zdanowicz, CNN",
  //   "title": "A Covid-19 survivor came out of a coma after 65 days. Now she supports vaccinations - CNN",
  //   "description": "After spending two months in a coma due to Covid-19 earlier this year, a California woman is urging people to get vaccinated.",
  //   "url": "https://www.cnn.com/2022/01/03/us/covid-19-survivor-supports-vaccines-trnd/index.html",
  //   "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220103120731-andrea-arriaga-borges-covid-survivor-super-tease.jpg",
  //   "publishedAt": "2022-01-03T22:12:00Z",
  //   "content": null
  //   },
  //   {
  //   "source": {
  //   "id": "cnn",
  //   "name": "CNN"
  //   },
  //   "author": "Sonia Moghe, CNN",
  //   "title": "Prince Andrew accuser Virginia Roberts Giuffre's 2009 settlement with Jeffrey Epstein released - CNN",
  //   "description": "A 2009 settlement agreement between sex offender Jeffrey Epstein and Virginia Roberts Giuffre -- the woman who accused him of sexual abuse and of trafficking her to Prince Andrew and other men -- was unsealed Monday.",
  //   "url": "https://www.cnn.com/2022/01/03/us/virginia-giuffre-jeffrey-epstein-settlement/index.html",
  //   "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/190906152149-prince-andrew-guifre-maxwell-super-tease.jpg",
  //   "publishedAt": "2022-01-03T22:07:00Z",
  //   "content": "(CNN)A 2009 settlement agreement between sex offender Jeffrey Epstein and Virginia Roberts Giuffre -- the woman who accused him of sexual abuse and of trafficking her to Prince Andrew and other men -??? [+3238 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "cnn",
  //   "name": "CNN"
  //   },
  //   "author": "Paul R. La Monica, CNN Business",
  //   "title": "Apple has become the world's first $3 trillion company - CNN",
  //   "description": "Apple has reached yet another major milestone. The iPhone maker topped a market value of $3 trillion Monday ??? the first publicly traded company ever to be worth that much.",
  //   "url": "https://www.cnn.com/2022/01/03/investing/apple-three-trillion-dollar-market-cap/index.html",
  //   "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211213080106-apple-headquarters-102821-file-restricted-super-tease.jpg",
  //   "publishedAt": "2022-01-03T21:57:00Z",
  //   "content": null
  //   },
  //   {
  //   "source": {
  //   "id": "ars-technica",
  //   "name": "Ars Technica"
  //   },
  //   "author": "Dan Goodin",
  //   "title": "Microsoft fixes harebrained Y2K22 Exchange bug that disrupted email worldwide - Ars Technica",
  //   "description": "A rookie programming error crashed servers because they couldn't process the year 2022.",
  //   "url": "https://arstechnica.com/information-technology/2022/01/exchange-server-bug-gets-a-fix-after-ruining-admins-new-years-plans/",
  //   "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/01/party-pooper-760x380.jpeg",
  //   "publishedAt": "2022-01-03T21:47:39Z",
  //   "content": "50 with 40 posters participating, including story author\r\nMicrosoft has released a fix for a harebrained Exchange Server bug that shut down on-premises mail delivery around the world just as clocks w??? [+2906 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "the-wall-street-journal",
  //   "name": "The Wall Street Journal"
  //   },
  //   "author": "Caitlin Ostroff, Paul Vigna",
  //   "title": "U.S. Stocks Close Higher to Start 2022 - The Wall Street Journal",
  //   "description": "Apple pushes Nasdaq ahead as tech giant briefly hits $3 trillion market value",
  //   "url": "https://www.wsj.com/articles/global-stock-markets-dow-update-01-03-2022-11641200978",
  //   "urlToImage": "https://images.wsj.net/im-460724/social",
  //   "publishedAt": "2022-01-03T21:46:00Z",
  //   "content": "U.S. stocks rose in the first session of 2022 and Apple briefly touched a $3 trillion market capitalization, which was enough to push the Dow Jones Industrial Average and S&amp;P 500 to fresh record ??? [+5337 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "Sports Illustrated"
  //   },
  //   "author": "Michael Shapiro",
  //   "title": "Oklahoma QB Caleb Williams to Enter Transfer Portal - CalBearsMaven",
  //   "description": "The Sooners could see another major departure from the program in 2022.",
  //   "url": "https://www.si.com/college/2022/01/03/caleb-williams-oklahoma-enters-transfer-portal",
  //   "urlToImage": "https://www.si.com/.image/t_share/MTg2NDQ0MzQ0ODMwNDY5MjQ5/caleb-williams-enters-transfer-portal-oklahoma.jpg",
  //   "publishedAt": "2022-01-03T21:19:30Z",
  //   "content": "Oklahoma quarterback Caleb Williams announced Monday he will enter the transfer portal.\r\nWilliams added staying at Oklahoma is ???definitely??? an option despite Monday's decision. His father, Carl Willi??? [+1338 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "NBCSports.com"
  //   },
  //   "author": "Myles Simmons",
  //   "title": "Matt LaFleur: Right now, the mindset is we???re going to play our guys against Detroit - NBC Sports",
  //   "description": "After clinching the NFC???s No. 1 overall seed with their victory over the Vikings on Sunday, the Packers don???t really have anything to play for in Week 18.But there???s still a game scheduled against the Lions. And at least for now, head coach Matt LaFleur is pl???",
  //   "url": "https://profootballtalk.nbcsports.com/2022/01/03/matt-lafleur-right-now-the-mindset-is-were-going-to-play-our-guys-against-detroit/",
  //   "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/01/GettyImages-1359921806-e1641243752513.jpg",
  //   "publishedAt": "2022-01-03T21:18:00Z",
  //   "content": "After clinching the NFCs No. 1 overall seed with their victory over the Vikings on Sunday, the Packers dont really have anything to play for in Week 18.\r\nBut theres still a game scheduled against the??? [+1959 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "cnn",
  //   "name": "CNN"
  //   },
  //   "author": "Ally Barnard, Alex Stambaugh and David McKenzie, CNN",
  //   "title": "Suspect arrested and charged as fire reignites at South Africa's Parliament - CNN",
  //   "description": "A 49-year-old suspect has been arrested and charged in connection to a large fire that has \"gutted\" South Africa's Parliament in Cape Town on Sunday, police said in a statement.",
  //   "url": "https://www.cnn.com/2022/01/03/africa/south-africa-parliament-fire-suspect-intl/index.html",
  //   "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220103131443-06-south-africa-parliament-fire-0103-super-tease.jpg",
  //   "publishedAt": "2022-01-03T20:59:00Z",
  //   "content": null
  //   },
  //   {
  //   "source": {
  //   "id": "the-washington-post",
  //   "name": "The Washington Post"
  //   },
  //   "author": "Paul Kane, Marianna Sotomayor, Jacqueline Alemany",
  //   "title": "Fear, anger and trauma: How the Jan. 6 attack changed Congress - The Washington Post",
  //   "description": "Interviews with more than 20 members, including Republicans and Democrats in the House and Senate, reveal a Congress that remains on edge and where worries about more violence are front of mind for many ??? and for good reason.",
  //   "url": "https://www.washingtonpost.com/politics/2022/01/03/january-6-congress/",
  //   "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/UN6GGFQ77EI6ZKGZBAT2FJFZCU.jpg&w=1440",
  //   "publishedAt": "2022-01-03T20:56:00Z",
  //   "content": "But the detectors arent there to deter armed insurrectionists. Instead, those detectors are there to prevent lawmakers or their staff from trying to commit violence against each other.\r\nStory continu??? [+16384 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "nbc-news",
  //   "name": "NBC News"
  //   },
  //   "author": "Dareh Gregorian, Jo Ling Kent",
  //   "title": "Rep. Marjorie Taylor Greene suspended from Facebook for 'misinformation' - NBC News",
  //   "description": "Facebook suspended Rep. Marjorie Taylor Greene's account for 24 hours a day after Twitter \"permanently suspended\" her personal account for misinformation.",
  //   "url": "https://www.nbcnews.com/politics/congress/rep-marjorie-taylor-greene-suspended-facebook-misinformation-n1286883",
  //   "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2022_01/3522163/211130-marjorie-taylor-greene-mn-1035.jpg",
  //   "publishedAt": "2022-01-03T20:44:00Z",
  //   "content": "Facebook temporarily suspended Rep. Marjorie Taylor Greene's account on Monday, a day after Twitter \"permanently suspended\" the Georgia congresswoman's personal account for posting misinformation.\r\nF??? [+2453 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "New York Post"
  //   },
  //   "author": "Marjorie Hernandez",
  //   "title": "Los Angeles County reports nearly 45,000 new COVID cases over weekend - New York Post ",
  //   "description": "Los Angeles County Public Health officials said high rates of community transmission of COVID reached almost to 45,000 new cases cases over the holiday weekend.",
  //   "url": "https://nypost.com/2022/01/03/los-anglos-angeles-county-reports-nearly-45000-new-covid-19-cases-during-weekendeles-covid-surge-over-holiday-weekend/",
  //   "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/01/los-angeles-covid-220103-comp.jpg?quality=90&strip=all&w=1024",
  //   "publishedAt": "2022-01-03T20:17:00Z",
  //   "content": "Los Angeles County reported nearly 45,000 new COVID-19 cases over the New Year???s weekend with two deaths, health officials said. \r\nLA County reported 23,553 new positive COVID cases Saturday and 21,2??? [+2109 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "New York Post"
  //   },
  //   "author": "Samantha Ibrahim",
  //   "title": "Whoopi Goldberg misses 'The View' return due to testing positive for COVID - New York Post ",
  //   "description": "The 66-year-old tested positive for COVID-19, and sat out Monday???s remote, post-holiday return to the show. ???Her symptoms have been very, very mild,??? said ???The View??? co-host Joy B???",
  //   "url": "https://nypost.com/2022/01/03/whoopi-goldberg-tests-positive-for-covid-misses-the-view/",
  //   "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/01/whoopi-190.jpg?quality=90&strip=all&w=1024",
  //   "publishedAt": "2022-01-03T20:09:00Z",
  //   "content": "Whoopi Goldberg is calling out sick from work.\r\n???The View??? co-host tested positive for COVID-19 and had to miss the talk show???s return from their holiday hiatus on Monday.\r\nGoldberg, 66, sat out the ??? [+2182 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "associated-press",
  //   "name": "Associated Press"
  //   },
  //   "author": "Lisa Mascaro",
  //   "title": "Schumer: Senate to vote on filibuster change on voting bill - Associated Press",
  //   "description": "WASHINGTON (AP) ??? Days before the anniversary of the Jan. 6 attack on the Capitol , Majority Leader Chuck Schumer announced the Senate will vote on filibuster rules changes to advance stalled voting legislation  that Democrats say is needed to protect democra???",
  //   "url": "https://apnews.com/article/elections-voting-voting-rights-filibusters-870377874673cd1d251300814ff107ce",
  //   "urlToImage": "https://storage.googleapis.com/afs-prod/media/51e580a91af14aa99d972483c64ee42c/3000.jpeg",
  //   "publishedAt": "2022-01-03T20:06:09Z",
  //   "content": "WASHINGTON (AP) Days before the anniversary of the Jan. 6 attack on the Capitol, Majority Leader Chuck Schumer announced the Senate will vote on filibuster rules changes to advance stalled voting leg??? [+2070 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "NPR"
  //   },
  //   "author": "Jaclyn Diaz",
  //   "title": "Classic BlackBerry devices will stop working on January 4 - NPR",
  //   "description": "The company behind the once ubiquitous phones has transitioned to a security software focus, and says that starting on Tuesday, its classic devices will no longer reliably function.",
  //   "url": "https://www.npr.org/2022/01/03/1069938727/blackberry-phones-will-stop-working-january-4",
  //   "urlToImage": "https://media.npr.org/assets/img/2022/01/03/ap21918052030_wide-0eb6e537e2f256af82512d5be8f5f33cb9eb381c.jpg?s=1400",
  //   "publishedAt": "2022-01-03T20:03:43Z",
  //   "content": "Thorsten Heins, then-CEO of Research in Motion, introduces the BlackBerry Z10, Wednesday, Jan. 30, 2013 in New York.\r\nMark Lennihan/AP\r\nThat old BlackBerry buried in the bottom drawer along with loos??? [+1526 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "Phys.Org"
  //   },
  //   "author": "Marcia Dunn",
  //   "title": "NASA's new space telescope 'hunky-dory' after problems fixed - Phys.org",
  //   "description": "NASA's huge, new space telescope is doing well more than a week after liftoff, following a pair of problems overcome by ground controllers, officials said Monday.",
  //   "url": "https://phys.org/news/2022-01-nasa-space-telescope-hunky-dory-problems.html",
  //   "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2022/nasas-new-space-telesc.jpg",
  //   "publishedAt": "2022-01-03T19:53:28Z",
  //   "content": "NASA's huge, new space telescope is doing well more than a week after liftoff, following a pair of problems overcome by ground controllers, officials said Monday.\r\nThe tennis court-size sunshield on ??? [+3012 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "Los Angeles Times"
  //   },
  //   "author": "Christi Carras",
  //   "title": "'Harry Potter' special fixed after Emma Watson photo mistake - Los Angeles Times",
  //   "description": "HBO has reedited and uploaded its 'Harry Potter' reunion special after accidentally misidentifying two of its actors, including star Emma Watson.",
  //   "url": "https://www.latimes.com/entertainment-arts/tv/story/2022-01-03/harry-potter-reunion-emma-watson-emma-roberts-hbo",
  //   "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/252e2ac/2147483647/strip/true/crop/5058x2655+0+272/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F44%2F57%2Fed8ec43c41f2a357c97f7d4f9dca%2Fharry-potter-20th-anniversary-return-to-hogwarts-hp20-111721-nw-0324-r-rgb.jpg",
  //   "publishedAt": "2022-01-03T19:49:11Z",
  //   "content": "Reparo!\r\nHBO Max has fixed and reuploaded its Harry Potter 20th Anniversary: Return to Hogwarts special after eagle-eyed fans and cast members alerted the streaming giant of a couple of editing mista??? [+2018 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "reuters",
  //   "name": "Reuters"
  //   },
  //   "author": null,
  //   "title": "Haitian prime minister survives weekend assassination attempt -PM's office - Reuters",
  //   "description": "Gunmen unsuccessfully attempted to assassinate Haitian Prime Minister Ariel Henry during an event on Saturday commemorating the Caribbean country's independence, his office said in a statement.",
  //   "url": "https://www.reuters.com/world/americas/haitian-pm-survived-assassination-attempt-weekend-pms-office-2022-01-03/",
  //   "urlToImage": "https://www.reuters.com/resizer/uDUnaHAeJkf-RryTynHVy-RaT18=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HVUIQTIN5ZNMLIK3YEHETN2GAA.jpg",
  //   "publishedAt": "2022-01-03T19:27:00Z",
  //   "content": "PORT-AU-PRINCE, Jan 3 (Reuters) - Gunmen unsuccessfully attempted to assassinate Haitian Prime Minister Ariel Henry during an event on Saturday commemorating the Caribbean country's independence, his??? [+1346 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "Chicago Tribune"
  //   },
  //   "author": "Tracy Swartz",
  //   "title": "CPS reopens amid another COVID-19 surge, but Chicago Teachers Union eyes vote on whether to refuse to work in-person if district doesn't meet safety demands - Chicago Tribune",
  //   "description": "The CPS CEO says he stands ???firmly behind&quot; the decision to reopen schools Monday.",
  //   "url": "https://www.chicagotribune.com/news/breaking/ct-chicago-public-schools-covid-return-winter-break-20220103-lirocjsysng6fdbfqanwhps6z4-story.html",
  //   "urlToImage": "https://www.chicagotribune.com/resizer/HKc7Sel9TC9A3Vda8aTI5CUTfFU=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/4MQ3A77ZNRHKJE2TUP5IG3ZSQA.jpg",
  //   "publishedAt": "2022-01-03T19:16:00Z",
  //   "content": "Chicago teachers are expected to vote Tuesday on whether to defy Chicago Public Schools orders to return to classrooms amid a spike in city COVID-19 cases.\r\nThe Chicago Teachers Unions governing body??? [+7079 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "NPR"
  //   },
  //   "author": null,
  //   "title": "Va-a-ax: Sheep and goats form a giant needle to encourage people to get the jab : Coronavirus Updates - NPR",
  //   "description": "A shepherd in Germany arranged her animals into a 330-foot syringe to encourage people to get vaccinated.",
  //   "url": "https://www.npr.org/sections/coronavirus-live-updates/2022/01/03/1069942305/sheep-goats-encourage-vaccination-germany",
  //   "urlToImage": "https://media.npr.org/assets/img/2022/01/03/ap22003478488914_wide-227f1c91ae9b5f1b8899edc6d74fb9f6747f27a5.jpg?s=1400",
  //   "publishedAt": "2022-01-03T18:40:58Z",
  //   "content": "Sheep and goats stand together on Monday in Schneverdingen, Germany, as they form an approximately 330-foot syringe to promote vaccinations against COVID-19.\r\nPhilipp Schulze/dpa via AP\r\nBERLIN Tasty??? [+2258 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "ESPN"
  //   },
  //   "author": "Jenna Laine",
  //   "title": "Tampa Bay Buccaneers coach Bruce Arians has 'no regrets' about adding Antonio Brown, says he cares about WR - ESPN",
  //   "description": "The Buccaneers' Bruce Arians said Monday he has \"no regrets\" adding Antonio Brown and cares for the wide receiver, a day after the coach said Brown is no longer on the team following his in-game exit.",
  //   "url": "https://www.espn.com/nfl/story/_/id/32986335/tampa-bay-buccaneers-coach-bruce-arians-no-regrets-adding-antonio-brown-says-cares-wr",
  //   "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0103%2Fr957541_1296x729_16%2D9.jpg",
  //   "publishedAt": "2022-01-03T18:35:23Z",
  //   "content": "EAST RUTHERFORD, N.J. -- One day after now-former Tampa Bay Buccaneers wide receiver Antonio Brown jogged off the field in the middle of the Bucs' 28-24 win at the New York Jets, resulting in his dis??? [+4454 chars]"
  //   }
  //   ]
  //   }


 