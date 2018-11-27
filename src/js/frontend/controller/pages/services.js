class Services {

	init() {
		this.template();
	}

	template() {
		let container, content;
		container = jQuery('.mvt-page');
		content = 	`<div class="mvt-page-cover mvt-wrapper mvt-25">
						<div class="mvt-container">
							<div class="mvt-page-cover-content">
								<div class="mvt-page-cover-title mvt-wrapper">services</div>
								<div class="mvt-page-cover-subtitle mvt-wrapper">what we offer</div>
							</div>
						</div>
					</div>
					<div class="mvt-page-content">
						<div class="mvt-container mvt-wrapper">
							<div class="mvt-xs-100 mvt-sm-100 mvt-md-100 mvt-lg-100">
								<div class="mvt-page-section">
									<div class="mvt-page-tiles mvt-wrapper">

										<div class="mvt-xs-100 mvt-sm-100 mvt-md-50 mvt-lg-50">
											<a href="medical-practice.html">
												<div class="mvt-page-tile">
													<div class="mvt-page-tile-overlay mvt-wrapper"></div>
													<div class="mvt-page-tile-image" style="background: url(https://via.placeholder.com/1920x1080); background-position: center center; background-size: cover;"></div>
												</div>
												<div class="mvt-page-tile-text">medical practice</div>
											</a>
										</div>

										<div class="mvt-xs-100 mvt-sm-100 mvt-md-50 mvt-lg-50">
											<a href="aesthetic-practice.html">
												<div class="mvt-page-tile">
													<div class="mvt-page-tile-overlay mvt-wrapper"></div>
													<div class="mvt-page-tile-image" style="background: url(https://via.placeholder.com/1920x1080); background-position: center center; background-size: cover;"></div>
												</div>
												<div class="mvt-page-tile-text">aesthetic practice</div>
											</a>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

}