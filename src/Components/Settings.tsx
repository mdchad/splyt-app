import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import Tooltip from 'rc-tooltip';
import Slider, { Handle } from 'rc-slider';

interface Props {
    count: number;
    setCount: (v: number) => void;
}

const handle = (props: any) => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
};

const wrapperStyle: { width: number, margin : number } = { width: 400, margin: 50 };

const Settings: React.FC<Props> = ({ count, setCount }) => {
    return (
        <div>
            <div style={wrapperStyle}>
                <p>Drivers</p>
                <Slider min={0} max={50} defaultValue={count} handle={handle} onAfterChange={(value) => setCount(value)}/>
                <span>{count}</span>
            </div>
        </div>
    )
};

export default Settings
