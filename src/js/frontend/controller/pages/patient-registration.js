class Patient {

	init() {
		this.template();
	}

	template() {
		let container, content;
		container = jQuery('.mvt-page');
		content = 	`<div class="mvt-page-cover mvt-wrapper mvt-25">
						<div class="mvt-container">
							<div class="mvt-page-cover-content">
								<div class="mvt-page-cover-title mvt-wrapper">New Patient</div>
								<div class="mvt-page-cover-subtitle mvt-wrapper">Registration Form</div>
							</div>
						</div>
					</div>
					<div class="mvt-page-content">
						<div class="mvt-container mvt-wrapper">
							<div class="mvt-xs-100 mvt-sm-100 mvt-md-75 mvt-lg-75">
								<div class="mvt-page-section">
									<div class="qstn-contact-form"></div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);

		jQuery.ajax({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: 'https://s3-us-west-2.amazonaws.com/dr-annie/data/forms/patient-registration.json',
            complete: function(jsondata) {
            	let pageData = jsondata.responseText, qstn = new Qstn(), searcher = new Searcher();
				if(pageData) {
					qstn.build(JSON.parse(pageData));
					qstn.init();
					searcher.init();
				}
				else {
					console.log('failed to load page');
				}
            }
        });

	}

}