class Form {

	init() {
		let url, path, list;
		url = window.location.search;
		list = {
			"patient-registration":{
				"path":"patient-registration.json",
				"title":"new patient",
				"subtitle":"registration form"
			},
			"medical-records-request":{
				"path":"medical-records-request.json",
				"title":"medical records",
				"subtitle":"request form"
			},
			"xeomin-consent":{
				"path":"xeomin-consent.json",
				"title":"xeomin consent",
				"subtitle":"request form"
			},
			"xeomin-after-care":{
				"path":"xeomin-after-care.json",
				"title":"xeomin",
				"subtitle":"after care instructions"
			}
		};
		if(url.includes('?id=')) {
			path = url.replace('?id=','');
			if(list.hasOwnProperty(path)) {
				list.current = path;
				this.data = list;
				this.template();
				this.loadData(path);
			}
			else {
				window.location = 'home.html';
			}
		}
		else {
			window.location = 'home.html';
		}
	}

	template() {
		let container, content, obj = this.data, qstn = new Qstn();
		container = jQuery('.mvt-page');
		content = 	`<div class="mvt-page-cover mvt-wrapper mvt-25">
						<div class="mvt-container">
							<div class="mvt-page-cover-content">
								<div class="mvt-page-cover-title mvt-wrapper">`+obj[obj.current].title+`</div>
								<div class="mvt-page-cover-subtitle mvt-wrapper">`+obj[obj.current].subtitle+`</div>
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
	}

	loadData() {
		let obj = this.data;
		jQuery.ajax({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: 'https://s3-us-west-2.amazonaws.com/dr-annie/data/forms/'+obj[obj.current].path,
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