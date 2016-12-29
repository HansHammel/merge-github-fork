merge-github-fork - Automated git commands for merging forks
============================================================

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
