let screen1
let screen2
let screen3
let screen4
let screen5
let nexa
let typewriter
let logo

let table 
let posts
let stories
let liked
let commented
let saved
let followers
let followed
let ads
let interests

let startScreenBool = true
let postScreenBool = false
let storiesScreenBool = false
let likedScreenBool = false
let commentedScreenBool = false
let savedScreenBool = false
let followersScreenBool = false
let followedScreenBool = false
let adsScreenBool = false
let interestScreenBool = false

let logos = []
let popups = []


let string = `Instagram, owned by Meta Platforms, operates as more than a social media network. It is a large-scale data collection system that continuously processes information about users' behaviors, interactions, interests, devices, and digital relationships. While the platform is primarily recognized for photo sharing, messaging, and short-form video consumption, its underlying infrastructure supports extensive behavioral profiling, algorithmic prediction, and targeted advertising. Every interaction with Instagram generates potentially valuable data. The platform collects information about the accounts users follow, the content they publish, the posts they like, the comments they write, and the advertisements they interact with. However, the information collected extends beyond these visible activities. Meta's privacy policy identifies additional categories of information, including the types of content people view, the frequency and duration of their activity, their interactions with platform features, and their purchasing behavior. These individual observations can be analyzed collectively to identify patterns in human behavior. A user's repeated interactions with particular subjects can provide evidence of their interests, preferences, consumption habits, and social relationships. Through statistical analysis and machine learning, these patterns can inform automated predictions about which content or advertisements a person is most likely to engage with. The collection process is not restricted to information voluntarily published on a profile. Meta also processes technical information associated with the devices used to access its services. This can include operating system characteristics, browser information, device identifiers, internet protocol addresses, network connections, and location-related signals. Such information supports functions including security, account identification, advertising measurement, and personalized content delivery. One of the most significant dimensions of this system is its ability to collect information about activity occurring outside Instagram itself. Through technologies such as Meta Pixel, software development kits, and the Conversions API, businesses can transmit information about interactions with their websites, mobile applications, and other services to Meta. Depending on the integration, these interactions may include visiting a product page, adding an item to a shopping cart, completing a purchase, or interacting with a company's digital services. Consequently, a user does not necessarily need to be actively scrolling through Instagram for information about their online behavior to reach Meta. Participating businesses can transmit activity information independently of a direct interaction with Instagram. This allows Meta to associate information from multiple digital environments with its advertising and measurement systems. A January 2024 investigation conducted by Consumer Reports provides evidence of the extraordinary scale of this practice. Researchers examined data archives voluntarily provided by 709 Facebook users and identified 186,892 companies that had transmitted information about participants to Facebook. On average, each participant had information supplied by approximately 2,230 different companies. Some participants had records involving more than 7,000 companies. Although this investigation specifically examined Facebook data rather than establishing identical figures for Instagram users, both platforms operate within Meta's broader advertising infrastructure. The findings demonstrate the scale of external information flows that can contribute to Meta's understanding of individuals beyond their activity on its own platforms. Meta also processes information about users' social connections. Followers, followed accounts, interactions with other users, and the networks formed through these relationships can contribute to the platform's understanding of social behavior. Such data is relevant to systems that recommend accounts, rank content, and identify potentially relevant audiences. The historical depth of the information retained is another important concern. Meta does not establish one universal retention period for every category of Instagram data. Instead, its privacy policy states that retention depends on the purpose for which information is needed, the features involved, legal obligations, safety considerations, and other legitimate interests. Information necessary to maintain an active account may therefore remain stored for as long as it is required to provide the associated service. This means that some records can potentially extend across multiple years of an individual's activity. Depending on the information involved and the applicable retention rules, records associated with posts, communications, account relationships, and other activities may preserve aspects of a user's digital history long after the original interaction occurred. However, an Instagram data download should not be interpreted as a complete record of every action a user has ever performed. Different categories of information have different retention periods, and information that is no longer available in an export may have been deleted, may not be included in that export, or may be stored or processed in another form. A September 2024 investigation by the United States Federal Trade Commission examined the data practices of major social media and video-streaming companies, including Meta. The report concluded that the companies examined engaged in extensive data collection and identified significant weaknesses in data minimization, retention practices, and user controls. It found that some companies could retain substantial quantities of information indefinitely and that some did not fully delete user information following deletion requests. These findings raise questions about the persistence of digital information and the degree to which individuals can meaningfully control the long-term storage of their personal data. Information sharing further complicates this issue. Meta's privacy policy describes circumstances in which information is shared with service providers, business partners, advertisers, integrated applications, and other parties. This sharing does not necessarily mean that advertisers receive unrestricted access to individual users' private messages or complete personal histories. Instead, advertising relationships frequently involve audience targeting, measurement reports, aggregated insights, and other controlled data-processing arrangements. Nevertheless, these arrangements allow companies to use Meta's information infrastructure to reach specific audiences and evaluate consumer behavior. Advertisers may upload customer information, while websites and applications may transmit activity events back to Meta. Information can therefore move in multiple directions between businesses and the platform. Third-party applications introduce another dimension of data retention. When an individual authorizes an external application or website to access their information, certain information may become available to that service. Even after the application's authorization expires or is withdrawn, the third party may retain information previously received, subject to applicable rules and legal requirements.
The combined result is a system in which the boundaries of personal information are not limited to one application, one device, or one moment in time. From a computational perspective, Instagram's recommendation and advertising systems rely on the continuous transformation of behavioral observations into information that can be used for prediction and personalization. These systems can analyze patterns of engagement to estimate which subjects, products, creators, and advertisements may be relevant to particular users. Importantly, the predictions generated by these systems are not necessarily accurate descriptions of a person's identity or beliefs. They are statistical inferences developed from observable data and patterns. Nevertheless, those inferences can influence the information, advertisements, and recommendations users subsequently encounter. This creates a feedback mechanism: users interact with recommended content, those interactions generate additional data, and the resulting information can influence subsequent recommendations. Over time, repeated interactions can reinforce patterns of content exposure and generate increasingly detailed behavioral signals. The implications extend beyond personalized advertising. Large-scale collection and retention of personal data introduce questions concerning consent, transparency, informational autonomy, cybersecurity, and the concentration of information within a small number of technology companies. Although Meta offers tools that allow users to access, download, manage, and delete certain categories of their information, these tools do not necessarily provide a complete view of all internal calculations, inferred characteristics, or information transmitted through every external business relationship. An Instagram data archive therefore represents only one visible component of a substantially larger information-processing environment. Files documenting liked posts, advertisements, account connections, and other activities reveal the detailed records associated with ordinary platform use. Yet these records exist within systems that also receive information from external organizations, process technical identifiers, and use automated models to interpret behavioral patterns. The fundamental privacy concern is not simply that Instagram remembers what a user likes. It is that the accumulation of seemingly insignificant interactions can contribute to a detailed and persistent representation of that individual's digital behavior. A photograph viewed for a few seconds, an advertisement selected out of curiosity, a product examined on an unrelated website, or an account followed years earlier may each become another observation within a much larger data environment. The amount of information retained, the extent of third-party participation, and the complexity of automated inference challenge conventional assumptions about what it means to share personal information online. Ultimately, Instagram illustrates how contemporary social media platforms transform everyday interactions into measurable behavioral data. The visible application provides social connection and entertainment. Behind that interface operates an extensive technical infrastructure dedicated to collecting, processing, retaining, and applying information about the people who use it. The central question is no longer only what individuals intentionally reveal about themselves online. It is also what can be inferred about them through the systematic observation of their digital activity, how long that information persists, and which organizations are able to benefit from it.
`
let currentCharacter = 0
async function setup(){
  canvas = createCanvas(windowWidth,windowHeight)
  screen1 = await loadImage('images/screen1.png')
  screen2 = await loadImage('images/screen2.png')
  screen3 = await loadImage('images/screen3.png')
  screen4 = await loadImage('images/screen4.png')
  screen5 = await loadImage('images/screen5.png')
  logo = await loadImage('images/logo.png')
  imageMode(CENTER)
  nexa = await loadFont('media/nexa.ttf')
  typewriter = await loadFont('media/typewriter.ttf')

  table = await loadTable('igdata.csv', ',', 'header')
  posts = table.getNum(0, 'posts')
  stories = table.getNum(0, 'stories')
  liked = table.getNum(0, 'liked')
  commented = table.getNum(0, 'commented')
  saved = table.getNum(0, 'saved')
  followers = table.getNum(0, 'followers')
  followed = table.getNum(0, 'followed')
  ads = table.getNum(0, 'ads')
  interests = table.getNum(0, 'interests')


logos.push(await loadImage('company logos/casper.png'))
logos.push(await loadImage('company logos/fivebelow.png'))
logos.push(await loadImage('company logos/tmobile.png'))
logos.push(await loadImage('company logos/gopuff.png'))
logos.push(await loadImage('company logos/golfnow.png'))
logos.push(await loadImage('company logos/farmersdog.png'))
logos.push(await loadImage('company logos/iheartradio.png'))
logos.push(await loadImage('company logos/cabelas.png'))
logos.push(await loadImage('company logos/katespade.png'))
logos.push(await loadImage('company logos/stevemadden.png'))
logos.push(await loadImage('company logos/redbull.png'))
logos.push(await loadImage('company logos/glossier.png'))
logos.push(await loadImage('company logos/grammarly.png'))
logos.push(await loadImage('company logos/petal&pup.png'))
logos.push(await loadImage('company logos/rei.png'))
logos.push(await loadImage('company logos/goat.png'))
logos.push(await loadImage('company logos/glowrecipe.png'))
logos.push(await loadImage('company logos/landsend.png'))
logos.push(await loadImage('company logos/petco.jpg'))
logos.push(await loadImage('company logos/ig.jpg'))
logos.push(await loadImage('company logos/rothys.jpg'))
logos.push(await loadImage('company logos/spectrum.jpg'))
logos.push(await loadImage('company logos/anthropology.jpg'))
logos.push(await loadImage('company logos/tillys.jpg'))
logos.push(await loadImage('company logos/soldejaneiro.jpg'))
logos.push(await loadImage('company logos/dollarshaveclub.jpg'))
logos.push(await loadImage('company logos/bubly.jpg'))
logos.push(await loadImage('company logos/openai.jpg'))
logos.push(await loadImage('company logos/wegmans.jpg'))
logos.push(await loadImage('company logos/scheels.jpg'))
logos.push(await loadImage('company logos/indeed.jpg'))
logos.push(await loadImage('company logos/beginnings.jpg'))
logos.push(await loadImage('company logos/westmanatelier.jpg'))
logos.push(await loadImage('company logos/hotels.com.jpg'))
logos.push(await loadImage('company logos/ping.jpg'))
logos.push(await loadImage('company logos/tiktok.jpg'))
logos.push(await loadImage('company logos/ubereats.jpg'))
logos.push(await loadImage('company logos/planetfitness.png'))
logos.push(await loadImage('company logos/hyatt.png'))
logos.push(await loadImage('company logos/reformation.png'))
logos.push(await loadImage('company logos/instacart.png'))
logos.push(await loadImage('company logos/jbl.png'))
logos.push(await loadImage('company logos/jamesperse.png'))
logos.push(await loadImage('company logos/nyt.png'))
logos.push(await loadImage('company logos/victoriassecret.jpg'))
logos.push(await loadImage('company logos/princesspolly.png'))
logos.push(await loadImage('company logos/jcrew.jpg'))
logos.push(await loadImage('company logos/macys.jpg'))
logos.push(await loadImage('company logos/pacsun.jpg'))
logos.push(await loadImage('company logos/poshmark.jpg'))
logos.push(await loadImage('company logos/quizlet.png'))
logos.push(await loadImage('company logos/rhoback.jpg'))
logos.push(await loadImage('company logos/picsart.png'))
logos.push(await loadImage('company logos/vineyard vines.png'))
logos.push(await loadImage('company logos/zillow.jpg'))
logos.push(await loadImage('company logos/stockx.png'))
logos.push(await loadImage('company logos/bathbodyworks.jpg'))
logos.push(await loadImage('company logos/tiffany.jpg'))
logos.push(await loadImage('company logos/bombas.jpg'))
logos.push(await loadImage('company logos/skims.jpg'))
logos.push(await loadImage('company logos/ollie.jpg'))
logos.push(await loadImage('company logos/hauslabs.jpg'))
logos.push(await loadImage('company logos/starface.jpg'))
logos.push(await loadImage('company logos/opentable.jpg'))
logos.push(await loadImage('company logos/colehaan.jpg'))
logos.push(await loadImage('company logos/guess.jpg'))
logos.push(await loadImage('company logos/ritzcarlton.png'))
logos.push(await loadImage('company logos/hp.png'))
logos.push(await loadImage('company logos/bloomberg.png'))
logos.push(await loadImage('company logos/stop&shop.png'))
logos.push(await loadImage('company logos/nordictrack.png'))
logos.push(await loadImage('company logos/southerntide.png'))
logos.push(await loadImage('company logos/mattel.png'))
logos.push(await loadImage('company logos/kendrascott.png'))
logos.push(await loadImage('company logos/H&M.png'))
logos.push(await loadImage('company logos/lulu&georgia.png'))
logos.push(await loadImage('company logos/bassproshops.png'))
logos.push(await loadImage('company logos/stubhub.png'))
logos.push(await loadImage('company logos/paulaschoice.png'))
logos.push(await loadImage('company logos/pela.png'))
logos.push(await loadImage('company logos/outside.png'))
logos.push(await loadImage('company logos/cookunity.png'))
logos.push(await loadImage('company logos/squarespace.png'))
logos.push(await loadImage('company logos/walgreens.png'))
logos.push(await loadImage('company logos/hbo.png'))
logos.push(await loadImage('company logos/barstool.png'))
logos.push(await loadImage('company logos/visa.png'))
logos.push(await loadImage('company logos/hydroflask.png'))
logos.push(await loadImage('company logos/weather.png'))
logos.push(await loadImage('company logos/shakeshack.png'))
logos.push(await loadImage('company logos/kennyflowers.png'))
logos.push(await loadImage('company logos/olaplex.png'))
logos.push(await loadImage('company logos/heydude.png'))
logos.push(await loadImage('company logos/corepower.png'))
logos.push(await loadImage('company logos/titleist.png'))
logos.push(await loadImage('company logos/panera.png'))
logos.push(await loadImage('company logos/elf.png'))
logos.push(await loadImage('company logos/peacock.png'))
logos.push(await loadImage('company logos/draftkings.png'))
logos.push(await loadImage('company logos/petsmart.png'))
logos.push(await loadImage('company logos/sony.png'))
logos.push(await loadImage('company logos/boll&branch.png'))
logos.push(await loadImage('company logos/lids.png'))
logos.push(await loadImage('company logos/barclays.png'))
logos.push(await loadImage('company logos/puma.png'))
logos.push(await loadImage('company logos/shutterfly.png'))
logos.push(await loadImage('company logos/intuit.png'))
logos.push(await loadImage('company logos/subway.png'))
logos.push(await loadImage('company logos/aritzia.png'))
logos.push(await loadImage('company logos/marcjacobs.png'))
logos.push(await loadImage('company logos/athleta.png'))
logos.push(await loadImage('company logos/sling.png'))
logos.push(await loadImage('company logos/backcountry.png'))
logos.push(await loadImage('company logos/bananarepublic.jpg'))
logos.push(await loadImage('company logos/pandaexpress.png'))
logos.push(await loadImage('company logos/truereligion.jpg'))
logos.push(await loadImage('company logos/zadigvoltaire.png'))
logos.push(await loadImage('company logos/paypal.jpg'))
logos.push(await loadImage('company logos/gap.png'))
logos.push(await loadImage('company logos/oribe.jpg'))
logos.push(await loadImage('company logos/ulta.png'))
logos.push(await loadImage('company logos/ralphlauren.jpg'))
logos.push(await loadImage('company logos/lenovo.png'))
logos.push(await loadImage('company logos/edikted.png'))
logos.push(await loadImage('company logos/duolingo.png'))
logos.push(await loadImage('company logos/uber.png'))
logos.push(await loadImage('company logos/etsy.png'))
logos.push(await loadImage('company logos/bose.png'))
logos.push(await loadImage('company logos/vrbo.png'))
logos.push(await loadImage('company logos/adidas.png'))
logos.push(await loadImage('company logos/canva.png'))
logos.push(await loadImage('company logos/revolve.png'))
logos.push(await loadImage('company logos/petermillar.png'))
logos.push(await loadImage('company logos/williamsonoma.png'))
logos.push(await loadImage('company logos/whoop.png'))
logos.push(await loadImage('company logos/ticketmaster.png'))
logos.push(await loadImage('company logos/expedia.png'))
logos.push(await loadImage('company logos/alo.svg'))
logos.push(await loadImage('company logos/sharkninja.jpg'))
logos.push(await loadImage('company logos/bloomingdales.png'))
logos.push(await loadImage('company logos/gorjana.jpg'))
logos.push(await loadImage('company logos/callaway.svg'))
logos.push(await loadImage('company logos/chewy.svg'))
logos.push(await loadImage('company logos/dicks.webp'))
logos.push(await loadImage('company logos/disneyplus.svg'))
logos.push(await loadImage('company logos/doordash.png'))
logos.push(await loadImage('company logos/hellomolly.png'))
logos.push(await loadImage('company logos/vuori.jpg'))
logos.push(await loadImage('company logos/netflix.png'))
logos.push(await loadImage('company logos/verizon.jpg'))
logos.push(await loadImage('company logos/ae.png'))
logos.push(await loadImage('company logos/hulu.jpg'))
logos.push(await loadImage('company logos/fashionnova.png'))
logos.push(await loadImage('company logos/barkbox.jpg'))
logos.push(await loadImage('company logos/linkedin.png'))
logos.push(await loadImage('company logos/strava.jpg'))
logos.push(await loadImage('company logos/images-5.png'))
logos.push(await loadImage('company logos/blackhawks.jpg'))
logos.push(await loadImage('company logos/oldnavy.png'))
logos.push(await loadImage('company logos/charlottetilbury.jpg'))
logos.push(await loadImage('company logos/airbnb.png'))

}


