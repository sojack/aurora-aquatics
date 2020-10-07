import React from "react"
// import Img from "gatsby-image"
// import { graphql } from "gatsby"

// import { Link } from "gatsby"

import Layout from "../components/layout"
import Carousel from "../components/carousel"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Carousel />
    <main>
      <section>
        <h1>Mission</h1>
        <p>
          To support the development of a premiere accessible aquatic facility
          that will benefit the recreational, competitive, and community users
          in Aurora and York Region.
        </p>
      </section>
      <section>
        <h1>Guiding principles</h1>
        <p>York Region North’s premiere accessible aquatic facility:</p>
        <ul>
          <li>Supports healthy, active lifestyles within the community.</li>
          <li>
            Is a destination for community recreation as well as, regional,
            provincial and national aquatic training and competitions;
          </li>
          <li>
            Is an economic generator for the Town of Aurora through the ability
            of hosting local, regional, and national aquatic events.
          </li>
        </ul>
      </section>

      <section className="section01" id="membership">
        <div className="colorPattern patternTop"></div>
        <div className="banner01 banner "></div>
        <h1>Membership</h1>
        <p>
          Membership is open to anyone who wants to support the expansion of
          aquatic programming in the town of Aurora. Important, group and
          individual stakeholders include:
        </p>
        <ul>
          <li>Lane Swimmers</li>
          <li>Aquafit Swimmers</li>
          <li>Special Needs Program Providers and Participants</li>
          <li>Adaptive P.E. Providers and Participants</li>
          <li>Physiotherapy/Rehabilitation Providers & Patrons</li>
          <li>Swim Clubs</li>
          <li>Water Polo Clubs</li>
          <li>Artistic Swimming Clubs</li>
          <li>Special Olympics Clubs</li>
          <li>Masters Swim Clubs</li>
          <li>Triathlon Swim Clubs</li>
          <li>Rowing and Paddling Clubs</li>
          <li>Learn to Swim participants</li>
          <li>Sport Lifesaving Clubs</li>
          <li>School Programs</li>
          <li>Swim Teams</li>
          <li>PE courses and water safety</li>
          <li>Family Recreation and swim participants</li>
          <li>Scuba and Rec Programs such as paddle boarding, kayaking, etc</li>
          <li>Youth Programs</li>
          <li>Senior Specific Programs</li>
          <li>Paraswimmers</li>
          <li>
            Other sport clubs such as hockey which are interested in aquatics
            and cross training
          </li>
        </ul>
        <div className="formSection">
          <p>
            Those interested in joining us please fill the form below and we
            will get in touch with you.
          </p>
          <form
            name="membership"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <div>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" id="name" required />
            </div>
            <div>
              <label htmlFor="organization">Organization: </label>
              <input
                type="text"
                name="organization"
                id="organization"
                required
              />
            </div>
            <div>
              <label htmlFor="email">email: </label>
              <input type="email" name="email" id="email" required />
            </div>
            <div>
              <input type="submit" value="Join us!" className="submit" />
            </div>
          </form>
        </div>
      </section>
      <section className="section02" id="events">
        <div className="colorPattern patternTop"></div>
        <div className="banner02 banner"></div>
        <h1>Upcoming Events</h1>
        <p>Monthly Zoom Media Aurora Swimming for Everyone web conference</p>
        <ul>
          <li>Late August - Online Aquatic Survey by the Town of Aurora</li>
          <li>
            September - Setting the vision, mission and guiding principles
          </li>
          <li>October - Preparing to give the town Aquatics Aurora inputs</li>
          <li>
            November - Ensuring we have all the letters of support necessary and
            a strategy to engage decision makers
          </li>
          <li>
            Note: the next town staff presentation to the town Council is
            tentatively scheduled for the first week of November-this would be
            an informational presentation leading up to a future decision making
            council meeting.
          </li>
          <li>December TBD</li>
        </ul>
      </section>
      <section className="section03" id="opportunity">
        <div className="colorPattern patternTop"></div>
        <div className="banner03 banner"></div>
        <h1>The Current Opportunity</h1>
        <h2>A word about the ISG Feasibility Study</h2>
        <p>
          ISG was hired to review and analyze the current aquatic programming
          and opportunities in the Town of Aurora and to make recommendations on
          long term expansion of facilities and programs based on needs and
          contemplated costs.
        </p>
        <p>
          Framing the options for twinning the SARC (stand-alone second facility
          viewed as a long shot)
        </p>
        <dl>
          <dt>Do Nothing (48% current recovery)</dt>
          <dd>
            The town could elect to do nothing which would not meet the needs of
            the current population of 62,000 never mind the projected population
            of 70,000 by 2031.{" "}
          </dd>
          <dt>Twin SARC (56% threshold recovery)</dt>
          <dd>
            This includes building a second 10 lane 25 metre pool which would
            allow the current tank to be reengineered into a warm water tank for
            aqua fitness, learn to swim, special needs and adaptive P.E.
          </dd>
          <dt>Sport Training (63% threshold recovery)</dt>
          <dd>
            This option includes building next to the SARC tank a 10 lane 50
            metre training tank with a split bulkhead and 2 headwalls. Usage
            would be focused on sport training and general community recreation
            usage. Seating would be 500 combined for spectators and competitors
            and it could facilitate hosting very small invitationals and meets,
            camps and clinics. The advantage of this plan would be that it would
            allow the current SARC tank to be reengineered into a warm water
            tank for aquafitness, learn to swim, special needs and adaptive P.E.
          </dd>
          <dt>Event Facility (63% threshold recovery)</dt>
          <dd>
            This option includes a 10 lane 50 metre pool with seating up to 900
            spectators and 600 competitors in two seating areas. The expanded
            size would come with 2,000 square feet of amenities that could be
            used for the additional community activities and facility’s other
            stakeholder groups (hockey, gym, fitness and third-party rentals).
            This format would permit hosting of regional provincial and some
            national events for swimming, water polo, artistic swimming and
            sport lifesaving. The advantage of this plan would be that it would
            allow the current SARC tank to be reengineered into a warm water
            tank for aquafitness, learn to swim, special needs and adaptive P.E.{" "}
          </dd>
        </dl>
      </section>
      <section className="section04" id="keymessage">
        <div className="colorPattern patternTop"></div>
        <div className="banner04 banner"></div>
        <h1>Key Messages</h1>
        <ol>
          <li>
            Based on the current programming needs and planned population growth
            of Aurora the town is in need of additional aquatic space.
          </li>
          <li>
            Any new pool that is built in Aurora needs to serve a broad cross
            section of the community. Hence the need to create an Aquatic
            advocacy group.
          </li>
          <li>
            As Aurora grows and becomes more diverse, learn-to-swim programs and
            aquatic recreation and fitness will become an important component to
            attracting new families and building a world class community.
          </li>
          <li>
            The underlying driver for any decision needs to be based on strong
            economics (user fees, rental income, special events, and incremental
            third-party partners-sport clubs, therapy/rehab and professional
            services for a return on investment).
          </li>
          <li>
            As a town we need to continually strive to update our aquatic
            programming offering and strive to create demand through new
            programs that benefit the community, involve more people and
            families in aquatics and that subsequently generate incremental
            revenue.
          </li>
          <li>
            SARC is the preferred option as it creates the ability to develop a
            warm water learning environment for youth and seniors while
            maximizing incremental revenue through third party rentals, special
            events and economic impact (room night rentals, hospitality, etc) in
            the most efficient model.
          </li>
        </ol>
      </section>
      <section className="section05" id="qa">
        <div className="colorPattern patternTop"></div>
        <div className="banner05 banner"></div>
        <h1>Q&amp;A</h1>
        <dl>
          <dt>Does the Town of Aurora Really need a new Pool?</dt>
          <dd>
            Any way you look at it the town is growing, and the current
            facilities cannot keep up with the current demand much less the
            projected future demand. The SARC opened in 2009 when the population
            in aurora was 48,0000 and from almost day one the facility was at
            capacity and now in 2020 with a population of 62,000 the facility
            cannot handle the demands in the learn to swim, adaptive P.E. and
            special needs areas never mind the competitive sport clubs. This
            coupled with the fact that SARC as currently configured needs to be
            reengineered to make it more functional allowing for new program
            creation, which in turn will drive revenue and cost recovery. The
            last important consideration is that by 2030 the town will reach a
            population of 74,900 and long term the population of Aurora will top
            out at 90,000. Any way you look at it there is demand for a new pool
            but the model also includes updates that can make the existing
            aquatic facilities more useful and beneficial to residents. This
            will be the town's last aquatic facility and was outlined as a
            requirement by the master recreation plan, so it is important that
            it meets our long term needs.
          </dd>
          <dt>If so where is it logical to build?</dt>
          <dd>
            The big idea is that we need fewer facilities and that the
            facilities we have should have different tanks with differing water
            temperatures to properly service child/youth programs, sport
            programs, seniors, and special needs programs. So, for this reason
            building on to SARC makes the most sense. Couple this to the fact
            that tremendous cost efficiencies accrue to building on to an
            existing facility versus building new from start and considering
            that the growth and hospitality industry for Aurora is all in the
            north East section of town SARC is the logical choice.
          </dd>
          <dt>
            What is the best option based on the feasibility study findings?
          </dt>
          <dd>
            Part of this answer must consider how Aurora views itself and
            whether it aspires to be the regional hub for York Region North as
            we are told is part of the rationale for library square. Of the 1.5M
            people in your Region approximately 800,000 live in the north and
            include Richmond Hill, Vaughan, King City, Stouffville, Newmarket,
            and East Gwillimbury. The second part of this response must also
            consider whether the town sees itself as building a facility that
            services the population of Aurora attracting young families to live
            here but also attracting the surrounding area to play and shop in
            Aurora. If the answer is yes, then the Event facility option 50
            metre pool with flexible spectator seating for 900 is the best
            choice. This is because the building of a 50-metre pool will allow
            the current SARC pool to be reengineered into a warm water tank and
            renovated in such a way to maximize warm water programming. In turn
            the new pool will be designed with the community in mind and permit
            the rental of space to both Aurora and non-Aurora sport clubs
            driving rental income from selling space time as well as hosting
            regional, provincial and even some national events. If you look at
            the Feasibility study, the threshold cost recovery is maximized by
            building the larger event venue. A final critical consideration is
            that the larger pool has over 2,000 square feet of meeting, lobby
            and utility rooms that will benefit all the user groups of SARC
            including Hockey, Skating, Day Care and hopefully gym programming.
          </dd>
          <dt>
            Why is providing different tanks of water with differing water
            temperatures so important?
          </dt>
          <dd>
            User group needs vary widely as can be demonstrated by looking at
            the following groups: parent and tot, learn to swim, aquafit
            participants, special needs/adaptive P.E users and those of lane
            swimmers and competitive aquatic users. So, a facility with multiple
            tanks of varying temperatures is ideal. That’s why twining SARC
            makes so much sense. In a reengineered SARC the current tank could
            be converted into a warm water centre. The current lap pool
            temperature would be raised to 85 to 87 degrees. A ramp could be put
            in to facilitate special needs and adaptive P.E. As well this tank
            could be used for Aquafitness and extended to Learn to Swim and
            lifesaving classes. The current therapy pool would stay at 92
            degrees but be reengineered to include a therapy bubble bench,
            geysers and massage fountains. The current zero entry slide tank
            could be renovated to service parent and tot and learn to swim for 3
            to 6-year olds with a temperature of 86 to 88 degrees. <br />
            <br />
            The 10 lane 50 metre pool would be set at 81 to 82 degrees for
            training and lowered for competition. This would work well for
            aquatic clubs, masters swimming, Special Olympics and a good portion
            of the lane swimming community. A critical consideration is the fact
            that the addition of a new pool and updates to the existing pools
            allow for better access to time and space for all users throughout
            the day and evening.
          </dd>
          <dt>
            What components of the feasibility study demonstrate the value of
            programming expansion beyond organized sport?
          </dt>
          <dd>
            The trend in aquatic facilities is towards rectangular recreation.
            Aquatic facilities need to be built for the entire community and in
            order to maximize revenue potential, new fitness-based programs need
            to be continually created and then implemented. Many municipalities
            negate the opportunity for incremental revenue programs by building
            too small and not allowing incremental growth of the community or
            the flexibility to adapt the space for other programming expansion.
            The study talks about programming trends such as paddle board yoga,
            aqua cycle, aqua treadmills, resistive in water training, water
            running, underwater hockey, obstacle course and climbing walls to
            name a few. The study also identifies expanded opportunities for
            family aquatic recreation and use. It also encourages Aurora to
            expand its programming offering and the staff requirements to build
            such a program. Using a strategy linked to optimal temperature
            requirements by program area is needed. The study demonstrates that
            the larger facilities actually generate more cost recovery but are
            dependent on incremental programming and a larger pool of
            third-party renters.
          </dd>
          <dt>
            Does the revenue model really work and if so where are the
            efficiencies?
          </dt>
          <dd>
            Yes, the revenue models as presented are based on similar revenue
            sized communities primarily in the United States as developed by ISG
            over the last 10 years. The model is based on investing in highly
            efficient mechanical systems and building a staff complement that
            can develop incremental programs (in water and professional services
            such as physiotherapy, special needs and adaptive P.E). Ensuring
            that the town is staffed properly permitting time for the staff to
            build new programs is critical. The town must also be prepared to
            rent to third parties who reside outside of Aurora. The study
            demonstrates that the larger options (sport training/Event facility)
            actually generate more cost recovery than the current format 48%
            recovery versus 63% recovery.
          </dd>
          <dt>
            So why as a town of Aurora resident would I support a facility that
            in part will attract third party renters from northern York Region?
          </dt>
          <dd>
            Simply put a larger facility will give the town access to a larger
            more flexible facility footprint that is operationally more
            efficient (i.e. 48% recovery versus 63% recovery). The incremental
            size of the facility will be more than covered by third party
            renters and event hosting and hospitably revenue generation. The
            event facility as proposed has the potential to generate 18
            regional, provincial and national events, in the process generating
            6,200 room nights per year. This is a direct annual economic impact
            of $5.3M and $8M. The added revenue from regional users actually
            helps keep the user fees and membership fees for Aurora residents
            lower while maintaining priority use for residents.
          </dd>
          <dt>
            Are there government infrastructure programs that will help offset
            the capital costs?
          </dt>
          <dd>
            Yes, the government of Canada is working with its provincial
            counterparts on several grant programs for shovel ready programs.
            The Interprovincial Canada Infrastructure Program (ICIP) grant is
            the most relevant and focuses on yearly intakes with a ceiling of
            $50M dollars. This is the same grant program that Library square
            applied for but was rejected. The ICIP grant includes a 33%
            contribution from the federal government, 33% from the Ontario
            government and the balances from municipal, private and locally
            secured financing. The SARC expansion focused in part on creating a
            regional sport centre has a very good potential to be successful
            with the support of the York Region and the Aquatic NSO/PSO sport
            organizations. The goal at a minimum should be to get the
            incremental cost of the expanded facility or $16M covered by this
            grant program. <br />
            <br />A final critical consideration as part of the grant
            application process is that the larger event facility has over 2,000
            square feet of meeting, lobby and utility rooms that will benefit
            all the user groups of SARC including hockey, skating, child watch
            and hopefully gym programming. This will make SARC more functional
            for the whole community and a broad cross section of users. Again,
            building on the regional sport centre hub for North York Region
            (Stouffville, East Gwillimbury, Newmarket, Richmond Hill, King,
            Vaughan) will only strengthen our ICIP funding grant application.
          </dd>
          <dt>
            Why does it make sense to invest in sport &amp; recreation
            facilities during Covid-19?
          </dt>
          <dd>
            The government has over $3 Billion in unspent infrastructure
            funding. Those communities that have well developed plans that are
            considered shovel ready will be successful in winning these grants.
            Shovel ready requires fully developed architectural plans, approved
            provincial and municipal zoning permits and matching municipal
            funding in place. The very best projects require 6 to 8 months from
            approval to start of the program.
          </dd>
          <dt>What’s the potential timing of any decision?</dt>
          <dd>
            Hard to say given Covid-19 but we understand that the current
            council would like to make a recommendation in Q1 of 2021 ideally in
            time for the next ICIP intake?
          </dd>
          <dt>What can I do to demonstrate my support?</dt>
          <dd>
            Join the Aurora Aquatics, help us create a collective vision
            ”Swimming for Everyone”, attend our virtual town halls, and advocate
            in the community to town staff and town councillors.
          </dd>
        </dl>
      </section>
      <section className="section06" id="support">
        <div className="colorPattern patternTop"></div>
        <div className="banner01 banner "></div>
        <h1>Support Letters</h1>
        <ul>
          <li>
            <a href="/supportLetter-SwimCanada.pdf">Swim Canada</a>
          </li>
          <li>
            <a href="/supportLetter-SwimOntario.pdf">Swim Ontario</a>
          </li>
          <li>
            <a href="/supportLetter-artisticSwimmingCanada.pdf">
              Canada Artistic Swimming
            </a>
          </li>
          <li>
            <a href="/supportLetter-artisticswimming.pdf">
              Ontario Artistic Swimming
            </a>
          </li>
          <li>
            <a href="/supportLetter-waterpolocanada.pdf">Water Polo Canada</a>
          </li>
          <li>
            <a href="/supportLetter-mavericks.pdf">Mavericks Water Polo</a>
          </li>
        </ul>
      </section>
    </main>
  </Layout>
)

export default IndexPage
