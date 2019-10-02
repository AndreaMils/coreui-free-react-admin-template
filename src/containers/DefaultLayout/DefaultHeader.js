import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppNavbarBrand } from '@coreui/react';
import logo from '../../assets/img/brand/fincons.group_.jpg'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>

        <div style={{ display: 'flex', flex: 1, alignItem: 'flex-start', marginLeft: '1%' }}>
          <AppNavbarBrand
            full={{ src: logo, width: 130, height: 50, alt: 'CoreUI Logo' }}
            minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }} />
          <Nav className="d-md-down-none" navbar>
            <NavItem className="px-3">
              <NavLink to="/appsettings" className="nav-link" >App Seetings</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <Link to="/vodconfiguration" className="nav-link">Vod Configuration</Link>
            </NavItem>
            <NavItem className="px-3">
              <Link to="/reacteroids" className="nav-link">Reacteroids</Link>
            </NavItem>
          </Nav>
        </div>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
