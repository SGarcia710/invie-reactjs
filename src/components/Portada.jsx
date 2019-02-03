import React, { Component } from 'react';
import { connect } from 'react-redux'
import CSSTransitionGroup from 'react-addons-css-transition-group';

function mapStateToProps(state) {
    return {
        logo: state.logoPortada,
        menu: state.menu,
        isAnimated: state.isAnimated,
    }
}

class Portada extends Component {
    render() {

        return(
            <section id="portada" className={`portada background ${this.props.isAnimated}`}> 
            <header id="header" className="header contenedor"> 
            <CSSTransitionGroup
                  transitionName="fade"
                  transitionEnterTimeout={300}
                  transitionLeave={false}
                >
                    <figure className="logotipo" key={this.props.logo}> 
                        <img src={this.props.logo} width="186" height="60" alt="Invie logotipo"/>
                    </figure>
            </CSSTransitionGroup>
            <CSSTransitionGroup
            transitionName = "animationInOut"
            transitionEnterTimeout = {800}
            transitionLeaveTimeout = {800}
            >
            {
                !this.props.isAnimated &&
              <nav className="menu"> 
                <ul>
                    {this.props.menu.map((item) => {
                        return(
                            <li>
                                <a href={item.href}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
              </nav>
            }
            </CSSTransitionGroup>
            </header>
            <CSSTransitionGroup
            transitionName = "animationInOut"
            transitionEnterTimeout = {800}
            transitionLeaveTimeout = {800}
            >
                {
                !this.props.isAnimated &&
                <div className="contenedor" >
                    <h1 className="titulo">Guitarras <span>invie</span>sibles</h1>
                    <h3 className="title-a">Sé la estrella de rock que siempre quisiste ser</h3>
                    <a className="button" href="#guitarras">Conoce mas</a>
                </div>
                }
            </CSSTransitionGroup>
          </section>
        );
    }
}

export default connect(mapStateToProps)(Portada);