import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
//styles
import styles from './main.module.css';

//modules



class Info extends Component {
  render() {
    return (
      <Parallax
      className="custom-class"
      offsetYMax={90}
      offsetYMin={-120}
      slowerScrollRate={false}
      tag="figure"
  >
      <div className={styles.info}>
      <hr />
      <h1>
        Restoraunt 
      </h1>
      <hr />
      Line 2:   'Row' is defined but never used        no-unused-vars
      Line 2:   'Col' is defined but never used        no-unused-vars
      Line 3:   'PropTypes' is defined but never used  no-unused-vars
      Line 8:   'Info' is defined but never used       no-unused-vars
      Line 9:   'Menu' is defined but never used       no-unused-vars
      Line 10:  'Gallery' is defined but never used    no-unused-vars
      Line 11:  'Footer' is defined but never used     no-unused-vars
    
    ./src/components/header.js
      Line 2:  'NavItem' is defined but never used    no-unused-vars
      Line 3:  'PropTypes' is defined but never used  no-unused-vars
    
    Search for the keywords to learn more about each warning.
    To ignore, add // eslint-disable-next-line to the line before.
    
    ^C
    ➜  restoran git:(master) ✗ yarn add react-scroll-parallax
    
    yarn add v1.7.0
    [1/4] 🔍  Resolving packages...
    [2/4] 🚚  Fetching packages...
    [3/4] 🔗  Linking dependencies...
    warning " > bootstrap@4.1.3" has unmet peer dependency "jquery@1.9.1 - 3".
    warning " > bootstrap@4.1.3" has unmet peer dependency "popper.js@^1.14.3".
    [4/4] 📃  Building fresh packages...
    success Saved lockfile.
    success Saved 1 new dependency.
    info Direct dependencies
    └─ react-scroll-parallax@1.3.5
    info All dependencies
    └─ react-scroll-parallax@1.3.5
      </div>
      </Parallax>
    );
  }
}

export default Info;
