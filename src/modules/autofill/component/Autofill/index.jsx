// @flow
import React from 'react';
import bemCn from 'bem-cn';
import './style.less';

type TProps = {
    filter: string[],
    inputClassName?: string,
    labelClassName?: string,
    label?: string,
    name?: string,
    showLabel?: boolean,
};

const b = bemCn('autofill-group');

class Autofill extends React.PureComponent<TProps> {
    static defaultProps = {
        filter: [],
        inputClassName: null,
        labelClassName: null,
        label: 'Search',
        name: 'search',
        showLabel: true,
    };
    handleOnChange = () => {};
    handleOnKeyDown = () => {};


    renderSearchList = () => {
        const {
            filter,
        } = this.props;

        return (
            <ul className={b('list')}>
                {filter.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        );
    };


    render() {
        const {
            filter,
            inputClassName,
            labelClassName,
            label,
            name,
            showLabel
        } = this.props;
        return (
            <div className={b()}>
                {showLabel ? <label htmlFor={name} className={b('label').mix(labelClassName)}>{label}</label> : null}
                <input
                    className={b('input').mix(inputClassName)}
                    type="text"
                    onChange={this.handleOnChange}
                    onKeyDown={this.handleOnKeyDown}
                    name={name}
                    value={value}
                />
                {filter && filter.length ? this.renderSearchList() : <div>No result.</div>}
            </div>
        );
    }
}
 export {
    Autofill,
};
