import React from "react"
import AppLayout from "../components/AppLayout"
import AppCard from "../components/AppCard"
import codeceptjsBddFrameworkImage from "../images/codeceptbdd-arch.png"
import howImage from "../images/How.png"
import BDD from "../images/BDD.png"
import autoRetry from "../images/autoRetry.png"
import driversImage from "../images/driverAgnostic.png"
import pluginBasedImage from "../images/pluginBased.png"
import cucumber from "../images/cucumber1.png"
import quickStartYt from "../images/quick-setup-yt.png"
import runParallelYt from "../images/run-parallel-yt.png"
import runMultiYt from "../images/run-multi-yt.png"
import runSauceYt from "../images/run-sauce-yt.png"
import YouTubeIcon from "@material-ui/icons/YouTube"

import multibrowsers from "../images/multi-browsers.png"
import saucelabs from "../images/saucelabs1.png"
import { Divider } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Avatar from "@material-ui/core/Avatar"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import DomainIcon from "@material-ui/icons/Domain"
import VisibilityIcon from "@material-ui/icons/Visibility"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  card: {
    height: "100%",
    width: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: "red",
  },
  arch: {
    paddingTop: 30,
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <AppLayout>
      <div className={classes.root}>
        <Typography variant="h4" component="h2" gutterBottom>
          Codeceptjs BDD
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          CODECEPTJS BDD Framework integrated with Cucumber and Saucelabs cloud
        </Typography>

        <Divider />
        <br></br>

        <Typography
          variant="h6"
          color="gray"
          display="block"
          className={classes.title}
          gutterBottom
        >
          Codeceptjs-BDD makes acceptance and regression testing of modern web
          apps faster, more collaborative and easier to scale.
        </Typography>

        <Grid container spacing={5} className={classes.arch}>
          <Grid item sm={4}>
            <AppCard
              title="Why BDD?"
              description="BDD is a great way to colloborate within teams & with stakeholders to create shared understanding of how the product should behave, capture concrete examples and create an executable & living specification on-the-fly."
              link="https://medium.com/hackernoon/bdd-in-3-minutes-c3f8fc022237"
              image={BDD}
            />
          </Grid>

          <Grid item sm={4}>
            <AppCard
              title="Write Feature Files"
              description="CodeceptJs BDD integrates Cucumber to write Gherkin Feature Files. Cucumber is a popular collaboration tool used by many teams practiving BDD to capture requirements and create executable specifications."
              link="/3-bdd-cucumber/1-feature/"
              image={cucumber}
            />
          </Grid>

          <Grid item sm={4}>
            <AppCard
              title="Execute On Cloud"
              description="CodeceptJs BDD integrates Sauce Labs to execute tests on 900+ Desktop/Mobile browses, OS & Devices combinations. Tests can be executed locally or on Sauce Labs Browsers for broader coverage."
              link="/execution/3-run-on-saucelabs/"
              image={saucelabs}
            />
          </Grid>
        </Grid>

        <Grid container spacing={5} className={classes.arch}>
          <Grid item sm={3}>
            <AppCard
              title="Driver Agnostic"
              description="Run your tests via WebDriver, Puppeteer, TestCafe, Protractor, Appium. The code is the same. It is easy to change the driver through configuration. Codecpetjs-BDD supports Pupetter, Headless Chrome, Selenium Webdriver and Webdriver IO."
              link="https://codecept.io/plugins/#retryfailedstep"
              image={driversImage}
            />
          </Grid>

          <Grid item sm={3}>
            <AppCard
              title="Reduced Flakiness"
              description="Codeceptjs has in-built Smart Wait and Auto Retry features for the elements that do not load in-time or elements that fails. Codeceptjs-BDD framework has configured these features that reduces the UI Test Flakiness at low level during DOM Element evaluation."
              link="https://codecept.io/plugins/#retryfailedstep"
              image={autoRetry}
            />
          </Grid>

          <Grid item sm={3}>
            <AppCard
              title="Plugin Based"
              description="Codeceptjs is a plugin based architecture. You can create helpers and plugins for your need and easily plug in to the framework. Codeceptjs-bdd implements two plugins: codeceptjs-share to share config and codeceptjs-saucelabs to integrate Sauce Labs."
              link="https://github.com/gkushang/codeceptjs-bdd/tree/develop/packages"
              image={pluginBasedImage}
            />
          </Grid>

          <Grid item sm={3}>
            <AppCard
              title="Multibrowsers | Parallel"
              description="Codeceptjs BDD provides an ability to run BDD Feaure files all in Parallel on Single browser or can run same set of tests in Parallel but on different browsers/OS combo (multile browers) on Sauce Labs. It offers greate Test Execution Coverage for your App."
              link="/5-execution/5-run-on-multi-browsers/"
              image={multibrowsers}
            />
          </Grid>

          <Grid item sm={3}>
            <AppCard
              title="Quick Setup Wizard"
              description="Quicky setup BDD framework for your App. Codecept-BDD implemetns the Interactive CLI to quickly setup the BDD Framework, integration with Sauce Labs and provides set of example Automated Feature files."
              link="https://www.youtube.com/watch?time_continue=1&v=OGrn1ejyb-k&feature=emb_logo"
              firstLinkName="Watch in Action"
              icon={<YouTubeIcon color="secondary" />}
              image={quickStartYt}
            />
          </Grid>

          <Grid item sm={3}>
            <AppCard
              title="Parallel Executions"
              description="Run all your Feature files in Parallel. Codeceptjs-BDD automatically calculates number of threads to spun based on # of Features. You can choose to run them on either Sauce Labs or Locally installed browsers."
              link="https://www.youtube.com/watch?v=he0_wn-xPGI&feature=emb_logo"
              firstLinkName="Watch in Action"
              icon={<YouTubeIcon color="secondary" />}
              image={runParallelYt}
            />
          </Grid>

          <Grid item sm={3}>
            <AppCard
              title="Multi Browsers | Parallel"
              description="Run your scenarios on Multiple Browsers in Parallel, including multiple versions of same brwoser or different browsers and different OS combinations on Sauce Labs. Boost your Test Execution coverage."
              link="https://www.youtube.com/watch?v=njOlOJ07Dxw"
              firstLinkName="Watch in Action"
              icon={<YouTubeIcon color="secondary" />}
              image={runMultiYt}
            />
          </Grid>

          <Grid item sm={3}>
            <AppCard
              title="Run on Sauce Labs"
              description="Codeceptjs-BDD framework integrates the cloud based platform Sauce Labs to execute scenarios on 900+ Desktop/Mobile browses, OS & Devices combinations, providing Greater Scenarios Execution Coverage."
              link="https://www.youtube.com/watch?v=ugCjMOJlClc"
              firstLinkName="Watch in Action"
              icon={<YouTubeIcon color="secondary" />}
              image={runSauceYt}
            />
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.arch}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="architecture" className={classes.avatar}>
                  <DomainIcon />
                </Avatar>
              }
              title="Framework Architecture"
              subheader="Codeceptjs BDD"
            />
            <CardMedia
              className={classes.media}
              image={codeceptjsBddFrameworkImage}
              title="Architecture"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>

            <CardActions>
              <Button
                variant="contained"
                size="large"
                color="primary"
                href="1-getting-started/installation/"
              >
                Getting Started
              </Button>

              <Button
                variant="contained"
                size="large"
                color="secondary"
                href="1-getting-started/setup-framework/"
              >
                Quick Setup
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} className={classes.arch}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="how to usage" className={classes.avatar}>
                  <VisibilityIcon />
                </Avatar>
              }
              title="Flow"
              subheader="Framework"
            />
            <CardMedia
              className={classes.media}
              image={howImage}
              title="How To"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>

            <CardActions>
              <Button
                variant="contained"
                size="large"
                color="primary"
                href="1-getting-started/installation/"
              >
                Getting Started
              </Button>

              <Button
                variant="contained"
                size="large"
                color="secondary"
                href="1-getting-started/setup-framework/"
              >
                Quick Setup
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </div>
    </AppLayout>
  )
}

export default IndexPage
