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
								<div class="mvt-page-cover-title mvt-wrapper">patient info</div>
								<div class="mvt-page-cover-subtitle mvt-wrapper">we have you covered</div>
							</div>
						</div>
					</div>
					<div class="mvt-page-content">
						<div class="mvt-container mvt-wrapper">
							<div class="mvt-xs-100 mvt-sm-100 mvt-md-100 mvt-lg-100">
								<div class="mvt-page-section">
									<div class="mvt-page-tiles mvt-wrapper">
										<div class="mvt-xs-100 mvt-sm-100 mvt-md-50 mvt-lg-50">
											<a href="form.html?id=patient-registration">
												<div class="mvt-page-tile">
													<div class="mvt-page-tile-overlay mvt-wrapper"></div>
													<div class="mvt-page-tile-image" style="background: url(https://media.istockphoto.com/photos/filling-out-patient-information-form-picture-id922715792?s=2048x2048); background-position: center center; background-size: cover;"></div>
												</div>
											</a>
											<div class="mvt-page-tile-text">new patient registration</div>
										</div>
										<div class="mvt-xs-100 mvt-sm-100 mvt-md-50 mvt-lg-50">
											<a href="form.html?id=medical-records-request">
												<div class="mvt-page-tile">
													<div class="mvt-page-tile-overlay mvt-wrapper"></div>
													<div class="mvt-page-tile-image" style="background: url(https://media.istockphoto.com/photos/medical-records-patient-chart-picture-id486105325?s=2048x2048); background-position: center center; background-size: cover;"></div>
												</div>
											</a>
											<div class="mvt-page-tile-text">medical records request</div>
										</div>
										<div class="mvt-xs-100 mvt-sm-100 mvt-md-50 mvt-lg-50">
											<a href="form.html?id=xeomin-consent">
												<div class="mvt-page-tile">
													<div class="mvt-page-tile-overlay mvt-wrapper"></div>
													<div class="mvt-page-tile-image" style="background: url(https://media.istockphoto.com/photos/privacy-rights-request-form-picture-id669445114?s=2048x2048); background-position: center center; background-size: cover;"></div>
												</div>
											</a>
											<div class="mvt-page-tile-text">xeomin consent</div>
										</div>
										<div class="mvt-xs-100 mvt-sm-100 mvt-md-50 mvt-lg-50">
											<a href="form.html?id=xeomin-after-care">
												<div class="mvt-page-tile">
													<div class="mvt-page-tile-overlay mvt-wrapper"></div>
													<div class="mvt-page-tile-image" style="background: url(https://media.istockphoto.com/photos/botox-woman-fillers-spa-facial-young-treatment-syringe-picture-id665238784?s=2048x2048); background-position: center center; background-size: cover;"></div>
												</div>
											</a>
											<div class="mvt-page-tile-text">xeomin after care instructions</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

}