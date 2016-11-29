# Usage

> merge-github-fork https://github.com/someghname/somereponame.git

## done manually ##

```bash
#clone someones repo
git clone https://github.com/myghname/somereponame.git
cd somereponame
```

## The script essentially does this: ##

```bash
#merge forkes by gh-url
git remote add someghname https://github.com/someghname/somereponame.git
git fetch someghname
git checkout master
git merge someghname/master
git push
```
