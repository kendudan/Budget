import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class SimpleSelect extends React.Component {
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        return (
            <form autoComplete="off">
                <FormControl>
                    <InputLabel htmlFor="simple">Выбрать категорию</InputLabel>
                    <Select
                        onChange={this.handleChange}
                    >
                        {this.props.categoriesPlus.map(item => (
                        <MenuItem value={item.name}>Ten</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </form>
        )
    }
}

export default SimpleSelect;
