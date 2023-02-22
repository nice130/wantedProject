import React from "react";
import { Route, Link } from 'react-router-dom';
import styles from "../styles.module.css";
function sidebar(){
    return(
        <div id={styles.sideBar}>
            <Link to="/pagea" className={styles.Menu} >
                <div className={styles.menuname}>
                    Page A
                </div>
            </Link>
            <Link to="/pagea" className={styles.Menu} >
                <div className={styles.menuname}>
                    Page B
                </div>
            </Link>
            <Link to="/pagea" className={styles.Menu} >
                <div className={styles.menuname}>
                    Page C
                </div>
            </Link>
            {/* <Route path="/pagea" exact={true} component={PageA} /> */}
        </div>
    )
}
export default sidebar;