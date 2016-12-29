merge-github-fork - Automated git commands for merging forks
============================================================

[![NPM](https://nodei.co/npm/merge-github-fork.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/merge-github-fork/) 
[![NPM](https://nodei.co/npm-dl/merge-github-fork.png?months=9&height=3)](https://nodei.co/npm/merge-github-fork/)

[![npm version](https://img.shields.io/npm/v/merge-github-fork.svg)](https://www.npmjs.com/package/merge-github-fork)
[![npm license](https://img.shields.io/npm/l/merge-github-fork.svg)](https://www.npmjs.com/package/merge-github-fork)
[![npm download](https://img.shields.io/npm/dm/merge-github-fork.svg)](https://www.npmjs.com/package/merge-github-fork)
[![npm download](https://img.shields.io/npm/dt/merge-github-fork.svg)](https://www.npmjs.com/package/merge-github-fork)
[![Package Quality](http://npm.packagequality.com/shield/merge-github-fork.svg)](http://packagequality.com/#?package=merge-github-fork)
[![Inline docs](http://inch-ci.org/github/HansHammel/merge-github-fork.svg?branch=master)](http://inch-ci.org/github/HansHammel/merge-github-fork)

[![david dependency](https://img.shields.io/david/HansHammel/merge-github-fork.svg)](https://david-dm.org/HansHammel/merge-github-fork)
[![david devDependency](https://img.shields.io/david/dev/HansHammel/merge-github-fork.svg)](https://david-dm.org/HansHammel/merge-github-fork)
[![david optionalDependency](https://img.shields.io/david/optional/HansHammel/merge-github-fork.svg)](https://david-dm.org/HansHammel/merge-github-fork)
[![david peerDependency](https://img.shields.io/david/peer/HansHammel/merge-github-fork.svg)](https://david-dm.org/HansHammel/merge-github-fork)

### *Breaking change! >= v2.0.0 runs npm install & npm test to ensure nothing is broken*

# Install

version 1.1.0 without `npm test`

```sh
npm install merge-github-fork@1.1.0 -g
```

or latest version running `npm test` to ensure nothing is broken after merge  
(obviously only for node projects that have a passing test suite!)

```sh
npm install merge-github-fork -g
```

or

```sh
npm install -g https://github.com/HansHammel/MergeGithubFork.git
```

##  manually ##

```bash
#clone someones repo
git clone https://github.com/myghname/somereponame.git
cd somereponame
```

# Usage

	merge-github-fork https://github.com/someghname/somereponame.git
	
or

	mgf https://github.com/someghname/somereponame.git#branch

Now (>=v1.1.0) supports urls like `owner/repo#branch` or `git://github.com/owner/repo.git#branch`

Internally `https://github.com/...` urls are used!

Own server urls are not supported!

## The script essentially does this: ##

```bash
#merge forkes by gh-url
git remote add someghname https://github.com/someghname/somereponame.git#branch # no branch defaults to master
git fetch someghname
git checkout master
git merge -s recursive -X ignore-all-space someghname/branch # while branch defaults to master
git status # if fails
npm it # >=v2.0.0
git push origin master
```

### TODO
- [ ] add no push option
- [ ] add no test option (for version >2)
- [ ] color
- [ ] target branch
