import { connect } from 'react-redux';
import moment from 'moment';
import Link from 'next/link';
import { changeSearchStatus } from '../../redux/actions/actions';

import styles from '../../styles/VideoElement.module.css';

function VideoElement(props) {
  const {
    id,
    titleEdited,
    owner,
    viewsEdited,
    date,
    ownerpic,
    changeSearchStatus,
  } = props;
  const serverStorage = 'https://youtube.slogive.xyz/';
  const imagePreview = 'server/thumbnails/' + id + '.jpg';

  function changeSearchFunc() {}

  return (
    <Link href={`/video/${id}`} passHref>
      <div
        className={styles.Container}
        onClick={() => changeSearchStatus(false)}
      >
        <img
          className={styles.Image}
          src={`${serverStorage}${imagePreview}`}
          alt={`Thumbnail ${owner}`}
          draggable='false'
        />
        <div className={styles.Data}>
          <img
            className={styles.ProfileImage}
            src={`${serverStorage}src/${ownerpic}`}
            alt=''
            draggable='false'
          />
          <div className={styles.DataGrid}>
            <span className={styles.Title}>{titleEdited}</span>
            <span className={styles.Owner}>{owner}</span>
            <div>
              <span className={styles.Views}>
                {viewsEdited} vistas &nbsp; &bull; &nbsp;{' '}
                {moment(date).format('D MMM[.] YYYY')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

const mapStateToProps = (state) => ({
  searchStatus: state.searchStatus,
});

const mapDispatchToProps = {
  changeSearchStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoElement);
