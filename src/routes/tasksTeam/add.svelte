<script>
	import { get } from 'svelte/store';
	import { user } from '@stores/login';
	import { createTasks, fetchTeamTasks } from '@stores/tasks';
	import InlineSVG from 'svelte-inline-svg';
	import { goto } from '$app/navigation';
	import Inputs from '@components/inputs.svelte';
	import { fetchTeamHours } from '@stores/hours';
	import { onMount } from 'svelte';

	///**VARS**///
	let userStore = get(user);

	let taskState = {};
	let employeesTeam = [];
	let tasksList = [];
	let unwindEmployee = {};

	let initialState = {
		title: undefined,
		description: undefined,
		team: userStore.body.teamAdmin,

		start: undefined,
		end: undefined
	};

	$: {
		taskState = Object.assign(taskState, { inCharge: unwindEmployee[0] });
	}

	$: taskState = initialState;

	onMount(async () => {
		let res;
		res = await fetchTeamHours();
		employeesTeam = await res.employeesTeam;
		//console.log('employeesTeam', employeesTeam);
	});

	$: {
		tasksList = employeesTeam.map(function (e) {
			let obj = {};
			obj['label'] = `${e.first_name} ${e.last_name}`;
			obj['value'] = e._id;

			return obj;
		});
	}
	//$: console.log('tasksList', tasksList);
	//$: console.log('Employee Select', unwindEmployee[0]);

	//$: console.log('Task', results);
	//$: console.log('taskState', taskState);
</script>

<div class="container md:max-w-5xl  px-4 mx-auto">
	<div class="flex justify-start items-center my-12 pb-6 border-b-[1px] border-tertiary/30">
		<a
			href="/tasksTeam"
			class="flex items-center justify-center cursor-pointer text-white bg-primary px-3 py-3 rounded-full shadow-sm"
		>
			<InlineSVG class="w-[20px] h-[20px]" src="/icons/arrow-left-solid.svg" />
		</a>
		<h1 class="text-secondary text-3xl  font-bold ml-6">Add Task</h1>
	</div>

	<div class="w-full bg-white rounded-xl p-6 shadow-sm">
		<form
			on:submit|preventDefault={async () => {
				await createTasks(taskState);
				await goto('/tasksTeam');
			}}
			class="grid grid-cols-1 md:grid-cols-12 gap-x-8"
		>
			<div class="col-span-1 md:col-span-12">
				<Inputs
					class="mb-4"
					minLength="3"
					label="Title"
					name="title"
					type="text"
					bind:value={taskState.title}
				/>
			</div>
			<div class="col-span-1 md:col-span-12">
				<Inputs
					class="mb-4"
					textarea={true}
					label="Description"
					name="description"
					rows="6"
					required={true}
					bind:value={taskState.description}
				/>
			</div>
			<div class="col-span-1 md:col-span-12 mb-4">
				<Inputs
					class="mb-4"
					label="Employee in charge"
					select={true}
					multiselect={null}
					options={tasksList}
					bind:selectedValues={unwindEmployee}
				/>
			</div>
			<div class="col-span-1 md:col-span-6">
				<Inputs
					class="mb-4"
					label="Start"
					name="start"
					type="date"
					required={true}
					bind:value={taskState.start}
				/>
			</div>
			<div class="col-span-1 md:col-span-6">
				<Inputs
					class="mb-4"
					label="End"
					name="end"
					type="date"
					required={true}
					bind:value={taskState.end}
				/>
			</div>
			<div class="col-span-1 md:col-span-12 flex justify-center">
				<button
					class="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center"
					type="submit"
				>
					<InlineSVG
						class="text-white w-[15px] h-fit mr-3"
						src="/icons/floppy-disk-solid.svg"
					/>Save</button
				>
			</div>
		</form>
	</div>
</div>
