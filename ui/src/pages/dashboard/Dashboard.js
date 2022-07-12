import React from 'react'
import logo from '../../images/logo.png'
import user from '../../images/fikri.jpg'

const Dashboard = () => {
  return (
    <div>
      <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
          <div className="me-3">
            <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-bs-toggle="minimize">
              <img src={logo} width="100%" height="100%" alt="madani" />
            </button>
          </div>
          <div>
            <a className="navbar-brand brand-logo" href="#">
              MadaniLib
            </a>
            <a className="navbar-brand brand-logo-mini" href="#">
              MadaniLib
            </a>
          </div>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-top">
          <ul className="navbar-nav">
            <li className="nav-item font-weight-semibold d-none d-lg-block ms-0">
              <h1 className="welcome-text">Hello, <span className="text-black fw-bold">Fikri Abdul</span></h1>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown d-none d-lg-block">
              <a className="nav-link dropdown-bordered dropdown-toggle dropdown-toggle-split" id="messageDropdown" href="#"
                data-bs-toggle="dropdown" aria-expanded="false"> Pilih Kategori </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                aria-labelledby="messageDropdown">
                <a className="dropdown-item py-3">
                  <p className="mb-0 font-weight-medium float-left">Select category</p>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">This is a category </p>
                    <p className="fw-light small-text mb-0">This is up to them to do whatever they want to do</p>
                  </div>
                </a>
              </div>
            </li>

            <li className="nav-item">
              <form className="search-form" action="#">
                <i className="icon-search"></i>
                <input type="search" className="form-control" placeholder="Search Here" title="Search here" />
              </form>
            </li>

            <li className="nav-item dropdown d-none d-lg-block user-dropdown">
              <a className="nav-link" id="UserDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <img style={{height:"50px", width:"40px"}}
                  src={user}
                  alt="Profile image" /> </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                <div className="dropdown-header text-center">
                  <img className="img-md rounded-circle" src="images/faces/face8.jpg" alt="Profile image" />
                  <p className="mb-1 mt-3 font-weight-semibold">Fikri Abdul</p>
                  <p className="fw-light text-muted mb-0">fikri@madaniberkelanjutan.com</p>
                </div>
                <a className="dropdown-item"><i className="dropdown-item-icon mdi mdi-power text-primary me-2"></i>Sign Out</a>
              </div>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
            data-bs-toggle="offcanvas">
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>


      <div className="container-fluid page-body-wrapper">
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item nav-category">Data</li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false"
                aria-controls="form-elements">
                <i className="menu-icon mdi mdi-card-text-outline"></i>
                <span className="menu-title">Data Tabular</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="form-elements">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                <i className="menu-icon mdi mdi-chart-line"></i>
                <span className="menu-title">Analisis Spasial</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="charts">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                <i className="menu-icon mdi mdi-table"></i>
                <span className="menu-title">Update dan Analisis</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="tables">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                <i className="menu-icon mdi mdi-layers-outline"></i>
                <span className="menu-title">Presentasi</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="icons">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                <i className="menu-icon mdi mdi-layers-outline"></i>
                <span className="menu-title">Literature Eksternal</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="icons">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                <i className="menu-icon mdi mdi-layers-outline"></i>
                <span className="menu-title">Kegiatan Internal</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="icons">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                <i className="menu-icon mdi mdi-layers-outline"></i>
                <span className="menu-title">Kegiatan Eksternal</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="icons">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                <i className="menu-icon mdi mdi-layers-outline"></i>
                <span className="menu-title">Admin Program</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="icons">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                <i className="menu-icon mdi mdi-layers-outline"></i>
                <span className="menu-title">Form Upload Data</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="icons">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-sm-12">
                <div className="home-tab">
                  <div className="d-sm-flex align-items-center justify-content-between border-bottom">
                    <ul className="nav nav-tabs" role="tablist">

                    </ul>
                    <div>
                      <div className="btn-wrapper">
                        <a href="#" className="btn btn-otline-dark align-items-center"><i className="icon-share"></i> Share</a>
                        <a href="#" className="btn btn-otline-dark"><i className="icon-printer"></i> Print</a>
                        <a href="#" className="btn btn-primary text-white me-0"><i className="i con-download"></i> Export</a>
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

                                        <tr>
                                          <td>2</td>
                                          <td>
                                            <div className="d-flex ">
                                              <div>
                                                <h6>Analisis Data Konsesi Sawit GP dan Auriga_Madani_2019_Excel</h6>
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
                                                <p className="text-success">2019</p>
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

                                        <tr>
                                          <td>2</td>
                                          <td>
                                            <div className="d-flex ">
                                              <div>
                                                <h6>Analisis Data Konsesi Sawit GP dan Auriga_Madani_2019_Excel</h6>
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
                                                <p className="text-success">2019</p>
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

                                        <tr>
                                          <td>2</td>
                                          <td>
                                            <div className="d-flex ">
                                              <div>
                                                <h6>Analisis Data Konsesi Sawit GP dan Auriga_Madani_2019_Excel</h6>
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
                                                <p className="text-success">2019</p>
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

                                        <tr>
                                          <td>2</td>
                                          <td>
                                            <div className="d-flex ">
                                              <div>
                                                <h6>Analisis Data Konsesi Sawit GP dan Auriga_Madani_2019_Excel</h6>
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
                                                <p className="text-success">2019</p>
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

                                        <tr>
                                          <td>2</td>
                                          <td>
                                            <div className="d-flex ">
                                              <div>
                                                <h6>Analisis Data Konsesi Sawit GP dan Auriga_Madani_2019_Excel</h6>
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
                                                <p className="text-success">2019</p>
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

                                        <tr>
                                          <td>2</td>
                                          <td>
                                            <div className="d-flex ">
                                              <div>
                                                <h6>Analisis Data Konsesi Sawit GP dan Auriga_Madani_2019_Excel</h6>
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
                                                <p className="text-success">2019</p>
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

                                        <tr>
                                          <td>2</td>
                                          <td>
                                            <div className="d-flex ">
                                              <div>
                                                <h6>Analisis Data Konsesi Sawit GP dan Auriga_Madani_2019_Excel</h6>
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
                                                <p className="text-success">2019</p>
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

                                        <tr>
                                          <td>2</td>
                                          <td>
                                            <div className="d-flex ">
                                              <div>
                                                <h6>Analisis Data Konsesi Sawit GP dan Auriga_Madani_2019_Excel</h6>
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
                                                <p className="text-success">2019</p>
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

                                        <tr>
                                          <td>2</td>
                                          <td>
                                            <div className="d-flex ">
                                              <div>
                                                <h6>Analisis Data Konsesi Sawit GP dan Auriga_Madani_2019_Excel</h6>
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
                                                <p className="text-success">2019</p>
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

                                        <tr>
                                          <td>2</td>
                                          <td>
                                            <div className="d-flex ">
                                              <div>
                                                <h6>Analisis Data Konsesi Sawit GP dan Auriga_Madani_2019_Excel</h6>
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
                                                <p className="text-success">2019</p>
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

                                        <tr>
                                          <td>2</td>
                                          <td>
                                            <div className="d-flex ">
                                              <div>
                                                <h6>Analisis Data Konsesi Sawit GP dan Auriga_Madani_2019_Excel</h6>
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
                                                <p className="text-success">2019</p>
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

                                        <tr>
                                          <td>2</td>
                                          <td>
                                            <div className="d-flex ">
                                              <div>
                                                <h6>Analisis Data Konsesi Sawit GP dan Auriga_Madani_2019_Excel</h6>
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
                                                <p className="text-success">2019</p>
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

                                        <tr>
                                          <td>2</td>
                                          <td>
                                            <div className="d-flex ">
                                              <div>
                                                <h6>Analisis Data Konsesi Sawit GP dan Auriga_Madani_2019_Excel</h6>
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
                                                <p className="text-success">2019</p>
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

                                        <tr>
                                          <td>2</td>
                                          <td>
                                            <div className="d-flex ">
                                              <div>
                                                <h6>Analisis Data Konsesi Sawit GP dan Auriga_Madani_2019_Excel</h6>
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
                                                <p className="text-success">2019</p>
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

                                        <tr>
                                          <td>2</td>
                                          <td>
                                            <div className="d-flex ">
                                              <div>
                                                <h6>Analisis Data Konsesi Sawit GP dan Auriga_Madani_2019_Excel</h6>
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
                                                <p className="text-success">2019</p>
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

                                        <tr>
                                          <td>2</td>
                                          <td>
                                            <div className="d-flex ">
                                              <div>
                                                <h6>Analisis Data Konsesi Sawit GP dan Auriga_Madani_2019_Excel</h6>
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
                                                <p className="text-success">2019</p>
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

                                        <tr>
                                          <td>2</td>
                                          <td>
                                            <div className="d-flex ">
                                              <div>
                                                <h6>Analisis Data Konsesi Sawit GP dan Auriga_Madani_2019_Excel</h6>
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
                                                <p className="text-success">2019</p>
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

                                        <tr>
                                          <td>2</td>
                                          <td>
                                            <div className="d-flex ">
                                              <div>
                                                <h6>Analisis Data Konsesi Sawit GP dan Auriga_Madani_2019_Excel</h6>
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
                                                <p className="text-success">2019</p>
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