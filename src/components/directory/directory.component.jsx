import React from 'react';

import './directory.styles.scss';

import {connect} from 'react-redux'

import { createStructuredSelector } from "reselect";

import MenuItem from './../menu-item/menu-item.component';
import {selectDirectorySections} from "../../redux/directory/directory.selector";

const DirectoryMenu = ({sections}) => (
    <div className='directory-menu'>
        {sections.map(({id, ...otherSectionProps}) =>
                <MenuItem key={id} {...otherSectionProps}/>)}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu);