class Appointment {

	init() {
		this.template();
	}

	template() {
		let container, content;
		container = jQuery('.mvt-page');
		content = 	`<div class="mvt-page-cover mvt-wrapper mvt-25">
						<div class="mvt-container">
							<div class="mvt-page-cover-content">
								<div class="mvt-page-cover-title mvt-wrapper">appointments</div>
								<div class="mvt-page-cover-subtitle mvt-wrapper">schedule a time to come in</div>
							</div>
						</div>
					</div>
					<div class="mvt-page-content">
						<div class="mvt-container mvt-wrapper">
							<div class="mvt-xs-100 mvt-sm-100 mvt-md-100 mvt-lg-100">
								<div class="mvt-page-section">
									<div id="calendar"></div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		jQuery('#calendar').fullCalendar({
	      header: {
	        left: 'prev,next today',
	        center: 'title',
	        right: 'month,agendaWeek,agendaDay,listWeek'
	      },
	      defaultDate: moment().format(), // defaults to today
	      navLinks: true, // can click day/week names to navigate views
	      editable: true,
	      eventLimit: true, // allow "more" link when too many events
	      events: [
	        {
	          title: 'All Day Event',
	          start: '2018-03-01',
	        },
	        {
	          title: 'Long Event',
	          start: '2018-03-07',
	          end: '2018-03-10'
	        },
	        {
	          id: 999,
	          title: 'Repeating Event',
	          start: '2018-03-09T16:00:00'
	        },
	        {
	          id: 999,
	          title: 'Repeating Event',
	          start: '2018-03-16T16:00:00'
	        },
	        {
	          title: 'Conference',
	          start: '2018-03-11',
	          end: '2018-03-13'
	        },
	        {
	          title: 'Meeting',
	          start: '2018-03-12T10:30:00',
	          end: '2018-03-12T12:30:00'
	        },
	        {
	          title: 'Lunch',
	          start: '2018-09-12T12:00:00'
	        },
	        {
	          title: 'Meeting',
	          start: '2018-03-12T14:30:00'
	        },
	        {
	          title: 'Happy Hour',
	          start: '2018-03-12T17:30:00'
	        },
	        {
	          title: 'Dinner',
	          start: '2018-03-12T20:00:00'
	        },
	        {
	          title: 'Birthday Party',
	          start: '2018-03-13T07:00:00'
	        },
	        {
	          title: 'Click for Google',
	          url: 'http://google.com/',
	          start: '2018-03-28'
	        }
	      ]
	    });

	}

}