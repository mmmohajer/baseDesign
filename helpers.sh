#!/bin/bash

getJsContext() {
    local compName=$1
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"

    local jsContext="""import React from \"react\";
import cx from \"classnames\";

import styles from \"./$compName.module.scss\";

const $compName = () => {
  return (
    <>
      <div>$compName</div>
    </>
  );
};

export default $compName;
"""
    echo "$jsContext"
}

getTestJsContext() {
    local compName=$1
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"

    local jsContext="""import React from \"react\";
import cx from \"classnames\";

import styles from \"./Test$compName.module.scss\";

import $compName from \"Components/$compName\";

const Test$compName = () => {
  return (
    <>
      <$compName />
    </>
  );
};

export default Test$compName;
"""
    echo "$jsContext"
}

createReactComponent() {
    local compName=$1
    
    compName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"
    local addr="src/components/$compName"
    mkdir -p "$addr"
    
    local jsContext=$(getJsContext $compName)
    local indexContext="export { default } from \"./$compName\";"
    
    local innerJsFileAddr="src/components/$compName/$compName.js"
    local innerIndexFileAddr="src/components/$compName/index.js"
    local innersassFileAddr="src/components/$compName/$compName.module.scss"
    
    echo "$jsContext" >> $innerJsFileAddr
    echo "$indexContext" >> "$innerIndexFileAddr"
    touch "$innersassFileAddr"
    
    echo "Component Created!"

    local addr="src/TestComponents/Test$compName"
    mkdir -p "$addr"

    local jsContext=$(getTestJsContext $compName)
    local indexContext="export { default } from \"./Test$compName\";"
    
    local innerJsFileAddr="src/TestComponents/Test$compName/Test$compName.js"
    local innerIndexFileAddr="src/TestComponents/Test$compName/index.js"
    local innersassFileAddr="src/TestComponents/Test$compName/Test$compName.module.scss"
    
    echo "$jsContext" >> $innerJsFileAddr
    echo "$indexContext" >> "$innerIndexFileAddr"
    touch "$innersassFileAddr"

    echo "Test Component Created!"
    
    return 0
}