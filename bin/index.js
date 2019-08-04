#!/usr/bin/env node

const Card = require('npmcard')

const card = new Card()

const user = {
  name: 'Osmond van Hemert',
  npm: 'ovhemert',
  github: 'ovhemert',
  twitter: 'osmondvanhemert',
  linkedin: 'osmondvanhemert',
  web: 'https://www.osmondvanhemert.nl'
}

const title = card.chalk.cyan
const link = card.chalk.cyan
const label = card.chalk.white.bold
const text = card.chalk.white

card
  .setHeader(title(user.name))
  .addRow([label('    Work:'), text(`Software Architect / Engineer / Open Source Geek`)])
  .addRow([label('     NPM:'), link(`https://www.npmjs.com/~${user.npm}`)])
  .addRow([label('  GitHub:'), link(`https://github.com/${user.github}`)])
  .addRow([label(' Twitter:'), link(`https://twitter.com/${user.twitter}`)])
  .addRow([label('LinkedIn:'), link(`https://linkedin.com/in/${user.linkedin}`)])
  .addRow([label('     Web:'), link(`${user.web}`)])
  .addRowEmpty()
  .addRow([label('   Card:'), text(`npx ${user.npm}`)])
  .show()
