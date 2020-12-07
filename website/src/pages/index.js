import React from 'react';
import AppLayout from '../components/AppLayout';
import AppCard from '../components/AppCard';
import CreateTests from '../components/CreateTests';
import RunTests from '../components/RunTests';
import codeceptjsBddFrameworkImage from '../images/codeceptbdd-arch.png';
import howImage from '../images/How.png';
import BDD from '../images/BDD.png';
import autoRetry from '../images/autoRetry.png';
import driversImage from '../images/driverAgnostic.png';
import pluginBasedImage from '../images/pluginBased.png';
import cucumber from '../images/cucumber1.png';
import quickStartYt from '../images/quick-setup-yt.png';
import runParallelYt from '../images/run-parallel-yt.png';
import runMultiYt from '../images/run-multi-yt.png';
import runSauceYt from '../images/run-sauce-yt.png';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Hidden from '@material-ui/core/Hidden';
import { Link as GatsbyLink } from 'gatsby';

import multibrowsers from '../images/multi-browsers.png';
import saucelabs from '../images/saucelabs1.png';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DomainIcon from '@material-ui/icons/Domain';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  card: {
    height: '100%',
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: 'red',
  },
  arch: {
    paddingTop: 30,
  },
}));

const renderAppCards = () => {
  const appCardData = [
    {
      size: 4,
      title: 'Why BDD?',
      description:
        'BDD is a great way to colloborate within teams & with stakeholders to create shared understanding of how the product should behave, capture concrete examples and create an executable & living specification on-the-fly.',
      link: 'https://medium.com/hackernoon/bdd-in-3-minutes-c3f8fc022237',
      image: BDD,
    },
    {
      size: 4,
      title: 'Write Feature Files',
      description:
        'CodeceptJs BDD integrates Cucumber to write Gherkin Feature Files. Cucumber is a popular collaboration tool used by many teams practiving BDD to capture requirements and create executable specifications.',
      link: '/02-02-e2e-bdd-cucumber/1-feature/',
      image: cucumber,
    },
    {
      size: 4,
      title: 'Execute On Cloud',
      description:
        'CodeceptJs BDD integrates Sauce Labs to execute tests on 900+ Desktop/Mobile browses, OS & Devices combinations. Tests can be executed locally or on Sauce Labs Browsers for broader coverage.',
      link: '/03-02-run-on-saucelabs/3-run-on-saucelabs/',
      image: saucelabs,
    },
    {
      size: 3,
      title: 'Driver Agnostic',
      description:
        'Run your tests via WebDriver and Playwright. The code is the same. It is easy to change the driver through configuration. Codecpetjs-BDD supports Pupetter, Headless Chrome, Selenium Webdriver and Webdriver IO.',
      link: 'https://codecept.io/basics/#architecture',
      image: driversImage,
    },
    {
      size: 3,
      title: 'Reduced Flakiness',
      description:
        'Codeceptjs has in-built Smart Wait and Auto Retry features for the elements that do not load in-time or elements that fails. Codeceptjs-BDD framework has configured these features that reduces the UI Test Flakiness at low level during DOM Element evaluation.',
      link: 'https://codecept.io/plugins/#retryfailedstep',
      image: autoRetry,
    },
    {
      size: 3,
      title: 'Plugin Based',
      description:
        'Codeceptjs is a plugin based architecture. You can create helpers and plugins for your need and easily plug in to the framework. Codeceptjs-bdd implements two plugins: codeceptjs-share to share config and codeceptjs-saucelabs to integrate Sauce Labs.',
      link:
        'https://github.com/salesforce/codeceptjs-bdd/tree/develop/packages',
      image: pluginBasedImage,
    },
    {
      size: 3,
      title: 'Multibrowsers | Parallel',
      description:
        'Codeceptjs BDD provides an ability to run BDD Feaure files all in Parallel on Single browser or can run same set of tests in Parallel but on different browsers/OS combo (multile browers) on Sauce Labs. It offers greate Test Execution Coverage for your App.',
      link: '/03-01-run-locally/5-run-on-multi-browsers/',
      image: multibrowsers,
    },
    {
      size: 3,
      title: 'Automate Web Components',
      description:
        'Webdriver & Playwright E2E Tests with Simplified Locators to locate Shadow Elements. Codeceptjs-BDD automates your application built with Web Components or Salesforce LWC.',
      firstLinkName: 'E2E Automation Example',
      link:
        '/03-03-webcomponents/1-webcomponents-playwright-webdriver-example/',
      image: require('../images/lwc-sf.png'),
    },
    {
      size: 3,
      title: 'Integration Tests',
      description:
        'One framework, mulitple solutions. Use Codeceptjs-BDD to automate both of your Integration tests and E2E Tests. Codecetpsj-BDD can run both, Mocha and Cucumber BDD, with the single common command.',
      firstLinkName: 'Learn More',
      link: '/02-01-integration-tests/1-integration-tests/',
      image: require('../images/imocha.png'),
    },
    {
      size: 3,
      title: 'E2E BDD Tests',
      description:
        'Choose to write your E2E Tests either with Classical Mocha styled tests or modern Cucumber BDD Feature files acceptance tests. Codeceptjs-BDD supports both, mixed of, Mocha-style accetpance tests and Cucumber Fetures.',
      firstLinkName: 'Learn More',
      link: '/02-02-e2e-bdd-cucumber/1-feature/',
      image: require('../images/e2e.png'),
    },
    {
      size: 3,
      title: 'Page Objects',
      description:
        'Modularize your UI Automation with Page Objects. Each page of your App can be represented as a Page Object Class, and Class can be extended as needed.',
      firstLinkName: 'Learn More',
      link: '/05-page-objects/1-page-objects/',
      image: require('../images/po.png'),
    },
    {
      size: 3,
      title: 'Quick Setup Wizard',
      description:
        'Quicky setup BDD framework for your App. Codecept-BDD implemetns the Interactive CLI to quickly setup the BDD Framework, integration with Sauce Labs and provides set of example Automated Feature files.',
      link:
        'https://www.youtube.com/watch?time_continue=1&v=-x9kFV66-X4&feature=emb_logo',
      firstLinkName: 'Watch in Action',
      icon: <YouTubeIcon color="secondary" />,
      image: quickStartYt,
    },
    {
      size: 3,
      title: 'Parallel Executions',
      description:
        'Run all your Feature files in Parallel. Codeceptjs-BDD automatically calculates number of threads to spun based on # of Features. You can choose to run them on either Sauce Labs or Locally installed browsers.',
      link: 'https://www.youtube.com/watch?v=he0_wn-xPGI&feature=emb_logo',
      firstLinkName: 'Watch in Action',
      icon: <YouTubeIcon color="secondary" />,
      image: runParallelYt,
    },
    {
      size: 3,
      title: 'Multi Browsers',
      description:
        'Run your scenarios on Multiple Browsers in Parallel, including multiple versions of same brwoser or different browsers and different OS combinations on Sauce Labs. Boost your Test Execution coverage.',
      link: 'https://www.youtube.com/watch?v=njOlOJ07Dxw',
      firstLinkName: 'Watch in Action',
      icon: <YouTubeIcon color="secondary" />,
      image: runMultiYt,
    },
    {
      size: 3,
      title: 'Run on Sauce Labs',
      description:
        'Codeceptjs-BDD framework integrates the cloud based platform Sauce Labs to execute scenarios on 900+ Desktop/Mobile browses, OS & Devices combinations, providing Greater Scenarios Execution Coverage.',
      link: 'https://www.youtube.com/watch?v=ugCjMOJlClc',
      firstLinkName: 'Watch in Action',
      icon: <YouTubeIcon color="secondary" />,
      image: runSauceYt,
    },
  ];

  return appCardData.map(cardData => (
    <Grid item sm={cardData.size}>
      <AppCard {...cardData} />
    </Grid>
  ));
};

