# MergeGithubFork


Usage
=====

#merge-github-fork https://github.com/someghname/somereponame.git


merge-github-fork - Automated git commands for merging forks
=================================================

## done manually

>#clone someones repo
>git clone https://github.com/myghname/somereponame.git
>cd somereponame

## The script essentially does this:

>#merge forkes by gh-url
>git remote add someghname https://github.com/someghname/somereponame.git
>git fetch someghname
>git checkout master
>git merge someghname/master
>git push

