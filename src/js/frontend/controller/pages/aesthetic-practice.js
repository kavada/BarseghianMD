class AestheticPractice {

	init() {
		this.template();
	}

	template() {
		let container, content;
		container = jQuery('.mvt-page');
		content = 	`<div class="mvt-page-cover mvt-wrapper mvt-25">
						<div class="mvt-container">
							<div class="mvt-page-cover-content">
								<div class="mvt-page-cover-title mvt-wrapper">aesthetic practice</div>
								<div class="mvt-page-cover-subtitle mvt-wrapper">what we offer</div>
							</div>
						</div>
					</div>
					<div class="mvt-page-content">
						<div class="mvt-container mvt-wrapper">
							<div class="mvt-xs-100 mvt-sm-100 mvt-md-100 mvt-lg-100">
								<div class="mvt-page-section">
									<div class="mvt-page-tiles mvt-wrapper">

										<div class="mvt-xs-100 mvt-sm-100 mvt-md-33 mvt-lg-33">
											<div class="mvt-page-tile">
												<div class="mvt-page-tile-overlay mvt-wrapper"></div>
												<div class="mvt-page-tile-image" style="background: url(https://media.istockphoto.com/photos/listening-to-a-childs-heartbeat-picture-id623436798?s=2048x2048); background-position: center center; background-size: cover;"></div>
											</div>
											<div class="mvt-page-tile-text">wellness exams</div>
										</div>
										<div class="mvt-xs-100 mvt-sm-100 mvt-md-33 mvt-lg-33">
											<div class="mvt-page-tile">
												<div class="mvt-page-tile-overlay mvt-wrapper"></div>
												<div class="mvt-page-tile-image" style="background: url(https://media.istockphoto.com/photos/having-advise-with-a-gynecologist-picture-id638749062?s=2048x2048); background-position: center center; background-size: cover;"></div>
											</div>
											<div class="mvt-page-tile-text">gynecological exams</div>
										</div>
										<div class="mvt-xs-100 mvt-sm-100 mvt-md-33 mvt-lg-33">
											<div class="mvt-page-tile">
												<div class="mvt-page-tile-overlay mvt-wrapper"></div>
												<div class="mvt-page-tile-image" style="background: url(https://media.istockphoto.com/photos/volleyball-player-in-physical-therapy-picture-id507273276?s=2048x2048); background-position: center center; background-size: cover;"></div>
											</div>
											<div class="mvt-page-tile-text">sports physicals</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

}