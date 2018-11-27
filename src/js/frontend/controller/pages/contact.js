class Contact {

	init() {
		this.template();
	}

	template() {
		let container, content, formData, qstn = new Qstn();
		container = jQuery('.mvt-page');
		content = 	`<div class="mvt-page-cover mvt-wrapper mvt-25">
						<div class="mvt-container">
							<div class="mvt-page-cover-content">
								<div class="mvt-page-cover-title mvt-wrapper">contact</div>
								<div class="mvt-page-cover-subtitle mvt-wrapper">we want to hear from you</div>
							</div>
						</div>
					</div>
					<div class="mvt-page-content">
						<div class="mvt-container mvt-wrapper">
							<div class="mvt-xs-100 mvt-sm-100 mvt-md-60 mvt-lg-60">
								<div class="mvt-page-section">
									<div class="qstn-contact-form"></div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);

		formData = {
			"id":"qstn-contact-form",
			"name":"signup",
			"sections":[
				{
					"title":"section 1",
					"fields":[
						{
							"title":"name",
							"placeholder":"Barry Alien",
							"params":{
								"type":"text",
								"set":"name",
								"min":"3",
								"max":"36",
								"required":true
							},
							"class":{
								"item":"",
								"parent":""
							}
						},
						{
							"title":"email",
							"placeholder":"barry@example.com",
							"params":{
								"type":"text",
								"set":"email",
								"min":"5",
								"max":"90",
								"required":true
							},
							"class":{
								"item":"",
								"parent":""
							}
						},
						{
							"title":"phone",
							"placeholder":"(949) 999-9999",
							"params":{
								"type":"text",
								"set":"phone",
								"min":"14",
								"max":"14",
								"required":true
							},
							"class":{
								"item":"qstn-form-phone-mask",
								"parent":""
							}
						},
						{
							"title":"message",
							"placeholder":"What's on your mind...",
							"params":{
								"type":"textarea",
								"set":"message",
								"min":"15",
								"max":"250",
								"required":true
							},
							"class":{
								"item":"",
								"parent":""
							}
						}
					]
				}
			],
			"submit":{
				"button":{
					"states":{
						"prev":{
							"title":"back"
						},
						"next":{
							"title":"continue"
						},
						"finish":{
							"title":"submit"
						}
					},
					"class":"",
					"style":"background:#233768;color: #fff"
				},
				"message":"thank you for signing up!"
			},
			"ajax":{
				"url":"send-contact"
			}
		};
		qstn.build(formData);

	}

}