import React, { useState, useMemo } from 'react'
import data from '../../data.json'

import { Footer, Nav, Sidebar, Utilities, Pagination } from '../../components/'
let PageSize = 10;

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const onSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
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
                          <input type="text" className="form-control form-control-lg no-submit" placeholder="Search..." onChange={onSearch} />
                        </div>
                      </form>
                    </ul>
                    <div>
                      <Utilities />
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
                                          <th>Kategori Data Tabular</th>
                                          <th>Tags</th>
                                          <th  style={{tableLayout:"fixed", width:"80%"}}>Nama File</th>
                                          <th>Isi Dokumen</th>
                                        </tr>
                                      </thead>
                                      {currentTableData.map((val, key) => {
                                        return <tbody>
                                          <tr>
                                            <td>{val.id}</td>
                                            <td>
                                              <div className="d-flex ">
                                                <div>
                                                  <h6>{val.category}</h6>
                                                </div>
                                              </div>
                                            </td>
                                            <td>
                                              <h6>{val.tags}</h6>
                                            </td>
                                            <td>
                                              <div>
                                                <div
                                                  className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                  <p className="text-success">{val.file_name}</p>
                                                </div>
                                              </div>
                                            </td>
                                            <td>
                                              {val.doc_description}
                                            </td>
                                          </tr>
                                        </tbody>
                                      })}
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
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Dashboard