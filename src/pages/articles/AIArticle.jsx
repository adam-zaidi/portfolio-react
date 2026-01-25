import ArticleLayout from '../../components/ArticleLayout'
import theatreImage from '../../assets/media/theatre-d-opera-spatial.jpeg'

function AIArticle() {
  return (
    <ArticleLayout
      title="AI: An Existential Threat"
      date="2022.12.5"
      footerLink="https://uhsdevilsadvocate.weebly.com/ai-an-existential-threat.html"
      footerText="Taken from the Devil's Advocate December 2022 Issue"
      note="Editors Note: this article was written two days before the release of ChatGPT."
    >
      <p className="body-paragraph">
        With technology being integrated into every facet of our daily lives, we live in a rapidly modernizing society. Smart fridges send us alerts when we leave the door open, self-driving cars let us take naps on the road, and there's a never ending stream of content to consume. Behind all of these innovations are algorithms, or instructions that control every decision. In the past these algorithms were hard set: a series of decision trees that had limited input and output flexibility. Now, artificial intelligence (AI) is the new hot thing. It has become a buzzword thrown around in seemingly every field, and admittedly even I have fallen prey to the craze. However, given huge economic incentives driving innovation in the field, AI has genuinely proliferated and grown, but there have been a few new developments in the past few years that particularly worry me.
      </p>
      <p className="body-paragraph">
        While the underlying computer science and linear algebra would fill the entire DA issue, anyone can comprehend the basic way in which it works. Artificial intelligence is an algorithm or system that can react to stimuli in its environment and change itself to better achieve its goals. In other words, like us humans, AI has the ability to learn, grow, and adapt to its circumstances. This is all driven by massive amounts of data, which the AI can learn from, like giving books to a child. Companies like Amazon and IBM, scraping the internet for every article and photo, handle and process obscene amounts of data. Such an unfathomable amount of data has allowed AI systems to grow exponentially in size and computing capability.
      </p>
      <p className="body-paragraph">
        In the past few years, a company called OpenAI has led in large-scale AI development and they aim to create friendly AI—one that benefits humankind. In doing so, they have created a language model called GPT-3, which has the ability to take some prompt, such as "write a description of the solar system for a second grader" and output creepily human-like text. It can write in almost any style: poetry to prose to fanfiction (the internet's favorite). One can easily get lost spending hours coming up with prompts and being amazed—and horrified—by the results. These abilities are more than a novelty. GPT-3 is far more than a simple text completion algorithm. In 2020, The Guardian published a 1,000 word essay written entirely by GPT-3: "A robot wrote this entire article. Are you scared yet, human?" While many regard programmers as the last jobs that could possibly be outsourced to the machines, as they are the reason said machines exist, GPT-3 and other language models can generate code from simple English requests, such as "write the code for an interface with an input and a submission button."
      </p>
      <p className="body-paragraph">
        The same company, OpenAI, has also developed a text-to-image generator, which, in my opinion, is even more terrifying: DALL-E (a portmanteau of Pixar's WALL-E and Spanish surrealist artist Salvador Dalí). Give it a phrase like "Ms. Piggy eating a ham sandwich while driving a monster truck" and you'll be stunned by the realism generated from a computer. Or put in the prompt "a cat drinking water in the style of Pablo Picasso" and you'd easily mistake it for an original. While DALL-E is the most prominent image generation AI right now, many others have been developed, specializing in areas such as videos and 3D models. Plus, they are all free to use for the public! Again, while these models are a fun tool to play around with, they have much deeper societal ramifications. Creativity and artwork have long been seen as the sole domain of humans, completely unique to us. With DALL-E and others like Stable Diffusion, we are seeing how unexceptional our talents really are. I do not disparage artists and the amount of time and energy they devote to their craft, but these algorithms have the potential to replace a large population of artists, solely because of the convenience and economic benefits.
      </p>
      <p className="body-paragraph">
        Earlier this year, sparks flew across the internet when Jason M. Allen, a game designer from Colorado, submitted a piece of AI generated artwork to the "digital arts/digitally-manipulated photography" category at the Colorado State Fair Fine Arts Competition. He ended up getting first place, receiving $300 with his win. The piece, titled "Théâtre D'opéra Spatial", or Space Opera Theatre, was created with an open and free AI called Midjourney. While the judges of the competition allegedly had no idea it was AI generated, the piece was credited as "Jason M. Allen via Midjourney." Once Allen revealed the origin of his work on the Midjourney Discord server, the internet tore into him, claiming that he cheated the system, and wasn't a true artist. While the general sentiment towards this particular case was overwhelmingly negative, it shows that AI art can be judged as better than art made by artists. It further demonstrates that it is virtually impossible to distinguish between good AI art and art made by humans, which only further increases the legitimacy of these algorithms. As someone rather inept in the visual arts, I find it hard to properly judge the artistic value of AI-made art. That means, though, that a layman like myself can compete against, and potentially dwarf, human artists.
      </p>
      <div className="image-box">
        <img src={theatreImage} alt="Théâtre D'opéra Spatial" />
        <p>"Théâtre D'opéra Spatial" Jason M. Allen, 2022</p>
      </div>
      <p className="body-paragraph">
        Lastly, one of the most disconcerting applications of AI I've seen to date is with deepfakes, and custom voice models. Deepfakes have the ability to take one person's face, and copy paste it onto another person's face automatically. Last year you may have seen a Tom Cruise floating around on Tiktok, but that was no real thing. The user @deeptomcruise used extremely convincing deepfake technology to create videos of Tom Cruise in all sorts of scenarios, from playing guitar to doing magic tricks. After an AI algorithm was given hours and hours of footage of Tom Cruise, (from movies, interviews, etc.), it was able to learn how his face looked in every conceivable position. Then, it could paste those positions on top of another person's face to create a replica of them. In the past I found deepfakes rather janky, with something always slightly wrong. They were constantly in an uncanny valley: realistic enough to be a human, but not nearly realistic enough to fool me. This Tom Cruise deepfake was on a whole other level without a hint of warping or fuzzy edges when turning his head.
      </p>
      <p className="body-paragraph">
        This truly scared me. If any person can be replicated to do anything, how will we know what is real and what is fake anymore? Voice models, which similarly fake voice rather than picture, exacerbate the issue. After training on audio of a specific person, any text can be inputted to make the person say anything you want. If you've seen the TV show Kenobi on Disney Plus, you might be surprised to learn that every line spoken by Darth Vader, voiced by James Earl Jones, was completely generated by AI. When I watched the show I had no clue it wasn't really him, and watching back I still have a hard time discerning his true voice. These can be used for comedic purposes, like Hitler and Stalin singing "Video Killed the Radio Star" by The Buggles, but used malevolently, they can have disastrous effects. Imagine a video of yourself circulating everywhere of you saying something you know you didn't say, but to everyone else there's no difference between the person in the video and the human being that you really are. Deepfakes also have the potential to create child abuse material and fake celebrity pornography, which has sparked attention from the media and the government to try and crack down on this harmful practice. In the age of information, reliability and credibility are ever so important, and this application of AI casts everything we thought we knew into doubt.
      </p>
      <iframe 
        width="600" 
        height="337" 
        src="https://www.youtube.com/embed/-DysigzGQvU" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      ></iframe>
      <p className="body-paragraph">
        We are in a technological revolution, and for better or worse, AI is leading the herd. With AI being able to do many jobs infinitely better than any human could, it's hard to even compare this revolution to any other in history. AI is no longer just a tool for humanity, like metal, steam engines, or the internet were. It has the potential to replace us in so many ways, and inadvertently make the human race obsolete. It also has the power to destabilize our social systems, with people using it for nefarious and deceitful schemes. One last point to make is that technological growth tends to follow a logistic curve. As time progresses, the innovations grow exponentially, dwarfing the ones that came before, until it hits a critical point where it starts to asymptotically slows down, reaching a theoretical maximum, or carrying capacity. We must ask ourselves where we are on the curve. Are we past the exponential growth, where innovation might soon stutter and stop, or are we just at the start of the curve, with untold amounts of radical change ahead of us? While current technology seems relatively safe now, it might pose a real threat in the near future.
      </p>
    </ArticleLayout>
  )
}

export default AIArticle
