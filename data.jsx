// Data for the Katy Lynn Knowles site.
// Productions, journey timeline, testimonials, values, inspirations.

const PRODUCTIONS = [
  {
    id: "behind_closed_doors",
    title: "Behind Closed Doors",
    subtitle: "Exploring Contemporary Relationships",
    role: "Director",
    year: "2014",
    venue: "Original devised work",
    summary:
      "An original devised piece interrogating contemporary relationships — what gets said in public, what gets withheld in private, and the negotiation between the two.",
    images: [1, 2, 3, 4, 5].map((n) => `assets/portfolio/behind_closed_doors/${n}.jpg`),
    layout: "tall",
  },
  {
    id: "wedding_singer",
    title: "The Wedding Singer",
    subtitle: "Music by Matthew Sklar",
    role: "Choreographer",
    year: "2013",
    venue: "Manatee High School",
    summary:
      "Big, bright, and unapologetically 80s. Choreography across an ensemble of 30+ — from synchronized prom-night spectacle to intimate two-handers.",
    images: [1, 2, 3, 4, 5].map((n) => `assets/portfolio/wedding_singer/${n}.jpg`),
    layout: "wide",
  },
  {
    id: "broadway_musical_revue",
    title: "Broadway Musical Revue",
    subtitle: "A Survey of the American Songbook",
    role: "Director & Choreographer",
    year: "2012",
    venue: "Davis Center for the Performing Arts",
    summary:
      "Twelve numbers across forty years of musical theatre. A staging exercise in tonal range — from Sondheim sobriety to Fosse-flavored swing.",
    images: [1, 2, 3, 4, 5].map((n) => `assets/portfolio/broadway_musical_revue/${n}.jpg`),
    layout: "default",
  },
  {
    id: "drowsy_chaperone",
    title: "The Drowsy Chaperone",
    subtitle: "A Musical Within a Comedy",
    role: "Choreographer",
    year: "2012",
    venue: "Manatee High School",
    summary:
      "A love letter to old musicals filtered through a melancholic narrator. Choreography pitched between earnestness and gentle parody.",
    images: [1, 2, 3, 4, 5].map((n) => `assets/portfolio/drowsy_chaperone/${n}.jpg`),
    layout: "half",
  },
  {
    id: "seussical_jr",
    title: "Seussical Jr.",
    subtitle: "Adapted from the works of Dr. Seuss",
    role: "Director & Choreographer",
    year: "2011",
    venue: "Acting Up Camp",
    summary:
      "Imagination treated as the design constraint. Built scale and spectacle out of bedsheets, found objects, and a cast that ranged eight to fourteen years old.",
    images: [1, 2, 3, 4, 5].map((n) => `assets/portfolio/seussical_jr/${n}.jpg`),
    layout: "half",
  },
  {
    id: "wonderful_town",
    title: "Wonderful Town",
    subtitle: "Bernstein · Comden · Green",
    role: "Director & Choreographer",
    year: "2012",
    venue: "Greensboro College",
    summary:
      "Mid-century Manhattan in all its choreographic chaos. Big-band staging built around character — the dance follows the joke, not the other way around.",
    images: [1, 2, 3, 4, 5].map((n) => `assets/portfolio/wonderful_town/${n}.jpg`),
    layout: "tall",
  },
  {
    id: "anything_goes",
    title: "Anything Goes",
    subtitle: "Cole Porter",
    role: "Choreographer",
    year: "2011",
    venue: "Manatee High School",
    summary:
      "Tap, tap, and more tap. A study in keeping ensemble unison while letting individual personality through — every sailor has a name.",
    images: [1, 2, 3, 4, 5].map((n) => `assets/portfolio/anything_goes/${n}.jpg`),
    layout: "default",
  },
  {
    id: "acting_up_camp",
    title: "Acting Up Camp",
    subtitle: "Junior Shows Programme",
    role: "Director & Choreographer",
    year: "2010 – 2013",
    venue: "Acting Up Camp",
    summary:
      "Three summers, twelve junior productions. Process is the curriculum: rehearsal as a place to practice listening, risk, and revision.",
    images: [1, 2, 3, 4, 5].map((n) => `assets/portfolio/acting_up_camp/${n}.jpg`),
    layout: "wide",
  },
  {
    id: "video_reel",
    title: "Director / Choreographer Reel",
    subtitle: "Selected clips",
    role: "Video",
    year: "2014",
    venue: "Vimeo",
    summary:
      "A short reel of selected staging, choreography, and direction. Best watched with the volume on.",
    isVideo: true,
    vimeoId: "116821343",
    images: [],
    layout: "default",
  },
];