function draw(){
    background(66, 135, 245)

  let currentString = string.substring(0, currentCharacter);

  push()
  fill(255)
  noStroke()
  textSize(12)
  textFont(typewriter)
  textAlign(LEFT, TOP)
  text(currentString, 10, 10, windowWidth - 20, windowHeight - 20)
  pop()
  currentCharacter += 0.5

   if (adsScreenBool == true) {
  showPopups()
}
  if(startScreenBool == true){
    startScreen()
  }
  if(postScreenBool == true){
    postScreen()
  }
  if(storiesScreenBool == true){
    storiesScreen()
  }
  if(likedScreenBool == true){
    likedScreen()
  }
  if(commentedScreenBool == true){
    commentedScreen()
  }
  if(savedScreenBool == true){
    savedScreen()
  }
  if(followersScreenBool == true){
    followersScreen()
  }
  if(followedScreenBool == true){
    followedScreen()
  }
  if(adsScreenBool == true){
    adsScreen()
  }
  if(interestScreenBool == true){
    interestScreen()
  }

}
//1 next button
function mousePressed(){
  if(startScreenBool == true){
  if(mouseX > windowWidth/2 &&
    mouseX < windowWidth/2 + 150 &&
    mouseY > windowHeight/2 - 275 &&
    mouseY < windowHeight/2 + 275){
    startScreenBool = false
    postScreenBool = true
    return
  }
}
  //1 back button
if(postScreenBool == true){
  if(mouseX > windowWidth/2 - 150 &&
    mouseX < windowWidth/2 &&
    mouseY > windowHeight/2 - 275 &&
    mouseY < windowHeight/2 + 275){
    postScreenBool = false
    startScreenBool = true
    return
  }
}
  // 2 next button
if(postScreenBool == true){
  if(mouseX > windowWidth/2 &&
    mouseX < windowWidth/2 + 150 &&
    mouseY > windowHeight/2 - 275 &&
    mouseY < windowHeight/2 + 275){
    postScreenBool = false
    storiesScreenBool = true
    return
  }
}
  //2 back button
if(storiesScreenBool == true){
  if(mouseX > windowWidth/2 - 150 &&
    mouseX < windowWidth/2 &&
    mouseY > windowHeight/2 - 275 &&
    mouseY < windowHeight/2 + 275){
    storiesScreenBool = false
    postScreenBool = true
    return
    }
  }

 // 3 next button
if(storiesScreenBool == true){
  if(mouseX > windowWidth/2 &&
    mouseX < windowWidth/2 + 150 &&
    mouseY > windowHeight/2 - 275 &&
    mouseY < windowHeight/2 + 275){
    storiesScreenBool = false
    likedScreenBool = true
    return
  }
}
  //3 back button
if(likedScreenBool == true){
  if(mouseX > windowWidth/2 - 150 &&
    mouseX < windowWidth/2 &&
    mouseY > windowHeight/2 - 275 &&
    mouseY < windowHeight/2 + 275){
    likedScreenBool = false
    storiesScreenBool = true
    return
    }
  }

 // 4 next button
if(likedScreenBool == true){
  if(mouseX > windowWidth/2 &&
    mouseX < windowWidth/2 + 150 &&
    mouseY > windowHeight/2 - 275 &&
    mouseY < windowHeight/2 + 275){
    likedScreenBool = false
    commentedScreenBool = true
    return
  }
}
  //4 back button
if(commentedScreenBool == true){
  if(mouseX > windowWidth/2 - 150 &&
    mouseX < windowWidth/2 &&
    mouseY > windowHeight/2 - 275 &&
    mouseY < windowHeight/2 + 275){
    commentedScreenBool = false
    likedScreenBool = true
    return
    }
  }

 // 5 next button
if(commentedScreenBool == true){
  if(mouseX > windowWidth/2 &&
    mouseX < windowWidth/2 + 150 &&
    mouseY > windowHeight/2 - 275 &&
    mouseY < windowHeight/2 + 275){
    commentedScreenBool = false
    savedScreenBool = true
    return
  }
}
  //5 back button
if(savedScreenBool == true){
  if(mouseX > windowWidth/2 - 150 &&
    mouseX < windowWidth/2 &&
    mouseY > windowHeight/2 - 275 &&
    mouseY < windowHeight/2 + 275){
    savedScreenBool = false
    commentedScreenBool = true
    return
    }
  }
   // 6 next button
if(savedScreenBool == true){
  if(mouseX > windowWidth/2 &&
    mouseX < windowWidth/2 + 150 &&
    mouseY > windowHeight/2 - 275 &&
    mouseY < windowHeight/2 + 275){
    savedScreenBool = false
    followersScreenBool = true
    return
  }
}
  //6 back button
if(followersScreenBool == true){
  if(mouseX > windowWidth/2 - 150 &&
    mouseX < windowWidth/2 &&
    mouseY > windowHeight/2 - 275 &&
    mouseY < windowHeight/2 + 275){
    followersScreenBool = false
    savedScreenBool = true
    return
    }
  }
   // 7 next button
if(followersScreenBool == true){
  if(mouseX > windowWidth/2 &&
    mouseX < windowWidth/2 + 150 &&
    mouseY > windowHeight/2 - 275 &&
    mouseY < windowHeight/2 + 275){
    followersScreenBool = false
    followedScreenBool = true
    return
  }
}
  //7 back button
if(followedScreenBool == true){
  if(mouseX > windowWidth/2 - 150 &&
    mouseX < windowWidth/2 &&
    mouseY > windowHeight/2 - 275 &&
    mouseY < windowHeight/2 + 275){
    followedScreenBool = false
    followersScreenBool = true
    return
    }
  }
   // 8 next button
if(followedScreenBool == true){
  if(mouseX > windowWidth/2 &&
    mouseX < windowWidth/2 + 150 &&
    mouseY > windowHeight/2 - 275 &&
    mouseY < windowHeight/2 + 275){
    followedScreenBool = false
    interestScreenBool = true
    return
  }
}
  //8 back button
if(interestScreenBool == true){
  if(mouseX > windowWidth/2 - 150 &&
    mouseX < windowWidth/2 &&
    mouseY > windowHeight/2 - 275 &&
    mouseY < windowHeight/2 + 275){
    interestScreenBool = false
    followedScreenBool = true
    return
    }
  }
   // 9 next button
if(interestScreenBool == true){
  if(mouseX > windowWidth/2 &&
    mouseX < windowWidth/2 + 150 &&
    mouseY > windowHeight/2 - 275 &&
    mouseY < windowHeight/2 + 275){
    interestScreenBool = false
    adsScreenBool = true
    return
  }
  }
  if (adsScreenBool == true) {
  addPopup()
  return
}
}

