import React, { Component } from 'react';
import classes from './Settings.module.css';
import { ThemeContext } from '../../Context/theme-context';


class Settings extends Component {
    state = {
        checked: false
    }
componentDidMount(){
    document.querySelector('#manual').checked = ThemeContext._currentValue.manualScrolling
}
    inputChecked = (e) => {            
        ThemeContext._currentValue.manualScrolling = !ThemeContext._currentValue.manualScrolling;         
    }
    render() {
        return (
            <ThemeContext.Provider>
                <section className={classes.settingBox}>
                    <div>
                        <input
                            type="checkbox"
                            className={classes.manual}
                            id="manual"
                            name="manual"
                            onChange={this.inputChecked}
                            for={'x'}

                        />
                        <label for="manual" id="x"> Active Manual Scrolling</label>
                    </div>
                </section>
            </ThemeContext.Provider>

        )
    }
}
export default Settings;