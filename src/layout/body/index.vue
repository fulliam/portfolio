<template>
    <div class="layout-body">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'BodyComponent',
};
</script>

<style lang="scss">
.layout {
  &-body {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    height: 56rem;
  }
}
</style>
