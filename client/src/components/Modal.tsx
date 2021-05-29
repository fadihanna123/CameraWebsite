import { useRecoilState } from "recoil";
import { errorState, loadingState, msgState, viewModalState } from "States";

const Modal = () => {
  const [viewModal, setViewModal] = useRecoilState(viewModalState);
  const [loading] = useRecoilState(loadingState);
  const [error] = useRecoilState(errorState);
  const [msg] = useRecoilState(msgState);

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

export default Modal;
