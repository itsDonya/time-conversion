<template>
	<main>
		<section class="flex flex-col gap-4">
			<p>کد به شماره‌ی 09123456789 ارسال شد</p>
			<CodeContainer />
			<div class="flex items-center justify-around">
				<button class="text-zinc-500">تغییر شماره همراه</button>
				<CountDown :second="12" />
			</div>
		</section>
	</main>
</template>

<script>
import CodeContainer from "./components/CodeContainer.vue";
import CountDown from "./components/CountDown.vue";
export default {
	components: {
		CodeContainer,
		CountDown,
	},
};
</script>
