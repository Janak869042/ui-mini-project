import { Fragment } from "react";
const FormFace = (props) => {
  return (
    <Fragment>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-align-center"
                id="exampleModalLabel"
              >
                EDIT NOTE
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="edittitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="Text"
                    className="form-control"
                    id="title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="editdesc" className="form-label">
                    Description
                  </label>
                  <textarea
                    name="desc"
                    id="content"
                    rows="3"
                    className="form-control"
                  ></textarea>
                </div>
                <div className="mb-3 form-check"></div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={props.updateHandler}
              >
                Update Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default FormFace;
