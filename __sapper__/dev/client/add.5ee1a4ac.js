import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as set_input_value, o as listen_dev, q as noop, p as set_data_dev } from './client.999a6423.js';

/* src/routes/add.svelte generated by Svelte v3.23.2 */

const file = "src/routes/add.svelte";

// (115:4) {:else}
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
		source: "(115:4) {:else}",
		ctx
	});

	return block;
}

// (113:4) {#if input.length != 0}
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
		source: "(113:4) {#if input.length != 0}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div12;
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
	let t6;
	let t7;
	let div2;
	let h50;
	let t8;
	let t9;
	let t10;
	let form;
	let div4;
	let div3;
	let span;
	let t11;
	let textarea;
	let t12;
	let div5;
	let label;
	let t13;
	let t14;
	let input0;
	let t15;
	let div6;
	let input1;
	let t16;
	let div11;
	let div10;
	let div7;
	let h51;
	let a1;
	let t17;
	let t18;
	let div9;
	let div8;
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
			div12 = element("div");
			header = element("header");
			ul = element("ul");
			a0 = element("a");
			t0 = text("Check Words");
			t1 = space();
			h1 = element("h1");
			t2 = text("Add to the dictionary");
			t3 = space();
			div0 = element("div");
			t4 = text("New words are now added!");
			t5 = space();
			div1 = element("div");
			t6 = text("Failed to add words! Try again.");
			t7 = space();
			div2 = element("div");
			h50 = element("h5");
			t8 = text("These words are already in the dictionary:");
			t9 = text("\n\n        Salam, papalam, xuy, pizda");
			t10 = space();
			form = element("form");
			div4 = element("div");
			div3 = element("div");
			span = element("span");
			t11 = space();
			textarea = element("textarea");
			t12 = space();
			div5 = element("div");
			label = element("label");
			t13 = text("File with words (seperated by comma or whitespaces)");
			t14 = space();
			input0 = element("input");
			t15 = space();
			div6 = element("div");
			input1 = element("input");
			t16 = space();
			div11 = element("div");
			div10 = element("div");
			div7 = element("div");
			h51 = element("h5");
			a1 = element("a");
			t17 = text("Words entered:");
			t18 = space();
			div9 = element("div");
			div8 = element("div");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			div12 = claim_element(nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			header = claim_element(div12_nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			ul = claim_element(header_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			a0 = claim_element(ul_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t0 = claim_text(a0_nodes, "Check Words");
			a0_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			header_nodes.forEach(detach_dev);
			t1 = claim_space(div12_nodes);
			h1 = claim_element(div12_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, "Add to the dictionary");
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(div12_nodes);
			div0 = claim_element(div12_nodes, "DIV", { class: true, role: true });
			var div0_nodes = children(div0);
			t4 = claim_text(div0_nodes, "New words are now added!");
			div0_nodes.forEach(detach_dev);
			t5 = claim_space(div12_nodes);
			div1 = claim_element(div12_nodes, "DIV", { class: true, role: true });
			var div1_nodes = children(div1);
			t6 = claim_text(div1_nodes, "Failed to add words! Try again.");
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div12_nodes);
			div2 = claim_element(div12_nodes, "DIV", { class: true, role: true });
			var div2_nodes = children(div2);
			h50 = claim_element(div2_nodes, "H5", {});
			var h50_nodes = children(h50);
			t8 = claim_text(h50_nodes, "These words are already in the dictionary:");
			h50_nodes.forEach(detach_dev);
			t9 = claim_text(div2_nodes, "\n\n        Salam, papalam, xuy, pizda");
			div2_nodes.forEach(detach_dev);
			t10 = claim_space(div12_nodes);
			form = claim_element(div12_nodes, "FORM", { action: true });
			var form_nodes = children(form);
			div4 = claim_element(form_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			span = claim_element(div3_nodes, "SPAN", {});
			children(span).forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t11 = claim_space(div4_nodes);

			textarea = claim_element(div4_nodes, "TEXTAREA", {
				class: true,
				"aria-label": true,
				placeholder: true
			});

			children(textarea).forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t12 = claim_space(form_nodes);
			div5 = claim_element(form_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			label = claim_element(div5_nodes, "LABEL", { for: true });
			var label_nodes = children(label);
			t13 = claim_text(label_nodes, "File with words (seperated by comma or whitespaces)");
			label_nodes.forEach(detach_dev);
			t14 = claim_space(div5_nodes);
			input0 = claim_element(div5_nodes, "INPUT", { type: true, class: true, id: true });
			div5_nodes.forEach(detach_dev);
			t15 = claim_space(form_nodes);
			div6 = claim_element(form_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			input1 = claim_element(div6_nodes, "INPUT", { type: true, class: true, value: true });
			div6_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			t16 = claim_space(div12_nodes);
			div11 = claim_element(div12_nodes, "DIV", { id: true });
			var div11_nodes = children(div11);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div7 = claim_element(div10_nodes, "DIV", { class: true, id: true });
			var div7_nodes = children(div7);
			h51 = claim_element(div7_nodes, "H5", { class: true });
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
			div7_nodes.forEach(detach_dev);
			t18 = claim_space(div10_nodes);

			div9 = claim_element(div10_nodes, "DIV", {
				id: true,
				class: true,
				"aria-labelledby": true,
				"data-parent": true
			});

			var div9_nodes = children(div9);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			if_block.l(div8_nodes);
			div8_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a0, "href", "/");
			attr_dev(a0, "class", "btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3 add-item");
			add_location(a0, file, 52, 8, 838);
			attr_dev(ul, "class", "navbar-nav flex-row ml-md-auto d-none d-md-flex");
			add_location(ul, file, 50, 8, 767);
			attr_dev(header, "class", "navbar");
			add_location(header, file, 49, 4, 735);
			attr_dev(h1, "class", "text-center heading");
			add_location(h1, file, 59, 4, 1005);
			attr_dev(div0, "class", "alert alert-success words-status");
			attr_dev(div0, "role", "alert");
			add_location(div0, file, 63, 4, 1107);
			attr_dev(div1, "class", "alert alert-danger words-status");
			attr_dev(div1, "role", "alert");
			add_location(div1, file, 68, 4, 1221);
			add_location(h50, file, 74, 8, 1389);
			attr_dev(div2, "class", "alert alert-info");
			attr_dev(div2, "role", "alert");
			add_location(div2, file, 73, 4, 1337);
			add_location(span, file, 83, 12, 1609);
			attr_dev(div3, "class", "input-group-prepend");
			add_location(div3, file, 82, 12, 1563);
			attr_dev(textarea, "class", "form-control");
			attr_dev(textarea, "aria-label", "With textarea");
			attr_dev(textarea, "placeholder", "Enter your words (seperated by comma or whitespace).");
			add_location(textarea, file, 85, 12, 1654);
			attr_dev(div4, "class", "input-group");
			add_location(div4, file, 81, 8, 1525);
			attr_dev(label, "for", "exampleFormControlFile1");
			add_location(label, file, 89, 8, 1868);
			attr_dev(input0, "type", "file");
			attr_dev(input0, "class", "form-control-file");
			attr_dev(input0, "id", "exampleFormControlFile1");
			add_location(input0, file, 90, 8, 1973);
			attr_dev(div5, "class", "form-group");
			add_location(div5, file, 88, 8, 1835);
			attr_dev(input1, "type", "submit");
			attr_dev(input1, "class", "btn btn-outline-primary text-center check-button");
			input1.value = "Add Words";
			add_location(input1, file, 94, 12, 2127);
			attr_dev(div6, "class", "button-container text-center");
			add_location(div6, file, 93, 8, 2072);
			attr_dev(form, "action", "/");
			add_location(form, file, 79, 4, 1494);
			attr_dev(a1, "class", "btn btn-link svelte-1q1ggqx");
			attr_dev(a1, "data-toggle", "collapse");
			attr_dev(a1, "data-target", "#collapseOne");
			attr_dev(a1, "aria-expanded", "true");
			attr_dev(a1, "aria-controls", "collapseOne");
			add_location(a1, file, 106, 4, 2414);
			attr_dev(h51, "class", "mb-0");
			add_location(h51, file, 105, 3, 2392);
			attr_dev(div7, "class", "card-header");
			attr_dev(div7, "id", "headingOne");
			add_location(div7, file, 104, 3, 2347);
			attr_dev(div8, "class", "card-body");
			add_location(div8, file, 111, 3, 2681);
			attr_dev(div9, "id", "collapseOne");
			attr_dev(div9, "class", "collapse show");
			attr_dev(div9, "aria-labelledby", "headingOne");
			attr_dev(div9, "data-parent", "#accordion");
			add_location(div9, file, 110, 3, 2579);
			attr_dev(div10, "class", "card");
			add_location(div10, file, 103, 2, 2325);
			attr_dev(div11, "id", "accordion");
			add_location(div11, file, 102, 1, 2302);
			attr_dev(div12, "class", "container");
			add_location(div12, file, 47, 0, 702);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div12, anchor);
			append_dev(div12, header);
			append_dev(header, ul);
			append_dev(ul, a0);
			append_dev(a0, t0);
			append_dev(div12, t1);
			append_dev(div12, h1);
			append_dev(h1, t2);
			append_dev(div12, t3);
			append_dev(div12, div0);
			append_dev(div0, t4);
			append_dev(div12, t5);
			append_dev(div12, div1);
			append_dev(div1, t6);
			append_dev(div12, t7);
			append_dev(div12, div2);
			append_dev(div2, h50);
			append_dev(h50, t8);
			append_dev(div2, t9);
			append_dev(div12, t10);
			append_dev(div12, form);
			append_dev(form, div4);
			append_dev(div4, div3);
			append_dev(div3, span);
			append_dev(div4, t11);
			append_dev(div4, textarea);
			set_input_value(textarea, /*input*/ ctx[0]);
			append_dev(form, t12);
			append_dev(form, div5);
			append_dev(div5, label);
			append_dev(label, t13);
			append_dev(div5, t14);
			append_dev(div5, input0);
			append_dev(form, t15);
			append_dev(form, div6);
			append_dev(div6, input1);
			append_dev(div12, t16);
			append_dev(div12, div11);
			append_dev(div11, div10);
			append_dev(div10, div7);
			append_dev(div7, h51);
			append_dev(h51, a1);
			append_dev(a1, t17);
			append_dev(div10, t18);
			append_dev(div10, div9);
			append_dev(div9, div8);
			if_block.m(div8, null);

			if (!mounted) {
				dispose = listen_dev(textarea, "input", /*textarea_input_handler*/ ctx[2]);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
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
					if_block.m(div8, null);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div12);
			if_block.d();
			mounted = false;
			dispose();
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
		
	};

	let input = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Add> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Add", $$slots, []);

	function textarea_input_handler() {
		input = this.value;
		$$invalidate(0, input);
	}

	$$self.$capture_state = () => ({
		getLettersOnly,
		splitWords,
		formatWords,
		checkWords,
		input
	});

	$$self.$inject_state = $$props => {
		if ("getLettersOnly" in $$props) getLettersOnly = $$props.getLettersOnly;
		if ("splitWords" in $$props) splitWords = $$props.splitWords;
		if ("formatWords" in $$props) $$invalidate(1, formatWords = $$props.formatWords);
		if ("checkWords" in $$props) checkWords = $$props.checkWords;
		if ("input" in $$props) $$invalidate(0, input = $$props.input);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [input, formatWords, textarea_input_handler];
}

class Add extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Add",
			options,
			id: create_fragment.name
		});
	}
}

