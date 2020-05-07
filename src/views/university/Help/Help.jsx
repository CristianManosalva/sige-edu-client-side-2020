import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'

const Help = () => {
  return (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Material de ayuda</h1>
              </div>
            </div>

            <div className="col-xl-12">
              <section className="box ">
                {/* <header className="panel_header">
                /*                                 <h2 className="title float-left">Próximamente material de ayuda...</h2>
                   
                </header> 
                */}
                <div className="content-body">
                  <div className="row">
                    <div className="col-12">
                      <h3>Próximamente tendrémos disponible material de ayuda...</h3>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Col>
        </Row>
      </div>
    </div>

// <div className="row">
//{props.courses.map((group, key) => {
  //return ( */}

    // <div className="col-md-6 col-lg-6 col-sm-12" key={key}>
    //   <div className="team-member">
    //     <div className="team-img">
    //         {/* <img className="img-fluid" src={group.avatar} alt="" /> */}
    //         <img
    //           className="img-fluid"
    //           src={tempImg}
    //           alt=""
    //           style={{ objectFit: 'cover' }}
    //         />
    //     </div>
    //       <div className="team-info">
    //         <h3>
    //           <NavLink
    //             to={
    //               BASEDIR +
    //               `/university/activity/${teacher_id}/${group.nameGroup}/${materia_id}`
    //             }
    //           >
    //             {group.nameGroup
    //               ? group.nameGroup.split('-')[0] +
    //                 '-' +
    //                 group.nameGroup.split('-')[1]
    //               : 'Grupo *?*?'}{' '}
    //             {group.journeyGroup === 1 ? 'Mañana' : 'Tarde'}
    //           </NavLink>
    //         </h3>
    //         <span>Jornada </span>
    //         <span>{group.journeyGroup === 1 ? 'Mañana' : 'Tarde'}</span>
    //         {/* <ul className="social-icons list-inline list-unstyled"> Se podria usar para lincar estadisticas
    //           <li className="list-inline-item">
    //             <a href="#!">
    //               <i className="i-envelope icon-primary icon-xs"></i>
    //             </a>
    //           </li>
    //         </ul> */}
    //         <p>{group.msg}</p>
    //       </div>
    //     </div>
    //   </div>

// <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" key={key}>
// <div className="team-member">
// <div className="team-img">
// <img
//               className="img-fluid"
//               src={tempImg}
//               alt=""
//               style={{ objectFit: 'cover' }}
//             />
// </div>
// <div className="team-info">
// <h3>
// <NavLink
// to={
//   BASEDIR +
//   `/university/activity/${teacher_id}/${group.nameGroup}/${materia_id}`
// }
// >
// {group.nameGroup
//   ? group.nameGroup.split('-')[0] +
//     '-' +
//     group.nameGroup.split('-')[1]
//   : 'Grupo *?*?'}{' '}
// {group.journeyGroup === 1 ? 'Mañana' : 'Tarde'}
// </NavLink>
// </h3>
// <span>Jornada </span>
// <span>{group.journeyGroup === 1 ? 'Mañana' : 'Tarde'}</span>
// <p>{group.msg}</p>
// <ul className="social-icons list-inline list-unstyled">
// <li className="list-inline-item">
//   <a href="#!">
//     <i className="i-envelope icon-primary icon-xs"></i>
//   </a>
// </li>
// </ul>
// </div>
// </div>
// </div>
//  )
// })}
// </div>
  )
}

export default Help
