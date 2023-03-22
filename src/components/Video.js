import DateTime from './DateTime';
import TimePretty from './DateTimePretty';

function Video(props) {
    const DateTimePretty = TimePretty(DateTime);
    return (
        <div className="video">
            <iframe
                src={props.url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
            <DateTimePretty date={props.date} />
        </div>
    );
}

export default Video;
