const Settings = require('./lib/settings')
const mergeArrayByName = require('./lib/mergeArrayByName')
const fs = require('fs')
const YAML = require('yaml')
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({ auth: process.env.GH_TOKEN });

const file = fs.readFileSync('./settings.yml', 'utf8')
const config = YAML.parse(file)


const repo = {
    owner: 'artificialinc',
    repo: 'nick-test-adapter'
}

Settings.sync(octokit, repo, config)
