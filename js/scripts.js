const btnUp = {
	el: document.querySelector(".btn-up"),
	scrolling: false,
	show() {
		if (
			this.el.classList.contains("btn-up_hide") &&
			!this.el.classList.contains("btn-up_hiding")
		) {
			this.el.classList.remove("btn-up_hide");
			this.el.classList.add("btn-up_hiding");
			window.setTimeout(() => {
				this.el.classList.remove("btn-up_hiding");
			}, 300);
		}
	},
	hide() {
		if (
			!this.el.classList.contains("btn-up_hide") &&
			!this.el.classList.contains("btn-up_hiding")
		) {
			this.el.classList.add("btn-up_hiding");
			window.setTimeout(() => {
				this.el.classList.add("btn-up_hide");
				this.el.classList.remove("btn-up_hiding");
			}, 300);
		}
	},
	addEventListener() {
		window.addEventListener("scroll", () => {
			const scrollY = window.scrollY || document.documentElement.scrollTop;
			if (this.scrolling && scrollY > 0) {
				return;
			}
			this.scrolling = false;
			if (scrollY > 400) {
				this.show();
			} else {
				// иначе скроем кнопку .btn-up
				this.hide();
			}
		});
		document.querySelector(".btn-up").onclick = () => {
			this.scrolling = true;
			this.hide();
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth",
			});
		};
	},
};

btnUp.addEventListener();

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
	smoothLink.addEventListener("click", function (e) {
		e.preventDefault();
		const id = smoothLink.getAttribute("href");

		document.querySelector(id).scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
}
