import { Props } from "typings";
import PropTypes from "prop-types";

const Modal = ({ viewModal, setViewModal, loading, error, msg }: Props) => {
  return (
    <>
      {viewModal && (
        <div
          style={{ position: "fixed" }}
          onClick={(e) => e.target && setViewModal && setViewModal(!viewModal)}
        >
          <div className="modal">
            <section
              className="modal-main"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="modal-header">
                Varning
                <hr />
              </div>
              <div className="modal-body">
                {loading ? "Laddar..." : error ? error : msg}
                <br />
                <hr />
              </div>
              <button
                type="button"
                className="btn"
                onClick={() => setViewModal && setViewModal(false)}
              >
                Stäng
              </button>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  viewModal: PropTypes.bool.isRequired,
  setViewModal: PropTypes.func.isRequired,
};
Modal.defaultProps = {
  loading: false,
  error: "",
  msg: "",
  viewModal: false,
  setViewModal: false,
};

export default Modal;
