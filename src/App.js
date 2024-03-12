import React from "react";
import "./App.css";
import { Section } from "./components/Section";
import { EmphaticParagraph } from "./components/EmphaticParagraph";
import { Subsection } from "./components/Subsection";
import { Link } from "./components/Link";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Abstract } from "./components/Abstract";
import { NAME } from "./Info";
import avatar from "./assets/avatar.jpg";

function App() {
  return (
    <div className="App">
      <img src={avatar} className="profile-picture" alt="" />
      <div className="HeaderTitle">{NAME}</div>
      <Header title="Software Engineer" />
      <Abstract title="Object-Oriented Design / Continuous Integration / Computational Modeling">
        <ul>
          <li>
            <b>Quality-minded software engineer</b> dedicated to creating code that is testable, scalable, maintainable, and modular.
          </li>
          <li>
            <b>Avid learner</b> with extensive experience documenting, sharing, and presenting new discoveries, best practices, and emerging theories.
          </li>
          <li>
            <b>Known for tenacity in problem solving</b> - able to distill solutions from an extensive liberal arts background of technology, biology, and social sciences.
          </li>
        </ul>
      </Abstract>
      <Section title="Technical Tools">
        <EmphaticParagraph title="Expert with">
          React, Typescript, Redux, Git, Node.js, MaterialUI, CSS, HTML, Playwright, Luxon, Lingui, Storybook, ESLint, and Jest
        </EmphaticParagraph>
        <EmphaticParagraph title="Experienced with">
          AngularJS, SQL, Python, Bash, NGINX, REST, RSQL, Cron, Formik, Keycloak, Webpack, PdfJS, GraphQL, CI tools, YAML, Helm, Bard, GPT, Docker, Serverless, Octopus, ELK stack, Monaco Editor, and Amazon Web Services
        </EmphaticParagraph>
        <EmphaticParagraph title="Familiar with">
          PHP, Bootstrap, SemanticUI, C, C#, .NET, SVN, Java, Jenkins, Conda, Docker, MongoDB, 4D, Google Applications, YAML files, Enzyme, SciPy, PyGeM, ZendServer, and Makefiles
        </EmphaticParagraph>
      </Section>
      <Section title="About Me">
        <div className="paragraph">
          I am driven to unite things that don't naturally go together and craft things that are greater than the sum of their parts. When not coding, I enjoy writing realistic fiction stories, composing orchestral music, and making charts and diagrams.
        </div>
      </Section>
      <Section title="Experience">
        <Subsection
          title="Ripcord, Hayward, CA"
          subtitle="Software Engineer • 2019 — 2024"
        >
          <ul>
            <li>
              Unlocked an international market several times the size of our domestic one by localizing our content management and user/config management products with Lingui and MomentJS/Luxon, starting with the Japanese, Chinese, and French locales
            </li>
            <li>
              Distilled a freemium consumer product tailored towards AI-assisted document investigation from our B2B content management offering that includes Q&A using Bard and GPT3.5, notes and citation organization, and data storage and transfer
            </li>
            <li>
              Drove doubling of ARR in consecutive years by prototyping, developing, and demoing products and features directly requested by returning and prospective customers, including a user and configuration management system, multiple modes for document management, advanced auditing and filtering UX, and a workflow and interface for editing and validating scanned images
            </li>
            <li>
              Doubled sprint velocity by modernizing codebase – consolidated fragmented backend calls into a unified ReduxSaga data layer, converted the presentation layer into hooks for easier maintenance, extracted UI components into a reusable component library, unified theming files and resources with a StyledComponents theme provider, and ported CI to a private Jenkins server that could have more customized scripting, allowing us to run automated code quality and integration testing checks on all pull requests
            </li>
            <li>
              Halved product/design review time by launching a Storybook-based sandbox for frontend components, themes, and icons that was deployed as an application alongside our product and could be pinned to different feature branches per environment
            </li>
            <li>
              Cut days of overhead from every sprint by designing and launching a frontend for our development environment manager that could quickly spin up applications, update versions and scale pods for services, and schedule sleep, wake, and deletion times
            </li>
            <li>
              Developed feature requests curated from meetings with delivery and our Fuji Business partners – like drag and drop file and image upload and reordering, a file tree view, scanning workflow keybindings, image zoom and resizing, and a sophisticated session-based read-write locking mechanism to support key Japanese customers like MUFG (Japan’s largest bank)
            </li>
          </ul>
        </Subsection>
        <Subsection
          title="Lattice Automation, Boston, MA"
          subtitle="Software Engineer • 2018 — 2019"
        >
          <ul>
            <li>
              Refined the Loom synthetic biology web suite into a marketable product for DNA assembly with a primer designer and visualizer that used Primer3 to generate PCR primer pairs, and Javascript to dynamically find and display binding sites; parsers for proprietary DNA sequence formats; linear and circular sequence viewers to encourage intuitive feature discovery; and a ReactJS/SCSS-powered, click/keyboard interactable, and themable UI for file uploading and sequence viewing
            </li>
            <li>
              Contributed to the synthetic biology research community by creating the open source Javascript DNA sequence inspector library SeqViz and a free web implementation currently linked on the iGEM website for users to explore the BioBricks registry
            </li>
            <li>
              Improved time to delivery for custom development contracts by packaging many of Lattice’s sequence editing and assembly design services as Python packages and serving them as API endpoints through AWS with Serverless
            </li>
          </ul>
        </Subsection>
        <Subsection
          title="iVantage Health Analytics, Newton Upper Falls, MA"
          subtitle="Software Engineer • 2016 — 2018"
        >
          <ul>
            <li>
              Enabled consolidated chat support across six web products by integrating third-party chat widgets across three stacks – 4D, PHP, and C#/.NET, using API wrappers written in PHP and frontend scripts written in Angular, Node, and JQuery
            </li>
            <li>
              Developed and maintained a user management system that housed over 300,000 users and 1,400 hospital facilities and bolstered security by implementing frontend, backend, and database-level data validation for form inputs and data imports
            </li>
            <li>
              Revitalized old PHP and Javascript projects by converting them from the lesser known SVN version control to Git
            </li>
            <li>
              Automated deployment process by creating scripts for pulling tags and automatically setting environment variables in Jenkins
            </li>
            <li>
              Established a monthly release cycle by deploying and releasing version controlled products through Jenkins and Octopus
            </li>
            <li>
              Ensured company longevity and project maintainability by rewriting core product code in the outdated 4D stack in C#/.NET
            </li>
            <li>
              Enabled smooth delivery team project administration by developing a user management system for storing PII, managing access and permissions to various other company products, and monitoring user activity and sessions
            </li>
          </ul>
        </Subsection>
        <Subsection
          title="Pantheon Platform, San Francisco, CA"
          subtitle="Engineering Intern • Jan, 2016, June,2016 — Sept, 2016"
        >
          <ul>
            <li>
              Increased onboarding speed by converting the platform’s monolithic code base to domain-centric modules in Docker containers
            </li>
            <li>
              Reduced XSS attack surface by implementing backend data validation for the account creation process
            </li>
            <li>
              Reduced engineering on-call load with Graphite visualizations of service health metrics and Sensu alerts for test failures
            </li>
            <li>
              Spearheaded technical adherence to a unified company image with a custom linter in Bash for style formatting
            </li>
            <li>
              Reduced pressure on customer support and improved bug triangulation by setting up error logging with Twisted that allowed engineers to find issues before clients did, and reduced noise by filtering client-side errors from logs
            </li>
            <li>
              Raised code coverage by 10-100%, set up code coverage tracking in Coveralls and dependency checking in Gemnasium, and created testing patterns for continuous integration with CircleCI
            </li>
          </ul>
        </Subsection>
        <Subsection
          title="Goldfarb Center for Public Affairs and Civic Engagement, Colby College, Waterville, ME"
          subtitle="Database Administrator/ Communications Liaison • May, 2014 — June, 2016"
        >
          <ul>
            <li>
              Enabled quick digital auditing by creating and managing a FileMaker Pro database of over 10 years of alumni contacts and volunteer activity
            </li>
            <li>
              Redesigned a Wordpress and CommonSpot website to improve user experience and ease of navigation by partitioning visual data, creating collapsible tagged sections, and adding interactive menus
            </li>
            <li>
              Developed scripts to transport sensitive online information to a more secure server-bound database
            </li>
          </ul>
        </Subsection>
        <Subsection
          title="Department of Music, Colby College, Waterville, ME"
          subtitle="Web Programmer/ Head Usher/ Events Promoter • Sept, 2012 — May, 2016"
        >
          <ul>
            <li>
              Doubled scheduling productivity by creating and managing an SQL database to log scheduled events, instrument maintenance, and work schedules for ushers
            </li>
            <li>
              Doubled traffic to the department's Wordpress Digital Commons website by optimizing ease of access and connection to social media
            </li>
          </ul>
        </Subsection>
        <Subsection
          title="Colby Museum of Arts, Colby College, Waterville, ME"
          subtitle="Database Administrator/ Mellon Educational and Curatorial Research Intern • May, 2015 — Aug, 2015"
        >
          <ul>
            <li>
              Secured the next several years of funding for college classes in the museum by surveying, analyzing, and presenting the benefits of college-museum cooperation to the Board of Trustees
            </li>
            <li>
              Halfed the required front desk staff by automating e-mailing, surveying, and data analyses of daily activity and visitor feedback
            </li>
            <li>
              Analyzed and presented Robert Indiana's Decade: Autoportraits Vinalhaven Suite, 1980 as a medium of discussion for Lagrange's Theorem
            </li>
          </ul>
        </Subsection>
        <Subsection
          title="Web & Emerging Technologies, Colby Libraries, Colby College, Waterville, ME"
          subtitle="Web Programmer • May, 2014 — Aug, 2014"
        >
          <ul>
            <li>
              Co-administrated the migration of the library website to an off-campus server and upgrade from LibGuides v1 to WordPress and LibGuides v2
            </li>
            <li>
              Redesigned library website for more fluid navigation and more intuitive organization using HTML tables and collapsible sections and accordians and infoboxes done in WordPress markdown
            </li>
          </ul>
        </Subsection>
        <Subsection
          title="Department of Psychology, Colby College, Waterville, ME"
          subtitle="Social Psychology Research Assistant • Sept, 2013 — Sept, 2014"
        >
          <ul>
            <li>
              Analyzed fairness heuristics among Major League Baseball umpires over the past 10 years with regressions and ANOVAs
            </li>
            <li>
              Created a general Implicit Association Task template to measure the effect of subtle cues on political opinion
            </li>
          </ul>
        </Subsection>
        <Subsection
          title="Private Neurology Clinic Dr. Xu Qun M.D., West Covina, CA"
          subtitle="Summer Intern • Jun, 2010 — Sept, 2013"
        >
          <ul>
            <li>
              Expedited scheduling by automating the connection between calendar and patient information
            </li>
            <li>
              Familiarized with the uses, functions, and reports of MRI w/ & w/o dye, CT w/ & w/o contrast, EMG, and ultrasound
            </li>
          </ul>
        </Subsection>
        <Subsection
          title="Department of Economics, Colby College, Waterville, ME"
          subtitle="Programmer • Sept, 2012 — Sept, 2013"
        >
          <ul>
            <li>
              Created and implemented an ETL for 28,371 entries of tax and demographics data from the 2010 Census using Python and SPSS, as preparation for the 2012 Statistical Abstract for the Belgrade Lakes Watershed
            </li>
          </ul>
        </Subsection>
      </Section>
      <Section title="Education">
        <Subsection
          title="Colby College, Waterville, ME"
          subtitle="Bachelor of Arts, Computer Science • 2012 — 2016"
        ></Subsection>
        <Subsection
          title="Colby College, Waterville, ME"
          subtitle="Bachelor of Arts, Neuropsychology • 2012 — 2016"
        ></Subsection>
      </Section>
      <Section title="Projects">
        <Subsection
          title="SeqViz framework agnostic DNA sequence viewer library"
          subtitle="Synthetic Biology • Lattice Automation, 2019"
        >
          <div className="paragraph">
            An open-sourced library to visualize DNA sequences on the web.
            Includes parsers for all major sequence data formats and
            integrations with NCBI and iGEM. Allows for easy exploration of
            sequence base pairs, annotations, primer binding sites, and enzyme
            cut sites in linear sequence and plasmid views as well as searching
            for and copying subsequences, and automatic annotation of sequences
            with notable features compiled by NCBI and iGEM.
          </div>
          <Link
            title="Github"
            name="SeqViz"
            url="https://github.com/Lattice-Automation/seqviz"
          />
          <Link
            title="Medium"
            name="Visualize Your DNA Sequences with SeqViz"
            url="https://medium.com/lattice-automation/visualize-your-dna-sequences-with-seqviz-b1d945eb9684"
          />
          <Link
            title="Demo"
            name="BioBrick registry explorer"
            url="https://tools.latticeautomation.com/seqviz"
          />
          <Link
            title="iGEM"
            name="2019 Design Tool spotlight"
            url="https://2019.igem.org/Resources/Software_Tools"
          />
        </Subsection>
        <Subsection
          title="Model of spacial and temporal organization in the suprachiasmatic nucleus"
          subtitle="Computational Biology • Colby College, 2016"
        >
          <div className="paragraph">
            An ordinary differential equation model of circadian rhythm. Our
            model confirms that it is possible to dissociate spatial and
            temporal organization in the suprachiasmatic nucleus, giving
            credence to a two dimensional model to circadian rhythms wherein the
            synchronized activation of cells is not sufficient for a healthy
            signal.
          </div>
          <Link
            title="Presentation"
            name="2016 Colby Liberal Arts Symposium"
            url="https://drive.google.com/file/d/0B7Tl4ACGoqxDdFFDRERESldlVkE/view"
          />
          <Link
            title="PDF"
            name="Separating Space and Time in the SCN"
            url="https://drive.google.com/open?id=0B7Tl4ACGoqxDdDNzRElNSjVaNE0"
          />
        </Subsection>
        <Subsection
          title="Study on the effects of aesthetics and nature on cognitive restoration"
          subtitle="Cognitive Psychology • Colby College, 2016"
        >
          <div className="paragraph">
            An experiment conducted with a sample of 207 male and female
            undergraduate students. Our data suggests that neither aesthetics
            nor nature have significant cognitive restorative effects, but
            nature does have positive impacts on mood.
          </div>
          <Link
            title="PDF"
            name="Is It Still Good If It Looks Bad? The Nature of Aesthetics in Restorative Environments"
            url="https://drive.google.com/open?id=0B7Tl4ACGoqxDSnVyYnhPeVliNGM"
          />
        </Subsection>
        <Subsection
          title="Study on Robert Indiana's Decade: Autoportraits as a representation of Lagrange's Theorem"
          subtitle="Mathematics and Art History • Colby College, 2015"
        >
          <div className="paragraph">
            An interdisciplinary mathematical and art history analysis of Robert
            Indiana’s Decades Autoportraits: Vinalhaven Suite (1980) that
            inspired a Colby Museum of Arts Collaborative Mathematics course on
            number theory.
          </div>
          <Link
            title="Presentation"
            name="2015 Colby Undergraduate Summer Research Symposium"
            url="https://drive.google.com/open?id=0B7Tl4ACGoqxDaW1GQ0lZOWhJZGs"
          />
          <Link
            title="Abstract"
            name="Exploring mathematics in Robert Indiana’s Decade: Autoportraits Vinalhaven Suite"
            url="https://drive.google.com/open?id=0B7Tl4ACGoqxDR25nSzVjNXBJdzg"
          />
        </Subsection>
        <Subsection
          title="Study on the effects of taking photos on long term memory"
          subtitle="Cognitive Psychology • Colby College, 2014"
        >
          <div className="paragraph">
            An experiment conducted with a sample of 47 male and female
            undergraduate students. Our data suggests that while taking a
            picture of an object impairs memory for the object’s context, it
            does not affect memory for the object itself.
          </div>
          <Link
            title="PDF"
            name="Kodak Moments: The Influence of Taking Photos of People vs. Objects on Long Term Memory"
            url="https://drive.google.com/open?id=0B7Tl4ACGoqxDczJjWkFxMGVPcXc"
          />
        </Subsection>
        <Subsection
          title="Study on the effects of moral reasoning on the placebo effect"
          subtitle="Social Psychology • Colby College, 2014"
        >
          <div className="paragraph">
            An experiment conducted with a sample of 120 male and female
            undergraduate students. Our data did not support the hypothesis that
            moral reasoning prompted by a company’s environmental controversy
            would affect the objective effectiveness of the company’s product.
          </div>
          <Link
            title="PDF"
            name="Good Coffee is Ground in a Sense of Justice: The Placebo Effect and Moral Reasoning"
            url="https://drive.google.com/open?id=0B7Tl4ACGoqxDUzRxWXByOEtVZlU"
          />
        </Subsection>
        <Subsection
          title="Study on the effects of Acetaminophen and Ethanol on the heart"
          subtitle="Neurobiology • Colby College, 2013"
        >
          <div className="paragraph">
            A controlled laboratory experiment conducted on model species Uca
            pugilator. Our data showed that when acetaminophen and ethanol is
            concurrently administered to the heart, the heart only responds to
            the drug of higher concentration.
          </div>
          <Link
            title="PDF"
            name="Effect of Acetaminophen and Ethanol Applied in Conjunction on Heart Rate and Heartbeat Amplitude, Uca pugilator"
            url="https://drive.google.com/file/d/0B7Tl4ACGoqxDR3djZmp5WEw1U0k/view"
          />
        </Subsection>
      </Section>
      <Section title="Skills">
        <Subsection subtitle="Computer Programming">
          <div className="paragraph">
            Experience developing in Windows, Mac, and Fedora operating systems,
            primarily in Javascript, PHP, Python, and Bash. Full stack
            development experience for web applications, web APIs, and
            commandline applications.
          </div>
        </Subsection>
        <Subsection subtitle="Product Management">
          <div className="paragraph">
            Experience communicating technical changes and features to clients,
            collecting user feedback, and writing user stories. Experience with
            Scrum project management, currating, grooming, and assigning issues,
            leading sprint reviews and retrospectives. Experience with Kanban
            project management.
          </div>
        </Subsection>
        <Subsection subtitle="Database Management">
          <div className="paragraph">
            Experience with creating databases both from scratch with SQL and
            with software like FileMaker Pro. Experience with managing Mongo
            databases with both CLI and GraphQL.
          </div>
        </Subsection>
        <Subsection subtitle="Leadership">
          <div className="paragraph">
            Extensive experience leading community service groups, student
            clubs, and research and development teams.
          </div>
        </Subsection>
        <Subsection subtitle="Research">
          <div className="paragraph">
            Published and unpublished research in Social Psychology, Cognitive
            Psychology, Neuropsychology, Economics, Anthropology, Contemporary
            Art, Music, and Mathematics.
          </div>
        </Subsection>
      </Section>
      <Section title="Honors & Awards">
        <Subsection
          title="Boy Scouts of America"
          subtitle="BSA Eagle Scout • 2012"
        >
          <div className="paragraph">
            Awarded for six years of service with the BSA and continued
            demonstration of Scout Spirit.
          </div>
        </Subsection>
        <Subsection
          title="Colby College"
          subtitle="Ralph J. Bunche Scholar • 2012"
        >
          <div className="paragraph">
            Awarded for exceptional scholastic strength and leadership
            potential.
          </div>
        </Subsection>
      </Section>
      <Section title="Associations">
        <Subsection
          title="Lions Club International"
          subtitle="Student Speaker • 2010 — 2013"
        >
          <div className="paragraph">
            Spoke out about a pertinent social or political situation, i.e.
            border control and universal healthcare, each year, and traveled
            throughout California to engage in speech-based educational debate
            with my peers.
          </div>
        </Subsection>
      </Section>
      <Footer />
    </div>
  );
}

export default App;
