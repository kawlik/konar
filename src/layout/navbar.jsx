import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// global config
import config from '@/utility/config';


/*  Component schema
/*   *   *   *   *   *   *   *   *   *   */

export default function Navbar() {

    // navbar moblie toggle state
    const [ expand, setExpand ] = useState( false );


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
        <nav id='navbar'>

            <button className={`toggler ${ expand ? 'expand' : '' }`} onClick={ () => setExpand( prev => !prev ) }>
            </button>
            
            <section className={`links ${ expand ? 'expand' : '' }`}>

                <NavLink className='nav-link' exact to={ config.route.home.path }>
                    { config.route.home.display }
                </NavLink>

                <NavLink className='nav-link' exact to={ config.route.about.path }>
                    { config.route.about.display }
                </NavLink>

                <NavLink className='nav-link' exact to={ config.route.projects.path }>
                    { config.route.projects.display }
                </NavLink>

                <NavLink className='nav-link' exact to={ config.route.tournaments.path }>
                    { config.route.tournaments.display }
                </NavLink>

                <NavLink className='nav-link' exact to={ config.route.management.path }>
                    { config.route.management.display }
                </NavLink>

                <NavLink className='nav-link' exact to={ config.route.contact.path }>
                    { config.route.contact.display }
                </NavLink>

            </section>

        </nav>
    </>
)};