<template>
  <main>
    <px-header></px-header>
    <px-assets-table></px-assets-table>
  </main>
</template>

<script>
//Importar componentes
import PxHeader from "@/components/PxHeader";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "App",
  components: {
    PxHeader,
    PxAssetsTable
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
