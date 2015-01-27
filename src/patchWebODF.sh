#!/bin/bash
# Copies the needed files from the build dir of the WebODF pullbox branch
#
# Prepare the webodf build dir by calling: make webodf-debug.js-target editor-compiled.js-target

WEBODF_SRC_DIR=${1%/}
cwd=$(pwd)

if [ ! -d "$WEBODF_SRC_DIR" ]; then
   echo "Provide the toplevel directory of WebODF pullbox branch."
        exit 1
fi
if [ ! -e "README.md" ]; then
   echo "Call me in the toplevel dir of OwnCloud Documents."
        exit 1
fi


# patches against upstream
cd "$WEBODF_SRC_DIR"
patch -p1 -i "${cwd}/src/patches/hyperlink.patch"
patch -p1 -i "${cwd}/src/patches/escapeEditor.patch"
