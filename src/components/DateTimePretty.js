import dayjs from 'dayjs';
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

function TimePretty(Component) {
    return function (props) {
        const date = dayjs(props.date).fromNow();
        return <Component {...props} date={date} />;
    };
}

export default TimePretty;
