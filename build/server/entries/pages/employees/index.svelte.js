import { c as create_ssr_component, v as validate_component } from "../../../_app/immutable/chunks/index-620e69df.js";
import "../../../_app/immutable/chunks/login-378cee40.js";
import { T as Table } from "../../../_app/immutable/chunks/Table-a3e1d30b.js";
import "../../../_app/immutable/chunks/inline-svg-6543f82a.js";
const Employees = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let results = [];
  let config = {
    param: "employees",
    paramFetch: "employees",
    actions: true,
    route: "employees",
    fields: [
      {
        name: "Grupo 1",
        type: "group",
        align: "start",
        keys: [{ type: "titleEmployees", align: "start" }]
      },
      {
        name: "Grupo 2",
        type: "group",
        align: "start",
        keys: [
          {
            name: "Team(s)",
            type: "Array",
            key: "team"
          },
          {
            name: "Role(s)",
            type: "Array",
            key: "roles"
          }
        ]
      }
    ]
  };
  return `<div class="${"container px-6 md:max-w-5xl mx-auto h-max"}"><div class="${"flex justify-center md:justify-start my-12 pb-6 border-b-[1px] border-tertiary/30"}"><h1 class="${"text-secondary text-3xl font-bold"}">Employees</h1></div>

	<div class="${"w-full bg-white rounded-xl p-6 shadow-lg mb-6"}"><a href="${"/employees/add"}" class="${"flex justify-center mb-6"}"><button class="${"bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center"}">Add</button></a>
		<div class="${"relative overflow-x-auto px-0"}">${validate_component(Table, "Table").$$render($$result, { config, results }, {}, {})}</div></div></div>`;
});
export {
  Employees as default
};
