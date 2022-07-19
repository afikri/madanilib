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
                    {data.map((val, key) => {
                      return <div>
                        <tr>
                          <td>
                            {val.id}
                          </td>
                          <td>
                            <div className="d-flex ">
                              <div>
                                <h6>{val.file_name}</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h6>{val.file_source}</h6>
                          </td>
                          <td>
                            <div>
                              <div
                                className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                <p className="text-success">{val.year}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="badge badge-opacity-warning">{val.type}</div>
                          </td>
                          <td>
                            <h6><a href="#">{val.folder}</a></h6>
                          </td>
                          <td>
                            {val.doc_description}
                          </td>
                        </tr>
                      </div>
                    })}
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