function addPopup() {
  let randomlogo = random(logos)

  popups.push({
    img: randomlogo,
    x: random(100, width - 100),
    y: random(100, height - 100)
  })
}

function startScreen(){
  image(screen1, windowWidth/2, windowHeight/2, 300, 550)
    image(logo, windowWidth/2,windowHeight/2, 100, 100)
    textFont(nexa)
    fill(255)
    textSize(20)
    textAlign(CENTER)
    text(`Taylor's Instagram`, windowWidth/2, windowHeight/3)
    text('Wrapped is here!', windowWidth/2, windowHeight/2.7)
    textSize(15)
    text('Tap through each screen', windowWidth/2, windowHeight/1.5)

  }

  function postScreen(){
    image(screen2, windowWidth/2, windowHeight/2, 300, 550)
  textFont(nexa)
  fill(255)
  textAlign(CENTER)
  textSize(20)
  text('This year you posted', windowWidth/2, windowHeight/3)
  textSize(50)
  text(posts, windowWidth/2, windowHeight/2)
  textSize(20)
  text('photos!', windowWidth/2, windowHeight/1.7)
}
function storiesScreen(){
    image(screen3, windowWidth/2, windowHeight/2, 300, 550)
  textFont(nexa)
  fill(255)
  textAlign(CENTER)
  textSize(20)
  text('This year you posted', windowWidth/2, windowHeight/3)
  textSize(50)
  text(stories, windowWidth/2, windowHeight/2)
  textSize(20)
  text('stories!', windowWidth/2, windowHeight/1.7)
}

  function likedScreen(){
   image(screen4, windowWidth/2, windowHeight/2, 300, 550)
  textFont(nexa)
  fill(255)
  textAlign(CENTER)
  textSize(20)
  text('This year you liked', windowWidth/2, windowHeight/3)
  textSize(50)
  text(liked.toLocaleString(), windowWidth/2, windowHeight/2)
  textSize(20)
  text('posts!', windowWidth/2, windowHeight/1.7)
}

