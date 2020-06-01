import React, { useState, useEffect } from 'react'
import { Row, Col, Table } from 'reactstrap'
import { useSelector } from 'react-redux'
import SkeletonTeacherHome from '../../../components/skeleton/SkeletonTeacherHome'
import { CardWrapperMember, ImgStudentDiv } from './HospitalStyle'
import { NavLink } from 'react-router-dom'


import {} from 'components'

import {
  playlistCharts,
  playlistCharts1,
  playlistCharts2,
  playlistCharts3,
  playlistCharts4,
  playlistCharts5,
  playlistCharts6,
  playlistCharts7,
  playlistCharts8,
  playlistCharts9,
} from 'variables/hospital/dashboard-charts.jsx'

import { Line, Bar, Radar } from 'react-chartjs-2'

//import styles from 'jvectormap/jquery-jvectormap.css'
//import { VectorMap } from 'react-jvectormap';

import {
  dashboardAllProductsChart,
  dashboardAllProductsChart1,
  dashboardAllProductsChart2,
  dashboardAllProductsChart3,
} from 'variables/hospital/dashboard-charts.jsx'

import { Messagewidget } from 'components'

import { messagewidget } from 'variables/hospital/widget.jsx'

import PerfectScrollbar from 'perfect-scrollbar'
var ps
var BASEDIR = process.env.REACT_APP_BASEDIR
//var IMGDIR = process.env.REACT_APP_IMGDIR;
var api = process.env.REACT_APP_API_END_POINT_OFICIAL

