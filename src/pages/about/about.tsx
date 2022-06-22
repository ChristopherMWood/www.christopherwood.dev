import "./styles.scss";
import profilePhoto from "../../images/profile-photo.jpeg";
import Footer from "../../components/footer/footer";

export default function AboutPage() {
  const startDate = new Date("2009-01-01");
  const ageDifMs = new Date().getFullYear() - startDate.getFullYear();

  return (
    <main>
      <div id="about-page" className="page-container">
        <p>
        <img id="profile-photo" src={profilePhoto} alt="Christopher Wood Profile Photo" />
          &nbsp;&nbsp;&nbsp;&nbsp;Hi, my name is Christopher. That's probably pretty obvious from the url, but oh well, here I am anyway trying to awkwardly figure out how to start this out.
          I've been programming for over <span>{ageDifMs}</span> years now and am pretty sure I will continue for the rest of my life.
          It started, as I've found out, how it did for most programmers. I played way too many video games and one day asked how do they actually work?
          I looked up advice online and everyone kept saying real programmers learn C++... so I made the terrible decision of learning C++ as my first language.
          A year of awkward text based games and confusing compiler settings went by and I took a local coding class. From there it turned into a college degree which
          taught me C and Java. I also worked at some startups and for a non profit during school which introduced me to Ruby on Rails and web development in general.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;My first internship and full time job threw me into the Microsoft world of C#, ASP .NET, and all things Microsoft. There I got
          to work with some of the best Software Engineers that I have to this day every gotten to work with. They taught me how to learn and how to question
          everything I do. I owe them a lot of my career success due to how they trained me and let me fail in a safe environment. My second job after
          that was in Health Care consulting and was a whirlwind of clients, projects, requirements and deadlines for better or worse. It taught me a lot
          about how I work, but more taught me how hard it is to be a responsible Software Engineer in a world that wants results yesterday.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;My first passion in programming is backend development. It isn't the shiny new kid on the block that most people want to get into, but it is the backbone for everything.
          Building a scalable and maintainable system is not an easy task, but it is one of the most satisfying areas of programming I have yet to work in.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;My second passion is mentoring. I was incredibly lucky to have a great first job with people that cared about how I learned and grew. I want
          to return that favor to as many people as I can. Everyone has the ability to be an incredible Software Developer if they truly want and if I can 
          help people realize that I will have done my job.
        </p>
      </div>
      <Footer />
    </main>
  );
}