const JOURNEY = [
  { year: "2004", title: "American Musical & Dramatic Academy", sub: "Musical Theatre Integrated Program", major: false },
  { year: "2005 – 08", title: "Florida School of the Arts", sub: "A.S. Musical Theatre · A.A.", major: true },
  { year: "2007", title: "Kennedy Center — Irene Ryan Nomination", sub: "Barefoot in the Park · Mother", major: false },
  { year: "2008", title: "Performing Artist of the Year", sub: "Florida School of the Arts", major: false },
  { year: "2008", title: "International Thespian Society", sub: "District Six Musical Theatre Adjudicator", major: false },
  { year: "2008 – 09", title: "Asolo Repertory Theatre", sub: "Stage Management Intern", major: false },
  { year: "2009", title: "Florida Theatre Conference", sub: "Theatre for Youth Adjudicator", major: false },
  { year: "2009", title: "Equity Membership Candidacy", sub: "Card holder", major: false },
  { year: "2009 – 10", title: "Lakewood Ranch High School", sub: "Musical Theatre Artist in Residence", major: false },
  { year: "2010", title: "International Thespian Society", sub: "District Six Musical Theatre Adjudicator", major: false },
  { year: "2010 – 11", title: "Greensboro College", sub: "B.A. in Acting", major: true },
  { year: "2011", title: "Greensboro Performing Arts", sub: "Director · Choreographer · Teaching Artist", major: false },
  { year: "2011 – 13", title: "Manatee High School", sub: "Theatre & Dance Director", major: false },
  { year: "2011 – 13", title: "Davis Center for the Performing Arts", sub: "Theatre Manager", major: false },
  { year: "2013 – Now", title: "New York University", sub: "M.A. Educational Theatre — Colleges & Communities", major: true },
];

const VALUES_LEFT = [
  "Use collaboration, communication, and organization as the rehearsal-room toolkit — and continually examine which techniques are actually working.",
  "Research and question playwrights, scripts, and human behavior to approach material and character with honesty and curiosity.",
  "Use images and quotations as primary research — a language shared with actors and designers.",
  "Go on a collaborative journey with actors in a safe, honest environment, using a broad range of strategies to help them make personal connections to character.",
  "Treat the journey and process as equal in importance to the final product.",
];
const VALUES_RIGHT = [
  "Provide thought-provoking, constructive critique that gives performers room to reflect, evolve, and grow.",
  "Create a safe, positive rehearsal space where artists can explore, discover, collaborate, and work outside their comfort zone.",
  "Encourage actors to think independently, make bold choices, and take real risks.",
  "Lead with a clear objective so the production process stays organized, sane, and focused — empowerment and collaboration alongside it.",
  "Produce theatre that asks audiences to question, reflect, and communicate about their past, present, and future.",
];

const INSPIRATIONS = [
  { name: "Neil LaBute",          craft: "Playwright" },
  { name: "Cole Porter",          craft: "Composer" },
  { name: "Constantin Stanislavski", craft: "Method" },
  { name: "Bob Fosse",            craft: "Choreographer" },
  { name: "Anne Bogart",          craft: "Director" },
  { name: "Jason Robert Brown",   craft: "Composer" },
  { name: "Jerome Robbins",       craft: "Choreographer" },
  { name: "Sanford Meisner",      craft: "Method" },
  { name: "Gregory Hines",        craft: "Dancer" },
];

const TESTIMONIALS = [
  {
    body:
      "I have experience with Katy Knowles as a performer, a teacher, a director and a friend. I admire the way Katy approaches every goal with enthusiasm and intensity. As a performer, she is easy to direct and always goes full out with great insight into what you are trying to achieve. As a teacher, Katy not only relates well to students of any age but maintains her own ability to be a lifelong learner. I can count on her to ALWAYS go the extra mile — be it 9 to 5 or 2:00 AM if necessary.",
    name: "Patricia Ross",
    role: "Teacher · Director · Choreographer, Manatee School for the Arts",
  },
  {
    body:
      "It has been a distinct pleasure to work with Katy Knowles during her studies at Florida School of the Arts. Her dedication, understanding, and mastery of the art form was a welcomed addition to our program. I remain honored to be counted among her extensive and varied network of theatre educators and professionals.",
    name: "Edward T. Kelly",
    role: "Theatre Professor, Florida School of the Arts",
  },
  {
    body:
      "She is a positive force to the entire faculty, staff, student body and community. Katy is an artistic perfectionist who sets extremely high standards for herself and her students. She is a master of instructional design — lesson planning, delivery, facilitation, and student engagement. The talent she has developed in our students can rival professional work.",
    name: "Melissa Gagnon",
    role: "Assistant Principal, Braden River High School",
  },
  {
    body:
      "While working at the Asolo, Katy was assistant stage manager for four productions. She always displayed a high degree of organization, responsibility, and ambition. With very little formal stage management training, she created superb paperwork, ran entire understudy rehearsals with minimal direction, and managed an IATSE crew twice her age.",
    name: "Kelly Borgia",
    role: "Resident Production Stage Manager, Asolo Repertory Theatre",
  },
  {
    body:
      "Working with Katy Knowles on Behind Closed Doors was such a blessing. She really pushed us as actors to explore every facet of our characters' psyche and conflicts, which helped us create a collectively powerful performance as a cast.",
    name: "Mary Ashley",
    role: "Actor",
  },
  {
    body:
      "Before high school I had never been a part of any theatre production or dance class. Then I began working with Ms. Knowles, and learned everything from tap dancing to technical theatre. Now I plan on majoring in theatre, knowing that I'll use these skills for the rest of my life. Her passion for the arts has inspired me — and continues to inspire everyone she works with.",
    name: "Kylee Risdon",
    role: "Former Student",
  },
];

Object.assign(window, {
  PRODUCTIONS, JOURNEY, VALUES_LEFT, VALUES_RIGHT, INSPIRATIONS, TESTIMONIALS,
});
