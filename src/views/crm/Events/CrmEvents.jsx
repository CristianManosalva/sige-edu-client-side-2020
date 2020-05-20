import React from 'react'
import {
   Row, Col
} from 'reactstrap';

import {  } from 'components';

import BigCalendar from 'react-big-calendar'
import events from 'views/crm/Events/events.js'
import moment from 'moment'; // new
import 'moment/locale/es';   // new
import 'react-big-calendar/lib/css/react-big-calendar.css';


const messages = { // new
    allDay: 'todos los días',
    previous: 'anterior',
    next: 'siguiente',
    today: 'hoy',
    month: 'mes',
    week: 'semana',
    work_week: 'laboral',
    day: 'día',
    agenda: 'agenda'
  };


//moment.locale('en');
BigCalendar.momentLocalizer(moment);

class CrmEvents extends React.Component {
  render() {
 
	const allViews = Object
	  .keys(BigCalendar.Views)
	  .map(k => BigCalendar.Views[k])

  	//console.log({events});
    return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Calendario Escolar</h1>
                        </div>
                    </div>


                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Calendario/Schedule</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            

									  <div style={{ height: 700, width: 100+'%' }}>
									    <BigCalendar
                                          events={events}
                                          messages={messages} // new
                                          step={60}
                                          views={allViews}
                                          showMultiDayTimes
									      defaultDate={new Date(2020, 4, 21)}
									    />
									  </div>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>

                        </Col>

                    </Row>
                </div>
            </div>
    	);
  }
}

export default CrmEvents;
