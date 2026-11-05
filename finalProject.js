let screen1
let screen2
let screen3
let screen4
let screen5
let nexa
let typewriter
let logo

let startScreenBool = true

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

}


  function draw(){

if(startScreenBool == true){
  startScreen()
  }
}

function startScreen(){
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

image(screen1, windowWidth/2, windowHeight/2, 300, 550)
image(logo, windowWidth/2,windowHeight/2, 100, 100)
textFont(nexa)
fill(255)
textSize(20)
text('Taylors Instagram', windowWidth/2.225 - 15, windowHeight/3)
text('Wrapped is here!', windowWidth/2.225 - 5, windowHeight/2.7)
textSize(15)
text('Tap through each screen', windowWidth/2.225 - 15, windowHeight/1.5)

}





