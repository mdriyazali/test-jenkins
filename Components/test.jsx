import React from "react";
import {
  MDBBadge,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBScrollbar,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTooltip,
} from "mdb-react-ui-kit";

<section className="gradient-custom-2 vh-100">
  <MDBContainer className="py-5 h-100">
    <MDBRow className="d-flex justify-content-center align-items-center">
      <MDBCol md="12" xl="10">
        <MDBCard>
          <MDBCardHeader className="p-3">
            <h5 className="mb-0">
              <MDBIcon fas icon="tasks" className="me-2" />
              Task List
            </h5>
          </MDBCardHeader>
          <MDBScrollbar style={{ position: "relative", height: "400px" }}>
            <MDBCardBody>
              <MDBTable className="mb-0">
                <MDBTableHead>
                  <tr>
                    <th scope="col">Task</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr className="fw-normal">
                    <td className="align-middle">
                      <span>Call Sam For payments</span>
                    </td>
                    <td className="align-middle">
                      <h6 className="mb-0">
                        <MDBBadge className="mx-2" color="danger">
                          High priority
                        </MDBBadge>
                      </h6>
                    </td>
                    <td className="align-middle">
                      <MDBTooltip
                        tag="a"
                        wrapperProps={{ href: "#!" }}
                        title="Done"
                      >
                        <MDBIcon
                          fas
                          icon="check"
                          color="success"
                          size="lg"
                          className="me-3"
                        />
                      </MDBTooltip>
                      <MDBTooltip
                        tag="a"
                        wrapperProps={{ href: "#!" }}
                        title="Remove"
                      >
                        <MDBIcon
                          fas
                          icon="trash-alt"
                          color="danger"
                          size="lg"
                          className="me-3"
                        />
                      </MDBTooltip>
                    </td>
                  </tr>

                </MDBTableBody>
              </MDBTable>
            </MDBCardBody>
          </MDBScrollbar>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>
