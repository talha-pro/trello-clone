import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import headerimage from "../assests/headerimage.svg"
import atlassian from "../assests/atlassian.svg"
import planning from "../assests/planning.png"
import fender from "../assests/fender.svg"
import google from "../assests/google.svg"
import kickstarter from "../assests/kickstarter.svg"
import natgeo from "../assests/natgeo.svg"
import appstore from "../assests/appstore.png"
import playstore from "../assests/playstore.png"
import collab from "../assests/collab.png"
import platform from "../assests/platform.png"
import sync from "../assests/sync.png"
import tasks from "../assests/tasks.png"
import mobile from "../assests/mobile.png"
import butler from "../assests/butler.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Hileets" />

    {/* Header Section */}

    <section className="header d-flex flex-column align-items-center justify-content-center">
      <div className="header__container container">
        <div className="row align-items-center">
          <div className="header__left col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 d-flex flex-column align-items-center justfiy-content-center">
            <h1 className="header__heading">
              Trello lets you work more collaboratively and get more done.
            </h1>
            <div className="header__text">
              Trello’s boards, lists, and cards enable you to organize and
              prioritize your projects in a fun, flexible, and rewarding way.
            </div>
          </div>
          <div className="header__right col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 offset-lg-1">
            <img src={headerimage} className="img-fluid"></img>
          </div>
        </div>
        <div className="space-3"></div>
        <div className="row align-items-center">
          <div className="header__form-wrapper col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
            <input
              className="header__email"
              type="email"
              placeholder="Email"
              required
            />
            <div className="btn btn-default d-flex align-items-center justify-content-center">
              Sign Up - It's Free!
            </div>
          </div>
        </div>
      </div>
      <div className="space-4"></div>
    </section>
    <div className="space-4"></div>

    {/* Tasks Section */}

    <section className="tasks d-flex flex-column align-items-center justify-content-center">
      <div className="tasks__container container">
        <div className="row align-items-center">
          <div className="tasks__left col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
            <h3>Work with any team</h3>
            <p>
              Whether it’s for work, a side project or even the next family
              vacation, Trello helps your team stay organized.
            </p>
            <div className="btn btn-default d-flex align-items-center justify-content-center">
              Start doing&nbsp;&rarr;
            </div>
          </div>
          <div className="tasks__right col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 offset-md-1">
            <img className="tasks__img img-fluid" src={tasks}></img>
          </div>
        </div>
      </div>
    </section>

    {/* Info Section  */}
    <div className="space-2"></div>
    <section className="info d-flex flex-column align-items-center justify-content-center">
      <div className="info__container container">
        <div className="row align-items-center">
          <div className="info__left col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
            <img className="info__img img-fluid" src={mobile}></img>
          </div>
          <div className="info__right col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h3>Information at a glance</h3>
            <p>
              Dive into the details by adding comments, attachments, due dates,
              and more directly to Trello cards. Collaborate on projects from
              beginning to end.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="space-4"></div>
    {/* Workflow Section */}

    <section className="workflow d-flex flex-column align-items-center justify-content-center">
      <div className="workflow__container container">
        <div className="row align-items-center no-gutters">
          <div className="workflow__left col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h3>Built-In Workflow Automation With Butler</h3>
            <p>
              Let the robots do the work! Boost productivity by unleashing the
              power of automation across your entire team with Butler, and
              remove tedious tasks from your to-do lists with:
            </p>
            <ul className="workflow__list d-flex flex-column align-items-start ">
              <li>Rule-Based Triggers</li>
              <li>Custom Card & Board Buttons</li>
              <li>Calendar Commands</li>
              <li>Due Date Commands</li>
            </ul>
          </div>
          <div className="workflow__right col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 offset-md-1">
            <img className="workflow__img img-fluid" src={butler}></img>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section  */}

    <section className="features d-flex flex-column align-items-center justify-content-center">
      <div className="features__container container">
        <div className="row d-flex flex-column align-items-center justify-content-center">
          <div className="features__content col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column align-items-center justify-content-center">
            <h3 className="features__heading">Trello your way</h3>
            <div className="features__sub-text">
              Use Trello the way your team works best. We've got the flexibility
              & features to fit any team's style.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="features__content col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <img className="features__photo img-fluid" src={collab} />
            <h5>The Team Playbook</h5>
            <div className="features__text">
              It’s easy to get your team up and running with Trello. We’ve
              collected all of the boards and tools you need to succeed in one
              handy resource.
            </div>
            <div className="btn btn-default d-flex align-items-center justify-content-center">
              Make A Game Plan
            </div>
          </div>
          <div className="features__content col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <img className=" features__img img-fluid" src={platform}></img>
            <h5>A Productivity Platform</h5>
            <div className="features__text">
              Integrate the apps your team already uses directly into your
              workflow. Power-Ups turn Trello boards into living applications to
              meet your team's unique business needs.
            </div>
            <div className="btn btn-default d-flex align-items-center justify-content-center">
              Power-Up your Workflow
            </div>
          </div>
          <div className="features__content col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <img className=" features__img img-fluid" src={sync}></img>
            <h5>Always In Sync</h5>
            <div className="features__text">
              No matter where you are, Trello stays in sync across all of your
              devices. Collaborate with your team anywhere, from sitting on the
              bus to sitting on the beach.
            </div>
            <div className="features__icons">
              <img className="features__icon img-fluid" src={appstore}></img>
              <img className="features__icon img-fluid" src={playstore}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="space-4"></div>

    {/* Companies Section  */}

    <section className="companies d-flex flex-column align-items-center justify-content-start">
      <div className="companies__container container">
        <div className="row ">
          <div className="companies__content d-flex flex-column align-items-center justify-content-center">
            <div className="space-4"></div>
            <h2>Work smarter with Trello</h2>
            <div className="companies__text">
              Companies of all shapes and sizes are using Trello
            </div>
            <div className="companies__list">
              <img className="companies__item img-fluid" src={kickstarter} />
              <img className="companies__item img-fluid" src={natgeo} />
              <img className="companies__item img-fluid" src={google} />
              <img className="companies__item img-fluid" src={fender} />
            </div>
            <div className="btn btn-default d-flex align-items-center justify-content-center">
              Find out how&nbsp;&rarr;
            </div>
            <div className="space-4"></div>
          </div>
        </div>
      </div>
    </section>
    <div className="space-4"></div>

    {/* Planning Section  */}

    <section className="planning d-flex flex-column justify-content-center">
      <div className="planning__container container-fluid">
        <div className="row">
          <div className="planning__content col-12 d-flex flex-column align-items-center">
            <div className="planning__text-wrapper">
              <div className="planning__heading">Start Planning Today</div>
              <div className="planning__text">
                Sign up and become one of the millions of people around the
                world using Trello to get more done.
              </div>
              <div className="space-3"></div>
              <div className="btn btn-default d-flex align-items-center justify-content-center">
                Get Started - It's Free!
              </div>
            </div>
            <img className="planning__image img-fluid" src={planning}></img>
          </div>
        </div>
      </div>
    </section>
    <div className="space-4"></div>

    {/* Footer Section  */}

    <section className="footer d-flex flex-column align-items-center justify-content-center">
      <div className="footer__container container">
        <div className="row">
          <div className="footer__content col-12 d-flex flex-column align-items-center justify-content-around">
            {/* <div className="footer__button btn btn-default">English</div> */}
            <div className="dropdown">
              <button
                className="btn btn-default dropdown-toggle"
                type="button"
                id="menu1"
                data-toggle="dropdown"
              >
                English
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
                <li role="presentation">
                  <a role="menuitem" tabindex="-1" href="#">
                    HTML
                  </a>
                </li>
                <li role="presentation">
                  <a role="menuitem" tabindex="-1" href="#">
                    CSS
                  </a>
                </li>
                <li role="presentation">
                  <a role="menuitem" tabindex="-1" href="#">
                    JavaScript
                  </a>
                </li>
                <li role="presentation" className="divider"></li>
                <li role="presentation">
                  <a role="menuitem" tabindex="-1" href="#">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__links">
              <div className="footer__item">Templates</div>
              <div className="footer__item">Pricing</div>
              <div className="footer__item">Apps</div>
              <div className="footer__item">Jobs</div>
              <div className="footer__item">Blog</div>
              <div className="footer__item">Developers</div>
              <div className="footer__item">About</div>
              <div className="footer__item">Help</div>
              <div className="footer__item">Legal</div>
              <div className="footer__item">Cookie Settings</div>
              <div className="footer__item">Privacy</div>
            </div>
            <div className="space-1"></div>
            <img className="footer__atlassian img-fluid" src={atlassian}></img>
            <div className="space-1"></div>
            <div className="footer__copy">
              &copy; Copyright 2020. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
