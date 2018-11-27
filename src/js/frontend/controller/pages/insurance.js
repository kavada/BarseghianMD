class Insurance {

	init() {
		this.template();
	}

	template() {
		let container, content;
		container = jQuery('.mvt-page');
		content = 	`<div class="mvt-page-cover mvt-wrapper mvt-25">
						<div class="mvt-container">
							<div class="mvt-page-cover-content">
								<div class="mvt-page-cover-title mvt-wrapper">insurance</div>
								<div class="mvt-page-cover-subtitle mvt-wrapper">what we accept</div>
							</div>
						</div>
					</div>
					<div class="mvt-page-content">
						<div class="mvt-container mvt-wrapper">
							<div class="mvt-xs-100 mvt-sm-100 mvt-md-100 mvt-lg-100">
								<div class="mvt-page-section">
									<div class="mvt-wrapper">
										<div class="mvt-xs-100 mvt-sm-100 mvt-md-100 mv-lg-100">
											<div class="mvt-page-text"><strong>Our practice accepts the following plans:</strong></div>
											<div class="mvt-page-text"><strong>PPO plans:</strong></div>
											<div class="mvt-page-text">
												<ul class="mvt-page-list">
													<li>Medicare with secondary PPO</li>
													<li>Anthem Blue Cross</li>
													<li>Blue Shield of CA  (Not Covered California plans)</li>
													<li>United Healthcare</li>
													<li>Cigna</li>
													<li>Aetna</li>
												</ul>
											</div>
											<div class="mvt-page-text">You may pay your statement balance <a href="javascript:void(0)" style="color: #000;"><strong>here</strong></a></div>
											<div class="mvt-page-text">For questions regarding your account, please call (323) 257-8704</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
	}

}