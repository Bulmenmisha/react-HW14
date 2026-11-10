import { connect } from 'react-redux';

function User({ name, status }) {
  return (
    <div className="user">
      <div className="user__avatar">{name[0]?.toUpperCase()}</div>
      <div>
        <h2 className="user__name">{name}</h2>
        <p className="user__status">{status}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});

export default connect(mapStateToProps)(User);
