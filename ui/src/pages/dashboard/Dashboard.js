import React from 'react'
import { Nav, Sidebar } from '../../components/'

const Dashboard = () => {
  return (
    <div>
      <Nav />

      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-sm-12">
                <div className="home-tab">
                  <div className="d-sm-flex align-items-center justify-content-between border-bottom">
                    <ul className="nav nav-tabs" role="tablist">
                      <form className="form-inline" style={{ width: "800px" }}>
                        <div className="input-group mb-2 mr-sm-2">
                          <input type="text" className="form-control form-control-lg" placeholder="Search..." />
                          <div className="input-group-prepend">
                            <div className="input-group-text" style={{ height: "51px" }}>
                              <i className="icon-arrow-right" style={{ color: "blue" }}></i>
                            </div>
                          </div>
                        </div>
                      </form>
                    </ul>
                    <div>
                      <div className="btn-wrapper">
                        <a href="#" className="btn btn-otline-dark align-items-center"><i className="icon-share"></i> Share</a>
                        <a href="#" className="btn btn-otline-dark"><i className="icon-printer"></i> Print</a>
                        <a href="#" className="btn btn-primary text-white me-0"><i className="icon-download"></i> Export</a>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content tab-content-basic">
                    <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview">
                      <div className="row">
                        <div className="col-lg-12 d-flex flex-column">
                          <div className="row flex-grow">
                            <div className="col-12 grid-margin stretch-card">
                              <div className="card card-rounded">
                                <div className="card-body">
                                  <div className="table-responsive  mt-1">
                                    <table className="table select-table">
                                      <thead>
                                        <tr>
                                          <th>No</th>
                                          <th>Nama File</th>
                                          <th>Sumber</th>
                                          <th>Tahun</th>
                                          <th>Tipe</th>
                                          <th>Nama Folder</th>
                                          <th>Deskripsi Dokumen</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>1</td>
                                          <td>
                                            <div className="d-flex ">
                                              <div>
                                                <h6>Area Baru Terbakar ABT Kalteng, Sumsel, Kalbar_Madani_2020_Excel</h6>
                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <h6>Madani</h6>
                                          </td>
                                          <td>
                                            <div>
                                              <div
                                                className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                <p className="text-success">2020</p>
                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="badge badge-opacity-warning">Excel</div>
                                          </td>
                                          <td>
                                            <h6><a href="#">Database Tabular</a></h6>
                                          </td>
                                          <td>
                                            Luas Area Baru Terbakar ABT Kalteng, Sumsel, Kalbar
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Made possible by MadaniLib with
                &hearts;<a href="#" target="_blank"></a></span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Copyright © 2022. All rights
                reserved.</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Dashboard