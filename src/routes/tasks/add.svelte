<script>
	import { createTasks } from '@stores/tasks';
	import { fetchTeams } from '@stores/teams';
	import { onMount } from 'svelte';
	import InlineSVG from 'svelte-inline-svg';
	import { goto } from '$app/navigation';
	import Inputs from '@components/inputs.svelte';

	onMount(async () => {
		teams = await fetchTeams();
	});

	let taskState = {};
	let teams = [];
	let unwindTeam = {};
	let teamsList = [];

	let initialState = {
		title: undefined,
		description: undefined,
		start: undefined,
		end: undefined,
		team: undefined
	};

	$: {
		taskState = Object.assign(taskState, { team: unwindTeam[0] });
	}

	$: {
		teamsList = teams.map(function (e) {
			let obj = {};
			obj['label'] = e.title;
			obj['value'] = e._id;

			return obj;
		});
	}

	$: taskState = initialState;

	//$: console.log('teamsList', teamsList);

	//$: console.log('data', taskState);
	//$: console.log('multiSe results', value);
	//$: console.log('Teams', teams);
</script>

<div class="container px-6 mx-auto md:max-w-5xl h-max">
	<div class="flex justify-start items-center my-12 pb-6 border-b-[1px] border-tertiary/30">
		<a
			href="/tasks"
			class="flex items-center justify-center cursor-pointer text-white bg-primary px-3 py-3 rounded-full shadow-sm"
		>
			<InlineSVG class=" w-[20px] h-[20px]" src="/icons/arrow-left-solid.svg" />
		</a>
		<h1 class="text-secondary text-3xl  font-bold ml-6">Add Task</h1>
	</div>

	<div class="w-full bg-white rounded-xl p-6 shadow-lg mb-6">
		<form
			on:submit|preventDefault={async () => {
				await createTasks(taskState);
				await goto('/tasks');
			}}
			class="grid grid-cols-1 md:grid-cols-12 gap-x-8"
		>
			<div class="col-span-1 md:col-span-12">
				<Inputs
					class="mb-4"
					label="Title"
					name="title"
					type="text"
					required={true}
					bind:value={taskState.title}
				/>
			</div>
			<div class="col-span-1 md:col-span-12">
				<Inputs
					class="mb-4"
					label="Description"
					name="description"
					textarea={true}
					rows="6"
					required={true}
					bind:value={taskState.description}
				/>
			</div>
			<div class="col-span-1 md:col-span-12 mb-4">
				<Inputs
					class="mb-4"
					label="Team"
					select={true}
					multiselect={null}
					options={teamsList}
					bind:selectedValues={unwindTeam}
				/>
			</div>
			<div class="col-span-1 md:col-span-6">
				<Inputs
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
