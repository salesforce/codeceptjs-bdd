import React from "react"
import Layout from "../components/layout"
import logo from '../images/codecept-e2e-logo.jpg';
import codeceptBenefit_1 from '../images/codecept-benefit-1.png';
import codeceptBenefit_2 from '../images/codecept-benefit-2.png';
import codeceptBenefit_3 from '../images/codecept-benefit-3.png';


const imageStyles = {
    maxWidth: '80%',
    maxHeight: '50%'
};

const IndexPage = () => (
  <Layout>
      <h1>CodeceptJS E2E</h1>
      <p>E2E Framework with Cucumber and Saucelabs cloud</p>
      <img style={imageStyles} src={logo} alt="codeceptjs e2e logo"></img>
      <p>This framework contains Gherkin BDD Tests with CodeceptJS & uses Should.JS assertion library. Intgrated with Saucelabs to run on Multibrowsers in Parallel</p>
      <ul>
          <li>
              <p><strong>Why BDD?</strong> Read my Medium post <a href="https://medium.com/hackernoon/bdd-in-3-minutes-c3f8fc022237" rel="nofollow">here</a></p>
          </li>
          <li>
              <p>Run All feature files in <strong>Parallel</strong></p>
          </li>
          <li>
              <p>Run All feature files on <strong>Multi-Browsers - run them all in Parallel</strong></p>
          </li>
          <li>
              <p>Scenarios are written in <strong>Cucumber Gherkin BDD Syntax</strong>, a.k.a <code>.feature</code> files. <a href="https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Imperative+v.+Declarative+Testing+Scenarios" rel="nofollow">Prefer writing Declartive Test Scenarios</a></p>
          </li>
          <li>
              <p>Run on <strong>SauceLabs</strong>. Single browser or Multi-Browsers in Parallel</p>
          </li>
          <li>
              <p>Uses <a href="https://shouldjs.github.io/" rel="nofollow">Should.js</a> Assertions Library. Various assertions with examples are available <a href="https://github.com/gkushang/codeceptjs-e2e/blob/master/packages/codeceptjs-cucumber/acceptance/step_definitions/search/github.steps.js">here</a></p>
          </li>
          <li>
              <p>Reduces Flakiness with <strong>RetryFailedSteps</strong> plugin and a Webdriver's <strong>SmartWait</strong></p>
          </li>
          <li>
              <p>Page objects follow <code>&lt;name_of_page&gt;.page.js</code> naming pattern, and created under <a href="https://github.com/gkushang/codeceptjs-e2e/tree/master/packages/codeceptjs-cucumber/acceptance/pages/">pages</a> directory</p>
          </li>
          <li>
              <p>Step Definitions files follows <code>&lt;name_of_step&gt;.steps.js</code> naming pattern, and created under <a href="https://github.com/gkushang/codeceptjs-e2e/tree/master/packages/codeceptjs-cucumber/acceptance/step_definitions">step_definitions</a> directory</p>
          </li>
          <li>
              <p><strong>Soft Assertions:</strong> Collect more errors in a single run rather than failing test at first failure!</p>
          </li>
      </ul>
      <h2>Benefits of this Framework</h2>
      <img style={imageStyles} src={codeceptBenefit_1} alt="codeceptjs e2e benefit"></img>
      <img style={imageStyles} src={codeceptBenefit_2} alt="codeceptjs e2e benefit"></img>
      <img style={imageStyles} src={codeceptBenefit_3} alt="codeceptjs e2e benefit"></img>
  </Layout>
)

export default IndexPage
