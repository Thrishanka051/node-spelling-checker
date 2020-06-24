import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, g as globals, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, h as detach_dev, j as claim_space, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, o as set_input_value, p as listen_dev, q as set_data_dev, r as noop, u as run_all } from './client.fd81b05a.js';

/* src/routes/index.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/routes/index.svelte";

// (124:4) {:else}
function create_else_block(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("No words entered yet!");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "No words entered yet!");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(124:4) {:else}",
		ctx
	});

	return block;
}

// (122:4) {#if input.length != 0}
function create_if_block(ctx) {
	let t_value = /*formatWords*/ ctx[1](/*input*/ ctx[0]).map(func) + "";
	let t;

	const block = {
		c: function create() {
			t = text(t_value);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, t_value);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*input*/ 1 && t_value !== (t_value = /*formatWords*/ ctx[1](/*input*/ ctx[0]).map(func) + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(122:4) {#if input.length != 0}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div10;
	let header;
	let ul;
	let a0;
	let t0;
	let t1;
	let h1;
	let t2;
	let t3;
	let div0;
	let t4;
	let t5;
	let div1;
	let h50;
	let t6;
	let t7;
	let t8;
	let t9;
	let br;
	let t10;
	let form;
	let input0;
	let t11;
	let input1;
	let t12;
	let div3;
	let div2;
	let span;
	let t13;
	let textarea;
	let t14;
	let div4;
	let button;
	let t15;
	let t16;
	let div9;
	let div8;
	let div5;
	let h51;
	let a1;
	let t17;
	let t18;
	let div7;
	let div6;
	let mounted;
	let dispose;

	function select_block_type(ctx, dirty) {
		if (/*input*/ ctx[0].length != 0) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			div10 = element("div");
			header = element("header");
			ul = element("ul");
			a0 = element("a");
			t0 = text("Add Words");
			t1 = space();
			h1 = element("h1");
			t2 = text("Spelling Checker");
			t3 = space();
			div0 = element("div");
			t4 = text("All words are correct!");
			t5 = space();
			div1 = element("div");
			h50 = element("h5");
			t6 = text("These words are not in the library:");
			t7 = space();
			t8 = text(/*input*/ ctx[0]);
			t9 = space();
			br = element("br");
			t10 = space();
			form = element("form");
			input0 = element("input");
			t11 = space();
			input1 = element("input");
			t12 = space();
			div3 = element("div");
			div2 = element("div");
			span = element("span");
			t13 = space();
			textarea = element("textarea");
			t14 = space();
			div4 = element("div");
			button = element("button");
			t15 = text("Check");
			t16 = space();
			div9 = element("div");
			div8 = element("div");
			div5 = element("div");
			h51 = element("h5");
			a1 = element("a");
			t17 = text("Words entered:");
			t18 = space();
			div7 = element("div");
			div6 = element("div");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			div10 = claim_element(nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			header = claim_element(div10_nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			ul = claim_element(header_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			a0 = claim_element(ul_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t0 = claim_text(a0_nodes, "Add Words");
			a0_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			header_nodes.forEach(detach_dev);
			t1 = claim_space(div10_nodes);
			h1 = claim_element(div10_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, "Spelling Checker");
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(div10_nodes);
			div0 = claim_element(div10_nodes, "DIV", { class: true, role: true });
			var div0_nodes = children(div0);
			t4 = claim_text(div0_nodes, "All words are correct!");
			div0_nodes.forEach(detach_dev);
			t5 = claim_space(div10_nodes);
			div1 = claim_element(div10_nodes, "DIV", { class: true, role: true });
			var div1_nodes = children(div1);
			h50 = claim_element(div1_nodes, "H5", {});
			var h50_nodes = children(h50);
			t6 = claim_text(h50_nodes, "These words are not in the library:");
			h50_nodes.forEach(detach_dev);
			t7 = claim_space(div1_nodes);
			t8 = claim_text(div1_nodes, /*input*/ ctx[0]);
			t9 = claim_space(div1_nodes);
			br = claim_element(div1_nodes, "BR", {});
			t10 = claim_space(div1_nodes);
			form = claim_element(div1_nodes, "FORM", { action: true });
			var form_nodes = children(form);
			input0 = claim_element(form_nodes, "INPUT", { type: true, value: true });
			t11 = claim_space(form_nodes);
			input1 = claim_element(form_nodes, "INPUT", { type: true, class: true, value: true });
			form_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t12 = claim_space(div10_nodes);
			div3 = claim_element(div10_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			span = claim_element(div2_nodes, "SPAN", {});
			children(span).forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t13 = claim_space(div3_nodes);

			textarea = claim_element(div3_nodes, "TEXTAREA", {
				class: true,
				"aria-label": true,
				placeholder: true
			});

			children(textarea).forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t14 = claim_space(div10_nodes);
			div4 = claim_element(div10_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			button = claim_element(div4_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			t15 = claim_text(button_nodes, "Check");
			button_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t16 = claim_space(div10_nodes);
			div9 = claim_element(div10_nodes, "DIV", { id: true });
			var div9_nodes = children(div9);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div5 = claim_element(div8_nodes, "DIV", { class: true, id: true });
			var div5_nodes = children(div5);
			h51 = claim_element(div5_nodes, "H5", { class: true });
			var h51_nodes = children(h51);

			a1 = claim_element(h51_nodes, "A", {
				class: true,
				"data-toggle": true,
				"data-target": true,
				"aria-expanded": true,
				"aria-controls": true
			});

			var a1_nodes = children(a1);
			t17 = claim_text(a1_nodes, "Words entered:");
			a1_nodes.forEach(detach_dev);
			h51_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t18 = claim_space(div8_nodes);

			div7 = claim_element(div8_nodes, "DIV", {
				id: true,
				class: true,
				"aria-labelledby": true,
				"data-parent": true
			});

			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			if_block.l(div6_nodes);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a0, "href", "/add");
			attr_dev(a0, "class", "btn btn-bd-download d-none d-lg-inline-block add-item");
			add_location(a0, file, 71, 2, 1601);
			attr_dev(ul, "class", "navbar-nav flex-row ml-md-auto d-none d-md-flex");
			add_location(ul, file, 69, 2, 1536);
			attr_dev(header, "class", "navbar");
			add_location(header, file, 68, 1, 1510);
			attr_dev(h1, "class", "text-center heading");
			add_location(h1, file, 78, 1, 1722);
			attr_dev(div0, "class", "alert alert-success words-status");
			attr_dev(div0, "role", "alert");
			add_location(div0, file, 82, 1, 1813);
			add_location(h50, file, 87, 2, 1958);
			add_location(br, file, 89, 2, 2015);
			attr_dev(input0, "type", "hidden");
			input0.value = "Salam, papalam, xuy, pizda";
			add_location(input0, file, 91, 2, 2046);
			attr_dev(input1, "type", "submit");
			attr_dev(input1, "class", "btn btn-outline-primary submit-btn");
			input1.value = "Add these words";
			add_location(input1, file, 92, 2, 2106);
			attr_dev(form, "action", "/add");
			add_location(form, file, 90, 2, 2023);
			attr_dev(div1, "class", "alert alert-danger");
			attr_dev(div1, "role", "alert");
			add_location(div1, file, 86, 1, 1910);
			add_location(span, file, 98, 4, 2282);
			attr_dev(div2, "class", "input-group-prepend");
			add_location(div2, file, 97, 2, 2244);
			attr_dev(textarea, "class", "form-control");
			attr_dev(textarea, "aria-label", "With textarea");
			attr_dev(textarea, "placeholder", "Enter your text here.");
			add_location(textarea, file, 100, 2, 2307);
			attr_dev(div3, "class", "input-group");
			add_location(div3, file, 96, 1, 2216);
			attr_dev(button, "type", "button");
			attr_dev(button, "class", "btn btn-outline-primary text-center check-button");
			add_location(button, file, 103, 2, 2487);
			attr_dev(div4, "class", "button-container text-center");
			add_location(div4, file, 102, 1, 2442);
			attr_dev(a1, "class", "btn btn-link svelte-1brt2y3");
			attr_dev(a1, "data-toggle", "collapse");
			attr_dev(a1, "data-target", "#collapseOne");
			attr_dev(a1, "aria-expanded", "true");
			attr_dev(a1, "aria-controls", "collapseOne");
			add_location(a1, file, 115, 4, 2772);
			attr_dev(h51, "class", "mb-0");
			add_location(h51, file, 114, 3, 2750);
			attr_dev(div5, "class", "card-header");
			attr_dev(div5, "id", "headingOne");
			add_location(div5, file, 113, 3, 2705);
			attr_dev(div6, "class", "card-body");
			add_location(div6, file, 120, 3, 3039);
			attr_dev(div7, "id", "collapseOne");
			attr_dev(div7, "class", "collapse show");
			attr_dev(div7, "aria-labelledby", "headingOne");
			attr_dev(div7, "data-parent", "#accordion");
			add_location(div7, file, 119, 3, 2937);
			attr_dev(div8, "class", "card");
			add_location(div8, file, 112, 2, 2683);
			attr_dev(div9, "id", "accordion");
			add_location(div9, file, 111, 1, 2660);
			attr_dev(div10, "class", "container");
			add_location(div10, file, 66, 0, 1468);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div10, anchor);
			append_dev(div10, header);
			append_dev(header, ul);
			append_dev(ul, a0);
			append_dev(a0, t0);
			append_dev(div10, t1);
			append_dev(div10, h1);
			append_dev(h1, t2);
			append_dev(div10, t3);
			append_dev(div10, div0);
			append_dev(div0, t4);
			append_dev(div10, t5);
			append_dev(div10, div1);
			append_dev(div1, h50);
			append_dev(h50, t6);
			append_dev(div1, t7);
			append_dev(div1, t8);
			append_dev(div1, t9);
			append_dev(div1, br);
			append_dev(div1, t10);
			append_dev(div1, form);
			append_dev(form, input0);
			append_dev(form, t11);
			append_dev(form, input1);
			append_dev(div10, t12);
			append_dev(div10, div3);
			append_dev(div3, div2);
			append_dev(div2, span);
			append_dev(div3, t13);
			append_dev(div3, textarea);
			set_input_value(textarea, /*input*/ ctx[0]);
			append_dev(div10, t14);
			append_dev(div10, div4);
			append_dev(div4, button);
			append_dev(button, t15);
			append_dev(div10, t16);
			append_dev(div10, div9);
			append_dev(div9, div8);
			append_dev(div8, div5);
			append_dev(div5, h51);
			append_dev(h51, a1);
			append_dev(a1, t17);
			append_dev(div8, t18);
			append_dev(div8, div7);
			append_dev(div7, div6);
			if_block.m(div6, null);

			if (!mounted) {
				dispose = [
					listen_dev(textarea, "input", /*textarea_input_handler*/ ctx[3]),
					listen_dev(button, "click", /*checkWords*/ ctx[2], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*input*/ 1) set_data_dev(t8, /*input*/ ctx[0]);

			if (dirty & /*input*/ 1) {
				set_input_value(textarea, /*input*/ ctx[0]);
			}

			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(div6, null);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div10);
			if_block.d();
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const func = word => " " + word;

function instance($$self, $$props, $$invalidate) {
	let input = "";

	let getLettersOnly = word => {
		// Replace all non-numeric 
		return word.replace(/[^a-zA-Z_]/g, "").toLowerCase();
	};

	let splitWords = words => {
		// Use regular expression to split by comma or whitespace
		return words.split(/[. ,:]+/);
	}; // return words.split(/(?:,| )+/);  found this on the web 

	let formatWords = str => {
		return splitWords(str).map(getLettersOnly).filter(Boolean);
	};

	let checkWords = () => {
		// TODO: ajax request
		fetch("", {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, *cors, same-origin
			cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
			credentials: "same-origin", // include, *same-origin, omit
			headers: { "Content-Type": "application/json" }, // 'Content-Type': 'application/x-www-form-urlencoded',
			redirect: "follow", // manual, *follow, error
			referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: JSON.stringify(data), // body data type must match "Content-Type" header
			
		}).then(res => res.json()).then(data => console.log(data));
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);

	function textarea_input_handler() {
		input = this.value;
		$$invalidate(0, input);
	}

	$$self.$capture_state = () => ({
		input,
		getLettersOnly,
		splitWords,
		formatWords,
		checkWords
	});

	$$self.$inject_state = $$props => {
		if ("input" in $$props) $$invalidate(0, input = $$props.input);
		if ("getLettersOnly" in $$props) getLettersOnly = $$props.getLettersOnly;
		if ("splitWords" in $$props) splitWords = $$props.splitWords;
		if ("formatWords" in $$props) $$invalidate(1, formatWords = $$props.formatWords);
		if ("checkWords" in $$props) $$invalidate(2, checkWords = $$props.checkWords);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [input, formatWords, checkWords, textarea_input_handler];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNmY1OGQ0NTAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuPHNjcmlwdD5cbmxldCBpbnB1dCA9ICcnO1xuXG5sZXQgZ2V0TGV0dGVyc09ubHkgPSAod29yZCkgPT4ge1xuXHQvLyBSZXBsYWNlIGFsbCBub24tbnVtZXJpYyBcblx0cmV0dXJuIHdvcmQucmVwbGFjZSgvW15hLXpBLVpfXS9nLCAnJykudG9Mb3dlckNhc2UoKTtcbn1cblxubGV0IHNwbGl0V29yZHMgPSAod29yZHMpID0+IHtcblx0Ly8gVXNlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBzcGxpdCBieSBjb21tYSBvciB3aGl0ZXNwYWNlXG5cdHJldHVybiB3b3Jkcy5zcGxpdCgvWy4gLDpdKy8pXG5cdC8vIHJldHVybiB3b3Jkcy5zcGxpdCgvKD86LHwgKSsvKTsgIGZvdW5kIHRoaXMgb24gdGhlIHdlYiBcbn1cblxubGV0IGZvcm1hdFdvcmRzID0gKHN0cikgPT4ge1xuXHRyZXR1cm4gc3BsaXRXb3JkcyhzdHIpLm1hcChnZXRMZXR0ZXJzT25seSkuZmlsdGVyKEJvb2xlYW4pO1xufVxuXG5sZXQgY2hlY2tXb3JkcyA9ICgpID0+IHtcbiAgICAvLyBUT0RPOiBhamF4IHJlcXVlc3RcbiAgICBmZXRjaCgnJywge1xuXHRcdG1ldGhvZDogJ1BPU1QnLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuXHRcdG1vZGU6ICdjb3JzJywgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXG5cdFx0Y2FjaGU6ICduby1jYWNoZScsIC8vICpkZWZhdWx0LCBuby1jYWNoZSwgcmVsb2FkLCBmb3JjZS1jYWNoZSwgb25seS1pZi1jYWNoZWRcblx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XG5cdFx0aGVhZGVyczoge1xuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHQvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG5cdFx0fSxcblx0XHRyZWRpcmVjdDogJ2ZvbGxvdycsIC8vIG1hbnVhbCwgKmZvbGxvdywgZXJyb3Jcblx0XHRyZWZlcnJlclBvbGljeTogJ25vLXJlZmVycmVyJywgLy8gbm8tcmVmZXJyZXIsICpuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZSwgb3JpZ2luLCBvcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4sIHNhbWUtb3JpZ2luLCBzdHJpY3Qtb3JpZ2luLCBzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luLCB1bnNhZmUtdXJsXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSkgLy8gYm9keSBkYXRhIHR5cGUgbXVzdCBtYXRjaCBcIkNvbnRlbnQtVHlwZVwiIGhlYWRlclxuXHR9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuXHQudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxufVxuXG5cbjwvc2NyaXB0PlxuXG5cbjxzdHlsZT5cblxuYS5idG4uYnRuLWxpbmt7XG5cdGNvbG9yOiAjMDA3YmZmO1xufVxuXG5hLmJ0bi5idG4tbGluazpob3Zlcntcblx0YmFja2dyb3VuZDogI2Y4ZjhmODtcblxufVxuXG5hLmJ0bi5idG4tbGluazphY3RpdmV7XG5cdGJhY2tncm91bmQ6ICNmOGY4Zjg7IFxufVxuYS5idG4uYnRuLWxpbms6Zm9jdXN7XG5cdGJhY2tncm91bmQ6ICNmOGY4Zjg7XG5cdGJvcmRlcjogbm9uZTtcblx0Ym94LXNoYWRvdzogbm9uZTtcbn1cblxuXG5cbiBcbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICBcblx0PGhlYWRlciBjbGFzcz1cIm5hdmJhclwiPlxuXHRcdDx1bCBjbGFzcz1cIm5hdmJhci1uYXYgZmxleC1yb3cgbWwtbWQtYXV0byBkLW5vbmUgZC1tZC1mbGV4XCI+IFxuXG5cdFx0PGEgaHJlZj1cIi9hZGRcIiBjbGFzcz1cImJ0biBidG4tYmQtZG93bmxvYWQgZC1ub25lIGQtbGctaW5saW5lLWJsb2NrIGFkZC1pdGVtXCI+XG5cdFx0XHRBZGQgV29yZHMgXG5cdFx0PC9hPlxuXHRcdDwvdWw+XG5cdDwvaGVhZGVyPlxuXG5cblx0PGgxIGNsYXNzPVwidGV4dC1jZW50ZXIgaGVhZGluZ1wiPlNwZWxsaW5nIENoZWNrZXI8L2gxPlxuXHQ8IS0tIElmIGFsbCB3b3JkcyBhcmUgcmlnaHQ6IC0tPlxuXG5cblx0PGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3Mgd29yZHMtc3RhdHVzXCIgcm9sZT1cImFsZXJ0XCI+XG5cdFx0QWxsIHdvcmRzIGFyZSBjb3JyZWN0IVxuXHQ8L2Rpdj5cblx0XHRcblx0PGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxuXHRcdDxoNT5UaGVzZSB3b3JkcyBhcmUgbm90IGluIHRoZSBsaWJyYXJ5OjwvaDU+XG5cdFx0e2lucHV0fVxuXHRcdDxicj4gXG5cdFx0PGZvcm0gYWN0aW9uPVwiL2FkZFwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJTYWxhbSwgcGFwYWxhbSwgeHV5LCBwaXpkYVwiID5cblx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgc3VibWl0LWJ0blwiIHZhbHVlPVwiQWRkIHRoZXNlIHdvcmRzXCI+XG5cdFx0PC9mb3JtPiBcblx0PC9kaXY+XG5cblx0PGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG5cdFx0PGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cblx0XHQgIDxzcGFuPjwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0XHQ8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBiaW5kOnZhbHVlPXtpbnB1dH0gYXJpYS1sYWJlbD1cIldpdGggdGV4dGFyZWFcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgdGV4dCBoZXJlLlwiPjwvdGV4dGFyZWE+XG5cdDwvZGl2PiBcblx0PGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXIgdGV4dC1jZW50ZXJcIj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IHRleHQtY2VudGVyIGNoZWNrLWJ1dHRvblwiIG9uOmNsaWNrPXtjaGVja1dvcmRzfT5DaGVjazwvYnV0dG9uPlxuXHQ8L2Rpdj5cblxuXG5cblxuXHRcblx0PCEtLSBTaG93IG9ubHkgaWYgd29yZHMgYXJlIGVudGVyZWQgLS0+IFxuXHQ8ZGl2IGlkPVwiYWNjb3JkaW9uXCI+XG5cdFx0PGRpdiBjbGFzcz1cImNhcmRcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiIGlkPVwiaGVhZGluZ09uZVwiPlxuXHRcdFx0PGg1IGNsYXNzPVwibWItMFwiPlxuXHRcdFx0XHQ8YSBjbGFzcz1cImJ0biBidG4tbGlua1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZU9uZVwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlT25lXCI+V29yZHMgZW50ZXJlZDo8L2E+XG5cdFx0XHQ8L2g1PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgaWQ9XCJjb2xsYXBzZU9uZVwiIGNsYXNzPVwiY29sbGFwc2Ugc2hvd1wiIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdPbmVcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cblx0XHRcdFx0eyNpZiBpbnB1dC5sZW5ndGggIT0gMH1cblx0XHRcdFx0e2Zvcm1hdFdvcmRzKGlucHV0KS5tYXAoKHdvcmQpID0+ICcgJyArIHdvcmQpfVxuXHRcdFx0XHR7OmVsc2V9XG5cdFx0XHRcdE5vIHdvcmRzIGVudGVyZWQgeWV0IVxuXHRcdFx0XHR7L2lmfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+IFxuXHRcblxuXG5cbjwvZGl2PiAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkEwSEssR0FBVyxjQUFDLEdBQUssS0FBRSxHQUFHOzs7Ozs7Ozs7Ozs7OztxRUFBdEIsR0FBVyxjQUFDLEdBQUssS0FBRSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQURsQixHQUFLLElBQUMsTUFBTSxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBakN2QixHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0FBTCxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBWXFDLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQUd5QyxHQUFVOzs7Ozs7O3VEQWZsRyxHQUFLOzs7d0NBWXFDLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQXNCckIsSUFBSSxJQUFLLEdBQUcsR0FBRyxJQUFJOzs7S0F4SDVDLEtBQUssR0FBRyxFQUFFOztLQUVWLGNBQWMsR0FBSSxJQUFJOztTQUVsQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUUsV0FBVzs7O0tBRy9DLFVBQVUsR0FBSSxLQUFLOztTQUVmLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUzs7O0tBSXpCLFdBQVcsR0FBSSxHQUFHO1NBQ2QsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxPQUFPOzs7S0FHdEQsVUFBVTs7RUFFVixLQUFLLENBQUMsRUFBRTtHQUNWLE1BQU0sRUFBRSxNQUFNO0dBQ2QsSUFBSSxFQUFFLE1BQU07R0FDWixLQUFLLEVBQUUsVUFBVTtHQUNqQixXQUFXLEVBQUUsYUFBYTtHQUMxQixPQUFPLElBQ1AsY0FBYyxFQUFFLGtCQUFrQjtHQUdsQyxRQUFRLEVBQUUsUUFBUTtHQUNsQixjQUFjLEVBQUUsYUFBYTtHQUM3QixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJOztLQUN2QixJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQ3RCLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7O0VBa0VjLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
