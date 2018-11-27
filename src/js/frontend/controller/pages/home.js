class Home {

	init() {
		this.template();
	}

	template() {
		let container, content, formData, player, qstn = new Qstn();
		container = jQuery('.mvt-page');
		content = 	`<div class="mvt-homepage-cover">
						<div class="mvt-homepage-cover-content mvt-wrapper">
							<div class="mvt-homepage-slider owl-carousel owl-theme">
								<div class="item">
									<div class="mvt-homepage-slide" style="background: url(https://media.istockphoto.com/photos/dermabrasion-face-hardware-cosmetology-picture-id641652870?s=2048x2048); background-size: cover; background-position: center center;"></div>
									<div class="mvt-homepage-slide-text">
										<div class="mvt-homepage-slide-title">Dr. Annie Barseghian, MD</div>
										<div class="mvt-homepage-slide-subtitle">Family Medicine</div>
									</div>
								</div>
								<div class="item">
									<div class="mvt-homepage-slide" style="background: url(https://media.istockphoto.com/photos/doctor-talking-to-patient-picture-id821173314?s=2048x2048); background-size: cover; background-position: center center;"></div>
									<div class="mvt-homepage-slide-text">
										<div class="mvt-homepage-slide-title">Dr. Annie Barseghian, MD</div>
										<div class="mvt-homepage-slide-subtitle">Family Medicine</div>
									</div>
								</div>
								<div class="item">
									<div class="mvt-homepage-slide" style="background: url(https://media.istockphoto.com/photos/attractive-woman-visiting-dental-clinic-picture-id648054334?s=2048x2048); background-size: cover; background-position: center center;"></div>
									<div class="mvt-homepage-slide-text">
										<div class="mvt-homepage-slide-title">Dr. Annie Barseghian, MD</div>
										<div class="mvt-homepage-slide-subtitle">Family Medicine</div>
									</div>
								</div>
							</div>
						</div>
						<div class="mvt-page-cover-overlay"></div>
					</div>
					<div class="mvt-page-content">
						<div class="mvt-container mvt-wrapper">
							<div class="mvt-xs-100 mvt-sm-100 mvt-md-75 mvt-lg-75">
								<div class="mvt-page-section">
									<div class="mvt-page-title">Dr. Barseghian</div>
									<div class="mvt-page-text">
										Welcome to our office!  Striving to provide the best Primary Care experience is our goal.  Whether you need a Same-Day appointment for acute problems, or care of your routine medical needs, we are here to provide high quality medical care. Our services include Routine Wellness Exams for both adults and children, Gynecological Exams, Sports physicals as well as caring for Chronic Medical Conditions. Dr. Barseghian is well trained in diagnosing and caring for  patients with Diabetes, Cholesterol, High Blood Pressure, Anemia, Osteoporosis, and Asthma & Allergies to name a few.
									</div>
								</div>
							</div>
							<div class="mvt-xs-100 mvt-sm-100 mvt-md-100 mvt-lg-100">
								<div class="mvt-page-section">
									<div class="mvt-page-title">Our services</div>
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

		window.youtubeReady = function () {
		    player = new YT.Player('mvt-page-home-cover-video', {
	            width: 1280,
	            height: 720,
	            playerVars: {
	            	autoplay: 1,
	                controls: 0,
	                showinfo: 0,
	                rel: 0
	            },
	            videoId: 'PzVA6gYtPc0',
	            events: {
	                onReady: function(event){
			            player.mute();
			        	player.playVideo();
			        }
	            }
	        });
		};
		if (window.YT) {
		    youtubeReady();
		}

		// var app = document.getElementById('mvt-homepage-cover-title');
		// var typewriter = new Typewriter(app, {
		//     loop: true
		// });

		// typewriter.typeString('health')
		//     .pauseFor(2500)
		//     .deleteAll()
		//     .typeString('beauty')
		//     .pauseFor(2500)
		//     .deleteAll()
		//     .typeString('life')
		//     .pauseFor(1500)
		//     .start();

		// formData = {
		// 	"id":"qstn-contact-form",
		// 	"name":"botox-quiz",
		// 	"sections":[
		// 		{
		// 			"title":"what is your skin type?",
		// 			"hasTitle": true,
		// 			"fields":[
		// 				{
		// 					"title":"",
		// 					"placeholder":"",
		// 					"size":"mvt-xs-100 mvt-sm-100 mvt-md-100 mvt-lg-100",
		// 					"params":{
		// 						"type":"radios",
		// 						"set":"skin-type",
		// 						"min":"3",
		// 						"max":"36",
		// 						"required":true,
		// 						"radio":[
		// 							{"title":"normal","value":"normal"},{"title":"oily","value":"oily"},{"title":"dry","value":"dry"},{"title":"combination","value":"combination"}
		// 						]
		// 					},
		// 					"class":{
		// 						"item":"qstn-radio-skin-type",
		// 						"parent":""
		// 					}
		// 				}
		// 			]
		// 		},
		// 		{
		// 			"title":"what is your skin texture?",
		// 			"hasTitle": true,
		// 			"fields":[
		// 				{
		// 					"title":"",
		// 					"placeholder":"",
		// 					"size":"mvt-xs-100 mvt-sm-100 mvt-md-100 mvt-lg-100",
		// 					"params":{
		// 						"type":"radios",
		// 						"set":"skin-texture",
		// 						"min":"3",
		// 						"max":"36",
		// 						"required":true,
		// 						"radio":[
		// 							{"title":"smooth","value":"smooth"},{"title":"rough","value":"rough"},{"title":"patchy & discolored","value":"patchy & discolored"},{"title":"wrinkled","value":"wrinkled"}
		// 						]
		// 					},
		// 					"class":{
		// 						"item":"qstn-radio-skin-texture",
		// 						"parent":""
		// 					}
		// 				}
		// 			]
		// 		}
		// 	],
		// 	"submit":{
		// 		"button":{
		// 			"states":{
		// 				"prev":{
		// 					"title":"back"
		// 				},
		// 				"next":{
		// 					"title":"continue"
		// 				},
		// 				"finish":{
		// 					"title":"submit"
		// 				}
		// 			},
		// 			"class":"",
		// 			"style":"background:#233768;color: #fff"
		// 		},
		// 		"message":"thank you for signing up!"
		// 	},
		// 	"ajax":{
		// 		"url":"send-contact"
		// 	}
		// };
		// qstn.build(formData);

		jQuery('.mvt-homepage-slider').owlCarousel({
		    loop: true,
		    margin: 0,
		    nav: false,
		    dots: false,
		    responsive: {
		        0: { items:1 }
		    },
		    autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
		});

	}

}