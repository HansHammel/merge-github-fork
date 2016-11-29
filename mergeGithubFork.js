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

var s = process.argv[2] || process.exit(1);
var regex = /^https:\/\/github\.com\/(.*)\/(.*)\.git$/
var result = s.match(regex);
var user = result[1];
var repo = result[2];

const exec = require('child_process').exec;
exec('git remote add '+user+' '+s, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
  
  exec('git fetch  '+user, (error, stdout, stderr) => {
	  if (error) {
	    console.error(`exec error: ${error}`);
	    return;
	  }
	  console.log(`stdout: ${stdout}`);
	  console.log(`stderr: ${stderr}`);
  
	  exec('git checkout master', (error, stdout, stderr) => {
		  if (error) {
		    console.error(`exec error: ${error}`);
		    return;
		  }
		  console.log(`stdout: ${stdout}`);
		  console.log(`stderr: ${stderr}`);
		  
		  exec('git merge '+user+'/master', (error, stdout, stderr) => {
			  if (error) {
			    console.error(`exec error: ${error}`);
			    return;
			  }
			  console.log(`stdout: ${stdout}`);
			  console.log(`stderr: ${stderr}`);
			  
			  exec('git push', (error, stdout, stderr) => {
				  if (error) {
				    console.error(`exec error: ${error}`);
				    return;
				  }
				  console.log(`stdout: ${stdout}`);
				  console.log(`stderr: ${stderr}`);
				});
			  
			});
		  
		});
	  
	});
  
});