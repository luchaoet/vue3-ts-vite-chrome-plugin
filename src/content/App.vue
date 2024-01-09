<template>
	<el-config-provider namespace="crx">
		<div :class="$style.wrapper">
			<p>test</p>
			<el-button>test</el-button>

			<HelloWorld />
		</div>
	</el-config-provider>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import HelloWorld from "../components/HelloWorld.vue";

export default defineComponent({
	components: { HelloWorld },
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

<style lang="scss">
@import "element-plus/theme-chalk/src/index.scss";
@import "@luchao/base-sass";
</style>

<style lang="scss" module>
.wrapper {
	position: fixed;
	width: 200px;
	height: 200px;
	border-radius: 4px;
	right: 0;
	top: 0;
	z-index: 99999;
	background-color: #ff7700;
}
</style>
