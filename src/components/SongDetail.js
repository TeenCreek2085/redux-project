import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <p>Select a Song</p>;
  }

  return (
    <div>
      <h3>Details For</h3>
      <p>Title: {song.title}</p>
      <p>Duration: {song.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