const renderCardDataWithActions = classes => {
  const cardDataWithActions = [
    {
      cardHeader: {
        avatar: (
          <Avatar aria-label="architecture" className={classes.avatar}>
            {' '}
            <DomainIcon />{' '}
          </Avatar>
        ),
        title: 'Framework Architecture',
        subheader: 'Codeceptjs BDD',
      },
      cardMedia: {
        className: classes.media,
        image: codeceptjsBddFrameworkImage,
        title: 'Architecture',
      },
    },
    {
      cardHeader: {
        avatar: (
          <Avatar aria-label="how to usage" className={classes.avatar}>
            <VisibilityIcon />{' '}
          </Avatar>
        ),
        title: 'Flow',
        subheader: 'Framework',
      },
      cardMedia: {
        className: classes.media,
        image: howImage,
        title: 'How To',
      },
    },
  ];

  return cardDataWithActions.map(cardData => (
    <Grid item xs={12} className={classes.arch}>
      <Card className={classes.card}>
        <CardHeader {...cardData.cardHeader} />
        <CardMedia {...cardData.cardMedia} />
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
            href="01-01-getting-started/1-quick-start/"
          >
            Quick Start
          </Button>

          <Button
            variant="contained"
            size="large"
            color="secondary"
            href="2-your-first-scenario/"
          >
            Automate First Scenario
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ));
};

const IndexPage = () => {
  const classes = useStyles();

  return (
    <AppLayout title="Codeceptjs-BDD">
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={1}>
            <Grid key={1} item>
              <Typography variant="h4" component="h2" gutterBottom>
                Codeceptjs BDD
              </Typography>
              <Typography variant="overline" display="block" gutterBottom>
                UI Automation Framework (JS/TS) integrated with WebDriver,
                Playwright, Selenoid, Saucelabs, Appium & BDD Cucumber and
                Mocha.
              </Typography>
            </Grid>

            <Hidden xsDown>
              <Grid key={2} item>
                <GatsbyLink to="01-01-getting-started/1-quick-start/">
                  <Button variant="contained" size="large" color="primary">
                    Quick Start
                  </Button>
                </GatsbyLink>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>

      <div className={classes.root}>
        <br></br>
        <Divider />
        <br></br>
        <CreateTests />
        <br></br>
        <br></br>
        <RunTests />
        <Grid container spacing={5} className={classes.arch}>
          {renderAppCards()}
        </Grid>
        {renderCardDataWithActions(classes)}
      </div>
    </AppLayout>
  );
};

export default IndexPage;
