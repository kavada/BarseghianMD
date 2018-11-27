class App {

	init() {
		this.app = jQuery('.mvt-app');
		this.info = {'type':'frontend'};
		this.meta();
		this.template();
		this.events();
		this.onScreen();
		this.disableZoom();
		this.topLoad();
	}

	meta() {
		let container, content;
		container = jQuery('head');
		content = 	`<title>Annie Barseghian MD</title>
					<meta name="viewport" content="width=device-width, initial-scale=1">`;
		container.prepend(content);
	}

	template() {
		let info;
		info = this.info;
		switch(info.type) {
			case 'frontend':
				this.header();
				this.sidebar();
				this.page();
				this.footer();
			break;
			case 'admin':

			break;
		}
	}

	header() {
		let container, content;
		container = this.app;
		content = 	`<!-- Start ~ Header -->
					<div class="mvt-header mvt-25 mvt-wrapper">
						<div class="mvt-header-top mvt-wrapper">
							<div class="mvt-header-info">
								<div class="mvt-header-info-list mvt-wrapper">
									<!-- <div class="mvt-header-info-item mvt-header-info-address">800 Fairmount Ave., Suite 210 Pasadena, CA 91105</div>
									<div class="mvt-header-info-item mvt-header-info-phone">626.381.9599</div> -->
								</div>
							</div>
							<div class="mvt-header-cta mvt-wrapper"></div>
							<div class="mvt-header-social">
								<div class="mvt-header-social-list mvt-wrapper">
									<div class="mvt-header-social-item mvt-wrapper">
										<span class="fa fa-facebook"></span>
									</div>
									<div class="mvt-header-social-item mvt-wrapper">
										<span class="fa fa-instagram"></span>
									</div>
									<div class="mvt-header-social-item mvt-wrapper">
										<span class="fa fa-youtube"></span>
									</div>
									<div class="mvt-header-social-item mvt-wrapper">
										<span class="fa fa-linkedin"></span>
									</div>
									<div class="mvt-header-social-item mvt-wrapper">
										<span class="fa fa-yelp"></span>
									</div>
								</div>
							</div>
						</div>
						<div class="mvt-header-main mvt-wrapper">
							<div class="mvt-header-logo mvt-wrapper">
								
							</div>
							<div class="mvt-header-menu-list mvt-wrapper">
								<div class="mvt-header-menu-list-container mvt-wrapper">
									<div class="mvt-header-menu-item mvt-wrapper" data-name="">
										<a href="home.html">home</a>
									</div>
									<div class="mvt-header-menu-item mvt-wrapper" data-name="about">
										<a href="about.html">about</a>
									</div>
									<div class="mvt-header-menu-item mvt-wrapper" data-name="">
										<a href="insurance.html">insurance</a>
									</div>
									<div class="mvt-header-menu-logo" data-name="">
										<a href="home.html">
											<div class="mvt-header-menu-logo-letter">B</div>
											<div class="mvt-header-menu-logo-title">Dr. Annie Barseghian</div>
											<div class="mvt-header-menu-logo-square"></div>
										</a>
									</div>
									<div class="mvt-header-menu-item mvt-wrapper" data-name="services">
										<a href="services.html">services</a>
									</div>
									<div class="mvt-header-menu-item mvt-wrapper" data-name="patient-info">
										<a href="patient-info.html">forms</a>
									</div>
									<div class="mvt-header-menu-item mvt-wrapper" data-name="contact">
										<a href="contact.html">contact</a>
									</div>
								</div>
							</div>
							<div class="mvt-header-side mvt-wrapper">
								<div class="mvt-header-side-lines">
									<div class="mvt-header-side-line"></div>
									<div class="mvt-header-side-line"></div>
									<div class="mvt-header-side-line"></div>
								</div>
							</div>
						</div>
					</div>
					<!-- End ~ Header -->`;
		container.append(content);
	}

	sidebar() {
		let container, content;
		container = this.app;
		content = 	`<!-- Start ~ Sidebar -->
					<div class="mvt-sidebar-container">
						<div class="mvt-sidebar mvt-25 mvt-wrapper">
							
							<div class="mvt-sidebar-content">
								<div class="mvt-sidebar-section mvt-sidebar-section-menu active">
									<div class="mvt-sidebar-section-cover mvt-wrapper">
										<div class="mvt-sidebar-section-title">menu</div>
									</div>
									<div class="mvt-sidebar-section-content mvt-sidebar-menu-content">
										<div class="mvt-sidebar-section-menu-group">
											<div class="mvt-sidebar-section-menu-title mvt-wrapper">
												<a class="mvt-sidebar-section-menu-link mvt-wrapper" href="home.html">home</a>
											</div>
										</div>
										<div class="mvt-sidebar-section-menu-group">
											<div class="mvt-sidebar-section-menu-title mvt-wrapper">
												<a class="mvt-sidebar-section-menu-link mvt-wrapper" href="about.html">about</a>
											</div>
										</div>
										<div class="mvt-sidebar-section-menu-group">
											<div class="mvt-sidebar-section-menu-title mvt-wrapper">
												<a class="mvt-sidebar-section-menu-link mvt-wrapper" href="services.html">services</a>
											</div>
										</div>
										<div class="mvt-sidebar-section-menu-group">
											<div class="mvt-sidebar-section-menu-title mvt-wrapper">
												<a class="mvt-sidebar-section-menu-link mvt-wrapper" href="patient-info.html">patient info</a>
											</div>
										</div>
										<div class="mvt-sidebar-section-menu-group">
											<div class="mvt-sidebar-section-menu-title mvt-wrapper">
												<a class="mvt-sidebar-section-menu-link mvt-wrapper" href="contact.html">contact</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="mvt-sidebar-overlay"></div>
					</div>
					<!-- End ~ Sidebar -->`;
		container.append(content);

		jQuery('.mvt-header-side-lines').on('click', () => {
			jQuery('.mvt-sidebar').addClass('active');
			jQuery('.mvt-sidebar-overlay').fadeIn();
		});

		jQuery('.mvt-sidebar-overlay').on('click', () => {
			jQuery('.mvt-sidebar-overlay').fadeOut();
			jQuery('.mvt-sidebar').removeClass('active');
		});

		jQuery('.mvt-sidebar-section-menu-title').on('click', () => {
			let item, list;
			item = jQuery(this);
			list = item.siblings('.mvt-sidebar-section-menu-list');
			jQuery('.mvt-sidebar-section-menu-list').slideUp(250);
			if(item.hasClass('active')) {
				item.removeClass('active');
			}
			else {
				jQuery('.mvt-sidebar-section-menu-title').removeClass('active');
				item.addClass('active');
				list.slideDown(250);
			}
		});

	}

	page() {
		let container, content;
		container = this.app;
		content = 	`<!-- Start ~ Page -->
					<div class="mvt-page"></div>
					<!-- End ~ Page -->`;
		container.append(content);
	}

	footer() {
		let container, content;
		container = this.app;
		content = 	`<!-- Start ~ Footer -->
					<div class="mvt-footer">

						<div class="mvt-footer-cta-holder"></div>
						
						<!-- Start ~ Footer CTA -->
						<div class="mvt-footer-cta mvt-25">
							<div class="mvt-container mvt-wrapper">
								<div class="mvt-footer-cta-text">Want to make an appointment to see Dr. Barseghian?</div>
								<div class="mvt-footer-cta-btn">
									<a href="appointment.html" class="mvt-wrapper" style="color: inherit;">
										<div class="mvt-wrapper">
											schedule an appointment
										</div>
									</a>
								</div>
							</div>
						</div>
						<!-- End ~ Footer CTA -->

						<!-- Start ~ Footer Content -->
						<div class="mvt-footer-content">
							<div class="mvt-footer-content-container mvt-container mvt-wrapper">
								<div class="mvt-xs-100 mvt-sm-50 mvt-md-25 mvt-lg-25">
									<div class="mvt-footer-content-item">
										<div class="mvt-footer-content-title">about</div>
										<div class="mvt-footer-content-text">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat.
										</div>
									</div>
								</div>
								<div class="mvt-xs-100 mvt-sm-50 mvt-md-25 mvt-lg-25">
									<div class="mvt-footer-content-item">
										<div class="mvt-footer-content-title">services</div>
										<div class="mvt-footer-content-text">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat.
										</div>
									</div>
								</div>
								<div class="mvt-xs-100 mvt-sm-50 mvt-md-25 mvt-lg-25">
									<div class="mvt-footer-content-item">
										<div class="mvt-footer-content-title">other</div>
										<div class="mvt-footer-content-text">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat.
										</div>
									</div>
								</div>
								<div class="mvt-xs-100 mvt-sm-50 mvt-md-25 mvt-lg-25">
									<div class="mvt-footer-content-item">
										<div class="mvt-footer-content-title">contact</div>
										<div class="mvt-footer-content-text">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat.
										</div>
									</div>
								</div>
								<div class="mvt-xs-100 mvt-sm-100 mvt-md-50 mvt-lg-50">
									<div class="mvt-footer-content-item">
										<div class="mvt-footer-content-title">awards</div>
										<div class="mvt-wrapper">
											<div class="mvt-xs-25 mvt-sm-25 mvt-md-25 mvt-lg-25">
												<div class="mvt-footer-content-image">
													<img src="https://s3-us-west-2.amazonaws.com/dr-annie/app/media/images/ama.jpg">
												</div>
											</div>
											<div class="mvt-xs-25 mvt-sm-25 mvt-md-25 mvt-lg-25">
												<div class="mvt-footer-content-image">
													<img src="https://s3-us-west-2.amazonaws.com/dr-annie/app/media/images/aafp.jpg">
												</div>
											</div>
											<div class="mvt-xs-25 mvt-sm-25 mvt-md-25 mvt-lg-25">
												<div class="mvt-footer-content-image">
													<img src="https://s3-us-west-2.amazonaws.com/dr-annie/app/media/images/top-doctor-2016.jpg">
												</div>
											</div>
											<div class="mvt-xs-25 mvt-sm-25 mvt-md-25 mvt-lg-25">
												<div class="mvt-footer-content-image">
													<img src="https://s3-us-west-2.amazonaws.com/dr-annie/app/media/images/top-doctor-2017.jpg">
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- End ~ Footer Content -->

						<!-- Start ~ Footer Subscribe -->
						<div class="mvt-footer-subscribe">
							<div class="mvt-container mvt-wrapper">
								<div class="mvt-xs-100 mvt-sm-100 mvt-md-75 mvt-lg-75">
									<div class="mvt-wrapper">
										<div class="mvt-footer-subscribe-input">
											<input type="text" placeholder="me@example.com">
										</div>
										<div class="mvt-footer-subscribe-btn mvt-wrapper">subscribe</div>
									</div>
								</div>
							</div>
						</div>
						<!-- End ~ Footer Subscribe -->

						<!-- Start ~ Footer Copyright -->
						<div class="mvt-footer-copyright mvt-wrapper">
							&copy; 2018 BarseghianMD - All Rights Reserved
						</div>
						<!-- End ~ Footer Copyright -->

					</div>
					<!-- End ~ Footer -->`;
		container.append(content);
	}

	events() {
		jQuery(document).scroll(function() {
			let pos;
			pos = jQuery(document).scrollTop();
			if(pos > 100) {
				jQuery('.mvt-header').addClass('active');
			}
			else {
				jQuery('.mvt-header').removeClass('active');
			}

			if( jQuery('.mvt-footer-content').isOnScreen() ) {
                jQuery('.mvt-footer-cta').addClass('active');
            }
            else {
                jQuery('.mvt-footer-cta').removeClass('active');
            }
		});

		setTimeout(function() {
			jQuery('.mvt-page-cover').addClass('active');
		}, 1500);
	}

	onScreen() {
        jQuery.fn.isOnScreen = function(){
            var win = jQuery(window);
            var viewport = {
                top : win.scrollTop(),
                left : win.scrollLeft()
            };
            viewport.right = viewport.left + win.width();
            viewport.bottom = viewport.top + win.height();
            var bounds = this.offset();
            bounds.right = bounds.left + this.outerWidth();
            bounds.bottom = bounds.top + this.outerHeight();
            return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
        };
	}

	disableZoom() {
    	// Disables zoom on mobile
		document.addEventListener('touchmove', function(event) {
	        event = event.originalEvent || event;
	        if (event.scale !== 1) {
	           event.preventDefault();
	        }
	    }, false);
    }

	topLoad() {
    	jQuery('html, body').animate({
	        scrollTop: jQuery('html, body').offset().top - 250
	    }, 50);
    }

}