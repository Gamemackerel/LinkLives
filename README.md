## Inspiration
This is my first dubhacks, and I must say I was disappointed. I came to hack, but quickly discovered that the event is closer to a glorified career fair rather than a competition between hackers to make a positive difference. I couldn’t have been the only one to see the irony when BlackRock and Bloomberg offer prizes to the teams who can successfully use their respective finance APIs, while the dubhacks prizes go to the teams whose creations best embody ethical principles. Why are massive profit driven corporations allowed to make themselves at home in a hackathon? The ideals of equality and utilitarianism directly conflict with the goals of mega-corporations who overemphasize profit outcomes at the expense of blinding themselves to moral issues. Hackers should defend the world from the domination of the rich, not ally with them! The shadow of big companies did not stop us from having a good time though; our team decided to compete with a mega-corporation. Bit.ly is a URL shortening platform driven by mass marketing, and focused on their brand. We have delivered a similar platform, but built instead on the foundations of empathy and philanthropy. Because of this difference, we are confident that many consumers will prefer our platform, even though Bit.ly no doubt has some technical advantages.
## What it does
LinkLiv.es is a link management solution that allows long URLs to be represented in a short form. This facilitates easy URL sharing among friends, and is particularly useful for social network mediums like Twitter, where a character limit can prevent some types of links being shared in their full form. LinkLiv.es, like Bit.ly, hosts video advertisements in a short interim before redirecting to the target URL. However, unlike Bit.ly, **100% of the advertising revenue generated from LinkLiv.es is donated to the Against Malaria Foundation**. This foundation funds long lasting insecticide-treated net distributions in developing countries. It has been evaluated by GiveWell as being the #1 most effective charity, in terms of lives saved per dollar spent. (more information here: LinkLiv.es/?k=9hyo307) 

The motto of LinkLiv.es is: _Shorten Links, Save Lives_.
## How we built it
LinkLiv.es is built upon an existing link shortening algorithm and AWS architecture. Our backend is extremely scalable through Amazon CloudFront, S3 Bucket, and serverless Lambda functions. We use Lambda functions to generate short LinkLiv.es ‘key’ redirect files. The short key files are stored on an Amazon S3 bucket with redirect metadata that correspond to the actual intended website. We run a small example EC2 instance webserver to take LinkLiv.es requests, generate a dynamic redirect page that displays an advertisement for 15 seconds before using the key to retrieve the redirect file from our CloudFront distribution and allow the user to continue to the final target website. 

## Challenges we ran into
Leveraging AWS architecture proved to cause a major headache for a team of novice programmers with minimal experience in scalable cloud computing. Although it was fun to be challenged learning a new technology, we thought that it might have been a better decision to build our prototype on a simpler, more-familiar-to-us, traditional application server/database server stack. However, as a result of working our way through this new-to-us technology in the spirit of hackathoning, we learned lots of new cool tricks that we hope to use in future hackathons.

Additionally, implementing the advertisements themselves is not as quick of a process as we expected. Bureaucracy takes time that hackathons cannot provide, so we were unfortunately could not start collecting donations before the end of the hackathon. As a temporary placeholder for monetized advertisements, we are using the space for a video advertisement for the Against Malaria Foundation itself.
## Accomplishments that we are proud of
I am incredibly proud of both myself and my teammates for producing a complete web based service within 24 hours, let alone one that is ready to provide real help for struggling people in third world countries! 
Furthermore, I am proud of the elegance of the project we’ve made. Although the scale of this project was small, I believe the ethical impact could be larger than any other project, coding or otherwise, that I have yet made. A simple web service, but with a significant impact.
Also, I must say that our product name was excellently selected. LinkLiv.es is short enough to be an effective URL shortening domain, while still capturing the main ideas of the project in the two words.
## What we learned
-The parts of a project you least suspect trouble from could very well be the most difficult parts to complete.

-Passion can supplement technical skill to a certain extent, but mentors do even better.
## What's next
-Implement a counter of “lives saved” as a function of the total donation dollar amount, and the expert estimations of how effective mosquito nets are at promoting longevity in areas affected by malaria.

-get the word out about LinkLiv.es to users of websites like Twitter, who rely heavily on link shortening technology.

-On link generation page: better explain the service, and improve user interface.
