<template>
	<el-config-provider namespace="crx">
		<div :class="$style.wrapper">panel2</div>
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
.wrapper {
	color: #2c3e50;
}
</style>