const Hospital = (props) => {
  const { student } = useSelector(
    (state) => state.authentication.user.user_data
  )
  var charges = []
  //  const [charge, setCharge] = useState({

  //     "codeAcademicCharge": '',
  //     "teacherDictate":'' ,
  //     "courseDictate": {
  //         "codeCourse": '',
  //         "nameCourse": "",
  //         "areaCourse": ''
  //     },
  //     "groupDictate": "",
  //     "hourlyintensity": '',
  //     "schedule": []

  //   documentIdUser: '',
  //   password: '',
  //   last_login: null,
  //   email: '',
  //   date_joined: '',
  //   typeIdeUser: 'CC',
  //   firstNameUser: ' ',
  //   lastNameUser: '',
  //   emailUser: '',
  //   phoneUser: '',
  //   addressUser: '',
  //   passwordUser: '',
  //   dateOfBirthUser: '',
  //   dateLastAccessUser: '',
  //   genderUser: '',
  //   rhUser: '',
  //   is_active: true,
  //   is_staff: false,
  //   is_superuser: false,
  //   codeIE: '',
  //   codeHeadquarters: 1,
  //   groups: [],
  //   user_permissions: [],
  // })

  console.log(student)
  function getChargeAcademic() {
    fetch(api + `/courses/academiccharge/bystudent/${student.codeStudent}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
       
        console.log(data);
        charges = data;
      })
      .catch((error) => console.log(error))
      .finally(() => {
        /* setLoaders((loaders) => ({
                ...loaders,
                cargaLoad: false,
              })) */
      })
  }

  // componentDidMount() {
  //   if (navigator.platform.indexOf('Win') > -1) {
  //     ps = new PerfectScrollbar(this.refs.notificationlist, {
  //       suppressScrollX: true,
  //       suppressScrollY: false,
  //     })
  //   }
  // }
  // componentWillUnmount() {
  //   if (navigator.platform.indexOf('Win') > -1) {
  //     ps.destroy()
  //   }
  // }

  // const data6 = {
  //   labels: [
  //     'Inpatient',
  //     'Outpatient',
  //     'Doctors',
  //     'Pharmacy',
  //     'Lab',
  //     'Rooms',
  //     'Others',
  //   ],
  //   datasets: [
  //     {
  //       label: '2017',
  //       backgroundColor: 'rgba(38, 166, 154,0.85)',
  //       borderColor: 'rgba(38, 166, 154,1)',
  //       pointBackgroundColor: 'rgba(38, 166, 154,1)',
  //       pointBorderColor: '#fff',
  //       pointHoverBackgroundColor: '#fff',
  //       pointHoverBorderColor: 'rgba(38, 166, 154,1)',
  //       data: [65, 59, 90, 81, 56, 55, 40],
  //     },
  //     {
  //       label: '2018',
  //       backgroundColor: 'rgba(255, 138, 101,0.85)',
  //       borderColor: 'rgba(255, 138, 101,1)',
  //       pointBackgroundColor: 'rgba(255, 138, 101,1)',
  //       pointBorderColor: '#fff',
  //       pointHoverBackgroundColor: '#fff',
  //       pointHoverBorderColor: 'rgba(255, 138, 101,1)',
  //       data: [28, 48, 40, 19, 96, 27, 100],
  //     },
  //   ],
  // }

  // const options6 = {
  //   legend: {
  //     display: false,
  //   },
  //   scale: {
  //     display: true,
  //     gridLines: {
  //       color: 'rgba(0, 0, 0, 0.05)',
  //     },
  //     ticks: {
  //       beginAtZero: true,
  //     },
  //   },
  //   maintainAspectRatio: false,
  // }

  // const data312 = {
  //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  //   datasets: [
  //     {
  //       label: 'Visits',
  //       fill: true,
  //       lineTension: 0.1,
  //       backgroundColor: 'rgba(38, 166, 154,0.85)',
  //       borderColor: 'rgba(38, 166, 154,0.85)',
  //       borderCapStyle: 'butt',
  //       borderDash: [],
  //       borderDashOffset: 0.0,
  //       borderJoinStyle: 'miter',
  //       pointBorderColor: '#fafafa',
  //       pointBackgroundColor: 'rgba(38, 166, 154,0.85)',
  //       pointBorderWidth: 1,
  //       pointHoverRadius: 5,
  //       pointHoverBackgroundColor: 'rgba(38, 166, 154,0.85)',
  //       pointHoverBorderColor: '#eeeeee',
  //       pointHoverBorderWidth: 1,
  //       pointRadius: 4,
  //       pointHitRadius: 10,
  //       data: [85, 61, 60, 85, 66, 45, 80],
  //     },
  //     {
  //       label: 'Subscriptions',
  //       fill: true,
  //       lineTension: 0.1,
  //       backgroundColor: 'rgba(255, 138, 101,0.85)',
  //       borderColor: 'rgba(255, 138, 101,0.85)',
  //       borderCapStyle: 'butt',
  //       borderDash: [],
  //       borderDashOffset: 0.0,
  //       borderJoinStyle: 'miter',
  //       pointBorderColor: '#fafafa',
  //       pointBackgroundColor: 'rgba(255, 138, 101,0.85)',
  //       pointBorderWidth: 1,
  //       pointHoverRadius: 5,
  //       pointHoverBackgroundColor: 'rgba(255, 138, 101,0.85)',
  //       pointHoverBorderColor: '#eeeeee',
  //       pointHoverBorderWidth: 1,
  //       pointRadius: 4,
  //       pointHitRadius: 10,
  //       data: [45, 74, 60, 65, 56, 65, 70],
  //     },
  //   ],
  // }

  // const options312 = {
  //   maintainAspectRatio: false,
  //   legend: {
  //     display: false,
  //   },
  //   tooltips: {
  //     bodySpacing: 4,
  //     mode: 'nearest',
  //     intersect: 0,
  //     position: 'nearest',
  //     xPadding: 10,
  //     yPadding: 10,
  //     caretPadding: 10,
  //   },
  //   responsive: 1,
  //   scales: {
  //     yAxes: [
  //       {
  //         categoryPercentage: 0.8,
  //         barPercentage: 0.6,
  //         maxBarThickness: 12,
  //         display: 1,
  //         gridLines: {
  //           color: 'rgba(0, 0, 0, 0.01)',
  //         },
  //         ticks: {
  //           display: true,
  //         },
  //       },
  //     ],
  //     xAxes: [
  //       {
  //         display: 1,
  //         gridLines: {
  //           color: 'rgba(0, 0, 0, 0.01)',
  //         },
  //         ticks: {
  //           display: false,
  //         },
  //       },
  //     ],
  //   },
  //   layout: {
  //     padding: { left: 0, right: 0, top: 0, bottom: 0 },
  //   },
  // }

  // const data3 = {
  //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  //   datasets: [
  //     {
  //       label: 'Visits',
  //       fill: true,
  //       lineTension: 0.1,
  //       backgroundColor: 'rgba(38, 166, 154,0.85)',
  //       borderColor: 'rgba(38, 166, 154,1)',
  //       borderCapStyle: 'butt',
  //       borderDash: [],
  //       borderDashOffset: 0.0,
  //       borderJoinStyle: 'miter',
  //       pointBorderColor: '#ffffff',
  //       pointBackgroundColor: 'rgba(38, 166, 154,1)',
  //       pointBorderWidth: 1,
  //       pointHoverRadius: 5,
  //       pointHoverBackgroundColor: 'rgba(38, 166, 154,1)',
  //       pointHoverBorderColor: 'rgba(240,240,240,1)',
  //       pointHoverBorderWidth: 2,
  //       pointRadius: 4,
  //       pointHitRadius: 10,
  //       data: [65, 59, 80, 81, 56, 55, 40, 71, 66],
  //     },
  //   ],
  // }

  // const options3 = {
  //   maintainAspectRatio: false,
  //   legend: {
  //     display: false,
  //   },
  //   tooltips: {
  //     bodySpacing: 4,
  //     mode: 'nearest',
  //     intersect: 0,
  //     position: 'nearest',
  //     xPadding: 10,
  //     yPadding: 10,
  //     caretPadding: 10,
  //   },
  //   responsive: 1,
  /*scales: {
        yAxes: [{
          gridLines: {
              zeroLineColor: "transparent",
              color: "rgba(0, 0, 0, 0.07)",
              drawBorder: false
          }
        }],
        xAxes: [{
          display:0,
          ticks: {
              display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
    },*/
  // scales: {
  //   xAxes: [
  //     {
  //       display: 1,
  //       gridLines: {
  //         color: 'rgba(0, 0, 0, 0.01)',
  //       },
  //       ticks: {
  //         display: false,
  //       },
  //     },
  //   ],
  //   yAxes: [
  //     {
  //       categoryPercentage: 0.8,
  //       barPercentage: 0.6,
  //       maxBarThickness: 12,
  //       display: 1,
  //       gridLines: {
  //         color: 'rgba(0, 0, 0, 0.01)',
  //       },
  //       ticks: {
  //         display: true,
  //       },
  //     },
  //   ],
  // },
  // layout: {
  //   padding: { left: 0, right: 0, top: 0, bottom: 0 },
  // },
  // }

  if (props.loading) {
    return <SkeletonTeacherHome />
  }
  getChargeAcademic();
  return (
    <div>
      <div className="content">
        <div className="row">
          {charges.map((charge, key) => {
            const name = charge.courseDictate.nameCourse;
            console.log(name);
            return (
              <div className="col-md-6 col-lg-3" key={key}>
                <h3> {charge.courseDictate.nameCourse}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Hospital
