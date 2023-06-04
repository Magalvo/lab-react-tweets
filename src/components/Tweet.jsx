import ProfileImage from './ProfileImage';
import Actions from './Actions';
import Message from './Message';
import Timestamp from './Timestamp';
import User from './User';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <span className="user">
            <User user={tweet.user} />
          </span>

          <Timestamp time={tweet.timestamp} />
        </div>

        <p className="message">{tweet.message}</p>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
