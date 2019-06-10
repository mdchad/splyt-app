import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import Tooltip from 'rc-tooltip';
import Slider, { Handle } from 'rc-slider';
import './Settings.css';

interface Props {
    count: number;
    setCount: (v: number) => void;
    loading: boolean;
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

const Settings: React.FC<Props> = ({ count, setCount, loading }) => {
    return (
        <div className='settings-wrapper' >
            <p>Drivers</p>
            <Slider disabled={loading} min={0} max={50} defaultValue={count} handle={handle} onAfterChange={(value) => setCount(value)}/>
            <span>{count}</span>
        </div>
    )
};

export default Settings
