/* jshint esversion: 6 */
"strict mode";


class navigation {
	/**
	* Get the path of the current URL
	* @return array															The page path
	*/
	get_url_path() {
		let url = window.location.pathname.split(/(?:\/|\:)+/).splice(1),
			path = [];

		$.each(url, (k, v) => {
			path.push(decodeURIComponent(v));
		})
		return path;
	}

	/**
	 * Get the current page from the current URL
	 * @uses get_url_path()
	 *
	 * @return string															The current page
	 */
	get_page() {
		let page = this.get_url_path()[0];
		return (page == "") ? "home" : page;
	}
}

export default navigation;