function commentedScreen(){
   image(screen5, windowWidth/2, windowHeight/2, 300, 550)
  textFont(nexa)
  fill(255)
  textAlign(CENTER)
  textSize(20)
  text('This year', windowWidth/2, windowHeight/3)
  textSize(20)
  text('you commented on', windowWidth/2, windowHeight/3 + 30)
  textSize(50)
  text(commented.toLocaleString(), windowWidth/2, windowHeight/2)
  textSize(20)
  text('posts!', windowWidth/2, windowHeight/1.7)
} 
function savedScreen(){
   image(screen1, windowWidth/2, windowHeight/2, 300, 550)
  textFont(nexa)
  fill(255)
  textAlign(CENTER)
  textSize(20)
  text('This year you saved', windowWidth/2, windowHeight/3)
  textSize(50)
  text(saved.toLocaleString(), windowWidth/2, windowHeight/2)
  textSize(20)
  text('posts!', windowWidth/2, windowHeight/1.7)
}
function followersScreen(){
   image(screen2, windowWidth/2, windowHeight/2, 300, 550)
  textFont(nexa)
  fill(255)
  textAlign(CENTER)
  textSize(20)
  text('This year you gained', windowWidth/2, windowHeight/3)
  textSize(50)
  text(followers.toLocaleString(), windowWidth/2, windowHeight/2)
  textSize(20)
  text('followers!', windowWidth/2, windowHeight/1.7)
}
function followedScreen(){
   image(screen3, windowWidth/2, windowHeight/2, 300, 550)
  textFont(nexa)
  fill(255)
  textAlign(CENTER)
  textSize(20)
  text('This year you followed', windowWidth/2, windowHeight/3)
  textSize(50)
  text(followed.toLocaleString(), windowWidth/2, windowHeight/2)
  textSize(20)
  text('accounts!', windowWidth/2, windowHeight/1.7)
}
function adsScreen(){
   image(screen4, windowWidth/2, windowHeight/2, 300, 550)
  textFont(nexa)
  fill(255)
  textAlign(CENTER)
  textSize(20)
  text('This year you recieved', windowWidth/2, windowHeight/3)
  textSize(50)
  text(ads.toLocaleString(), windowWidth/2, windowHeight/2)
  textSize(20)
  text('ads!', windowWidth/2, windowHeight/1.7)
}
function interestScreen(){
   image(screen5, windowWidth/2, windowHeight/2, 300, 550)
  textFont(nexa)
  fill(255)
  textAlign(CENTER)
  textSize(20)
  text('Instagram predicts', windowWidth/2, windowHeight/3)
  textSize(20)
  text('you have', windowWidth/2, windowHeight/3 + 30)
  textSize(50)
  text(interests.toLocaleString(), windowWidth/2, windowHeight/2)
  textSize(20)
  text('interest categories!', windowWidth/2, windowHeight/1.7)
}

function showPopups() {
  push()

  imageMode(CENTER)
  rectMode(CENTER)

  for (let popup of popups) {

    fill(255)
    noStroke()
    rect(popup.x, popup.y, 130, 130, 15)
    image(popup.img, popup.x, popup.y, 110, 110)
  }

  pop()
}




