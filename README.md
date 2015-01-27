documents
=========

Documents app for ownCloud

An ownCloud app to work with office documents alone and/or collaboratively.

[![Build Status](https://travis-ci.org/owncloud/documents.svg?branch=master)](https://travis-ci.org/owncloud/documents)

### Known issues ###
**Problem**: Editor doesn't open. Spinner spins for ages.  
**Solution**: Try to disable gzip for Documents app by adding the following line to your .htaccess:  
`SetEnvIf Request_URI .*/apps/documents/ajax/.* no-gzip dont-vary`

**Problem**: Doc(x) support doesn't work  
**Solution**: Install at least  `libreoffice-common` and  `libreoffice-writer` packages for your distro.  
If you don't want to mess around with dependencies, you need simply install `unoconv` package. It will do the trick for you.

### How to add more fonts ###
+ Upload font files to **documents/css/fonts** directory
+ Edit **documents/css/fonts.css** adding `@font-face` rule for each uploaded file 


### WebODF upgrade ###
1. Clone WebODF:

        git clone https://github.com/kogmbh/WebODF.git webodf
        cd webodf
        git checkout 8d8fc0216874b9dd9e3e3eef68dd2474a11f02f3
        cd ..

2. Apply patches to WebODF

        ./src/patchWebODF.sh webodf/

3. Build WebODF

        mkdir build
        cd build
        cmake ../webodf
        make webodf-debug.js-target editor-compiled.js-target

4. Refresh code and create a new branch:

        cd /path/to/documents
        git checkout master
        git pull --rebase
        git checkout -b new-branch

5. Run upgrade script:

        ./src/updateWebODF.sh /path/to/WebODF/build/dir

6. Resolve confilcts in patches (if any). Commit changes.
7. Update patches in `/path/to/documents/src/patches` according to conflicts. Commit changes.
8. Test UI. Fix glitches by updating CSS. Commit changes.
9. Run locale extraction script:

        ./src/updateWebODF.sh

10. Commit changes
11. Push the branch for testing
12. You are done.
