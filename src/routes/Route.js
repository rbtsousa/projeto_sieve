import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {store} from '../store'


export default function RouteWrapper({
    component:Component,isPrivate,...rest 
}) {

    const {signed} = store.getState().auth
    const {institution} = store.getState().user.profile 
    console.tron.log(institution)
    if(!signed && isPrivate){
        return <Redirect to="/"/>
    }
    if(signed && !isPrivate && institution){
        return <Redirect to="/areadaempresa"/>
    }
    if(signed && !isPrivate && !institution){
        return <Redirect to="/areadoaluno"/>
    
    }
    return(
        <Route {...rest} component={Component}/>
    )
}
RouteWrapper.propTypes={
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element,PropTypes.func])
}
RouteWrapper.defaultProps={
    isPrivate: false,
}