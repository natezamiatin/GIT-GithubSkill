import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {/* Here is will be my all commands about Git and GitHub 
         ## Working with Git

            ### Quick Start
            git clone <url> 					# Clone directory
            git checkout -b <new-branch> 		# Create new local branch
            git push -u origin <new-branch> 	# Sync local branch with remote
            git checkout <branch> 				# Checkout branch
            git push origin <branch> 			# Push branch to remote

            git branch -d <branchname>   	# deletes local branch
            git push origin :<branchname>	# deletes remote branch

            git subtree push --prefix docs origin gh-pages  # push docs as subtree to gh-pages */}
        </p>
            </header>

            <h1>
              Branch its when we create a new line on the tree 
              Merge when we add Branch to the master line 
              Fork its a clone whole a repo and added to your account 
              Pull request mean send your changes to the main repo 

            </h1>
    </div>
  );
}

export default App;
