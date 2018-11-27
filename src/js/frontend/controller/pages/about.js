class About {

	init() {
		this.template();
	}

	template() {
		let container, content;
		container = jQuery('.mvt-page');
		content = 	`<div class="mvt-page-cover mvt-wrapper mvt-25">
						<div class="mvt-container">
							<div class="mvt-page-cover-content">
								<div class="mvt-page-cover-title mvt-wrapper">about</div>
								<div class="mvt-page-cover-subtitle mvt-wrapper">Dr. Annie Barseghian</div>
							</div>
						</div>
					</div>
					<div class="mvt-page-content">
						<div class="mvt-container mvt-wrapper">
							<div class="mvt-xs-100 mvt-sm-100 mvt-md-100 mvt-lg-100">
								<div class="mvt-page-section">
									<div class="mvt-wrapper">
										<div class="mvt-xs-100 mvt-sm-100 mvt-md-80 mvt-lg-80">
											<div class="mvt-page-text-block">
												<div class="mvt-page-text">
													Welcome to our office! Striving to provide the best Primary Care experience is our goal. Whether you need a Same-Day appointment for acute problems, or care of your routine medical needs, we are here to provide high quality medical care. Our services include Routine Wellness Exams for both adults and children, Gynecological Exams, Sports physicals as well as caring for Chronic Medical Conditions. 
												</div>
											</div>
										</div>
										<div class="mvt-xs-100 mvt-sm-100 mvt-md-40 mvt-lg-40">
											<img src="http://www.barseghianmd.com/images/241_bar3.jpg" width="80%">
										</div>
										<div class="mvt-xs-100 mvt-sm-100 mvt-md-60 mvt-lg-60">
											<div class="mvt-page-text-block">
												<div class="mvt-page-text">
													Dr. Barseghian is well trained in diagnosing and caring for patients with Diabetes, Cholesterol, High Blood Pressure, Anemia, Osteoporosis, and Asthma & Allergies to name a few.
												</div>
												<br>
												<div class="mvt-page-text">
													Our very friendly staff is ready to assist in your many medical needs. We are also able to provide fluent translation for our patients speaking Spanish or Armenian. 
												</div>
												<br>
												<div class="mvt-page-text">
													Currently we are accepting most insurance, and are continuing to add more. Feel free to contact us with any questions. Our new patient registration forms are easily available on the "Forms" link. You may fill these out at your leisure and bring them with you the day of your visit.
												</div>
											</div>
										</div>
										<div class="mvt-xs-100 mvt-sm-100 mvt-md-100 mv-lg-100">
											<div class="mvt-page-text"><strong>Medical Education & Training</strong></div>
											<div class="mvt-page-text">
												Medical Degree: University of Southern California (USC) /Keck School of Medicine, Los Angeles CA
											</div>
											<div class="mvt-page-text">
												Residency: Family Medicine at Glendale Adventist Medical Center, Glendale, CA
											</div>
											<div class="mvt-page-text"><strong>Work Experience:</strong></div>
											<div class="mvt-page-text">
												Physician at Motion Picture and Television Fund – patient care diagnosis and minor surgeries, joint injections.
											</div>
											<div class="mvt-page-text">
												Physician at Kaiser Permanente, Glendale, CA and Sylmar Medical Center, Sylmar, CA
											</div>
											<div class="mvt-page-text"><strong>Honors and Awards:</strong></div>
											<div class="mvt-page-text">
												<ul class="mvt-page-list">
													<li>FUHS/CMS Pathology Honors Program</li>
													<li>UCLA Chancellor’s Award</li>
													<li>Community Service Awards – Bruin Bells, UCLA</li>
													<li>AMAA Scholarship Award</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);

	}

}