export default Add;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLjVlZTFhNGFjLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2FkZC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmxldCBnZXRMZXR0ZXJzT25seSA9ICh3b3JkKSA9PiB7XG5cdC8vIFJlcGxhY2UgYWxsIG5vbi1udW1lcmljIFxuXHRyZXR1cm4gd29yZC5yZXBsYWNlKC9bXmEtekEtWl9dL2csICcnKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5cblxubGV0IHNwbGl0V29yZHMgPSAod29yZHMpID0+IHtcblx0Ly8gVXNlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBzcGxpdCBieSBjb21tYSBvciB3aGl0ZXNwYWNlXG5cdHJldHVybiB3b3Jkcy5zcGxpdCgvWy4gLDpdKy8pXG5cdC8vIHJldHVybiB3b3Jkcy5zcGxpdCgvKD86LHwgKSsvKTsgIGZvdW5kIHRoaXMgb24gdGhlIHdlYiBcbn1cblxuXG5sZXQgZm9ybWF0V29yZHMgPSAoc3RyKSA9PiB7XG5cdHJldHVybiBzcGxpdFdvcmRzKHN0cikubWFwKGdldExldHRlcnNPbmx5KS5maWx0ZXIoQm9vbGVhbik7XG59XG5cblxubGV0IGNoZWNrV29yZHMgPSAoKSA9PiB7XG5cdFxufVxuXG5sZXQgaW5wdXQgPSAnJztcbjwvc2NyaXB0PlxuPHN0eWxlPlxuYS5idG4uYnRuLWxpbmt7XG5cdGNvbG9yOiAjMDA3YmZmO1xufVxuXG5hLmJ0bi5idG4tbGluazpob3Zlcntcblx0YmFja2dyb3VuZDogI2Y4ZjhmODtcblxufVxuXG5hLmJ0bi5idG4tbGluazphY3RpdmV7XG5cdGJhY2tncm91bmQ6ICNmOGY4Zjg7IFxufVxuYS5idG4uYnRuLWxpbms6Zm9jdXN7XG5cdGJhY2tncm91bmQ6ICNmOGY4Zjg7XG5cdGJvcmRlcjogbm9uZTtcblx0Ym94LXNoYWRvdzogbm9uZTtcbn1cbjwvc3R5bGU+ICAgICAgXG5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIFxuICAgIDxoZWFkZXIgY2xhc3M9XCJuYXZiYXJcIj5cbiAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBmbGV4LXJvdyBtbC1tZC1hdXRvIGQtbm9uZSBkLW1kLWZsZXhcIj4gXG5cbiAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzcz1cImJ0biBidG4tYmQtZG93bmxvYWQgZC1ub25lIGQtbGctaW5saW5lLWJsb2NrIG1iLTMgbWItbWQtMCBtbC1tZC0zIGFkZC1pdGVtXCI+XG4gICAgICAgICAgICBDaGVjayBXb3Jkc1xuICAgICAgICA8L2E+XG4gICAgICAgIDwvdWw+XG4gICAgPC9oZWFkZXI+XG5cblxuICAgIDxoMSBjbGFzcz1cInRleHQtY2VudGVyIGhlYWRpbmdcIj5BZGQgdG8gdGhlIGRpY3Rpb25hcnk8L2gxPlxuICAgIDwhLS0gSWYgYWxsIHdvcmRzIGFyZSByaWdodDogLS0+XG5cblxuICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzIHdvcmRzLXN0YXR1c1wiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICBOZXcgd29yZHMgYXJlIG5vdyBhZGRlZCFcbiAgICA8L2Rpdj5cbiAgICBcblxuICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXIgd29yZHMtc3RhdHVzXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgIEZhaWxlZCB0byBhZGQgd29yZHMhIFRyeSBhZ2Fpbi5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgPGg1PlRoZXNlIHdvcmRzIGFyZSBhbHJlYWR5IGluIHRoZSBkaWN0aW9uYXJ5OjwvaDU+XG5cbiAgICAgICAgU2FsYW0sIHBhcGFsYW0sIHh1eSwgcGl6ZGEgXG4gICAgPC9kaXY+XG5cbiAgICA8Zm9ybSBhY3Rpb249XCIvXCI+XG4gICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgYmluZDp2YWx1ZT17aW5wdXR9IGFyaWEtbGFiZWw9XCJXaXRoIHRleHRhcmVhXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHdvcmRzIChzZXBlcmF0ZWQgYnkgY29tbWEgb3Igd2hpdGVzcGFjZSkuXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+IFxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJleGFtcGxlRm9ybUNvbnRyb2xGaWxlMVwiPkZpbGUgd2l0aCB3b3JkcyAoc2VwZXJhdGVkIGJ5IGNvbW1hIG9yIHdoaXRlc3BhY2VzKTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sLWZpbGVcIiBpZD1cImV4YW1wbGVGb3JtQ29udHJvbEZpbGUxXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgdGV4dC1jZW50ZXIgY2hlY2stYnV0dG9uXCIgdmFsdWU9XCJBZGQgV29yZHNcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Zvcm0+XG5cblxuXG4gICAgXHQ8IS0tIFNob3cgb25seSBpZiB3b3JkcyBhcmUgZW50ZXJlZCAtLT4gXG5cdDxkaXYgaWQ9XCJhY2NvcmRpb25cIj5cblx0XHQ8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCIgaWQ9XCJoZWFkaW5nT25lXCI+XG5cdFx0XHQ8aDUgY2xhc3M9XCJtYi0wXCI+XG5cdFx0XHRcdDxhIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlT25lXCIgYXJpYS1leHBhbmRlZD1cInRydWVcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VPbmVcIj5Xb3JkcyBlbnRlcmVkOjwvYT5cblx0XHRcdDwvaDU+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBpZD1cImNvbGxhcHNlT25lXCIgY2xhc3M9XCJjb2xsYXBzZSBzaG93XCIgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZ09uZVwiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvblwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuXHRcdFx0XHR7I2lmIGlucHV0Lmxlbmd0aCAhPSAwfVxuXHRcdFx0XHR7Zm9ybWF0V29yZHMoaW5wdXQpLm1hcCgod29yZCkgPT4gJyAnICsgd29yZCl9XG5cdFx0XHRcdHs6ZWxzZX1cblx0XHRcdFx0Tm8gd29yZHMgZW50ZXJlZCB5ZXQhXG5cdFx0XHRcdHsvaWZ9XG5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PiBcblxuICAgIFxuXG5cblxuPC9kaXY+XG4gICAgXG4gIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFpSEssR0FBVyxjQUFDLEdBQUssS0FBRSxHQUFHOzs7Ozs7Ozs7Ozs7OztxRUFBdEIsR0FBVyxjQUFDLEdBQUssS0FBRSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFEbEIsR0FBSyxJQUFDLE1BQU0sSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBM0I2QixHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FBTCxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUE0Qi9CLElBQUksSUFBSyxHQUFHLEdBQUcsSUFBSTs7O0tBaEg1QyxjQUFjLEdBQUksSUFBSTs7U0FFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRSxFQUFFLFdBQVc7OztLQUsvQyxVQUFVLEdBQUksS0FBSzs7U0FFZixLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVM7OztLQUt6QixXQUFXLEdBQUksR0FBRztTQUNkLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsT0FBTzs7O0tBSXRELFVBQVU7Ozs7S0FJVixLQUFLLEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7RUE2RHlDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
