<template>
	<el-config-provider namespace="crx">
		<div :class="$style.options">options</div>
		<p class="g-fs-20">选项</p>
		<el-button>test</el-button>
	</el-config-provider>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
	components: {},
	setup(props, { emit }) {
		const state = reactive({});
		const methods = reactive({});

		return {
			...toRefs(state),
			...toRefs(methods),
		};
	},
});
</script>

<style lang="scss" module>
.options {
	color: red;
}
</style>
