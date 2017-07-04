/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import { capitalize } from '../../utils';
import { Card } from '../../components/Card';
import PokemonImage from './PokemonImage';
import {
    PokemonStats,
    PokemonStatsRow,
} from './PokemonStats';

import styles from './style.scss';

class PokemonDetails extends React.PureComponent {

    static propTypes = {
        data: PropTypes.shape({}).isRequired,
    };

    static createLabel(string) {
        return (string).split('-').join(' ');
    }

    render() {
        const { data } = this.props;
        return (
            <div className="row ">
                <div className={`col-xs-12 col-sm-6 center-xs ${styles.pokemonImageContainer}`}>
                    <PokemonImage
                        alt={data.name}
                        src={data.sprites.official_artwork}
                    />
                </div>
                <div className="col-xs-12 col-sm-6">
                    <Card>
                        <PokemonStats title="Main">
                            <PokemonStatsRow
                                label="Type"
                                value={data.types.map(({ type }) => type.name).join(', ')}
                            />
                            <PokemonStatsRow
                                label="Weight"
                                value={`${data.weight / 10} kg`}
                            />
                        </PokemonStats>
                    </Card>
                    <Card>
                        <PokemonStats title="Stats">
                            {data.stats.map(({ stat, ...other }, index) => (
                                <PokemonStatsRow
                                    key={`stat-${index}`}
                                    label={capitalize(PokemonDetails.createLabel(stat.name))}
                                    value={other.base_stat}
                                />
                            ))}
                        </PokemonStats>
                    </Card>
                    <Card>
                        <PokemonStats title="Abilities">
                            {data.abilities.map(({ ability }, index) => (
                                <PokemonStatsRow
                                    key={`abilities-${index}`}
                                    label={capitalize(PokemonDetails.createLabel(ability.name))}
                                />
                            ))}
                        </PokemonStats>
                    </Card>
                </div>
            </div>
        );
    }
}

export default PokemonDetails;
