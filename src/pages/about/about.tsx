import "./styles.scss";

export default function AboutPage() {
  const startDate = new Date("2009-01-01");
  const ageDifMs = new Date().getFullYear() - startDate.getFullYear();

  return (
    <main>
      <div id="about-page" className="page-container">
        <p>
          <b className="p-section-title">About Me: </b> Hi, my name is Christopher. That's probably pretty obvious from the URL, but oh well, here I am anyway trying to awkwardly figure out how to start this out. I've been programming for over {ageDifMs} years now and don’t see myself ever stopping. It started for me as it did for a lot of people. I played way too many video games and one day asked how do they actually work? I looked up advice online and everyone kept saying real programmers learn C++... so I made the terrible decision of learning C++ as my first language. A year of awkward text-based games and confusing compiler settings later and I was hooked. From there it turned into joining several startups, working with some non-profits, a college degree, then full-time work.
        </p>
        <p>
          My first internship and full-time job threw me into the Microsoft world of C#, ASP .NET, and all things Microsoft. There I got to work with some of the best Software Engineers that I have, to this day, ever gotten to work with. They taught me how to learn and how to question everything I do. I owe them a lot of my career success due to how they trained me and let me fail in a safe environment. My second job after that was in Health Care consulting and was a whirlwind of clients, projects, requirements, and deadlines for better or worse. It taught me a lot about how I work, but more taught me how to be a responsible Software Engineer in a world that wants results yesterday.
        </p>
        <p>
          While I am a full-stack developer, my favorite area is back-end development. It isn't the shiny new kid on the block that most people want to get into, but it is the backbone for everything. Building a scalable and maintainable system is not an easy task, but it is one of the most satisfying areas of programming I have yet to work in. If I had to put it into words, taking something complex and engineering it into something simpler is a never-ending task I enjoy doing.
        </p>
        <p>
          Another passion of mine is mentoring. I didn’t grow up wanting to be a programmer or any specific thing. Math and science actually stressed me out as a kid. I instead found programming by chance and have been incredibly lucky to have had great communities and jobs with people that cared about how I learned and grew. Programming changed everything for me and gave me the confidence as a teenager to realize I could do more than I ever believed. I think it can do that for other people too and I love when I get a chance to show that. Over the years I’ve taught classes to homeschool kids, done one-on-one tutoring, and tried giving back to the online community by posting solutions to stack-overflow and trying to put up Open Source projects. Everyone has a different path in life, but whatever that may be, it is easier with a community that helps each other.
        </p>
        <p>
          For the time being, if you want to reach out to chat, feel free to message me on Linkedin. I will be updating this site with more options to contact me soon.
        </p>
        <p>
          <b className="p-section-title">About This Site: </b> This site serves a dual purpose. The visual aspect, built using React.js and hosted on Cloudflare, is aimed at being a living resume of sorts. Onn the back-end, hosted on Digital Ocean, it's acting as the API for projects I'm working on. I had the immediate need for an API recently and decided to expand it to be a general purpose back-end for any future needs. The front-end source code can be found <a href="https://github.com/ChristopherMWood/www.christopherwood.dev" target="_blank" rel="noopenerm noreferrer">here</a> and the back-end source code can be found <a href="https://github.com/ChristopherMWood/api.christopherwood.dev" target="_blank" rel="noopenerm noreferrer">here</a>.
        </p>
      </div>
    </main>
  );
}
