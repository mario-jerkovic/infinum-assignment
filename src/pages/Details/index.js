import React from 'react';
import PropTypes from 'prop-types';

import * as utils from '../../utils';
import PokemonDetails from './PokemonDetails';
import Loading from '../../components/Loading';
import PageHeader from '../../components/PageHeader';


class Details extends React.PureComponent {

    static propTypes = {
        routeParams: PropTypes.shape({
            name: PropTypes.string,
        }).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }

    componentWillMount() {
        this.fetchPokemon();
    }

    fetchPokemon() {
        const { routeParams: { name } } = this.props;

        utils.getPokemonByName(name)
            .then((pokemon) => {
                this.setState({ data: pokemon });
            });
    }

    render() {
        const { data } = this.state;

        if (!data) {
            return (
                <Loading />
            );
        }

        return (
            <div>
                <PageHeader
                    title={`${utils.capitalize(data.name)} #${data.id}`}
                />
                <PokemonDetails
                    data={data}
                />
            </div>
        );
    }
}

export default Details;
