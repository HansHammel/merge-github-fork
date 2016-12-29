#! /usr/bin/env node

/*
Usage: node mergeGithubFork https://github.com/someghname/somereponame.git

#done manual
#clone someones repo
git clone https://github.com/myghname/somereponame.git
cd somereponame
#done by this script
#merge forkes by gh-url
git remote add someghname https://github.com/someghname/somereponame.git
git fetch someghname
git checkout master
git merge someghname/master
git push
*/
/*
//TODO
The following syntaxes may be used with them:
ssh://[user@]host.xz[:port]/path/to/repo.git/
git://host.xz[:port]/path/to/repo.git/
http[s]://host.xz[:port]/path/to/repo.git/
ftp[s]://host.xz[:port]/path/to/repo.git/
An alternative scp-like syntax may also be used with the ssh protocol:
[user@]host.xz:path/to/repo.git/
This syntax is only recognized if there are no slashes before the first colon. This helps differentiate a local path that contains a colon. For example the local path foo:bar could be specified as an absolute path or ./foo:bar to avoid being misinterpreted as an ssh url.
The ssh and git protocols additionally support ~username expansion:
ssh://[user@]host.xz[:port]/~[user]/path/to/repo.git/
git://host.xz[:port]/~[user]/path/to/repo.git/
[user@]host.xz:/~[user]/path/to/repo.git/
For local repositories, also supported by Git natively, the following syntaxes may be used:
/path/to/repo.git/
file:///path/to/repo.git/
*/

var a = process.argv[2] || process.exit(1);
/*
var regex = /^https:\/\/github\.com\/(.*)\/(.*)\.git$/;
var result = s.match(regex);
var user = result[1];
var repo = result[2];
*/

var os = require("os");
var gh = require('parse-github-url');
var r = gh(a);
var s = 'https://github.com/' + r.repo + '.git'
var user = r.owner;
var repo = r.name;
var branch = r.branch;

const exec = require('child_process').exec;
//const exec = spawn('cmd', ['/s', '/c', command],  { stdio: 'inherit' } );
exec('git remote add ' + user + ' ' + s, (error, stdout, stderr) => {
    process.stdout.write(stdout);
    process.stderr.write(stderr);
    //console.log(`stdout: ${stdout}`);
    //console.log(`stderr: ${stderr}`);
    if (error) {
        console.log();
        console.error(`${error}`);
        return;
    }

    exec('git fetch  ' + user, (error, stdout, stderr) => {
        process.stdout.write(stdout);
        process.stderr.write(stderr);
        //console.log(`stdout: ${stdout}`);
        //console.log(`stderr: ${stderr}`);
        if (error) {
            console.log();
            console.error(`${error}`);
            return;
        }

        exec('git checkout master', (error, stdout, stderr) => {
            process.stdout.write(stdout);
            process.stderr.write(stderr);
            //console.log(`stdout: ${stdout}`);
            //console.log(`stderr: ${stderr}`);
            if (error) {
                console.log();
                console.error(`${error}`);
                return;
            }
            //TODO test strategies: ours theirs renormalize patience ignore-space-at-eol ignore-space-change ignore-all-space ignore-blank-lines
            //exec('git merge '+user+'/'+branch, (error, stdout, stderr) => {
            exec('git merge --no-commit -s recursive -X ignore-all-space ' + user + '/' + branch, (error, stdout, stderr) => {
                process.stdout.write(stdout);
                process.stderr.write(stderr);
                //console.log(`stdout: ${stdout}`);
                //console.log(`stderr: ${stderr}`);		
                if (error) {
                    console.log();
                    console.error(`${error}`);


                    /*
	    		exec('git log --graph --oneline', (error, stdout, stderr) => {
					  process.stdout.write(stdout);
					  process.stderr.write(stderr);
					  //console.log(`stdout: ${stdout}`);
					  //console.log(`stderr: ${stderr}`);
					  if (error) {
					  	console.log();
					    console.error(`${error}`);
					    return;
					  }
					});
					*/

                    exec('git status', (error, stdout, stderr) => {
                        process.stdout.write(stdout);
                        process.stderr.write(stderr);
                        //console.log(`stdout: ${stdout}`);
                        //console.log(`stderr: ${stderr}`);
                        if (error) {
                            console.log();
                            console.error(`${error}`);
                            return;
                        }

                        console.log();
                        console.log('PS: (maybe) remove the remote repository');
                        console.log('  (use "git remote rm ' + user + '")');

                    });

                    return;
                }


                exec('npm it', (error, stdout, stderr) => {
                    process.stdout.write(stdout);
                    process.stderr.write(stderr);
                    //console.log(`stdout: ${stdout}`);
                    //console.log(`stderr: ${stderr}`);
                    if (error) {
                        console.log();
                        console.error(`${error}`);
                        return;
                    }

                    exec('git commit --no-edit', (error, stdout, stderr) => {
                        process.stdout.write(stdout);
                        process.stderr.write(stderr);
                        //console.log(`stdout: ${stdout}`);
                        //console.log(`stderr: ${stderr}`);
                        if (error) {
                            console.log();
                            console.error(`${error}`);
                            return;
                        }

                        exec('git push origin master', (error, stdout, stderr) => {
                            process.stdout.write(stdout);
                            process.stderr.write(stderr);
                            //console.log(`stdout: ${stdout}`);
                            //console.log(`stderr: ${stderr}`);
                            if (error) {
                                console.log();
                                console.error(`${error}`);
                                return;
                            }
                        });

                    });

                });

            });

        });

    });

});