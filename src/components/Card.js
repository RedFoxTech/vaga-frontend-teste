import React, {Component} from 'react';
import $ from 'jquery';


export default class Card extends Component{

    constructor(){
        super();
        this.state = {
            imgUrl: '',
            name: '',
            info: '',
            abilities: ''
        }
    }

    getInfo(){
        $.ajax({
            url: this.props.pokemon.url,
            dataType: 'json',
            cache: true,
            success: function (data) {
                this.setState({ imgUrl: data.sprites.front_default }),
                this.setState({ info: data.weight}),
                this.setState({ abilities: data.abilities[0].ability.name})
                this.setState({ name: data.name })
            }.bind(this)
        })
    }

    componentDidMount() {
        this.getInfo();
    }

    render(){
        return(
            <div className="col-md-12 col-lg-12 pdd-30-md-b pdd-30-lg-b ">
                <div className="mat-card">
                    <div className="container pdd-30-lg-b pdd-30-lg-b pdd-30-xs-b pdd-30-xxs-b pdd-30-lg-t pdd-30-xxs-t pdd-30-xs-t pdd-30-md-t">
                        <div className="col-lg-offset-1 col-xs-offset-3 col-xxs-offset-3 col-lg-2 col-md-2 col-xs-8 col-xxs-8">
                            <div className="pdd-50-lg-t pdd-50-md-t">
                                <img src={this.state.imgUrl} alt={this.state.name}></img>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-xs-12 col-xxs-12">
                            <h2 className="text-danger text-bold">{this.state.name.charAt(0).toUpperCase() + this.state.name.substr(1)}</h2>
                            <h3 className="text-dark text-bold pdd-15-md-b">Info</h3>
                            <p>habilidade principal: {this.state.abilities}</p>
                            <p>peso: {this.state.info} kg</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}