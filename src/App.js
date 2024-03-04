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
            <b>Quality-minded software engineer</b> dedicated to creating code
            that is testable, scalable, maintainable, and modular.
          </li>
          <li>
            <b>Avid learner</b> with extensive experience documenting, sharing,
            and presenting new discoveries, best practices, and emerging
            theories.
          </li>
          <li>
            <b>Known for tenacity in problem solving</b> - able to distill
            solutions from an extensive liberal arts background of technology,
            biology, and social sciences.
          </li>
        </ul>
      </Abstract>
      <Section title="Technical Tools">
        <EmphaticParagraph title="Experienced with">
          PHP, CSS, HTML, Angular, Node, React, Redux, Git, SQL, Python, Bash,
          Bootstrap, Semantic, and AWS
        </EmphaticParagraph>
        <EmphaticParagraph title="Familiar with">
          C, C#, SVN, Java, Jenkins, Conda, Docker, Mongo, CI tools, Serverless,
          4D, Google Applications, YAML, and Makefiles
        </EmphaticParagraph>
      </Section>
      <Section title="About Me">
        <div className="paragraph">
          I am driven to unite things that don't naturally go together and craft
          things that are greater than the sum of their parts. When not coding,
          I enjoy writing realistic fiction stories, composing orchestral music,
          and making charts and diagrams.
        </div>
      </Section>
      <Section title="Experience">
        <Subsection
          title="Ripcord, Hayward, CA"
          subtitle="Software Engineer • 2019 — 2024"
        >
          <ul>
            <li>
              Led multi-sprint efforts to modernize the company’s core product - a content management website, including porting the
              continuous integration system from a mixture of CircleCI and TravisCI to a private Jenkins server, optimizing the code with new
              ES2020 tools like null coalescing and dynamic imports, spearheading the conversion of the presentation layer into hooks for
              easier maintenance, consolidating the fragmented backend calls into a unified ReduxSaga data layer, extrapolating primary UI
              components like tables and modals into a reusable component library, adding new modern UX like drag and drop and
              keybindings, and consolidating within-product and between-product theming to allow for easier company branding
            </li>
            <li>
              Spun up proof of concepts using Create-React-App to allow product to demo proposed new core functionality to customers,
              including a “taxonomy dashboard” which replaced the traditional folder navigation of our content management system with
              nested charts, and a self-serve administration console for configuring custom data schema
            </li>
            <li>
              Designed and implemented core features for our image and document processing pipeline operations portal per customer
              specifications, including auto scrolling to and pagination of document messages, printing, downloading, and linking of files, and
              basic image editing like crop, rotate, and straighten
            </li>
            <li>
              Worked with production and delivery teams to support processing of customer data and auditing of content by creating web-based searchable, 
              filterable, and sortable content management systems, including a detailed table listing view, a graphical grid display view, and a file system tree view.
            </li>
            <li>
              Created an interface for users to upload documents and ask questions of them through Bard and GPT3.5, including the ability to save answers, provide
              feedback, and organize questions and answers with links back to your uploaded documents
            </li>
          </ul>
        </Subsection>
        <Subsection
          title="Lattice Automation, Boston, MA"
          subtitle="Software Engineer • 2018 — 2019"
        >
          <ul>
            <li>
              Spearheaded the revamp of the Loom synthetic biology web suite
              into a more advanced DNA assembly design tool by creating a primer
              design and visualization integration that used Primer3 to generate
              PCR primer pairs, and ReactJS to dynamically find and display
              binding sites
            </li>
            <li>
              Collected, documented, and implemented features for the Loom
              synthetic biology suite from clients and Alpha-testers, notably
              adding parsers for proprietary DNA sequence formats, unifying the
              sidebar and user pop-up notification systems into a holistic theme
              controlled by centralized CSS files and reusable Javascript
              components, and improving click and keyboard interactions
              throughout the header, file navigator, and sequence viewers to
              encourage intuitive features discovery
            </li>
            <li>
              Created the open source Javascript DNA sequence inspector library
              SeqViz and a free web implementation currently linked on the iGEM
              website for users to explore the BioBricks registry
            </li>
            <li>
              Improved time to delivery for custom development contracts by
              packaging many of Lattice’s sequence editing and assembly design
              services as Python packages and serving them as API endpoints
              through AWS with Serverless
            </li>
          </ul>
        </Subsection>
        <Subsection
          title="iVantage Health Analytics, Newton Upper Falls, MA"
          subtitle="Software Engineer • 2016 — 2018"
        >
          <ul>
            <li>Piloted Agile workflow using JIRA Scrum</li>
            <li>
              Documented and developed market analyses and reporting software
              for hospitals
            </li>
            <li>
              Integrated third party chat and support service into a user
              management system and products spanning the 4D, PHP/Javascript,
              and c#/.NET stacks
            </li>
            <li>
              Wrote API wrappers in PHP and used the ZendServer job queue to
              keep data for over 30,000 users and 1,400 hospital facilities
              synced across two databases and a third party service
            </li>
            <li>
              Implemented frontend Javascript, backend PHP, and database SQL
              data validation for form input and mass data imports
            </li>
            <li>
              Developed a user management system for storing PII, managing
              access and permissions to various other company products, and
              monitoring user activity and sessions
            </li>
          </ul>
        </Subsection>
        <Subsection
          title="Pantheon Platform, San Francisco, CA"
          subtitle="Engineering Intern • Jan, 2016, June,2016 — Sept, 2016"
        >
          <ul>
            <li>
              Drove conversion of the platform’s monolithic code base to
              domain-centric modules by piloting binary-compiled packaging with
              Conda and container-based cloud deployment to Kubernetes with
              Docker
            </li>
            <li>
              Reduced XSS attack surface by implementing backend data validation
              for the account creation process
            </li>
            <li>
              Coordinated with Product and Design to standardized dashboard
              error messaging with Jade
            </li>
            <li>
              Spearheaded technical adherence to a unified company image with a
              custom linter in Bash for style formatting
            </li>
            <li>
              Reduced pressure on customer support and improved bug
              triangulation by setting up error logging with Twisted that
              allowed engineers to find issues before clients did, and reduced
              noise by filtering client-side errors from logs
            </li>
            <li>
              Assisted the 24/7 on-call engineer rotation by creating automatic
              system and integration tests run in Docker containers that posts
              health metrics to Graphite and trigger Sensu alerts when tests
              fail in a certain pattern
            </li>
            <li>
              Raised code coverage by 10-100%, set up code coverage tracking in
              Coveralls and dependency checking in Gemnasium, and created
              testing patterns for continuous integration with CircleCI
            </li>
          </ul>
        </Subsection>
        <Subsection
          title="Goldfarb Center for Public Affairs and Civic Engagement, Colby College, Waterville, ME"
          subtitle="Database Administrator/ Communications Liaison • May, 2014 — June, 2016"
        >
          <ul>
            <li>
              Created and managed a FileMaker Pro database of over 10 years of
              alumni contacts and volunteer activity
            </li>
            <li>
              Redesigned a Wordpress and CommonSpot website to improve user
              experience and ease of navigation by partitioning visual data,
              creating collapsible tagged sections, and adding interactive menus
            </li>
            <li>
              Developed scripts to transport sensitive online information to a
              more secure server-bound database
            </li>
          </ul>
        </Subsection>
        <Subsection
          title="Department of Music, Colby College, Waterville, ME"
          subtitle="Web Programmer/ Head Usher/ Events Promoter • Sept, 2012 — May, 2016"
        >
          <ul>
            <li>
              Created and managed an SQL database to log scheduled events,
              instrument maintenance, and work schedules for ushers
            </li>
            <li>
              Doubled traffic to the department's Wordpress Digital Commons
              website by optimizing ease of access and connection to social
              media
            </li>
          </ul>
        </Subsection>
        <Subsection
          title="Colby Museum of Arts, Colby College, Waterville, ME"
          subtitle="Database Administrator/ Mellon Educational and Curatorial Research Intern • May, 2015 — Aug, 2015"
        >
          <ul>
            <li>
              Surveyed, analyzed, and presented the benefits of college-museum
              cooperation to the Board of Trustees
            </li>
            <li>
              Automated e-mailing, surveying, and data analyses of daily
              activity and visitor feedback
            </li>
            <li>
              Analyzed and presented Robert Indiana's Decade: Autoportraits
              Vinalhaven Suite, 1980 as a medium of discussion for Lagrange's
              Theorem
            </li>
          </ul>
        </Subsection>
        <Subsection
          title="Web & Emerging Technologies, Colby Libraries, Colby College, Waterville, ME"
          subtitle="Web Programmer • May, 2014 — Aug, 2014"
        >
          <ul>
            <li>
              Co-administrated the migration of the library website to an
              off-campus server and upgrade from LibGuides v1 to WordPress and
              LibGuides v2
            </li>
            <li>
              Redesigned library website for more fluid navigation and more
              intuitive organization using HTML tables and collapsible sections
              and accordians and infoboxes done in WordPress markdown
            </li>
          </ul>
        </Subsection>
        <Subsection
          title="Department of Psychology, Colby College, Waterville, ME"
          subtitle="Social Psychology Research Assistant • Sept, 2013 — Sept, 2014"
        >
          <ul>
            <li>
              Analyzed fairness heuristics among Major League Baseball umpires
              over the past 10 years with regressions and ANOVAs
            </li>
            <li>
              Created a general Implicit Association Task template to measure
              the effect of subtle cues on political opinion
            </li>
          </ul>
        </Subsection>
        <Subsection
          title="Private Neurology Clinic Dr. Xu Qun M.D., West Covina, CA"
          subtitle="Summer Intern • Jun, 2010 — Sept, 2013"
        >
          <ul>
            <li>
              Expedited scheduling by automating the connection between calendar
              and patient information
            </li>
            <li>
              Familiarized with the uses, functions, and reports of MRI w/ & w/o
              dye, CT w/ & w/o contrast, EMG, and ultrasound
            </li>
          </ul>
        </Subsection>
        <Subsection
          title="Department of Economics, Colby College, Waterville, ME"
          subtitle="Programmer • Sept, 2012 — Sept, 2013"
        >
          <ul>
            <li>
              Created and implemented an ETL for 28,371 entries of tax and
              demographics data from the 2010 Census using Python and SPSS, as
              preparation for the 2012 Statistical Abstract for the Belgrade
              Lakes Watershed
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
