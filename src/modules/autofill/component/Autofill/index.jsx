// @flow
import React from 'react';
import type { SyntheticInputEvent, SyntheticEvent, SyntheticKeyboardEvent } from 'react';
import bemCn from 'bem-cn';
import './style.less';
import { filterStrStartWith, uniqueList } from 'modules/autofill/helpers';

type TAutofillProps = {
    staticFilter: string[],
    inputClassName?: string,
    label?: string,
    labelClassName?: string,
    name?: string,
    retrieveDataAsync?: (string) => void,
    showLabel?: boolean,
};
type TAutofillState = {
    active: number;
    filteredList: [];
    inputValue?: string | null;
    show: boolean;
}

const b = bemCn('autofill-group');

class Autofill extends React.PureComponent<TAutofillProps, TAutofillState> {
    static defaultProps = {
        staticFilter: [],
        inputClassName: null,
        labelClassName: null,
        label: 'Search',
        name: 'search',
        showLabel: true,
    };

    state = {
        active: 0,
        filteredList: [],
        inputValue: '',
        show: false,
    };

    componentDidMount() {
        this.timer = null;
    }

    componentDidUpdate(prevProps: TAutofillProps) {
        const { staticFilter } = this.props;
        const { inputValue } = this.state;
        const {
            staticFilter: prevStaticFilter,
        } = prevProps;

        if (prevStaticFilter !== staticFilter) {
            const maxLength = 10;
            const filteredList = uniqueList(filterStrStartWith(inputValue, staticFilter)).slice(0, maxLength);

            this.setState({
                filteredList,
                show: Boolean(filteredList && filteredList.length),
            });
        }
    }

    setTimer = (value) => {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            const { retrieveDataAsync } = this.props;
            retrieveDataAsync(value);
        }, 500);
    };

    handleOnChange = (e: SyntheticInputEvent<HTMLInputElement>): void => {
        const currentValue = e.currentTarget.value;
        this.setTimer(currentValue);
        this.setState({
            inputValue: currentValue,
        });
    };

    handleOnClick = (e: SyntheticEvent<HTMLLIElement>): void => {
        this.setState({
            inputValue: e.currentTarget.innerText,
            show: false,
        });
    };

    handleOnKeyDown = (e: SyntheticKeyboardEvent<HTMLInputElement>): void => {
        const { filteredList, active } = this.state;
        const isEnter = e.keyCode === 13;
        const isArrowUp = e.keyCode === 38;
        const isArrowDown = e.keyCode === 40;
        const isEsc = e.keyCode === 27;

        if (isEnter) {
            this.setState({
                show: false,
                inputValue: filteredList[active],
                active: 0,
            });
        }

        if (isEsc) {
            this.setState({
                show: false,
                inputValue: '',
                active: 0,
            });
        }

        if (isArrowUp) {
            if (active === 0) {
                return null;
            }

            this.setState(currentState => ({ active: currentState.active - 1 }));
        }

        if (isArrowDown) {
            if (active === filteredList.length - 1) {
                return null;
            }

            this.setState(currentState => ({ active: currentState.active + 1 }));
        }
    };


    renderSearchList = () => {
        const { filteredList, show, active } = this.state;
        const isShowList = show && filteredList && filteredList.length;
        return isShowList ? (
            <ul className={b('list')}>
                {filteredList.map((value, key) => (
                    <li
                        className={b('list-item', { active: key === active })}
                        key={value}
                        onClick={this.handleOnClick}
                    >
                        {value}
                    </li>
                ))}
            </ul>
        ) : null;
    };


    render() {
        const {
            inputClassName,
            labelClassName,
            label,
            name,
            showLabel,
        } = this.props;
        const { inputValue } = this.state;

        return (
            <div className={b()}>
                {showLabel ? <label htmlFor={name} className={b('label').mix(labelClassName)}>{label}</label> : null}
                <input
                    className={b('input').mix(inputClassName)}
                    type="text"
                    onChange={this.handleOnChange}
                    onKeyDown={this.handleOnKeyDown}
                    name={name}
                    value={inputValue}
                />
                {this.renderSearchList()}
            </div>
        );
    }
}

export {
    Autofill,
};
