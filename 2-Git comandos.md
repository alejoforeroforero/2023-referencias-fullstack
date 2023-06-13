      git version
      
- Clone a git repository from github

       git clone link
      
- Inititialize git

      git init
      
- Status

      git status -s
      
      
- Add files to the staging area

      git add name
      git add .
      
 - Creat a new commit:
      
       git commit -m 'version 1'
       git commit -m .
       
 - Check commits:

       git log --oneline
       
 - to navigate between commits:
 
       git reset --hard xxxxxx
       
       
- To pudate (afer making changes and creating a commit):

       git push

- To create a branch:

       git branch xxxxx

- To know wich branch we are:

       git branch

- To go to a specific branch:

       git checkout main
       
- To convert main as a HEAD branch and delete Master branch

       git checkout main              

       git symbolic-ref refs/remotes/origin/HEAD refs/remotes/origin/main
       
       git branch -d master
       
- to connect and update a repository online, just the first time:

       git remote add origin https://github.com/xxx xxxx
       git push -u origin master

- To merge (first go to the main branch, then put name of the branch to merge with main)

       git merge xxx

- To delete a branch

       git branch -d xxxx
       
- To go to a previous commit:

       git reset --hard HEAD~1
